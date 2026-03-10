# Future Logix Foundation Setup

## What was set up

- Next.js 14 with TypeScript and the App Router
- Tailwind CSS 3 configured for the root `app/` directory
- shadcn/ui baseline with neutral base color via `components.json`
- Core utility stack: `clsx`, `tailwind-merge`, `lucide-react`, `framer-motion`
- Supporting shadcn packages: `class-variance-authority`, `@radix-ui/react-slot`, `tailwindcss-animate`

## Project structure

- `app/`
  - `layout.tsx`
  - `page.tsx`
  - `globals.css`
- `components/ui/`
- `components/sections/`
- `components/shared/`
- `lib/`
- `types/`
- `public/images/`

## Base configuration

- Static export enabled in `next.config.js`
- Static-safe image configuration applied
- Global design tokens added with placeholder brand colors:
  - Primary: `#0066CC`
  - Secondary: `#00AA66`
- Metadata and viewport configured for Future Logix Limited
- Mobile-first placeholder hero section created

## Status

The project foundation is ready for Phase 2: content architecture, brand styling, page sections, and deployment wiring.
