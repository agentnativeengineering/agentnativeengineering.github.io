---
title: "Kimi K3.1 Pro scored 55, then 46 four days later: price models by your own tasks"
date: 2026-10-29
summary: "Kimi K3.1 Pro's frontier-level agentic coding scores and roughly one-third cost per task held up in independent runs, but when Artificial Analysis moved its index to private tests four days later the model fell from 55 to 46, so route on your own tasks, not launch charts."
takeaways:
  - "An open-weight model's launch-week score can drop 9 points when the test set goes private, so price and route it on cost per solved task in your own harness."
  - "Per-token price is not cost per task: K3.1 Pro cut its rates by 33% but used 14% more output tokens, so its cost per task barely moved."
  - "Moonshot ran its own model in the Claude Code harness but copied competitor scores from their blogs, so its comparison table is not a controlled run."
tags: ["model-selection", "cost-per-task", "open-weights", "benchmarks"]
domain: model-selection
sourceName: "Artificial Analysis"
sourceUrl: "https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks"
sources:
  - title: "Kimi K3.1 Pro launches at 4th on the Intelligence Index and will lead open weights models"
    url: "https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks"
  - title: "Announcing Artificial Analysis Intelligence Index v5"
    url: "https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v5"
  - title: "Kimi K3.1 Pro - Intelligence, Performance & Price Analysis"
    url: "https://artificialanalysis.ai/models/kimi-k3-1-pro"
  - title: "Kimi K3.1 Pro (Moonshot AI blog)"
    url: "https://www.kimi.ai/blog/kimi-k3-1-pro"
  - title: "Moonshot's Kimi K3.1 Pro flirts with open weights leadership amid paid influencer scandal allegations"
    url: "https://venturebeat.com/technology/moonshots-kimi-k3-1-pro-flirts-with-open-weights-leadership-amid-paid-influencer-scandal-allegations"
upstream: "aidailybrief/2026-10-26"
draft: false
---

## The Takeaway

A model's leaderboard rank can shift when the test set changes. Cost per solved task on your own workload is a steadier signal for deciding where to route work.

## The details

- On 2026-10-23, [Artificial Analysis scored Kimi K3.1 Pro](https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks) at 55 on its Intelligence Index (fourth place) and 67% on Terminal-Bench 4.0. It cost $1.98 per index task, roughly the same as K3. Per-token prices fell 33%, but output grew from 48K to 55K tokens per task.
- [Moonshot's own table](https://www.kimi.ai/blog/kimi-k3-1-pro) puts K3.1 Pro at 65.7% against Opus 5.5's 66.4%. Moonshot ran its model in the Claude Code harness (the agent loop and tools that wrap the model) but took competitor scores from their blogs or the leaderboard's best result, not from one controlled run.
- On 2026-10-27, [Index v5](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v5) shifted 60% of its weight to private or held-out tests. K3.1 Pro dropped to 46, and the open-versus-closed gap widened from 3 points to 12. Opus 5.5 at max effort costs $10.04 per task, against [$3.68 for K3.1 Pro](https://artificialanalysis.ai/models/kimi-k3-1-pro).
- [VentureBeat lists](https://venturebeat.com/technology/moonshots-kimi-k3-1-pro-flirts-with-open-weights-leadership-amid-paid-influencer-scandal-allegations) K3.1 Pro at $2/$10 per million input/output tokens, the same as Sonnet 5.5. It also reports an unauthenticated document that allegedly told influencers to hide paid partnerships.

## Why it matters

Teams that route coding agents by leaderboard rank are routing on numbers that moved 9 points in four days. The independent Terminal-Bench result does back Moonshot's claim, and under Index v5, Opus at max effort still costs about 2.7x more per task. Still, these are one evaluator's runs, and the weights, promised by November 4, are not yet out. A step the sources don't spell out: replay 30 to 50 of your own past agent tasks in your production harness, then log tokens, dollars and pass rate per model before you move traffic.

[Model Selection](/guide/model-selection/)
