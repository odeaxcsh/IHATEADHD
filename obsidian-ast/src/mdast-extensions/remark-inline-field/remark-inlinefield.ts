/**
 * Registers the micromark syntax and mdast bridges.
 */
import type {Plugin} from 'unified'
import {inlineFieldSyntax} from './syntax.js'
import {inlineFieldFromMarkdown} from './from-markdown.js'
import {inlineFieldToMarkdown} from './to-markdown.js'

const remarkInlineField: Plugin<[]> = function () {
  const data = this.data()
  ;(data.micromarkExtensions ||= []).push(inlineFieldSyntax())
  ;(data.fromMarkdownExtensions ||= []).push(inlineFieldFromMarkdown())
  ;(data.toMarkdownExtensions ||= []).push(inlineFieldToMarkdown())
}
export default remarkInlineField
