## Future Logix

Production-ready Next.js 14 foundation for the Future Logix website.

## Stack

- Next.js 14 with App Router and TypeScript
- Tailwind CSS 3
- shadcn/ui baseline with neutral palette
- AWS SES + DynamoDB newsletter workflow

## Project Structure

```text
app/
components/
  sections/
  shared/
  ui/
lib/
public/images/
types/
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run perf:budget -- path/to/lighthouse-report.json
```

## Notes

- Configured for Next.js SSR on Amplify so API routes can run for newsletter and monitoring workflows.
- `next/image` remains `unoptimized: true` to keep image delivery simple on Amplify.
- Security and cache headers for Amplify are defined in `customHttp.yml`.

## Production

Environment variables supported in Amplify:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=
NEXT_PUBLIC_WEB_VITALS_ENDPOINT=
NEXT_PUBLIC_ERROR_REPORTING_ENDPOINT=
AWS_REGION=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
NEWSLETTER_TABLE_NAME=NewsletterSubscriptions
NEWSLETTER_FROM_EMAIL=admin@futurelogix.ng
CONTACT_TABLE_NAME=ContactSubmissions
CONTACT_FROM_EMAIL=admin@futurelogix.ng
CONTACT_ADMIN_EMAIL=admin@futurelogix.ng
SITE_URL=https://futurelogix.ng
SES_CONFIGURATION_SET_NAME=future-logix-newsletter
NEWSLETTER_ADMIN_PASSWORD=
```

Monitoring behavior:

- Analytics loads only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` or `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` is set.
- Core Web Vitals are beaconed only when `NEXT_PUBLIC_WEB_VITALS_ENDPOINT` is set.
- Client runtime errors are reported only when `NEXT_PUBLIC_ERROR_REPORTING_ENDPOINT` is set.
- Newsletter API routes require AWS credentials with SES and DynamoDB access in Amplify.
- Prefer attaching IAM permissions to the Amplify runtime role instead of long-lived static AWS keys when possible.

Deployment flow:

1. Run `npm run lint`
2. Run `npm run build`
3. Commit and push to `main`
4. Confirm the Amplify build succeeds for app `d15m5j87kx1cqj`

Rollback:

1. Revert the offending commit with `git revert <commit>`
2. Push the revert to `main`
3. Wait for Amplify to publish the rollback

Performance budget:

- Budgets are defined in [performance-budget.json](/Users/akabo/Documents/future-logix/performance-budget.json)
- Validate a Lighthouse JSON report with `npm run perf:budget -- path/to/report.json`
- Current target thresholds align with mobile-focused Core Web Vitals goals for low-bandwidth markets

## Search Engine Optimization

- Site verified in Google Search Console via DNS domain verification
- Sitemap URL: `https://futurelogix.ng/sitemap.xml`
