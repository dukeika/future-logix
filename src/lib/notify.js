// Lightweight SES email helper. Requires AWS credentials and NOTIFY_FROM/NOTIFY_TO env vars.
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// Allow SES to live in a different region than the app (e.g., Amplify eu-west-2, SES us-east-1).
const region =
  process.env.AWS_SES_REGION ||
  process.env.SES_REGION ||
  process.env.AWS_REGION ||
  process.env.AWS_DEFAULT_REGION ||
  "us-east-1";
const fromAddress = process.env.NOTIFY_FROM;
const toAddress = process.env.NOTIFY_TO || process.env.NOTIFY_FROM;

const ses = new SESClient({ region });

export async function sendNotificationEmail({ subject, html, text }) {
  if (!fromAddress || !toAddress) {
    console.warn("Notification email skipped: NOTIFY_FROM/NOTIFY_TO not set");
    return;
  }

  const params = {
    Source: fromAddress,
    Destination: { ToAddresses: [toAddress] },
    Message: {
      Subject: { Data: subject, Charset: "UTF-8" },
      Body: {
        Html: { Data: html, Charset: "UTF-8" },
        Text: { Data: text || html.replace(/<[^>]+>/g, " "), Charset: "UTF-8" },
      },
    },
  };

  try {
    await ses.send(new SendEmailCommand(params));
  } catch (err) {
    console.error("Failed to send notification email", err);
  }
}
