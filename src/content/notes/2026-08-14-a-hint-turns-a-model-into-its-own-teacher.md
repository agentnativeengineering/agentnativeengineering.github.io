---
title: "A hint turns a model into its own teacher, no golden answers needed"
date: 2026-08-14
summary: "Applied Compute improves enterprise agents on unlabeled production traces by re-prompting the same model with a hint and distilling the agent toward its own better output."
takeaways:
  - "If you have production traces but no labels, you can still train on them: the same model, re-prompted with a hint it lacked during the rollout, becomes a teacher good enough to distill from."
  - "Hints constructed live from the model's own rollout beat hints written in advance: 15 to 80 percent correct on an unfamiliar output format, where offline hinting gained far less."
  - "Distill only the steps just after the hint lands, and mask which teacher tokens to learn from; a teacher that has drifted from the student degrades it into hedging words."
tags: ["model-selection", "continual-learning", "self-distillation", "production-traces"]
sourceName: "Applied Compute"
sourceUrl: "https://www.youtube.com/watch?v=ZTA0GwpAUak"
sources:
  - title: "Bringing continual learning into enterprises (Sam Denton, Applied Compute)"
    url: "https://www.youtube.com/watch?v=ZTA0GwpAUak"
  - title: "Scaling up continual learning: on-policy self-distillation (Ronak Malde, Trajectory)"
    url: "https://www.youtube.com/watch?v=zL1kLftVTlo"
  - title: "How AI agents get better with every use (Arjun Karanam, Trajectory)"
    url: "https://www.youtube.com/watch?v=eYrMF9Cht8A"
draft: false
---
## What happened

In a talk published 2026-08-12, Sam Denton, who leads platform research at [Applied Compute](https://www.youtube.com/watch?v=ZTA0GwpAUak), described improving enterprise agents from a batch of production traces with no golden answers and no per-task rubrics. The lever is a *hint*: re-prompt the same model with information it lacked during the rollout, and its output becomes a teacher the student is trained toward. On SWE-bench, a Qwen 3.5 thinking model nudged to call a task-complete tool before turn 40 raised that call rate from about 22 to 60 percent, with no drop in test pass rate. On a coding agent taught an unfamiliar hyperlink format, hints built live from the model's own rollout lifted correct formatting from roughly 15 to 80 percent; hints written in advance gained far less.

## Why it matters

Many enterprises sit on batches of unlabeled agent traces. The usual answer is reinforcement learning, and Ronak Malde of [Trajectory](https://www.youtube.com/watch?v=zL1kLftVTlo) priced it the same day: GRPO needs curated benchmarks, heavy infrastructure for parallel rollouts, and compresses a whole trajectory into one end-state score. Hint-based self-distillation needs none of that, and its supervision is per-token over the full vocabulary from a single rollout.

## How it works

1. **Roll out.** The deployed model runs the task and produces a trace.
2. **Pick the moment.** A judge picks the step where the hint is injected.
3. **Hint the teacher.** The same model, re-prompted with that hint, produces the better continuation.
4. **Distill narrowly.** Match the student's log probs to the teacher's on the next step or few, with a judge masking which teacher tokens to learn from.

> The teacher is not a bigger model. It is the same model, told one thing it did not know.

## The catch

Malde reports a "but/wait" problem, where a teacher that has diverged from the student course-corrects until the model collapses into hedging words, and hint leakage, where the model restates the leaked answer instead of reasoning; he proposes KL-weighted steps, LLM-filtered hints and residual guidance. Traces also have to carry signal: Arjun Karanam of [Trajectory](https://www.youtube.com/watch?v=eYrMF9Cht8A) argues teams should capture corrective actions such as edits, undos and retries rather than noisy thumbs up/down. All three talks come from vendors selling this, and the numbers are self-reported on single tasks.

[Model Selection](/guide/model-selection/)
