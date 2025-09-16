import { visit } from "../unist-util-visit";

interface Query { source: string }

const toArray = <T>(value: T | T[] | undefined | null): T[] => {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
};

function childNodes(node: any): any[] {
  const out: any[] = [];
  if (Array.isArray(node?.children)) out.push(...node.children);
  out.push(...toArray(node?.title));
  return out;
}

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
      next.push(...childNodes(node));
    }
    current = next;
  }
  return current;
}

function childrenByType(nodes: any[], type: string): any[] {
  const matches: any[] = [];
  for (const node of nodes) {
    for (const child of childNodes(node)) {
      if (child?.type === type) matches.push(child);
    }
  }
  return matches;
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

  const [pathPartRaw, filterPart] = trimmed.split("[");
  const pathPart = (pathPartRaw ?? "").trim();
  const segments = pathPart
    ? pathPart.split(/(>>|>)/).map(p => p.trim()).filter(Boolean)
    : [];

  let current = startNodes;
  let op: string | null = null;
  for (const token of segments) {
    if (token === ">>" || token === ">") {
      op = token;
      continue;
    }
    const type = token;
    if (!op || op === ">>") {
      const nodes: any[] = [];
      for (const root of current) nodes.push(...nodesByType(root, type));
      current = nodes;
    } else if (op === ">") {
      current = childrenByType(current, type);
    }
    op = null;
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
