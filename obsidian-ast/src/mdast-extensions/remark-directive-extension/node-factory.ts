// src/remark-directive-extension/node-factory.ts
import { InlineNodeExpr, MdastNode, MdastChildren, PropExpr, ComponentNode } from "./types";

/** Convert a PropExpr into a JS value or mdast subtree:
 *  - lit -> primitive
 *  - arr -> array
 *  - inline -> mdast node(s) (usually a single node, but we return MdastChildren for convenience)
 */
export function exprToValue(expr: PropExpr): unknown {
  switch (expr.kind) {
    case "lit": return expr.value;
    case "arr": return expr.items.map(exprToValue);
    default:    return inlineToMd(expr as InlineNodeExpr);
  }
}

/** Convert inline-node expression -> mdast children array */
export function inlineToMd(e: InlineNodeExpr): MdastChildren {
  const name = e.name;
  const props = Object.fromEntries(Object.entries(e.attrs).map(([k, v]) => [k, exprToValue(v)]));
  const bodyChildren = flattenBody(e.body);

  switch (name) {
    case "text": {
      const fallback = joinText(e.body);
      const text = props.value != null ? String(props.value) : fallback;
      return [{ type: "text", value: text }];
    }
    case "paragraph": {
        return [{ type: "paragraph", children: bodyChildren.length ? bodyChildren : textToNodes(joinText(e.body)) }];
    }
    case "emphasis": {
        return [{ type: "emphasis", children: bodyChildren.length ? bodyChildren : textToNodes(joinText(e.body)) }];
    }
    case "strong": {
      return [{ type: "strong", children: bodyChildren.length ? bodyChildren : textToNodes(joinText(e.body)) }];
    }
    case "code": {
      const value = String(props.value ?? joinText(e.body));
      const lang  = typeof props.lang === "string" ? props.lang : undefined;
      return [{ type: "code", lang, value }];
    }
    case "js": {
      const value = String(props.value ?? joinText(e.body));
      return [{ type: "code", lang: "js", value }];
    }
    case "link": {
      const url = String(props.url ?? props.href ?? "");
      const title = typeof props.title === "string" ? props.title : undefined;
      const children = bodyChildren.length ? bodyChildren : textToNodes(joinText(e.body));
      return [{ type: "link", url, title, children }];
    }
    default: {
      // Unknown inline node -> generic component node with children.
      return [{
        type: name,
        ...props,
        children: bodyChildren.length ? bodyChildren : textToNodes(joinText(e.body))
      } as MdastNode];
    }
  }
}

/* Helpers */

function flattenBody(items: PropExpr[]): MdastChildren {
  const out: MdastChildren = [];
  for (const it of items) {
    if (it.kind === "inline") out.push(...inlineToMd(it));
    else if (it.kind === "lit") out.push(...textToNodes(String(it.value ?? "")));
    else if (it.kind === "arr") out.push(...textToNodes(it.items.map(x => (x.kind === "lit" ? String(x.value ?? "") : "")).join(" ")));
  }
  return out;
}

function textToNodes(s: string): MdastChildren {
  const trimmed = s == null ? "" : String(s);
  return trimmed ? [{ type: "text", value: trimmed }] : [];
}

function joinText(items: PropExpr[]): string {
  return items.map(x => x.kind === "lit" ? String(x.value ?? "") : "").join("").trim();
}

/** Build the final mdast node for a directive:
 * - type = directive name
 * - children = mdast children (from directive body)
 * - props set as direct fields on the node (converted via exprToValue; inline nodes become mdast)
 */
export function buildComponentNode(name: string, attrs: Record<string, PropExpr>, bodyChildren: MdastChildren): ComponentNode {
  const node: ComponentNode = { type: name, children: bodyChildren };
  for (const [k, v] of Object.entries(attrs)) {
    const val = exprToValue(v);
    if (Array.isArray(val) && val.every(isMdNode)) {
      // if the value is an array of md nodes, store as-is
      (node as any)[k] = val as MdastChildren;
    } else if (isMdNode(val)) {
      (node as any)[k] = val;
    } else {
      (node as any)[k] = val;
    }
  }
  return node;
}

function isMdNode(x: unknown): x is MdastNode {
  return !!x && typeof x === "object" && typeof (x as any).type === "string";
}

