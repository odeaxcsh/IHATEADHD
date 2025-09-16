import test from "node:test";
import assert from "node:assert/strict";
import { expandFieldChain } from "../unit-select-extention/expand";
import { buildParentMap } from "../unit-select-extention/traverse";

test("expandFieldChain navigates structural helpers", () => {
  const heading: any = {
    type: "heading",
    title: [{ type: "text", value: "Hello" }],
    children: [{ type: "paragraph", children: [{ type: "text", value: "Body" }] }]
  };
  const root: any = { type: "root", children: [heading] };
  const parentMap = buildParentMap(root);

  const titleNodes = expandFieldChain([heading], ["title"], { parentMap });
  assert.strictEqual(titleNodes.length, 1);
  assert.strictEqual(titleNodes[0]?.type, "paragraph");

  const children = expandFieldChain([heading], ["children"], { parentMap });
  assert.deepStrictEqual(children, heading.children);

  const parentViaField = expandFieldChain([heading.children[0]], ["parent"], { parentMap });
  assert.deepStrictEqual(parentViaField, [heading]);
});

test("expandFieldChain ignores primitive values", () => {
  const node: any = { type: "paragraph", value: "plain" };
  const result = expandFieldChain([node], ["value"]);
  assert.deepStrictEqual(result, []);
});
