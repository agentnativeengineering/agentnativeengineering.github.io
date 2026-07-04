---
title: "Fixed token budgets make agent benchmarks read the floor instead of the ceiling"
date: 2026-07-04
summary: "The UK's AI Security Institute shows fixed compute caps systematically understate agent capability — treat capability as a curve over budget, on realistic tasks, with humans grading."
takeaways:
  - "An agent benchmark with a fixed token budget reports the floor, not the ceiling: AISI found 10x more compute lifted software-engineering success ~25% and stretched the frontier time horizon from ~2 to 14 hours."
  - "Extra compute helps most where the agent can verify its own work (code, exploits) and barely moves tasks with no feedback signal, like medical benchmarks."
  - "Realistic under-specified tasks expose the same blind spot from the other side: top models fail 75%+ of Snorkel's Senior SWE-Bench, and AI judges grade 2-3x too generously versus humans."
tags: ["evaluation", "benchmarks", "test-time-compute", "agents"]
sourceName: "The Decoder"
sourceUrl: "https://the-decoder.com/uks-ai-security-institute-finds-standard-benchmarks-systematically-underestimate-what-ai-agents-can-actually-do/"
sources:
  - title: "AISI: fixed compute budgets underestimate agent capability"
    url: "https://the-decoder.com/uks-ai-security-institute-finds-standard-benchmarks-systematically-underestimate-what-ai-agents-can-actually-do/"
  - title: "Snorkel Senior SWE-Bench: agents graded as senior engineers"
    url: "https://senior-swe-bench.snorkel.ai/"
  - title: "Remote Labor Index: AI judges grade 2-3x too generously"
    url: "https://the-decoder.com/ai-agents-can-now-complete-16-percent-of-freelance-jobs-at-pro-quality-up-from-2-5-percent-eight-months-ago/"
draft: false
---
## What happened

In a study published 2026-07-03, the [UK's AI Security Institute (AISI)](https://the-decoder.com/uks-ai-security-institute-finds-standard-benchmarks-systematically-underestimate-what-ai-agents-can-actually-do/) tested frontier models across seven benchmarks and found that standard agent evals cap test-time compute — the token budget an agent is allowed to burn on a task — while performance is still climbing with more of it. Raising the budget tenfold (one million to ten million tokens) [lifted software-engineering success rates by about 25 percent](https://the-decoder.com/uks-ai-security-institute-finds-standard-benchmarks-systematically-underestimate-what-ai-agents-can-actually-do/) and math scores by roughly 22 percent, and stretched the frontier time horizon from about two hours to 14 hours. AISI concludes capability is a curve over compute, not a fixed score.

## Why it matters

If your benchmark hands the agent a fixed budget, the number you read is the floor, not the ceiling — and newer models benefit disproportionately from extra compute, so a fixed cap makes real progress look flatter than it is. AISI measured the doubling rate of cyber-task capability as roughly 60 percent steeper than fixed-budget estimates suggested. Under-measuring capability means under-planning for it.

> Cut the budget while the curve is still climbing, and the score tells you the minimum, not the maximum.

## The catch

More compute is not a universal lever, and a single number is not the only thing benchmarks get wrong. AISI found extra tokens help most where an agent can verify its own work (running code, testing an exploit) and barely move medical tasks, which plateau early. Two same-week benchmarks add the other failure modes: Snorkel's [Senior SWE-Bench](https://senior-swe-bench.snorkel.ai/), posted 2026-07-01, evaluates agents on under-specified real pull requests and finds top models [fail over 75 percent](https://senior-swe-bench.snorkel.ai/) of tasks, with Claude Opus 4.8 leading at 24 percent. The [Remote Labor Index](https://the-decoder.com/ai-agents-can-now-complete-16-percent-of-freelance-jobs-at-pro-quality-up-from-2-5-percent-eight-months-ago/) from the Center for AI Safety and Scale Labs found AI judges rate work two to three times too generously, because fair grading means opening files in professional software — exactly what agents do worst. Evaluate at multiple compute budgets, on realistic tasks, with humans grading.

[Evaluation](/guide/evaluation/)
