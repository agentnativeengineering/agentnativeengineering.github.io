---
title: "AI inflates the coding metrics that are easy to count and buries the ones that matter"
date: 2026-07-12
summary: "Enterprises measuring AI's value by lines of code, PRs, or percent AI-written are counting exactly what AI inflates — SPACE, DORA, and the METR study all say measure delivered outcomes and team health instead."
takeaways:
  - "Measure AI's value in coding by delivered outcomes — delivery throughput, change-fail rate, incidents, defect rates — and team health, not by activity like lines of code, PRs, or percent AI-written."
  - "AI reliably inflates activity while delivery and stability lag, so counting output makes AI look like a win even when shipping speed and quality haven't moved."
  - "Set a baseline before rollout, track cost-per-outcome (dollars per merged PR or shipped feature), and watch the health signals output misses — cognitive and intent debt."
tags: ["evaluation", "metrics", "roi", "ai-assisted-coding"]
sourceName: "SPACE, DORA 2025, METR, DX & Glean's Arvind Jain"
sourceUrl: "https://www.youtube.com/watch?v=jX-Uq8JJ_j8"
sources:
  - title: "Arvind Jain, Glean — 20VC"
    url: "https://www.youtube.com/watch?v=jX-Uq8JJ_j8"
  - title: "SPACE framework (Forsgren, Storey, et al.) — Microsoft Research"
    url: "https://www.microsoft.com/en-us/research/publication/the-space-of-developer-productivity-theres-more-to-it-than-you-think/"
  - title: "Five years of SPACE — the original authors (DX)"
    url: "https://newsletter.getdx.com/p/five-years-later-reflecting-on-space"
  - title: "DORA 2025 report (Google Cloud)"
    url: "https://cloud.google.com/blog/products/ai-machine-learning/announcing-the-2025-dora-report"
  - title: "METR — AI slowdown study (2025)"
    url: "https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/"
  - title: "DX — measuring AI's impact"
    url: "https://getdx.com/blog/ai-measurement-hub/"
  - title: "Cognitive & Intent Debt — Storey (arXiv)"
    url: "https://arxiv.org/abs/2603.22106"
draft: false
---

## What happened

Asked on a [2026-07-11 20VC interview](https://www.youtube.com/watch?v=jX-Uq8JJ_j8) how to measure AI's ROI, Glean's Arvind Jain called engineering productivity "the fuzziest of the jobs out there": coding sped up — "we're writing way more lines of code now" — yet "most of the companies" report "the actual shipping speed of products has not increased." That's the trap the [SPACE framework](https://www.microsoft.com/en-us/research/publication/the-space-of-developer-productivity-theres-more-to-it-than-you-think/) named in 2021 — productivity "cannot be measured by a single metric or dimension." Five years on, its own authors [warn](https://newsletter.getdx.com/p/five-years-later-reflecting-on-space) that "activity metrics like lines of code and PRs are newly resurfacing, and people are forgetting that we knew this wasn't the greatest plan."

## Why it matters

AI moves the metrics that are easy to count and easy to fool. [DORA's 2025 research](https://cloud.google.com/blog/products/ai-machine-learning/announcing-the-2025-dora-report) finds AI "amplifies what's already there" — individual activity and throughput can climb while delivery stability lags. [METR's randomized study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) is the trap in miniature: experienced developers were measurably slower with AI on mature codebases, yet believed they were faster. Count output and AI always looks like a win.

## What to capture instead

Measure three things, and baseline each *before* you roll AI out — [without a baseline](https://getdx.com/blog/ai-measurement-hub/) "there's no measurement, only a growing bill":

1. **Delivery outcomes — DORA's four keys.** Deployment frequency, lead time for change, change-fail rate, time-to-restore — plus incident frequency and defect/rework rate. This is what AI is supposed to move; lines, PRs, and percent-AI-written are only what it inflates.
2. **Cost per outcome.** Fully-loaded dollars per *merged PR* or *shipped feature* — with token spend now rivaling developer salaries — rather than tokens burned.
3. **Team and system health.** Developer satisfaction and flow (the SPACE dimensions beyond activity), and the debt output metrics can't see — Storey's [cognitive and intent debt](https://arxiv.org/abs/2603.22106): is your team's shared understanding of the system eroding?

> If a metric jumps the moment you switch on AI, it is probably measuring activity rather than value.

## The catch

None of this is AI-specific — SPACE and DORA predate the agent era, and METR's authors caution their 2025 slowdown may not hold as tools improve. The point isn't a fixed scorecard; it's that the easy metrics are exactly the ones AI inflates, so an enterprise measuring those will "prove" an ROI it may not actually have.

[Evaluation](/guide/evaluation/)
