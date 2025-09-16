/**
 * Serialize a Callout back to Markdown using blockquote syntax:
 *
 *   > [!type][+|-]? Title
 *   > content...
 *
 * We:
 * - render the first line with the marker and title inline.
 * - render children and prefix each line with "> ".
 */
import type {ToMarkdownExtension, Handle} from 'mdast-util-to-markdown'
import type {Callout} from './types.js'

function prefixBlockquote(value: string): string {
  const lines = value.replace(/\r\n/g, '\n').split('\n')
  return lines.map(l => '> ' + l).join('\n')
}

const handleCallout: Handle = (node, _parent, context) => {
  const n = node as unknown as Callout
  const suffix = n.expanded === 'open' ? '+' : n.expanded === 'closed' ? '-' : ''
  const marker = `[!${n.calloutType}]${suffix}`

  let titleInline = ''
  if (n.title?.children?.length) {
    titleInline = context.containerPhrasing(n.title as any, {before: '', after: ''}).trim()
  }

  const firstLine = '> ' + marker + (titleInline ? ' ' + titleInline : '') + '\n'

  let body = ''
  if (n.children?.length) {
    const content = n.children.map(child => context.handle(child, n)).join('')
    const contentWithNl = content.endsWith('\n') ? content : content + '\n'
    body = prefixBlockquote(contentWithNl)
  }

  return firstLine + body
}

export function calloutToMarkdown(): ToMarkdownExtension {
  return { handlers: { callout: handleCallout } }
}
