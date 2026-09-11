---
title: "Google's Antigravity Team: Test Agent Behavior, Not Just Benchmark Scores"
date: 2026-09-11
summary: "Google's Antigravity engineering guide shows why behavioral checks on tool calls catch agent failures that end-to-end benchmarks like Terminal-Bench miss."
takeaways:
  - "Behavioral evaluations that assert on intermediate execution steps, like specific tool calls, catch agent failures that composite benchmark scores obscure."
  - "A pytest example checks whether an agent actually called SEARCH_WEB for live weather data instead of answering from memory, failing immediately even if the output text looks plausible."
  - "Teams should start with dogfooding instincts, then add fast, deterministic checks for discrete actions like running local validators before declaring a task done."
tags: [harness-engineering]
domain: harness-engineering
sourceName: developers.googleblog.com
sourceUrl: https://developers.googleblog.com/the-anatomy-of-harness-engineering-how-to-evaluate-iterate-and-guard-ai-coding-agents
draft: false
---

## The Takeaway
Agent reliability depends less on composite benchmark scores and more on verifying intermediate execution steps. Google's Antigravity team demonstrates that treating agent failures as harness defects, rather than prompt issues, requires behavioral evaluations that assert on specific tool calls and file modifications.

## The details
- On [September 9, 2026](https://developers.googleblog.com/the-anatomy-of-harness-engineering-how-to-evaluate-iterate-and-guard-ai-coding-agents), the Antigravity engineering guide critiqued reliance on end-to-end metrics like Terminal-Bench, which report cards obscure root causes such as when an agent answers from memory instead of executing a required `SEARCH_WEB` call.
- A concrete example in their documentation shows a pytest assertion checking whether the agent consulted ground truth for live weather data: if the agent skips this step but produces plausible text, an end-to-end eval might pass it, while a behavioral check fails immediately.
- This approach functions like integration testing, guarding against regressions during model upgrades or schema changes.
- Teams are advised to start with dogfooding instincts, then implement fast, deterministic checks for discrete actions like running local validators before declaring completion.

## Why it matters
Shifting focus to trajectory grading lets engineers pinpoint exactly where an agent deviates from expected behavior instead of blindly tweaking prompts after a score drop. This isolates specific failure modes, such as missing clarifying questions or unverified build files, giving teams confidence that new iterations don't break core behaviors without halting development for noisy, single-run evaluations.

[Harness Engineering](/guide/harness-engineering/)
