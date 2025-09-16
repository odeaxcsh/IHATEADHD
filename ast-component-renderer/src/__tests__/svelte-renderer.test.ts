import test from "node:test";
import assert from "node:assert/strict";
import { SvelteRenderer } from "../renderers/svelte";
import type { MdNode, RenderContext } from "../types";
import { installDom } from "./dom-stubs";

installDom();

class FakeSvelteComponent {
  static instances: Array<{ target: HTMLElement; props: Record<string, unknown> }> = [];

  constructor(config: { target: HTMLElement; props: Record<string, unknown> }) {
    FakeSvelteComponent.instances.push(config);
  }
}

test("SvelteRenderer instantiates the component with merged props", () => {
  FakeSvelteComponent.instances = [];

  const renderer = new SvelteRenderer(FakeSvelteComponent as any, { icon: "🗨" }, "after-anchor");
  const mount = document.createElement("div");
  const node: MdNode = { type: "comment", position: {} };

  const rc: RenderContext = {
    app: {} as any,
    plugin: {} as any,
    filePath: "folder/note.md",
    ctx: {} as any
  };

  const result = renderer.render(node, mount as unknown as HTMLElement, rc);

  assert.strictEqual(result, mount);
  assert.strictEqual(FakeSvelteComponent.instances.length, 1);
  const instance = FakeSvelteComponent.instances[0];
  assert.strictEqual(instance.target, mount);
  assert.strictEqual(instance.props.node, node);
  assert.strictEqual(instance.props.icon, "🗨");
  assert.strictEqual(instance.props.filePath, "folder/note.md");
  assert.strictEqual(instance.props.plugin, rc.plugin);
});

test("SvelteRenderer exposes the configured mount policy", () => {
  const renderer = new SvelteRenderer(FakeSvelteComponent as any, {}, "before-anchor");
  assert.strictEqual(renderer.mountPolicy, "before-anchor");
});
