// src/mdast-extensions/remark-directive-extension/bundle.ts
import type { Plugin, Processor } from "unified";
import remarkDirectiveDefault from "remark-directive";
import { remarkDirectiveAdapter } from "./from-directive";

// Normalize ESM/CJS export just in case
const remarkDirective: any =
  (remarkDirectiveDefault as any)?.default ?? remarkDirectiveDefault;

/** Unified plugin that installs remark-directive + our adapter */
export const remarkDirectivesExtension: Plugin<[]> = function (this: Processor) {
  try {
    if (typeof remarkDirective !== "function") {
      throw new Error("remark-directive is not a function");
    }
    this.use(remarkDirective);
    this.use(remarkDirectiveAdapter);
    // console.info("[obsidian-ast] remarkDirectivesExtension loaded");
  } catch (e) {
    // Never rethrow — keep the rest of the pipeline alive
    console.error("[obsidian-ast] remarkDirectivesExtension failed:", e);
  }
};
