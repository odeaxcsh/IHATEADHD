import type {Root, Content, Heading, PhrasingContent, BlockContent, Paragraph} from "mdast"
import { copyPos, unionAllPos } from "../helper"
import type {Plugin} from "unified"

/**
 * Sectionize headings:
 * - Heading line phrasing -> node.title
 * - Subsequent blocks (until next heading of depth <= current) -> node.children
 * - Deeper headings nest inside shallower ones
 * - Content before the first heading stays at root level
 */
export function transformNestedHeadings() {
  return function transformer(tree: Root) {
    const root = tree as unknown as { children: Content[] }
    const out: Content[] = []
    type H = Heading & {
      title?: Paragraph
      children: Array<BlockContent | H>
      _sectionized?: true
    }

    const stack: H[] = []

    function finalizePosition(sec: H) {
      const childPositions = sec.children.map(child => child?.position)
      const union = unionAllPos(sec.position, sec.title?.position, ...childPositions)
      if (union) sec.position = union
    }

    function openSection(h: Heading): H {
      // Create a new object so we don't mutate the original node in-place
      const phrasing = (h.children as PhrasingContent[] | undefined) ?? []
      const titleParagraph: Paragraph = copyPos({ type: "paragraph", children: phrasing }, h)

      const sec: H = {
        ...h,
        type: "heading",
        title: titleParagraph,
        children: [],
        _sectionized: true
      }
      // Ensure heading "children" now refers to the section body array
      ;(sec as any).children = sec.children
      return sec
    }

    function popToDepth(depth: number) {
      while (stack.length && (stack[stack.length - 1].depth ?? 7) >= depth) {
        const done = stack.pop()!
        finalizePosition(done)
      }
    }

    for (const node of root.children) {
      if (node.type === "heading") {
        const depth = (node as Heading).depth ?? 6
        popToDepth(depth)
        const sec = openSection(node as Heading)
        if (stack.length) {
          stack[stack.length - 1].children.push(sec as any)
        } else {
          out.push(sec as unknown as Content)
        }
        stack.push(sec)
      } else {
        if (stack.length) {
          stack[stack.length - 1].children.push(node as BlockContent)
        } else {
          out.push(node)
        }
      }
    }

    while (stack.length) {
      const done = stack.pop()!
      finalizePosition(done)
    }

    root.children = out
  }
}

/** As a remark plugin */
export default function remarkSectionizeHeadings(): Plugin<[]> {
  return function (tree) {
    return transformNestedHeadings()(tree as Root)
  }
}
