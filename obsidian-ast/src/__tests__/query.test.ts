import test from "node:test";
import assert from "node:assert/strict";
import type { Root } from "mdast";
import { selectExtended, makeChain } from "../unit-select-extention";
import { enrichFieldsAndTags } from "../unit-select-extention/enrich";

function buildAst(): Root {
  const para1: any = {
    type: "paragraph",
    position: { start: { offset: 0, line: 1 }, end: { offset: 40, line: 1 } },
    children: [
      { type: "text", value: "Alpha " },
      { type: "inlineField", key: "priority", value: "high" },
      { type: "text", value: " task" }
    ]
  };

  const para2: any = {
    type: "paragraph",
    position: { start: { offset: 41, line: 3 }, end: { offset: 70, line: 3 } },
    children: [{ type: "text", value: "Gamma" }]
  };

  const heading: any = {
    type: "heading",
    depth: 2,
    position: { start: { offset: 80, line: 5 }, end: { offset: 120, line: 5 } },
    children: [{ type: "text", value: "Section" }]
  };

  const ast: Root = {
    type: "root",
    children: [para1, para2, heading],
    position: { start: { offset: 0, line: 1 }, end: { offset: 120, line: 5 } }
  } as any;

  enrichFieldsAndTags(ast);
  return ast;
}

test("selectExtended filters by field comparisons", () => {
  const ast = buildAst();
  const matches = selectExtended(ast as any, "paragraph[field.priority=\"high\"]");
  assert.strictEqual(matches.length, 1);
  assert.strictEqual(matches[0].type, "paragraph");
  assert.strictEqual((matches[0] as any).fields.priority, "high");
});

test("selectExtended supports regex comparisons", () => {
  const ast = buildAst();
  const matches = selectExtended(ast as any, "text[value~=/(alpha|gamma)/i]");
  assert.deepStrictEqual(matches.map(n => (n as any).value), ["Alpha ", "Gamma"]);
});

test("makeChain composes selector operations", async () => {
  const ast = buildAst();
  const chain = makeChain(Promise.resolve(ast as any), Promise.resolve([ast.children[0] as any]));
  const result = await chain
    .select("paragraph")
    .visit("heading", () => Promise.resolve())
    .toArray();

  assert.strictEqual(result.length, 1);
  assert.strictEqual(result[0], ast.children[0]);
});
