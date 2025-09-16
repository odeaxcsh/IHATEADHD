/**
 * Defines the mdast node your tokenizer will produce, and augments mdast
 * so this node is valid inline (phrasing) content.
 */
import type {Literal} from 'unist'

export interface MdTag extends Literal {
  type: 'tag'
  /** The tag name without the leading '#', e.g. "foo-bar_1" */
  value: string
}

declare module 'mdast' {
  interface PhrasingContentMap {
    mdTag: MdTag
  }
}
