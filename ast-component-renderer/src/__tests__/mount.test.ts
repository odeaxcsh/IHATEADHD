import test from "node:test";
import assert from "node:assert/strict";
import { pickAnchorByLinesInScope, placeMount, nodeId } from "../mount";
import type { MdNode } from "../types";
import { FakeElement, installDom } from "./dom-stubs";

installDom();

function makeCtx(sectionByEl: Map<FakeElement, { lineStart: number; lineEnd: number }>) {
  return {
    getSectionInfo: (el: HTMLElement) => sectionByEl.get(el as unknown as FakeElement) ?? null
  } as any;
}

test("pickAnchorByLinesInScope prefers the tightest matching section", () => {
  const scope = document.createElement("div") as unknown as FakeElement;
  const para = document.createElement("p") as unknown as FakeElement;
  const blockquote = document.createElement("blockquote") as unknown as FakeElement;
  scope.appendChild(para);
  scope.appendChild(blockquote);

  const sections = new Map<FakeElement, { lineStart: number; lineEnd: number }>();
  sections.set(scope, { lineStart: 0, lineEnd: 100 });
  sections.set(para, { lineStart: 10, lineEnd: 20 });
  sections.set(blockquote, { lineStart: 5, lineEnd: 40 });

  const ctx = makeCtx(sections);
  const node: MdNode = { type: "paragraph", position: { start: { line: 12 }, end: { line: 14 } } };

  const anchor = pickAnchorByLinesInScope(scope as unknown as HTMLElement, ctx, node);
  assert.strictEqual(anchor, para);
});

test("pickAnchorByLinesInScope returns null when nothing matches", () => {
  const scope = document.createElement("div") as unknown as FakeElement;
  const para = document.createElement("p") as unknown as FakeElement;
  scope.appendChild(para);

  const sections = new Map<FakeElement, { lineStart: number; lineEnd: number }>();
  sections.set(scope, { lineStart: 0, lineEnd: 5 });
  sections.set(para, { lineStart: 0, lineEnd: 5 });

  const ctx = makeCtx(sections);
  const node: MdNode = { type: "paragraph", position: { start: { line: 20 }, end: { line: 21 } } };

  const anchor = pickAnchorByLinesInScope(scope as unknown as HTMLElement, ctx, node);
  assert.strictEqual(anchor, null);
});

test("placeMount respects before/after policies", () => {
  const parent = document.createElement("div") as unknown as FakeElement;
  const anchor = document.createElement("p") as unknown as FakeElement;
  parent.appendChild(anchor);

  const beforeHost = placeMount("before-anchor", anchor as unknown as HTMLElement) as FakeElement;
  assert.strictEqual(beforeHost.parentElement, parent);
  assert.strictEqual(parent.firstChild, beforeHost);

  const afterHost = placeMount("after-anchor", anchor as unknown as HTMLElement) as FakeElement;
  assert.strictEqual(afterHost.parentElement, parent);
  assert.strictEqual(parent.lastChild, afterHost);
});

test("placeMount can append inside the nearest list item", () => {
  const list = document.createElement("ul") as unknown as FakeElement;
  const li = document.createElement("li") as unknown as FakeElement;
  li.className = "task-list-item";
  const paragraph = document.createElement("p") as unknown as FakeElement;
  li.appendChild(paragraph);
  list.appendChild(li);

  const host = placeMount("append-inside-li", paragraph as unknown as HTMLElement) as FakeElement;
  assert.strictEqual(host.parentElement, li);
});

test("nodeId creates stable identifiers", () => {
  const node: MdNode = {
    type: "callout",
    position: {
      start: { offset: 5, line: 3 },
      end: { offset: 25, line: 6 }
    }
  };
  assert.strictEqual(nodeId(node), "callout:5-25");
});

test("nodeId falls back when offsets are missing", () => {
  const node: MdNode = { type: "unknown", position: {} };
  assert.strictEqual(nodeId(node), "unknown:-1--1");
});
