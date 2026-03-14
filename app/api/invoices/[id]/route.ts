import { NextResponse } from "next/server";
import { z } from "zod";

import { deleteInvoice, getInvoice, updateInvoice } from "@/lib/invoices";

export const runtime = "nodejs";

const noStoreHeaders = { "Cache-Control": "no-store" };

const invoiceItemSchema = z.object({
  description: z.string().trim().min(1),
  quantity: z.number().int().positive(),
  amount: z.number().positive(),
});

const updateInvoiceSchema = z
  .object({
    clientName: z.string().trim().min(1).optional(),
    clientEmail: z.string().trim().email().optional(),
    items: z.array(invoiceItemSchema).min(1).optional(),
    dueDate: z.string().trim().min(1).optional(),
    status: z.enum(["draft", "sent", "paid", "overdue"]).optional(),
    paystackReference: z.string().trim().min(1).optional(),
  })
  .refine((value) => Object.keys(value).length > 0, "At least one field is required.");

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const invoice = await getInvoice(id);

    if (!invoice) {
      return NextResponse.json({ error: "Invoice not found." }, { status: 404, headers: noStoreHeaders });
    }

    return NextResponse.json({ invoice }, { headers: noStoreHeaders });
  } catch (error) {
    console.error("get invoice error", error);
    return NextResponse.json(
      { error: "Unable to load invoice right now." },
      { status: 500, headers: noStoreHeaders }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const payload = await request.json().catch(() => null);
    const parsed = updateInvoiceSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid invoice update payload." },
        { status: 400, headers: noStoreHeaders }
      );
    }

    const invoice = await updateInvoice(id, parsed.data);
    return NextResponse.json({ invoice }, { headers: noStoreHeaders });
  } catch (error) {
    console.error("update invoice error", error);

    if (error instanceof Error && error.message === "Invoice not found.") {
      return NextResponse.json({ error: error.message }, { status: 404, headers: noStoreHeaders });
    }

    return NextResponse.json(
      { error: "Unable to update invoice right now." },
      { status: 500, headers: noStoreHeaders }
    );
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const deleted = await deleteInvoice(id);

    if (!deleted) {
      return NextResponse.json({ error: "Invoice not found." }, { status: 404, headers: noStoreHeaders });
    }

    return NextResponse.json({ message: "Invoice deleted." }, { headers: noStoreHeaders });
  } catch (error) {
    console.error("delete invoice error", error);
    return NextResponse.json(
      { error: "Unable to delete invoice right now." },
      { status: 500, headers: noStoreHeaders }
    );
  }
}
