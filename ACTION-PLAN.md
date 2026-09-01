# Future Logix SEO & GEO Action Plan

## Critical

### 1. Keep `futurelogix.ng` as the canonical property

**Evidence:** The active public site is `https://futurelogix.ng`. The former `.com` domain is no longer under the business's control.

**Decision:** No `.com` or DNS work is required. Continue using `.ng` consistently in canonicals, sitemap, robots, `llms.txt`, Search Console, social profiles, directories, proposals, and marketing links. The existing `www.futurelogix.ng` handling should remain enabled.

**Success metric:** All channels controlled by Future Logix point to `https://futurelogix.ng`, and Google Search Console reports the `.ng` property as the primary site.

### 2. Repair the production build dependency failure

The local production build cannot resolve the AWS S3 SDK packages used by the admin insight routes. Add the required dependencies, confirm the lockfile, run a clean production build, and deploy only after the public routes and admin routes both pass.

## High priority: first two weeks

### 3. Make the route inventory authoritative

- Add the linked older insight route to the sitemap if it is still strategically useful; otherwise redirect it to a relevant current article.
- Crawl all internal links from all public pages and confirm 200/301/404 status.
- Generate sitemap and `llms.txt` from the same content inventory.
- Replace dynamic sitemap `lastModified: now` with real dates.
- Decide whether privacy, terms, and data-deletion pages should be `noindex, follow`.

### 4. Add measurement tied to revenue

Track:

- Organic landing page and query.
- CTA click by page and CTA label.
- Form start, validation error, and successful submission.
- Phone, email, and WhatsApp clicks.
- Qualified lead, proposal, win/loss, and revenue source.

Create a monthly dashboard for impressions, clicks, CTR, average position, organic sessions, engaged sessions, leads, qualified leads, and conversion rate by landing page.

### 5. Add proof to the conversion path

Create at least three evidence assets:

- SchoolsRep: school problem, workflow, rollout, adoption, and result.
- AI automation: manual process, automation design, time/error improvement.
- AWS/custom software: architecture challenge, implementation scope, reliability/cost/result.

Use real names/logos only with permission. Otherwise describe the organization anonymously but provide enough context to be credible.

## High priority: first 30 days

### 6. Sharpen page-to-query mapping

| Page | Primary intent to own | Supporting topics |
|---|---|---|
| Homepage | Technology company for practical digital systems in Nigeria/Africa | AI automation, custom software, AWS, SchoolsRep |
| `/ai-automation` | AI automation services Nigeria | workflow automation, WhatsApp/process automation, document processing |
| `/web-application-development` | Custom web application development Nigeria | internal tools, portals, business software, integrations |
| `/aws-architecture` | AWS consulting/architecture Nigeria | migration, security, serverless, cost optimization |
| `/business-modernization` | Business process automation Nigeria | legacy systems, operations modernization, digital transformation |
| `/schoolsrep` | School management software Nigeria | attendance, fees, results, parent communication, records |
| `/industries` | Technology solutions by industry Nigeria | education, SMEs, professional services, service operations |

Give each page a distinct title, H1, answer-first introduction, internal links, proof, FAQ content, CTA, and related insight links.

### 7. Rebuild the main service hub

Expand `/services` with a comparison table covering ideal customer, problem, deliverables, timeline, starting price, and next step. Link every service to its detailed page and link every detailed page back to the relevant industry/use-case pages.

### 8. Rebuild industry pages as useful buyer pages

Replace generic industry descriptions with small, specific sections:

- Typical operational problems.
- What Future Logix would automate/build.
- Example workflow.
- Relevant product/service.
- Expected implementation range.
- Proof or limitation.
- CTA.

Avoid mass-producing near-identical location or industry pages.

## Medium priority: days 30–60

### 9. Improve entity and structured data consistency

- Use one canonical Organization node across pages.
- Add truthful `sameAs` links for LinkedIn and other active profiles.
- Add `ContactPage`, `ProfilePage`, `Service`, `Product`/`SoftwareApplication`, and `BreadcrumbList` where appropriate.
- Add author profile markup for Akabom Kadana.
- Add `og:image` to every shareable page.

### 10. Build GEO-ready answer blocks

For each service/product page, answer five buyer questions in 40–80 words each. Include exact, citable statements about who it is for, what it includes, time, starting price, geography, and what happens after contact. Cite external standards or source material where claims depend on them.

### 11. Publish topic clusters

Start with these clusters:

- Nigerian SME workflow automation: symptoms, ROI, WhatsApp/spreadsheets, implementation readiness, automation cost.
- AWS for growing Nigerian businesses: architecture, security, cost control, migration, monitoring.
- Custom software decisions: buy vs build, internal tools, integrations, scope, maintenance.
- School operations software: attendance, fees, results, parent communication, low-connectivity workflows.

Every article should link to one commercial page, one related article, and one proof/contact path.

## Low priority

- Optimize founder and dashboard images to WebP/AVIF.
- Consider a branded 404 page with useful routes and a contact CTA.
- Maintain a quarterly content and structured-data freshness review.

## KPI targets for the next 90 days

Set baselines first, then target:

- 100% of public commercial URLs returning 200 and appearing in the intended sitemap.
- 0 domain/profile links to dead or conflicting domains.
- 100% of priority pages with unique title, description, canonical, OG image, and one clear CTA.
- At least three published proof assets.
- Measurable organic lead attribution for every form submission and call/email CTA.
- Growth in qualified organic leads, not just sessions.
