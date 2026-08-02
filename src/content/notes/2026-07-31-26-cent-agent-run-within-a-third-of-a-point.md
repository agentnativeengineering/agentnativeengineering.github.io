---
title: "A 26-cent agent run came within a third of a point of a $5.01 one"
date: 2026-07-31
summary: "On ATM-Bench-Hard's agent board an OpenCode run on DeepSeek V4 Flash scored 38.28 for $0.26 against Codex on GPT-5.6 Terra at 38.61 for $5.01, and paying for a dearer reasoning tier repeatedly bought a lower score."
takeaways:
  - "Rank candidate models by the score they earn per completed run of your own task, before the price tier or the reasoning-effort setting."
  - "On the same 31-question memory board a $0.26 run finished 0.33 points behind a $5.01 one, so the price tier predicted nothing about the score."
  - "The effort dial is part of the model choice: GPT-5.6 Sol peaked at medium, and every dearer tier above it scored lower while costing more."
tags: ["model-selection", "cost", "benchmarks", "agentic-memory"]
sourceName: "ATM-Bench leaderboard (Mei et al., University of Cambridge)"
sourceUrl: "https://atmbench.github.io/leaderboard.html"
draft: false
---
## What happened

On 2026-07-31 the ATM-Bench maintainers [added a price-performance chart and two Hard rows](https://github.com/atmbench/atmbench.github.io/commit/2b22444252ebcac4668a124dbaff4ce1622e5843) to their [agent leaderboard](https://atmbench.github.io/leaderboard.html). An OpenCode run on DeepSeek V4 Flash (0731) scored 38.28 for an estimated $0.26; the chart's Terra ladder puts Codex on GPT-5.6 Terra (high) at 38.61 for $5.01 — a third of a point apart, at nineteen times the price. [ATM-Bench](https://atmbench.github.io/) is a Cambridge benchmark for ["multimodal, multi-source personalized referential Memory QA"](https://arxiv.org/abs/2603.01990): the remembering an assistant does across roughly four years of a person's images, videos and email.

## Why it matters

Model selection usually starts from a price tier and a hunch about which model is stronger. This board prices the whole run — every call the agent made to answer the question — and at that resolution the ordering by price and the ordering by score come apart.

## How it works

1. **The unit is a finished run.** The board's figure is ["an API-equivalent estimate calculated from saved per-call token counters"](https://atmbench.github.io/leaderboard.html), so cheaper per token and cheaper per task stay separate measurements — here the token-hungrier run is the cheap one, 12.54M against Terra's 7.83M.
2. **The effort dial can run backwards.** GPT-5.6 Sol peaks at medium — 58.76 for $12.52 — and no dearer tier catches it: 51.54 at high ($14.79), 43.98 at xhigh ($17.79), 48.30 at max ($23.90).
3. **The reversals hide in the chart.** Its lines leave off ["a few measured runs ... where a dearer tier scored lower"](https://github.com/JingbiaoMei/ATM-Bench); each one is still a row in the table underneath.

> A price ladder tells you what a run will cost, never what it will score.

## The catch

The Hard agent board is 31 questions, and neither run leads it. The costs are list-price equivalents rather than invoices — the DeepSeek row actually ran free (["OpenCode meters the DeepSeek V4 Flash Free endpoint at $0"](https://atmbench.github.io/leaderboard.html)), and the Luna and Terra rows were re-priced against OpenAI's cut ["verified 2026-07-31"](https://atmbench.github.io/leaderboard.html), narrowing the very gap being read. The two rows also differ by harness, OpenCode against Codex, so this is not a clean model-to-model comparison. Each is one run added by the maintainers without per-run logs, on a board that has kept growing since. Take it as a reason to price your own task, rather than as a ranking to copy.

[Model Selection](/guide/model-selection/)

