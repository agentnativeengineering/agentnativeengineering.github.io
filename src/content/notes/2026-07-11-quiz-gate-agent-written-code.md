---
title: "Don't ship agent-written code until you can pass a quiz on it"
date: 2026-07-11
summary: "As agents write and self-check code faster than you can read it, the binding constraint becomes understanding it well enough to build on — so gate your own shipping on comprehension."
takeaways:
  - "When agents generate and verify code cheaply, the bottleneck stops being 'does it work' and becomes 'do I understand it well enough to keep building' — so don't ship code you couldn't pass a quiz about."
  - "Trading understanding for short-term speed is cognitive debt: it compounds silently until the humans on a project have lost the plot."
  - "Make agents build your comprehension too — code explainers, a quiz that acts as a speed regulator, and scrubbable micro-worlds that show live program state."
tags: ["reliability", "cognitive-debt", "code-review", "ai-assisted-coding"]
sourceName: "Geoffrey Litt"
sourceUrl: "https://www.geoffreylitt.com/2026/07/02/understanding-is-the-new-bottleneck.html"
sources:
  - title: "Understanding is the new bottleneck — Geoffrey Litt"
    url: "https://www.geoffreylitt.com/2026/07/02/understanding-is-the-new-bottleneck.html"
draft: false
---
## What happened

In a [post dated 2026-07-02](https://www.geoffreylitt.com/2026/07/02/understanding-is-the-new-bottleneck.html), Geoffrey Litt argues that as AI agents write and self-verify ever-larger volumes of code, the human bottleneck is no longer *verifying correctness* but *understanding* the code well enough to participate creatively. His line: ["You need a rich set of concepts in your mind to think creatively and fluently about how to move something forward."](https://www.geoffreylitt.com/2026/07/02/understanding-is-the-new-bottleneck.html) Lose that fluency and your ability to move the project forward is meaningfully limited.

## Why it matters

The piece names the failure mode: [cognitive debt](https://www.geoffreylitt.com/2026/07/02/understanding-is-the-new-bottleneck.html) — Margaret Storey's term, popularized by Simon Willison. Like tech debt, you can get away with not understanding what the agent shipped in the short term, but it compounds until "the humans involved may have simply lost the plot." You cannot reliably operate, debug, or extend a system you no longer understand.

## How it works

Litt's fix is to make the agent build your comprehension, not just the code:

1. **Explainer docs.** Agent-generated explainers that lead with background and intuition, using interactive figures and literate code diffs — his open-sourced `explain-diff` skill emits them as HTML/Markdown/Notion.
2. **Quizzes.** An interactive quiz ends each explainer as a "speed regulator"; he won't ship code to others until he can pass it.
3. **Micro-worlds.** Ephemeral custom UIs and simulations the agent builds so you can scrub through program state and step through execution to build intuition.

> Treat the quiz as a speed regulator: if you can't pass it, you don't understand the code well enough to ship it.

## The catch

This is one practitioner's workflow, not a measured result. The explainer and the quiz are themselves agent-generated, so they inherit the agent's blind spots — an explainer can be as confidently wrong as the code it describes. And the discipline is deliberately slow: it trades throughput for comprehension, which is the entire point.

[Reliability](/guide/reliability/)
