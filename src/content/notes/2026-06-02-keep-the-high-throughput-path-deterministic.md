---
title: "Keep the high-throughput path deterministic"
date: 2026-06-02
summary: "Nubank runs fraud detection on a declarative policy engine and scopes the agent to a thin authoring edge — at 5M requests a minute, the model never decides a transaction."
tags: ["scope-simplicity", "fraud"]
draft: false
---

At [AWS FSI NYC 2026](https://www.youtube.com/watch?v=w11pQcGT-u4) last week, Jairo and Daniel from Nubank's Defense IO team walked through how they run fraud detection for one of the world's largest digital banks: 131M+ customers, ~500M events/day, 5M requests/minute, 100TB/day, and around 400 policies and models in production. The interesting part is what they deliberately did *not* hand to a model.

The high-throughput decision path is a [declarative policy engine](https://www.youtube.com/watch?v=w11pQcGT-u4) running a policy DSL out of a registry. Policies are stored as database entities rather than code, so a rule change ships without a deploy cycle — more than 50 defense builders now ship a new policy in 1–2 days instead of 3–5 weeks.

When they adapted this to "the AI era," they were explicit about scope. They said you *could* use an agent to write the rules they used to write in Clojure, but they chose to [stay declarative](https://www.youtube.com/watch?v=w11pQcGT-u4) "because we don't want to rely on a model hallucinating," and to keep more control. The agent surface they did build — a Defense IO agent plugin combining prompts, an MCP server, and skills — lets a business analyst author or edit a rule in natural language from any AI client. But the model's output is still a declarative rule that the deterministic engine executes. The model never sits in the 5M-req/min decision path.

The mechanism is simple: move the nondeterministic component off the critical path. A model that can hallucinate never touches a transaction decision; it only drafts a declarative rule that an auditable, reviewable engine accepts or rejects. Nubank flags the live risk directly — a rule authored the wrong way "might be stopping millions of customers from being able to do transactions" — which is exactly why the deciding path stays bounded. Each authored rule is replayed against production traffic in shadow mode before it goes live. A side benefit they note: declarative config over generated code means less token volume.

You don't need Nubank's proprietary DSL to draw this line. The deterministic decision layer is what open policy engines already give you — [OPA/Rego](https://github.com/open-policy-agent/opa) and [Cedar](https://github.com/cedar-policy/cedar) for declarative, auditable decisions outside the model. The thin authoring edge is the [Model Context Protocol](https://github.com/modelcontextprotocol/modelcontextprotocol) plus the [AGENTS.md](https://github.com/agentsmd/agents.md) and skills convention — the same prompts-plus-MCP-plus-skills shape Nubank describes.

Agents still earn their place here — at the slow, human-facing authoring edge, with output constrained to an artifact a deterministic engine validates and runs. The agent's blast radius is bounded to "proposed a rule," which a human and a shadow run gate before it decides anything.

[Scope & Simplicity](/guide/scope-and-simplicity/)
