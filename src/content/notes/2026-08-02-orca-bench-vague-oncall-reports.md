---
title: "The best root-cause score fell from 58.7% to 10% as the incident report got vaguer"
date: 2026-08-02
summary: "Cornell Tech, Traversal, and Columbia released ORCA-bench, which drops five frontier coding agents into a live OpenTelemetry microservice system and scores their root cause analysis across 1,079 tasks."
takeaways:
  - "Score an oncall agent at the report vagueness and the fault count your real pages carry — moving between the benchmark's difficulty tiers swings RCA accuracy by 19 to 50 points."
  - "The authors' verdict is that frontier agents are not yet ready for oncall — the best RCA accuracy is 25.3% on medium tasks and 10.0% on hard."
  - "Difficulty bundles two things at once: hard prompts say only that users are reporting site issues, and they average 4.41 ground-truth root causes against 2.00 on easy ones."
tags: ["evaluation", "oncall", "incident-response", "benchmarks"]
sourceName: "arXiv — ORCA-bench: How Ready Are Language Model Agents for Oncall? (Cornell Tech, Traversal, Columbia)"
sourceUrl: "https://arxiv.org/abs/2607.28545"
draft: false
---
## What happened

On 30 July 2026, Cornell Tech, Traversal, and Columbia published [ORCA-bench](https://arxiv.org/abs/2607.28545), which puts coding agents in a "production-fidelity oncall setting": the [OpenTelemetry Astronomy Shop, six days of load, "metrics in Prometheus, logs in OpenSearch, and traces in Jaeger queried through Grafana"](https://arxiv.org/html/2607.28545v1), plus source code and 1,079 tasks. Across five frontier agents, ["the best RCA Accuracy is 25.3% on Medium-difficulty tasks (the realistic-input setting) and 10.0% on Hard—a gap that remains even with Claude Fable 5"](https://arxiv.org/abs/2607.28545). Their verdict: ["Frontier agents are not yet ready for oncall."](https://arxiv.org/html/2607.28545v1)

## Why it matters

That headline is an all-or-nothing metric — [RCA accuracy is the "fraction of tasks for which the agent named every listed plausible feature flag as a root cause"](https://arxiv.org/html/2607.28545v1). The collapse tracks the report you hand over. On easy tasks, where the prompt names the symptom, [the best model "only manages 58.7% RCA accuracy"](https://arxiv.org/html/2607.28545v1); on hard ones [the best model "achieves only 10.0% RCA accuracy and 37.6% RCA depth"](https://arxiv.org/html/2607.28545v1).

## How it works

1. **Difficulty moves the prompt and the fault count together.** [Hard tasks show only "users are reporting site issues" and average 4.41 ground-truth root causes against 2.00 for easy ones — an "increase in hypothesis space" that costs accuracy](https://arxiv.org/html/2607.28545v1).
2. **Vagueness is expensive.** [Reducing input context "drops RCA accuracy by 19–50 percentage points across models"](https://arxiv.org/html/2607.28545v1).
3. **Telemetry alone is not enough.** [Removing source code "drops RCA accuracy by 9–16 percentage points"](https://arxiv.org/html/2607.28545v1).
4. **A model grades it, spot-checked by hand.** [GPT-5.4 judges the reports; on the smaller Verified subset they were "independently re-graded by hand," agreeing at Cohen's κw = 0.90](https://arxiv.org/html/2607.28545v1).

> An oncall score says as much about how vague the page was and how many things broke at once as it does about the agent.

## The catch

The authors flag the ceiling themselves: results come from [a "curated 50 GB / six-day testbed with tasks investigated in isolation on a system whose code and instrumentation are public"](https://arxiv.org/abs/2607.28545), and they warn the real gap is ["likely larger than what we measure"](https://arxiv.org/html/2607.28545v1). Read the interest, too: six of the eight authors list [Traversal, which sells "the AI SRE for the enterprise"](https://traversal.com), and "general coding agents can't do this yet" favors purpose-built tooling. The paper's release URL (hub.harborframework.com/datasets/orca-bench/ORCA-bench) 404s today, so the artifact is unreachable.

[Evaluation](/guide/evaluation/)
