---
title: "Before you correct an agent's PR, rewind and fix the harness"
date: 2026-07-09
summary: "On an AI Native Dev fireside, Steve Yegge and Tessl's Drew Nox describe building 'software factories' and a rule that treats the harness, not the diff, as the unit of work."
takeaways:
  - "When an agent's PR is wrong, change a skill, test, or lint rule so the mistake can't recur, then re-run — before you leave a single line comment."
  - "In a software factory you aren't reviewing one diff, you're maintaining the system that writes every diff, so a one-off correction fixes nothing downstream."
  - "Push determinism to the edges with hooks and CI that block bad commits, keep the orchestration itself stochastic, and add evals so obsolete rules retire when the next model lands."
tags: ["harness-engineering", "software-factories", "code-review", "agents"]
sourceName: "AI Native Dev — Steve Yegge & Drew Nox fireside (You'll Never Write Code the Same Way Again)"
sourceUrl: "https://www.youtube.com/watch?v=Rgwu9nF_Xok"
draft: false
---

## What happened

On a [July 6, 2026 fireside on the AI Native Dev channel](https://www.youtube.com/watch?v=Rgwu9nF_Xok), Steve Yegge and Tessl's Drew Nox described building "software factories" — the point, in Yegge's framing, where you stop pair-programming with an agent and start "writing code that's making agents do stuff." Nox said Tessl enforces one rule before anyone comments on an agent's pull request: first rewind and change a skill, add a test, or adjust the architecture so the mistake can't recur, then re-run. Only if it fails a second time do you leave a line comment.

## Why it matters

You aren't reviewing a diff; you're maintaining the harness that writes every diff. A line comment fixes one PR; a harness change fixes the whole class of mistakes. Yegge's own tools push the same idea: [Gas Town](https://steve-yegge.medium.com/welcome-to-gas-town-4f25ee16dd04) is "an industrialized coding factory," and [beads](https://github.com/gastownhall/beads) replaces "messy markdown plans with a dependency-aware graph" so work isn't silently lost across a swarm.

## How it works

1. **Make work a first-class entity.** Tickets, todos, and reviews are the substance you push through the swarm — track them in a graph so the factory can't quietly redo or drop them.
2. **Repair the harness first.** The first response to a bad PR is a change to the skills, tests, or architecture the agent operates under.
3. **Put determinism at the edges.** They said orchestration code turned brittle and got ripped out; durable determinism lives in hooks and CI that block a commit or session-stop when tests or lint fail.
4. **Pair pedantic rules with evals.** Cheap lint like "module X must never import from module Y" catches agents inverting architecture — tie each rule to an eval so it retires when a better model makes it dead weight.

> In a factory, the durable fix is always to the harness that produces the diffs.

## The catch

Two practitioners are describing their own in-progress systems — Yegge builds Gas Town and beads, Nox is pitching Tessl — rather than a controlled result. "No human-written code" and "no human code review" remain stated goals with no shipped guarantee behind them, and the determinism they praise at the edges is exactly what they tore out of the middle. Copy the shape as a bet you keep testing.

[Harness Engineering](/guide/harness-engineering/)
