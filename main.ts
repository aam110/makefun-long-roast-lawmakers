import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "The lawmaker who wants to license every AI model in America still emails his own crypto bill to his staff with the subject line 'please PDF this for me.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
