import type { MarkdownPostProcessorContext } from "obsidian";
import type { MdNode, MountPolicy } from "./types";

const VERBOSE = true;
const tag = (m: string) => `[ACR:mount] ${m}`;
const dbg = (...a: any[]) => VERBOSE && console.debug(...a);

export function pickAnchorByLinesInScope(
  scopeEl: HTMLElement,
  ctx: MarkdownPostProcessorContext,
  node: MdNode
): HTMLElement | null {
  const sLine = (node?.position?.start?.line ?? 1) - 1;
  const eLine = (node?.position?.end?.line ?? sLine + 1) - 1;
  dbg(tag(`pickAnchor scope=${scopeEl.tagName}.${scopeEl.className} node=${sLine}-${eLine}`));

  const candidates: HTMLElement[] = [scopeEl];
  candidates.push(
    ...scopeEl.querySelectorAll<HTMLElement>([
      "li.task-list-item","li","p","blockquote",
      "h1,h2,h3,h4,h5,h6","table","thead","tbody","tr","td","th",
      "pre","code","div"
    ].join(","))
  );

  let best: { el: HTMLElement; span: number } | null = null;
  let considered = 0;

  for (const el of candidates) {
    const sec = ctx.getSectionInfo(el);
    if (!sec) continue;
    considered++;
    const inside = !(sLine < sec.lineStart || eLine > sec.lineEnd);
    const span = sec.lineEnd - sec.lineStart;
    dbg(tag(`cand ${el.tagName}.${el.className} sec=L${sec.lineStart}–L${sec.lineEnd} inside=${inside} span=${span}`));
    if (!inside) continue;
    if (!best || span < best.span) best = { el, span };
  }

  dbg(tag(`candidates considered=${considered} chosen=${best?.el?.tagName || "none"}`), best?.el || null);
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
