---
title: "Do your agents need a durable-execution control plane, or a SQLite file?"
date: 2026-05-31
summary: "A single SQLite execution log plus Litestream-to-S3 backup gives you the whole durable-execution model — append-only log, deterministic replay, retrying activities — with no broker; the catch is a bounded async-replication data-loss window you have to size yourself."
tags: ["durable-execution", "sqlite"]
draft: false
---

Reaching for a managed durable-execution control plane — a broker, a queue, a sidecar, a separate stateful service — is the reflex for any long-running agent. It also carries a standing operational and billing cost that you keep paying whether or not your failure modes ever need it.

This week the team behind Obelisk, an open-source durable-execution engine in Rust/WASM, argued the reflex is often wrong. In ["SQLite is all you need for durable workflows"](https://obeli.sk/blog/sqlite-is-all-you-need-for-durable-workflows/) (29 May 2026), the engine's own authors lay out the core model and show it needs no broker at all. It needs three things: an **append-only execution log** that records every step before it runs, **deterministic replay** of that history to rebuild in-flight state after a crash, and **activities** — the units that carry real side effects and can be retried independently. All three fit in a single SQLite file.

For durability past one disk, they run [Litestream](https://litestream.io/), which streams the SQLite WAL to S3 continuously, so a lost volume restores from object storage instead of a database cluster. No broker, no sidecar, no separate stateful service to operate. This is runnable today rather than a claim: the [engine itself](https://github.com/obeli-sk/obelisk) is open source, with the execution log on SQLite (or Postgres).

The honest part is the ceiling, which they state plainly: Litestream replication is **asynchronous**. If the volume dies before the newest WAL frames have shipped to S3, the restore comes back missing those last writes. That is a real, bounded data-loss window — fine for many agent workloads, unacceptable for some — and it is exactly the tradeoff a managed control plane hides from you.

So the move isn't "always go single-node." It's to start from the durable-execution *model* and pick the lightest engine that covers your real failure set. For a single-node agent workload with a tolerable recovery-point objective, an SQLite log plus Litestream is a complete durable engine. Write down the async-replication loss window and confirm it fits your RPO. If it doesn't, that's your signal to move up to a synchronously-replicated store or a managed control plane like Temporal, Restate, or DBOS. Let the failure modes you can actually tolerate size the machinery, instead of defaulting to the biggest available control plane.

[Durable Execution](/guide/durable-execution/)
