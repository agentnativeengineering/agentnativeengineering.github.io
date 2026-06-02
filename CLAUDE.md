# CLAUDE.md — Agent Native Engineering design system

Instructions for any agent or person working on this site. **Follow this exactly.** The single
source of truth for tokens is `src/styles/global.css`; this file explains the intent so changes
stay coherent. Change a token in `global.css` → update this file.

---

## 0. What this site is

An **open, versioned, sourced field guide for building, operating, and engineering _with_ AI agents
in production**, plus field notes and reference architectures — presented as a **typeset
specification / document**, modelled on `latex.css`, Tufte CSS, IETF RFCs, Oxide RFDs, and
`12factor.net`. It is **not** a SaaS product page, and it is **not** a "daily log." It builds on
open protocols and the broader open-source ecosystem rather than reinventing them, and frames the
work as a loop: build → operate → engineer-with → build the next ones faster. The centre is the
**field guide** (`/guide/`): **eleven** engineering domains (scope & simplicity, durable execution,
memory & context, multi-agent orchestration, reliability, autonomy/cost/control, security, access &
identity, observability, evaluation, harness engineering), each grounded in real-world practice.
Around it: **field notes** (the writing, labelled "Notes"), **reference architectures** (open-source
stacks), and a podcast. Audience: senior engineers, AI-infra practitioners, platform/SRE teams.

**Non-negotiable content rule: every claim ships with a linked source.** Each domain page ends in
a Sources section. If it can't be sourced, it doesn't go in. Derive from real incidents, not
theory; do **not** re-create a "12 factors" numbered manifesto — this is a field guide by domain.

**HARD RULE — Write Notes to be learned.** A Note must simplify its source so a reader understands it
in ONE pass and can act tomorrow, with no second tool — never a denser summary layered on the original.
Lead with why the reader cares; define every term at first use, inline; no floating abstractions;
explain plainly (no slogans); end with one concrete "what to do"; simplify, don't re-compress; never put
words in the source's mouth (flag your own extensions, keep the source's hedges). Each Note opens with a
`takeaways:` block (≤3 plain bullets, first sentence bold) so the point lands in 10 seconds. (Full rule
+ examples: the `write-field-note` skill, §4a.)

**HARD RULE — Notes recency: every Note's headline example/citation MUST be from within the last
1–2 weeks of its publish date.** Notes are a current, alive stream — a Note about agents in
production must anchor on something that *just* happened (a this-week incident, talk, release, or
CVE), not a year-old landmark case. Older canonical cases (EchoLeak, the $47K loop) may appear as a
named *anchor/reference* only, never as the lead. If no genuinely recent (≤2-week) example exists
for a topic, don't publish the Note yet — find the fresh hook first. (The Field Guide domains are
evergreen and exempt; this rule is for Notes.)

Homepage leads with the **field guide** and the **writing** — not fictional code or product copy.

**Prime directive: it must read as an authoritative published document, never as a generated
SaaS/startup page.** Credibility is judged on visual design before a word is read. When in doubt,
make it more like a typeset paper and less like a website.

---

## 1. The look in one line

Warm paper · Source Serif 4 body & headings · IBM Plex Mono for structure (section numbers,
labels, metadata, code) · oxblood/LaTeX-red links · numbered §sections · a centered document
masthead · dated entry lists. No hero, no cards, no buttons, no shadows, no blue.

---

## 2. BANNED (these are the "AI-generated SaaS" tells — never reintroduce)

- ❌ **Inter / Geist / system-sans as the primary face.** We are serif-first (Source Serif 4).
- ❌ **Blue accent / blue links.** The #1 generated-site tell. Links are oxblood `--accent`.
- ❌ **Pill/rounded buttons, "Get started" CTAs, gradient or hero sections, feature-card grids.**
- ❌ **Drop shadows, glassmorphism, neon, dark "terminal" themes, blinking anything.**
- ❌ **Pure white `#fff`** backgrounds — we use warm paper `#fbfaf7`.
- ❌ Emoji as UI, AI-generic hero art, relative-only dates, anonymous/undated posts.
- ❌ More than the two typefaces; a third font or a decorative display face.

---

## 3. Color tokens (`:root` in `global.css`)

| Token | Hex | Use |
|---|---|---|
| `--paper` | `#fbfaf7` | page background — warm paper, never pure white |
| `--paper-2` | `#f3f0e8` | code blocks, table headers, alt fills |
| `--paper-3` | `#efeada` | deepest paper tint |
| `--ink` | `#1a1a18` | body text, headings |
| `--ink-2` | `#38352e` | secondary body, gloss text |
| `--muted` | `#6b6258` | metadata, captions |
| `--faint` | `#938a7b` | mono micro-labels only (non-essential) |
| `--rule` | `#ddd7c9` | hairline rules / dividers |
| `--rule-strong` | `#c3bbab` | double rules (masthead/footer), stronger borders |
| `--accent` | `#9a2d1f` | **oxblood** — links, §marks, section numbers, the one accent |
| `--accent-ink` | `#792217` | accent hover |
| `--accent-soft` | `#f1e6e1` | rare oxblood tint backgrounds |

One accent only. Oxblood carries links, `§` marks, and the masthead `doc-id`/numbers — nothing
else. Never tint large blocks. Never add a second hue without updating this file.

---

## 4. Typography

- **Serif — Source Serif 4** (`--serif`): body, headings, masthead title, principle titles. The
  voice of the document. Weights 400/600/700 + italic 400. Old-style numerals on (`onum`).
- **Mono — IBM Plex Mono** (`--mono`): the *structural* layer — wordmark, nav, section numbers
  (`§1`, `§2`), `doc-id`, metadata, bylines, tags, code, the colophon. Mono = "this is a spec."
- Loaded via Google Fonts `@import` at the top of `global.css` (`display=swap`) + preconnect in
  `Base.astro`.

**Scale & rhythm**
- Root `18px` (`17px` ≤600px). Body line-height `1.72`.
- Masthead `h1`: `clamp(2.1rem, 6vw, 3.3rem)`, weight 700, centered.
- Subtitle: italic serif, `clamp(1.05rem, 2.6vw, 1.35rem)`, muted.
- Section heading: serif 700 with a mono oxblood `§n` prefix.
- Principle title: serif 600, ~1.22rem.
- Mono labels: `0.74–0.8rem`, `letter-spacing 0.1–0.16em`, often uppercase, `--faint`/`--accent`.
- Prose body caps at `--measure` (68ch).

---

## 5. Signature devices (what makes it bespoke — keep these)

1. **Document masthead** — centered title block: `doc-id` (e.g. `ANE-000 · An Open Standard`),
   serif title, italic subtitle, mono byline (`Version · Revised · Status`), a short centered rule.
   Like an RFC/LaTeX cover. Use on the homepage and section landing pages.
2. **Numbered §sections + Contents** — `§1`, `§2` in oxblood mono; a two-column **Contents** TOC
   linking to anchors. Principles are a numbered list with a hover `§` anchor for deep links.
3. **Dated entry lists, not cards** — field notes render as `date │ title │ summary` rows with
   hairline dividers (RFD/danluu style). No cards, no thumbnails.
4. **Body rules in `.prose`** — flush-left paragraphs separated by a `1.15rem` gap (no first-line
   indent — bold inline lead-ins must align). Code blocks get a left oxblood border. (Optional:
   Tufte `.sidenote` floats into the right margin ≥1080px for definitions/normative asides.)
5. **Double rules + colophon** — header and footer use a `3px double` rule; the footer is a
   colophon ("Set in Source Serif 4 & IBM Plex Mono. Built by agents, edited by humans. CC BY 4.0").
6. **Wordmark** — `agentnative` (ink, 600) + `engineering` (faint) + `/` (oxblood) in IBM Plex
   Mono. The oxblood slash is the only logo flourish. Favicon mirrors it (`AN` + oxblood `/`).

---

## 6. Layout

- Single document column: `--doc: 760px`; prose `--measure: 68ch`; padding `--pad`.
- Left-aligned text (not justified — avoids bad web rivers). Generous vertical rhythm.
- Sections separated by hairline `--rule`; major boundaries (header/footer) by `3px double`.
- Sticky header is fine but keep it a thin document bar, not a SaaS navbar.

---

## 7. Components (classes in `global.css`)

`.site-head` (masthead bar) · `.masthead` (+ `.doc-id`, `.subtitle`, `.byline`, `.rule`) ·
`.abstract` · `.toc` (Contents, 2-col `ol`) · `.section` + `.section-head` (`.sec-no` + `h2`) ·
`.principles` / `.principle` (`.pn` number, `.anchor` §) · `.entries` / `.entry-row`
(`.date`, `.ttl`, `.ex`) · `.codeblock` (open-source quickstart: `.cb-bar` label + mono `pre`,
`.pr` prompt, `.cm` comment, `.kw` keyword — left oxblood border, never a neon terminal) ·
`.repos` / `.repo-row` (`.name` mono, `.lang`, `.desc`, `.meta` — the implementation/repository
list, rows not cards) · `.asterism` (✳✳✳ divider) · `article.note` + `.art-head` + `.art-meta`
· `.prose` (LaTeX rules) · `.sidenote` · `.site-foot` (`.foot-links`, `.colophon`) · `.ph`
(placeholder pages). Reuse these; don't invent parallel styles.

---

## 8. Information architecture

```
/                Home — masthead · abstract · §1 Field Guide · §2 Field Notes · §3 Architectures
/guide/          The Field Guide — versioned index of the 8 domains (masthead + version/revised)
/guide/<slug>    A domain page — question · principles (P1..) · prose anatomy · sources · prev/next
/architectures/  Reference architectures — the composed open-source stack, mapped to domains
/glossary/       The discipline's vocabulary                             [Placeholder]
/field-notes/    Dated index of notes (by year)
/field-notes/<slug>   A field note (typeset document)
/contribute/  /adopters/  /cite/   Community + reference pages           [Placeholder]
/about/          What this is, and the every-claim-is-sourced rule
/spec/           Redirect → /guide/ (the spec became the guide)
/rss.xml         Feed
```
Guide domains live in `src/content/guide/*.md` (collection `guide`); version + revised date come
from `src/data/site.ts`. `Placeholder.astro` styles not-yet-written pages as "forthcoming"
documents. Each domain's body follows a fixed anatomy: **the pain → what production demands →
patterns → open-source building blocks → Demo → production → verify it → Sources.** Never use the
word "toy" (use "demo"). Sources may link YouTube talks (the transcripts in `../../youtube/` carry
the video IDs).

---

## 9. Working rules

- **Never break the build.** Run `npm run validate` (content lint → `astro check` → build) before
  committing. Pre-commit hook + `Validate` CI both enforce it.
- **Tokens, not literals.** Use the CSS variables; add new ones here with a rationale.
- **One-accent / serif-first / no-SaaS discipline** is the brand. Any change toward the banned
  list in §2 is wrong by default.
- **Verify contrast** (WCAG AA: 4.5:1 body, 3:1 large/UI) when touching text/background pairs.
- See `AGENTS.md` (authoring contract) and `docs/daily-pipeline.md` (daily flow).
