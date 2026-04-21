# architecture

Short tour of the repo. Updated when the shape changes.

## Top-level

```
portfolio-resume/
├── app/                    # next app router
├── components/             # ui primitives and sections
├── content/projects/       # mdx case study files (one per project)
├── lib/                    # data + infra (project loader)
├── public/                 # static assets + project images
├── ARCHITECTURE.md         # you are here
└── README.md               # stack, dev, deploy, content authoring
```

No `src/` directory, no `pages/` directory. All routes live under `app/`.

## `app/`

```
app/
├── layout.tsx              # root layout, fonts, metadata, <Analytics>
├── globals.css             # tailwind @theme, base styles, motion primitives
├── page.tsx                # home (assembles section components)
├── not-found.tsx           # top-level 404
├── robots.ts               # dynamic robots.txt
├── sitemap.ts              # dynamic sitemap.xml
├── api/og/route.tsx        # dynamic OG image (edge runtime, satori)
└── work/
    └── [slug]/
        ├── page.tsx        # case study — loads MDX for slug, renders
        └── not-found.tsx   # slug-specific 404
```

**Why a Route Handler for OG instead of `opengraph-image.tsx`?** The
file-convention handler in this Next version throws a satori wrapper
error on any children. The Route Handler works; metadata in
`app/layout.tsx` points at `/api/og`.

**Why `dynamicParams = false` on `/work/[slug]`?** We statically generate
every known slug and return 404 for anything else, instead of trying to
render unknown slugs at request time.

## `components/`

Hand-rolled. No component library — we build the ~10 primitives we
actually need.

```
components/
├── Topbar.tsx              # sticky header: status dot, typed command, nav
├── CommandBar.tsx          # client: typing animation (reduced-motion safe)
├── Hero.tsx                # home: label, h1, tagline, meta row
├── SelectedWork.tsx        # home: server component, loads featured projects
├── ProjectRow.tsx          # home list item (entire row is an <a>)
├── About.tsx               # home: background + stack + terminal block
├── Contact.tsx             # home: contact links — EDIT URLS HERE
├── Footer.tsx              # copyright + UtcClock
├── UtcClock.tsx            # client: live UTC clock, SSR-safe fallback
├── StatusDot.tsx            # pulsing accent dot
├── StatusTag.tsx            # active | deployed | in-progress pill
├── SectionHead.tsx          # "// 0N [title] ------ [ count ]"
├── Container.tsx            # max-w 1100 + responsive padding
├── Analytics.tsx            # inert unless NEXT_PUBLIC_ANALYTICS is set
├── CaseStudyLayout.tsx      # wraps MDX body in case-study header + meta
└── mdx.tsx                  # MDX tag→component map (h2, p, a, code, ...)
```

Server components by default. Only `CommandBar`, `UtcClock` use
`"use client"` — that's the entire client JS budget for the home route.

## `content/projects/`

One `.mdx` file per project. Filename = slug. Loaded by
`lib/projects.ts`, validated with `zod` at build time.

- `slug` must match the filename (checked explicitly).
- `order` controls list position on the home "selected work" section.
- `featured: true` is the gate for the home list.
- `stack`, `links`, `status` drive the case-study header chrome.

To add a project: see `README.md` "Adding a new project".

## `lib/`

```
lib/
└── projects.ts             # zod schema + async loaders
```

Three exports matter:

- `listProjects()` — all projects, sorted by `order`.
- `listFeaturedProjects()` — filtered to `featured: true`. Used by the home.
- `getProject(slug)` — one project + MDX body. Used by `/work/[slug]`.

The schema is the single source of truth for project shape. If you need
a new frontmatter field, add it to the zod schema first; you'll get a
useful error for every existing project that's missing it.

## Styling — Tailwind v4 CSS-first theme

All design tokens live in `app/globals.css` inside `@theme { ... }`.
Tailwind auto-generates utilities from them, so:

- `--color-bg: #0a0e0a` → `bg-bg`, `text-bg`, `border-bg`, ...
- `--color-ink-dim: #7a8a7a` → `text-ink-dim`, ...
- `--color-accent: #7fff6a` → `text-accent`, `bg-accent`, `border-accent`, ...
- `--font-mono`, `--font-serif` → `font-mono`, `font-serif`

**To retune the palette:** edit only the `@theme` block. Nothing else
hardcodes colors (intentional).

**Motion primitives** (`reveal`, `pulse`, `cursor-blink`) live in the
same file, gated behind `@media (prefers-reduced-motion: no-preference)`.
Not defined for reduced-motion users — so `className="pulse"` is a no-op
when reduced motion is on.

**Scanline + radial glow** are in `::before` / `::after` on `body`, gated
behind `@media (min-width: 768px)` for mobile perf.

## Where to edit what

| I want to...                           | Go here                                        |
| -------------------------------------- | ---------------------------------------------- |
| Change the hero copy                   | `components/Hero.tsx`                          |
| Change contact links                   | `components/Contact.tsx` (`LINKS` array)       |
| Change the about / stack list          | `components/About.tsx`                         |
| Add/edit a project                     | `content/projects/<slug>.mdx`                  |
| Change the palette                     | `app/globals.css` → `@theme` block             |
| Change site title / description        | `app/layout.tsx` → `metadata`                  |
| Swap the typed commands                | `components/CommandBar.tsx` → `COMMANDS`       |
| Enable analytics                       | `.env` → `NEXT_PUBLIC_ANALYTICS`               |
| Regenerate the OG image                | `app/api/og/route.tsx`                         |
| Add a new MDX tag                      | `components/mdx.tsx`                           |
| Tighten the project frontmatter schema | `lib/projects.ts` → `projectFrontmatterSchema` |

## Build-time gotchas

- **YAML frontmatter:** a bare number for `period` (e.g. `period: 2025`)
  parses as a number, which zod rejects. Always quote numeric-looking
  strings: `period: "2025"`.
- **JSX comments:** `// ...` written as text inside an element will be
  treated as a JS comment by the linter. Wrap decorative comment-looking
  text in `{"// text"}`.
- **Satori in OG:** every `<div>` with more than one child must have
  `display: "flex"` or `"none"` on its style prop. This is a satori
  rule, not a React rule.
