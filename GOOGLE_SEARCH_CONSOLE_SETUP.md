## Google Search Console Setup

Site is live at `https://futurelogix.ng`.

Sitemap is available at `https://futurelogix.ng/sitemap.xml`.

### Step 1: Add Property in Google Search Console

1. Go to `https://search.google.com/search-console`
2. Click `Add Property`
3. Select `Domain` (recommended) or `URL prefix`
   - Domain: `futurelogix.ng` (covers all subdomains)
   - URL prefix: `https://futurelogix.ng`
4. If Domain: Add DNS TXT record (requires DNS access)
   - If URL prefix: Use HTML tag method (easier)

### Step 2: HTML Tag Verification Method (Easiest)

1. In GSC, select `HTML tag` verification method
2. Copy the meta tag content, for example:

```html
<meta name="google-site-verification" content="ABC123DEF456" />
```

3. Provide the content value (`ABC123DEF456`) to insert into `app/layout.tsx`

### Step 3: Update Metadata

- Add verification token to `app/layout.tsx` metadata
- Rebuild and redeploy

### Step 4: Submit Sitemap

1. In GSC, go to `Sitemaps` in left sidebar
2. Enter: `sitemap.xml`
3. Click `Submit`

### Step 5: Request Indexing (Optional but recommended)

1. In GSC, go to `URL Inspection`
2. Enter: `https://futurelogix.ng`
3. Click `Request Indexing`
4. Repeat for key pages:
   - `/products`
   - `/services`
   - `/contact`
