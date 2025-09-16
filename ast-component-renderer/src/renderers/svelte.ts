import type { ComponentRenderer, RenderContext, MdNode, MountPolicy } from "../types.js";

export class SvelteRenderer implements ComponentRenderer {
  private instances = new WeakMap<HTMLElement, any>();
  constructor(
    private SvelteComponent: any,
    private defaultProps: Record<string, any> = {},
    public mountPolicy: MountPolicy = "append-inside-block"
  ) {}
  render(node: MdNode, mountTarget: HTMLElement, rc: RenderContext): void {
    const prev = this.instances.get(mountTarget);
    if (prev && typeof prev.$destroy === "function") prev.$destroy();
    const instance = new this.SvelteComponent({
      target: mountTarget,
      props: { node, filePath: rc.filePath, app: rc.app, plugin: rc.plugin, ...this.defaultProps }
    });
    this.instances.set(mountTarget, instance);
  }

  cleanup(mountTarget: HTMLElement): void {
    const instance = this.instances.get(mountTarget);
    if (instance && typeof instance.$destroy === "function") {
      instance.$destroy();
    }
    this.instances.delete(mountTarget);
  }
}

