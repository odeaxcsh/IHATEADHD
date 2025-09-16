import { visit } from "./unist-util-visit";

export function selectAll(selector: string, tree: any): any[] {
  const selectors = selector.split(",").map(s => s.trim()).filter(Boolean);
  const matches: any[] = [];
  if (!selectors.length) return matches;
  visit(tree, (node: any) => {
    if (selectors.includes(node?.type)) {
      matches.push(node);
    }
  });
  return matches;
}
