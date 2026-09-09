---
title: "HPE Zerto's DR agent keeps raw logs on-prem, sends only prompts out"
date: 2026-09-09
summary: "HPE Zerto shipped a production disaster-recovery troubleshooting agent that keeps raw logs on-premises and lets only model inference and knowledge-base queries leave the network, cutting support cases 10% for supported workflows."
takeaways:
  - "When an agent system must stay air-gapped, split it so only the model call and knowledge lookups cross the network boundary while an orchestrator routes work to sub-agents that stay next to the raw data."
  - "HPE Zerto's Orchestrator plus ZVM/VRA sub-agents use a hub-and-spoke topology so every investigation stays traceable back through one coordinator."
  - "The team validated the system with PyTest and the Strands Agents Evals SDK before trusting it with 20% of its customer base."
tags: ["architecture-and-orchestration", "multi-agent", "mcp", "air-gapped"]
sourceName: "AWS Machine Learning Blog"
sourceUrl: "https://aws.amazon.com/blogs/machine-learning/how-hpe-zerto-built-an-agentic-troubleshooting-system-with-amazon-bedrock/"
sources:
  - title: "How HPE Zerto built an agentic troubleshooting system with Amazon Bedrock"
    url: "https://aws.amazon.com/blogs/machine-learning/how-hpe-zerto-built-an-agentic-troubleshooting-system-with-amazon-bedrock/"
draft: false
---
## What happened
In a post dated 2026-09-08, AWS and the [HPE Zerto](https://aws.amazon.com/blogs/machine-learning/how-hpe-zerto-built-an-agentic-troubleshooting-system-with-amazon-bedrock/) team described a production agentic troubleshooting system built into Zerto's disaster-recovery and cyber-resilience product. An Orchestrator agent answers routine questions directly and hands deep, log-heavy investigations to two specialized sub-agents, ZVM and VRA, running on Amazon Bedrock with the Strands Agents framework. Since its Q2 2026 release, [over 20% of Zerto customers have adopted it](https://aws.amazon.com/blogs/machine-learning/how-hpe-zerto-built-an-agentic-troubleshooting-system-with-amazon-bedrock/), and supported workflows have seen a 10% drop in support cases.

## Why it matters
Disaster-recovery infrastructure is often air-gapped or latency-sensitive, so the team couldn't just pipe raw operational data to a hosted agent. The architecture they chose, an orchestrator that stays close to routine queries and hands log-heavy digging to sub-agents that stay close to the data, is a concrete answer to a problem a lot of teams building [Architecture & Orchestration](/guide/architecture-and-orchestration/) for regulated or on-prem environments will hit: how do you get an LLM's reasoning without shipping your operational data off-site.

## How it works
1. **Triage first.** The Orchestrator handles simple queries itself and only routes to a sub-agent when an investigation needs deep log analysis.
2. **Hub-and-spoke topology.** ZVM and VRA sub-agents report back only through the Orchestrator, which keeps the system traceable and limits blast radius if one sub-agent misbehaves.
3. **Ground locally, reason remotely.** Each sub-agent pulls live environment data through on-premises MCP (Model Context Protocol) servers and pulls documentation from Bedrock Knowledge Bases; only the model inference call and knowledge base query leave the customer's network.
4. **Test before shipping.** The team used PyTest plus the Strands Agents Evals SDK to run basic, multi-turn, and dynamic evaluations of tool selection, latency, and token usage.

> Only model inference and knowledge base queries leave the on-premises network, everything else stays local.

## The catch
The 10% support-case reduction is scoped to "supported workflows," not the whole troubleshooting surface, and the post doesn't say how deep the average customer's usage goes beyond that 20% adoption figure. Bedrock Guardrails handle content and security boundaries, but the write-up doesn't detail what happens when a sub-agent's local MCP data disagrees with what the orchestrator already believes.

[Architecture & Orchestration](/guide/architecture-and-orchestration/)
