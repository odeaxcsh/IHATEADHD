import { visit } from "../unist-util-visit";

interface Query { source: string }

function nodesByType(tree: any, type: string): any[] {
  const matches: any[] = [];
  visit(tree, node => { if (node?.type === type) matches.push(node); });
  return matches;
}

function descendants(nodes: any[], depth: number): any[] {
  let current = nodes;
  for (let i = 0; i < depth; i++) {
    const next: any[] = [];
    for (const node of current) {
      if (Array.isArray(node?.children)) next.push(...node.children);
    }
    current = next;
  }
  return current;
}

export function parseQuery(source: string): Query {
  return { source };
}

export function compile(source: string) {
  return (tree: any, scopes?: any[]) => run(tree, source, scopes);
}

export function run(tree: any, source: string, scopes?: any[]): any[] {
  const trimmed = source.trim();
  const startNodes = scopes && scopes.length ? scopes : [tree];

  if (trimmed.startsWith("@")) {
    const depth = Number(trimmed.slice(1)) || 1;
    return descendants(startNodes, depth);
  }

  const [pathPart, filterPart] = trimmed.split("[");
  const parts = pathPart.split(">>").map(p => p.trim()).filter(Boolean);

  let current = startNodes;
  for (const part of parts) {
    const nodes: any[] = [];
    for (const root of current) nodes.push(...nodesByType(root, part));
    current = nodes;
  }

  if (filterPart) {
    const match = filterPart.match(/field\.status\s*=\s*"([^"]*)"/);
    if (match) {
      const expected = match[1];
      current = current.filter(n => n?.fields?.status === expected);
    }
  }

  return current;
}

export type { Query };
