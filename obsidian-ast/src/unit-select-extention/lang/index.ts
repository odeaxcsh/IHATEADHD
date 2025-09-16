import { parseQuery } from "./grammar";
import { evaluateQuery } from "./evaluate";
import type { Query } from "./ast";

/** Parse-only API (throws on parse errors) */
export { parseQuery } from "./grammar";
export type { Query } from "./ast";

/** Compile a query string to an executable function */
export function compile(querySource: string) {
  const ast = parseQuery(querySource);
  return (mdastRoot: any, scopes?: any[]) => evaluateQuery(mdastRoot, ast, scopes);
}

/** One-shot: parse + run */
export function run(mdastRoot: any, querySource: string, scopes?: any[]) {
  const ast = parseQuery(querySource);
  return evaluateQuery(mdastRoot, ast, scopes);
}
