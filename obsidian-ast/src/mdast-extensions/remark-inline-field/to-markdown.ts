/**
 * Serializer: prints an InlineField back to Markdown.
 * - Preserves style (square/paren/bare).
 * - For bare: if node.quote is set, we wrap with that quote.
 *   If no quote is set but the value contains whitespace, we default to double quotes.
 */
import type {ToMarkdownExtension, Handle} from 'mdast-util-to-markdown'
import type {InlineField} from './types.js'

const handleInlineField: Handle = (node) => {
  const n = node as InlineField
  const key = n.key
  const sep = '::'
  let value = n.value

  if (n.style === 'bare') {
    const needsQuote = /\s/.test(value)
    if (n.quote === 'single') value = `'${value}'`
    else if (n.quote === 'double' || (!n.quote && needsQuote)) value = `"${value}"`
    // else keep unquoted
    return `${key}${sep} ${value}`
  }

  if (n.style === 'square') {
    return `[${key}${sep} ${value}]`
  }

  // paren
  return `(${key}${sep} ${value})`
}

export function inlineFieldToMarkdown(): ToMarkdownExtension {
  return {
    handlers: {
      inlineField: handleInlineField
    }
  }
}
