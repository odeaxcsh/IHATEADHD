import type { Root as MdastRoot, Content as MdastNode } from "mdast";
import { selectExtended } from ".";

export type AstChain = {
  select: (query: string) => AstChain;
  visit: (query: string, fn: (node: MdastNode) => void | Promise<void>, narrow?: boolean) => AstChain;
  filter: (fn: (node: MdastNode, idx: number, arr: MdastNode[]) => boolean | Promise<boolean>) => AstChain;
  through: (fn: (nodes: MdastNode[]) => MdastNode[] | Promise<MdastNode[]>) => AstChain;
  tap: (fn: (nodes: MdastNode[]) => void | Promise<void>) => AstChain;
  toArray: () => Promise<MdastNode[]>;
  done: () => Promise<void>;
};

export function makeChain(
  astPromise: Promise<MdastRoot | undefined>,
  nodesPromise: Promise<MdastNode[]>
): AstChain {
  const next = (p: Promise<MdastNode[]>) => makeChain(astPromise, p);

  const select: AstChain["select"] = (query) =>
    next(Promise.all([astPromise, nodesPromise]).then(([ast, nodes]) => {
      if (!ast) return [];
      const out: MdastNode[] = [];
      for (const r of nodes) out.push(...selectExtended(ast as any, query, [r as any]));
      return out;
    }));

  const visitChain: AstChain["visit"] = (query, fn, narrow = false) =>
    next(Promise.all([astPromise, nodesPromise]).then(async ([ast, nodes]) => {
      if (!ast) return narrow ? [] : nodes;
      const matches: MdastNode[] = [];
      for (const r of nodes) matches.push(...selectExtended(ast as any, query, [r as any]));
      for (const m of matches) await fn(m);
      return narrow ? matches : nodes;
    }));

  const filter: AstChain["filter"] = (fn) =>
    next(nodesPromise.then(async ns => {
      const keep: MdastNode[] = [];
      for (let i = 0; i < ns.length; i++) if (await fn(ns[i], i, ns)) keep.push(ns[i]);
      return keep;
    }));

  const through: AstChain["through"] = (fn) =>
    next(nodesPromise.then(ns => Promise.resolve(fn(ns))));

  const tap: AstChain["tap"] = (fn) =>
    next(nodesPromise.then(async ns => { await fn(ns); return ns; }));

  const toArray = () => nodesPromise;
  const done = async () => { await nodesPromise; };

  return { select, visit: visitChain, filter, through, tap, toArray, done };
}
