import { readFileSync } from "node:fs";

/** Load .env.local when DATABASE_URL is not already set (local/dev). */
export function loadLocalEnv() {
  if (process.env.DATABASE_URL) return;
  try {
    const text = readFileSync(".env.local", "utf8");
    for (const line of text.split(/\r?\n/)) {
      const match = line.match(/^([A-Z0-9_]+)=(.*)$/);
      if (match && !process.env[match[1]]) {
        process.env[match[1]] = match[2];
      }
    }
  } catch {
    // Production sets DATABASE_URL in the host environment.
  }
}

loadLocalEnv();
