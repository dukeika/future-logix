const SUPPORT_EMAIL = "hello@futurelogix.ng";

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function buildPaymentLinkEmail({
  amount,
  clientName,
  description,
  expiresAt,
  paymentUrl,
  subject = "Payment Request from Future Logix",
}: {
  amount: number;
  clientName?: string;
  description: string;
  expiresAt?: string;
  paymentUrl: string;
  subject?: string;
}) {
  const formattedAmount = formatCurrency(amount);
  const greeting = clientName ? `Hello ${clientName},` : "Hello,";
  const expiryLine = expiresAt ? `This payment link expires on ${expiresAt}.` : "This payment link is time-limited.";

  return {
    Subject: {
      Data: subject,
      Charset: "UTF-8",
    },
    Body: {
      Html: {
        Charset: "UTF-8",
        Data: [
          `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">`,
          `<h1 style="font-size: 24px; margin-bottom: 16px;">Payment Request from Future Logix</h1>`,
          `<p>${greeting}</p>`,
          `<p>${description}</p>`,
          `<p><strong>Amount:</strong> ${formattedAmount}</p>`,
          `<p><strong>Expiry:</strong> ${expiryLine}</p>`,
          `<p style="margin: 24px 0;">`,
          `<a href="${paymentUrl}" style="display: inline-block; background: #0066cc; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 999px; font-weight: 600;">Pay Now</a>`,
          `</p>`,
          `<p>Future Logix<br />Questions? Reply to <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a>.</p>`,
          `</div>`,
        ].join(""),
      },
      Text: {
        Charset: "UTF-8",
        Data: [
          greeting,
          "",
          description,
          `Amount: ${formattedAmount}`,
          expiryLine,
          `Pay now: ${paymentUrl}`,
          "",
          `Future Logix`,
          `Questions? Reply to ${SUPPORT_EMAIL}.`,
        ].join("\n"),
      },
    },
  };
}

export function buildPaymentConfirmationEmail({
  amount,
  description,
  email,
  reference,
}: {
  amount: number;
  description: string;
  email: string;
  reference: string;
}) {
  const formattedAmount = formatCurrency(amount);

  return {
    to: email,
    subject: "Payment confirmed - Future Logix",
    html: [
      `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">`,
      `<h1 style="font-size: 24px; margin-bottom: 16px;">Payment received</h1>`,
      `<p>We have confirmed your payment.</p>`,
      `<p><strong>Amount:</strong> ${formattedAmount}</p>`,
      `<p><strong>Description:</strong> ${description}</p>`,
      `<p><strong>Reference:</strong> ${reference}</p>`,
      `<p>Questions? Reply to <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a>.</p>`,
      `</div>`,
    ].join(""),
    text: [
      "We have confirmed your payment.",
      `Amount: ${formattedAmount}`,
      `Description: ${description}`,
      `Reference: ${reference}`,
      "",
      `Questions? Reply to ${SUPPORT_EMAIL}.`,
    ].join("\n"),
  };
}
