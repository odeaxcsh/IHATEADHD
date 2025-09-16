import { visit } from "../utils/visit";
import type { Root as MdastRoot } from "mdast";

/**
 * Populate node.fields and node.tags from inline syntax:
 * - inlineField nodes contribute `key: value`
 * - mdTag nodes contribute `value` (lowercased, '#' stripped if present)
 * Also scans callout titles and (if present) heading titles.
 */
export function enrichFieldsAndTags(ast: MdastRoot) {
  const addField = (host: any, k: string, v: string) => {
    (host.fields ??= {}); if (host.fields[k] == null) host.fields[k] = String(v).trim();
  };
  const addTag = (host: any, t: string) => {
    (host.tags ??= []);
    const tag = String(t).replace(/^#/, "").toLowerCase();
    if (!host.tags.includes(tag)) host.tags.push(tag);
  };

  const harvestInline = (node: any, host: any) => {
    if (!node) return;
    if (node.type === "inlineField") addField(host, node.key, node.value);
    if (node.type === "mdTag") addTag(host, node.value);
    if (Array.isArray(node.children)) for (const c of node.children) harvestInline(c, host);
  };

  visit(ast as any, (n: any) => {
    // Typical block hosts
    if (n?.type === "paragraph" || n?.type === "heading" || n?.type === "tableCell") harvestInline(n, n);

    // If you sectionized headings, also index title phrasing
    if (n?.type === "heading" && n.title) harvestInline({ type: "paragraph", children: n.title }, n);

    // List item: read first paragraph
    if (n?.type === "listItem" && Array.isArray(n.children)) {
      const para = n.children.find((c: any) => c.type === "paragraph");
      if (para) harvestInline(para, n);
    }

    // Callouts: title + body
    if (n?.type === "callout") {
      if (n.title) harvestInline(n.title, n);
      for (const c of (n.children || [])) harvestInline(c, n);
    }
  });
}
