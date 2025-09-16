/**
 * Micromark tokenizers for:
 *  - [KEY:: VALUE]
 *  - (KEY:: VALUE)
 *  - KEY:: VALUE   (bare: ends at next whitespace unless quoted '...' or "...")
 *
 * Rules (ASCII-focused for simplicity):
 *   KEY start: [A-Za-z_]
 *   KEY rest:  [A-Za-z0-9_-]*
 *   Separator: '::' (no spaces between KEY and ::)
 *   After '::' optional spaces.
 *   Bare VALUE:
 *      - if next char is ' or ", consume until matching quote (no escapes)
 *      - else consume until next whitespace (SPACE/TAB/CR/LF)
 *   Bracket/Paren VALUE:
 *      - consume everything up to the matching ] or )
 *      - (simple; no nesting)
 */

import type {
  Construct,
  Effects,
  State,
  Code,
  Extension
} from 'micromark-util-types'

export const TOKENS = {
  // container tokens (3 distinct styles so the bridge can set node.style)
  fieldSquare: 'inlineFieldSquare',
  fieldParen: 'inlineFieldParen',
  fieldBare: 'inlineFieldBare',
  // inner pieces
  open: 'inlineFieldOpen',
  close: 'inlineFieldClose',
  key: 'inlineFieldKey',
  sep: 'inlineFieldSep',
  value: 'inlineFieldValue'
} as const

// Char codes
const LBRACKET = 91 /* [ */
const RBRACKET = 93 /* ] */
const LPAREN = 40 /* ( */
const RPAREN = 41 /* ) */
const COLON = 58 /* : */
const SPACE = 32 /* ' ' */
const TAB = 9
const LF = 10
const CR = 13
const QUOTE = 39 /* ' */
const DQUOTE = 34 /* " */

function isWs(c: number | null): boolean {
  return c === null || c === SPACE || c === TAB || c === LF || c === CR
}
function isKeyStart(c: number): boolean {
  return (c >= 65 && c <= 90) || (c >= 97 && c <= 122) || c === 95 // A-Z a-z _
}
function isKeyChar(c: number): boolean {
  return (
    (c >= 48 && c <= 57) || // 0-9
    (c >= 65 && c <= 90) || // A-Z
    (c >= 97 && c <= 122) || // a-z
    c === 95 || // _
    c === 45 // -
  )
}

// ---------- Square: [KEY:: VALUE] ----------
const squareConstruct: Construct = {
  name: 'inlineFieldSquare',
  tokenize: tokenizeSquare,
  partial: true
}

function tokenizeSquare(this: any, effects: Effects, ok: State, nok: State): State {
  return start

  function start(code: Code): State {
    if (code !== LBRACKET) return nok(code)
    effects.enter(TOKENS.fieldSquare)
    effects.enter(TOKENS.open)
    effects.consume(code) // '['
    effects.exit(TOKENS.open)
    return keyStart
  }

  function keyStart(code: Code): State {
    if (typeof code !== 'number' || !isKeyStart(code)) return bail(code)
    effects.enter(TOKENS.key)
    effects.consume(code)
    return keyRest
  }

  function keyRest(code: Code): State {
    if (typeof code === 'number' && isKeyChar(code)) {
      effects.consume(code)
      return keyRest
    }
    effects.exit(TOKENS.key)
    return maybeSep1(code)
  }

  function maybeSep1(code: Code): State {
    if (code !== COLON) return bail(code)
    effects.enter(TOKENS.sep)
    effects.consume(code)
    return sep2
  }

  function sep2(code: Code): State {
    if (code !== COLON) return bail(code)
    effects.consume(code)
    effects.exit(TOKENS.sep)
    return afterSep
  }

  function afterSep(code: Code): State {
    if (code === SPACE || code === TAB) {
      effects.consume(code)
      return afterSep
    }
    effects.enter(TOKENS.value)
    return valueUntilClose(code)
  }

  function valueUntilClose(code: Code): State {
    if (code === null) return bail(code)
    if (code === RBRACKET) {
      effects.exit(TOKENS.value)
      effects.enter(TOKENS.close)
      effects.consume(code)
      effects.exit(TOKENS.close)
      effects.exit(TOKENS.fieldSquare)
      return ok
    }
    effects.consume(code)
    return valueUntilClose
  }

  function bail(code: Code): State {
    return nok(code)
  }
}

// ---------- Paren: (KEY:: VALUE) ----------
const parenConstruct: Construct = {
  name: 'inlineFieldParen',
  tokenize: tokenizeParen,
  partial: true
}

function tokenizeParen(this: any, effects: Effects, ok: State, nok: State): State {
  return start

  function start(code: Code): State {
    if (code !== LPAREN) return nok(code)
    effects.enter(TOKENS.fieldParen)
    effects.enter(TOKENS.open)
    effects.consume(code) // '('
    effects.exit(TOKENS.open)
    return keyStart
  }

  function keyStart(code: Code): State {
    if (typeof code !== 'number' || !isKeyStart(code)) return bail(code)
    effects.enter(TOKENS.key)
    effects.consume(code)
    return keyRest
  }

  function keyRest(code: Code): State {
    if (typeof code === 'number' && isKeyChar(code)) {
      effects.consume(code)
      return keyRest
    }
    effects.exit(TOKENS.key)
    return maybeSep1(code)
  }

  function maybeSep1(code: Code): State {
    if (code !== COLON) return bail(code)
    effects.enter(TOKENS.sep)
    effects.consume(code)
    return sep2
  }

  function sep2(code: Code): State {
    if (code !== COLON) return bail(code)
    effects.consume(code)
    effects.exit(TOKENS.sep)
    return afterSep
  }

  function afterSep(code: Code): State {
    if (code === SPACE || code === TAB) {
      effects.consume(code)
      return afterSep
    }
    effects.enter(TOKENS.value)
    return valueUntilClose(code)
  }

  function valueUntilClose(code: Code): State {
    if (code === null) return bail(code)
    if (code === RPAREN) {
      effects.exit(TOKENS.value)
      effects.enter(TOKENS.close)
      effects.consume(code)
      effects.exit(TOKENS.close)
      effects.exit(TOKENS.fieldParen)
      return ok
    }
    effects.consume(code)
    return valueUntilClose
  }

  function bail(code: Code): State {
    return nok(code)
  }
}

// ---------- Bare: KEY:: VALUE (quotes allowed) ----------
const bareConstruct: Construct = {
  name: 'inlineFieldBare',
  tokenize: tokenizeBare,
  partial: true
}

function tokenizeBare(this: any, effects: Effects, ok: State, nok: State): State {
  // Boundary before: start-of-line or whitespace.
  const prev: number | null = this.previous
  if (!isWs(prev)) return nok

  return keyStart

  function keyStart(code: Code): State {
    if (typeof code !== 'number' || !isKeyStart(code)) return nok(code)
    effects.enter(TOKENS.fieldBare)
    effects.enter(TOKENS.key)
    effects.consume(code)
    return keyRest
  }

  function keyRest(code: Code): State {
    if (typeof code === 'number' && isKeyChar(code)) {
      effects.consume(code)
      return keyRest
    }
    effects.exit(TOKENS.key)
    return maybeSep1(code)
  }

  function maybeSep1(code: Code): State {
    if (code !== COLON) return bail(code)
    effects.enter(TOKENS.sep)
    effects.consume(code)
    return sep2
  }

  function sep2(code: Code): State {
    if (code !== COLON) return bail(code)
    effects.consume(code)
    effects.exit(TOKENS.sep)
    return afterSep
  }

  function afterSep(code: Code): State {
    // optional spaces before value
    if (code === SPACE || code === TAB) {
      effects.consume(code)
      return afterSep
    }
    // Start value token (we include quotes if present so the bridge can detect them)
    effects.enter(TOKENS.value)
    return valueStart(code)
  }

  function valueStart(code: Code): State {
    if (code === null || isWs(code)) {
      // empty value
      effects.exit(TOKENS.value)
      effects.exit(TOKENS.fieldBare)
      return ok(code)
    }
    effects.consume(code)
    // If quoted, we'll consume until matching quote; else until next whitespace.
    if (code === QUOTE) return inSingle
    if (code === DQUOTE) return inDouble
    return inUnquoted
  }

  function inUnquoted(code: Code): State {
    if (code === null || isWs(code)) {
      effects.exit(TOKENS.value)
      effects.exit(TOKENS.fieldBare)
      return ok(code)
    }
    effects.consume(code)
    return inUnquoted
  }

  function inSingle(code: Code): State {
    if (code === null) return bail(code)
    effects.consume(code)
    if (code === QUOTE) {
      // closing quote included
      effects.exit(TOKENS.value)
      effects.exit(TOKENS.fieldBare)
      return ok
    }
    return inSingle
  }

  function inDouble(code: Code): State {
    if (code === null) return bail(code)
    effects.consume(code)
    if (code === DQUOTE) {
      effects.exit(TOKENS.value)
      effects.exit(TOKENS.fieldBare)
      return ok
    }
    return inDouble
  }

  function bail(code: Code): State {
    return nok(code)
  }
}

/**
 * Exported micromark extension: hook on '[', '(', and KEY-start chars for bare.
 */
export function inlineFieldSyntax(): Extension {
  const text: Record<number, Construct> = {
    [LBRACKET]: squareConstruct,
    [LPAREN]: parenConstruct
  }
  // Register bare on KEY-start characters.
  const starts = [
    95, // _
    // A-Z:
    ...Array.from({length: 26}, (_, i) => 65 + i),
    // a-z:
    ...Array.from({length: 26}, (_, i) => 97 + i)
  ]
  for (const c of starts) text[c] = bareConstruct
  return { text }
}
