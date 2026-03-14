import { NextResponse } from "next/server";
import { z } from "zod";

import { createInvoice, listInvoices } from "@/lib/invoices";

export const runtime = "nodejs";

const noStoreHeaders = { "Cache-Control": "no-store" };

const invoiceItemSchema = z.object({
  description: z.string().trim().min(1),
  quantity: z.number().int().positive(),
  amount: z.number().positive(),
});

const createInvoiceSchema = z.object({
  clientName: z.string().trim().min(1),
  clientEmail: z.string().trim().email(),
  items: z.array(invoiceItemSchema).min(1),
  dueDate: z.string().trim().min(1),
  status: z.enum(["draft", "sent", "paid", "overdue"]).optional(),
  paystackReference: z.string().trim().min(1).optional(),
});

export async function GET() {
  try {
    const invoices = await listInvoices();
    return NextResponse.json({ invoices }, { headers: noStoreHeaders });
  } catch (error) {
    console.error("list invoices error", error);
    return NextResponse.json(
      { error: "Unable to load invoices right now." },
      { status: 500, headers: noStoreHeaders }
    );
  }
}

export async function POST(request: Request) {
  try {
    const payload = await request.json().catch(() => null);
    const parsed = createInvoiceSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid invoice payload." },
        { status: 400, headers: noStoreHeaders }
      );
    }

    const invoice = await createInvoice(parsed.data);
    return NextResponse.json({ invoice }, { status: 201, headers: noStoreHeaders });
  } catch (error) {
    console.error("create invoice error", error);
    return NextResponse.json(
      { error: "Unable to create invoice right now." },
      { status: 500, headers: noStoreHeaders }
    );
  }
}
