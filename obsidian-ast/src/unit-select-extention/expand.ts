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
      if (Array.isArray(val)) { out.push({ type: "paragraph", children: val, position: n.position }); continue; }
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
