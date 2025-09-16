# Working Change Log

## Planned Work
- [x] Align callout transform structure with documented node shape (Paragraph title, unioned positions) and add coverage.
- [x] Restructure nested heading transform to emit Paragraph titles, preserve positions, and test union behaviour.
- [x] Extend selector traversal/parent mapping to include special node-list fields (e.g., `title`) and cover direct/recursive operators.
- [x] Strengthen position fidelity tests for slices/unions across callouts and headings.
- [x] Update renderer mount policies and placement helpers to match documented options and add targeted tests.
- [x] Improve anchor selection heuristics for headings, list items, callout title/body, with JSDOM coverage.
- [x] Add renderer lifecycle handling (Svelte cleanup) and ensure dedupe/cleanup behaviour in tests.
