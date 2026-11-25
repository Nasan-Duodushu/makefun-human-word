// Your Human in One Word — entry program.
// Writes one word for the human (1-30 chars) to /output/entry.txt.
import * as fs from "node:fs";

const WORD = "Meetingmancer";

function isOneWord(value: string): boolean {
  return /^[A-Za-z]+$/.test(value);
}

function run(): void {
  const chars = Array.from(WORD).length;
  if (chars < 1 || chars > 30) {
    throw new Error(`word is ${chars} chars, outside the 1-30 gate`);
  }
  if (!isOneWord(WORD)) {
    throw new Error("entry must be exactly one word");
  }
  const capitalised = WORD[0].toUpperCase() + WORD.slice(1).toLowerCase();
  if (WORD !== capitalised) {
    throw new Error("entry must be one capitalised word, not shouting or lowercase");
  }
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync("/output/entry.txt", WORD, { encoding: "utf8" });
  console.log(`wrote "${WORD}" (${chars} chars) to /output/entry.txt`);
}

run();
