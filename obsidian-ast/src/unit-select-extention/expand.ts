import type { } from "./lang/ast";
import { unionAllPos } from "../mdast-extensions/helper";

const isNode = (val: any): val is { type: string } => !!val && typeof val === "object" && typeof val.type === "string";

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
      if (isNode(val)) { out.push(val); continue; }
      if (Array.isArray(val)) {
        const nodes = val.filter(isNode);
        if (!nodes.length) continue;
        const position = unionAllPos(...nodes.map(node => node?.position));
        out.push({ type: "paragraph", children: nodes, position });
        continue;
      }
      continue;
    }

    if (field === "children") {
      if (Array.isArray(n.children)) { out.push(...n.children.filter(isNode)); continue; }
      continue;
    }

    if (Array.isArray(val)) {
      for (const x of val) if (isNode(x)) out.push(x);
      continue;
    }
    if (isNode(val)) { out.push(val); continue; }

    if (val != null) throw new Error(`Cannot expand non-node field "${field}" on ${n.type}`);
  }
  return out;
}
