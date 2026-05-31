---
title: "Durable Execution"
order: 2
question: "When the process dies mid-run, can your agent resume at the right step without re-charging, re-emailing, or re-deploying what it already did?"
summary: "Long-running agents have to survive crashes, deploys, and multi-day waits for a human, and resume without re-running completed side effects. The mature answer is checkpoint and replay, borrowed from durable-execution engines built long before the model labs."
principles:
  - "Checkpoint every step; resume from the failure point, never from zero."
  - "Make each side effect exactly-once and replay-safe, so a recovered run re-runs nothing it already did."
  - "Let durable waits, not held connections, carry the hours or days an agent spends blocked on a human."
tools:
  - "Temporal"
  - "Restate"
  - "DBOS"
  - "Inngest"
  - "LangGraph checkpointers"
updated: 2026-05-30
draft: false
---

A web request lives and dies in milliseconds. An agent runs for minutes, hours, or days, makes
hundreds of tool calls with real-world consequences, and sits idle while a human decides what to
do next. Somewhere in that span a worker will crash, a deploy will roll, or a model call will tell
you to retry in fifteen minutes. Durable execution is the machinery that lets the run pick up
exactly where it left off instead of starting over.

## The pain

Anthropic, describing the system behind Claude's Research feature, names the problem directly:
*"Agents are stateful and errors compound… When errors occur, we can't just restart from the
beginning: restarts are expensive and frustrating for users."* Their agents instead *"resume from
where the agent was when the errors occurred."*

The two forces that break a naive runtime are time and deploys. ZoomInfo found that HTTP is *"a
terrible protocol once you eclipse 30 seconds"*: cell phones drop, load balancers and CDNs sever
the connection, and a long agent has nothing to come back to. Worse, *"deploys [are] a big problem
with running agents"* — draining a pod that runs a one-minute-plus agent terminates it mid-flight.
This raises the cost of every crash: Trigger.dev notes the horizon of useful agent runs is roughly
doubling every several months (a figure from METR's time-horizon research), so the longest runs are
both the most valuable and the most expensive to lose.

## What production demands

- **Checkpoint progress and resume from the failure point.** A recovered run MUST reconstruct its
  state and continue at the next incomplete step, not the first.
- **Make side effects exactly-once.** Re-running a recovered workflow MUST NOT charge a card,
  send an email, or deploy a second time. Wrap each effect so it is cached once executed and skipped
  on replay. (See [Reliability](/guide/reliability/) for idempotency keys.)
- **Carry long waits durably.** Human-in-the-loop steps that block for hours or days MUST use
  durable timers and signals, not an in-memory sleep or a held connection.
- **Survive deploys.** Long-lived runs SHOULD outlive a rollout — route new versions behind a flag
  or a version-pinned queue so in-flight agents finish on the code they started on.
- **Let the engine own retries.** Retries with backoff and per-step timeouts SHOULD be a property
  of the runtime, not hand-rolled in agent code.

## Patterns

Trigger.dev's Eric Allam frames two roads to durability, and they are separable. **Replay**
(the Temporal lineage) records an append-only event history and re-executes the function on
recovery, skipping every step already in the journal; the price is that code outside a step MUST be
deterministic, or replay diverges. **Snapshot/restore** captures the live machine — memory,
processes, open files — via CRIU or a Firecracker microVM, then restores it when the next message
arrives, which buys durability across a multi-hour wait without keeping the VM running. Allam splits
the agent into **context durability** (the append-only log of messages and tool results, durable in
any database or object store) and **execution durability** (the running machine). Replay handles the
first cleanly; snapshot is how he handles the second. Pick the approach per concern.

Underneath both is the same shift ZoomInfo and OpenAI describe: agents force *"the move to become
stateful compute."* A plain cron or Airflow DAG schedules tasks but gives you no per-step durable
replay of arbitrary code mid-run, so it cannot resume an agent loop where it stopped.

## Open-source building blocks

- **Replay engines:** [Temporal](https://temporal.io/), [Restate](https://restate.dev/),
  [DBOS](https://www.dbos.dev/), [Inngest](https://www.inngest.com/) — event-history replay,
  resume-at-step, durable timers, exactly-once activities.
- **Agent-loop checkpointing:** LangGraph checkpointers persist graph state after every node
  transition (Redis-backed reads land in single-digit milliseconds, fast enough for a voice agent's
  barge-in rollback).
- **Execution snapshots:** Firecracker microVM / CRIU snapshot-restore for machine state a log
  cannot capture.

ZoomInfo wrapped existing LangGraph agents in a Temporal workflow without rewriting them, gaining
back-pressure and independent deploys; the durability lives around the agent rather than inside it.

## Demo → production

```text
demo         while not done:           # state in a local variable
                step()                # one crash, deploy, or 3-day wait and the run is gone

production  durable workflow:         # event history persisted per step
                call_llm() as step    # kill -9, redeploy, or wait_for_human(days) …
                charge() as step      # … resume at the next incomplete step,
                wait_for_signal()     #    re-running no completed side effect
```

## Verify it

Kill the worker mid-run, then redeploy under it. Does the agent resume at the correct step, run
each side effect exactly once, and pick up a wait that was pending — without re-charging,
re-emailing, or re-deploying anything already done? Then add a human-approval step and leave it for
a day; the run should still be waiting, not timed out. For the memory that outlives a single run,
see [Memory & Context](/guide/memory-and-context/); for who is allowed to resume a paused run, see
[Access & Identity](/guide/access-and-identity/).

## Sources

- Anthropic — [How we built our multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system) ("agents are stateful and errors compound"; "resume from where the agent was"; restarts are expensive).
- Eric Allam, Trigger.dev — [Two Roads to Durable Agents: Replay vs. Snapshot](https://www.youtube.com/watch?v=svCnShDvgQg) (replay vs snapshot/restore; CRIU and Firecracker; context durability vs execution durability; the move to stateful compute; agent horizon doubling every 4–7 months).
- Ryan Stevens, ZoomInfo @ Replay 2026 — [Running Agents on Async Task Queues While Keeping Them Real-Time](https://www.youtube.com/watch?v=mQ_7yuOcBB0) (HTTP fails past 30s; deploys kill running agents; Temporal task queues for back-pressure and per-agent deploys; LangGraph wrapped unchanged).
- Venkat Venkataramani, OpenAI @ Replay 2026 — [Temporal, OpenAI, and the Future of Agentic AI](https://www.youtube.com/watch?v=65CCmktUA8I) (durable orchestration for long-running agent workflows with real-world consequences; separating the harness from compute; sandbox orchestration).
- Edward Blake — [Voice Agent with LangGraph + Redis Checkpointing](https://www.youtube.com/watch?v=uinxJe-AaBU) (checkpoint after every node transition; roll back to a prior checkpoint on interruption; sub-millisecond Redis reads).
- Sydney & Victor, LangChain @ Interrupt 26 — [Introducing Managed Deep Agents](https://www.youtube.com/watch?v=LdQpoK2TzSo) (harness around the model; human-in-the-loop and long-run context management as first-class harness jobs).
- [Temporal — Understanding Temporal](https://docs.temporal.io/evaluate/understanding-temporal) ("if the Worker crashes, the Worker uses the Event History to replay the code and recreate the state").
- [Restate documentation](https://docs.restate.dev/) (automatically stores completed steps and resumes on failure; durable timers; exactly-once semantics).
- [DBOS — Durable execution for crashproof AI agents](https://www.dbos.dev/blog/durable-execution-crashproof-ai-agents) (replay, resume-at-step, no duplicate side effects).
