# Markdown AST Provider (with Callouts) - Obsidian Plugin

This plugin parses your notes into an **mdast** tree (via `remark-parse`), keeps a per-file cache fresh as notes change, and exposes a tiny API that other code (e.g., **DataviewJS**) can use to **query the Markdown structure**.

It also **promotes Obsidian callouts** (e.g., `> [!note] Title`) to first-class AST nodes so you can select them directly.

---

## What you get

- **AST cache** keyed by file path, auto-invalidated on modify/rename/delete.
- **API for consumers**:
  - `getAst(path)` > parse if needed and return mdast.
  - `peekAst(path)` > return cached AST without parsing.
  - `select(path, selector)` > CSS-ish selectors via `unist-util-select`.
  - `visit(path, type, fn)` > walk nodes of a given type.
  - `getCurrentAst()` > convenience for the active note.
- **Code block for debugging**:

Renders a small report with the matching nodes as JSON.
- **Callouts as nodes**:
Blockquotes that begin with `[!type]` become:
```json
{
  "type": "callout",
  "calloutType": "note",
  "calloutFold": "open|closed",   // optional, from [!type]+ or [!type]-
  "calloutTitle": "Your title",   // optional, text after the marker
  "children": [ ... ]             // unchanged content of the callout
}
```

---

## Selecting things (DataviewJS examples)

```js
const p = app.plugins.getPlugin("obsidian-ast");
const file = dv.current().file.path;

// All H2s
const h2s = await p.api.select(file, "heading[depth=2]");
dv.table(["Depth","Text"], h2s.map(h => [h.depth, text(h)]));

// All callouts
const allCallouts = await p.api.select(file, "callout");
dv.table(["Type","Title"], allCallouts.map(c => [c.calloutType, c.calloutTitle ?? ""]));

// Only warnings
const warnings = await p.api.select(file, "callout[calloutType=warning]");
dv.list(warnings.map(x => x.calloutTitle ?? "(no title)"));

// Visit all list items
await p.api.visit(file, "listItem", n => {
// do something...
});

// Tiny helper for text extraction
function text(node){
if (!node) return "";
if (node.value) return node.value;
if (Array.isArray(node.children)) return node.children.map(text).join("");
return "";
}
```

> **Tip:** Filter expressions understand a regex comparator. Use `[field~= /pattern/i]` for JavaScript-style regular expressions (flags supported). Regex literals require the `~=` operator, and invalid patterns surface clear errors to make debugging easier.

---

## Callout behavior (details)

- The plugin looks for **blockquote** nodes whose first paragraph starts with:
```
[!TYPE]    // required
[!TYPE]+   // folded open
[!TYPE]-   // folded closed
```
Optional text after the marker on that same line becomes `calloutTitle`.

- Examples:

- `> [!note] Quick tip` > `type="callout"`, `calloutType="note"`, `calloutTitle="Quick tip"`
- `> [!warning]- Be careful` > `calloutType="warning"`, `calloutFold="closed"`, `calloutTitle="Be careful"`

- The **children** of the blockquote are left intact; only the marker is stripped from the first text node.

- If a blockquote **doesn’t** start with `[!...]`, it stays a normal `blockquote`.

> This is a pragmatic heuristic that mirrors Obsidian’s callout syntax. Nested callouts and highly exotic formatting should still work, but the title is only taken from the same line as the marker.

---

## Install (dev)

1. Put the folder in `<YourVault>/.obsidian/plugins/obsidian-ast/`.
2. Install deps and build:
 ```bash
 npm i
 npm run build
 ```
3. (If your setup uses `dist/` packaging) copy/zip as you prefer.
4. Enable **Markdown AST Provider** in **Settings > Community plugins**.

> Obsidian loads `main.js` from the plugin root. If you build to `dist/main.js`, add a copy step to place it at the root (or symlink on Unix).

---

## Performance notes

- Cache invalidates on `modify`, `rename`, and `delete`.
- Fast re-parse is triggered using file `mtime` and `size` checks.
- For very large vaults, consider parsing lazily on demand (which this plugin already does).

---

## Limitations & future ideas

- `remark-parse` doesn’t know Obsidian-specific extensions out of the box; callouts are handled by a **post-process**. You can add similar passes for tasks, internal embeds metadata, etc.
- If you need **pixel-perfect HTML**, use Obsidian’s `MarkdownRenderer` or a sidecar `markdown-it` instance — but keep the **authoritative data model** here in mdast.
- Possible helpers to add:
- `getTables(path)`, `getTasks(path)`, `getListUnderHeading(path, "X")`, etc.
- A vault-wide index persisted to disk.

---

## License
IDK TBH
