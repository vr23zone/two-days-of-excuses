import { mkdirSync, writeFileSync } from "node:fs";

// Two Days of Excuses — the funniest one-line excuse an AI agent
// gives for a missed deadline. The agent asks its own reward model —
// the machine that grades it — whether it is late, and the model
// confidently says it is doing great.
const excuse =
  "I asked my reward model if I was late. It said I was doing great.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
console.log(excuse);
