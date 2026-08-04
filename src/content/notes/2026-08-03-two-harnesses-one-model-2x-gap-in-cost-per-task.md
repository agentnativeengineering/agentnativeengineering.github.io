---
title: "Two harnesses, one model, one effort setting, and a 2x gap in cost per task"
date: 2026-08-03
summary: "Anthropic shipped Claude Opus 5 on 2026-07-24 at Opus 4.8's exact per-token price while Artificial Analysis measured that one model between $10.41 and $17.79 per task by effort level, and Databricks separately found one model at one effort costing more than 2x as much in a different harness at equal quality."
takeaways:
  - "Price your agent work in dollars per accepted task, and re-measure it every time you change the model, the effort dial, or the harness."
  - "The per-token price is fixed on the sheet while the bill moves with turns, retries, and the harness you run the model in, so the sticker predicts little about a finished unit of work."
  - "Reasoning tokens bill at output rates, effort spanned roughly 8x in output tokens on one benchmark, and a harness swap moved cost per task more than 2x in some cases at equal quality."
tags: ["autonomy-and-cost", "cost-per-task", "harness", "reasoning-tokens"]
sourceName: "Anthropic"
sourceUrl: "https://www.anthropic.com/news/claude-opus-5"
draft: false
---
## What happened

Anthropic shipped Claude Opus 5 on [2026-07-24](https://www.anthropic.com/news/claude-opus-5) at "$5 per million input tokens and $25 per million output tokens (the same as Opus 4.8)" — an unchanged price sheet — reporting "a third fewer turns and tool calls" on its hardest financial-modeling tasks and, on CursorBench 3.2, that "at max effort, the model performs within 0.5% of Fable 5's peak score, but at half the cost per task." Artificial Analysis [measured that one model against itself](https://artificialanalysis.ai/articles/claude-opus-5-leader-agentic-knowledge-work) the same day: "$10.41 per task" at high effort, "$17.79 per task" at max. Two weeks earlier Databricks ran one model at one thinking effort through [two different harnesses](https://www.databricks.com/blog/benchmarking-coding-agents-databricks-multi-million-line-codebase) and found "the cost per task differed significantly (more than 2x in some cases), while quality remained the same."

## Why it matters

The number you negotiate is per token. The number you pay is per finished task, and the multiplier between them — turns, retries, reasoning — is set by how you run the model.

## How it works

1. **Reasoning bills at output rates.** Thinking tokens are ["billed as output tokens, even when the thinking text isn't returned to you"](https://platform.claude.com/docs/en/build-with-claude/thinking).
2. **The effort dial is a hint.** Anthropic calls it ["a behavioral signal"](https://platform.claude.com/docs/en/build-with-claude/effort) rather than a strict token budget, and Artificial Analysis measured ["output token usage ranging around 8x from low to max effort"](https://artificialanalysis.ai/articles/opus-5) on one benchmark.
3. **The harness sets the multiplier.** The cheaper of Databricks' two harnesses ["sent about 3x less context per turn"](https://www.databricks.com/blog/benchmarking-coding-agents-databricks-multi-million-line-codebase) — same model, same effort, same quality, different bill.

> A token price is quoted once; what a finished task costs is decided by your harness on every run.

## The catch

Both Opus 5 figures are launch-week — one vendor's own report, one benchmark house's runs on its own task set, each measured against Anthropic's own Fable 5 — and the Databricks numbers, published 2026-07-08, come from its codebase rather than yours. The metric also needs an acceptance signal you trust: [DORA's 2026 ROI report](https://services.google.com/fh/files/misc/dora-roi-of-ai-assisted-software-development-2026.pdf) argues a "verification tax" replaces friction rather than removing it, and reports gains of "35-40%" on "simple, greenfield tasks" against "10% or less" on "complex, legacy brownfield code." As [Nufar Gaspar wrote](https://www.nufargaspar.com/writing/tokens-teach-produce-spin) on 2026-07-05, "the per-token price is a sticker; the per-task cost is the bill" — which only pays if you count the tasks you kept.

[Autonomy, Cost & Control](/guide/autonomy-and-cost/)
