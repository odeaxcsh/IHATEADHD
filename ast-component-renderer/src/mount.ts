import type { MarkdownPostProcessorContext } from "obsidian";
import type { MdNode, MountPolicy } from "./types.js";
import { createLogger } from "./logger.js";

const log = createLogger("ACR:mount");

type Candidate = { el: HTMLElement; priority: number };

function addSelectors(scope: HTMLElement, selectors: string[], priority: number, into: Candidate[], seen: Set<HTMLElement>) {
  for (const selector of selectors) {
    if (!selector) continue;
    const matches = scope.querySelectorAll<HTMLElement>(selector);
    for (const el of Array.from(matches)) {
      if (seen.has(el)) continue;
      seen.add(el);
      into.push({ el, priority });
    }
  }
}

export function pickAnchorByLinesInScope(
  scopeEl: HTMLElement,
  ctx: MarkdownPostProcessorContext,
  node: MdNode
): HTMLElement | null {
  const sLine = (node?.position?.start?.line ?? 1) - 1;
  const eLine = (node?.position?.end?.line ?? sLine + 1) - 1;
  log.debug("pickAnchor", { scope: `${scopeEl.tagName}.${scopeEl.className}`, range: `${sLine}-${eLine}` });

  const candidates: Candidate[] = [];
  const seen = new Set<HTMLElement>();
  const push = (el: HTMLElement | null, priority: number) => {
    if (!el || seen.has(el)) return;
    seen.add(el);
    candidates.push({ el, priority });
  };

  push(scopeEl, 3);

  const type = node?.type ?? "";
  if (type === "heading") addSelectors(scopeEl, ["h1", "h2", "h3", "h4", "h5", "h6"], 0, candidates, seen);
  if (type === "listItem") addSelectors(scopeEl, ["li.task-list-item", "li"], 0, candidates, seen);
  if (type === "callout") addSelectors(scopeEl, [".callout-title", ".callout-content", ".callout"], 0, candidates, seen);
  if (type === "paragraph") addSelectors(scopeEl, ["p"], 0, candidates, seen);

  addSelectors(scopeEl, [
    ".callout-title",
    ".callout-content",
    ".callout",
    "li.task-list-item",
    "li",
    "p",
    "blockquote",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "table",
    "thead",
    "tbody",
    "tr",
    "td",
    "th",
    "pre",
    "code",
    "div"
  ], 1, candidates, seen);

  let best: (Candidate & {
    covers: boolean;
    exact: boolean;
    span: number;
    gap: number;
    overlap: number;
  }) | null = null;
  let considered = 0;

  for (const cand of candidates) {
    const sec = ctx.getSectionInfo(cand.el);
    if (!sec) continue;
    considered++;
    const start = sec.lineStart;
    const end = sec.lineEnd;
    const covers = sLine >= start && eLine <= end;
    const overlapRaw = Math.min(eLine, end) - Math.max(sLine, start);
    const overlap = overlapRaw >= 0 ? overlapRaw : -1;
    if (overlap < 0 && !covers) continue;
    const exact = covers && start === sLine && end === eLine;
    const span = Math.max(0, end - start);
    const gap = Math.abs(start - sLine) + Math.abs(end - eLine);
    log.debug("anchor candidate", {
      element: `${cand.el.tagName}.${cand.el.className}`,
      section: `L${sec.lineStart}–L${sec.lineEnd}`,
      covers,
      span,
      priority: cand.priority
    });
    const score = { ...cand, covers, exact, span, gap, overlap };
    if (!best || compareCandidates(score, best) < 0) best = score;
  }

  log.debug("anchor selection result", { considered, chosen: best?.el?.tagName ?? "none" });
  return best?.el ?? null;
}

function compareCandidates(a: { covers: boolean; exact: boolean; span: number; gap: number; overlap: number; priority: number }, b: { covers: boolean; exact: boolean; span: number; gap: number; overlap: number; priority: number }): number {
  if (a.covers !== b.covers) return a.covers ? -1 : 1;
  if (a.priority !== b.priority) return a.priority - b.priority;
  if (a.exact !== b.exact) return a.exact ? -1 : 1;
  if (a.span !== b.span) return a.span - b.span;
  if (a.gap !== b.gap) return a.gap - b.gap;
  if (a.overlap !== b.overlap) return b.overlap - a.overlap;
  return 0;
}

export function placeMount(policy: MountPolicy, anchor: HTMLElement): HTMLElement {
  const host = document.createElement("div");
  if (policy === "append-inside-li") {
    (anchor.closest("li") ?? anchor).appendChild(host);
  } else if (policy === "after-heading") {
    if (anchor.parentElement) anchor.parentElement.insertBefore(host, anchor.nextSibling);
    else anchor.appendChild(host);
  } else {
    anchor.appendChild(host);
  }
  return host;
}

export function nodeId(node: MdNode): string {
  const t = node?.type ?? "node";
  const s = node?.position?.start?.offset ?? -1;
  const e = node?.position?.end?.offset ?? -1;
  return `${t}:${s}-${e}`;
}
