import { randomInt } from "node:crypto";

export interface InvoiceItem {
  description: string;
  quantity: number;
  amount: number;
}

export interface Invoice {
  invoiceId: string;
  clientName: string;
  clientEmail: string;
  items: InvoiceItem[];
  totalAmount: number;
  status: "draft" | "sent" | "paid" | "overdue";
  dueDate: string;
  createdAt: string;
  updatedAt: string;
  paystackReference?: string;
}

export interface CreateInvoiceInput {
  clientName: string;
  clientEmail: string;
  items: InvoiceItem[];
  dueDate: string;
  status?: Invoice["status"];
  paystackReference?: string;
}

export function generateInvoiceNumber() {
  const year = new Date().getFullYear();
  const sequence = randomInt(1, 10000);

  return `FLX-${year}-${sequence.toString().padStart(4, "0")}`;
}

export function calculateTotal(items: InvoiceItem[]) {
  return items.reduce((sum, item) => sum + item.amount * item.quantity, 0);
}
