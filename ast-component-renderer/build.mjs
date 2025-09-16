// ESM build script
import { build, context } from "esbuild";
import svelte from "esbuild-svelte";
import sveltePreprocess from "svelte-preprocess";

const isWatch = process.argv.includes("--watch");

const common = {
  entryPoints: ["src/main.ts"],
  outfile: "dist/main.js",
  bundle: true,
  platform: "browser",
  target: "es2019",
  format: "cjs",         // Obsidian expects CJS main.js
  splitting: false,      // single-file bundle
  sourcemap: false,
  minify: false,
  logLevel: "info",
  external: ["obsidian"], // provided by Obsidian
  plugins: [
    svelte({
      compilerOptions: { css: "injected" }, // inject Svelte CSS into bundle
      preprocess: sveltePreprocess({ typescript: true })
    })
  ]
};

if (isWatch) {
  const ctx = await context(common);
  await ctx.watch();
  console.log("[build] watching…");
} else {
  await build(common);
  console.log("[build] ok");
}
