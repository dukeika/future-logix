# Future Logix SEO & GEO Audit

**Audited:** 1 September 2026  
**Primary URL supplied:** `https://futurelogix.ng`  
**Canonical property audited:** `https://futurelogix.ng`  
**Scope:** Public crawl, sitemap/robots inspection, server-rendered HTML, metadata, structured data, internal linking, images, conversion paths, visible UX, local source review, and AI-search readiness.

## Executive summary

### Overall SEO health: 72/100 (provisional)

The score is provisional because Google Search Console, GA4, CrUX, backlink data, and reliable PageSpeed results were not available in this audit environment. The site has a good technical base and unusually thoughtful AI-crawler access, but its growth is currently constrained by domain confusion, limited proof/authority, shallow commercial hubs, and a homepage that asks several different buyer types to self-sort.

### The five highest-impact findings

1. **The former `.com` domain is unavailable to the business.** It is outside the current implementation scope. The site is correctly configured around `.ng`; focus acquisition, profiles, Search Console, and links on the `.ng` domain.
2. **The sitemap omits at least one publicly linked insight page.** The article “What if your customer service never slept? …” is linked from another article and returns 200, but is not in `sitemap.xml`. This weakens discovery and creates an inconsistent content inventory.
3. **Commercial pages are not yet deep enough for competitive non-brand searches.** `/services`, `/products`, and `/industries` are approximately 283–345 words of visible copy. The four dedicated service pages are stronger at roughly 650–665 words, but still need proof, delivery detail, outcomes, integrations, and objections to compete for high-intent queries.
4. **Authority and trust evidence are light.** There are no visible client case studies, quantified outcomes, named testimonials, certifications, detailed delivery examples, or third-party proof on the core conversion path. This is the largest combined SEO, GEO, and conversion gap.
5. **The site is broad for a small brand.** It speaks to schools, SMEs, professional services, service-led organizations, startups, AI, web apps, AWS, modernization, and a flagship product. The positioning is clear at a brand level, but search intent and landing-page intent are not yet segmented enough.

### Five quick wins

- Keep `.ng` as the only canonical domain and update LinkedIn and every directory/profile to point to it.
- Add the orphaned insight to the sitemap, then audit all related-article links and dates.
- Add unique social preview images to service, product, and article pages; the live HTML exposes Twitter images inconsistently and does not expose `og:image` on key pages.
- Replace vague service-page sections with concise answer-first blocks: who it is for, problem solved, deliverables, process, timeline, starting price, proof, FAQs, and CTA.
- Add conversion tracking for CTA clicks, phone clicks, email clicks, contact-form starts, submissions, and qualified lead outcomes.

## Technical SEO

### Crawlability and indexation

**Strengths**

- `robots.txt` exists, allows public content, disallows `/admin`, `/api`, and `/pay`, and references the sitemap.
- AI/search crawlers including Googlebot, GPTBot, ChatGPT-User, OAI-SearchBot, Claude, Perplexity, and CCBot are not blocked from public pages.
- `sitemap.xml` is valid-looking and contains the main commercial, product, company, and insight routes.
- Public pages return 200; a nonexistent path returns 404.
- The pages are server-rendered in the initial HTML, including titles, canonical tags, headings, body copy, and JSON-LD. This is a strong foundation for Google and AI crawlers.
- Canonicals are consistently absolute and point to `futurelogix.ng`.

**Issues**

- The former `.com` root returns 404, but the business no longer has access to that domain. This is an external limitation, not a blocker for the `.ng` property. Do not spend implementation time on it unless ownership/access changes.
- The sitemap has 20 URLs, but at least one internally linked 200 page is missing: `/insights/what-if-your-customer-service-never-slept-feature-ai-powered-conversational-assistant-amazon-lex-aws`.
- Legal/data-deletion pages are indexable and included in the sitemap. They are not harmful, but they use crawl/indexation budget that would be better spent on commercial and educational content. Consider `noindex, follow` and remove them from the XML sitemap if they do not attract search demand.
- The sitemap code uses `new Date()` for every route rather than stable `dateModified` values. This can imply that every page changed on every regeneration. Use real content modification dates.
- There is no visible evidence in this audit of Google Search Console URL inspection, indexed URL counts, GA4 organic landing pages, or backlink coverage. These need an authenticated follow-up.

### Security and delivery

The live response uses HTTPS, HSTS, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, a restrictive referrer policy, Permissions Policy, and a CSP. This is strong. The site is served through CloudFront and sends cache headers.

One deployment issue was found in the local project: a production build fails because `@aws-sdk/client-s3` and `@aws-sdk/s3-request-presigner` cannot be resolved. The public site is live, so this is not currently an indexation outage, but it should be fixed before the next deployment.

### Mobile and JavaScript

The site exposes a viewport tag, responsive layout, accessible mobile-menu controls, skip link, server-rendered content, and usable visible CTAs. The initial visual check showed a polished desktop layout. Re-check mobile width, cookie-banner overlap, form completion, and tap target spacing on real devices before the next release.

### Performance

The PageSpeed API request was rate-limited, so no trustworthy LCP/INP/CLS values are reported. The implementation has good signals: font preloads, image dimensions for the logo, lazy loading for below-fold images, CloudFront delivery, and cache headers. The largest local assets are a 304 KB founder photo and a 243 KB dashboard PNG; convert to WebP/AVIF where practical and confirm the dashboard remains crisp.

## On-page SEO and content

### Metadata

Titles and descriptions are present across the public sitemap. Most are descriptive and aligned with the business. The dedicated pages use useful commercial modifiers such as Nigeria, AWS, custom web application development, AI automation, and school operations.

Improvements:

- Make each commercial page target one primary search intent and a small set of close variants. Avoid using the broad phrase “African organizations” as the only framing when a buyer is searching for a specific service.
- Keep the brand/domain wording consistent. External search results currently associate the brand with other domains, including `.tech`, while the live site is `.ng`.
- Add `og:image` and page-specific social cards to every service, product, and insight page. Share previews influence referral CTR and link acquisition even though they are not direct ranking factors.
- Remove reliance on the global `keywords` metadata; it has negligible modern search value. Use that effort for body coverage, internal links, proof, and structured data.

### Content depth and page intent

Approximate visible word counts from the public crawl:

| Page group | Approx. words | Assessment |
|---|---:|---|
| Homepage | 1,191 | Strong breadth; needs clearer segment paths and proof |
| Products | 344 | Thin for product portfolio/search hub |
| Services | 283 | Thin as a service hub |
| Industries | 345 | Thin; needs real industry-specific use cases |
| Contact | 216 | Appropriate for a contact page |
| Dedicated service/product pages | 653–665 | Good base; needs evidence and deeper intent coverage |
| Insight articles | 959–1,230 observed | Useful base; strongest articles should reach full decision-support depth |

Do not add generic words merely to hit a target. Expand pages with useful material: buyer symptoms, scope, deliverables, integrations, process, timelines, pricing boundaries, constraints, case examples, security, support, and measurable outcomes.

### E-E-A-T and GEO content signals

- **Experience:** Founder bio and practical operating language are positive. Add first-hand delivery stories, screenshots, implementation notes, and before/after metrics.
- **Expertise:** The service topics are credible, but certifications, architecture depth, named tools, delivery standards, and authored technical guidance are not prominent enough.
- **Authority:** External authority is limited in the visible site. Build relevant mentions, partnerships, client references, community participation, and links to original research.
- **Trust:** Contact details, Lagos location, privacy policy, terms, pricing anchors, and implementation timelines are good. Add testimonials, client logos only with permission, security/hosting detail, response expectations, and a clear “what happens after you contact us” promise.

## Structured data

The live site exposes JSON-LD for `Organization`/`LocalBusiness`, `WebSite`, `Service` or `Product`, `FAQPage`, and `BlogPosting`/`BreadcrumbList` on articles.

Recommended changes:

- Add `telephone`, `email`, `logo`, `sameAs`, and a more complete verified business address consistently to the primary Organization node. Only add a street address, opening hours, coordinates, or service-area claims if they are true and public.
- Use `WebPage`, `ContactPage`, and `ProfilePage` where appropriate, linked to the same Organization entity.
- Add `SoftwareApplication` or `WebApplication` for SchoolsRep if the product details support it, with truthful operating system, URL, offers, and feature information.
- Add `Service` fields for `serviceType`, audience, area served, provider, offers, and delivery region where truthful.
- FAQ markup is present on service/product pages. It may help machine parsing, but FAQ rich results are heavily restricted; treat it as secondary and prioritize visible answer quality.
- Keep all critical JSON-LD in server-rendered HTML, which the site currently does.

## Images

The tested homepage images had alt text and dimensions. The logo is prioritized; below-fold screenshots and founder imagery are lazy-loaded. This is generally good.

Priorities:

- Convert the 304 KB founder JPEG and 243 KB dashboard PNG to responsive WebP/AVIF variants while retaining fallbacks.
- Add explicit image metadata and social preview variants for page sharing.
- Use descriptive, stable filenames for new case-study images and screenshots.
- Add real client/workflow imagery as proof, not decorative stock photography.

## GEO / AI-search readiness

### Strengths

- `llms.txt` exists and gives AI systems a compact company, product, services, insights, and contact map.
- Robots rules allow the major AI search/user agents to access public pages.
- The site has strong answer-like headings, clear service/product names, prices, time ranges, location, and a founder identity.
- Server-rendered HTML, canonical URLs, structured data, and internal links make the site relatively easy to extract.

### Gaps

- The most citable claims are mostly positioning statements, not independently verifiable outcomes. Add original data, quantified case studies, implementation benchmarks, and named sources.
- `llms.txt` links to `/business-modernization`, but the public sitemap output observed did include it; keep this file generated from the same route inventory so it cannot drift again.
- Add short answer blocks to service pages, e.g. “What is AI automation for a Nigerian business?”, “How long does implementation take?”, “What does AWS architecture include?”, and “When should a school use SchoolsRep?”
- Cite authoritative external sources for standards, AWS guidance, data protection, and sector claims. AI systems reward attribution and clear source boundaries.
- Establish a consistent entity footprint across the website, LinkedIn, Google Business Profile if eligible, partner pages, founder profiles, and reputable Nigerian technology/business directories. Use the same company name, domain, Lagos location, phone, and description.
- Publish an author page/profile for Akabom Kadana and connect insight authors to it with `Person`/`ProfilePage` markup.

## Conversion and search-experience review

The homepage is visually strong, has clear navigation, price anchors, and multiple CTAs. The biggest conversion issue is not a missing button; it is decision friction. A visitor must decide whether Future Logix is for a school, SME, service firm, startup, or cloud buyer before they know the right next step.

Recommended homepage structure:

1. Clear one-sentence positioning with primary audience and location.
2. Three visible paths: “I run a school,” “I need automation/custom software,” and “I need AWS/cloud help.”
3. Proof strip with real outcomes, client references, technologies/certifications, and delivery statistics.
4. Service cards linked to detailed pages with “best for,” starting price, time, deliverables, and a qualification CTA.
5. One short case study or implementation example above the long-form sections.
6. A low-friction CTA such as “Book a 20-minute systems review” plus phone/WhatsApp where actively monitored.
7. Contact form confirmation with response time, next step, and calendar/WhatsApp option.

Track the funnel from organic landing page to CTA click, form start, form completion, call/email click, qualified lead, proposal, and client. Without these events, SEO traffic cannot be optimized for revenue.

## Priority scorecard

| Priority | Action | Impact | Effort |
|---|---|---:|---:|
| External limitation | Former `.com` domain is unavailable; keep all owned profiles and links on `.ng` | Medium | Not actionable now |
| Critical | Fix the next-build AWS SDK dependency failure | High | Low |
| High | Reconcile sitemap, internal links, and all live insight routes | High | Low |
| High | Add proof: 3 case studies, testimonials, outcomes, implementation examples | Very high | Medium–high |
| High | Expand and sharpen service/product/industry pages around search intent | High | Medium |
| High | Instrument organic-to-lead conversion events and CRM outcome tracking | Very high | Medium |
| High | Build consistent entity/local presence and verify Google Search Console/GA4 | High | Medium |
| Medium | Add page-specific OG images, richer Organization/Product/Service schema | Medium | Low–medium |
| Medium | Build topic clusters around Nigerian business automation, AWS, custom software, and school operations | High | Medium–high |
| Medium | Optimize images and validate mobile form/cookie experience | Medium | Low–medium |
| Low | Consider noindexing legal/data-deletion pages | Low | Low |

## Recommended 90-day growth plan

### Days 1–14: protect demand and measure it

- Resolve the `.com`/`.ng` domain decision and redirects.
- Fix the build dependency issue.
- Submit/validate the sitemap in Search Console; inspect homepage, service pages, product page, and all insight URLs.
- Install/verify analytics events and lead-source capture.
- Reconcile sitemap, `llms.txt`, navigation, and related-content links.
- Add OG images and complete organization/entity details.

### Days 15–45: improve commercial relevance and conversion

- Rewrite `/services`, `/industries`, `/products`, and each service page around one primary intent.
- Create audience-specific landing pages only where there is a real offer and enough unique evidence: Nigerian private schools, Nigerian SMEs, professional services firms, and AWS/cloud buyers in Nigeria.
- Publish three case studies with problem, context, implementation, timeline, stack, and measurable result.
- Add a concise delivery process, qualification criteria, and clear next step to each commercial page.

### Days 46–90: build authority and AI visibility

- Publish 8–12 decision-support articles in clusters rather than isolated posts.
- Earn relevant links and mentions through AWS/community participation, Nigerian business and technology publications, partners, universities, and client references.
- Publish founder-authored technical guidance and original observations from implementations.
- Review AI citations/mentions monthly for prompts such as “best AI automation company in Nigeria,” “AWS consulting Nigeria,” “custom software development Lagos,” and “school management software Nigeria.”
- Re-test performance, indexation, rankings, leads, and qualified pipeline against the baseline.

## Limitations

- No authenticated Google Search Console, GA4, CrUX, backlink, GBP, or CRM data was available.
- PageSpeed API quota was exhausted during testing, so CWV values are not reported.
- Recommendations about rankings and keyword opportunity are strategic until validated with live query/competitor data.
