import { describe, it } from "node:test";
import assert from "node:assert/strict";
import type { Root, Blockquote, Paragraph, Heading } from "mdast";
import { transformCallouts } from "../remark-callout/transform";
import { transformNestedHeadings } from "../remark-nested-heading/transform";

const pos = (start: number, end: number = start + 1) => ({
  start: { offset: start, line: 1, column: start + 1 },
  end: { offset: end, line: 1, column: end + 1 }
});

describe("remark transforms", () => {
  it("promotes blockquotes to callouts with paragraph titles", () => {
    const titlePara: Paragraph = {
      type: "paragraph",
      children: [{ type: "text", value: "[!tip] Title", position: pos(5, 18) } as any],
      position: pos(5, 18)
    };
    const bodyPara: Paragraph = {
      type: "paragraph",
      children: [{ type: "text", value: "Body", position: pos(18, 22) } as any],
      position: pos(18, 22)
    };
    const blockquote: Blockquote = {
      type: "blockquote",
      children: [titlePara, bodyPara],
      position: pos(0, 22)
    } as any;
    const root: Root = { type: "root", children: [blockquote], position: pos(0, 22) } as any;

    transformCallouts()(root as any);

    const callout = root.children[0] as any;
    assert.equal(callout.type, "callout");
    assert.equal(callout.calloutType, "tip");
    assert.equal(callout.children.length, 1);
    assert.strictEqual(callout.children[0], bodyPara);

    const title = callout.title;
    assert.equal(title?.type, "paragraph");
    const text = title?.children?.[0] as any;
    assert.equal(text.value, "Title");
    assert.equal(title?.position?.start.offset, 5);
    assert.equal(title?.position?.end.offset, 18);

    assert.equal(callout.position?.start.offset, 0);
    assert.equal(callout.position?.end.offset, 22);
  });

  it("wraps heading lines into paragraph titles and nests body", () => {
    const heading: Heading = {
      type: "heading",
      depth: 1,
      children: [{ type: "text", value: "Heading", position: pos(0, 7) } as any],
      position: pos(0, 7)
    } as any;

    const paragraph: Paragraph = {
      type: "paragraph",
      children: [{ type: "text", value: "Details", position: pos(8, 15) } as any],
      position: pos(8, 15)
    };

    const subHeading: Heading = {
      type: "heading",
      depth: 2,
      children: [{ type: "text", value: "Sub", position: pos(16, 20) } as any],
      position: pos(16, 20)
    } as any;

    const subBody: Paragraph = {
      type: "paragraph",
      children: [{ type: "text", value: "Nested", position: pos(21, 28) } as any],
      position: pos(21, 28)
    };

    const root: Root = {
      type: "root",
      children: [heading, paragraph, subHeading, subBody],
      position: pos(0, 28)
    } as any;

    transformNestedHeadings()(root as any);

    assert.equal(root.children.length, 1);
    const section = root.children[0] as any;
    assert.equal(section.type, "heading");
    assert.equal(section.title?.type, "paragraph");
    assert.equal(section.title?.children?.[0]?.value, "Heading");

    assert.equal(section.children.length, 2);
    assert.strictEqual(section.children[0], paragraph);

    const nested = section.children[1] as any;
    assert.equal(nested.type, "heading");
    assert.equal(nested.title?.children?.[0]?.value, "Sub");
    assert.equal(nested.children.length, 1);
    assert.strictEqual(nested.children[0], subBody);

    assert.equal(section.position?.start.offset, 0);
    assert.equal(section.position?.end.offset, subBody.position?.end.offset);
    assert.equal(nested.position?.start.offset, subHeading.position?.start.offset);
    assert.equal(nested.position?.end.offset, subBody.position?.end.offset);
  });
});
