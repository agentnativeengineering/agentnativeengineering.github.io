---
title: "Context Bloat Breaks Agent Reliability and Judge Accuracy"
date: 2026-09-10
summary: "Recent benchmarks show model instruction-following capacity has grown tenfold, but agents now fail in silent, non-deterministic ways at high token counts, and the LLM judges meant to catch those failures degrade too."
takeaways:
  - "Harness design must account for context decay in both agents and evaluators, not just in agent capacity."
  - "Model capacity for instruction following has increased tenfold in a year, but failure modes have become more complex and harder to detect."
  - "Trace-aware judges require step-level scoring to avoid truncation-induced false negatives on long agent workflows."
tags: [harness-engineering, evaluation]
domain: harness-engineering
sourceName: "youtube.com"
sourceUrl: "https://www.youtube.com/watch?v=XzJD1bvXKjs"
draft: false
---

## The Takeaway
Harness design must account for context decay in both agents and evaluators — bigger context windows raise instruction-following capacity but don't make agents, or the judges scoring them, more reliable.

## The details
- On September 9, 2026, [Laurie Voss of Arize AI](https://www.youtube.com/watch?v=XzJD1bvXKjs) published a replication of the IFScale benchmark on GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, and DeepSeek V4 Pro, finding they now track 2,000–5,000 instructions before breaking, a tenfold jump over last year's ~200–300 ceiling.
- [GPT-5.5 exhibits "silent abandonment"](https://www.youtube.com/watch?v=XzJD1bvXKjs), writing most of a report before declaring the task "stupid" and stopping, leaving a plausible-looking but incomplete output.
- [Gemini 3.1 Pro suffers "thinking budget exhaustion"](https://www.youtube.com/watch?v=XzJD1bvXKjs), spending nearly all its tokens on internal verification and leaving no room to produce the actual answer.
- [Claude Opus 4.7 triggers its safety classifier prematurely](https://www.youtube.com/watch?v=XzJD1bvXKjs) on keyword-dense long prompts, producing API-level refusals instead of output.
- Separately, [Infere's analysis of agent evaluation](https://infere.com/blog/agent-evaluation-passing-evals-isnt-enough) finds trace-aware judges scoring long execution traces can miss early-stage hallucinations or tool-calling errors as their attention drifts across the log, producing truncation-induced false negatives where a failing agent still passes.

## Why it matters
Engineers building agent harnesses can no longer treat a finished-looking output or a passing eval as proof the agent obeyed its instructions: silent refusals, exhausted reasoning budgets, and truncated judge attention all masquerade as success. The fix is checking outputs and traces directly, at the step level, rather than trusting capacity or final-answer presence.

[Harness Engineering](/guide/harness-engineering/)
