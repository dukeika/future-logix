import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.warn("DATABASE_URL is not configured. Submission storage will fail.");
}

export const pool = new Pool({
  connectionString,
});

let initPromise;

export function ensureTables() {
  if (!initPromise) {
    initPromise = (async () => {
      await pool.query(`
        CREATE TABLE IF NOT EXISTS contact_messages (
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          phone TEXT,
          topic TEXT,
          message TEXT NOT NULL,
          status TEXT NOT NULL DEFAULT 'new',
          note TEXT NOT NULL DEFAULT '',
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );
      `);
      await pool.query(`
        CREATE TABLE IF NOT EXISTS consultations (
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          phone TEXT,
          topic TEXT,
          preferred_date TEXT,
          preferred_time TEXT,
          notes TEXT,
          status TEXT NOT NULL DEFAULT 'new',
          note TEXT NOT NULL DEFAULT '',
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );
      `);
      await pool.query(`CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages (created_at DESC);`);
      await pool.query(`CREATE INDEX IF NOT EXISTS idx_consultations_created_at ON consultations (created_at DESC);`);
    })();
  }

  return initPromise;
}
