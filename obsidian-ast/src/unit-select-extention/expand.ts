import type { } from "./lang/ast";

type MdNode = { type: string; position?: { start?: { offset?: number }; end?: { offset?: number } } };

function cloneParagraphFromArray(items: any[], host: any): MdNode {
  const paragraph: MdNode = { type: "paragraph", children: items.slice() } as any;
  const posSources = items.filter((c: any) => c && typeof c === "object" && c.position).map((c: any) => c.position);
  if (posSources.length) {
    const first = posSources[0];
    let start = first?.start, end = first?.end;
    for (const pos of posSources.slice(1)) {
      if (!pos) continue;
      if (!start || (pos.start?.offset ?? 0) < (start.offset ?? Infinity)) start = pos.start;
      if (!end || (pos.end?.offset ?? 0) > (end.offset ?? -Infinity)) end = pos.end;
    }
    if (start && end) paragraph.position = { start, end } as any;
  } else if (host?.position) {
    paragraph.position = host.position;
  }
  return paragraph;
}

type ExpandCtx = { parentMap?: WeakMap<any, any | null> };

export function expandFieldChain(nodes: any[], fields: string[], ctx?: ExpandCtx): any[] {
  let current = nodes;
  for (const f of fields) current = expandFieldOnce(current, f, ctx);
  return current;
}

export function expandFieldOnce(nodes: any[], field: string, ctx?: ExpandCtx): any[] {
  const out: any[] = [];
  for (const n of nodes) {
    if (field === "parent") {
      const p = ctx?.parentMap?.get(n) ?? null;
      if (p) out.push(p);
      continue;
    }

    const val = (n as any)[field];

    if (field === "title") {
      if (Array.isArray(val)) { out.push(cloneParagraphFromArray(val, n)); continue; }
      if (val && typeof val === "object") { out.push(val); continue; }
      continue;
    }

    if (field === "children") {
      if (Array.isArray(n.children)) { out.push(...n.children); continue; }
      continue;
    }

    if (Array.isArray(val)) {
      for (const x of val) if (x && typeof x === "object" && "type" in x) out.push(x);
      continue;
    }
    if (val && typeof val === "object" && "type" in val) { out.push(val); continue; }

    if (val != null) throw new Error(`Cannot expand non-node field "${field}" on ${n.type}`);
  }
  return out;
}
