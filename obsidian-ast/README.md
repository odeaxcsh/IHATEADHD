# Markdown AST Provider (obsidian-ast)

This Obsidian plugin parses Markdown notes into [mdast](https://github.com/syntax-tree/mdast) trees,
keeps the results cached, and exposes a flexible API so DataviewJS scripts (and other community
plugins) can explore the document structure.

It also ships with a small query language that understands headings, callouts, inline fields, and
custom directives. The companion `ast-component-renderer` plugin consumes that API to mount Svelte
components next to matching AST nodes.

## Features

- ⚡ **Incremental cache** keyed by vault path with `modify`, `rename`, and `delete` handling.
- 🧭 **Chainable selector API** via `plugin.api.ast(path)` so you can filter, visit, and transform
  nodes fluently.
- 🧩 **remark extensions** for inline fields (`key:: value`), `#tags`, callouts, directives, and
  nested headings. Each extension can be toggled from the settings tab.
- ```ast``` **code block helper** for debugging selectors and previewing matched Markdown slices.

## Quick usage

```js
const { api } = app.plugins.getPlugin("obsidian-ast");
const file = dv.current().file.path;

// Grab every callout in the current note
const callouts = await api.ast(file)
  .select("callout")
  .through(nodes => nodes.filter(n => n.calloutType === "warning"))
  .toArray();

dv.table(["Type", "Title"], callouts.map(c => [c.calloutType, c.title?.[0]?.value ?? ""]));
```

Selectors support fields (`field.priority`), descendant hops (`paragraph >> listItem`), and regex
comparisons (`text[value~=/(todo|fix)/i]`). See `src/unit-select-extention/lang` for the full grammar.

## Settings

Toggle each remark extension from **Settings → Community plugins → Markdown AST Provider**.
Flipping a switch clears the cache so the new parser pipeline takes effect immediately.

## Development

```bash
npm install
npm run dev      # watch-mode build
npm run build    # production build in dist/
npm test         # run the TypeScript unit tests via node --test
```

The unit tests cover the selector language, enrichment helpers, and directive conversion logic.

## License

MIT
