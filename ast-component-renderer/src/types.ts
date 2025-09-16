import type { App, MarkdownPostProcessorContext, Plugin } from "obsidian";

export type MdPoint = { line?: number; column?: number; offset?: number };
export type MdPosition = { start?: MdPoint; end?: MdPoint };
export interface MdNode { type: string; position?: MdPosition; [k: string]: any; }

export type MountPolicy = "append-inside-block" | "append-inside-li" | "after-heading";

export interface RenderContext {
  app: App;
  plugin: Plugin;
  filePath: string;
  ctx: MarkdownPostProcessorContext;
}

export interface ComponentRenderer {
  render(node: MdNode, mountTarget: HTMLElement, rc: RenderContext): Promise<HTMLElement> | HTMLElement;
  mountPolicy?: MountPolicy;
  pickAnchor?(node: MdNode, root: HTMLElement, rc: RenderContext): HTMLElement | null;
}

export interface RegistryEntry { type: string; renderer: ComponentRenderer; }
export interface ComponentRegistry {
  register(entry: RegistryEntry): void;
  get(type: string): ComponentRenderer | undefined;
  listTypes(): string[];
}
