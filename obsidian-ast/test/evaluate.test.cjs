const assert = require("node:assert/strict");
const { describe, it } = require("node:test");

const { evaluateQuery } = require("../build-tests/lang/evaluate.js");
const { SelectorError } = require("../build-tests/lang/ast.js");

const QueryKinds = {
  UNION: "union",
  INTERSECT: "intersect",
  CHAIN: "chain",
  SEGMENT: "segment",
  OR: "or",
  AND: "and",
  CMP: "cmp"
};

function makeCmpQuery(op, value) {
  return {
    kind: QueryKinds.UNION,
    terms: [
      {
        kind: QueryKinds.INTERSECT,
        terms: [
          {
            kind: QueryKinds.CHAIN,
            head: {
              kind: QueryKinds.SEGMENT,
              seg: {
                base: "text",
                fields: [],
                filters: [
                  {
                    kind: QueryKinds.OR,
                    terms: [
                      {
                        kind: QueryKinds.AND,
                        terms: [
                          {
                            kind: QueryKinds.CMP,
                            key: { raw: "value", isField: false },
                            op,
                            value
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            },
            steps: []
          }
        ]
      }
    ]
  };
}

function makeText(value, start) {
  return {
    type: "text",
    value,
    position: {
      start: { offset: start },
      end: { offset: start + value.length }
    }
  };
}

function makeParagraph(child) {
  const start = child.position?.start?.offset ?? 0;
  const end = child.position?.end?.offset ?? start;
  return {
    type: "paragraph",
    children: [child],
    position: {
      start: { offset: start },
      end: { offset: end }
    }
  };
}

function createSampleAst() {
  const hello = makeText("Hello world", 0);
  const note = makeText("Another note", 12);
  const numbers = makeText("Numbers 123", 25);

  const root = {
    type: "root",
    position: {
      start: { offset: 0 },
      end: { offset: numbers.position?.end?.offset ?? 0 }
    },
    children: [makeParagraph(hello), makeParagraph(note), makeParagraph(numbers)]
  };

  return { root, hello, note, numbers };
}

describe("evaluateQuery ~= comparator", () => {
  it("matches nodes when using a regex literal", () => {
    const { root, hello } = createSampleAst();
    const query = makeCmpQuery("~=", { kind: "regex", pattern: "hello", flags: "i" });
    const results = evaluateQuery(root, query);

    assert.equal(results.length, 1);
    assert.strictEqual(results[0], hello);
  });

  it("treats string literals as regular expressions", () => {
    const { root, note } = createSampleAst();
    const query = makeCmpQuery("~=", { kind: "str", value: "note" });
    const results = evaluateQuery(root, query);

    assert.equal(results.length, 1);
    assert.strictEqual(results[0], note);
  });

  it("supports numeric literals when building regexes", () => {
    const { root, numbers } = createSampleAst();
    const query = makeCmpQuery("~=", { kind: "num", value: 123 });
    const results = evaluateQuery(root, query);

    assert.equal(results.length, 1);
    assert.strictEqual(results[0], numbers);
  });

  it("does not leak global regex state between nodes", () => {
    const { root, hello, note } = createSampleAst();
    const query = makeCmpQuery("~=", { kind: "regex", pattern: "o", flags: "g" });

    const first = evaluateQuery(root, query);
    const second = evaluateQuery(root, query);

    assert.deepEqual(first, [hello, note]);
    assert.deepEqual(second, [hello, note]);
  });

  it("requires ~= when a regex literal is provided", () => {
    const { root } = createSampleAst();
    const query = makeCmpQuery("=", { kind: "regex", pattern: "hello", flags: "" });

    assert.throws(() => evaluateQuery(root, query), SelectorError);
  });

  it("surfaces invalid regular expressions", () => {
    const { root } = createSampleAst();
    const query = makeCmpQuery("~=", { kind: "regex", pattern: "(", flags: "" });

    assert.throws(() => evaluateQuery(root, query), SelectorError);
  });
});
