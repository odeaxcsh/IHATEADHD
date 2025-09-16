import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { expandFieldChain } from "../expand";

const pos = (offset: number) => ({
  position: {
    start: { offset, line: 1, column: offset + 1 },
    end: { offset: offset + 1, line: 1, column: offset + 2 }
  }
});

describe("expandFieldChain", () => {
  it("returns paragraph titles directly", () => {
    const heading: any = {
      type: "heading",
      title: { type: "paragraph", children: [{ type: "text", value: "Hello", ...pos(0) }], ...pos(0) },
      ...pos(0)
    };

    const result = expandFieldChain([heading], ["title"]);
    assert.equal(result.length, 1);
    assert.strictEqual(result[0], heading.title);
  });

  it("wraps legacy title arrays into a paragraph", () => {
    const heading: any = {
      type: "heading",
      title: [{ type: "text", value: "Legacy", ...pos(2) }],
      ...pos(2)
    };

    const result = expandFieldChain([heading], ["title"]);
    assert.equal(result.length, 1);
    assert.equal(result[0].type, "paragraph");
    assert.deepEqual(result[0].children, heading.title);
  });

  it("expands children arrays and respects parent mapping", () => {
    const child: any = { type: "paragraph", ...pos(4) };
    const parent: any = { type: "listItem", children: [child], ...pos(2) };
    child.parent = parent;

    const ctx = { parentMap: new WeakMap<any, any | null>([[child, parent], [parent, null]]) };

    const children = expandFieldChain([parent], ["children"]);
    assert.deepEqual(children, [child]);

    const parents = expandFieldChain([child], ["parent"], ctx);
    assert.deepEqual(parents, [parent]);
  });

  it("throws when asked to expand a non-node field", () => {
    const paragraph: any = { type: "paragraph", meta: "plain", ...pos(6) };

    assert.throws(() => {
      expandFieldChain([paragraph], ["meta"]);
    }, /Cannot expand non-node field/);
  });
});
