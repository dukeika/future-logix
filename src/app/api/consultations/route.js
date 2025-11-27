import { NextResponse } from "next/server";
import { addConsultation, listConsultations, updateConsultation } from "../../../lib/inMemoryStore";
import { sendNotificationEmail } from "../../../lib/notify";

const parseBody = async (request) => {
  const contentType = request.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return request.json();
  }
  const form = await request.formData();
  return Object.fromEntries(form.entries());
};

const clean = (value) => (typeof value === "string" ? value.trim() : "");
const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
const MAX_NOTES_LENGTH = 6000;

export async function GET() {
  return NextResponse.json({ items: listConsultations() });
}

export async function POST(request) {
  const data = await parseBody(request);
  const name = clean(data?.name);
  const email = clean(data?.email);
  const phone = clean(data?.phone);
  const topic = clean(data?.topic) || "Consultation";
  const preferredDate = clean(data?.preferredDate);
  const preferredTime = clean(data?.preferredTime);
  const notes = clean(data?.notes);

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }

  if (notes.length > MAX_NOTES_LENGTH) {
    return NextResponse.json({ error: "Notes are too long." }, { status: 400 });
  }

  const record = addConsultation({
    name,
    email,
    phone: phone || "",
    topic,
    preferredDate: preferredDate || "",
    preferredTime: preferredTime || "",
    notes: notes || "",
  });

  sendNotificationEmail({
    subject: `New consultation request from ${name}`,
    html: `
      <h2>New consultation request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "-"}</p>
      <p><strong>Topic:</strong> ${topic || "Consultation"}</p>
      <p><strong>Preferred date:</strong> ${preferredDate || "-"}</p>
      <p><strong>Preferred time:</strong> ${preferredTime || "-"}</p>
      <p><strong>Notes:</strong></p>
      <p>${notes || "-"}</p>
      <p><strong>Received:</strong> ${record.createdAt}</p>
    `,
  });

  return NextResponse.json({ item: record }, { status: 201 });
}

export async function PATCH(request) {
  const data = await parseBody(request);
  const { id, status, note } = data || {};
  if (!id) {
    return NextResponse.json({ error: "id is required" }, { status: 400 });
  }
  const updated = updateConsultation(Number(id), {
    status: status || undefined,
    note: note || "",
  });
  if (!updated) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ item: updated });
}
