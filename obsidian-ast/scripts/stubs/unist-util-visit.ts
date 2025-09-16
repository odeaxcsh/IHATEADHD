export function visit(tree: any, visitor: (node: any, index: number | null, parent: any | null) => void): void {
  function walk(node: any, index: number | null, parent: any | null) {
    visitor(node, index, parent);
    const children = Array.isArray(node?.children) ? node.children : [];
    for (let i = 0; i < children.length; i++) {
      walk(children[i], i, node);
    }
  }
  walk(tree, null, null);
}
