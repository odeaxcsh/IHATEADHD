import { Plugin, MarkdownPostProcessorContext, Notice } from "obsidian";
import type { MdNode, RenderContext } from "./types";
import { InMemoryRegistry } from "./registry";
import { SvelteRenderer } from "./renderers/svelte";
import { pickAnchorByLinesInScope, placeMount, nodeId } from "./mount";
import Comment from "./components/comment.svelte";

const VERBOSE = true;
const tag = (m: string) => `[ACR] ${m}`;
const dbg = (...a: any[]) => VERBOSE && console.debug(...a);
const info = (...a: any[]) => VERBOSE && console.info(...a);
const warn = (...a: any[]) => console.warn(...a);
const err  = (...a: any[]) => console.error(...a);

function posLines(n?: MdNode) {
  const s = n?.position?.start?.line, e = n?.position?.end?.line;
  return `L${s ?? "?"}–L${e ?? "?"}`;
}
function secLineRange(ctx: MarkdownPostProcessorContext, el: HTMLElement | null) {
  if (!el) return "(no section)";
  const sec = ctx.getSectionInfo(el);
  return sec ? `L${sec.lineStart}–L${sec.lineEnd}` : "(no section)";
}
function cssEscape(s: string): string {
  // @ts-ignore
  const C = (window as any).CSS;
  return (C && typeof C.escape === "function") ? C.escape(s) : s.replace(/["\\#.;?*+~^$[\]()=>|/]/g, "\\$&");
}

export default class ASTComponentRenderer extends Plugin {
  private registry = new InMemoryRegistry();

  async onload() {
    info(tag("onload"));
    const ast = this.app.plugins.getPlugin("obsidian-ast");
    if (!ast || !ast.api) {
      new Notice("ASTComponentRenderer: obsidian-ast not found/enabled", 6000);
      warn(tag("obsidian-ast missing: mounting will be skipped"));
    }

    // Registry
    this.registry.register({ type: "comment", renderer: new SvelteRenderer(Comment, {}, "append-inside-li") });
    info(tag(`registered types: ${this.registry.listTypes().join(", ") || "(none)"}`));

    // Post-processor
    this.registerMarkdownPostProcessor(async (root, ctx) => {
      const filePath = ctx.sourcePath;
      const astApi = this.app.plugins.getPlugin("obsidian-ast")?.api;
      info(tag(`pp start for file=${filePath}`), root);

      if (!astApi) {
        warn(tag("no ast.api; abort pp"));
        return;
      }

      const types = this.registry.listTypes();
      info(tag(`types to render: ${types.join(", ") || "(none)"}`));
      if (!types.length) return;

      // One “view” element (reading or preview). We’ll dedupe within it.
      const viewEl = root.closest<HTMLElement>(".markdown-reading-view, .markdown-preview-view") ?? root;
      info(tag(`view scope section: ${secLineRange(ctx, viewEl)}`));

      // Pull nodes for each type
      const allNodes: MdNode[] = [];
      for (const t of types) {
        try {
          const nodes = await astApi.ast(filePath).select(t).toArray();
          info(tag(`AST query '${t}' -> ${nodes.length} node(s)`), nodes.map(n => ({ type: n.type, lines: posLines(n) })));
          allNodes.push(...nodes);
        } catch (e) {
          warn(tag(`ast query failed for type=${t}`), e);
        }
      }
      info(tag(`total renderable nodes: ${allNodes.length}`));
      if (!allNodes.length) return;

      // Mount each node
      for (const node of allNodes) {
        const type = node?.type;
        const id = nodeId(node);
        const hasPos = !!(node?.position?.start && node?.position?.end);

        info(tag(`node ${type} id=${id} ${posLines(node)}`), node);
        if (!hasPos) { warn(tag(`skip: no position for id=${id}`)); continue; }

        // Dedupe within the whole view
        const dup = viewEl.querySelector(`[data-acr-node="${cssEscape(id)}"]`);
        if (dup) { dbg(tag(`skip: already mounted id=${id}`)); continue; }

        const renderer = this.registry.get(type);
        if (!renderer) { dbg(tag(`skip: no renderer for type=${type}`)); continue; }

        const rc: RenderContext = { app: this.app, plugin: this, filePath, ctx };

        // Anchor selection
        const anchor =
          renderer.pickAnchor?.(node, viewEl, rc) ??
          pickAnchorByLinesInScope(viewEl, ctx, node);

        const sec = (el: HTMLElement | null) => el ? ctx.getSectionInfo(el) : null;
        info(tag(`anchor for ${id} -> ${anchor?.tagName || "null"} ${sec(anchor) ? `L${sec(anchor)!.lineStart}–L${sec(anchor)!.lineEnd}` : ""}`), anchor);

        if (!anchor) { warn(tag(`skip: no anchor for id=${id}`)); continue; }

        // Create host & render
        const policy = renderer.mountPolicy ?? "append-inside-block";
        info(tag(`placeMount policy=${policy} id=${id}`));
        const host = placeMount(policy, anchor);
        host.setAttribute("data-acr-node", id);

        try {
          info(tag(`render start id=${id}`));
          await renderer.render(node, host, rc);
          info(tag(`render ok id=${id}`));
        } catch (e) {
          err(tag(`render error id=${id}`), e);
          host.remove();
        }
      }

      info(tag("pp end"));
    });
  }
}
