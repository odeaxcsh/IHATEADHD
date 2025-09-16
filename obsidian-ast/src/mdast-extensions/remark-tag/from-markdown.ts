// from-markdown.ts
import type {FromMarkdownExtension} from 'mdast-util-from-markdown'
import type {MdTag} from './types.js'
import {TOKENS} from './syntax.js'

export function mdTagFromMarkdown(): FromMarkdownExtension {
  return {
    enter: {
      [TOKENS.tag]: function enterTag(token) {
        const node: MdTag = { type: 'mdTag', value: '' }
        this.enter(node, token)          // IMPORTANT: pass token
      }
    },
    exit: {
      [TOKENS.name]: function exitName(token) {
        // Grab the exact source slice covered by the name token.
        const name = this.sliceSerialize(token)
        const node = this.stack[this.stack.length - 1] as MdTag
        node.value = name                // <-- now it's filled
      },
      [TOKENS.tag]: function exitTag(token) {
        this.exit(token)                 // IMPORTANT: pass token
      }
    }
  }
}
