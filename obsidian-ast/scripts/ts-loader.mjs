import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
let ts;
try {
  ts = require("typescript");
} catch {
  const nodeBin = process.execPath;
  const nodeDir = dirname(nodeBin);
  const tsPath = join(nodeDir, "..", "lib", "node_modules", "typescript", "lib", "typescript.js");
  ts = require(tsPath);
}

const TS_EXT = [".ts", ".tsx"];

function hasExtension(specifier) {
  return TS_EXT.some(ext => specifier.endsWith(ext)) || specifier.endsWith(".js") || specifier.endsWith(".mjs");
}

export async function resolve(specifier, context, defaultResolve) {
  if (specifier === "./lang" || specifier === "./lang/index") {
    const stub = new URL("./stubs/lang/index.ts", import.meta.url);
    return { url: stub.href, shortCircuit: true };
  }
  if (specifier.startsWith("./") || specifier.startsWith("../")) {
    if (!hasExtension(specifier)) {
      const tsUrl = new URL(specifier + ".ts", context.parentURL);
      if (existsSync(fileURLToPath(tsUrl))) {
        return { url: tsUrl.href, shortCircuit: true };
      }
      const indexUrl = new URL(specifier.replace(/\/?$/, "/index.ts"), context.parentURL);
      if (existsSync(fileURLToPath(indexUrl))) {
        return { url: indexUrl.href, shortCircuit: true };
      }
    }
  }
  if (specifier === "." || specifier === "..") {
    const indexUrl = new URL(specifier + "/index.ts", context.parentURL);
    if (existsSync(fileURLToPath(indexUrl))) {
      return { url: indexUrl.href, shortCircuit: true };
    }
  }
  if (specifier === "unist-util-visit") {
    const stub = new URL("./stubs/unist-util-visit.ts", import.meta.url);
    return { url: stub.href, shortCircuit: true };
  }
  if (specifier === "unist-util-select") {
    const stub = new URL("./stubs/unist-util-select.ts", import.meta.url);
    return { url: stub.href, shortCircuit: true };
  }
  return defaultResolve(specifier, context, defaultResolve);
}

export async function load(url, context, defaultLoad) {
  if (url.endsWith(".ts") || url.endsWith(".tsx")) {
    const source = await readFile(new URL(url), "utf8");
    const { outputText } = ts.transpileModule(source, {
      compilerOptions: {
        module: ts.ModuleKind.ESNext,
        target: ts.ScriptTarget.ES2020,
        moduleResolution: ts.ModuleResolutionKind.Bundler,
        esModuleInterop: true,
        resolveJsonModule: true
      },
      fileName: url
    });
    return { format: "module", source: outputText, shortCircuit: true };
  }
  return defaultLoad(url, context, defaultLoad);
}
