# IHATEADHD

This workspace contains two Obsidian plugins that work together:

- **obsidian-ast** parses Markdown notes into an mdast tree and exposes a queryable API.
- **ast-component-renderer** consumes the AST API and mounts custom UI components for matched nodes.

## Repository layout

```
ast-component-renderer/  # UI renderer plugin
obsidian-ast/            # Markdown AST provider plugin
```

Each plugin ships its own README with feature details. The sections below focus on local development tasks that apply across the repository.

## Setup

Both projects use Node.js tooling. Install dependencies for a plugin before running builds or tests:

```bash
cd obsidian-ast
npm install

cd ../ast-component-renderer
npm install
```

Because this workspace is designed for offline execution during testing, the development tooling bundles a few lightweight stubs (for example, simple AST visitors) so that unit tests can run without downloading additional packages.

## Running tests

Tests are implemented with Node's built-in `node:test` runner. Execute them from each package root:

```bash
cd obsidian-ast
npm run test   # exercises selector utilities, enrichment helpers, and chain flows

cd ../ast-component-renderer
npm run test   # validates DOM mounting helpers, registry behaviour, and renderer wiring
```

The `obsidian-ast` test command uses a small custom loader that transpiles TypeScript on the fly and provides minimal stubs for third-party utilities that are unavailable in the offline environment. The renderer package compiles its TypeScript test fixtures to JavaScript before invoking the Node test runner.

## Building

To create production bundles for either plugin use the respective build scripts:

```bash
cd obsidian-ast
npm run build

cd ../ast-component-renderer
npm run build
```

The build output is written to each package's `dist/` directory and can be copied into an Obsidian vault for manual testing.
