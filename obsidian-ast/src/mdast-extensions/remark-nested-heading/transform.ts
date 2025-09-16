import type {Root, Content, Heading, PhrasingContent, BlockContent, Paragraph} from "mdast"
import type {Plugin} from "unified"
import { unionPos, copyPos } from "../helper"

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
      title: Paragraph
      children: Array<BlockContent | H>
      _sectionized?: true
    }

    const stack: H[] = []

    function finalizePosition(sec: H) {
      let nextPos = unionPos(sec.position, sec.title?.position)
      for (const child of sec.children) {
        nextPos = unionPos(nextPos, (child as any)?.position ?? null)
      }
      if (nextPos) sec.position = nextPos
    }

    function cloneHeadingData(h: Heading): Partial<Heading> {
      const { children: _children, ...rest } = h as any
      return { ...rest }
    }

    function toParagraph(children: PhrasingContent[], source: Heading): Paragraph {
      const paragraph: Paragraph = { type: "paragraph", children: children.slice() }
      copyPos(paragraph, source)
      if (children.length) {
        let accum = null as any
        for (const child of children) {
          accum = unionPos(accum, (child as any)?.position ?? null)
        }
        paragraph.position = unionPos(paragraph.position, accum)
      }
      return paragraph
    }

    function openSection(h: Heading): H {
      const phrasing = (h.children as PhrasingContent[]) ?? []
      const title = toParagraph(phrasing, h)
      const sec: H = {
        ...(cloneHeadingData(h) as Heading),
        type: "heading",
        title,
        children: [],
        _sectionized: true
      }
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
