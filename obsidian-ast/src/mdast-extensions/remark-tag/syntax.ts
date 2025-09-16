/**
 * Micromark "text" construct that recognizes an inline mdTag.
 * Pattern (ASCII-focused):
 *   BOUNDARY '#' [A-Za-z_][A-Za-z0-9_-]* (then boundary: whitespace or EOL)
 *
 * Notes:
 * - "Boundary before" = start-of-line or whitespace (space, tab, newline).
 * - We don't consume the trailing whitespace; we stop right before it.
 */

import type {
  Construct,
  Effects,
  State,
  Code,
  Extension
} from 'micromark-util-types'

export const TOKENS = {
  tag: 'mdTag',
  marker: 'mdTagMarker',
  name: 'mdTagName'
} as const

const HASH = 35 /* # */
const TAB = 9
const LF = 10
const CR = 13
const SPACE = 32

function isWs(c: number | null): boolean {
  return c === null || c === SPACE || c === TAB || c === LF || c === CR
}
function isAlphaUnderscore(c: number): boolean {
  return (c >= 65 && c <= 90) || (c >= 97 && c <= 122) || c === 95 // A-Z a-z _
}
function isNameChar(c: number): boolean {
  return (
    (c >= 48 && c <= 57) || // 0-9
    (c >= 65 && c <= 90) || // A-Z
    (c >= 97 && c <= 122) || // a-z
    c === 95 || // _
    c === 45 // -
  )
}

const mdTagConstruct: Construct = {
  name: 'mdTag',
  tokenize: tokenizeMdTag,
  partial: true // can start in the middle of text
}

function tokenizeMdTag(this: any, effects: Effects, ok: State, nok: State): State {
  const prev: number | null = this.previous // micromark gives last seen code
  // Must be boundary before: whitespace or line start
  if (!isWs(prev)) return nok

  return start

  function start(code: Code): State {
    if (code !== HASH) return nok(code)
    effects.enter(TOKENS.tag)
    effects.enter(TOKENS.marker)
    effects.consume(code) // '#'
    effects.exit(TOKENS.marker)
    return head
  }

  function head(code: Code): State {
    if (typeof code !== 'number') return nok(code)
    if (!isAlphaUnderscore(code)) return nok(code)

    effects.enter(TOKENS.name)
    effects.consume(code)
    return body
  }

  function body(code: Code): State {
    if (code === null) {
      effects.exit(TOKENS.name)
      effects.exit(TOKENS.tag)
      return ok(code)
    }
    if (isWs(code)) {
      // Boundary after: whitespace or EOL > stop, but don't consume it
      effects.exit(TOKENS.name)
      effects.exit(TOKENS.tag)
      return ok
    }
    if (!isNameChar(code)) {
      // Not a valid name char and not boundary > reject the whole match
      return nok(code)
    }
    effects.consume(code)
    return body
  }
}

/**
 * Exported micromark extension: register under "text" so it runs inline.
 * We trigger on the '#' code point.
 */
export function mdTagSyntax(): Extension {
  return {
    text: {
      [HASH]: mdTagConstruct as any
    }
  }
}
