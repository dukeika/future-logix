import nodemailer from "nodemailer";

const BREVO_SMTP_HOST = process.env.BREVO_SMTP_HOST ?? "smtp-relay.brevo.com";
const BREVO_SMTP_PORT = Number(process.env.BREVO_SMTP_PORT ?? 587);

const transporter = nodemailer.createTransport({
  host: BREVO_SMTP_HOST,
  port: BREVO_SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.BREVO_SMTP_LOGIN,
    pass: process.env.BREVO_SMTP_KEY,
  },
});

export async function sendMail({
  from,
  to,
  subject,
  html,
  text,
  replyTo,
  attachments,
}: {
  from: string;
  to: string | string[];
  subject: string;
  html: string;
  text: string;
  replyTo?: string | string[];
  attachments?: { filename: string; content: Buffer; contentType?: string }[];
}) {
  await transporter.sendMail({ from, to, subject, html, text, replyTo, attachments });
}
