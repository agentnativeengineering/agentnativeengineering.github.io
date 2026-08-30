# AGENTS.md — repo guide for the daily editor agent

This repo is the published site **agentnativeengineering.com** (GitHub Pages, Astro static) — an
open, versioned, sourced field guide to *operating* agents in production, plus field notes and
reference architectures. An agent drafts a field note each run; a human edits and merges. This
file is the agent's contract.

**Never call the site a "daily log."** It is a field guide with field notes. Every claim — in the
guide especially — ships with a linked source; if it can't be sourced, it doesn't go in.

## Golden rules

1. **Commit and push directly to `main`** as part of the agentic publish flow — there is no
   branch/PR step. This repo's `main` builds and deploys on push (GitHub Pages CI). See
   `../CLAUDE.md`'s "Publishing — agentic, no scripts" section for the authoritative process:
   fetch the 4am publication → read it → write the note file by hand to house standards → verify
   every cited URL is 2xx → `npm run validate` → stage the **exact** file path (never `-A`/`.`/`-u`)
   → commit as the GitHub noreply identity → push → mark published in 4am → confirm live.
2. **Never publish without validation.** Run `npm run validate` (content lint → `astro check` →
   build) before committing. A failing validate means don't commit.
3. **One note per publication.** House target ~180–320 words. Field-note voice, real specifics.
4. **Recency is mandatory.** The note's headline example/citation MUST be from within the **last
   1–2 weeks** (a just-happened incident, talk, release, or CVE). Older landmark cases may be a
   named anchor only, never the lead. No fresh hook → don't publish; find one first.
5. **No fabricated certainty.** If a number is soft, say so. Don't invent technical detail.
6. **`draft: false` only once the content is verified.** Render what the source (4am, or research)
   actually wrote — don't rewrite its prose. If unsure the content is publish-ready, leave
   `draft: true` — drafts build but stay out of the public stream.

## Voice

- Concrete over abstract. "The thing that cost me an hour" beats "lessons in observability."
- Ship the gotcha. The reader wants the snag and the fix, not a tidy summary.
- No hype, no em-dash think-piece tone. Engineer talking to engineers.
- Topics circle: MCP & tool calling, evals, agent/LLM observability & tracing, orchestration,
  cost/latency/token economics, and the SRE → agent-native transition.

## How to create a note

```bash
npm run new -- "Your title here" "tag1,tag2"   # scaffolds src/content/notes/YYYY-MM-DD-slug.md
```

Frontmatter schema (enforced by `src/content.config.ts`):

```yaml
---
title: "..."          # required, < 90 chars
date: 2026-05-30      # required, YYYY-MM-DD, matches filename prefix
summary: "..."        # one sentence — used in the stream, RSS, and meta description
takeaways:             # ≤3 plain-text bullets, first is THE ONE IDEA — renders as the callout
  - "..."
tags: ["ai-sre"]      # inline array, 4 entries: domain slug first, then 3 keywords
sourceName: "..."     # publisher label (e.g. "LangChain"), never a bare hostname
sources:               # {title, url} per cited source
  - title: "..."
    url: "..."
draft: false          # true = built but hidden from stream/RSS/sitemap
---
```

## Body structure (three sections, in this exact order)

1. `## The Takeaway` — one sentence, the sharp, self-contained, shareable lesson. Distinct from
   the frontmatter `takeaways:` block above (which feeds the site's callout) — not a restatement.
2. `## The details` — 3-5 bullets, each a complete, specific, named-numbers sentence (no vague
   fragments or paraphrase). Front-load the concrete "what changed"; the dated lead goes in the
   first bullet as `YYYY-MM-DD`.
3. `## Why it matters` — opens with a direct, opinionated stakes claim (not an abstract
   generalization), names who's affected, closes on a concrete forward-looking consequence. Also
   carries the honest-caveat requirement (never oversell) — there is no separate "catch" section.

End the body with the domain link alone on the final line: `[Domain Name](/guide/<slug>/)` — the
12 valid slugs are in `src/content/guide/`; the site rejects an unknown one.

Superseded, no longer used: `## What happened` (prose), optional `## How it works`, a pull-quote
blockquote, and `## The catch` / `## What to do`.

## Where to mine material (in priority order)

1. **4am** (https://4am.agentnativeengineering.com) — the live autonomous publishing engine. See
   `../CLAUDE.md`'s "Where content comes from" section for how to fetch a ready publication.
2. **`../research/`** (local only, not in this repo): `raw/` reports, `topics/` backlog,
   `drafts/` half-formed notes.
3. The previous 24h of the operator's actual agent work — dispatch session outputs, things
   built, things that broke.

Pick **one** angle. Don't summarize a whole report; extract the single sharpest takeaway and
write it as a note.

## The run, end to end

Per `../CLAUDE.md`'s "Publishing — agentic, no scripts" section — no branch, no PR:

```bash
# 1. fetch the 4am publication (or other source material) and read it
# 2. write src/content/notes/YYYY-MM-DD-slug.md by hand to house standards (frontmatter + the
#    3-section body above)
# 3. verify every cited URL returns 2xx: curl -sIL <url>
npm run validate          # MUST pass — content lint → astro check → build
git add src/content/notes/YYYY-MM-DD-slug.md   # exact path only, never -A/./-u
git commit -m "Publish YYYY-MM-DD: <title>"    # GitHub noreply identity, not gmail
git push origin main
# 4. mark_published in 4am (if applicable) with the live URL
# 5. confirm live: curl -sI ".../field-notes/<stem>/?cb=$(date +%s)" -> 200
```

Report the file path, commit hash, and the live URL confirmation.
