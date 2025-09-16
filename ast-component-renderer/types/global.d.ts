declare module "node:test" {
  type TestFunction = () => void | Promise<void>;
  export function describe(name: string, fn: TestFunction): void;
  export function it(name: string, fn: TestFunction): void;
  export function beforeEach(fn: TestFunction): void;
}

declare module "node:assert/strict" {
  interface Assert {
    (value: unknown, message?: string | Error): asserts value;
    equal(actual: unknown, expected: unknown, message?: string | Error): void;
    deepEqual(actual: unknown, expected: unknown, message?: string | Error): void;
    ok(value: unknown, message?: string | Error): void;
  }
  const assert: Assert;
  export default assert;
}

declare module "obsidian" {
  export interface MarkdownPostProcessorContext {
    getSectionInfo(element: HTMLElement): { lineStart: number; lineEnd: number } | null;
  }
  export interface Plugin {
    app: App;
  }
  export interface App {
    workspace: unknown;
    vault: unknown;
    plugins: any;
  }
  export class Notice {
    constructor(message: string, timeout?: number);
  }
}
