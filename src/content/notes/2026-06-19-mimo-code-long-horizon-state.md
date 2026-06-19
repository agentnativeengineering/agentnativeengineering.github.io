---
title: "How Xiaomi's MiMo Code holds state across 200+ step coding tasks"
date: 2026-06-19
summary: "Xiaomi's MiMo Code keeps a stateless model coherent over hundreds of steps by offloading memory to a single-writer subagent and checkpointing well before the context window fills."
takeaways:
  - "Checkpoint long-horizon agent state at fixed fractions of the context budget (around 20/45/70%), not when the window is nearly full, so you can rebuild the window before quality decays."
  - "Move memory extraction out of the main agent loop into a separate writer subagent that owns its own token budget, so persisting state never competes with the work in progress."
  - "Keep one writer to project memory to avoid concurrent-write races, and make that memory a reviewable Markdown file you can dedupe."
tags: ["memory-and-context", "long-horizon-agents", "context-window", "checkpointing"]
sourceName: "MiMo (Xiaomi)"
sourceUrl: "https://mimo.xiaomi.com/blog/mimo-code-long-horizon"
sources:
  - title: "MiMo Code: Scaling Coding Agents to Long-Horizon Tasks"
    url: "https://mimo.xiaomi.com/blog/mimo-code-long-horizon"
draft: false
---
## What happened

A long-running coding agent — one that works for dozens or hundreds of steps without a human in the loop — eventually drifts: it forgets earlier decisions, repeats work, or runs out of room in its context window (the fixed span of tokens the model can see at once). In a [post dated 2026-06-10](https://mimo.xiaomi.com/blog/mimo-code-long-horizon), Xiaomi's MiMo team described MiMo Code, a terminal coding agent built on OpenCode and open-sourced under the MIT license, and how it keeps state coherent over "dozens or even hundreds of execution steps." Their framing: "the model itself is stateless — each call starts from a blank slate, and all continuity is provided by the runtime."

## Why it matters

If continuity lives only inside the model's window, the agent's reliability is capped by the window size. That is the core Memory & Context problem: decide on purpose what the agent remembers and what is in the window, rather than letting the window fill until quality collapses. MiMo reports the payoff: in a [double-blind A/B test](https://mimo.xiaomi.com/blog/mimo-code-long-horizon), once tasks exceed 200 steps (including multi-turn user interaction), MiMo Code's win rate rises above 65%, with MiMo Code plus their MiMo-V2.5-Pro model outperforming Claude Code on long-horizon tasks.

## How it works

1. **Treat the model as stateless.** Each call starts blank; all memory is the runtime's job, not the model's.
2. **Offload extraction to a writer subagent.** A separate subagent does the memory writing, and "does not share the main agent's attention or token budget" — so persisting state never steals room from the work.
3. **Checkpoint early, on budget fractions.** Checkpoints fire "roughly at 20%, 45%, and 70% of the configured context budget," well below the limit, so the writer can persist structured state before the window is stressed.
4. **Rebuild the window from files.** Persisted state lets the runtime reconstruct a fresh window, "allowing a logical session to extend indefinitely within bounded physical windows."
5. **Keep one writer.** A single-writer checkpointing subagent avoids concurrent writes to project memory.

> Continuity is a runtime job: a stateless model plus one writer subagent and budget-fraction checkpoints lets a logical session outlive any single context window.

## What broke

The naive fix — let the main agent summarize itself when the window gets full — fails twice: extraction competes for the same tokens it is trying to preserve, and waiting until the window is nearly full means quality has already decayed. MiMo's answer is harness engineering, not a better prompt: move extraction to an [independent writer subagent](https://mimo.xiaomi.com/blog/mimo-code-long-horizon) with its own budget, trigger it on budget fractions, and keep project memory as a reviewable Markdown file with periodic deduplication and skill-solidification jobs so the memory itself stays clean.

[Memory & Context](/guide/memory-and-context/)
