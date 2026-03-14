## Paystack Live Mode Checklist

1. Generate or confirm the live Paystack keys in the Paystack dashboard.
2. Update Amplify environment variables:
   - `PAYSTACK_SECRET_KEY`
   - `PAYSTACK_PUBLIC_KEY`
3. If `PAYSTACK_SERVER_KEY` is still present in Amplify from older releases, remove it after confirming `PAYSTACK_SECRET_KEY` is active.
4. Confirm the webhook URL in Paystack is:
   - `https://futurelogix.ng/api/webhooks/paystack`
5. Redeploy the production app after updating the environment variables.
6. Create a small live invoice and complete a low-value live payment.
7. Confirm all of the following:
   - invoice status changes to `paid`
   - client confirmation email is delivered
   - `/pay/success` shows a verified payment state
   - webhook delivery is marked successful in Paystack
8. Export invoices from `/admin/invoices` and confirm CSV data is correct.
9. Verify `/admin` remains password protected.
10. Reconfirm PDF download, invoice email sending, and webhook signature validation in production.
