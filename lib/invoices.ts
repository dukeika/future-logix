import {
  DynamoDBClient,
} from "@aws-sdk/client-dynamodb";
import {
  DeleteCommand,
  DynamoDBDocumentClient,
  PutCommand,
  QueryCommand,
  ScanCommand,
} from "@aws-sdk/lib-dynamodb";

const INVOICE_TABLE_NAME = process.env.INVOICE_TABLE_NAME ?? "FutureLogixInvoices";
const AWS_REGION = process.env.AWS_REGION ?? process.env.AWS_DEFAULT_REGION ?? "eu-west-2";

const dynamoClient = new DynamoDBClient({ region: AWS_REGION });
const docClient = DynamoDBDocumentClient.from(dynamoClient, {
  marshallOptions: { removeUndefinedValues: true },
});

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

export type UpdateInvoiceInput = Partial<
  Pick<Invoice, "clientName" | "clientEmail" | "items" | "dueDate" | "status" | "paystackReference">
>;

export function generateInvoiceNumber() {
  const year = new Date().getFullYear();
  const sequence = Math.floor(Math.random() * 10000) + 1;

  return `FLX-${year}-${sequence.toString().padStart(4, "0")}`;
}

export function calculateTotal(items: InvoiceItem[]) {
  return items.reduce((sum, item) => sum + item.amount * item.quantity, 0);
}

export async function createInvoice(input: CreateInvoiceInput): Promise<Invoice> {
  const createdAt = new Date().toISOString();
  const invoice: Invoice = {
    invoiceId: generateInvoiceNumber(),
    clientName: input.clientName,
    clientEmail: input.clientEmail.trim().toLowerCase(),
    items: input.items,
    totalAmount: calculateTotal(input.items),
    status: input.status ?? "draft",
    dueDate: input.dueDate,
    createdAt,
    updatedAt: createdAt,
    paystackReference: input.paystackReference,
  };

  await docClient.send(
    new PutCommand({
      TableName: INVOICE_TABLE_NAME,
      Item: invoice,
      ConditionExpression: "attribute_not_exists(invoiceId) AND attribute_not_exists(createdAt)",
    })
  );

  return invoice;
}

export async function getInvoice(invoiceId: string): Promise<Invoice | null> {
  const response = await docClient.send(
    new QueryCommand({
      TableName: INVOICE_TABLE_NAME,
      KeyConditionExpression: "invoiceId = :invoiceId",
      ExpressionAttributeValues: {
        ":invoiceId": invoiceId,
      },
      Limit: 1,
      ScanIndexForward: false,
    })
  );

  return (response.Items?.[0] as Invoice | undefined) ?? null;
}

export async function updateInvoice(invoiceId: string, updates: UpdateInvoiceInput): Promise<Invoice> {
  const existing = await getInvoice(invoiceId);

  if (!existing) {
    throw new Error("Invoice not found.");
  }

  const nextItems = updates.items ?? existing.items;
  const updatedInvoice: Invoice = {
    ...existing,
    ...updates,
    clientEmail: (updates.clientEmail ?? existing.clientEmail).trim().toLowerCase(),
    items: nextItems,
    totalAmount: calculateTotal(nextItems),
    updatedAt: new Date().toISOString(),
  };

  await docClient.send(
    new PutCommand({
      TableName: INVOICE_TABLE_NAME,
      Item: updatedInvoice,
    })
  );

  return updatedInvoice;
}

export async function listInvoices(): Promise<Invoice[]> {
  const response = await docClient.send(
    new ScanCommand({
      TableName: INVOICE_TABLE_NAME,
    })
  );

  return ((response.Items as Invoice[] | undefined) ?? []).sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt)
  );
}

export async function deleteInvoice(invoiceId: string) {
  const existing = await getInvoice(invoiceId);

  if (!existing) {
    return false;
  }

  await docClient.send(
    new DeleteCommand({
      TableName: INVOICE_TABLE_NAME,
      Key: {
        invoiceId: existing.invoiceId,
        createdAt: existing.createdAt,
      },
    })
  );

  return true;
}
