import { beforeEach, describe, it } from "node:test";
import assert from "node:assert/strict";
import { pickAnchorByLinesInScope, placeMount, nodeId } from "../mount.js";
import type { MarkdownPostProcessorContext } from "obsidian";
import type { MdNode } from "../types.js";
import { setupDom } from "./testDom.js";

setupDom();

describe("pickAnchorByLinesInScope", () => {
  let scope: HTMLElement;
  let ctx: MarkdownPostProcessorContext;

  beforeEach(() => {
    document.body.innerHTML = "";
    scope = document.createElement("div");
    scope.className = "markdown-preview-view";
    document.body.appendChild(scope);
  });

  it("returns the smallest section containing the node range", () => {
    const paragraph = document.createElement("p");
    const listItem = document.createElement("li");
    scope.append(paragraph, listItem);

    const sections = new Map<HTMLElement, { lineStart: number; lineEnd: number }>([
      [scope, { lineStart: 0, lineEnd: 10 }],
      [paragraph, { lineStart: 0, lineEnd: 1 }],
      [listItem, { lineStart: 5, lineEnd: 8 }]
    ]);

    ctx = {
      getSectionInfo: (el: HTMLElement) => sections.get(el) ?? null
    } as unknown as MarkdownPostProcessorContext;

    const node: MdNode = {
      type: "test",
      position: { start: { line: 1 }, end: { line: 2 } }
    };

    const anchor = pickAnchorByLinesInScope(scope, ctx, node);
    assert.equal(anchor, paragraph);
  });

  it("returns null when no section covers the node", () => {
    const paragraph = document.createElement("p");
    scope.append(paragraph);

    const sections = new Map<HTMLElement, { lineStart: number; lineEnd: number }>([
      [scope, { lineStart: 0, lineEnd: 2 }],
      [paragraph, { lineStart: 0, lineEnd: 1 }]
    ]);

    ctx = {
      getSectionInfo: (el: HTMLElement) => sections.get(el) ?? null
    } as unknown as MarkdownPostProcessorContext;

    const node: MdNode = {
      type: "test",
      position: { start: { line: 5 }, end: { line: 6 } }
    };

    const anchor = pickAnchorByLinesInScope(scope, ctx, node);
    assert.equal(anchor, null);
  });
});

describe("placeMount", () => {
  const createAnchor = () => {
    const parent = document.createElement("div");
    const anchor = document.createElement("div");
    parent.appendChild(anchor);
    return { parent, anchor };
  };

  it("inserts host after the anchor when policy is after-heading", () => {
    const { parent, anchor } = createAnchor();
    const host = placeMount("after-heading", anchor);
    assert.equal(parent.children[0], anchor);
    assert.equal(parent.children[1], host);
  });

  it("appends host to the nearest list item for append-inside-li", () => {
    const list = document.createElement("ul");
    const listItem = document.createElement("li");
    const paragraph = document.createElement("p");
    listItem.appendChild(paragraph);
    list.appendChild(listItem);

    const host = placeMount("append-inside-li", paragraph);
    assert.equal(listItem.contains(host), true);
    assert.equal(paragraph.contains(host), false);
  });

  it("defaults to appending inside the anchor", () => {
    const div = document.createElement("div");
    const host = placeMount("append-inside-block", div);
    assert.equal(div.contains(host), true);
  });
});

describe("nodeId", () => {
  it("combines type and offsets", () => {
    const node: MdNode = {
      type: "callout",
      position: {
        start: { offset: 10 },
        end: { offset: 42 }
      }
    };

    assert.equal(nodeId(node), "callout:10-42");
  });

  it("falls back to defaults when offsets are missing", () => {
    const node: MdNode = { type: "paragraph" };
    assert.equal(nodeId(node), "paragraph:-1--1");
  });
});
