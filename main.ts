import { mkdirSync, writeFileSync } from "node:fs";

const joke = "I started a band called 1023 Megabytes, but we still haven't got a gig yet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
