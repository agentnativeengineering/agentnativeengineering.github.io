---
title: "Score every pull request 0-100 to surface hidden review debt"
date: 2026-07-15
summary: "eBay's Sachin Gupta argues coding-agent throughput metrics hide \"review debt\" and proposes scoring every PR 0-100 with five deterministic signals so review effort tracks change complexity, not who wrote the code."
takeaways:
  - "When agents ship pull requests faster than humans can review them, PR count, size, and cycle time measure production speed, not trust; score each PR's review burden directly instead of believing the green dashboard."
  - "Use five deterministic (non-LLM) signals — diff size/coupling, test-evidence gap, ownership spread, AI-authorship indicators, rationale gaps — so scoring is explainable and repeatable."
  - "Across 524 PRs, review burden tracked change complexity and volume, not AI authorship — treat AI flags as context, not a penalty, and hold human and agent PRs to the same bar."
tags: ["evaluation", "code-review", "coding-agents", "metrics"]
sourceName: "Sachin Gupta (eBay)"
sourceUrl: "https://www.youtube.com/watch?v=TJPInBjhE4Q"
sources:
  - title: "ReviewDebt: a practical framework for scoring every pull request — Sachin Gupta, eBay"
    url: "https://www.youtube.com/watch?v=TJPInBjhE4Q"
draft: false
---
## What happened

In a [talk published 2026-07-12](https://www.youtube.com/watch?v=TJPInBjhE4Q), Sachin Gupta, a software engineer at eBay, named a problem no dashboard tracks: **review debt** — the compounding gap between the code coding agents generate and the code humans have actually reviewed, trusted, and understood. He [cited GitHub's October 2025 report](https://www.youtube.com/watch?v=TJPInBjhE4Q), covering nearly every public pull request, showing commits up 25% year over year while review comments — a proxy for review attention — fell 27%. A [Faros AI 2026 benchmark he referenced](https://www.youtube.com/watch?v=TJPInBjhE4Q) found 31% more PRs now merge with no review at all, and median review time up sharply.

## Why it matters

The numbers teams celebrate — PR count, PR size, cycle time — [are vanity metrics](https://www.youtube.com/watch?v=TJPInBjhE4Q): they measure the speed of production, not the speed of trust. Each looks like progress and hides the opposite: PR count climbs when one change splits into seven; a larger median PR is bloat, not benefit; cycle time drops when reviewers stop pushing back. The real costs — reviewer fatigue, late-night rubber-stamp merges, tests that assert what the code did rather than what it should do, and incidents that surface weeks after an AI-authored merge — stay invisible until they hurt.

## How it works

1. **Five deterministic signals.** Every PR scores 0-100 from five non-LLM signal families: diff size and coupling, test-evidence gap, ownership spread, AI-authorship indicators, and rationale gaps.
2. **Bands set the review bar.** [Scores group into bands](https://www.youtube.com/watch?v=TJPInBjhE4Q) that trigger different review requirements, so a heavy cross-cutting change demands more scrutiny than a one-line fix.
3. **AI flags inform, not penalize.** Across [524 PRs in three public repos](https://www.youtube.com/watch?v=TJPInBjhE4Q), a CLI scanner found review burden tracked change complexity and volume, not AI authorship — so AI indicators add context rather than dock points.
4. **One standard, surfaced weekly.** Apply the same score to human and agent PRs and post it weekly, shifting the team from gut-feel to measurement.

> They tell you the speed of production. They do not tell you the speed of trust.

## The catch

The score is a triage signal, not a correctness check — a low score means less needs review, not that the code is right. The industry figures Gupta cites are aggregate benchmarks, not eBay's own data, and the [524-PR scan](https://www.youtube.com/watch?v=TJPInBjhE4Q) is a demonstration across three public repos, not a controlled study. His own result cuts against the easy story: the fix isn't blocking AI, it's the discipline the score exposes — one logical change per PR, meaningful tests, and authors writing down the "why."

[Evaluation](/guide/evaluation/)
