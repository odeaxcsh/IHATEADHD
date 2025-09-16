const isNode = (val: any): val is { type: string } => !!val && typeof val === "object" && typeof val.type === "string";
const SKIP_KEYS = new Set(["parent", "position"]);

function collectFromValue(value: any): any[] {
  if (!value) return [];
  if (Array.isArray(value)) {
    if (!value.length) return [];
    if (!value.every(isNode)) return [];
    return value;
  }
  return isNode(value) ? [value] : [];
}

export function structuralChildren(node: any): any[] {
  if (!node || typeof node !== "object") return [];
  const out: any[] = [];
  if (Array.isArray(node.children)) out.push(...node.children.filter(isNode));
  else if (isNode(node.children)) out.push(node.children);

  if (node.title) out.push(...collectFromValue(node.title));

  for (const [key, value] of Object.entries(node)) {
    if (key === "children" || key === "title" || SKIP_KEYS.has(key)) continue;
    out.push(...collectFromValue(value));
  }
  return out;
}

/** Collect every node inside scope (including scope) */
export function runAllWithin(scope: any): any[] {
  const nodes: any[] = [];
  const stack: any[] = [scope];
  const seen = new Set<any>();
  while (stack.length) {
    const current = stack.pop();
    if (!current || typeof current !== "object") continue;
    if (seen.has(current)) continue;
    seen.add(current);
    nodes.push(current);
    for (const child of structuralChildren(current)) stack.push(child);
  }
  return nodes;
}

/** Stable doc-order: by position.start.offset */
export function orderByPos(arr: any[]): any[] {
  return [...arr].sort((a, b) => {
    const sa = a?.position?.start?.offset ?? 0;
    const sb = b?.position?.start?.offset ?? 0;
    return sa - sb;
  });
}

/** Dedup by identity */
export function uniqueById(arr: any[]): any[] {
  const seen = new Set<any>();
  const out: any[] = [];
  for (const x of arr) if (!seen.has(x)) { seen.add(x); out.push(x); }
  return out;
}

/** Weak parent map (root → null, others → parent) */
export function buildParentMap(root: any): WeakMap<any, any | null> {
  const parents = new WeakMap<any, any | null>();
  const stack: any[] = [root];
  parents.set(root, null);
  while (stack.length) {
    const current = stack.pop();
    if (!current || typeof current !== "object") continue;
    for (const child of structuralChildren(current)) {
      if (!parents.has(child)) {
        parents.set(child, current);
        stack.push(child);
      }
    }
  }
  return parents;
}

/** Drop any node that has another node from the set as ancestor */
export function minimizeRoots(nodes: any[], parents: WeakMap<any, any | null>): any[] {
  const set = new Set(nodes);
  const keep: any[] = [];
  outer: for (const n of nodes) {
    let p = parents.get(n) ?? null;
    while (p) {
      if (set.has(p)) continue outer; // ancestor present → drop n
      p = parents.get(p) ?? null;
    }
    keep.push(n);
  }
  return keep;
}
