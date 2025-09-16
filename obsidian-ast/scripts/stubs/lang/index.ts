import { visit } from "../unist-util-visit";

interface Query { source: string }

function collectChildren(node: any): any[] {
  const out: any[] = [];
  if (Array.isArray(node?.children)) out.push(...node.children);
  const title = node?.title;
  if (Array.isArray(title)) out.push(...title);
  else if (title) out.push(title);
  return out;
}

function nodesByType(tree: any, type: string): any[] {
  const matches: any[] = [];
  visit(tree, node => { if (node?.type === type) matches.push(node); });
  return matches;
}

function directChildrenByType(node: any, type: string): any[] {
  return collectChildren(node).filter(child => child?.type === type);
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
  const tokens = pathPart.split(/(>>|>)/).map(t => t.trim()).filter(Boolean);

  let current = startNodes;
  let mode: ">>" | ">" = ">>";
  for (const token of tokens) {
    if (token === ">" || token === ">>") {
      mode = token as ">>" | ">";
      continue;
    }
    const nodes: any[] = [];
    for (const root of current) {
      if (mode === ">") nodes.push(...directChildrenByType(root, token));
      else nodes.push(...nodesByType(root, token));
    }
    current = nodes;
    mode = ">>";
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
