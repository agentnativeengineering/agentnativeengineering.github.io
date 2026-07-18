---
title: "Computer-use agents scored zero on every blank-canvas task"
date: 2026-07-18
summary: "On Cua's verifiable KiCad benchmark, the top model finished just 6 of 25 tasks and every model scored zero on blank-canvas tasks — evidence that computer-use agents edit existing GUIs but can't yet build from scratch."
takeaways:
  - "Benchmark a computer-use agent on real GUI work and expect it to edit existing designs at best: on Cua's verifiable KiCad eval, the top model passed 6 of 25 tasks and all seven models scored zero on blank-canvas tasks."
  - "Use verifiable, task-completion evals on the actual application your agent drives, not curated demos, and test the from-scratch case separately from the editing case."
  - "An accessibility-tree-first driver that escalates to pixel clicks only when needed reportedly raised pass rate from 62% to 80% at 34% fewer tokens."
tags: ["evaluation", "computer-use", "benchmarks", "gui-agents"]
sourceName: "Cua"
sourceUrl: "https://github.com/trycua/cua/blob/main/blog/computer-use-2-ai-engineer-worlds-fair.md"
sources:
  - title: "Cua: Computer-Use 2.0 (AI Engineer World's Fair recap)"
    url: "https://github.com/trycua/cua/blob/main/blog/computer-use-2-ai-engineer-worlds-fair.md"
draft: false
---
## What happened

In a post dated 2026-07-13 recapping their [Computer-Use 2.0 talk at the AI Engineer World's Fair](https://github.com/trycua/cua/blob/main/blog/computer-use-2-ai-engineer-worlds-fair.md), [Cua](https://github.com/trycua/cua/blob/main/blog/computer-use-2-ai-engineer-worlds-fair.md) released Cua Bench, a cross-platform *verifiable* benchmark (tasks graded by an objective checker, not a model's opinion), and ran seven frontier models on real electrical-engineering tasks in KiCad, an open-source circuit-board design tool. "GPT-5.5 completed the most tasks, 6 of 25." The leaderboard "was flat across all seven" — no model cleared roughly 30% reward, and ["blank-canvas tasks scored zero across all seven models."](https://github.com/trycua/cua/blob/main/blog/computer-use-2-ai-engineer-worlds-fair.md)

## Why it matters

Demos make computer-use agents look like GUI control is solved. A verifiable benchmark on genuine domain work says otherwise: the best model finishes under a quarter of tasks, and every model failed completely when asked to build from an empty document. All the wins came from editing an *existing* design. If your eval is a curated screen-recording, you will not see that ceiling until your users hit it.

## How it works

Cua's fix for the harness, the Cua Driver, changes how each action is issued:

1. **Try accessibility first.** It issues an [accessibility-tree action](https://github.com/trycua/cua/blob/main/blog/computer-use-2-ai-engineer-worlds-fair.md) — the OS's structured map of on-screen controls — before touching pixels.
2. **Escalate to a click.** If that fails, it falls back to a pixel click at the target coordinate.
3. **Raise windows last.** It only brings a window to the foreground as a final resort, so it never seizes the screen from the user.

Cua said in the talk this accessibility-first order [raised the driver's pass rate from 62% to 80% at 34% fewer tokens](https://github.com/trycua/cua/blob/main/blog/computer-use-2-ai-engineer-worlds-fair.md).

> No agent reached a third of the full-completion ceiling; the leaderboard was flat across all seven.

## The catch

The scores measure editing, not creation, and the 62-to-80% figures come from Cua's own talk on their own harness — treat them as vendor numbers until an independent run reproduces them. The durable signal: build verifiable, task-completion evals on the actual application your agent operates, and check the from-scratch case separately.

[Evaluation](/guide/evaluation/)
