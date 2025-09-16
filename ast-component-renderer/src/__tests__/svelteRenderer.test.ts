import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { SvelteRenderer } from "../renderers/svelte.js";
import type { MdNode, RenderContext } from "../types.js";
import { setupDom } from "./testDom.js";

setupDom();

class FakeComponent {
  static lastInstance: FakeComponent | null = null;
  public options: { target: HTMLElement; props: Record<string, unknown> };
  public destroyed = false;

  constructor(options: { target: HTMLElement; props: Record<string, unknown> }) {
    this.options = options;
    FakeComponent.lastInstance = this;
  }

  $destroy() {
    this.destroyed = true;
  }
}

describe("SvelteRenderer", () => {
  it("instantiates the Svelte component with merged props", () => {
    const renderer = new SvelteRenderer(FakeComponent as any, { extra: true }, "after-heading");
    const mountTarget = document.createElement("div");
    const node: MdNode = { type: "comment" };

    const rc: RenderContext = {
      app: {} as any,
      plugin: {} as any,
      filePath: "demo.md",
      ctx: {} as any
    };

    renderer.render(node, mountTarget, rc);
    assert.equal(FakeComponent.lastInstance?.options.target, mountTarget);
    assert.deepEqual(FakeComponent.lastInstance?.options.props, {
      node,
      filePath: "demo.md",
      app: rc.app,
      plugin: rc.plugin,
      extra: true
    });
  });

  it("exposes the mount policy passed to the constructor", () => {
    const renderer = new SvelteRenderer(FakeComponent as any, {}, "append-inside-li");
    assert.equal(renderer.mountPolicy, "append-inside-li");
  });

  it("destroys mounted components during cleanup", () => {
    const renderer = new SvelteRenderer(FakeComponent as any, {});
    const mountTarget = document.createElement("div");
    const node: MdNode = { type: "comment" };
    const rc: RenderContext = { app: {} as any, plugin: {} as any, filePath: "demo.md", ctx: {} as any };

    renderer.render(node, mountTarget, rc);
    const instance = FakeComponent.lastInstance;
    assert.ok(instance && !instance.destroyed);

    renderer.cleanup(mountTarget);
    assert.equal(instance?.destroyed, true);
  });
});
