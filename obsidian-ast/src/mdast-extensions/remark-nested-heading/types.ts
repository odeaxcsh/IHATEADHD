/**
 * Convenience types for consumers.
 * We keep node.type === "heading" for selector compatibility,
 * add a `title?: PhrasingContent[]`, and treat `children` as the section body.
 *
 * We *don’t* change mdast's built-in definition of Heading.children at the type
 * level (that would break external types). Consumers can use HeadingSection for
 * section-aware code.
 */

import type {Heading, BlockContent, PhrasingContent} from "mdast"

export interface HeadingSection extends Heading {
  /** Phrasing children copied from the original heading line */
  title?: PhrasingContent[]
  /** Section body blocks (including nested HeadingSection) */
  children: Array<BlockContent | HeadingSection>
  /** Internal marker to avoid re-sectionizing */
  _sectionized?: true
}

// Optional augmentation: expose `title` on mdast Heading for TS convenience.
declare module "mdast" {
  interface Heading {
    /** Phrasing from the heading line, if sectionized by this plugin */
    title?: PhrasingContent[]
    /** (At runtime after sectionizing) children are section body blocks */
    // Note: we don't alter the declared type of children here.
  }
}
