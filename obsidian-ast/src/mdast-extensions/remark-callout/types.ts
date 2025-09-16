/**
 * Callout node:
 * - calloutType: normalized lower-case type (e.g., "tip", "warning")
 * - expanded: '+' | '-' | undefined  (undefined if unknown/not present)
 * - title: usually a Paragraph node (optional; absent if none)
 * - children: the callout's content blocks
 */
import type {Parent} from 'unist'
import type {Paragraph, BlockContent} from 'mdast'

export interface Callout extends Parent {
  type: 'callout'
  calloutType: string
  expanded?: '+' | '-'
  /** Title paragraph extracted from the first line (optional) */
  title?: Paragraph
  children: BlockContent[]
}

declare module 'mdast' {
  interface RootContentMap { callout: Callout }
  interface BlockContentMap { callout: Callout }
}
