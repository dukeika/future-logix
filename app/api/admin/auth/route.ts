import { timingSafeEqual } from "node:crypto";

import { NextResponse } from "next/server";

export const runtime = "nodejs";

function passwordsMatch(input: string, expected: string) {
  const inputBuffer = Buffer.from(input);
  const expectedBuffer = Buffer.from(expected);

  if (inputBuffer.length !== expectedBuffer.length) {
    return false;
  }

  return timingSafeEqual(inputBuffer, expectedBuffer);
}

export async function POST(request: Request) {
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    return NextResponse.json({ error: "Admin password is not configured." }, { status: 500 });
  }

  const payload = (await request.json().catch(() => null)) as { password?: string } | null;
  const password = payload?.password?.trim() ?? "";

  if (!passwordsMatch(password, adminPassword)) {
    return NextResponse.json({ error: "Incorrect admin password." }, { status: 401 });
  }

  return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
}
