import { describe, it } from "node:test";
import assert from "node:assert/strict";
import type { Root } from "mdast";
import { transformCallouts } from "../remark-callout/transform";
import { transformNestedHeadings } from "../remark-nested-heading/transform";

const pos = (start: number, end: number, line = 1) => ({
  position: {
    start: { offset: start, line, column: start + 1 },
    end: { offset: end, line, column: end + 1 }
  }
});

describe("remark callout transform", () => {
  it("wraps the callout title in a paragraph and unions positions", () => {
    const blockquote: any = {
      type: "blockquote",
      children: [
        {
          type: "paragraph",
          children: [
            { type: "text", value: "[!note]+ Title", ...pos(0, 14) }
          ],
          ...pos(0, 14)
        },
        {
          type: "paragraph",
          children: [{ type: "text", value: "Body", ...pos(15, 19) }],
          ...pos(15, 19)
        }
      ],
      ...pos(0, 19)
    };

    const root: Root = { type: "root", children: [blockquote], ...pos(0, 19) } as any;

    transformCallouts()(root);

    const callout = root.children[0] as any;
    assert.equal(callout.type, "callout");
    assert.equal(callout.calloutType, "note");
    assert.equal(callout.expanded, "open");
    assert.equal(callout.title.type, "paragraph");
    assert.equal(callout.title.children[0].value, "Title");
    assert.equal(callout.children.length, 1);
    assert.equal(callout.children[0].children[0].value, "Body");
    assert.equal(callout.position.start.offset, 0);
    assert.equal(callout.position.end.offset, 19);
    assert.equal(callout.title.position.start.offset, 0);
    assert.equal(callout.title.position.end.offset, 14);
  });
});

describe("remark nested heading transform", () => {
  it("promotes inline children to a title paragraph and unions section range", () => {
    const heading: any = {
      type: "heading",
      depth: 2,
      children: [{ type: "text", value: "Section", ...pos(0, 7) }],
      ...pos(0, 7)
    };
    const paragraph: any = {
      type: "paragraph",
      children: [{ type: "text", value: "Content", ...pos(8, 15) }],
      ...pos(8, 15)
    };
    const root: Root = { type: "root", children: [heading, paragraph], ...pos(0, 15) } as any;

    transformNestedHeadings()(root);

    assert.equal(root.children.length, 1);
    const section = root.children[0] as any;
    assert.equal(section.type, "heading");
    assert.equal(section.title.type, "paragraph");
    assert.equal(section.title.children[0].value, "Section");
    assert.equal(section.children.length, 1);
    assert.equal(section.children[0], paragraph);
    assert.equal(section.position.start.offset, 0);
    assert.equal(section.position.end.offset, 15);
    assert.equal(section.title.position.start.offset, 0);
    assert.equal(section.title.position.end.offset, 7);
  });
});
