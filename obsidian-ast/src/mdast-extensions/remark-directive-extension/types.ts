// src/remark-directive-extension/types.ts
import { Position } from "unist";

export type MdastNode = any;           // keep loose for now (mdast Content | Parent)
export type MdastChildren = MdastNode[];

export type Primitive = string | number | boolean | null;

export type PropExpr =
  | { kind: "lit"; value: Primitive }
  | { kind: "arr"; items: PropExpr[] }
  | InlineNodeExpr;

export type InlineNodeExpr = {
  kind: "inline";
  name: string;                      // component/node name, e.g., "paragraph", "text", "js", "Table"
  attrs: Record<string, PropExpr>;   // inline component attributes
  body: PropExpr[];                  // sequence of prop expressions (typically strings or inline nodes)
};

// A normalized mdast "component" node: type is the directive name.
export type ComponentNode = {
  type: string;                      // e.g. "h1", "Table", "js"
  children: MdastChildren;           // directive body as mdast children
  position?: Position;
  // Plus: parsed props are assigned as fields directly on the node.
  // e.g. node.title = <mdast subtree>, node.header = <...>, node.value = "..."
  [key: string]: unknown;
};
