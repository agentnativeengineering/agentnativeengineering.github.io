# The daily content pipeline

The premise of this site is dogfooded: **an agent drafts each day's note, a human approves it.**
Nothing reaches the live site without passing validation and a human merge.

```
 ┌─────────────────────────────────────────────────────────────────┐
 │  SCHEDULED AGENT (daily)                                          │
 │  reads research/ + last 24h of work  →  drafts 1 field note      │
 │  runs `npm run validate`  →  opens a PR (branch: note/YYYY-MM-DD) │
 └───────────────────────────────┬─────────────────────────────────┘
                                  │  PR + green `Validate` check
                                  ▼
 ┌─────────────────────────────────────────────────────────────────┐
 │  YOU (≈2 min)   review · edit · flip draft:false · merge          │
 └───────────────────────────────┬─────────────────────────────────┘
                                  │  merge to main
                                  ▼
 ┌─────────────────────────────────────────────────────────────────┐
 │  GitHub Actions  →  build  →  Pages deploy  →  LIVE               │
 └─────────────────────────────────────────────────────────────────┘
```

## Guardrails (why the live site can't break)

- **`Validate` workflow** runs on every PR: content lint → `astro check` → build. Red = no merge.
- **`pre-commit` hook** runs the same validation locally before any commit touches the site.
- **`draft: true`** notes build but never appear in the stream, RSS, or sitemap — safe staging.
- The agent **only ever opens a PR**; it has no path to `main`.

## Setting up the daily schedule

Once the repo is live, register the recurring agent with the `/schedule` skill in Claude Code.
The routine should run, from inside a clone of this repo, the playbook in
[`AGENTS.md`](../AGENTS.md). A minimal scheduling prompt:

> Every day at 08:00, in the `agentnativeengineering.github.io` repo, follow AGENTS.md: mine
> `../research/` and the last 24h of my agent work, draft one field note on a single sharp
> takeaway, run `npm run validate`, and open a PR labelled `daily-note`. Do not merge. Report the
> PR URL.

Tunables:
- **Cadence:** daily is the default; drop to weekdays-only if the backlog runs thin.
- **Autonomy:** keep human-merge while the voice settles. Only consider auto-merge-on-green once
  several weeks of drafts have needed no edits.
- **Source weighting:** point it harder at `research/topics/` when you want a specific arc.

## When the well runs dry

If `research/` has nothing fresh, the agent should **skip** rather than pad. A missed day beats a
filler post. Instruct it to open an issue ("no material for YYYY-MM-DD") instead of a thin PR.
