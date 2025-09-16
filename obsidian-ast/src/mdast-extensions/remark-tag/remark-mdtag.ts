/**
 * Registers:
 *  - the micromark inline syntax (Markdown → tokens)
 *  - the mdast bridges (tokens ↔ nodes)
 */

import type {Plugin} from 'unified'
import {mdTagSyntax} from './syntax'
import {mdTagFromMarkdown} from './from-markdown'
import {mdTagToMarkdown} from './to-markdown'

const remarkMdTag: Plugin<[]> = function () {
  const data = this.data()
  ;(data.micromarkExtensions ||= []).push(mdTagSyntax())
  ;(data.fromMarkdownExtensions ||= []).push(mdTagFromMarkdown())
  ;(data.toMarkdownExtensions ||= []).push(mdTagToMarkdown())
}

export default remarkMdTag
