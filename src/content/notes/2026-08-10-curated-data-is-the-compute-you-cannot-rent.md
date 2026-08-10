---
title: "Curated data is the compute you can no longer rent"
date: 2026-08-10
summary: "Three talks from the same data-quality track argue the same thing: with GPUs scarce, refining the training corpus buys more model quality per dollar than adding tokens or compute."
takeaways:
  - "Before you buy more compute or shovel in more tokens for a fine-tune, cut the corpus down to what actually teaches your target task: curated data steepens the learning curve, and vendors report frontier-class results at a fraction of the training budget."
  - "There is no golden dataset. A corpus is only optimal relative to the tasks you want, so curate against your own eval set rather than a generic quality score."
  - "Curation intuitions do not transfer: Bespoke Labs found sampling more answers per question beat collecting more questions, and stronger models were not always better teachers."
tags: ["model-selection", "training-data", "data-curation", "fine-tuning"]
sourceName: "AI Engineer"
sourceUrl: "https://www.youtube.com/watch?v=_PdK6x7PQNM"
sources:
  - title: "Ari Morcos (DatologyAI): Data Quality Is the Compute Multiplier"
    url: "https://www.youtube.com/watch?v=_PdK6x7PQNM"
  - title: "Mahesh Sathiamoorthy (Bespoke Labs): Data and Environment Curation for Post-Training LLMs"
    url: "https://www.youtube.com/watch?v=ewtOo0scUh0"
  - title: "Varun Singh (Arcee AI): The Base Model Is Dead"
    url: "https://www.youtube.com/watch?v=xbPriQWXtWM"
draft: false
---
## What happened

In a talk published 2026-07-31, [Ari Morcos of DatologyAI](https://www.youtube.com/watch?v=_PdK6x7PQNM) argued that curating training data is the cheapest compute you can get: better data steepens the learning curve, so the same budget buys more model. H100 prices sit about 40% above last year's lows, and reasoning models burn roughly 8x the tokens of non-reasoning ones. His framing is a refinery for tokens you already have, not a source of new ones. He reported a vision-language model trained on curated data matching Qwen 3.5 4B with about 145x less training compute, and 100B tokens of mid-training lifting Thomson Reuters' legal benchmark scores about five points without catastrophic forgetting.

Two more talks from the same conference day land on the same bottleneck. [Mahesh Sathiamoorthy of Bespoke Labs](https://www.youtube.com/watch?v=ewtOo0scUh0) says data and reinforcement-learning (RL) environments, not compute or post-training infrastructure, are what limit agent reliability. [Varun Singh of Arcee AI](https://www.youtube.com/watch?v=xbPriQWXtWM) shows the mix shifting underneath: web text was roughly 85% of GPT-3's tokens and about 15% in MAI Thinking 1, with code and post-training-shaped data taking its place.

## Why it matters

Compute is the constraint you cannot buy your way out of this quarter; the corpus is the one you still control. If the right data reaches the same quality bar for a fraction of the training compute, that changes what you can afford to train for your own task instead of renting a generic model.

## How it works

1. **Clean.** Heuristic filters plus benchmark decontamination strip junk and test-set leakage.
2. **Curate.** Quality classifiers, topic taxonomies and semantic redundancy reduction resample the set toward your target task distribution.
3. **Create.** Rephrase high-quality documents into many templates to add volume and diversity.
4. **Compose.** Mix and sequence the sources across the stages of multi-stage training.

> There is no golden dataset: a corpus is only optimal relative to the tasks you want the model to do.

## The catch

Every number here is self-reported by a vendor in its own conference talk, with no independent reproduction; treat 145x as a direction, not a spec. And [Bespoke's ablations](https://www.youtube.com/watch?v=ewtOo0scUh0) warn the intuitions do not transfer: sampling more answers per question beat collecting more questions, stronger models were not always better teachers, and synthetic rewriting underdelivered. Curate against your own eval set, then measure.

[Model Selection](/guide/model-selection/)
