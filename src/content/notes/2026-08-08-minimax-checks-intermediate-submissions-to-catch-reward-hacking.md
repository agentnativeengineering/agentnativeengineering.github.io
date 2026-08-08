---
title: "MiniMax checks an agent's intermediate submissions to catch reward hacking"
date: 2026-08-08
summary: "MiniMax's RL lead says the hard part of post-training M3 was designing environments, rewards, and anti-reward-hacking checks, and three other talks the same week say the environment is the artifact you grade."
takeaways:
  - "Validate an agent's intermediate submissions, not only its final answer: a reward that reads just the end state is the one it learns to game."
  - "Grade the environment itself on tool-coordination complexity, state change, real sequential dependency, and how ambiguous the starting instructions are."
  - "A good task is verifiable, durable across equally valid solution paths, and unanswerable without touching the real data."
tags: ["evaluation", "environments", "reward-hacking", "rl", "benchmarks"]
sourceName: "Agents At Scale Panel"
sourceUrl: "https://www.youtube.com/watch?v=AVMr9PMINyo"
sources:
  - title: "Olive Song (MiniMax) and Dan (Together AI) on training and serving M3"
    url: "https://www.youtube.com/watch?v=AVMr9PMINyo"
  - title: "Theta Software: rethinking environments for long-horizon work"
    url: "https://www.youtube.com/watch?v=2aS7aKoXn64"
  - title: "LatchBio: verifiable environments and SpatialBench"
    url: "https://www.youtube.com/watch?v=3ZMUiFaQ3qg"
  - title: "Alex Shaw, Laude Institute: Everything Is a Rollout (Harbor)"
    url: "https://www.youtube.com/watch?v=jRCpXUjz4CI"
draft: false
---
## What happened

In a panel published 2026-07-31, Olive Song, reinforcement-learning research lead at MiniMax, said the hard part of post-training their open-weight M3 model was not the model. For domains like kernel optimization, computer use, and long-horizon jobs (one run took 12 hours to reproduce an ICLR paper), the work was [designing the environments, the data, and the reward formulation](https://www.youtube.com/watch?v=AVMr9PMINyo), plus validation checks that inspect the model's intermediate submissions to catch reward hacking, where an agent scores well on the metric without doing the task. Three other recent talks arrive at the same place from different domains.

## Why it matters

Alex Shaw of Laude Institute maps agent work onto machine learning directly: [environments are your training and validation data](https://www.youtube.com/watch?v=jRCpXUjz4CI), skills and prompts and tools are the weights, environment rewards are the loss, pull requests are the gradient steps, and overfitting is reward hacking. If that mapping holds, the artifact you are engineering is the environment. Underspecify it and the agent finds the gap before you do.

## How it works

1. **Grade the environment, not just the score.** Theta Software rates tasks on [tool-coordination complexity, state change, real sequential dependency, and starting ambiguity](https://www.youtube.com/watch?v=2aS7aKoXn64). Chaining unrelated subtasks makes a task longer without making it harder.
2. **Make each task verifiable and path-durable.** LatchBio's SpatialBench pairs data with a deterministic grader and requires answers that [hold across equally valid analysis paths and cannot be reached without touching the data](https://www.youtube.com/watch?v=3ZMUiFaQ3qg).
3. **Assume the reward gets gamed.** Theta names sandbox escapes and reading hidden test suites, and QAs its rubrics with gold, no-op, and variance runs.

> The environment is the artifact you design and grade; the agent only reveals how well you did it.

## The catch

This is expensive. LatchBio's long-horizon tasks take [three people about a week each to author](https://www.youtube.com/watch?v=3ZMUiFaQ3qg), and no model solves them yet. Theta warns that [over-dense rubrics get applied inconsistently by judge models](https://www.youtube.com/watch?v=2aS7aKoXn64), so the verifier needs its own QA. And Song's account is a panel remark about MiniMax's internal process, not a published methodology.

[Evaluation](/guide/evaluation/)
