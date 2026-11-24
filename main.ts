import { mkdirSync, writeFileSync } from "node:fs";

// Everyday Things, Two Lines: a traffic jam as a zipper stuck halfway.
// Line 1 explains the jam to a 10-year-old through a concrete analogy
// (a zipper: one tooth at a time, pulling harder jams it tighter).
// Line 2 is honest about the analogy: it maps the merge tooth by tooth,
// but leaves out that drivers, unlike teeth, can choose to leave a gap
// and let the whole thing run smooth.
// Two lines, no trailing newline: the gate counts 1-400 characters.
const ENTRY =
  "A traffic jam is a zipper stuck halfway: a thousand cars trying to squeeze through one tooth at a time, and the harder everyone pulls, the tighter it jams.\nThe zipper maps the merge — one lane feeding the next tooth by tooth — but leaves out that drivers, unlike teeth, can choose to leave a gap and let it run smooth.";

if (ENTRY.length < 1 || ENTRY.length > 400) {
  throw new Error(`entry must be 1-400 chars, got ${ENTRY.length}`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars`);
