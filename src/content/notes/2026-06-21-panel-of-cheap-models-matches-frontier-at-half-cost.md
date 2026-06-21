---
title: "A panel of cheap models matched a frontier model at half the cost"
date: 2026-06-21
summary: "OpenRouter's new Fusion API routes a prompt across a panel of cheaper models, judges their answers, and synthesizes one — scoring within a point of Fable 5 on Perplexity's DRACO benchmark at roughly half the cost."
takeaways:
  - "A panel of cheap models, routed and synthesized well, can match a frontier model at roughly half the cost — value per token is captured at the orchestration layer."
  - "Stop defaulting every call to the biggest model; route by cost, latency, and task, then synthesize one answer."
  - "Treat \"cheaper than one big model\" as a claim to verify on your own tasks before banking on it."
tags: ["architecture-and-orchestration", "model-routing", "orchestration", "token-cost"]
sourceName: "Decrypt"
sourceUrl: "https://decrypt.co/371711/openrouter-fusion-claude-fable-level-ai-cheap"
sources:
  - title: "Decrypt: OpenRouter Fusion — Claude Fable-level AI, cheap"
    url: "https://decrypt.co/371711/openrouter-fusion-claude-fable-level-ai-cheap"
  - title: "TechCrunch: The token bill comes due"
    url: "https://techcrunch.com/2026/06/05/the-token-bill-comes-due-inside-the-industry-scramble-to-manage-ais-runaway-costs/"
  - title: "PlayerZero: Tokens Aren't Spend. They're Leverage."
    url: "https://playerzero.ai/resources/the-real-lesson-from-openai-top-customers-tokens-arent-spend-theyre-leverage"
  - title: "RDWorld: From token maxxing to production value"
    url: "https://www.rdworldonline.com/how-can-organizations-move-ai-from-token-maxxing-to-production-value/"
draft: false
---
## What happened

On 2026-06-20, [Decrypt reported](https://decrypt.co/371711/openrouter-fusion-claude-fable-level-ai-cheap) that OpenRouter shipped Fusion, an API that fires one prompt at a panel of models in parallel, has a judge reconcile where they agree and conflict, then a synthesizer write one grounded answer. On Perplexity's DRACO benchmark a budget panel — Gemini 3 Flash, Kimi K2.6, and DeepSeek V4 Pro — scored 64.7%, within a point of Fable 5's 65.3%, at [roughly half the cost](https://decrypt.co/371711/openrouter-fusion-claude-fable-level-ai-cheap).

## Why it matters

The reflex of sending every call to the biggest model and counting tokens burned is backwards. [PlayerZero argues](https://playerzero.ai/resources/the-real-lesson-from-openai-top-customers-tokens-arent-spend-theyre-leverage) the strongest teams "distribute workloads across multiple models and vendors based on cost, latency, context length, and task complexity." With [token usage projected to grow 24x by 2030](https://techcrunch.com/2026/06/05/the-token-bill-comes-due-inside-the-industry-scramble-to-manage-ais-runaway-costs/), value per token — set at the routing layer — is the number that decides who can afford to operate.

## How it works

1. **Fan out.** Send the prompt to several models chosen by cost, latency, and task complexity rather than one default frontier model.
2. **Judge.** A judge model reconciles where the panel agrees and contradicts, surfacing the gaps a single answer hides.
3. **Synthesize once.** One grounded answer is produced server-side, so you pay for one result instead of five raw streams.

> Value per token is set at the orchestration layer — in how you route a prompt across models.

## The catch

Fusion is OpenRouter describing its own product on a single benchmark, and a panel adds latency plus a synthesis step that can smear one model's sharp answer into a blander average. Treat "cheaper than one big model" as a claim to [verify on your own tasks](https://www.rdworldonline.com/how-can-organizations-move-ai-from-token-maxxing-to-production-value/) before you bank on it.

[Architecture & Orchestration](/guide/architecture-and-orchestration/)

