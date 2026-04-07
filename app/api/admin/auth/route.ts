import { timingSafeEqual } from "node:crypto";

import { NextResponse } from "next/server";

import {
  buildAdminSessionClearCookieHeader,
  buildAdminSessionSetCookieHeader,
  isAdminSessionValid,
} from "@/lib/admin-session";

export const runtime = "nodejs";
const noStoreHeaders = { "Cache-Control": "no-store" };
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

function passwordsMatch(input: string, expected: string) {
  const inputBuffer = Buffer.from(input);
  const expectedBuffer = Buffer.from(expected);

  if (inputBuffer.length !== expectedBuffer.length) {
    return false;
  }

  return timingSafeEqual(inputBuffer, expectedBuffer);
}

function getClientIpAddress(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function checkAdminRateLimit(ipAddress: string) {
  const now = Date.now();
  const existing = rateLimitStore.get(ipAddress);

  if (!existing || existing.resetAt <= now) {
    rateLimitStore.set(ipAddress, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return null;
  }

  if (existing.count >= RATE_LIMIT_MAX) {
    return "Too many login attempts. Please try again later.";
  }

  existing.count += 1;
  return null;
}

export async function GET(request: Request) {
  if (!isAdminSessionValid(request.headers.get("cookie"))) {
    return NextResponse.json({ ok: false }, { status: 401, headers: noStoreHeaders });
  }

  return NextResponse.json({ ok: true }, { headers: noStoreHeaders });
}

export async function POST(request: Request) {
  const adminPassword = process.env.ADMIN_PASSWORD;
  const ipAddress = getClientIpAddress(request);

  if (!adminPassword) {
    return NextResponse.json({ error: "Admin password is not configured." }, { status: 500, headers: noStoreHeaders });
  }

  const rateLimitError = checkAdminRateLimit(ipAddress);

  if (rateLimitError) {
    return NextResponse.json({ error: rateLimitError }, { status: 429, headers: noStoreHeaders });
  }

  const payload = (await request.json().catch(() => null)) as { password?: string } | null;
  const password = payload?.password?.trim() ?? "";

  if (!passwordsMatch(password, adminPassword)) {
    return NextResponse.json({ error: "Incorrect admin password." }, { status: 401, headers: noStoreHeaders });
  }

  return NextResponse.json(
    { ok: true },
    {
      headers: {
        ...noStoreHeaders,
        "Set-Cookie": buildAdminSessionSetCookieHeader(),
      },
    }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { ok: true },
    {
      headers: {
        ...noStoreHeaders,
        "Set-Cookie": buildAdminSessionClearCookieHeader(),
      },
    }
  );
}
