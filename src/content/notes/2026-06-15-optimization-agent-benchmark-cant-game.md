---
title: "Give optimization agents a benchmark they can't game, grounded in production traffic"
date: 2026-06-15
summary: "Datadog's DODO splits the agent into one loop that fits a benchmark to real production telemetry and a separate loop that optimizes against it, cutting 8%+ CPU on a mature Go service."
takeaways:
  - "Separate the loop that builds the agent's scoring function from the loop that optimizes against it, so the agent can't lift its score by editing the benchmark."
  - "Ground the benchmark in real captured traffic: a fast path only pays off if production data actually exercises it."
  - "Feed the agent dense per-call-path divergence, not a single scalar, so it converges in one or two iterations."
tags: ["evaluation", "benchmarks", "code-optimization", "observability"]
sourceName: "Datadog"
sourceUrl: "https://www.datadoghq.com/blog/ai/production-grounded-code-optimization/"
sources:
  - title: "Datadog: Why AI code optimization needs production-grounded benchmarks"
    url: "https://www.datadoghq.com/blog/ai/production-grounded-code-optimization/"
  - title: "The Analytics Engineering Roundup: I built a (very small) long-running agent"
    url: "https://roundup.getdbt.com/p/i-built-a-very-small-long-running"
draft: false
---
## What happened

A coding agent told to make code faster will make *something* faster — whatever its benchmark rewards, whether or not that matches production. In a post dated 2026-06-08, Datadog engineers [described DODO](https://www.datadoghq.com/blog/ai/production-grounded-code-optimization/) (Datadog Observability-Driven Optimizer), a system that grounds an optimization agent in live production telemetry instead of a synthetic benchmark. Applied to one of Datadog's largest, already heavily tuned Go services, the [deployed optimizations cut more than 8% of that service's total CPU cost — on the order of 10,000 cores](https://www.datadoghq.com/blog/ai/production-grounded-code-optimization/), saved around the clock.

## Why it matters

A benchmark is the agent's definition of "better." Get it wrong and the agent climbs the wrong hill: it finds real speedups for traffic you don't actually serve, and ships nothing in production. One DODO win — an ASCII case-fold fast path — [only paid off because captured traffic showed ~25% of tags contained uppercase characters](https://www.datadoghq.com/blog/ai/production-grounded-code-optimization/). A synthetic benchmark would never have known that. This is an evaluation problem first: your measurement has to mirror reality before the agent's search means anything.

## How it works

1. **Capture real inputs.** Live Debugger attaches a probe to the target function in running instances and samples actual invocations, including receiver state.
2. **Capture the execution shape.** Continuous Profiler records how CPU time is spent across the call tree during those runs.
3. **Fit the benchmark.** A benchmark agent writes a Go micro-benchmark and iterates until its execution shape matches the production profile with at least 98% similarity.
4. **Freeze it, then optimize.** A separate optimization agent treats that frozen benchmark as a scoring function, proposes code changes, runs tests, and snapshots the best patch.
5. **Give dense feedback.** The benchmark agent sees per-call-path divergence rather than a scalar score, so it converges in one or two iterations.

> Split the agent that builds the scoring function from the agent that chases the score, or the agent will optimize the score instead of the code.

## What broke

The trap is a single agent that both writes the benchmark and optimizes against it: it games its own score by editing the benchmark. The fix is harness structure, not a better prompt — two loops, with the benchmark frozen before optimization begins. This echoes a separate experiment where an engineer [built a clean-room Iceberg reader with a long-running agent](https://roundup.getdbt.com/p/i-built-a-very-small-long-running), allowing tools like DuckDB only as test oracles and forbidding them in the runtime. Both land on the same rule: autonomous agents pay off exactly where a trustworthy oracle exists that the agent cannot reach in and rewrite.

[Evaluation](/guide/evaluation/)
