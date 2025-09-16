/**
 * mdast node for InlineField.
 * - style: which syntax was used: 'square' | 'paren' | 'bare'
 * - key: field key (ASCII; tokenizer accepts [A-Za-z_][A-Za-z0-9_-]* for bare;
 *        in bracket/paren forms we use the same rule to keep things simple)
 * - value: parsed value (quotes removed for bare when present)
 * - quote: whether the original bare value was quoted
 */
import type {Literal} from 'unist'

export type InlineFieldStyle = 'square' | 'paren' | 'bare'
export type InlineFieldQuote = 'none' | 'single' | 'double'

export interface InlineField extends Literal {
  type: 'inlineField'
  key: string
  value: string
  style: InlineFieldStyle
  quote?: InlineFieldQuote
}

declare module 'mdast' {
  interface PhrasingContentMap {
    inlineField: InlineField
  }
}
