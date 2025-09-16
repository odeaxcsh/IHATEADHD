import { Plugin, MarkdownPostProcessorContext, Notice } from "obsidian";
import type { MdNode, RenderContext } from "./types.js";
import { InMemoryRegistry } from "./registry.js";
import { SvelteRenderer } from "./renderers/svelte.js";
import { pickAnchorByLinesInScope, placeMount, nodeId } from "./mount.js";
import Comment from "./components/comment.svelte";
import { DEFAULT_SETTINGS, RendererSettings, RendererSettingsTab } from "./settings.js";
import { createLogger, normalizeLogLevel, setLoggerLevelGetter } from "./logger.js";

function posLines(n?: MdNode) {
  const s = n?.position?.start?.line, e = n?.position?.end?.line;
  return `L${s ?? "?"}–L${e ?? "?"}`;
}
function secLineRange(ctx: MarkdownPostProcessorContext, el: HTMLElement | null) {
  if (!el) return "(no section)";
  const sec = ctx.getSectionInfo(el);
  return sec ? `L${sec.lineStart}–L${sec.lineEnd}` : "(no section)";
}
type CssWindow = Window & { CSS?: { escape?: (value: string) => string } };

function cssEscape(s: string): string {
  const css = (window as CssWindow).CSS;
  if (css && typeof css.escape === "function") {
    return css.escape(s);
  }
  return s.replace(/["\\#.;?*+~^$[\]()=>|/]/g, "\\$&");
}

export default class ASTComponentRenderer extends Plugin {
  public settings: RendererSettings = { ...DEFAULT_SETTINGS };
  private log = createLogger("ACR", () => this.settings.logLevel);
  private registry = new InMemoryRegistry();

  async onload() {
    this.log.info("onload start");
    await this.loadSettings();
    this.log.debug("settings loaded", { settings: this.settings });

    const ast = this.app.plugins.getPlugin("obsidian-ast");
    if (!ast || !ast.api) {
      new Notice("ASTComponentRenderer: obsidian-ast not found/enabled", 6000);
      this.log.warn("obsidian-ast missing: mounting will be skipped");
    }

    // Registry
    this.registry.register({ type: "comment", renderer: new SvelteRenderer(Comment, {}, "append-inside-li") });
    this.log.info("registered types", { types: this.registry.listTypes() });

    // Post-processor
    this.registerMarkdownPostProcessor(async (root, ctx) => {
      const filePath = ctx.sourcePath;
      const astApi = this.app.plugins.getPlugin("obsidian-ast")?.api;
      this.log.debug("post-processor start", { filePath });

      if (!astApi) {
        this.log.warn("post-processor aborted: obsidian-ast API unavailable", { filePath });
        return;
      }

      const types = this.registry.listTypes();
      this.log.debug("types to render", { types });
      if (!types.length) return;

      // One “view” element (reading or preview). We’ll dedupe within it.
      const viewEl = root.closest<HTMLElement>(".markdown-reading-view, .markdown-preview-view") ?? root;
      this.log.debug("view scope", { filePath, section: secLineRange(ctx, viewEl) });

      // Pull nodes for each type
      const allNodes: MdNode[] = [];
      for (const t of types) {
        try {
          const nodes = await astApi.ast(filePath).select(t).toArray();
          this.log.debug("AST query result", { type: t, count: nodes.length, nodes: nodes.map(n => ({ type: n.type, lines: posLines(n) })) });
          allNodes.push(...nodes);
        } catch (e) {
          this.log.warn("AST query failed", { type: t, error: e });
        }
      }
      this.log.info("total renderable nodes", { count: allNodes.length, filePath });
      if (!allNodes.length) return;

      // Mount each node
      for (const node of allNodes) {
        const type = node?.type;
        const id = nodeId(node);
        const hasPos = !!(node?.position?.start && node?.position?.end);

        this.log.debug("node ready", { type, id, lines: posLines(node) });
        if (!hasPos) {
          this.log.warn("skip node: no position", { id, type });
          continue;
        }

        // Dedupe within the whole view
        const dup = viewEl.querySelector(`[data-acr-node="${cssEscape(id)}"]`);
        if (dup) {
          this.log.debug("skip node: already mounted", { id });
          continue;
        }

        const renderer = this.registry.get(type);
        if (!renderer) {
          this.log.debug("skip node: no renderer", { type });
          continue;
        }

        const rc: RenderContext = { app: this.app, plugin: this, filePath, ctx };

        // Anchor selection
        const anchor =
          renderer.pickAnchor?.(node, viewEl, rc) ??
          pickAnchorByLinesInScope(viewEl, ctx, node);

        const sec = (el: HTMLElement | null) => el ? ctx.getSectionInfo(el) : null;
        this.log.debug("anchor selection", { id, anchor: anchor?.tagName ?? null, section: sec(anchor) });

        if (!anchor) {
          this.log.warn("skip node: no anchor", { id });
          continue;
        }

        // Create host & render
        const policy = renderer.mountPolicy ?? "append-inside-block";
        this.log.debug("place mount", { id, policy });
        const host = placeMount(policy, anchor);
        host.setAttribute("data-acr-node", id);

        try {
          this.log.info("render start", { id, type });
          await renderer.render(node, host, rc);
          this.log.info("render complete", { id, type });
          if (renderer.cleanup) {
            let cleaned = false;
            const cleanup = () => {
              if (cleaned) return;
              cleaned = true;
              try {
                renderer.cleanup?.(host);
              } catch (err) {
                this.log.error("renderer cleanup failed", { id, type }, err);
              }
              host.remove();
            };
            this.register(cleanup);
            const anyCtx = ctx as any;
            if (anyCtx && typeof anyCtx.addChild === "function") {
              anyCtx.addChild({
                el: host,
                onload() {},
                onunload: cleanup
              });
            }
          }
        } catch (e) {
          this.log.error("render failed", { id, type }, e);
          host.remove();
        }
      }

      this.log.debug("post-processor end", { filePath });
    });

    this.addSettingTab(new RendererSettingsTab(this.app, this));
    this.log.info("onload complete");
  }

  onunload() {
    this.log.info("onunload");
    setLoggerLevelGetter(undefined);
  }

  async loadSettings() {
    const data = await this.loadData();
    const merged = Object.assign({}, DEFAULT_SETTINGS, data || {});
    merged.logLevel = normalizeLogLevel(merged.logLevel, DEFAULT_SETTINGS.logLevel);
    this.settings = merged;
    setLoggerLevelGetter(() => this.settings.logLevel);
    this.log.debug("loadSettings complete", { settings: this.settings });
  }

  async saveSettings() {
    this.settings.logLevel = normalizeLogLevel(this.settings.logLevel, DEFAULT_SETTINGS.logLevel);
    setLoggerLevelGetter(() => this.settings.logLevel);
    this.log.info("saveSettings", { settings: this.settings });
    await this.saveData(this.settings);
  }
}
