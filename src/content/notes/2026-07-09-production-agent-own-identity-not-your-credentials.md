---
title: "Vercel, AWS, and Prime Radiant give their agents a separate short-lived identity"
date: 2026-07-09
summary: "Vercel, AWS, and Prime Radiant all converge on the same rule for agents near production: run under a distinct identity, stay read-only, and grant only a short-lived capability scoped to the one approved action."
takeaways:
  - "Don't let a production agent inherit your permissions: give it its own identity, keep it read-only by default, and grant a short-lived capability scoped to the single action you approved."
  - "Attribution matters as much as least privilege: a separate principal means every change records who the agent is versus who directed it, so a confused sub-agent's actions are never indistinguishable from yours."
  - "Run agent-generated code in an ephemeral, isolated copy of the project before it touches production, and scope every data query to the requesting user's own records."
tags: ["access-and-identity", "least-privilege", "non-human-identity", "agent-permissions"]
sourceName: "Vercel"
sourceUrl: "https://vercel.com/blog/vercel-agent"
sources:
  - title: "Vercel Agent: an agent you can let near production"
    url: "https://vercel.com/blog/vercel-agent"
  - title: "Production-ready ecommerce MCP server on Bedrock AgentCore"
    url: "https://aws.amazon.com/blogs/machine-learning/building-and-connecting-a-production-ready-ecommerce-mcp-server-using-amazon-bedrock-agentcore-and-mistral-ai-studio/"
  - title: "Prime Radiant: some new agentic patterns"
    url: "https://blog.fsck.com/2026/07/05/new-patterns/"
draft: false
---
## What happened

On 2026-07-08 Vercel [expanded access to Vercel Agent](https://vercel.com/blog/vercel-agent), an agent that investigates incidents, reviews PRs, and rolls back bad deploys. The write-up leads with a permissions model, not features. The agent [runs as its own principal](https://vercel.com/blog/vercel-agent), `vercel-agent`, read-only by default; to act, it proposes a plan and receives a short-lived capability scoped only to that plan, then reverts to read-only. Every call is checked against the capability, token scope, and team permissions. Vercel says it has [run this on its own production for months](https://vercel.com/blog/vercel-agent).

## Why it matters

Most agents act as you: connect one and it inherits your full access for the session, so [one bad prompt has the same blast radius as you do](https://vercel.com/blog/vercel-agent). Treating the agent as a non-human identity with its own least-privilege scope contains both agent and human mistakes, and makes every action attributable to who asked versus who acted.

## How it works

1. **Own identity.** The agent is a distinct principal, so its actions are always distinguishable from yours.
2. **Read-only default.** It can investigate freely but cannot change production without an explicit approved plan.
3. **Plan-to-permission.** Approval mints a capability scoped to that one plan; the agent reverts to read-only afterward.
4. **Isolated execution.** Generated code runs in [Vercel Sandbox, an ephemeral Firecracker microVM](https://vercel.com/blog/vercel-agent) copy of the project, tested before a PR surfaces.

> The safe default isn't a smarter agent — it's one that can only do the single thing you just approved.

## The catch

The same principle shows up independently: AWS's [Bedrock AgentCore ecommerce MCP server](https://aws.amazon.com/blogs/machine-learning/building-and-connecting-a-production-ready-ecommerce-mcp-server-using-amazon-bedrock-agentcore-and-mistral-ai-studio/) uses two-layer JWT auth to descope every query to the requesting customer's own data, and Prime Radiant gives agents [their own accounts via a proxy that swaps placeholder tokens for real credentials](https://blog.fsck.com/2026/07/05/new-patterns/) ([discussed on HN](https://news.ycombinator.com/item?id=48832340)). But Prime Radiant is blunt that the underlying lethal-trifecta problem is structurally unsolved: compartmentalization reduces risk, it doesn't remove it. And Vercel's model is platform-native — the pattern generalizes, but you have to build the identity, scoping, and sandbox yourself.

[Access & Identity](/guide/access-and-identity/)
