---
title: "Ambiguous 1-5 quality scores stalled KDDI's RAG launch; binary pass/fail fixed it"
date: 2026-09-09
summary: "KDDI fixed a stalled RAG launch by swapping ambiguous 1-5 quality scores for binary pass/fail evaluation, cutting eval workload 75% and raising groundedness 25%."
takeaways:
  - "Replacing ambiguous 1-5 quality ratings with binary pass/fail scoring is what let KDDI automate RAG evaluation reliably enough to gate a production launch."
  - "Stratifying eval samples across a content-type grid instead of testing everything cut KDDI's evaluation workload by 75% without losing coverage."
  - "Splitting an 800+ line system prompt into on-demand ADK Skills fixed a latency bottleneck that skill-routing was causing in KDDI's Buffmee app."
tags: ["evaluation", "rag", "llm-as-judge", "google-adk"]
sourceName: "Google Cloud Blog"
sourceUrl: "https://cloud.google.com/blog/topics/customers/how-kddi-optimized-rag-performance-with-agent-development-kit/"
sources:
  - title: "How KDDI built Buffmee, a faster, reliable consumer RAG app"
    url: "https://cloud.google.com/blog/topics/customers/how-kddi-optimized-rag-performance-with-agent-development-kit/"
draft: false
---
## What happened

In a [case study published 2026-09-08](https://cloud.google.com/blog/topics/customers/how-kddi-optimized-rag-performance-with-agent-development-kit/), Google Cloud describes how KDDI, a major Japanese telecom, hit latency and hallucination problems before launching Buffmee, a consumer retrieval-augmented generation (RAG) app that grounds answers in over 100 book, magazine, and web sources. Manual testing couldn't scale to that content variety, so the team built an automated evaluation pipeline on the Gemini Enterprise Agent Platform Evaluation Service using LLM-as-a-Judge (an LLM scoring another LLM's output) and a "Rule of Hundreds" — hundreds of automated test cases instead of a handful of hand-checked examples.

## Why it matters

Automating evaluation only works if the scoring is decisive. KDDI's team found that a 1-5 quality rating left too much room for judgment calls to serve as a clean launch gate. Switching to binary pass/fail scoring, plus sampling content across a file-format and media-type grid instead of testing every item, cut their evaluation workload by 75% and raised groundedness scores (how well an answer is backed by retrieved sources) by 25%.

## How it works

1. **Score binary, not scalar.** Replace ambiguous 1-5 ratings with pass/fail so LLM-as-a-Judge output maps cleanly to a launch gate.
2. **Sample by grid, not by volume.** Stratify test cases across content-format and media-composition categories to cover variety with fewer tests.
3. **Calibrate with humans.** Product owners review edge cases to set the pass/fail threshold, not the automation alone.
4. **Split the prompt into skills.** An 800+ line system prompt causing slow Time To First Token (TTFT) was broken into modular Agent Development Kit (ADK) Skills loaded on demand, found via BigQuery Agent Analytics and an ADK log-analysis agent.

> An ambiguous rating scale is what keeps evaluation manual; a binary pass/fail is what lets it scale.

## The catch

This is a vendor case study — Google Cloud and KDDI report their own numbers (38% latency cut, ~18% TTFT gain), with no independent benchmark to check against. The specific thresholds and grid categories are tuned to Buffmee's content mix, so the reusable lesson is the pattern — binary scoring plus calibrated stratified sampling — not the exact percentages.

[Evaluation](/guide/evaluation/)
