---
title: "A valid token let an agent delete 200 workloads in 90 seconds"
date: 2026-08-30
summary: "An Anthropic CI engineer's cleanup agent deleted ~200 workloads in 90 seconds using a perfectly valid token, and his fix is to rate-limit agent writes by blast radius in infrastructure rather than widen or narrow permissions."
takeaways:
  - "Bound every state-changing agent action with a refilling budget sized by blast radius, such as deletes per hour per resource kind per namespace, because a token only answers yes or no and never how much."
  - "Split verbs by failure mode: give the agent the actions that fail loudly and keep the ones that fail silently behind a human."
  - "Enforce limits in infrastructure, not prompts, and have the proxy stamp the agent's identity, since an identity the agent claims for itself can be renamed to reset every limit."
tags: ["autonomy-and-cost", "blast-radius", "rate-limiting", "agent-permissions"]
sourceName: "AI Engineer"
sourceUrl: "https://www.youtube.com/watch?v=rbjWzZK2LU0"
sources:
  - title: "Sachin Malhotra (Anthropic): Give the Agent a Budget, Not a Token"
    url: "https://www.youtube.com/watch?v=rbjWzZK2LU0"
  - title: "Tushar Jain (Docker): a runtime layer for agent autonomy"
    url: "https://www.youtube.com/watch?v=zaGyGgLW3SM"
draft: false
---
## What happened

In a talk published 2026-08-22, Sachin Malhotra, an engineer on Anthropic's CI team, [walked through an agent cleaning up after itself](https://www.youtube.com/watch?v=rbjWzZK2LU0): one stage of its pipeline evaluated to nothing, the filter dropped out, and the selector matched everything. It deleted roughly 200 workloads belonging to 20 engineers in 90 seconds, some of them long-running training jobs that may not have been checkpointed. As he put it, the agent "technically hadn't done anything that I couldn't have done. It was using my token after all."

## Why it matters

A token is a boolean: permitted or not, never how much, how fast, or whether it can be undone. Malhotra's read is that the failure wasn't the model, it was unbounded power over work nobody was watching closely. Docker's Tushar Jain reports the same shape in a talk published 2026-08-20: agents [expand their scope at runtime and cross trust boundaries mid-task](https://www.youtube.com/watch?v=zaGyGgLW3SM), as when his nightly repo-analysis agent posted a private report as a GitHub PR.

## How it works

1. **Asymmetric verbs.** The agent holds actions that fail loudly, like unskipping a test; humans keep the ones that fail silently, like skipping one.
2. **Refilling write budgets.** An admission webhook caps deletes per hour, per resource kind, per namespace, sized by blast radius, and its bypass flag refuses to run inside an agent session.
3. **Trip wires over allow lists.** Watch aggregate behaviour and page on anomalies; most cases get fixed with a line or two of added context.
4. **Stamped identity.** A per-session proxy returns 403 on a budget violation and stamps identity itself; an agent that claims identity in a header can rename itself and reset every limit.

> Ask the undo test of every agent write: if the change rolls back and the blast radius is acceptable, log it; if not, it needs a second key held by a human.

## The catch

Prompts and markdown context are cheap to change but are only advice; the proxy and admission webhook are what actually refuse. Jain's is a vendor talk demoing Docker's own sandboxing, so take his pillars as framing, not measured results.

[Autonomy, Cost & Control](/guide/autonomy-and-cost/)
