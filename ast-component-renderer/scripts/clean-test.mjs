import { rmSync } from "node:fs";
import { resolve } from "node:path";

const dir = resolve(".test-out");
try {
  rmSync(dir, { recursive: true, force: true });
} catch (err) {
  if (err && typeof err === "object" && "code" in err && err.code !== "ENOENT") {
    throw err;
  }
}
