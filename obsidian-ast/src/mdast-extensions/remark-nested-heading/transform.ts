import type {Root, Content, Heading, PhrasingContent, BlockContent, Position} from "mdast"
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
      title?: PhrasingContent[]
      children: Array<BlockContent | H>
      _sectionized?: true
    }

    const stack: H[] = []

    function finalizePosition(sec: H) {
      const start = sec.position?.start
      const last: any = sec.children.length ? sec.children[sec.children.length - 1] : null
      const end = last?.position?.end ?? sec.position?.end
      if (start && end) sec.position = { start, end } as Position
    }

    function openSection(h: Heading): H {
      // Create a new object so we don't mutate the original node in-place
      const sec: H = {
        ...h,
        type: "heading",
        title: (h.children as PhrasingContent[]) ?? [],
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
