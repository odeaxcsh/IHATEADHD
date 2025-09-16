/**
 * Registers the callout transform and serializer.
 */
import type {Plugin} from 'unified'
import {transformCallouts} from './transform.js'
import {calloutToMarkdown} from './to-markdown.js'

const remarkCallout: Plugin<[]> = function () {
  // 1) Transform: run after parse, before stringify
  this.use(function () {
    const transformer = transformCallouts()
    return transformer
  })

  // 2) Serializer: so Callout prints correctly
  const data = this.data()
  ;(data.toMarkdownExtensions ||= []).push(calloutToMarkdown())
}

export default remarkCallout
