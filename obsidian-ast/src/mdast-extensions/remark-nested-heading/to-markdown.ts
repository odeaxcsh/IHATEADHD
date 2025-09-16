/**
 * Custom serializer so the transformed headings still stringify to Markdown.
 * Prints:
 *   <###> <title phrasing>\n
 *   <serialized body...>
 */

import type {ToMarkdownExtension, Handle} from "mdast-util-to-markdown"
import type {Heading, PhrasingContent, Content} from "mdast"

const handleHeading: Handle = (node, _parent, context) => {
  const h = node as Heading & { title?: PhrasingContent[], children?: Content[] }
  const depth = h.depth ?? 1
  const marker = "#".repeat(Math.max(1, Math.min(6, depth)))

  // Prefer our `title`; fallback to original phrasing if present
  let phrasing: PhrasingContent[] | undefined = h.title
  if (!phrasing || !phrasing.length) {
    // If someone fed us a non-sectionized heading, fall back gracefully
    if (Array.isArray(h.children) && h.children.length) {
      // Only keep phrasing nodes from original children for the title
      // (remark-parse ensures heading children are phrasing by default)
      phrasing = h.children as any
    } else {
      phrasing = []
    }
  }

  const titleInline = context.containerPhrasing(
    { type: "paragraph", children: phrasing },
    { before: "", after: "" }
  ).trim()

  const line = `${marker} ${titleInline}`.trimEnd() + "\n"

  // Body: after sectionizing, heading.children are *blocks/nested headings*
  let body = ""
  if (Array.isArray(h.children) && h.children.length) {
    const parts = h.children.map(child => context.handle(child, h))
    const joined = parts.join("")
    body = joined.endsWith("\n") ? joined : joined + "\n"
  }

  return line + body
}

export function nestedHeadingToMarkdown(): ToMarkdownExtension {
  return {
    handlers: { heading: handleHeading }
  }
}
