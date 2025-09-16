import esbuild from "esbuild";
import fs from "node:fs";

const banner =
`/*
THIS IS A BUNDLED FILE FOR OBSIDIAN.
Source: src/main.ts
*/`;

const ctx = await esbuild.context({
  entryPoints: ["src/main.ts"],
  bundle: true,
  format: "cjs",
  platform: "browser",
  target: "es2020",
  outfile: "dist/main.js",
  external: ["obsidian"],
  banner: { js: banner },
  logLevel: "info",
});

if (process.argv.includes("--watch")) {
  await ctx.watch();
  console.log("Watching for changes...");
} else {
  await ctx.rebuild();
  await ctx.dispose();
}
