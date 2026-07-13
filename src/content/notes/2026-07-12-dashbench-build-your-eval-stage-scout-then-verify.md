---
title: "A staged AI code reviewer caught 3x the bugs of a single pass on DoorDash's own PRs"
date: 2026-07-12
summary: "DoorDash built DashBench — a benchmark from its own historical PRs — and found a staged scout-then-verify reviewer surfaced roughly three times the real findings of a single-pass model, because production acceptance signals can't tell you what a reviewer missed."
takeaways:
  - "Benchmark an AI code reviewer on your own historical PRs, and stage it — a lightweight scout to flag suspicious areas, a heavier reviewer to verify each lead — rather than one pass."
  - "Production signals like acceptance rate can't record the bugs a reviewer missed, so you can't tell a better system from a worse one without replaying real cases and triangulating flawed labels."
  - "DoorDash's staged reviewer found 504 real findings at 53.6% weighted recall vs 164 at 30.7% for a single pass — but no single model won, and the coverage cost roughly five times the dollars and four times the latency."
tags: ["evaluation", "code-review", "agents", "benchmarking"]
sourceName: "DoorDash Engineering — How we learned to trust our AI code reviewer (DashBench)"
sourceUrl: "https://careersatdoordash.com/blog/how-we-learned-to-trust-our-ai-code-reviewer-at-doordash/"
sources:
  - title: "How we learned to trust our AI code reviewer at DoorDash (DashBench)"
    url: "https://careersatdoordash.com/blog/how-we-learned-to-trust-our-ai-code-reviewer-at-doordash/"
draft: false
---

## What happened

On [2026-07-06 DoorDash described](https://careersatdoordash.com/blog/how-we-learned-to-trust-our-ai-code-reviewer-at-doordash/) how it learned to trust its agentic code reviewer: by building an internal benchmark, **DashBench**, from roughly a thousand of its own historical PRs (a 105-case scored set), then comparing architectures on it. The winner was a **staged** design that "separates noticing from verifying" — a lead scout flags suspicious areas, deep reviewers investigate each lead — which found [504 real findings at 53.6% weighted recall, versus 164 and 30.7%](https://careersatdoordash.com/blog/how-we-learned-to-trust-our-ai-code-reviewer-at-doordash/) for a strong single-pass baseline.

## Why it matters

You can't see that gap from production signals. Acceptance rate — the metric most code-review tools optimize — only ever books true and false positives; it "can't record false negatives (bugs the reviewer missed) or true negatives (clean code where silence was the right answer)." So a single-pass reviewer can look fine in production while missing most of what matters, and you'd never know without replaying real cases.

## How it works

1. **Build the eval from your own PRs.** DashBench curates roughly a thousand of DoorDash's own changes — including benign PRs (to catch false positives) and reverted or hotfixed ones (to test for caught regressions).
2. **Stage scout, then verify.** A cheap scout notices; heavier reviewers confirm the strongest leads and drop the claims that don't survive scrutiny — mirroring how a strong human reviewer works.
3. **Triangulate; trust no single label.** Compare human annotations, the candidate findings, and an agentic judge; where they disagree, engineers re-adjudicate — "human feedback was valuable but frequently wrong."
4. **Score many metrics, run repeatedly.** Weighted precision, recall, F1, latency, and cost "all move independently," and LLM non-determinism means "a single run understates an agent's real coverage."

> You can't tell a better reviewer from a worse one by watching which comments get accepted.

## The catch

This is one team's benchmark on its own codebase, and coverage is bought at real cost — the staged reviewer's five-times dollars and four-times latency per PR buy the extra recall. "No single configuration dominates": a different mix led on recall, another on precision, and even the best reached only about 80% recall on the critical findings (the production winner caught 62.5%).

[Evaluation](/guide/evaluation/)
