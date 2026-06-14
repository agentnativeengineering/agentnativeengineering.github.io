---
title: "The retry storm that killed a recovery twice"
date: 2026-06-01
summary: "Azure OpenAI's 2026-05-29 outage came back from the dead when a trusted internal service with no rate limiting hammered the recovering backend with retries — your agent is that trusted service in someone else's postmortem."
tags: ["reliability", "retry-storm"]
domain: "reliability"
sourceName: "azure.status.microsoft"
sourceUrl: "https://azure.status.microsoft/en-us/status/history/"
draft: false
---

The dangerous moment in a provider outage is not the first overload. It's the recovery. Azure OpenAI's multi-region degradation on 2026-05-29 makes the point with first-party evidence.

Microsoft's [post-incident review](https://azure.status.microsoft/en-us/status/history/) (status history, tracking ID **LYXT-C1Z**, 2026-05-29) lays out the timeline. Impact began at **09:39 UTC** when a load-balancing backend hit high memory utilization and started shedding and slowing requests — intermittent 5XX and elevated latency across regions. At **12:17 UTC** Microsoft deployed a global mitigation, disabling the unstable component, and the system began to recover.

Then it died again. At **14:40 UTC** the incident re-occurred: a sudden spike in retry traffic from a *trusted internal service that lacked sufficient rate limiting* re-overloaded the still-recovering system. The mitigation had restored capacity, and the callers' retries immediately consumed it. The recurrence was only resolved at **16:30 UTC** when that retry source was failed over to an isolated backend cluster, with full service restored at **17:05 UTC**.

That is the agent-reliability trap at provider scale. A dependency degrades, every client retries, the retries arrive correlated, and the instant the upstream comes back the backlog lands all at once and re-kills it — a thundering herd the recovering service can't distinguish from real traffic. The sharp part is the "trusted internal" framing: the herd was not a hostile flood but a first-party service whose retry behavior nobody had bounded. That's exactly the seat an agent calling a model API sits in.

The recurrence happened because the retries were uncapped, correlated, and un-isolated. Each property has a known fix, all shipping in mature open source today. **Exponential backoff with full jitter** spreads retries across time so they de-correlate ([resilience4j](https://github.com/resilience4j/resilience4j), [Polly](https://github.com/App-vNext/Polly), [tenacity](https://github.com/jd/tenacity)). A **circuit breaker** that opens on sustained 5XX reduces calls to a failing upstream while it recovers, instead of multiplying them (resilience4j, Polly). **Per-client rate caps and concurrency limits** put a hard ceiling on each caller's outbound load ([Envoy](https://www.envoyproxy.io/) retry budgets). And **bulkhead isolation** contains one workload's retries to its own resources — the exact move Microsoft made at 16:30 UTC, pushed left into your architecture.

The provider's SLA does not bound your retry behavior — that is the caller's job. Treat your agent as the trusted internal service in LYXT-C1Z, and cap its blast radius before it ships.

[Reliability](/guide/reliability/)
