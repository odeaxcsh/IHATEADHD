// Barrel for the selector module.
// Exposes a small adapter `selectExtended` for backwards compatibility,
// plus the new parse/compile/run APIs from the formal language.

// src/unit-select-extention/index.ts
import { run as runQL, parseQuery, compile, type Query } from "./lang";

export { parseQuery, compile, type Query };
// also re-export `run` for convenience
export const run = runQL;

export function selectExtended(ast: any, query: string, scopeRoots?: any[]) {
  return runQL(ast, query, scopeRoots);
}


export { enrichFieldsAndTags } from "./enrich";
export { makeChain } from "./selector-chain";
export type { AstChain } from "./selector-chain";
