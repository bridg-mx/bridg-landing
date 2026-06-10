import { createClient } from "@supabase/supabase-js";

export type SignupEntry = {
  name: string;
  email: string;
  company: string | null;
  role: string;
  locale: string | null;
};

export type SignupResult = { ok: true } | { error: "duplicate" };

/**
 * Stores a waitlist signup. Uses Supabase when SUPABASE_URL and
 * SUPABASE_SERVICE_ROLE_KEY are set; otherwise falls back to a local
 * SQLite file (.data/waitlist.db) so the form works without setup.
 * Throws on unexpected storage errors.
 */
export async function addSignup(entry: SignupEntry): Promise<SignupResult> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (url && key) {
    return addToSupabase(url, key, entry);
  }
  return addToSqlite(entry);
}

async function addToSupabase(
  url: string,
  key: string,
  entry: SignupEntry
): Promise<SignupResult> {
  const supabase = createClient(url, key, { auth: { persistSession: false } });
  const { error } = await supabase.from("waitlist_signups").insert(entry);
  if (error) {
    if (error.code === "23505") return { error: "duplicate" };
    throw new Error(`Supabase insert failed: ${error.code} ${error.message}`);
  }
  return { ok: true };
}

// SQLite fallback — local dev only. Won't persist on serverless hosts.

type SqliteDb = import("node:sqlite").DatabaseSync;

const globalForDb = globalThis as unknown as { __waitlistDb?: SqliteDb };

async function getSqliteDb(): Promise<SqliteDb> {
  if (globalForDb.__waitlistDb) return globalForDb.__waitlistDb;

  const { DatabaseSync } = await import("node:sqlite");
  const { mkdirSync } = await import("node:fs");
  const path = await import("node:path");

  const dir = path.join(process.cwd(), ".data");
  mkdirSync(dir, { recursive: true });

  const db = new DatabaseSync(path.join(dir, "waitlist.db"));
  db.exec(`
    create table if not exists waitlist_signups (
      id integer primary key autoincrement,
      created_at text not null default (datetime('now')),
      name text not null,
      email text not null unique,
      company text,
      role text not null default 'other',
      locale text
    );
  `);
  globalForDb.__waitlistDb = db;
  return db;
}

async function addToSqlite(entry: SignupEntry): Promise<SignupResult> {
  const db = await getSqliteDb();
  try {
    db.prepare(
      `insert into waitlist_signups (name, email, company, role, locale)
       values (?, ?, ?, ?, ?)`
    ).run(entry.name, entry.email, entry.company, entry.role, entry.locale);
  } catch (err) {
    if (err instanceof Error && err.message.includes("UNIQUE constraint failed")) {
      return { error: "duplicate" };
    }
    throw err;
  }
  console.warn(
    "[waitlist] Supabase env vars not set — signup stored in local .data/waitlist.db"
  );
  return { ok: true };
}
