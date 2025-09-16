// src/mdast-extensions/remark-directive-extension/bundle.ts
import type { Plugin, Processor } from "unified";
import remarkDirectiveDefault from "remark-directive";
import { remarkDirectiveAdapter } from "./from-directive";
import { createLogger } from "../../logger";

// Normalize ESM/CJS export just in case
const remarkDirective: any =
  (remarkDirectiveDefault as any)?.default ?? remarkDirectiveDefault;

const log = createLogger("obsidian-ast:remark-directives");

/** Unified plugin that installs remark-directive + our adapter */
export const remarkDirectivesExtension: Plugin<[]> = function (this: Processor) {
  try {
    if (typeof remarkDirective !== "function") {
      log.warn("remark-directive export is not callable", { type: typeof remarkDirective });
      throw new Error("remark-directive is not a function");
    }
    this.use(remarkDirective);
    this.use(remarkDirectiveAdapter);
    log.debug("remarkDirectivesExtension loaded");
  } catch (e) {
    // Never rethrow — keep the rest of the pipeline alive
    log.error("remarkDirectivesExtension failed", e);
  }
};
