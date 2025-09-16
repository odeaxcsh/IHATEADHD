export type LogLevel = "debug" | "info" | "warn" | "error" | "off";

export const LOG_LEVELS: readonly LogLevel[] = ["debug", "info", "warn", "error", "off"] as const;
export const DEFAULT_LOG_LEVEL: LogLevel = "info";

export const LOG_LEVEL_LABELS: Record<LogLevel, string> = {
  debug: "Debug (very verbose)",
  info: "Info (recommended)",
  warn: "Warn (warnings & errors)",
  error: "Error only",
  off: "Off",
};

const LEVEL_RANK: Record<LogLevel, number> = {
  debug: 10,
  info: 20,
  warn: 30,
  error: 40,
  off: 50,
};

type LevelGetter = () => LogLevel | undefined;

let globalLevelGetter: LevelGetter = () => DEFAULT_LOG_LEVEL;

export function normalizeLogLevel(value: unknown, fallback: LogLevel = DEFAULT_LOG_LEVEL): LogLevel {
  if (typeof value === "string") {
    const normalized = value.toLowerCase() as LogLevel;
    if ((LOG_LEVELS as readonly string[]).includes(normalized)) return normalized;
  }
  return fallback;
}

export class ScopedLogger {
  constructor(private readonly scope: string, private readonly levelGetter: LevelGetter) {}

  private shouldLog(level: LogLevel): boolean {
    const current = normalizeLogLevel(this.levelGetter?.(), DEFAULT_LOG_LEVEL);
    return LEVEL_RANK[level] >= LEVEL_RANK[current];
  }

  private withScope(args: any[]): any[] {
    return [`[${this.scope}]`, ...args];
  }

  debug(...args: any[]): void {
    if (this.shouldLog("debug")) console.debug(...this.withScope(args));
  }

  info(...args: any[]): void {
    if (this.shouldLog("info")) console.info(...this.withScope(args));
  }

  warn(...args: any[]): void {
    if (this.shouldLog("warn")) console.warn(...this.withScope(args));
  }

  error(...args: any[]): void {
    if (this.shouldLog("error")) console.error(...this.withScope(args));
  }
}

export function setLoggerLevelGetter(getter: LevelGetter | undefined): void {
  if (typeof getter === "function") {
    globalLevelGetter = () => normalizeLogLevel(getter(), DEFAULT_LOG_LEVEL);
  } else {
    globalLevelGetter = () => DEFAULT_LOG_LEVEL;
  }
}

export function createLogger(scope: string, getter?: LevelGetter): ScopedLogger {
  const levelGetter = getter
    ? () => normalizeLogLevel(getter(), DEFAULT_LOG_LEVEL)
    : () => globalLevelGetter();
  return new ScopedLogger(scope, levelGetter);
}
