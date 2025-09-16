import type { Position } from "unist";

export function copyPos<T extends {position?: Position}>(dst: T, src?: {position?: Position}) {
  if (src?.position) dst.position = { 
    start: { ...src.position.start }, 
    end:   { ...src.position.end }
  } as Position;
  return dst;
}

export function unionPos(a?: Position | null, b?: Position | null): Position | undefined {
  if (!a && !b) return undefined;
  if (!a) return b as Position;
  if (!b) return a as Position;
  const start = (a.start.offset ?? 0) < (b.start.offset ?? Infinity) ? a.start : b.start;
  const end   = (a.end.offset ?? 0)   > (b.end.offset ?? -Infinity)   ? a.end   : b.end;
  return { start, end } as Position;
}
