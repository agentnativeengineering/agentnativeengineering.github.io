---
title: "When the license is the only cap"
date: 2026-05-31
summary: "A flat per-seat AI license caps requests-per-model, never aggregate tokens — so it silently becomes the only control on a fleet of uncapped seats, invisible until the invoice."
tags: ["autonomy-cost-control", "cost"]
draft: false
---

A flat enterprise AI license feels like a SaaS seat: one predictable price per employee. It isn't. The seat caps requests-per-model; it never caps the tokens behind them. As elvex put it in a [May 19 post on enterprise token cost](https://www.elvex.com/blog/ai-token-cost-enterprise-budget-control): "Same seat. 1,000x cost difference. No visibility until the bill arrives." One employee summarizing email runs maybe 10K tokens a day; another running agentic code generation on the same license runs 10 million. The license sees neither. It governs the wrong axis.

That gap is now landing as real invoices. A consultant told Axios — relayed by [Tom's Hardware on May 29](https://www.tomshardware.com/tech-industry/artificial-intelligence/mystery-company-accidentally-blew-usd500-million-on-claude-in-a-single-month-failed-to-put-usage-limit-on-licenses-for-employees) — that one client reportedly spent roughly half a billion dollars on Claude in a single month after failing to put usage limits on per-employee licenses. Treat the figure as one unnamed account of an unnamed client, not a confirmed fact. The mechanism, though, is the durable part: thousands of seats each ran long-context agentic work on the top model with no oversight, and the spend was the *sum of many independently-uncapped seats*, each behaving normally. Nothing looped or crashed. The license was the only governor, and it didn't govern tokens.

The fix is an org-level control plane between every seat and the model provider, and it ships in open source. Route each seat or team through an AI gateway carrying its own budget. [LiteLLM's proxy](https://docs.litellm.ai/docs/proxy/users) sets a `max_budget` per virtual key, user, or team and **denies the request once the key crosses its budget** — a budget-exceeded error, distinct from the HTTP 429 it returns on TPM/RPM rate limits. Either way the check runs at the gateway, before the call reaches the provider, not on a dashboard after. [agentgateway](https://github.com/agentgateway/agentgateway) and [Envoy AI Gateway](https://github.com/envoyproxy/ai-gateway) enforce equivalent per-key, per-model token caps at the proxy layer (Envoy as usage-based token rate limiting).

Two more moves close the loop. Default the cheap model and require an explicit grant to reach the most expensive one, so trivial tasks can't silently run on the top tier. And emit per-key spend so a runaway seat shows up as a throttled key in minutes — attribution back to the seat is what turns the monthly surprise into a live signal. A flat vendor license buys access; it was never built to bound spend. Put the cap where the token is bought.

[Autonomy, Cost & Control](/guide/autonomy-and-cost/)
