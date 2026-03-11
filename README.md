## Future Logix

Production-ready Next.js 14 foundation for the Future Logix website.

## Stack

- Next.js 14 with App Router and TypeScript
- Tailwind CSS 3
- shadcn/ui baseline with neutral palette
- Framer Motion for lightweight motion

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

- Configured for static export with `output: "export"`.
- `next/image` is set to `unoptimized: true` because static export disables the default Next.js image optimizer.
- Security and cache headers for Amplify are defined in `customHttp.yml`, which is the effective path for static export deployments.

## Production

Environment variables supported in Amplify:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=
NEXT_PUBLIC_WEB_VITALS_ENDPOINT=
NEXT_PUBLIC_ERROR_REPORTING_ENDPOINT=
```

Monitoring behavior:

- Analytics loads only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` or `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` is set.
- Core Web Vitals are beaconed only when `NEXT_PUBLIC_WEB_VITALS_ENDPOINT` is set.
- Client runtime errors are reported only when `NEXT_PUBLIC_ERROR_REPORTING_ENDPOINT` is set.

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
