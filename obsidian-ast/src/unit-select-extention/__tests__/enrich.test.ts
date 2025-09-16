import { describe, it } from "node:test";
import assert from "node:assert/strict";
import type { Root } from "mdast";
import { enrichFieldsAndTags } from "../enrich";

const pos = (start: number, end: number = start + 1) => ({
  position: {
    start: { offset: start, line: 1, column: start + 1 },
    end: { offset: end, line: 1, column: end + 1 }
  }
});

describe("enrichFieldsAndTags", () => {
  it("collects inline fields and tags across common containers", () => {
    const heading = {
      type: "heading",
      depth: 1,
      title: {
        type: "paragraph",
        children: [{ type: "inlineField", key: "owner", value: "Ada", ...pos(10) }],
        ...pos(0, 5)
      },
      children: [],
      ...pos(0, 5)
    } as any;

    const paragraph = {
      type: "paragraph",
      children: [
        { type: "inlineField", key: "status", value: "open", ...pos(6) },
        { type: "mdTag", value: "ProjectX", ...pos(7) }
      ],
      ...pos(6, 12)
    } as any;

    const listItem = {
      type: "listItem",
      children: [
        {
          type: "paragraph",
          children: [{ type: "mdTag", value: "Task", ...pos(12) }],
          ...pos(12, 16)
        }
      ],
      ...pos(12, 20)
    } as any;

    const callout = {
      type: "callout",
      title: { type: "paragraph", children: [{ type: "inlineField", key: "kind", value: "Tip", ...pos(20) }], ...pos(20, 22) },
      children: [{ type: "paragraph", children: [{ type: "mdTag", value: "#Hint", ...pos(22) }], ...pos(22, 26) }],
      ...pos(20, 30)
    } as any;

    const root: Root = {
      type: "root",
      children: [heading, paragraph, listItem, callout],
      ...pos(0, 30)
    } as any;

    enrichFieldsAndTags(root);

    assert.deepEqual(heading.fields, { owner: "Ada" });
    assert.deepEqual(paragraph.fields, { status: "open" });
    assert.deepEqual(paragraph.tags, ["projectx"]);
    assert.ok(listItem.tags?.includes("task"));
    assert.deepEqual(callout.fields, { kind: "Tip" });
    assert.ok(callout.tags?.includes("hint"));
  });
});
