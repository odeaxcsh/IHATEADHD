import test from "node:test";
import assert from "node:assert/strict";
import type { Root } from "mdast";
import { enrichFieldsAndTags } from "../unit-select-extention/enrich";

test("enrichFieldsAndTags collects inline metadata across nodes", () => {
  const ast: Root = {
    type: "root",
    children: [
      {
        type: "paragraph",
        children: [
          { type: "text", value: "Prep " },
          { type: "inlineField", key: "priority", value: "High" },
          { type: "mdTag", value: "#ProjectX" }
        ]
      },
      {
        type: "heading",
        depth: 2,
        title: [
          { type: "text", value: "Sprint " },
          { type: "mdTag", value: "focus" }
        ],
        children: [{ type: "text", value: "Heading body" }]
      },
      {
        type: "list",
        children: [
          {
            type: "listItem",
            children: [
              {
                type: "paragraph",
                children: [{ type: "inlineField", key: "status", value: "Done" }]
              }
            ]
          }
        ]
      },
      {
        type: "callout",
        title: {
          type: "paragraph",
          children: [{ type: "mdTag", value: "#Tip" }]
        },
        children: [
          {
            type: "paragraph",
            children: [
              { type: "text", value: "Remember " },
              { type: "inlineField", key: "owner", value: "Ada" }
            ]
          }
        ]
      }
    ]
  } as any;

  enrichFieldsAndTags(ast);

  const paragraph = ast.children[0] as any;
  assert.strictEqual(paragraph.fields.priority, "High");
  assert.deepStrictEqual(paragraph.tags, ["projectx"]);

  const heading = ast.children[1] as any;
  assert.ok(heading.tags.includes("focus"));

  const listItem = ((ast.children[2] as any).children[0]) as any;
  assert.strictEqual(listItem.fields.status, "Done");

  const callout = ast.children[3] as any;
  assert.strictEqual(callout.fields.owner, "Ada");
  assert.ok(callout.tags.includes("tip"));
});
