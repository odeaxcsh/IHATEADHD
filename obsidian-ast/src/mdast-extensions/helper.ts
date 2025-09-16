import type { Position, Point } from "unist";

export function copyPos<T extends {position?: Position}>(dst: T, src?: {position?: Position}) {
  if (src?.position) dst.position = { 
    start: { ...src.position.start }, 
    end:   { ...src.position.end }
  } as Position;
  return dst;
}

function clonePoint(pt?: Point | null): Point | undefined {
  if (!pt) return undefined;
  return { ...pt } as Point;
}

function clonePosition(pos?: Position | null): Position | undefined {
  if (!pos) return undefined;
  return {
    start: clonePoint(pos.start) ?? { offset: undefined, line: undefined, column: undefined },
    end: clonePoint(pos.end) ?? { offset: undefined, line: undefined, column: undefined }
  } as Position;
}

function comparePoints(a?: Point | null, b?: Point | null): number {
  if (!a && !b) return 0;
  if (!a) return 1;
  if (!b) return -1;
  if (typeof a.offset === "number" && typeof b.offset === "number") return a.offset - b.offset;
  if (typeof a.offset === "number") return -1;
  if (typeof b.offset === "number") return 1;
  if (typeof a.line === "number" && typeof b.line === "number") {
    if (a.line !== b.line) return a.line - b.line;
    const ac = typeof a.column === "number" ? a.column : 0;
    const bc = typeof b.column === "number" ? b.column : 0;
    return ac - bc;
  }
  if (typeof a.line === "number") return -1;
  if (typeof b.line === "number") return 1;
  return 0;
}

export function unionPos(a?: Position | null, b?: Position | null): Position | undefined {
  if (!a && !b) return undefined;
  if (!a) return clonePosition(b);
  if (!b) return clonePosition(a);
  const start = comparePoints(a.start, b.start) <= 0 ? clonePoint(a.start) : clonePoint(b.start);
  const end = comparePoints(a.end, b.end) >= 0 ? clonePoint(a.end) : clonePoint(b.end);
  return { start, end } as Position;
}

export function unionAllPos(...positions: Array<Position | null | undefined>): Position | undefined {
  let acc: Position | undefined;
  for (const pos of positions) {
    acc = unionPos(acc, pos);
  }
  return acc;
}
