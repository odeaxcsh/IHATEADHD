// src/mdast-extentions/remark-directive-extension/props-grammar.ts
import * as P from "parsimmon";
import type { PropExpr } from "./types";

/** Public API */
export function parsePropValue(input: string): PropExpr {
  const s = input.trim();
  return Value().tryParse(s);
}

/* ── Lexer helpers ───────────────────────────────────────── */

const wsp = P.regexp(/[ \t\r\n]*/m);
const lex = <T>(p: P.Parser<T>) => p.skip(wsp);
const tok = (s: string) => lex(P.string(s));

const DQ = P.regexp(/"((?:[^"\\]|\\.)*)"/, 1);
const SQ = P.regexp(/'((?:[^'\\]|\\.)*)'/, 1);
const Ident = lex(P.regexp(/[A-Za-z_][A-Za-z0-9_-]*/));

/* ── Atomic values ───────────────────────────────────────── */

const String_ = () =>
  lex(P.alt(DQ, SQ)).map<PropExpr>((v) => ({ kind: "lit", value: unescapeStr(v) }));

const Number_ = () =>
  lex(P.regexp(/-?(?:0|[1-9]\d*)(?:\.\d+)?/)).map<PropExpr>((v) => ({ kind: "lit", value: Number(v) }));

const Bool_ = () =>
  lex(P.alt(P.string("true"), P.string("false"))).map<PropExpr>((v) => ({ kind: "lit", value: v === "true" }));

const Null_ = () => lex(P.string("null")).map<PropExpr>(() => ({ kind: "lit", value: null }));

const BareWord = () =>
  // anything non-space that isn't starting with a control char
  lex(P.regexp(/[^\s\[\]{}:,'"]+/)).map<PropExpr>((s) => ({ kind: "lit", value: s }));

/* ── Forward-declared builders (break cycles) ────────────── */

const Value: () => P.Parser<PropExpr> = () =>
  P.lazy(() => P.alt(InlineNode(), Array_(), String_(), Number_(), Bool_(), Null_(), BareWord()));

const Array_: () => P.Parser<PropExpr> = () =>
  P.seqMap(tok("["), ValueList(), tok("]"), (_1, items) => ({ kind: "arr", items }));

const ValueList: () => P.Parser<PropExpr[]> = () =>
  P.sepBy(Value(), lex(P.string(",")));

const InlineNode = (): P.Parser<PropExpr> =>
  P.seqMap(
    tok(":"),                 // leading colon
    Ident,                    // name
    MaybeAttrs(),             // optional {}
    MaybeBody(),              // optional []
    (_c, name, attrs, body) => ({ kind: "inline", name, attrs, body })
  );

const MaybeAttrs = (): P.Parser<Record<string, PropExpr>> =>
  P.alt(
    P.seqMap(tok("{"), AttrList(), tok("}"), (_1, a) => a),
    P.of<Record<string, PropExpr>>({})
  );

const MaybeBody = (): P.Parser<PropExpr[]> =>
  P.alt(
    P.seqMap(tok("["), BodyList(), tok("]"), (_1, items) => items),
    P.of<PropExpr[]>([])
  );

const AttrList = (): P.Parser<Record<string, PropExpr>> =>
  P.sepBy(AttrPair(), P.alt(wsp, tok(","))).map((kvs) => {
    const out: Record<string, PropExpr> = {};
    for (const [k, v] of kvs) if (k) out[k] = v;
    return out;
  });

const AttrPair = (): P.Parser<[string, PropExpr]> =>
  P.seqMap(Ident, lex(P.string("=")), Value(), (k, _eq, v) => [k, v]);

const BodyItem = (): P.Parser<PropExpr> =>
  P.alt(InlineNode(), String_(), BodyChunk());

const BodyList = (): P.Parser<PropExpr[]> =>
  P.sepBy(BodyItem(), wsp);

const BodyChunk = (): P.Parser<PropExpr> =>
  // take a run of text that doesn't start a new inline (:) and doesn't close the body (])
  P.regexp(/[^:\]\n][^\]\n]*/).map<PropExpr>((s) => ({ kind: "lit", value: s.trim() })).fallback({ kind: "lit", value: "" });

/* ── utils ───────────────────────────────────────────────── */

function unescapeStr(s: string) {
  // handle \" \' \\ \n \r \t
  return s.replace(/\\(["'\\nrt])/g, (_m, g1) => {
    if (g1 === "n") return "\n";
    if (g1 === "r") return "\r";
    if (g1 === "t") return "\t";
    return g1;
  });
}
