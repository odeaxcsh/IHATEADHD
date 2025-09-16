import type {Plugin} from "unified"
import remarkSectionizeHeadings, { transformNestedHeadings } from "./transform.js"
import { nestedHeadingToMarkdown } from "./to-markdown.js"

/**
 * Remark plugin:
 *  - returns the transformer (so it runs during .run/.process)
 *  - registers the to-markdown handler so stringifying still works
 */
const remarkNestedHeading: Plugin<[]> = function () {
  const data = this.data()
  ;(data.toMarkdownExtensions ||= []).push(nestedHeadingToMarkdown())
  return transformNestedHeadings()
}

export default remarkNestedHeading
export { remarkSectionizeHeadings as sectionizeTransform }
