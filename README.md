# Lennox Luis Omaña — Portfolio

A fully static personal developer portfolio built as a "terminal meets HUD"
interface: animated landing page, glass panels with glowing borders, and
self-hosted fonts. No server, no database, no third-party runtime scripts.

## Stack

- **Nuxt 4** (Vue 3 + TypeScript), source directory `app/`
- **@nuxt/content v3** collections for project entries (`content/projects/`)
- Plain class-based CSS in `app/assets/css/app.css` (CSS variables, no Tailwind)
- Animation via CSS keyframes and small composables (`useReveal`, `useTypewriter`,
  `useCountUp`, `useTilt`)
- Self-hosted fonts via `@fontsource-variable` (JetBrains Mono + Inter)

## Requirements

- Node.js 22 (Cloudflare Pages uses `NODE_VERSION=22`)

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build (static)

```bash
npm run generate     # runs `nuxi generate`, outputs to dist/
npx serve dist       # preview the static build locally
```

The static output directory is `dist/` (configured in `nuxt.config.ts` via
`nitro.output.publicDir`).

## Deploy — Cloudflare Pages

Connect the GitHub repository to Cloudflare Pages and set:

| Setting | Value |
| --- | --- |
| Build command | `npm run generate` |
| Output directory | `dist` |
| Environment variable | `NODE_VERSION=22` |

No Nitro/Cloudflare preset is configured — this is a plain static site.

## Project structure

```
app/
  app.vue                     # global overlays, skip link, nav
  assets/css/app.css          # design tokens + all component styles
  components/                 # AppNav, HeroSection, TerminalCard, StatCounter,
                              # TimelineItem, ProjectFeature, ProjectCard,
                              # SkillGroup, ContactCard, AppFooter, Reveal, SectionLabel
  composables/                # useReveal, useTypewriter, useCountUp, useTilt
  data/portfolio.ts           # experience, skills, education, awards, contacts
  pages/index.vue             # the single landing page
content/
  projects/*.md               # featured projects (collection: `projects`)
content.config.ts             # collection + schema definitions
public/                       # favicon, robots.txt, og.png, images/
```

## Editing content

- Featured projects live in `content/projects/*.md`. Frontmatter is validated by
  the `projects` collection schema in `content.config.ts`.
- Everything else (bio, experience, skills, education, awards, contacts) is
  data in `app/data/portfolio.ts`.
- Profile photo: save the image as `public/images/hero.jpg` (`.webp`/`.jpg`/`.png`
  variants and `profile.*` are also auto-detected). Until a file exists an "LO"
  initials avatar is shown automatically.

## Motion & accessibility

- Animated canvas tech background (drifting nodes, links, data pulses), a slow
  HUD scan beam, and a one-time terminal "boot" intro on first visit.
- All animation respects `prefers-reduced-motion` (continuous motion is paused,
  reveals happen instantly, count-ups jump to their final value, the boot intro
  is skipped).
- Semantic landmarks, a skip link, visible focus states, keyboard-operable nav,
  AA-contrast colours and alt text are in place.

## Placeholders

Still to fill: the VAPETHRIFT tech stack (`content/projects/vapethrift.md`).
Contact cards whose value is still a placeholder are hidden from the production
build.
