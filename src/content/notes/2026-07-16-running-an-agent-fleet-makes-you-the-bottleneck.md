---
title: "Running an agent fleet makes you the bottleneck; an org chart pulls you out"
date: 2026-07-16
summary: "Two engineers running personal fleets of coding agents landed on the same fix — a scoped role hierarchy plus file-based state — because one human's attention doesn't scale past a few parallel agents."
takeaways:
  - "Run several agents at once and you silently become their scheduler, memory, and reviewer; give the fleet a real role hierarchy so context flows down in scoped slices and only top-level results ever reach you."
  - "Move agent state out of the context window into per-entity handoff files; when the window fills, reset and let the agent re-read its own files instead of compacting, so work survives a crash."
  - "The failures you hit scaling a fleet — orchestrators doing work, OOM from stacked sessions, colliding credentials, lost in-flight jobs — are the compute, secrets, and scheduling problems distributed systems already solve."
tags: ["architecture-and-orchestration", "agent-fleet", "orchestration", "context-management"]
sourceName: "KRAFTON"
sourceUrl: "https://www.youtube.com/watch?v=4kYl2_mqmnQ"
sources:
  - title: "KRAFTON's Kyle Jaejun Lee on running a personal agent fleet across three machines"
    url: "https://www.youtube.com/watch?v=4kYl2_mqmnQ"
  - title: "Snapchat's Jeffrey Lee-Chan on a specialized-orchestrator dev setup"
    url: "https://www.youtube.com/watch?v=9arM9b7JgOo"
draft: false
---
## What happened

In a talk published 2026-07-08, [Kyle Jaejun Lee of KRAFTON described](https://www.youtube.com/watch?v=4kYl2_mqmnQ) the system he uses every day — "not a demo I spun up for the talk" — to run a fleet of AI coding agents across a MacBook and two always-on headless Linux boxes. His first bottleneck was himself: with five or six live agent contexts open in tmux panes, [he had become](https://www.youtube.com/watch?v=4kYl2_mqmnQ) "the scheduler, deciding who does what," the memory holding what each was doing, and the reviewer checking all of it. His fix was to stop treating agents as a flat pile and [organize them into a real hierarchy](https://www.youtube.com/watch?v=4kYl2_mqmnQ) — CEO, VP, manager, worker — where context flows down in scoped slices and only top-level results reach him. A [talk published 2026-07-11 by Snapchat's Jeffrey Lee-Chan](https://www.youtube.com/watch?v=9arM9b7JgOo) makes the same move from the orchestrator's side: keep its context focused on specs, goals, and task history rather than letting CLAUDE.md files, skills, and tool details consume it.

## Why it matters

Your attention doesn't scale past a few parallel agents. [Lee's list of failures](https://www.youtube.com/watch?v=4kYl2_mqmnQ) as he scaled — orchestrators doing work instead of delegating, too many panes to read, out-of-memory from stacked sessions, credentials colliding across workspaces, a laptop dying and wiping in-flight jobs — are not agent problems. They are the compute, secrets, and scheduling problems distributed systems already answer.

## How it works

1. **Scope context by role.** Each entity is its own agent with its own scoped context and approval boundary; plans flow down, results flow up.
2. **Put state in files, not the window.** Every entity gets a disk workspace holding its mission, status, and a handoff folder — the work product, not trapped in one model.
3. **Reset, don't compact.** When the window fills, [Lee clears the context completely](https://www.youtube.com/watch?v=4kYl2_mqmnQ) and lets the agent re-read its own handoff files, so work survives a crash.
4. **Gate every plan.** Any layer that wants to act blocks until he approves it from one web inbox.

> "I'm not running agents anymore. I've become the scheduler, the memory, and the reviewer."

## The catch

This is one engineer's hand-rolled control plane, and [Lee is candid](https://www.youtube.com/watch?v=4kYl2_mqmnQ) that the hard parts still unsolved — cross-machine consistency, secure credential handoff, resource scheduling — "are the questions Kubernetes already answers." His own plan is to rebuild the orchestration layer on top of Kubernetes rather than reinvent compute, secrets, and tools. Treat the pattern as a working stopgap, not a platform.

[Architecture & Orchestration](/guide/architecture-and-orchestration/)
