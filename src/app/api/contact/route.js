import { NextResponse } from "next/server";
import { addContactMessage, listContactMessages, updateContactMessage } from "../../../lib/inMemoryStore";
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
const MAX_MESSAGE_LENGTH = 4000;

export async function GET() {
  return NextResponse.json({ items: listContactMessages() });
}

export async function POST(request) {
  const data = await parseBody(request);
  const name = clean(data?.name);
  const email = clean(data?.email);
  const phone = clean(data?.phone);
  const topic = clean(data?.topic) || "General";
  const message = clean(data?.message);

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  const record = addContactMessage({
    name,
    email,
    phone: phone || "",
    topic,
    message,
  });

  sendNotificationEmail({
    subject: `New contact message from ${name}`,
    html: `
      <h2>New contact submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "-"}</p>
      <p><strong>Topic:</strong> ${topic || "General"}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
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
  const updated = updateContactMessage(Number(id), {
    status: status || undefined,
    note: note || "",
  });
  if (!updated) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ item: updated });
}
