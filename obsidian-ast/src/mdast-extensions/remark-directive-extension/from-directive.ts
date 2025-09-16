// src/mdast-extensions/remark-directive-extension/from-directive.ts
import { visit } from "unist-util-visit";
import { parsePropValue } from "./props-grammar";
import { buildComponentNode } from "./node-factory";
import type { PropExpr } from "./types";
import { copyPos } from "../helper";

/** Convert directive nodes into mdast nodes whose `type` is the directive name.
 *  - props become real fields on the node (and can be inline “component” trees)
 *  - body stays as `children`
 */
export function remarkDirectiveAdapter() {
  return (tree: any) => {
    visit(tree, (node: any, index: number | null, parent: any) => {
      if (index == null || !parent) return;

      const isDirective =
        node.type === "containerDirective" ||
        node.type === "leafDirective" ||
        node.type === "textDirective";
      if (!isDirective) return;

      try {
        const name = String(node.name || "").trim();
        if (!name) return;

        // Parse attributes -> PropExpr map (each attr is insulated)
        const raw: Record<string, string | true> = node.attributes || {};
        const attrs: Record<string, PropExpr> = {};
        for (const [k, v] of Object.entries(raw)) {
          if (v === true) {
            attrs[k] = { kind: "lit", value: true };
          } else {
            try {
              attrs[k] = parsePropValue(String(v));
            } catch (err) {
              console.warn(`[obsidian-ast] prop parse failed (${name}.${k}):`, v, err);
              attrs[k] = { kind: "lit", value: String(v) };
            }
          }
        }

        const bodyChildren = Array.isArray(node.children) ? node.children : [];
        var comp = buildComponentNode(name, attrs, bodyChildren);
        copyPos(comp, node);
        parent.children.splice(index, 1, comp);

        console.debug("[obsidian-ast] directive -> component:", node, "=>", comp, "at ", comp.position);


      } catch (err) {
        console.error(
          "[obsidian-ast] directive transform failed; leaving node as-is:",
          err,
          node
        );
      }
    });
  };
}
