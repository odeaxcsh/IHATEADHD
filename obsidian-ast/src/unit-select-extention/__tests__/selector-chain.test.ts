import { describe, it } from "node:test";
import assert from "node:assert/strict";
import type { Root } from "mdast";
import { selectExtended, makeChain } from "../index";

const pos = (start: number, end: number = start + 1) => ({
  position: {
    start: { offset: start, line: 1, column: start + 1 },
    end: { offset: end, line: 1, column: end + 1 }
  }
});

function buildAst() {
  const headingTitle = { type: "paragraph", children: [{ type: "text", value: "Heading", ...pos(0) }], ...pos(0, 5) } as any;
  const heading: any = { type: "heading", depth: 1, children: [], title: headingTitle, ...pos(0, 5) };
  const paragraphOpen: any = {
    type: "paragraph",
    children: [{ type: "text", value: "Intro", ...pos(6) }],
    fields: { status: "open" },
    ...pos(6, 15)
  };
  const paragraphDone: any = {
    type: "paragraph",
    children: [{ type: "text", value: "Task", ...pos(16) }],
    fields: { status: "done" },
    ...pos(16, 25)
  };
  const listItem: any = { type: "listItem", children: [paragraphDone], ...pos(15, 28) };

  const root: Root = {
    type: "root",
    children: [heading, paragraphOpen, listItem],
    ...pos(0, 30)
  } as any;

  return { root, heading, headingTitle, paragraphOpen, paragraphDone, listItem };
}

describe("selectExtended", () => {
  it("filters by custom field values", () => {
    const { root, paragraphOpen } = buildAst();
    const result = selectExtended(root as any, "paragraph[field.status=\"open\"]", [root as any]);
    assert.deepEqual(result, [paragraphOpen]);
  });

  it("navigates descendant relationships", () => {
    const { root, paragraphDone } = buildAst();
    const result = selectExtended(root as any, "listItem >> paragraph", [root as any]);
    assert.deepEqual(result, [paragraphDone]);
  });

  it("supports @ hop selectors", () => {
    const { root, paragraphDone } = buildAst();
    const results = selectExtended(root as any, "@2", [root as any]);
    const values = results.map((n: any) => n.value ?? n.type);
    assert.deepEqual(values.sort(), ["Intro", "paragraph", "paragraph"].sort());
    assert.ok(results.includes(paragraphDone));
  });

  it("includes heading titles in direct child traversal", () => {
    const { root, headingTitle } = buildAst();
    const result = selectExtended(root as any, "heading > paragraph", [root as any]);
    assert.deepEqual(result, [headingTitle]);
  });

  it("visits nodes inside titles when recursing", () => {
    const { root } = buildAst();
    const result = selectExtended(root as any, "heading >> text[value=\"Heading\"]", [root as any]);
    assert.equal(result.length, 1);
    assert.equal(result[0]?.type, "text");
  });
});

describe("makeChain", () => {
  it("chains selections, filters and visits", async () => {
    const { root, paragraphDone } = buildAst();
    const astPromise = Promise.resolve(root as any);
    const nodesPromise = Promise.resolve([root as any]);
    const chain = makeChain(astPromise as any, nodesPromise as any);

    const paragraphs = await chain.select("paragraph").toArray();
    assert.equal(paragraphs.length, 3);

    const visited: string[] = [];
    const texts = await chain
      .select("paragraph")
      .visit("text", (node: any) => { if (node.value) visited.push(node.value); }, true)
      .toArray();

    assert.equal(texts.every((n: any) => n.type === "text"), true);
    assert.deepEqual(visited.sort(), ["Heading", "Intro", "Task"].sort());

    const filtered = await chain
      .select("paragraph")
      .filter(async (node: any) => node.fields?.status === "done")
      .toArray();

    assert.deepEqual(filtered, [paragraphDone]);
  });
});
