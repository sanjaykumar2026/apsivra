import { drizzle, type PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const globalForDb = globalThis as unknown as {
  apsivraSql?: ReturnType<typeof postgres>;
  apsivraDb?: PostgresJsDatabase<typeof schema>;
};

function createClient() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is not set.");
  }
  return postgres(url, { max: 5 });
}

function getDb() {
  if (!globalForDb.apsivraDb) {
    const sql = globalForDb.apsivraSql ?? createClient();
    globalForDb.apsivraSql = sql;
    globalForDb.apsivraDb = drizzle(sql, { schema });
  }
  return globalForDb.apsivraDb;
}

/** Lazy so `next build` can load route modules before Amplify injects DATABASE_URL. */
export const db = new Proxy({} as PostgresJsDatabase<typeof schema>, {
  get(_target, prop, receiver) {
    return Reflect.get(getDb(), prop, receiver);
  },
});
