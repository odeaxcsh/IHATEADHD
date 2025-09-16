export type Op = ">" | ">>" | "<" | "<<" | "+" | "++" | "-" | "--";


// ===== Query AST (flows over node sets) =====
export type Query = Expr;

// Lowest precedence: union |, then &, then chain (>, >>)
export type Expr = UnionExpr;
export type UnionExpr = {
  kind: "union",
  terms: IntersectExpr[]
};
export type IntersectExpr = {
  kind: "intersect",
  terms: ChainExpr[]
};
export type ChainExpr = {
  kind: "chain",
  head: PrimaryExpr,
  steps: Array<{ op: Op, next: PrimaryExpr }>
};

export type PrimaryExpr =
  | { kind: "segment", seg: Segment }
  | { kind: "group", expr: Expr };

// ===== Segment =====
// e.g. heading.title[cond][cond] or mdTag[value="x"]
export type Segment = {
  base: "*" | ":root" | "@" | string;
  atHop?: number;       // when base === "@": exact hop count (default 1)
  fields: string[];
  filters: CondExpr[];
};


// ===== Conditions (inside [ ... ]) =====
export type CondExpr = CondOr;
export type CondOr = { kind: "or", terms: CondAnd[] };
export type CondAnd = { kind: "and", terms: CondPrimary[] };
export type CondPrimary =
  | { kind: "not", inner: CondPrimary }
  | CondAtom
  | { kind: "group", expr: CondExpr };

export type CondAtom =
  | CondCompare
  | CondSubquery
  | CondIn;

export type Comparator = "=" | "!=" | "<" | "<=" | ">" | ">=";

// key can be bare ("depth", "type", "title", "text") or "field.foo"
export type CondCompare = {
  kind: "cmp",
  key: { raw: string, isField: boolean }, // "field.foo" => {raw:"foo",isField:true}
  op: Comparator,
  value: StringLit | NumberLit | IdentLit
};

export type CondSubquery = {
  kind: "subq",
  path?: string[],     // e.g. ["title"] or ["children"]; omitted => self
  op: Op,              // > or >>
  query: Expr
};

export type CondIn = {
  kind: "in",
  keyPath: string[],   // dot path to expand (e.g., ["title"])
  query: Expr          // rhs query, run from current node
};

// ===== Simple literals =====
export type StringLit = { kind: "str", value: string };
export type NumberLit = { kind: "num", value: number };
export type IdentLit  = { kind: "ident", value: string };

export class SelectorError extends Error {
  constructor(msg: string) { super(msg); this.name = "SelectorError"; }
}

