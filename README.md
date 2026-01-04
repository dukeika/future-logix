## Future Logix

Marketing site and lead intake platform for Future Logix. The site includes marketing pages, blog, contact + consultation forms, and an admin view for reviewing submissions.

Production: https://futurelogix.ng

## Tech Stack

- Next.js 15 (App Router), React 19
- Tailwind CSS 4
- PostgreSQL for submissions
- AWS SES for email notifications

## Local Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment Variables

Copy `.env.production.template` to `.env.local` and fill in values as needed.

Required for submissions:

- `DATABASE_URL` - Postgres connection string.
- `ADMIN_PASSWORD` - shared admin password used for `/admin` login and API access.

Email notifications (optional):

- `NOTIFY_FROM` - SES verified from address.
- `NOTIFY_TO` - destination address (defaults to `NOTIFY_FROM`).
- `NOTIFY_ARCHIVE_TO` - optional BCC archive address.
- `AWS_SES_REGION` (or `AWS_REGION`, `AWS_DEFAULT_REGION`) - SES region (defaults to `us-east-1`).
- Standard AWS credentials (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and optional `AWS_SESSION_TOKEN`) must be available in the environment.

Site metadata:

- `NEXT_PUBLIC_SITE_URL` - base URL for metadata, robots, and sitemap.

## Data Storage

Form submissions are stored in Postgres using the tables:

- `contact_messages`
- `consultations`

Tables and indexes are created automatically on first write. If `DATABASE_URL` is missing, the API will warn and database writes will fail.

Note: `data/submissions.json` and the in-memory store are legacy helpers and are not wired into the current API routes.

## Admin Access

- Visit `/admin` to review contact and consultation submissions.
- `/admin/login` sets an `admin_session` cookie based on `ADMIN_PASSWORD`.
- Admin API routes are protected by the same cookie.

## Scripts

```bash
npm run dev     # start dev server
npm run build   # production build
npm run start   # start production server
npm run lint    # lint
```
