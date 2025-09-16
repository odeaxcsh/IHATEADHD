export const SKIP = Symbol("skip");
export const EXIT = Symbol("exit");

type Visitor = (node: any, index: number | null, parent: any | null) => VisitorResult;
type TestFn = (node: any) => boolean;

type VisitorResult = void | typeof SKIP | typeof EXIT | [typeof SKIP, number];

type TraverseResult = typeof EXIT | { type: "setIndex"; index: number } | void;

type VisitArgs = {
  test: TestFn;
  visitor: Visitor;
};

type VisitFn = ((tree: any, testOrVisitor: string | Visitor, maybeVisitor?: Visitor) => void) & {
  SKIP: typeof SKIP;
  EXIT: typeof EXIT;
};

const visitImpl = (tree: any, testOrVisitor: string | Visitor, maybeVisitor?: Visitor): void => {
  const { test, visitor } = normalizeArgs(testOrVisitor, maybeVisitor);
  traverse(tree, null, null, test, visitor);
};

export const visit = visitImpl as VisitFn;
visit.SKIP = SKIP;
visit.EXIT = EXIT;

function traverse(
  node: any,
  index: number | null,
  parent: any | null,
  test: TestFn,
  visitor: Visitor
): TraverseResult {
  const matches = test(node);
  let result: VisitorResult | undefined;

  if (matches) {
    result = visitor(node, index, parent);
  }

  if (result === EXIT) return EXIT;

  let skipChildren = false;
  let nextIndex: number | null = null;

  if (result === SKIP) {
    skipChildren = true;
  } else if (Array.isArray(result) && result[0] === SKIP) {
    skipChildren = true;
    nextIndex = typeof result[1] === "number" ? result[1] : null;
  }

  if (!skipChildren) {
    const children: any[] = Array.isArray(node?.children) ? node.children : [];
    for (let i = 0; i < children.length; i++) {
      const childResult = traverse(children[i], i, node, test, visitor);
      if (childResult === EXIT) return EXIT;
      if (childResult && typeof childResult === "object" && childResult.type === "setIndex") {
        i = childResult.index - 1;
      }
    }
  }

  if (nextIndex != null) {
    return { type: "setIndex", index: nextIndex };
  }

  return undefined;
}

function normalizeArgs(testOrVisitor: string | Visitor, maybeVisitor?: Visitor): VisitArgs {
  if (typeof testOrVisitor === "function" && !maybeVisitor) {
    return { test: () => true, visitor: testOrVisitor };
  }

  if (typeof testOrVisitor === "string" && typeof maybeVisitor === "function") {
    return {
      test: (node) => node?.type === testOrVisitor,
      visitor: maybeVisitor
    };
  }

  if (typeof testOrVisitor === "function" && typeof maybeVisitor === "function") {
    return { test: (node) => Boolean(testOrVisitor(node, null, null)), visitor: maybeVisitor };
  }

  throw new TypeError("visit requires a visitor function");
}
