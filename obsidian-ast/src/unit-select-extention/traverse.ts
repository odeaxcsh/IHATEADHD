type NodeLike = { type?: string; position?: any; [k: string]: any };

const SKIP_KEYS = new Set([
  "type",
  "position",
  "value",
  "depth",
  "fields",
  "tags",
  "data",
  "meta",
  "identifier",
  "calloutType",
  "expanded",
  "parent"
]);

export function structuralChildren(node: NodeLike): NodeLike[] {
  const out: NodeLike[] = [];
  if (!node || typeof node !== "object") return out;
  const push = (child: any) => {
    if (child && typeof child === "object" && typeof child.type === "string") out.push(child as NodeLike);
  };
  if (Array.isArray((node as any).children)) {
    for (const child of (node as any).children) push(child);
  }
  const title = (node as any).title;
  if (Array.isArray(title)) {
    for (const child of title) push(child);
  } else if (title) {
    push(title);
  }
  for (const [key, value] of Object.entries(node)) {
    if (SKIP_KEYS.has(key) || key === "children" || key === "title") continue;
    if (!value) continue;
    if (Array.isArray(value)) {
      for (const item of value) push(item);
      continue;
    }
    if (typeof value === "object") push(value);
  }
  return out;
}

/** Collect every node inside scope (including scope) */
export function runAllWithin(scope: any): any[] {
  if (!scope) return [];
  const nodes: any[] = [];
  const stack: NodeLike[] = [scope];
  const seen = new Set<NodeLike>();
  while (stack.length) {
    const node = stack.pop()!;
    if (!node || seen.has(node)) continue;
    seen.add(node);
    nodes.push(node);
    const children = structuralChildren(node);
    for (let i = children.length - 1; i >= 0; i--) stack.push(children[i]);
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
  if (!root) return parents;
  const stack: Array<{ node: NodeLike; parent: NodeLike | null }> = [{ node: root, parent: null }];
  while (stack.length) {
    const { node, parent } = stack.pop()!;
    if (!node || parents.has(node)) continue;
    parents.set(node, parent ?? null);
    for (const child of structuralChildren(node)) {
      stack.push({ node: child, parent: node });
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
