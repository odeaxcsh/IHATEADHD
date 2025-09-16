/**
 * Callout node:
 * - calloutType: normalized lower-case type (e.g., "tip", "warning")
 * - expanded: 'open' | 'closed' | undefined  (undefined if unknown/not present)
 * - title: first-line paragraph with the marker removed
 * - children: the callout's content blocks
 */
import type { Parent } from 'unist'
import type { Paragraph, BlockContent } from 'mdast'

export interface Callout extends Parent {
  type: 'callout'
  calloutType: string
  expanded?: 'open' | 'closed'
  title: Paragraph
  children: BlockContent[]
}

declare module 'mdast' {
  interface RootContentMap { callout: Callout }
  interface BlockContentMap { callout: Callout }
}
