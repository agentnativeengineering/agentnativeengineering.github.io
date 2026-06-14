---
title: "The outbox is what keeps a durable task from vanishing"
date: 2026-06-03
summary: "Temporal's internal state-machine SDK commits every state change and the async tasks it spawns in one database transaction — the outbox pattern — so a crash between the two can't strand work; the same property would keep an agent's queued follow-ups from being lost (this note's extension)."
takeaways:
  - "The risky moment in any durable system is the gap between saving new state and saving the work that state should trigger. Temporal's internal state-machine SDK writes both in one database transaction, so a crash in that gap loses both instead of stranding a saved state whose follow-up work quietly disappeared."
  - "A durable system splits the task you mean from the queue row that runs it. The logical task is the intent (retry this call in 30s); the physical task is the row a background worker reads and runs, and keeping them apart lets you regenerate lost queue rows and check a task is still valid before it fires."
  - "An agent that schedules its own follow-ups would need the same property. Persist the next step and the agent's new state together, or a crash can leave an agent that thinks it acted but never queued the action."
tags: ["durable-execution", "reliability"]
draft: true
---

**Why this matters to you.** If your agent updates its state and then schedules a follow-up action — retry this tool call in 30s, resume after a human approves — there is a dangerous instant between those two writes. Crash there, and you have saved state that believes the action is queued while the action was never written. The work vanishes and nothing tells you. At [Replay 2026](https://www.youtube.com/watch?v=mbufeWyd3JM), Temporal engineers Roy Berman and Yichao Yang showed Chasm, an internal SDK they built to speed up Temporal's own server development; in it, Yang named the reliability fix outright — the *outbox pattern*. The agent framing here is this note's extension; the talk never mentions agents.

**What they actually do.** Chasm shipped enabled by default in the open-source server release v1.31.0, though the durable primitives built on it are not yet on by default ([temporalio/temporal v1.31.0 release notes](https://github.com/temporalio/temporal/releases/tag/v1.31.0)). The reliability core is one rule Yang stated in the talk. An *asynchronous task* is a delayed or external action a state change must trigger — the 30s retry, the resume-after-approval. When a component moves to a new state and that move spawns such tasks, *"the new state and more asynchronous tasks need to be persisted into database in one transaction to avoid partial failure."* That is the [transactional outbox pattern](https://microservices.io/patterns/data/transactional-outbox.html): write the business state and the messages-to-send in the same commit, then let a background process drain them. Either both land or neither does — never a saved state with lost work.

Two extra choices keep the outbox from misfiring in practice. First, they split a *logical task* (the intent — "retry this call in 30s") from the *physical task* (the row a background worker reads and runs); the talk noted this lets them regenerate physical tasks from logical ones if the queue logic has a bug. Second, every task runs through a *validator* before execution, so the stale 30s retry — if its deadline was already updated — is dropped instead of firing wrongly.

**The idea underneath.** Durability means saving your state and the work that state still owes — both land or the promise is broken. Any system that decides something and then must remember to act on it has this two-write hazard, and a single transaction is the cheapest honest fix.

**What to do.** Find one place where your agent saves state and then schedules a follow-up as two steps. Tomorrow, collapse them into one transaction with an open outbox: [Dapr's transactional outbox](https://docs.dapr.io/developing-applications/building-blocks/state-management/howto-outbox/) (Apache-2.0) commits a state change and a pub/sub message together, so the queued step can't outlive its own state. If you run on Temporal, the durable-execution engine already does this for you. Temporal did not recommend Dapr or any agent stack; Dapr is the open-source example this note chose to show the same pattern.

[Durable Execution](/guide/durable-execution/)
