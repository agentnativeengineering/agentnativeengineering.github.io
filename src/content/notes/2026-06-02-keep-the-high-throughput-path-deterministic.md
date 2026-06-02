---
title: "Keep the high-throughput path deterministic"
date: 2026-06-02
summary: "Nubank runs fraud detection on a declarative rule engine and lets the AI only help a human write the rules — at ~5M requests a minute, the model never decides a transaction."
takeaways:
  - "At scale, the safest place for an AI model is out of the live decision. Nubank handles about 5M fraud checks a minute, and the model — which can confidently produce wrong output (hallucinate) — never decides a single transaction."
  - "A deterministic rule engine makes the call; the AI only helps a human write the rules. An analyst describes a rule in plain English, the model drafts it, a human reviews it, and the engine runs it."
  - "The reusable shape is a rule engine for the fast, auditable decisions plus an AI helper for the slow work of authoring rules. Keep the part that can be wrong off the live path."
tags: ["scope-simplicity", "fraud"]
draft: false
---

**Why this matters to you.** Put an AI model in the live path of a fast, high-stakes decision and one hallucination — a confident wrong answer — can hurt real people: here, block millions of customers from spending their own money. A digital bank serving 131M+ customers does the opposite. At [AWS FSI NYC 2026](https://www.youtube.com/watch?v=w11pQcGT-u4) last week, Nubank's fraud team (they call it Defense IO) said they run fraud detection at ~5M requests a minute and keep the model out of those decisions — because a wrong call "might be stopping millions of customers from being able to do transactions."

**What they actually do.** The live decision is made by a *declarative policy engine* — software that runs a list of rules ("if this, then block") you write in a small rule language. The rules live in a database instead of in code, so changing one ships without a deploy; in the same talk, Nubank said more than 50 of their rule-writers now ship a rule in 1–2 days instead of 3–5 weeks.

When they brought AI in, they drew a hard line. They *could* have let a model write those rules, but stayed declarative because, as they said in the talk, "we don't want to rely on a model hallucinating." So they built an AI helper that reads the existing rules and rule-language docs and drafts a rule from an analyst's plain-English description. The chain stays human-shaped: an analyst describes the rule; the model drafts it; a human reviews it; the engine runs it. Before any rule enforces, it is first replayed against real traffic in *shadow mode* (run silently, decisions logged but not enforced). The model never touches the live decision.

**The idea underneath.** A rule engine gives the same answer every time, and you can read why it fired; a model can promise neither — exactly what you need when 5M decisions a minute touch real money. When the model only drafts, a hallucination costs a wasted draft a human catches before it reaches a customer.

**What to do.** You don't need Nubank's in-house rule language. Tomorrow: take one decision your code makes today and write it as an explicit rule in an open policy engine — [OPA/Rego](https://github.com/open-policy-agent/opa) or [Cedar](https://github.com/cedar-policy/cedar) — so it is auditable and lives outside any model. Before it enforces, replay it against logged real traffic in shadow mode and diff the decisions; that check is the cheapest to copy and needs none of Nubank's scale. Add the AI authoring helper later: expose your rule docs over [MCP](https://github.com/modelcontextprotocol/modelcontextprotocol) (Model Context Protocol, the open standard that lets an AI tool call your systems) in an [`AGENTS.md`](https://github.com/agentsmd/agents.md) file (plain markdown an AI coding tool reads on startup), so the model can draft a rule for a human to review. Nubank built theirs from prompts, an MCP server, and skills, and endorses no tool; OPA/Rego, Cedar, and AGENTS.md are this note's open analogues.

[Scope & Simplicity](/guide/scope-and-simplicity/)
