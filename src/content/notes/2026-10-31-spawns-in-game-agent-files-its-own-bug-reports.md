---
title: "Spawn's in-game agent files its own bug reports, and an hour without a ship is a SEV-0"
date: 2026-10-31
summary: "Spawn closes its production feedback loop by having its in-game AI assistant file bugs straight to an agent that triages them, and it treats a missed hourly ship as its most severe incident."
takeaways:
  - "If your agents have to wait for a human to notice and relay production faults, the slowest part of your loop is the human, so give the product a way to report its own bugs to the agents that fix them."
  - "Spawn's in-game assistant, Savi, files bug reports itself, and an agent sorts each one into fix, won't-fix, or intentional design that needs a decision."
  - "Spawn treats an hour without a production ship as a SEV-0, partly because an agent can only keep a few hours of work in its head."
tags: ["observability", "feedback-loops", "incident-response", "continuous-deployment"]
domain: observability
sourceName: "Simon Willison's Weblog"
sourceUrl: "https://simonwillison.net/2026/Oct/29/how-i-built-the-most-ai-pilled-company-in-the-world/"
sources:
  - title: "Building a multiplayer game world with autonomous Fable-class models (Simon Willison's Weblog)"
    url: "https://simonwillison.net/2026/Oct/29/how-i-built-the-most-ai-pilled-company-in-the-world/"
  - title: "What we're building (Spawn)"
    url: "https://www.spawn.co/about"
upstream: "aidailybrief/2026-10-30"
draft: false
---

## The Takeaway

An agent can only fix a fault quickly if the fault reaches it without a human in between, so a product's own bug reports should go straight to an agent that triages them.

## The details

- On 2026-10-29, [Simon Willison linked](https://simonwillison.net/2026/Oct/29/how-i-built-the-most-ai-pilled-company-in-the-world/) Jacob Sansbury's account of Spawn, a multiplayer game platform. Agents change live code and ship to production hourly, and token spend is reported at over $3 million a month.
- Per [Sansbury's account](https://simonwillison.net/2026/Oct/29/how-i-built-the-most-ai-pilled-company-in-the-world/), the in-game assistant Savi files bugs herself. An agent sorts each report into a real bug, a won't-fix, or intentional design that needs a human decision. The fix usually reaches the user within an hour, with a message in the same chat.
- About 60% of the work [starts from a production error, a Savi bug report](https://simonwillison.net/2026/Oct/29/how-i-built-the-most-ai-pilled-company-in-the-world/), an unusual log entry, or a feature request. When a monitor or log alert fires, it starts or wakes an agent that owns the incident. The team deliberately breaks things to test these paths.
- An hour without a ship is [treated as a SEV-0](https://simonwillison.net/2026/Oct/29/how-i-built-the-most-ai-pilled-company-in-the-world/), their most severe incident level, because unshipped changes pile up and "an agent can only keep a few hours of work in its head." Broken changes roll back in about 30 seconds.
- [Spawn's about page](https://www.spawn.co/about) tells players to report bugs with the game link, what they did, what happened and what they expected, and their device. It also says Savi can report problems herself.

## Why it matters

Most teams still rely on a person to turn a production fault into a task an agent can work on, and that relay sets their time to repair. A step the sources don't spell out: products without an in-app agent can get part of the way by sending structured error reports and alerts to a triage agent that can open fixes. These figures come from the founder and haven't been audited. Willison says he finds it hard to picture this approach on software where failures carry higher stakes.

[Observability](/guide/observability/)
