import PDFDocument from "pdfkit/js/pdfkit.standalone";

import type { Invoice } from "@/lib/invoices";

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 2,
  }).format(amount);
}

function drawCell(
  doc: InstanceType<typeof PDFDocument>,
  text: string,
  x: number,
  y: number,
  width: number,
  height: number,
  options?: Record<string, unknown>
) {
  doc.rect(x, y, width, height).stroke("#cbd5e1");
  doc.text(text, x + 8, y + 8, {
    width: width - 16,
    height: height - 16,
    ...options,
  });
}

export async function generateInvoicePDF(invoice: Invoice): Promise<Buffer> {
  return await new Promise<Buffer>((resolve, reject) => {
    const doc = new PDFDocument({
      size: "A4",
      margin: 40,
      info: {
        Title: invoice.invoiceId,
        Author: "Future Logix Limited",
      },
    });

    const chunks: Buffer[] = [];
    const pageWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;
    const left = doc.page.margins.left;
    const rightColX = left + pageWidth / 2 + 12;
    const colWidth = pageWidth / 2 - 12;

    doc.on("data", (chunk) => chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    doc.font("Helvetica-Bold").fontSize(24).fillColor("#0f172a").text("Future Logix Invoice");
    doc.moveDown(0.5);

    doc.font("Helvetica").fontSize(11).fillColor("#334155");
    doc.text(`Invoice: ${invoice.invoiceId}`);
    doc.text(`Status: ${invoice.status}`);
    doc.text(`Created: ${invoice.createdAt}`);
    doc.text(`Due: ${invoice.dueDate}`);

    const infoTop = doc.y + 20;

    doc.font("Helvetica-Bold").fontSize(13).fillColor("#0f172a").text("Bill To", left, infoTop);
    doc.font("Helvetica").fontSize(11).fillColor("#334155");
    doc.text(invoice.clientName, left, infoTop + 22, { width: colWidth });
    doc.text(invoice.clientEmail, left, doc.y + 4, { width: colWidth });

    doc.font("Helvetica-Bold").fontSize(13).fillColor("#0f172a").text("Company", rightColX, infoTop);
    doc.font("Helvetica").fontSize(11).fillColor("#334155");
    doc.text("Future Logix Limited", rightColX, infoTop + 22, { width: colWidth });
    doc.text("Lagos, Nigeria", rightColX, doc.y + 4, { width: colWidth });
    doc.text("admin@futurelogix.ng", rightColX, doc.y + 4, { width: colWidth });

    const tableTop = Math.max(doc.y, infoTop + 86) + 28;
    const rowHeight = 34;
    const descriptionWidth = pageWidth * 0.42;
    const qtyWidth = pageWidth * 0.12;
    const unitWidth = pageWidth * 0.22;
    const totalWidth = pageWidth - descriptionWidth - qtyWidth - unitWidth;
    const columnXs = [
      left,
      left + descriptionWidth,
      left + descriptionWidth + qtyWidth,
      left + descriptionWidth + qtyWidth + unitWidth,
    ];

    doc.save();
    doc.fillColor("#eff6ff").rect(left, tableTop, pageWidth, rowHeight).fill();
    doc.restore();

    doc.font("Helvetica-Bold").fontSize(10).fillColor("#0f172a");
    drawCell(doc, "Description", columnXs[0], tableTop, descriptionWidth, rowHeight);
    drawCell(doc, "Qty", columnXs[1], tableTop, qtyWidth, rowHeight, { align: "center" });
    drawCell(doc, "Unit Amount", columnXs[2], tableTop, unitWidth, rowHeight, { align: "right" });
    drawCell(doc, "Line Total", columnXs[3], tableTop, totalWidth, rowHeight, { align: "right" });

    let currentY = tableTop + rowHeight;
    doc.font("Helvetica").fontSize(10).fillColor("#334155");

    for (const item of invoice.items) {
      const lineTotal = item.amount * item.quantity;
      drawCell(doc, item.description, columnXs[0], currentY, descriptionWidth, rowHeight);
      drawCell(doc, String(item.quantity), columnXs[1], currentY, qtyWidth, rowHeight, { align: "center" });
      drawCell(doc, formatCurrency(item.amount), columnXs[2], currentY, unitWidth, rowHeight, { align: "right" });
      drawCell(doc, formatCurrency(lineTotal), columnXs[3], currentY, totalWidth, rowHeight, { align: "right" });
      currentY += rowHeight;
    }

    doc.moveTo(left, currentY + 10).lineTo(left + pageWidth, currentY + 10).stroke("#cbd5e1");
    doc.font("Helvetica-Bold").fontSize(16).fillColor("#0f172a");
    doc.text(`Total: ${formatCurrency(invoice.totalAmount)}`, left, currentY + 22, {
      width: pageWidth,
      align: "right",
    });

    doc.end();
  });
}
