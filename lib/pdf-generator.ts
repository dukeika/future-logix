import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";

import type { Invoice } from "@/lib/invoices";

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 2,
  }).format(amount);
}

function renderInvoiceHtml(invoice: Invoice) {
  const rows = invoice.items
    .map(
      (item) => `
        <tr>
          <td>${item.description}</td>
          <td>${item.quantity}</td>
          <td>${formatCurrency(item.amount)}</td>
          <td>${formatCurrency(item.amount * item.quantity)}</td>
        </tr>
      `
    )
    .join("");

  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>${invoice.invoiceId}</title>
        <style>
          body { font-family: Arial, sans-serif; color: #0f172a; padding: 32px; }
          h1, h2, p { margin: 0 0 12px; }
          .meta { margin-bottom: 24px; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px; }
          table { width: 100%; border-collapse: collapse; margin-top: 16px; }
          th, td { border: 1px solid #cbd5e1; padding: 12px; text-align: left; }
          th { background: #eff6ff; }
          .total { margin-top: 24px; text-align: right; font-size: 18px; font-weight: 700; }
        </style>
      </head>
      <body>
        <h1>Future Logix Invoice</h1>
        <div class="meta">
          <p><strong>Invoice:</strong> ${invoice.invoiceId}</p>
          <p><strong>Status:</strong> ${invoice.status}</p>
          <p><strong>Created:</strong> ${invoice.createdAt}</p>
          <p><strong>Due:</strong> ${invoice.dueDate}</p>
        </div>
        <div class="grid">
          <div>
            <h2>Bill To</h2>
            <p>${invoice.clientName}</p>
            <p>${invoice.clientEmail}</p>
          </div>
          <div>
            <h2>Company</h2>
            <p>Future Logix Limited</p>
            <p>Lagos, Nigeria</p>
            <p>admin@futurelogix.ng</p>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Qty</th>
              <th>Unit Amount</th>
              <th>Line Total</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
        <p class="total">Total: ${formatCurrency(invoice.totalAmount)}</p>
      </body>
    </html>
  `;
}

export async function generateInvoicePDF(invoice: Invoice): Promise<Buffer> {
  const executablePath =
    process.env.CHROME_EXECUTABLE_PATH || (await chromium.executablePath());

  const browser = await puppeteer.launch({
    args: chromium.args,
    executablePath,
    headless: true,
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });
    await page.setContent(renderInvoiceHtml(invoice), { waitUntil: "networkidle0" });
    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: {
        top: "24px",
        right: "24px",
        bottom: "24px",
        left: "24px",
      },
    });

    return Buffer.from(pdf);
  } finally {
    await browser.close();
  }
}
