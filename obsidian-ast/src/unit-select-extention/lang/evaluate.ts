import { selectAll } from "unist-util-select";
import type {
  Query, Expr, UnionExpr, IntersectExpr, ChainExpr, PrimaryExpr, Segment,
  CondExpr, CondOr, CondAnd, CondPrimary, CondAtom, CondCompare, CondSubquery, CondIn, Comparator, Op
} from "./ast";
import { expandFieldChain } from "../expand";
import {
  runAllWithin, buildParentMap, minimizeRoots, uniqueById, orderByPos
} from "../traverse";

type Ctx = { ast: any, parentMap: WeakMap<any, any | null> };

export function evaluateQuery(astRoot: any, query: Query, scopes?: any[]): any[] {
  const ctx: Ctx = { ast: astRoot, parentMap: buildParentMap(astRoot) };
  const start = scopes && scopes.length ? scopes : [astRoot];
  const out = evalExpr(query, start, ctx);
  return orderByPos(uniqueById(out));
}

function childrenOf(n: any): any[] {
  return Array.isArray(n?.children) ? n.children : [];
}

/* ---------- expr / chain ---------- */

function evalExpr(expr: Expr, input: any[], ctx: Ctx): any[] {
  return evalUnion(expr as UnionExpr, input, ctx);
}
function evalUnion(node: UnionExpr, input: any[], ctx: Ctx): any[] {
  let out: any[] = [];
  for (const term of node.terms) out = uniqueById(out.concat(evalIntersect(term, input, ctx)));
  return out;
}
function evalIntersect(node: IntersectExpr, input: any[], ctx: Ctx): any[] {
  let acc: any[] | null = null;
  for (const term of node.terms) {
    const r = evalChain(term, input, ctx);
    acc = acc == null ? r : acc.filter(x => (new Set(r)).has(x));
  }
  return acc ?? [];
}

function evalChain(node: ChainExpr, input: any[], ctx: Ctx): any[] {
  let current = evalPrimary(node.head, input, ctx, "descendants");
  for (const step of node.steps) {
    let acc: any[] = [];
    switch (step.op) {
      case ">": { // direct children
        for (const n of current) acc.push(...childrenOf(n));
        current = uniqueById(evalPrimary(step.next, acc, ctx, "descendants"));
        break;
      }
      case ">>": { // descendants (minimize overlap)
        const minimized = minimizeRoots(current, ctx.parentMap);
        for (const n of minimized) acc = acc.concat(evalPrimary(step.next, [n], ctx, "descendants"));
        current = uniqueById(acc);
        break;
      }
      case "<": { // parent
        for (const n of current) {
          const p = ctx.parentMap.get(n) ?? null;
          if (p) acc.push(p);
        }
        current = uniqueById(evalPrimary(step.next, acc, ctx, "descendants"));
        break;
      }
      case "<<": { // ancestors
        for (const n of current) {
          let p = ctx.parentMap.get(n) ?? null;
          while (p) { acc.push(p); p = ctx.parentMap.get(p) ?? null; }
        }
        current = uniqueById(evalPrimary(step.next, acc, ctx, "descendants"));
        break;
      }
      case "+": { // next sibling
        for (const n of current) {
          const p = ctx.parentMap.get(n) ?? null;
          if (!p || !Array.isArray(p.children)) continue;
          const i = p.children.indexOf(n);
          if (i >= 0 && i + 1 < p.children.length) acc.push(p.children[i + 1]);
        }
        current = uniqueById(evalPrimary(step.next, acc, ctx, "descendants"));
        break;
      }
      case "++": { // following siblings
        for (const n of current) {
          const p = ctx.parentMap.get(n) ?? null;
          if (!p || !Array.isArray(p.children)) continue;
          const i = p.children.indexOf(n);
          if (i >= 0) acc.push(...p.children.slice(i + 1));
        }
        current = uniqueById(evalPrimary(step.next, acc, ctx, "descendants"));
        break;
      }
      case "-": { // previous sibling
        for (const n of current) {
          const p = ctx.parentMap.get(n) ?? null;
          if (!p || !Array.isArray(p.children)) continue;
          const i = p.children.indexOf(n);
          if (i > 0) acc.push(p.children[i - 1]);
        }
        current = uniqueById(evalPrimary(step.next, acc, ctx, "descendants"));
        break;
      }
      case "--": { // preceding siblings
        for (const n of current) {
          const p = ctx.parentMap.get(n) ?? null;
          if (!p || !Array.isArray(p.children)) continue;
          const i = p.children.indexOf(n);
          if (i > 0) acc.push(...p.children.slice(0, i));
        }
        current = uniqueById(evalPrimary(step.next, acc, ctx, "descendants"));
        break;
      }
    }
  }
  return current;
}

/* ---------- primary / segment ---------- */

type FirstStepMode = "descendants";

function evalPrimary(node: PrimaryExpr, input: any[], ctx: Ctx, _mode: FirstStepMode): any[] {
  if (node.kind === "group") return evalExpr(node.expr, input, ctx);
  return evalSegment(node.seg, input, ctx);
}

function evalSegment(seg: Segment, scopes: any[], ctx: Ctx): any[] {
  const out: any[] = [];
  for (const scope of scopes) {
    // 1) base selection
    let baseMatches: any[] = [];
    if (seg.base === "@") {
      const hop = Math.max(1, seg.atHop ?? 1);
      let level: any[] = [scope];
      for (let i = 0; i < hop; i++) {
        const next: any[] = [];
        for (const n of level) if (Array.isArray(n?.children)) next.push(...n.children);
        level = next;
        if (!level.length) break;
      }
      baseMatches = level;
    } else if (seg.base === "*" || seg.base === ":root") {
      baseMatches = runAllWithin(scope);
    } else {
      try { baseMatches = selectAll(seg.base, scope) as any[]; }
      catch { baseMatches = []; }
    }

    // 2) field expansion (BEFORE filters)
    const expanded = seg.fields.length
      ? expandFieldChain(baseMatches, seg.fields, ctx)
      : baseMatches;

    // 3) filters on expanded nodes
    const filtered = seg.filters.length
      ? expanded.filter(n => seg.filters.every(f => evalCond(f, n, ctx)))
      : expanded;

    out.push(...filtered);
  }
  return out;
}

/* ---------- conditions ---------- */

function evalCond(node: CondExpr, n: any, ctx: Ctx): boolean {
  return evalCondOr(node as any as CondOr, n, ctx);
}
function evalCondOr(node: CondOr, n: any, ctx: Ctx): boolean {
  for (const t of node.terms) if (evalCondAnd(t, n, ctx)) return true;
  return false;
}
function evalCondAnd(node: CondAnd, n: any, ctx: Ctx): boolean {
  for (const t of node.terms) if (!evalCondPrimary(t, n, ctx)) return false;
  return true;
}
function evalCondPrimary(node: CondPrimary, n: any, ctx: Ctx): boolean {
  if (node.kind === "not") return !evalCondPrimary(node.inner, n, ctx);
  if (node.kind === "group") return evalCond(node.expr, n, ctx);
  return evalCondAtom(node as CondAtom, n, ctx);
}

function evalCondAtom(node: CondAtom, n: any, ctx: Ctx): boolean {
  switch (node.kind) {
    case "cmp": return evalCmp(node, n);
    case "subq": return evalSubq(node, n, ctx);
    case "in": return evalIn(node, n, ctx);
  }
}

function evalCmp(c: CondCompare, n: any): boolean {
  const lhsRaw = c.isField ? n?.fields?.[c.key.raw] : pickComparable(n, c.key.raw);
  const rhs = literalToJs(c.value);
  const lhs = String(lhsRaw ?? "");
  const rhsS = String(rhs ?? "");

  // numeric ops
  if (c.op === "<" || c.op === "<=" || c.op === ">" || c.op === ">=") {
    const a = Number(lhsRaw), b = Number(rhs);
    if (!Number.isFinite(a) || !Number.isFinite(b)) return false;
    if (c.op === "<")  return a <  b;
    if (c.op === "<=") return a <= b;
    if (c.op === ">")  return a >  b;
    return a >= b;
  }

  // string ops (+ case/space insensitive variants)
  const eq       = (a: string, b: string) => a === b;
  const contains = (a: string, b: string) => a.includes(b);
  const starts   = (a: string, b: string) => a.startsWith(b);
  const ends     = (a: string, b: string) => a.endsWith(b);

  const norm_i  = (s: string) => s.toLowerCase();
  const norm_s  = (s: string) => s.replace(/\s+/g, "");
  const norm_si = (s: string) => norm_s(s).toLowerCase();

  switch (c.op) {
    case "=":   return eq(lhs, rhsS);
    case "!=":  return !eq(lhs, rhsS);

    case "*=":  return contains(lhs, rhsS);
    case "^=":  return starts(lhs, rhsS);
    case "$=":  return ends(lhs, rhsS);

    case "i=":  return eq(norm_i(lhs),  norm_i(rhsS));
    case "s=":  return eq(norm_s(lhs),  norm_s(rhsS));
    case "si=": return eq(norm_si(lhs), norm_si(rhsS));

    case "*i=": return contains(norm_i(lhs),  norm_i(rhsS));
    case "^i=": return starts(norm_i(lhs),    norm_i(rhsS));
    case "$i=": return ends(norm_i(lhs),      norm_i(rhsS));

    default:    return false;
  }
}

function evalSubq(sq: CondSubquery, n: any, ctx: Ctx): boolean {
  const scopes = sq.path && sq.path.length ? expandFieldChain([n], sq.path, ctx) : [n];
  if (!scopes.length) return false;

  const start = sq.op === ">>" ? minimizeRoots(scopes, ctx.parentMap) : scopes;
  let acc: any[] = [];
  for (const root of start) acc = acc.concat(evalExpr(sq.query, [root], ctx));
  return uniqueById(acc).length > 0;
}

function evalIn(cond: CondIn, n: any, ctx: Ctx): boolean {
  const keyNodes = expandFieldChain([n], cond.keyPath, ctx);
  if (!keyNodes.length) return false;
  const hits = evalExpr(cond.query, [n], ctx);
  const set = new Set(hits);
  return keyNodes.some(k => set.has(k));
}

/* ---------- simple helpers ---------- */

function pickComparable(n: any, key: string): any {
  if (key === "type") return n?.type;
  if (key === "depth") return n?.depth;
  if (key === "title") {
    const t = (n as any).title;
    if (!t) return "";
    if (Array.isArray(t)) return "[phrasing]";
    return (t as any).value ?? "";
  }
  if (key === "text") return typeof n?.value === "string" ? n.value : "";
  if (key.startsWith("field.")) return n.fields?.[key.slice(6).trim()];
  return (n as any)?.[key];
}

function literalToJs(v: StringLit | NumberLit | IdentLit): string | number {
  if (v.kind === "str") return v.value;
  if (v.kind === "num") return v.value;
  return v.value;
}
