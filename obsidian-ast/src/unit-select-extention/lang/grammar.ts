import * as P from "parsimmon";
import type {
  Query, Expr, UnionExpr, IntersectExpr, ChainExpr, PrimaryExpr,
  Segment, CondExpr, CondOr, CondAnd, CondPrimary, CondAtom,
  CondCompare, Comparator, CondSubquery, CondIn,
  StringLit, NumberLit, IdentLit, Op
} from "./ast";

/* =========================
 * Configurable sugar mapping
 * ========================= */
// If your tag nodes are "mdTag" with property "value", change these:
const TAG_NODE = "tag";       // e.g., "tag" or "mdTag"
const TAG_PROP = "key";       // e.g., "key" or "value"

/* ============== basics ============== */
const wsp = P.regexp(/[ \t\r\n]*/m);
const lex = <T>(p: P.Parser<T>) => p.skip(wsp);
const tok = (s: string) => lex(P.string(s));

/* literals */
const DQ = P.regexp(/"((?:[^"\\]|\\.)*)"/, 1);
const SQ = P.regexp(/'((?:[^'\\]|\\.)*)'/, 1);
const String_ = lex(P.alt(DQ, SQ)).map<StringLit>(v => ({ kind: "str", value: unescapeStr(v) }));
const Number_ = lex(P.regexp(/-?(?:0|[1-9]\d*)(?:\.\d+)?/)).map<NumberLit>(v => ({ kind: "num", value: Number(v) }));
const Ident  = lex(P.regexp(/[A-Za-z_][A-Za-z0-9_-]*/)).map<IdentLit>(v => ({ kind: "ident", value: v }));
const Value  = P.alt<StringLit | NumberLit | IdentLit>(String_, Number_, Ident);

// regex literal /.../flags
type RegexLit = { kind: "regex", pattern: string, flags: string };
const Regex_ = lex(P.regexp(/\/((?:[^/\\]|\\.)*)\/([a-z]*)/))
  .map<RegexLit>((full) => {
    const m = full.match(/^\/((?:[^/\\]|\\.)*)\/([a-z]*)$/)!;
    return { kind: "regex", pattern: m[1], flags: m[2] };
  });

function unescapeStr(s: string) {
  return s.replace(/\\(["'\\nrt])/g, (_m, g1) => {
    if (g1 === "n") return "\n";
    if (g1 === "r") return "\r";
    if (g1 === "t") return "\t";
    return g1;
  });
}

/* symbols / ops */
const LPAR = tok("("), RPAR = tok(")");
const LBRK = tok("["), RBRK = tok("]");
const DOT  = tok(".");
const AMP  = tok("&");
const BAR  = tok("|");
const BANG = tok("!");

/* chain combinators — order longest-first to avoid prefix issues */
const GG   = tok(">>");  // descendants
const LL   = tok("<<");  // ancestors
const PP   = tok("++");  // following siblings (all)
const MM   = tok("--");  // preceding siblings (all)
const GT   = tok(">");   // direct child
const LT   = tok("<");   // parent
const PLUS = tok("+");   // next sibling
const MIN  = tok("-");   // previous sibling

const KW_IN = lex(P.string("in"));

/* comparators (order matters: longest first) */
const Comp: P.Parser<Comparator> = P.alt(
  tok("<="), tok(">="), tok("!="),
  tok("*i="), tok("^i="), tok("$i="),
  tok("si="), tok("i="), tok("s="),
  tok("^="), tok("$="), tok("*="),
  tok("~="),           // regex literal on RHS
  tok("<"), tok(">"), tok("=")
) as any;

/* paths: a.b.c (list of identifiers) */
const Path = Ident.chain(first =>
  DOT.then(Ident).many().map(rest => [first.value, ...rest.map(x => x.value)])
);

/* ========= SUGAR segments ========= */

/** #tag  =>  tag[key="tag"]  (flip TAG_NODE/TAG_PROP if needed) */
const HashTag: P.Parser<Segment> = lex(P.string("#"))
  .then(P.regexp(/[A-Za-z0-9/_-]+/))
  .map<Segment>(val => ({
    base: TAG_NODE,
    fields: [],
    filters: [wrapCond(oneCmp(TAG_PROP, "=", { kind: "str", value: val }))]
  }));

/** key:: "value"  => inlineField[key=key, value=value] */
const InlineFieldSugar: P.Parser<Segment> = P.seqMap(
  Ident.skip(lex(P.string("::"))),
  Value,
  (k, v) => ({
    base: "inlineField",
    fields: [],
    filters: [
      wrapCond(oneCmp("key", "=", k)),
      wrapCond(oneCmp("value", "=", v))
    ]
  })
);

/* ========= Base + fields ========= */

/** Base token supports "*", ":root", "@N", or an identifier */
const Base = P.alt(
  P.seq(lex(P.string("@")), lex(P.regexp(/\d*/)))
    .map(([_, digits]) => ({ kind: "@", hop: digits ? Number(digits) : 1 })),
  lex(P.string("*")).map(() => ({ kind: "*" })),
  lex(P.string(":root")).map(() => ({ kind: ":root" })),
  Ident.map(id => ({ kind: id.value }))
);

/** dot-expansion */
const Fields = DOT.then(Ident).many().map(xs => xs.map(i => i.value));

/* ========= Conditions (inside [ ... ]) ========= */

const CondExprP: P.Parser<CondExpr> = P.lazy(() => CondOrP);

const CondPrimaryP: P.Parser<CondPrimary> = P.lazy(() =>
  P.alt<CondPrimary>(
    BANG.then(CondPrimaryP).map(inner => ({ kind: "not", inner })),
    LPAR.then(CondExprP).skip(RPAR).map(expr => ({ kind: "group", expr })),
    CondAtomP
  )
);

const CondAndP: P.Parser<CondAnd> = P.sepBy1(CondPrimaryP, AMP).map(terms => ({ kind: "and", terms }));
const CondOrP:  P.Parser<CondOr>  = P.sepBy1(CondAndP, BAR).map(terms => ({ kind: "or", terms }));

/** token that can start a Query; used to disambiguate subquery vs numeric compare */
const QueryHead = P.alt(
  lex(P.string("(")),
  lex(P.string("\"")),
  lex(P.string("'")),
  lex(P.string("#")),
  lex(P.string("@")),
  lex(P.string("*")),
  lex(P.string(":root")),
  P.lookahead(Ident.skip(lex(P.string("::")))), // inline-field sugar
  P.lookahead(Ident)
);

/** CondAtom: comparison | subquery | in(...) | bare "string" sugar */
const CondAtomP: P.Parser<CondAtom> = P.lazy(() =>
  P.alt<CondAtom>(
    // subquery: PATH? (>>|>|<<|<|++|+|--|-) Query
    P.seqMap(
      P.alt(Path, P.of<string[] | null>(null)),
      P.alt(GG, GT, LL, LT, PP, PLUS, MM, MIN).map(s => s as Op),
      P.lookahead(QueryHead).then(QueryP),
      (path, op, q) => ({ kind: "subq", path: path ?? undefined, op: op as Op, query: q })
    ),
    // in: KEY_PATH in ( Query )
    P.seqMap(
      Path,
      KW_IN.then(LPAR).then(QueryP).skip(RPAR),
      (keyPath, query) => ({ kind: "in", keyPath, query })
    ),
    // comparison: KEY OP (VALUE | /regex/)
    P.seqMap(
      P.alt(
        P.string("field.").then(Ident).map(i => ({ raw: i.value, isField: true })),
        Ident.map(i => ({ raw: i.value, isField: false }))
      ),
      Comp,
      P.alt< StringLit | NumberLit | IdentLit | RegexLit >(String_, Number_, Ident, Regex_),
      (key, op, v) => {
        // store regex as Ident with special sentinel? — no, evaluator can detect object {kind:"regex"}
        return { kind: "cmp", key, op: op as Comparator, value: v as any };
      }
    ),
    // bare string in filter: ["Hello"]  =>  [>> text[value="Hello"]]
    P.alt(DQ, SQ).map<CondSubquery>((raw) => ({
      kind: "subq",
      path: undefined,
      op: ">>",
      query: makeTextQuery(unescapeStr(raw))
    }))
  )
);

/* ========= Segment / Primary / Chain / Query ========= */

const FilterBlock = LBRK.then(CondExprP).skip(RBRK);

const SegmentP: P.Parser<Segment> = P.alt(
  InlineFieldSugar,
  HashTag,
  P.seqMap(
    Base, Fields, FilterBlock.many(),
    (b, fields, filters) => {
      if (b.kind === "@") return { base: "@", atHop: b.hop, fields, filters };
      return { base: b.kind as any, fields, filters };
    }
  )
);

/** Quoted text sugar as a Primary: "Hello" → text[value="Hello"] */
const QuotedTextPrimary: P.Parser<PrimaryExpr> = P.alt(DQ, SQ)
  .map<PrimaryExpr>(raw => ({
    kind: "segment",
    seg: {
      base: "text",
      fields: [],
      filters: [wrapCond(oneCmp("value", "=", { kind: "str", value: unescapeStr(raw) }))]
    }
  }));

const PrimaryP: P.Parser<PrimaryExpr> = P.alt(
  QuotedTextPrimary,
  SegmentP.map(seg => ({ kind: "segment", seg })),
  LPAR.then(P.lazy(() => QueryP)).skip(RPAR).map(expr => ({ kind: "group", expr }))
);

const ChainP: P.Parser<ChainExpr> = P.seqMap(
  PrimaryP,
  P.seqMap(
    P.alt(GG, GT, LL, LT, PP, PLUS, MM, MIN).map(s => s as Op),
    PrimaryP,
    (op, next) => ({ op, next })
  ).many(),
  (head, steps) => ({ kind: "chain", head, steps })
);

const IntersectP: P.Parser<IntersectExpr> = P.sepBy1(ChainP, AMP).map(terms => ({ kind: "intersect", terms }));
const UnionP:     P.Parser<UnionExpr>     = P.sepBy1(IntersectP, BAR).map(terms => ({ kind: "union", terms }));

const QueryP: P.Parser<Query> = wsp.then(UnionP).skip(wsp);

/* ========= public ========= */
export function parseQuery(input: string): Query {
  const s = input.trim();
  // Disallow chains that begin with a combinator
  if (/^(>>|<<|\+\+|--|[<>+\-])/.test(s)) {
    throw new Error(
      "Query cannot start with a combinator. Start with a segment, e.g. " +
      "'heading << paragraph' or ':root < heading'. " +
      "If you meant a placeholder, wrap it in an ast-example block."
    );
  }

  const res = QueryP.parse(input);
  if (res.status) return res.value;
  const { index } = res;
  const near = input.slice(Math.max(0, index.offset - 30), index.offset + 30);
  throw new Error(`Parse error at ${index.line}:${index.column} near ${JSON.stringify(near)}`);
}



/* ========= small helpers ========= */

function oneCmp(keyRaw: string, op: Comparator, rhs: StringLit | NumberLit | IdentLit): CondCompare {
  const isField = keyRaw.startsWith("field.");
  return {
    kind: "cmp",
    key: { raw: isField ? keyRaw.slice(6) : keyRaw, isField },
    op,
    value: rhs
  };
}

function wrapCond(atom: CondCompare): CondExpr {
  return { kind: "or", terms: [{ kind: "and", terms: [atom] }] };
}

// Build a tiny Query AST: text[value="..."]
function makeTextQuery(s: string): Query {
  return {
    kind: "union",
    terms: [{
      kind: "intersect",
      terms: [{
        kind: "chain",
        head: {
          kind: "segment",
          seg: {
            base: "text",
            fields: [],
            filters: [wrapCond(oneCmp("value", "=", { kind: "str", value: s }))]
          }
        },
        steps: []
      }]
    }]
  };
}

