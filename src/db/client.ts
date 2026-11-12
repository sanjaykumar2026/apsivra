import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const globalForDb = globalThis as unknown as {
  apsivraSql?: ReturnType<typeof postgres>;
};

function createClient() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is not set.");
  }
  return postgres(url, { max: 5 });
}

const sql = globalForDb.apsivraSql ?? createClient();

if (process.env.NODE_ENV !== "production") {
  globalForDb.apsivraSql = sql;
}

export const db = drizzle(sql, { schema });
