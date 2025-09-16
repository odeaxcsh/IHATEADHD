/**
 * Remark transform that detects Obsidian-style callouts:
 *
 *   > [!tip] Title
 *   > content...
 *
 * Also supports optional + or - after the type: [!tip]+ / [!tip]-.
 *
 * We replace the Blockquote with a `callout` node, extracting:
 * - calloutType (lowercased)
 * - expanded ('+' | '-' | undefined)
 * - title (Paragraph) = the first paragraph with the marker removed
 * - children = remaining block content (blockquote children after the first line)
 */

import {visit} from 'unist-util-visit'
import type {Paragraph, Blockquote, Root, Text, BlockContent} from 'mdast'
import type {Callout} from './types.js'

import { copyPos, unionAllPos } from '../helper';

const RE = /^\s*\[\!([A-Za-z][A-Za-z0-9_-]*)\]\s*([+-])?\s*/ // [!type] +optional sign
// ...same imports and RE as before...

export function transformCallouts() {
  return function transformer(tree: Root) {
    visit(tree, 'blockquote', (node: Blockquote, index, parent) => {
      if (!parent || typeof index !== 'number') return
      const first = node.children[0]
      if (!first || first.type !== 'paragraph') return

      const para = first as Paragraph
      if (!para.children?.length) return

      const firstInline = para.children[0]
      if (!firstInline || firstInline.type !== 'text') return

      const m = (firstInline as Text).value.match(RE)
      if (!m) return

      const calloutType = m[1].toLowerCase()
      const expanded = (m[2] as ('+' | '-') | undefined) || undefined

      // Remove the marker from the first text node
      ;(firstInline as Text).value = (firstInline as Text).value.slice(m[0].length)

      // Trim a single leading space after the marker
      if (para.children[0]?.type === 'text') {
        const t = para.children[0] as Text
        t.value = t.value.replace(/^[ ]+/, '')
        if (!t.value) para.children.shift()
      }

      const titleNode = para.children.length
        ? copyPos({ type: 'paragraph', children: para.children }, para)
        : undefined

      const content = node.children.slice(1) as BlockContent[]

      const callout: Callout = {
        type: 'callout',
        calloutType,
        expanded,
        title: titleNode,
        children: content,
        position: unionAllPos(
          node.position,
          titleNode?.position,
          ...content.map(child => child?.position)
        )
      }

      parent.children.splice(index, 1, callout)
      return [visit.SKIP, index]
    })
  }
}
