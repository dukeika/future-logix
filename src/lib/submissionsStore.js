import { ensureTables, pool } from "./db";

const mapContact = (row) => ({
  id: row.id,
  name: row.name,
  email: row.email,
  phone: row.phone || "",
  topic: row.topic || "",
  message: row.message || "",
  status: row.status || "new",
  note: row.note || "",
  createdAt: row.created_at?.toISOString?.() || new Date().toISOString(),
});

const mapConsultation = (row) => ({
  id: row.id,
  name: row.name,
  email: row.email,
  phone: row.phone || "",
  topic: row.topic || "",
  preferredDate: row.preferred_date || "",
  preferredTime: row.preferred_time || "",
  notes: row.notes || "",
  status: row.status || "new",
  note: row.note || "",
  createdAt: row.created_at?.toISOString?.() || new Date().toISOString(),
});

export async function addContactMessage(payload) {
  await ensureTables();
  const { name, email, phone, topic, message } = payload;
  const result = await pool.query(
    `
      INSERT INTO contact_messages (name, email, phone, topic, message)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `,
    [name, email, phone || null, topic || null, message]
  );
  return mapContact(result.rows[0]);
}

export async function listContactMessages() {
  await ensureTables();
  const result = await pool.query(`SELECT * FROM contact_messages ORDER BY created_at DESC`);
  return result.rows.map(mapContact);
}

export async function updateContactMessage(id, updates) {
  await ensureTables();
  const status = updates.status ?? null;
  const note = updates.note ?? null;
  const result = await pool.query(
    `
      UPDATE contact_messages
      SET status = COALESCE($2, status),
          note = COALESCE($3, note)
      WHERE id = $1
      RETURNING *
    `,
    [id, status, note]
  );
  return result.rows[0] ? mapContact(result.rows[0]) : null;
}

export async function addConsultation(payload) {
  await ensureTables();
  const { name, email, phone, topic, preferredDate, preferredTime, notes } = payload;
  const result = await pool.query(
    `
      INSERT INTO consultations (name, email, phone, topic, preferred_date, preferred_time, notes)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
    `,
    [name, email, phone || null, topic || null, preferredDate || null, preferredTime || null, notes || null]
  );
  return mapConsultation(result.rows[0]);
}

export async function listConsultations() {
  await ensureTables();
  const result = await pool.query(`SELECT * FROM consultations ORDER BY created_at DESC`);
  return result.rows.map(mapConsultation);
}

export async function updateConsultation(id, updates) {
  await ensureTables();
  const status = updates.status ?? null;
  const note = updates.note ?? null;
  const result = await pool.query(
    `
      UPDATE consultations
      SET status = COALESCE($2, status),
          note = COALESCE($3, note)
      WHERE id = $1
      RETURNING *
    `,
    [id, status, note]
  );
  return result.rows[0] ? mapConsultation(result.rows[0]) : null;
}
