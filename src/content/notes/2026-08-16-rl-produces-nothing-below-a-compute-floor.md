---
title: "RL produces nothing below a compute floor, so small-scale tests reject it"
date: 2026-08-16
summary: "Jerry Tworek argues some methods, reinforcement learning among them, produce no signal at all below a compute floor, so the validate-small-then-scale protocol quietly discards the ones that need scale."
takeaways:
  - "A small-scale trial that shows zero signal is not evidence a method is bad; some methods, reinforcement learning among them, produce nothing at all until compute and base-model capability cross a floor."
  - "Ross Taylor's Meta team reached internal state-of-the-art on math with PPO against checkable rewards, but never got o1-style thinking-longer behaviour, which he attributes to a weaker base model, too little RL compute, and a 4K context window."
  - "Before discarding a result, name the axis you under-scaled: base-model capability, training compute, or context length."
tags: ["model-selection", "reinforcement-learning", "scaling", "post-training"]
sourceName: "YouTube"
sourceUrl: "https://www.youtube.com/watch?v=mEkvl-6tjBQ"
sources:
  - title: "Jerry Tworek on testing AI architectures at small scale"
    url: "https://www.youtube.com/watch?v=mEkvl-6tjBQ"
  - title: "Ross Taylor & Chengxi Taylor, Scaling to Long Horizons (General Reasoning)"
    url: "https://www.youtube.com/watch?v=2bvtay8wGYI"
  - title: "Sara Hooker on Adaption Labs and the Auto Scientist beta"
    url: "https://www.youtube.com/watch?v=XEd_SRVHBgU"
draft: false
---
## What happened

In a talk published 2026-08-03, Jerry Tworek of Core Automation argued that ["a lot of architectural research happened at too small scale for too long time"](https://www.youtube.com/watch?v=mEkvl-6tjBQ). The usual protocol is to try a new architecture on a small dataset in a low-compute regime and scale it only once it proves itself. His counterexample is reinforcement learning (RL, training a model against a reward signal instead of fixed examples), which "needs a baseline of ability to only start working". Below that level it shows nothing, so he suspects many architectures also "need a baseline of compute to even start doing anything interesting".

## Why it matters

Anyone picking a model or a post-training recipe for an agent runs the same cheap-first protocol, and a small trial that returns zero is not evidence the approach is wrong. Ross Taylor's [account of an unpublished Meta recipe](https://www.youtube.com/watch?v=2bvtay8wGYI) is the concrete case: continued pretraining of Llama 2 on math and science, then PPO (proximal policy optimization) against automatically checkable rewards. It reached internal state-of-the-art on math, but never produced the o1 and R1 behaviour of thinking longer at answer time and catching its own mistakes, which he attributes to weaker base models, less RL compute, and 4K context windows.

> A zero at small scale can mean the method is wrong, or only that you are below the level where it starts to work.

## The catch

Neither account is a controlled experiment, and "it needs more compute" is also the standard excuse for a method that simply does not work; Taylor's attribution is his own reading of a recipe that was never published. The discipline that survives is naming the axis you under-scaled before you discard a result: base-model capability, RL compute, or context length, in his case. Sara Hooker's [Auto Scientist](https://www.youtube.com/watch?v=XEd_SRVHBgU) pushes from the other side, beating in-house research staff largely by searching a far broader space of architectures, sizes and hyperparameters at once.

[Model Selection](/guide/model-selection/)
