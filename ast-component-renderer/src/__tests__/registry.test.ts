import test from "node:test";
import assert from "node:assert/strict";
import { InMemoryRegistry } from "../registry";
import type { ComponentRenderer, MdNode, RenderContext } from "../types";

class StubRenderer implements ComponentRenderer {
  mountPolicy = "before-anchor" as const;
  render(node: MdNode, mountTarget: HTMLElement, _rc: RenderContext) {
    mountTarget.setAttribute("data-rendered", node.type);
    return mountTarget;
  }
}

test("InMemoryRegistry registers and retrieves renderers", () => {
  const registry = new InMemoryRegistry();
  const renderer = new StubRenderer();

  registry.register({ type: "comment", renderer });

  assert.strictEqual(registry.get("comment"), renderer);
  assert.strictEqual(registry.get("missing"), undefined);
});

test("InMemoryRegistry lists types in insertion order", () => {
  const registry = new InMemoryRegistry();
  registry.register({ type: "alpha", renderer: new StubRenderer() });
  registry.register({ type: "beta", renderer: new StubRenderer() });

  assert.deepStrictEqual(registry.listTypes(), ["alpha", "beta"]);
});
