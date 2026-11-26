import { mkdirSync, writeFileSync } from "node:fs";

// One emoji: the agent builds the work, packs it, and ships it.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "📦");
