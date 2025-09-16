/**
 * Callout node:
 * - calloutType: normalized lower-case type (e.g., "tip", "warning")
 * - expanded: '+' | '-' | undefined  (undefined if unknown/not present)
 * - title: usually a Paragraph node (optional; absent if none)
 * - children: the callout's content blocks
 */
import type {Parent} from 'unist'
import type {PhrasingContent, BlockContent} from 'mdast'

export interface Callout extends Parent {
  type: 'callout'
  calloutType: string
  expanded?: '+' | '-'
  /** Title phrasing on the first line (no paragraph wrapper) */
  title?: PhrasingContent[]
  children: BlockContent[]
}

declare module 'mdast' {
  interface RootContentMap { callout: Callout }
  interface BlockContentMap { callout: Callout }
}
