type Visitor = (node: any, index: number | null, parent: any | null) => void;

export function visit(tree: any, testOrVisitor: any, maybeVisitor?: Visitor): void {
  const collectChildren = (node: any): any[] => {
    const out: any[] = [];
    if (Array.isArray(node?.children)) out.push(...node.children);
    const title = node?.title;
    if (Array.isArray(title)) out.push(...title);
    else if (title) out.push(title);
    return out;
  };

  let test: ((node: any) => boolean) | null = null;
  let visitor: Visitor;

  if (typeof testOrVisitor === "function" && !maybeVisitor) {
    visitor = testOrVisitor as Visitor;
  } else {
    visitor = (maybeVisitor ?? (() => {})) as Visitor;
    const testVal = testOrVisitor;
    if (typeof testVal === "string") {
      test = (node: any) => node?.type === testVal;
    } else if (Array.isArray(testVal)) {
      test = (node: any) => testVal.includes(node?.type);
    } else if (typeof testVal === "function") {
      test = testVal;
    }
  }

  function walk(node: any, index: number | null, parent: any | null) {
    if (!test || test(node)) visitor(node, index, parent);
    const children = collectChildren(node);
    for (let i = 0; i < children.length; i++) {
      walk(children[i], i, node);
    }
  }
  walk(tree, null, null);
}
