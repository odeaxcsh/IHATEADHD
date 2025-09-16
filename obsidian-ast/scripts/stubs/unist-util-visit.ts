type Visitor = (node: any, index: number | null, parent: any | null) => any;

const SKIP = Symbol("skip");

export function visit(tree: any, testOrVisitor: any, maybeVisitor?: Visitor): void {
  let test: ((node: any) => boolean) | null = null;
  let visitor: Visitor;

  if (typeof testOrVisitor === "function" && !maybeVisitor) {
    visitor = testOrVisitor as Visitor;
  } else {
    visitor = (maybeVisitor as Visitor) ?? (() => {});
    if (typeof testOrVisitor === "string") {
      test = (node: any) => node?.type === testOrVisitor;
    } else if (Array.isArray(testOrVisitor)) {
      const set = new Set(testOrVisitor);
      test = (node: any) => set.has(node?.type);
    } else if (typeof testOrVisitor === "function") {
      test = testOrVisitor as (node: any) => boolean;
    }
  }

  function walk(node: any, index: number | null, parent: any | null) {
    if (!test || test(node)) {
      const result = visitor(node, index, parent);
      if (result === SKIP || (Array.isArray(result) && result[0] === SKIP)) {
        return;
      }
    }

    const children = Array.isArray(node?.children) ? node.children : [];
    const title = node?.title;
    const extra: any[] = [];
    if (title) {
      if (Array.isArray(title)) extra.push(...title);
      else if (typeof title === "object") extra.push(title);
    }
    for (const child of extra) {
      walk(child, null, node);
    }
    for (let i = 0; i < children.length; i++) {
      walk(children[i], i, node);
    }
  }

  walk(tree, null, null);
}

visit.SKIP = SKIP;
