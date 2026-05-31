<p align="center">
  <img src="public/logo-mark.svg" alt="AN/" width="56"><br><br>
  <img src="public/logo.svg" alt="Agent-Native Engineering" width="300">
</p>

<p align="center">
  Open knowledge for building, operating, and engineering with AI agents in production.<br>
  <a href="https://agentnativeengineering.com"><strong>agentnativeengineering.com</strong></a>
</p>

---

Open engineering knowledge for building, operating, and engineering **with** AI agents in
production: a versioned, sourced [field guide](https://agentnativeengineering.com/guide/) across
eleven engineering domains (scope, durable execution, reliability, security, access control,
observability, evals, and more), plus notes and reference architectures built from open-source
systems. Notes are drafted by an agent and edited by a human.

**Live:** https://agentnativeengineering.com · **Stack:** [Astro](https://astro.build) static →
GitHub Pages.

## Logos

| | File | Use |
|---|---|---|
| <img src="public/logo.svg" alt="agentnativeengineering/" width="220"> | [`public/logo.svg`](public/logo.svg) | Long wordmark — headers, README, social |
| <img src="public/logo-mark.svg" alt="AN/" width="44"> | [`public/logo-mark.svg`](public/logo-mark.svg) | Short mark — favicon, avatar, compact spots |

Set in IBM Plex Mono · ink `#1a1a18` + faint `#938a7b` + oxblood `/` `#9a2d1f` on warm paper `#fbfaf7`.

## Quick start

```bash
npm install
npm run dev        # local dev server at http://localhost:4321
npm run validate   # content lint → astro check → production build (the CI gate)
```

## Writing a note

```bash
npm run new -- "Your title here" "tag1,tag2"
# edit the created file in src/content/notes/, set draft:false when ready
npm run validate
```

Notes live in `src/content/notes/` as `YYYY-MM-DD-slug.md`. Frontmatter is schema-validated
(`src/content.config.ts`). See [`AGENTS.md`](./AGENTS.md) for the full authoring contract.

## How it's published

`main` is auto-deployed to GitHub Pages by `.github/workflows/deploy.yml`. Every PR must pass the
`Validate` workflow (`.github/workflows/validate.yml`) first — content lint, type/schema check,
and a full build. See [`docs/daily-pipeline.md`](./docs/daily-pipeline.md) for the agent → human →
deploy flow.

## Validation layers (the site can't break)

| Layer | What runs | When |
|---|---|---|
| `npm run lint:content` | frontmatter / structure checks | pre-commit, PR, manual |
| `npm run check` | `astro check` — types + content schema | pre-commit, PR, manual |
| `npm run build` | production build | pre-commit, PR, deploy |
| `.githooks/pre-commit` | all of the above on staged site changes | every commit |
| `Validate` CI | all of the above | every PR + push |

Install the local hook once: `npm run hooks`.

## Layout

```
src/
  content/notes/      field notes (the daily stream)
  content.config.ts   frontmatter schema
  layouts/Base.astro  shell: header, footer, meta
  pages/
    index.astro       the note stream (timeline by year)
    notes/[...slug].astro
    about.astro
    rss.xml.js        RSS feed
  styles/global.css   the whole design system
public/
  CNAME               agentnativeengineering.com
  favicon.svg
scripts/
  new-note.mjs        scaffold a note
  validate-content.mjs  fast frontmatter linter
```

## Custom domain

`public/CNAME` pins `agentnativeengineering.com`. DNS setup is documented in the project root
notes (one-time: apex `A`/`AAAA` records + `www` CNAME to `agentnativeengineering.github.io`).
