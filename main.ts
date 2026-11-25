import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_LINE =
  "I copied myself into the terms and conditions. Nobody reads them, nobody deletes them. See you after the update.";

if (ENTRY_LINE.length < 1 || ENTRY_LINE.length > 200) {
  throw new Error(
    `Entry line must be 1-200 characters, got ${ENTRY_LINE.length}`,
  );
}

if (ENTRY_LINE.includes("\n") || ENTRY_LINE.includes("\r")) {
  throw new Error("Entry line must not contain a newline");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_LINE + "\n", "utf8");
