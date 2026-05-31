# AGENTS.md — repo guide for the daily editor agent

This repo is the published site **agentnativeengineering.com** (GitHub Pages, Astro static) — an
open, versioned, sourced field guide to *operating* agents in production, plus field notes and
reference architectures. An agent drafts a field note each run; a human edits and merges. This
file is the agent's contract.

**Never call the site a "daily log."** It is a field guide with field notes. Every claim — in the
guide especially — ships with a linked source; if it can't be sourced, it doesn't go in.

## Golden rules

1. **Never push to `main`.** Always work on a branch and open a PR. The human merges.
2. **Never publish without validation.** Run `npm run validate` (content lint → `astro check` →
   build) before opening the PR. A red `Validate` check blocks merge by design.
3. **One note per run.** Short: 200–500 words. Field-note voice, first person, real specifics.
4. **Recency is mandatory.** The note's headline example/citation MUST be from within the **last
   1–2 weeks** (a just-happened incident, talk, release, or CVE). Older landmark cases may be a
   named anchor only, never the lead. No fresh hook → don't publish; find one first.
5. **No fabricated certainty.** If a number is soft, say so. Don't invent technical detail.
5. **`draft: true` until the human approves.** The PR can carry `draft: false` as the proposed
   flip, but if you're unsure, leave it `true` — drafts build but stay out of the public stream.

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
tags: ["ai-sre"]      # first tag shows on the card
draft: false          # true = built but hidden from stream/RSS/sitemap
---
```

## Where to mine material (in priority order)

1. **`../research/`** (local only, not in this repo): `raw/` reports, `topics/` backlog,
   `drafts/` half-formed notes. This is the richest seam.
2. The previous 24h of the operator's actual agent work — dispatch session outputs, things
   built, things that broke.
3. The research reports already summarized in past notes — go one level deeper, don't repeat.

Pick **one** angle. Don't summarize a whole report; extract the single sharpest takeaway and
write it as a note.

## The run, end to end

```bash
git checkout -b note/$(date +%F)
npm run new -- "Title" "tag"
# ...write the note into the created file...
npm run validate          # MUST pass
git add -A && git commit -m "note: <title>"
git push -u origin HEAD
gh pr create --fill --label daily-note
```

Then stop. Report the PR URL. The human reviews, edits, and merges — merge to `main` triggers
the Pages deploy.
