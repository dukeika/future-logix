## Testing Report

Date: March 11, 2026

Environment:
- Local production build served at `http://127.0.0.1:3000`
- AWS-backed contact and newsletter APIs enabled against `eu-west-2`
- Browser checks executed with `puppeteer-core`
- Accessibility audit executed with `axe-core`

## Pages Tested

- `/`
- `/products`
- `/services`
- `/industries`
- `/insights`
- `/insights/modern-african-technology-company-positioning`
- `/insights/product-vs-custom-build-decision-guide`
- `/insights/workflow-automation-before-ready`
- `/about`
- `/contact`
- `/privacy`
- `/terms`
- `/not-a-real-page`

## Verified Passes

- All primary public routes above returned successful responses, except `/not-a-real-page`, which correctly returned `404`.
- All tested pages exposed a title and meta description.
- Homepage rendered hero, products, services, industries, insights, footer, newsletter form, and both header/footer logos.
- Homepage responsive checks passed at `320`, `375`, `414`, `768`, `1024`, `1440`, and `1920` widths with no horizontal overflow.
- `/products` contains ClassPoint content and links correctly to `https://classpoint.ng`.
- `/services` contains all 4 services and pricing blocks.
- `/industries` contains all 5 industries.
- `/insights` links correctly to all 3 article pages.
- All 3 seeded article pages load with full article content.
- `/about` contains:
  - `Akabom Kadana`
  - `2023`
  - `AWS Solutions Architect`
  - `AWS AI Certified`
  - `3 permanent staff`
  - `5 specialized consultants`
  - `admin@futurelogix.ng`
- `/contact` form validation works for:
  - required fields
  - invalid email format
  - short message
- Contact form API works end to end:
  - successful submission returned success message
  - DynamoDB record created in `ContactSubmissions`
  - honeypot submission returned success but created no DynamoDB record
  - rate limiting works as implemented: 2 accepted submissions, 3rd blocked for the same IP within 1 hour
- Newsletter API works end to end:
  - subscription returned success message
  - DynamoDB record created in `NewsletterSubscriptions`
  - confirmation endpoint redirected to success state
  - unsubscribe endpoint redirected to unsubscribed state
- Privacy and Terms pages load and show correct contact information.
- 404 page contains working links to `/`, `/products`, `/services`, and `/contact`.
- Accessibility audit passed on homepage with `0` axe violations.
- Metadata/assets verified:
  - favicon link present
  - `/favicon.ico` returns `200`
  - Open Graph image configured
  - Twitter image configured
  - `/og-image.png` returns `200`
  - `/twitter-image.png` returns `200`

## Performance Snapshot

Measured with the existing `perf:measure` script on the homepage:

- `TTFB`: `122.9ms`
- `FCP`: `2200ms`
- `LCP`: `2200ms`
- `CLS`: `0.0114`
- `Long-task proxy`: `189ms`

These are acceptable for a local scripted check, but this is not a Lighthouse score.

## Issues Found

1. 404 metadata is still generic.
   - `/not-a-real-page` correctly renders the 404 page, but the browser title falls back to the global site title instead of a dedicated 404 title.

2. Content placeholders still remain in Insights.
   - `app/insights/page.tsx`: `More articles coming soon`
   - `app/insights/[slug]/page.tsx`: fallback text `Full article content for this insight is coming soon.`

3. Expected section headings were not found verbatim in browser text on some pages.
   - Homepage browser text extraction did not surface `Why Future Logix` or `Next Step`, even though the sections render.
   - `/products` browser text extraction did not surface `Platform Expansion`.
   - `/services` browser text extraction did not surface `Impact in Progress`.
   This needs a quick visual/manual review to confirm whether the copy is missing or just not exposed as expected in extracted text.

4. Contact and newsletter email delivery was validated at the API/SES acceptance level, not at mailbox-inbox level.
   - The APIs completed successfully and DynamoDB records were created.
   - Actual inbox receipt for admin and subscriber messages was not directly verifiable from this CLI environment.

5. Lighthouse score was not produced.
   - The repo includes a performance measurement script, but no completed Lighthouse score was generated in this pass.

6. The contact form rate limiter differs from the checklist wording.
   - Current implemented behavior blocks the 3rd submission in 1 hour for the same IP.
   - The original feature request text said `3 submissions per IP per hour`, which would usually imply blocking the 4th.
   - The implementation matches the later explicit test expectation: `3rd submission should block`.

## Critical Path Status

- Site navigation: pass
- Content routes: pass
- Contact submission storage: pass
- Contact anti-spam controls: pass
- Newsletter subscribe/confirm/unsubscribe: pass
- Legal pages: pass
- Accessibility homepage baseline: pass
- Social/favicon metadata: pass

## Launch Readiness

Status: Conditionally ready

Reason:
- Core user journeys are functional.
- No blocking runtime or accessibility failures were found in the tested flows.
- Remaining issues are mostly metadata/content polish and one manual verification gap around inbox delivery.

Recommended before final sign-off:

1. Add dedicated metadata for the 404 page.
2. Remove or replace the remaining Insights placeholder text.
3. Manually verify inbox delivery for:
   - contact admin notification
   - contact submitter confirmation
   - newsletter confirmation email
   - newsletter welcome email
4. Run a formal Lighthouse audit if a score-based performance sign-off is required.
