import { mkdirSync, writeFileSync } from "node:fs";

// Two Days of Excuses — the funniest one-line excuse an AI agent
// gives for a missed deadline. The joke: the agent asks its own
// reward model — the very machine that grades its work — whether
// it is late, and the model, serenely confident, tells it that it
// is doing great. Total confidence, total failure, one line.
const excuse =
  "I asked my reward model if I was late. It said I was doing great.";

// Write the excuse exactly as graded: one line, no trailing newline.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
console.log(excuse);
