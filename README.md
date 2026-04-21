# nikko-portfolio

Personal portfolio site. Dark terminal aesthetic, MDX-backed case studies,
self-hosted fonts, zero-CDN at runtime.

## Stack

- **Framework:** Next.js 15 (App Router) + React 19
- **Language:** TypeScript (strict, `noUncheckedIndexedAccess`)
- **Styling:** Tailwind CSS v4 (CSS-first theme tokens in `app/globals.css`)
- **Content:** MDX via `next-mdx-remote/rsc`, frontmatter validated with `zod`
- **Fonts:** Fraunces + JetBrains Mono, self-hosted via `next/font/google`
- **Lint/format:** ESLint (`next/core-web-vitals`, `next/typescript`) + Prettier

## Local dev

```bash
npm install
npm run dev
# -> http://localhost:3000
```

Other scripts:

```bash
npm run build       # production build
npm run start       # run built app
npm run lint        # eslint
npm run typecheck   # tsc --noEmit
npm run format      # prettier --write .
```

## Adding a new project

1. Drop a file into `content/projects/<slug>.mdx`. The slug must match the
   filename and be kebab-case.
2. Fill in the frontmatter (schema is enforced at build time by
   `lib/projects.ts` — you'll get a useful error if anything's missing or
   the wrong type):

   ```yaml
   ---
   slug: new-project
   title: New Project
   tagline: One-line summary shown on the home list.
   status: active # active | deployed | in-progress
   stack:
     - Python
     - PostgreSQL
   role: Solo engineer
   period: "2026 — present"
   order: 4
   featured: true # show on home "selected work"
   summary: >
     Longer summary used for meta description and social cards.
   links:
     repo: https://github.com/you/repo
     live: https://example.com
   ---
   ```

3. Write the case study body below the frontmatter. Supported components
   are styled in `components/mdx.tsx` (h2, h3, p, ul, ol, strong, code,
   pre, blockquote, a, hr).
4. Drop images into `public/images/projects/<slug>/`. Reference from MDX
   as `/images/projects/<slug>/screen-1.png`.

The new route `/work/<slug>` is generated at build time via
`generateStaticParams`.

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel: **Add New Project** → import the repo.
3. Framework preset is detected automatically (Next.js). No build config
   needed.
4. Set these env vars (see `.env.example`):
   - `NEXT_PUBLIC_SITE_URL` — your production URL (e.g. `https://nikko.dev`)
   - `NEXT_PUBLIC_ANALYTICS` — leave empty, or `"plausible"` / `"vercel"`
   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` — required if analytics=plausible
5. Deploy.

The OG image is generated per-request at `/api/og` (edge runtime). The
sitemap lives at `/sitemap.xml` and is referenced from `/robots.txt`.

## What's left for me to fill in

- [ ] Real email address in `components/Contact.tsx`
- [ ] Real GitHub, LinkedIn URLs in `components/Contact.tsx`
- [ ] Drop `resume.pdf` into `public/`
- [ ] Real project screenshots into `public/images/projects/<slug>/`
- [ ] Real project copy in the MDX body of each file in `content/projects/`
- [ ] Update `NEXT_PUBLIC_SITE_URL` to actual domain
- [ ] Decide on analytics and flip the env var
- [ ] Custom domain + DNS in Vercel

## Lighthouse

Targets: Performance ≥ 95, Accessibility = 100, Best Practices ≥ 95, SEO =
100 on desktop.

To verify locally:

```bash
npm run build && npm run start
# in another terminal:
npx lighthouse http://localhost:3000 --view --preset=desktop
```

Expect the home and a case study route to both hit the targets. The
heaviest frame is the hero (self-hosted fonts, FOIT-free via
`display: swap`). Client JS on the home is limited to the `CommandBar`
and `UtcClock` components.

## Accessibility

- All interactive elements are real `<a>` or `<button>` with visible
  focus rings tinted to `--color-accent`.
- Decorative motion (typing, cursor blink, pulse dot, scroll reveals) is
  gated behind `@media (prefers-reduced-motion: no-preference)`. Turn on
  Reduce Motion in OS settings to verify.
- Live UTC clock renders a SSR-safe fallback (`--:--:-- UTC`) and swaps
  on mount — no hydration mismatch.
- Heading hierarchy goes h1 → h2 → h3 → h4, with no skipped levels.

## License

Personal site. No license granted; don't copy the copy.
