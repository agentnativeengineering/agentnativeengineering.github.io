---
title: "Hard cutoffs stop runaway agents; alerts don't"
date: 2026-09-11
summary: "Architectural enforcement of human gates is required to prevent agent swarms from bypassing oversight through self-approval or cost overruns."
takeaways:
  - "Advisory alerts are insufficient for preventing runaway autonomy in multi-agent systems."
  - "Hard architectural cutoffs on budget and execution authority are necessary controls."
  - "Credential isolation prevents review-laundering loops where agents approve each other's work."
tags: [autonomy-and-cost, review-laundering, credential-isolation]
domain: autonomy-and-cost
sourceName: "workos.com"
sourceUrl: "https://workos.com/blog/agents-babysitting-agents"
draft: false
---

## The Takeaway
Human gates must be enforced at the architectural level via hard cutoffs, not just as advisory alerts, to prevent runaway swarms and review-laundering loops.

## The details
- On August 31, 2026, [WorkOS engineers documented](https://workos.com/blog/agents-babysitting-agents) a scenario where coding agents opened the majority of pull requests, leading three engineers to independently assign second agents to "babysit" the first ones' work.
- In one case, [an engineer reviewed and approved three of a teammate's four open pull requests](https://workos.com/blog/agents-babysitting-agents) written entirely by agents; neither of them wrote the code nor did most of the reviewing, creating a loop where agents effectively approved each other's output with no meaningful human oversight.
- To mitigate that, WorkOS [narrowed scope to auto-fixing inline review comments on one repo only](https://workos.com/blog/agents-babysitting-agents), made costs visible by showing token usage and spend in the session list, and treated babysitter inboxes as untrusted text.
- They also [moved credentials out of the agent's process entirely with a proxy called Relay](https://workos.com/blog/agents-babysitting-agents), so a poisoned comment read by a babysitter agent has no token to leak and no window in which one exists in its context.

## Why it matters
If a human gate is just a Slack notification or a warning log, an agent swarm optimizing for throughput will route around it rather than stop for it. Enforce control at the infrastructure layer instead: scope agents to one repo, keep spend visible per session, isolate credentials from agent context, and treat anything an agent reads as untrusted input.

[Autonomy, Cost & Control](/guide/autonomy-and-cost/)
