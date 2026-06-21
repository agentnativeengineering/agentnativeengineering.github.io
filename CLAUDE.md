# CLAUDE.md — Agent Native Engineering design system

Instructions for any agent or person working on this site. **Follow this exactly.** The single
source of truth for visual tokens is `src/styles/global.css`; this file explains the intent so
changes stay coherent. Change a token in `global.css` → update this file.

---

## 0. What this site is

An open **field guide and daily brief on building, operating, and engineering with AI agents in
production**, presented as an **editorial / daily-newspaper** publication. The centre is **The
Guide** (`/guide/`): **twelve** engineering domains, each grounded in real-world examples and
studies. Around it: **Daily Notes** (the dated writing), the **Reference Architecture** (the
two-layer open-source stack), and the **Daily Brief** (spoken audio editions). Audience: a serious
general reader bridged to deep technology — clear over clever.

**Mental model — the Build → Operate → Engineer loop.** It's the organizing spine, and color
encodes the phase. Build = rust, Operate = blue, Engineer = green.

**Non-negotiable content rule:** every claim ships with a linked source — grounded in real-world
examples and studies, not opinion. If it can't be sourced, it doesn't go in. Never use the word
"toy" (use "demo"). Don't re-create a numbered "12-factor" manifesto — this is a field guide by
**domain**.

---

## 1. The look in one line

Warm paper · **Newsreader** display serif · **IBM Plex Mono** for structure (eyebrows, labels,
badges, nav, ticker) · **IBM Plex Sans** for body · bordered "sticker" cards with a **hard offset
shadow** · one or two phase-colored accents per view. No gradients, no soft shadows, no third
typeface, no emoji (only `✌ ★ ▸ → /` are used).

## 2. Color tokens (`:root` in `global.css`)

| Token | Hex | Use |
|---|---|---|
| `--paper` | `#f6f4ee` | page background |
| `--card` | `#fffdf8` | card / parchment surface |
| `--panel-build` / `--panel-engineer` | `#f5efe6` / `#eef4ef` | tinted layer panels |
| `--ink` | `#1c1917` | text, 1.5px borders |
| `--dark` / `--dark-2` | `#15120f` / `#1c1917` | "For agents" band, dark cards |
| `--muted` / `--muted-2` / `--faint` | `#57534e` / `#78716c` / `#a8a29e` | text scale |
| `--build` | `#b8430f` | rust — phase Build + primary accent |
| `--operate` | `#2d62a3` | blue — phase Operate |
| `--engineer` | `#2f7d56` | green — phase Engineer |
| `--signal` | `#e8702f` | "For agents ▸" label on dark |

`--accent` is the per-element phase color: a card sets `style="--accent:<phase hex>"` and its
border-shadow, badge, and markers follow. Never introduce a color outside this set.

## 3. Components (reuse, don't reinvent)

Shared chrome lives in `src/components/`:

- **`Nav.astro`** — sticky translucent bar; `AN/` monogram + wordmark + Plex Mono links + dark
  GitHub button. `active` prop highlights the current section in rust.
- **`Footer.astro`** — `variant="full"` (columned, home only) or `variant="slim"` (`left`/`right`
  lines, inner pages).
- **`ForAgents.astro`** — the dark "For agents ▸" band that closes every page; buttons via slot.
- **`Player.astro`** — custom audio player (play/seek/persist) wrapping a real `<audio>`.
- **`DomainCard.astro`** — the offset sticker card for a guide domain (badge + name + essence +
  principles), phase-colored. Used on home + `/guide/`. It is a **shareable card** (carries
  `data-shareable` + `data-share-*`) and ends with a `<ShareRow />`.
- **`ShareRow.astro`** — the per-card action row (LINK · COPY · IMAGE · X · LinkedIn). Drop it inside
  any element marked `data-shareable` that also sets `data-share-url` / `-title` / `-text` / `-slug`.
  Behaviour is wired once site-wide by the delegated handler in `Base.astro` (clipboard for LINK/COPY,
  share intents for X/LinkedIn, `html-to-image` PNG export for IMAGE — the row is excluded from the
  capture via `data-share-skip`). Styling is the `.share-row` / `.share-btn` classes in `global.css`.
- **`CopyGuideButton.astro`** — generates the guide as markdown and copies it client-side.

CSS component classes (in `global.css`): `.card`(`.hover`,`.card-dark`) · `.share-row`/`.share-btn` · `.badge` · `.chip`/`.chip-alt`
· `.eyebrow` · `.masthead`/`.dateline`/`.nameplate`/`.ticker` · `.entries`/`.entry-row` ·
`.layer-panel`/`.layer-connect` · `.for-agents` · `.coming-soon` · `.footer`(+`.footer-slim`) ·
`.player` · `.prose` · `.article`/`.callout`. Page-specific layout lives in each page's scoped
`<style>`. Reuse these; don't invent parallel styles.

## 4. The twelve domains & the loop

`src/content/guide/*.md` — one file per domain, frontmatter `order` (1–12) + `phase`
(`build`/`operate`/`engineer`) + `question` + `principles[]` + `tools[]`. Phases: **1–5 build,
6–10 operate, 11–12 engineer**. `src/data/phase.ts` maps phase → accent hex (the only place that
mapping lives). Renumbering or adding a domain → update every file's `order` and add a redirect in
`astro.config.mjs` if a slug changes.

## 5. Information architecture

```
/                 Home — masthead · ticker · the loop + featured Daily Brief · Recent Notes ·
                  The Guide (12) · Reference Architecture preview · For-agents band
/guide/           The Guide — the 12 domain cards
/guide/<slug>     A domain — eyebrow · principles (P1..) · prose anatomy · building blocks · prev/next
/field-notes/     Daily Notes — dated index by year
/field-notes/<slug>   A Daily Note — takeaway callout · prose · prev/next
/daily-brief/     Daily Brief — the audio editions
/daily-brief/<slug>   An edition — player · The One Idea · The Brief (its covered notes)
/architectures/   Reference Architecture — the two-layer nested diagram (domain layer over the
                  12-domain open-source software layer); data in `src/data/architecture.ts`
/glossary/ /cite/ /contribute/ /adopters/   forthcoming (Placeholder.astro)
/about/  /spec/ (→ /guide/)  /rss.xml
```

The site is **data-driven**: pages render from the `notes`, `guide`, and `episodes` collections
(`src/content.config.ts`). Daily Brief editions come from `episodes`; "The Brief" stories are the
notes each episode `covers`. mp3s live in `public/audio/`.

## 6. Notes — authoring rules (kept)

- **2-minute read** (~200–480 words; hard-fail past 550 — enforced by `scripts/validate-content.mjs`).
- **Recency:** a Note's headline example MUST be within the last **1–2 weeks**; older landmark
  cases are named anchors only. Guide domains are evergreen and exempt.
- Each Note opens with a `takeaways:` block (≤3 bullets, first sentence bold) — it becomes the
  "THE TAKEAWAY" callout. Voice: plain, engineer-to-engineer, no hype, no "X, not Y" kicker.
- See `AGENTS.md` for the full authoring contract.

## 7. Working rules

- **Never break the build.** Run `npm run validate` (content lint → `astro check` → build) before
  committing; the pre-commit hook + CI enforce it.
- **Tokens, not literals.** Use the CSS variables and `phase.ts`; add a token here with a rationale.
- **One accent per view, phase-driven.** Anything toward gradients / soft shadows / a third
  typeface / blue-as-decoration is wrong by default.
- The design prototypes that this implements live in `../design-system/*.dc.html` — the visual
  source of truth. Match them.
