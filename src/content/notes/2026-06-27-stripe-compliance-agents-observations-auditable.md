---
title: "How Stripe's compliance agents force tool outputs back as observations to stay auditable"
date: 2026-06-27
summary: "Stripe decomposes each compliance review into a DAG of sub-tasks and grounds its ReAct agents by feeding every tool result back as an observation, so the system's reasoning stays traceable for regulators."
takeaways:
  - "In a regulated, auditable agent, never let the model assert a fact it didn't fetch: force every tool output back into the loop as an observation so each conclusion traces to retrieved evidence, not invented text."
  - "Decomposing a complex review into a directed acyclic graph of small sub-tasks makes each step gradeable, retryable, and loggable."
  - "Agentic workloads are network-bound and long-running, not compute-bound like ML inference, so Stripe stood up a dedicated agent service plus an LLM proxy for fallbacks and prompt caching."
tags: ["architecture-and-orchestration", "react", "compliance", "auditability"]
sourceName: "AWS Machine Learning Blog"
sourceUrl: "https://aws.amazon.com/blogs/machine-learning/production-grade-ai-agents-for-financial-compliance-lessons-from-stripe/"
sources:
  - title: "Production-grade AI agents for financial compliance: Lessons from Stripe (AWS + Stripe)"
    url: "https://aws.amazon.com/blogs/machine-learning/production-grade-ai-agents-for-financial-compliance-lessons-from-stripe/"
draft: false
---
## What happened

In a post dated 2026-06-26, AWS and Stripe engineers [described](https://aws.amazon.com/blogs/machine-learning/production-grade-ai-agents-for-financial-compliance-lessons-from-stripe/) how Stripe runs a production agent system for financial-compliance reviews on Amazon Bedrock — now [over 100 agents](https://aws.amazon.com/blogs/machine-learning/production-grade-ai-agents-for-financial-compliance-lessons-from-stripe/). Each review is broken into bite-sized sub-tasks arranged as a directed acyclic graph (DAG — a flow where each step depends only on prior steps, with no loops). The agents use ReAct (reasoning-and-acting: the model alternates a thought, an action, and an observation) and report a 26% cut in median review handling time with over 96% helpfulness ratings, while human experts keep final decisions.

## Why it matters

In a regulated domain, a hallucinated fact isn't just wrong — it's an audit failure. Stripe's analysts were spending [up to 80% of their time](https://aws.amazon.com/blogs/machine-learning/production-grade-ai-agents-for-financial-compliance-lessons-from-stripe/) gathering documentation instead of assessing risk, so an agent that fabricates findings would erase the gain. The architectural answer is to make every conclusion trace to retrieved evidence.

## How it works

1. **Decompose.** Split the review into small sub-tasks on a DAG so each step is gradeable and retryable.
2. **Ground in observations.** [Force tool outputs back into the loop as observations](https://aws.amazon.com/blogs/machine-learning/production-grade-ai-agents-for-financial-compliance-lessons-from-stripe/) so reasoning is anchored to fetched data, not invented text.
3. **Log everything.** Record every action, decision, and rationale for regulatory audit.
4. **Bound cost.** An LLM-proxy microservice abstracts model access and uses prompt caching, cited at a [60% input-token reduction](https://aws.amazon.com/blogs/machine-learning/production-grade-ai-agents-for-financial-compliance-lessons-from-stripe/).

> If the model can't act on a fact it didn't observe, it can't confidently invent one — and the audit trail writes itself.

## The catch

Grounding curbs hallucination but doesn't remove the human. Stripe positions agents as [assistants supplying pre-fetched research](https://aws.amazon.com/blogs/machine-learning/production-grade-ai-agents-for-financial-compliance-lessons-from-stripe/) while expert reviewers retain decision authority — the 96% helpfulness rating is a help-the-human metric, not autonomous-decision accuracy. Treat the agent's output as a sourced first draft a human signs off on, not a verdict.

[Architecture & Orchestration](/guide/architecture-and-orchestration/)
