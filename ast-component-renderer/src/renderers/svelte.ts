import type { ComponentRenderer, RenderContext, MdNode, MountPolicy } from "../types";

export class SvelteRenderer implements ComponentRenderer {
  constructor(
    private SvelteComponent: any,
    private defaultProps: Record<string, any> = {},
    public mountPolicy: MountPolicy = "append-inside-block"
  ) {}
  render(node: MdNode, mountTarget: HTMLElement, rc: RenderContext): HTMLElement {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const app = new this.SvelteComponent({
      target: mountTarget,
      props: { node, filePath: rc.filePath, app: rc.app, plugin: rc.plugin, ...this.defaultProps }
    });
    return mountTarget;
  }
}

