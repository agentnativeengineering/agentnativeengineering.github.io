---
title: "Multiple agent copies coordinate by reading each other's live KV cache"
date: 2026-09-07
summary: "Yandex Research shows that letting agent instances share and reschedule the raw KV cache — rather than talking through an orchestrator — recovers real-time coordination and think-while-talking behavior without retraining a model."
takeaways:
  - "Multiple copies of an LLM agent can coordinate by reading and writing a shared KV cache directly, skipping the external orchestrator that normally relays messages between separate model calls."
  - "Splitting inference into separate input, reasoning, and output streams lets an agent keep listening and thinking while it's already responding, cutting time-to-first-token up to 80x in Yandex's tests."
  - "The trick works on off-the-shelf pretrained models at the serving layer with no retraining, but batching, memory management, and speculative decoding all get harder as a result."
tags: ["architecture-and-orchestration", "kv-cache", "inference-runtime", "multi-agent"]
sourceName: "Yandex Research"
sourceUrl: "https://research.yandex.com/blog/the-kv-cache-as-an-agent-runtime"
sources:
  - title: "The KV cache as an agent runtime — Yandex Research"
    url: "https://research.yandex.com/blog/the-kv-cache-as-an-agent-runtime"
draft: false
---
## What happened

On 2026-09-05, [Yandex Research](https://research.yandex.com/blog/the-kv-cache-as-an-agent-runtime) argued that agent interactivity — handling new input mid-computation, revising a plan without restarting, coordinating perception, reasoning, and action running at different speeds — is largely an inference-runtime problem, not something that needs a retrained model. Their move: treat the KV cache (the stored attention keys/values a transformer keeps so it doesn't reprocess earlier tokens) as active, shared execution state instead of a passive decoding speedup. Using a property of RoPE (rotary position embedding, the scheme that bakes token position into the attention math as a rotation), they can give different "consumers" different causal views over the same physical cache blocks, with no re-encoding or copying.

## Why it matters

Coordinating several agent instances normally means an external orchestrator relaying messages between separate model calls, and making a model "keep listening" while it thinks normally means fine-tuning new streaming behavior. Both cost engineering or training budget. This claims a chunk of that back for free, at the serving layer, on models nobody retrained.

## How it works

1. **Shared memory, no message bus.** Hogwild! Inference lets several copies of the same model write into and read from one shared attention memory, so they divide work, check each other's output, or continue each other's reasoning directly.
2. **Split streams.** AsyncReasoning separates one model's inference into concurrent input, private-reasoning, and public-output streams, so it keeps listening and thinking while it's already talking — up to 80x lower time-to-first-token (TTFT) and up to 12x lower perceived latency.
3. **Multimodal, unmodified.** The same trick runs a Qwen3.5-based agent that plays Doom by continuously ingesting video frames while reasoning and acting, no additional training.
4. **Toward production.** Yandex is building an SGLang-based server with named streams and block-local positions to make this a first-class serving abstraction.

> A meaningful share of agent interactivity can be recovered at the inference-runtime layer, without touching model weights.

## The catch

The authors are upfront: batching gets harder, memory management gets more complex, and it interacts awkwardly with speculative decoding and multimodal encoding. This is a research direction with a serving stack still under construction, meant to complement model- and orchestration-level fixes, not replace them.

[Architecture & Orchestration](/guide/architecture-and-orchestration/)
