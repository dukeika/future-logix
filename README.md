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
```

## Notes

- Configured for static export with `output: "export"`.
- `next/image` is set to `unoptimized: true` because static export disables the default Next.js image optimizer.
