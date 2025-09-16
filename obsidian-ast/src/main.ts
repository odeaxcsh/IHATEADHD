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
import { selectExtended, enrichFieldsAndTags, makeChain, AstChai } from "./unit-select-extention";
import { createLogger, normalizeLogLevel, setLoggerLevelGetter } from "./logger";

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
  private log = createLogger("obsidian-ast", () => this.settings.logLevel);

  /** Public API for DataviewJS etc. */
  public api!: AstApi;

  constructor(app: App, manifest: PluginManifest) {
    super(app, manifest);
  }

  async onload() {
    this.log.info("onload start");
    await this.loadSettings();
    this.log.debug("settings loaded", { settings: this.settings });

    this.rebuildProcessor();

    // Expose chain API (for DataviewJS)
    this.api = {
      ast: (path: string) => {
        this.log.debug("api.ast invoked", { path });
        const astPromise = this.ensureParsedByPath(path);
        const nodesPromise = astPromise.then(ast => (ast ? [ast as unknown as MdastNode] : []));
        return makeChain(astPromise, nodesPromise);
      }
    };
    this.register(() => {
      this.log.debug("api disposed");
      (this as any).api = undefined;
    });

    // Vault events to keep cache fresh
    this.registerEvent(this.app.vault.on("modify", async (f) => {
      if (f instanceof TFile && f.extension === "md") {
        this.log.debug("vault modify event", { path: f.path });
        await this.ensureParsed(f);
      }
    }));
    this.registerEvent(this.app.vault.on("rename", (f, oldPath) => {
      if (f instanceof TFile && f.extension === "md") {
        this.log.debug("vault rename event", { from: oldPath, to: f.path });
        const e = this.cache.get(oldPath);
        if (e) {
          this.cache.delete(oldPath);
          this.cache.set(f.path, e);
          this.log.debug("cache entry moved", { from: oldPath, to: f.path });
        }
      }
    }));
    this.registerEvent(this.app.vault.on("delete", (f) => {
      if (f instanceof TFile && f.extension === "md") {
        this.log.debug("vault delete event", { path: f.path });
        this.cache.delete(f.path);
      }
    }));

    // ```ast code blocks
    this.registerMarkdownCodeBlockProcessor("ast", async (src, el, ctx) => {
      const selector = src.trim();
      this.log.debug("code block processor invoked", { selector, sourcePath: ctx.sourcePath });
      try {
        if (!selector) throw new Error("selector missing");
        const ast = await this.ensureParsedByPath(ctx.sourcePath);
        if (!ast) {
          this.log.warn("code block aborted: no AST available", { sourcePath: ctx.sourcePath });
          el.setText("(no AST)");
          return;
        }

        const nodes = selectExtended(ast as any, selector, [ast as any]);
        this.log.debug("code block selector result", { selector, count: nodes.length });
        if (!nodes.length) {
          el.setText("(no matches)");
          return;
        }

        for (const n of nodes) {
          const block = el.createDiv({ cls: "ast-match" });
          await renderNodeSliceAsMarkdown(n as any, ctx.sourcePath, block, this);
          block.createEl("hr");
        }
      } catch (e) {
        this.log.error("code block render failed", e);
        el.setText(`ast error: ${(e as Error).message}`);
      }
    });

    // Command: quick counts
    this.addCommand({
      id: "show-current-file-ast-counts",
      name: "Show AST summary for current file",
      callback: async () => {
        this.log.debug("command invoked: show-current-file-ast-counts");
        const file = this.getActiveFile();
        if (!file) {
          this.log.warn("command aborted: no active file");
          new Notice("No active file.");
          return;
        }
        const ast = await this.ensureParsed(file);
        if (!ast) {
          this.log.warn("command aborted: AST unavailable", { path: file.path });
          new Notice("Could not parse current file.");
          return;
        }
        const c = countByType(ast);
        this.log.info("command result", { path: file.path, counts: c });
        new Notice(
          `Types: ${Object.keys(c).length}. ` +
          `H:${c["heading"] ?? 0} P:${c["paragraph"] ?? 0} ` +
          `L:${c["list"] ?? 0} CA:${c["callout"] ?? 0}`
        );
      }
    });

    // Settings tab
    this.addSettingTab(new AstSettingsTab(this.app, this));
    this.log.info("onload complete");
  }

  onunload() {
    this.log.info("onunload");
    this.cache.clear();
    setLoggerLevelGetter(undefined);
  }

  /* ---------- settings ---------- */
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
    await this.rebuildProcessor();
    this.cache.clear(); // force reparse so toggles take effect
    this.log.debug("cache cleared after save");
  }

  /* ---------- processor ---------- */
  private rebuildProcessor = () => {
    this.log.info("rebuildProcessor start");
    try {
      let p = unified().use(remarkParse).use(remarkGfm);

      if (this.settings.enableMdTag) {
        this.log.debug("enabling mdTag extension");
        p = p.use(remarkMdTag);
      }
      if (this.settings.enableInlineField) {
        this.log.debug("enabling inline field extension");
        p = p.use(remarkInlineField);
      }
      if (this.settings.enableDirectives) {
        this.log.debug("enabling directives extension");
        p = p.use(remarkDirectivesExtension);
      }
      if (this.settings.enableCallout) {
        this.log.debug("enabling callout extension");
        p = p.use(remarkCallout);
      }
      if (this.settings.enableNestedHeadings) {
        this.log.debug("enabling nested headings extension");
        p = p.use(remarkNestedHeading);
      }

      this.processor = p;
      this.log.info("rebuildProcessor ok");
    } catch (e) {
      this.log.error("processor build failed; falling back", e);
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
    if (!(f instanceof TFile) || f.extension !== "md") {
      this.log.debug("ensureParsedByPath skip: not a markdown file", { path });
      return;
    }
    this.log.debug("ensureParsedByPath resolved file", { path: f.path });
    return this.ensureParsed(f);
  }

  private async ensureParsed(f: TFile): Promise<MdastRoot | undefined> {
    if (f.extension !== "md") {
      this.log.debug("ensureParsed skip: not markdown", { path: f.path, extension: f.extension });
      return;
    }
    const stat = await this.app.vault.adapter.stat(f.path);
    const size = stat?.size ?? 0, mtime = stat?.mtime ?? 0;
    const prev = this.cache.get(f.path);
    if (prev && prev.mtime === mtime && prev.size === size) {
      this.log.debug("cache hit", { path: f.path, mtime, size });
      return prev.ast;
    }

    this.log.debug("cache miss", { path: f.path, mtime, size, hadPrevious: !!prev });

    try {
      const raw = await this.app.vault.read(f);
      this.log.debug("file read", { path: f.path, length: raw.length });
      const ast = await this.processor.run(this.processor.parse(raw)) as MdastRoot;
      this.log.debug("ast parsed", { path: f.path });

      // Enrich: collect fields/tags from inline nodes, callouts, and titles
      enrichFieldsAndTags(ast);
      this.log.debug("ast enriched", { path: f.path });

      this.cache.set(f.path, { ast, mtime, size, raw });
      this.log.debug("cache updated", { path: f.path, mtime, size });
      return ast;
    } catch (error) {
      this.log.error("failed to parse file", { path: f.path }, error);
      throw error;
    }
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
