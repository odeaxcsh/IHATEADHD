/** Collect every node inside scope (including scope) */
export function runAllWithin(scope: any): any[] {
  const nodes: any[] = [];
  walk(scope, (n: any) => { nodes.push(n); });
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
  const parents = new WeakMap<any, any | null>(); parents.set(root, null);
  walk(root, (n: any, idx: number | null, p: any | null) => {
    if (n && !parents.has(n)) parents.set(n, p ?? null);
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

type Visitor = (node: any, index: number | null, parent: any | null) => void;

function walk(node: any, visitor: Visitor, index: number | null = null, parent: any | null = null) {
  visitor(node, index, parent);
  const children = Array.isArray(node?.children) ? node.children : [];
  for (let i = 0; i < children.length; i++) {
    walk(children[i], visitor, i, node);
  }
}
