import {
  App,
  MarkdownRenderer,
  MarkdownView,
  Notice,
  Plugin,
  PluginManifest,
  TFile,
} from "obsidian";
import { unified, type Processor } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";
import type { Root as MdastRoot, Content as MdastNode } from "mdast";

import { remarkMdTag } from "./mdast-extensions/remark-tag";
import { remarkInlineField } from "./mdast-extensions/remark-inline-field";
import { remarkCallout } from "./mdast-extensions/remark-callout";
import { remarkNestedHeading } from "./mdast-extensions/remark-nested-heading";
import { remarkDirectivesExtension } from "./mdast-extensions/remark-directive-extension";

import { AstSettings, DEFAULT_SETTINGS, AstSettingsTab } from "./settings";
import { selectExtended, enrichFieldsAndTags, makeChain } from "./unit-select-extention";
import type { AstChain } from "./unit-select-extention";

import { remarkDirectiveAdapter } from "./mdast-extensions/remark-directive-extension/from-directive";

/* =========================
 * Types
 * =======================*/

type AstEntry = { ast: MdastRoot; mtime: number; size: number; raw: string };

export interface AstApi {
  /** Start a chain on the AST of the given path */
  ast: (path: string) => AstChain;
}

/* =========================
 * Plugin
 * =======================*/

export default class AstPlugin extends Plugin {
  private cache = new Map<string, AstEntry>();
  private processor!: Processor;
  public settings: AstSettings = { ...DEFAULT_SETTINGS };

  /** Public API for DataviewJS etc. */
  public api!: AstApi;

  constructor(app: App, manifest: PluginManifest) {
    super(app, manifest);
  }

  async onload() {
    await this.loadSettings();
    this.rebuildProcessor();

    // Expose chain API (for DataviewJS)
    this.api = {
      ast: (path: string) => {
        const astPromise = this.ensureParsedByPath(path);
        const nodesPromise = astPromise.then(ast => (ast ? [ast as unknown as MdastNode] : []));
        return makeChain(astPromise, nodesPromise);
      }
    };
    this.register(() => ((this as any).api = undefined));

    // Vault events to keep cache fresh
    this.registerEvent(this.app.vault.on("modify", async (f) => {
      if (f instanceof TFile && f.extension === "md") await this.ensureParsed(f);
    }));
    this.registerEvent(this.app.vault.on("rename", (f, oldPath) => {
      if (f instanceof TFile && f.extension === "md") {
        const e = this.cache.get(oldPath);
        if (e) { this.cache.delete(oldPath); this.cache.set(f.path, e); }
      }
    }));
    this.registerEvent(this.app.vault.on("delete", (f) => {
      if (f instanceof TFile && f.extension === "md") this.cache.delete(f.path);
    }));

    // ```ast code blocks
    this.registerMarkdownCodeBlockProcessor("ast", async (src, el, ctx) => {
      try {
        const selector = src.trim();
        if (!selector) throw new Error("selector missing");
        const ast = await this.ensureParsedByPath(ctx.sourcePath);
        if (!ast) { el.setText("(no AST)"); return; }

        const nodes = selectExtended(ast as any, selector, [ast as any]);
        if (!nodes.length) { el.setText("(no matches)"); return; }

        for (const n of nodes) {
          const block = el.createDiv({ cls: "ast-match" });
          await renderNodeSliceAsMarkdown(n as any, ctx.sourcePath, block, this);
          block.createEl("hr");
        }
      } catch (e) {
        el.setText(`ast error: ${(e as Error).message}`);
      }
    });

    // Command: quick counts
    this.addCommand({
      id: "show-current-file-ast-counts",
      name: "Show AST summary for current file",
      callback: async () => {
        const file = this.getActiveFile();
        if (!file) { new Notice("No active file."); return; }
        const ast = await this.ensureParsed(file);
        if (!ast) { new Notice("Could not parse current file."); return; }
        const c = countByType(ast);
        new Notice(
          `Types: ${Object.keys(c).length}. ` +
          `H:${c["heading"] ?? 0} P:${c["paragraph"] ?? 0} ` +
          `L:${c["list"] ?? 0} CA:${c["callout"] ?? 0}`
        );
      }
    });

    // Settings tab
    this.addSettingTab(new AstSettingsTab(this.app, this));
  }

  onunload() {
    this.cache.clear();
  }

  /* ---------- settings ---------- */
  async loadSettings() {
    const data = await this.loadData();
    this.settings = Object.assign({}, DEFAULT_SETTINGS, data || {});
  }

  async saveSettings() {
    await this.saveData(this.settings);
    await this.rebuildProcessor();
    this.cache.clear(); // force reparse so toggles take effect
  }

  /* ---------- processor ---------- */
  private rebuildProcessor = () => {
    console.info("[obsidian-ast] rebuildProcessor start");
    try {
      let p = unified().use(remarkParse).use(remarkGfm);

      if (this.settings.enableMdTag) p = p.use(remarkMdTag);
      if (this.settings.enableInlineField) p = p.use(remarkInlineField);
      if (this.settings.enableDirectives) p = p.use(remarkDirectivesExtension);
      if (this.settings.enableCallout) p = p.use(remarkCallout);
      if (this.settings.enableNestedHeadings) p = p.use(remarkNestedHeading);

      this.processor = p;
      console.info("[obsidian-ast] rebuildProcessor ok");
    } catch (e) {
      console.error("[obsidian-ast] processor build failed; falling back:", e);
      new Notice("obsidian-ast: fell back to basic parser (see console)", 5000);
      this.processor = unified().use(remarkParse).use(remarkGfm);
    }
  };



  /* ---------- AST / cache ---------- */
  private getActiveFile(): TFile | null {
    const v = this.app.workspace.getActiveViewOfType(MarkdownView);
    return v?.file ?? null;
  }

  private async ensureParsedByPath(path: string): Promise<MdastRoot | undefined> {
    const f = this.app.vault.getAbstractFileByPath(path);
    if (!(f instanceof TFile) || f.extension !== "md") return;
    return this.ensureParsed(f);
  }

  private async ensureParsed(f: TFile): Promise<MdastRoot | undefined> {
    if (f.extension !== "md") return;
    const stat = await this.app.vault.adapter.stat(f.path);
    const size = stat?.size ?? 0, mtime = stat?.mtime ?? 0;
    const prev = this.cache.get(f.path);
    if (prev && prev.mtime === mtime && prev.size === size) return prev.ast;

    const raw = await this.app.vault.read(f);
    const ast = await this.processor.run(this.processor.parse(raw)) as MdastRoot;

    // Enrich: collect fields/tags from inline nodes, callouts, and titles
    enrichFieldsAndTags(ast);

    this.cache.set(f.path, { ast, mtime, size, raw });
    return ast;
  }
}

/* =========================
 * Small helpers
 * =======================*/

function countByType(ast: MdastRoot): Record<string, number> {
  const out: Record<string, number> = {};
  visit(ast as any, (n: any) => {
    const t = n?.type; if (t) out[t] = (out[t] ?? 0) + 1;
  });
  return out;
}

async function renderNodeSliceAsMarkdown(node: any, filePath: string, el: HTMLElement, plugin: Plugin) {
  const f = plugin.app.vault.getAbstractFileByPath(filePath);
  if (!(f instanceof TFile)) return;
  const raw = await plugin.app.vault.read(f);
  const s = node?.position?.start?.offset ?? 0;
  const e = node?.position?.end?.offset ?? s;
  const slice = raw.slice(s, e);
  await MarkdownRenderer.renderMarkdown(slice, el, filePath, plugin);
}
