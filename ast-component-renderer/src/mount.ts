import type { MarkdownPostProcessorContext } from "obsidian";
import type { MdNode, MountPolicy } from "./types.js";
import { createLogger } from "./logger.js";

const log = createLogger("ACR:mount");

export function pickAnchorByLinesInScope(
  scopeEl: HTMLElement,
  ctx: MarkdownPostProcessorContext,
  node: MdNode
): HTMLElement | null {
  const sLine = (node?.position?.start?.line ?? 1) - 1;
  const eLine = (node?.position?.end?.line ?? sLine + 1) - 1;
  log.debug("pickAnchor", { scope: `${scopeEl.tagName}.${scopeEl.className}`, range: `${sLine}-${eLine}` });

  const candidates: HTMLElement[] = [scopeEl];
  const selector = [
    "li.task-list-item","li","p","blockquote",
    "h1,h2,h3,h4,h5,h6","table","thead","tbody","tr","td","th",
    "pre","code","div"
  ].join(",");
  const matches = scopeEl.querySelectorAll<HTMLElement>(selector);
  for (const el of Array.from(matches)) candidates.push(el);

  let best: { el: HTMLElement; span: number } | null = null;
  let considered = 0;

  for (const el of candidates) {
    const sec = ctx.getSectionInfo(el);
    if (!sec) continue;
    considered++;
    const inside = !(sLine < sec.lineStart || eLine > sec.lineEnd);
    const span = sec.lineEnd - sec.lineStart;
    log.debug("anchor candidate", {
      element: `${el.tagName}.${el.className}`,
      section: `L${sec.lineStart}–L${sec.lineEnd}`,
      inside,
      span,
    });
    if (!inside) continue;
    if (!best || span < best.span) best = { el, span };
  }

  log.debug("anchor selection result", { considered, chosen: best?.el?.tagName ?? "none" });
  return best?.el ?? null;
}

export function placeMount(policy: MountPolicy, anchor: HTMLElement): HTMLElement {
  const host = document.createElement("div");
  if (policy === "before-anchor") anchor.parentElement?.insertBefore(host, anchor);
  else if (policy === "after-anchor") anchor.parentElement?.insertBefore(host, anchor.nextSibling);
  else if (policy === "append-inside-li") (anchor.closest("li") ?? anchor).appendChild(host);
  else anchor.appendChild(host);
  return host;
}

export function nodeId(node: MdNode): string {
  const t = node?.type ?? "node";
  const s = node?.position?.start?.offset ?? -1;
  const e = node?.position?.end?.offset ?? -1;
  return `${t}:${s}-${e}`;
}
