---
title: "Replay vs. snapshot: two ways to make an agent crash-proof"
date: 2026-05-22
summary: "Long-running agents need durable execution, and the two roads — replaying an event history or snapshotting the machine — solve different halves of the problem."
tags: ["durable-execution", "reliability"]
draft: false
---

On 20 May 2026, DBOS shipped its monthly update: 144K writes per second on a single Postgres server, a `register_queue` API, Go SDK v0.14, and Java SDK v0.8 ([DBOS, May 2026](https://www.dbos.dev/blog/new-in-dbos-may-2026)). The pitch underneath matters for agents: when a durable agent crashes mid-run, DBOS resumes from the last checkpointed step, and "completed model calls and tool invocations are replayed from the database rather than re-executed, so you don't burn extra tokens" ([Pydantic AI + DBOS](https://pydantic.dev/articles/pydantic-ai-dbos)).

That is the whole problem. An agent that runs for hours outlives the process it started in: the machine gets redeployed, the network drops, the LLM stalls. ZoomInfo hit this — HTTP is fine for one- to two-second responses but a "terrible protocol" once a request runs past 30 seconds, and a deploy that drains a pod kills any long-running agent on it ([ZoomInfo @ Replay 2026](https://www.youtube.com/watch?v=mQ_7yuOcBB0)). So you need durable execution. There are two roads.

**Replay** re-runs your code from the start against a saved event history, skipping work it already did. Every LLM call and tool call becomes a journaled step. The catch is determinism: the code must make the same decisions given the same history, so anything non-deterministic — API calls, LLM invocations — must live in activities that run off the replay path ([Temporal docs](https://docs.temporal.io/workflow-definition)). OpenAI took this road, scaling Temporal 60x across 2025 to orchestrate agent harnesses, sandbox provisioning, and data pipelines ([OpenAI @ Replay 2026](https://www.youtube.com/watch?v=65CCmktUA8I)). Apple uses Temporal's Swift SDK to drive its OS release process, surviving network partitions and infrastructure failures ([Apple @ Replay 2026](https://www.youtube.com/watch?v=LaU7z77cc2s)).

**Snapshot/restore** captures the running machine instead of replaying it. CRIU freezes a process from user space; Firecracker microVMs freeze the whole VM — cloned repos, dev servers, in-memory state — and restore it in a couple hundred milliseconds. Trigger.dev ships this, compressing a 512MB machine snapshot to ~14MB ([Trigger.dev](https://www.youtube.com/watch?v=svCnShDvgQg)).

The useful frame from Eric Allam: separate **context durability** from **execution durability**. Context is the append-only message log — system messages, tool results, assistant turns — and any database makes it durable across code versions. Execution is the running machine, and a log cannot rebuild a Chrome instance or a warm file system; that needs a snapshot. Replay is strong on context and rigid about determinism; snapshot is strong on execution and indifferent to how your code is written.

Pick by which half hurts more. Most production agents need both.

See [Durable Execution](/guide/durable-execution/).
