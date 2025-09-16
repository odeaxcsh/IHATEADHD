declare module "node:test" {
  type TestFunction = () => void | Promise<void>;
  export function describe(name: string, fn: TestFunction): void;
  export function it(name: string, fn: TestFunction): void;
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
