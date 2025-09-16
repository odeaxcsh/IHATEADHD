/**
 * Serializer so `mdTag` prints back to Markdown as `#name`.
 */

import type {ToMarkdownExtension, Handle} from 'mdast-util-to-markdown'
import type {MdTag} from './types.js'

const handleMdTag: Handle = (node) => {
  const n = node as MdTag
  return `#${n.value}`
}

export function mdTagToMarkdown(): ToMarkdownExtension {
  return {
    handlers: {
      mdTag: handleMdTag
    }
  }
}
