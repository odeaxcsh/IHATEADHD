/**
 * Bridge: turn tokens into the mdast InlineField node.
 * - We use distinct container tokens to set node.style.
 * - For key/value we slice the source. For bare quoted values, we strip quotes.
 */

import type {FromMarkdownExtension} from 'mdast-util-from-markdown'
import type {InlineField, InlineFieldStyle, InlineFieldQuote} from './types.js'
import {TOKENS} from './syntax.js'

export function inlineFieldFromMarkdown(): FromMarkdownExtension {
  return {
    enter: {
      [TOKENS.fieldSquare]: enterField('square'),
      [TOKENS.fieldParen]: enterField('paren'),
      [TOKENS.fieldBare]: enterField('bare')
      // NOTE: no buffer() calls needed when using sliceSerialize
    },
    exit: {
      [TOKENS.key]: setKey,
      [TOKENS.value]: setValue,
      [TOKENS.fieldSquare]: exitField,
      [TOKENS.fieldParen]: exitField,
      [TOKENS.fieldBare]: exitField
    }
  }

  function enterField(style: InlineFieldStyle) {
    return function (this: any, token: any) {
      const node: InlineField = {
        type: 'inlineField',
        key: '',
        value: '',
        style
      } as InlineField
      this.enter(node, token) // pass token so position.start is set
    }
  }

  function setKey(this: any, token: any) {
    const text = this.sliceSerialize(token) as string
    const node = this.stack[this.stack.length - 1] as InlineField
    node.key = text.trim()
  }

  function setValue(this: any, token: any) {
    const node = this.stack[this.stack.length - 1] as InlineField
    let raw = this.sliceSerialize(token) as string
    let quote: InlineFieldQuote = 'none'

    // For bracket/paren, trim outside whitespace; for bare, keep to detect quotes first
    if (node.style !== 'bare') {
      raw = raw.trim()
    } else {
      const first = raw.charCodeAt(0)
      const last = raw.charCodeAt(raw.length - 1)
      if (first === 34 && last === 34) {        // "
        quote = 'double'
        raw = raw.slice(1, -1)
      } else if (first === 39 && last === 39) { // '
        quote = 'single'
        raw = raw.slice(1, -1)
      }
    }

    node.value = raw
    if (quote !== 'none') node.quote = quote
  }

  function exitField(this: any, token: any) {
    this.exit(token) // pass token so position.end is set
  }
}
