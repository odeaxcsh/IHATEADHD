# IHATEADHD

This repository hosts two complementary Obsidian community plugins that work together to expose
rich Markdown AST data and render custom components inside notes.

- **`obsidian-ast/`** parses Markdown files into mdast trees, keeps them cached, and offers a small
  query language (plus a fluent chain API) for DataviewJS and other consumers.
- **`ast-component-renderer/`** looks up AST nodes provided by the core plugin and mounts Svelte
  components next to the corresponding Markdown in reading or preview mode.

## Getting started

Each package is an independent npm project. Install dependencies and run the usual build/test
commands from the package directory.

```bash
cd obsidian-ast
npm install
npm run build
npm test

cd ../ast-component-renderer
npm install
npm run build
npm test
```

### Development tips

- Both projects ship with `npm run dev` to watch for changes while hacking.
- Unit tests use the Node.js test runner (`node --test`) and live in each package's `src/__tests__` folder.
- Use `npm run release` to bundle the production ZIP that Obsidian expects in the `dist/` folder.

## Repository layout

```
obsidian-ast/             # Core AST provider plugin
  src/                    # Plugin source code (TypeScript)
  src/unit-select-extention/  # Query language, AST traversal helpers, enrichers
  src/mdast-extensions/   # remark extensions for inline fields, directives, callouts, ...
ast-component-renderer/   # Companion renderer that mounts UI next to AST nodes
  src/components/         # Svelte components rendered in Obsidian
```

## Testing

Both packages now include node-based unit tests covering the AST query language, enrichment logic,
DOM mount helpers, and the Svelte renderer bridge. Run `npm test` inside each package to validate
behaviour before shipping changes.
