## Paystack Live Mode Checklist

1. Generate or confirm the live Paystack keys in the Paystack dashboard.
2. Confirm Amplify production environment variables are set for app `d15m5j87kx1cqj` and branch `main`:
   - `ADMIN_PASSWORD`
   - `ADMIN_SESSION_SECRET`
   - `PAYSTACK_SECRET_KEY`
   - `PAYSTACK_PUBLIC_KEY`
   - `INVOICE_TABLE_NAME`
   - `SITE_URL=https://futurelogix.ng`
3. If `PAYSTACK_SERVER_KEY` is still present in Amplify from older releases, remove it after confirming `PAYSTACK_SECRET_KEY` is active.
4. Confirm the Amplify app is using the intended build spec.
   - If the console-level build spec override is enabled, update that configuration as well.
   - Do not assume repository `amplify.yml` is being used automatically.
5. Confirm the webhook URL in Paystack is:
   - `https://futurelogix.ng/api/webhooks/paystack`
6. Redeploy the production app after updating the environment variables.
7. Create a small live invoice and complete a low-value live payment.
8. Confirm all of the following:
   - invoice status changes to `paid`
   - client confirmation email is delivered
   - `/pay/success` shows a verified payment state
   - webhook delivery is marked successful in Paystack
9. Export invoices from `/admin/invoices` and confirm CSV data is correct.
10. Verify `/admin` remains password protected and repeated bad logins are rate limited.
11. Reconfirm PDF download, invoice email sending, and webhook signature validation in production.
