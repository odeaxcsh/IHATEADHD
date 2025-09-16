/** Collect every node inside scope (including scope) */
export function runAllWithin(scope: any): any[] {
  const nodes: any[] = [];
  traverse(scope, null, (node) => { nodes.push(node); });
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
  traverse(root, null, (node, parent) => {
    if (node && !parents.has(node)) parents.set(node, parent ?? null);
  });
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

export function childNodesOf(node: any): any[] {
  if (!node || typeof node !== "object") return [];

  const out: any[] = [];
  const seen = new Set<any>();

  const pushNode = (value: any) => {
    if (!value || typeof value !== "object") return;
    if (seen.has(value)) return;
    if (typeof (value as any).type === "string") {
      seen.add(value);
      out.push(value);
    }
  };

  if (Array.isArray((node as any).children)) {
    for (const child of (node as any).children) pushNode(child);
  }

  for (const [key, value] of Object.entries(node)) {
    if (key === "children" || key === "position" || key === "data" || key === "value" || key === "fields" || key === "tags" || key === "parent") continue;
    if (Array.isArray(value)) {
      for (const item of value) pushNode(item);
    } else {
      pushNode(value);
    }
  }

  return out;
}

type VisitFn = (node: any, parent: any | null) => void;

function traverse(node: any, parent: any | null, fn: VisitFn, seen: WeakSet<any> = new WeakSet()): void {
  if (!node || typeof node !== "object") return;
  if (seen.has(node)) return;
  seen.add(node);
  fn(node, parent);
  for (const child of childNodesOf(node)) {
    traverse(child, node, fn, seen);
  }
}
