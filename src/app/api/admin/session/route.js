import crypto from "crypto";
import { NextResponse } from "next/server";

const hashSecret = (secret) => crypto.createHash("sha256").update(secret).digest("hex");

const cookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "lax",
  path: "/",
  maxAge: 60 * 60 * 8, // 8 hours
};

export async function POST(request) {
  const adminPassword = process.env.ADMIN_PASSWORD || "lbifdfdfdX31#~";
  if (!adminPassword) {
    return NextResponse.json({ error: "ADMIN_PASSWORD is not configured" }, { status: 500 });
  }

  const { password } = await request.json().catch(() => ({}));
  if (password !== adminPassword) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set("admin_session", hashSecret(adminPassword), cookieOptions);
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set("admin_session", "", { ...cookieOptions, maxAge: 0 });
  return res;
}
