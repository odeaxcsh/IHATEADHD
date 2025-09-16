import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { InMemoryRegistry } from "../registry.js";
import type { ComponentRenderer, MdNode } from "../types.js";
import { setupDom } from "./testDom.js";

setupDom();

describe("InMemoryRegistry", () => {
  const createRenderer = (): ComponentRenderer => ({
    render: (node: MdNode, target: HTMLElement) => {
      target.dataset.rendered = node.type;
      return target;
    }
  });

  it("stores and retrieves component renderers by type", () => {
    const registry = new InMemoryRegistry();
    const renderer = createRenderer();

    registry.register({ type: "comment", renderer });

    assert.equal(registry.get("comment"), renderer);
    assert.equal(registry.get("missing"), undefined);
  });

  it("lists registered types in insertion order", () => {
    const registry = new InMemoryRegistry();
    registry.register({ type: "comment", renderer: createRenderer() });
    registry.register({ type: "callout", renderer: createRenderer() });

    assert.deepEqual(registry.listTypes(), ["comment", "callout"]);
  });
});
