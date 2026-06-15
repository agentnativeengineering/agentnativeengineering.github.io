---
title: "GitHub cut Copilot CLI tool failures 23% by delegating less, not switching models"
date: 2026-06-15
summary: "GitHub used trajectory analysis to make Copilot CLI's main agent stop spinning up subagents for narrow work, cutting tool failures per session by 23% with no quality regression."
takeaways:
  - "Before adding a knob, mine real agent trajectories to find where delegation adds overhead instead of leverage, then reserve subagents for broad or parallelizable work."
  - "Eager subagent delegation is a cost: every handoff adds tool calls, coordination, and wait time the user feels."
  - "A different-family model reviewing plan, implementation, and tests at fixed boundaries can recover most of a stronger model's quality at lower cost."
tags: ["harness-engineering", "subagents", "orchestration", "copilot-cli"]
sourceName: "The GitHub Blog"
sourceUrl: "https://github.blog/ai-and-ml/how-we-made-github-copilot-cli-more-selective-about-delegation/"
sources:
  - title: "GitHub: making Copilot CLI more selective about delegation"
    url: "https://github.blog/ai-and-ml/how-we-made-github-copilot-cli-more-selective-about-delegation/"
  - title: "Rubber duck debugging in Copilot CLI (cross-family review)"
    url: "https://www.youtube.com/watch?v=r8zwd-RiBdM"
  - title: "GitHub: custom agents as versioned workflow profiles"
    url: "https://github.blog/ai-and-ml/github-copilot/from-one-off-prompts-to-workflows-how-to-use-custom-agents-in-github-copilot-cli/"
draft: false
---
## What happened

When your coding agent splits a one-line edit into a search subagent, a wait, and a handoff, the help becomes friction. In a [post dated 2026-06-12](https://github.blog/ai-and-ml/how-we-made-github-copilot-cli-more-selective-about-delegation/), GitHub principal scientist Pingping Lin and colleagues described shipping "smarter subagent delegation" to all of Copilot CLI's production traffic — a change to the *harness* (the orchestration code wrapping the model), not the model. The team [used LLMs to analyze full agent trajectories](https://github.blog/ai-and-ml/how-we-made-github-copilot-cli-more-selective-about-delegation/) and found the main agent was spinning up helper subagents for tasks already narrow or fully described in the handoff. In a production A/B test the fix [cut tool failures per session by 23%](https://github.blog/ai-and-ml/how-we-made-github-copilot-cli-more-selective-about-delegation/) (27% for search, 18% for edits) and trimmed user wait time 5% at P95, with no quality regression.

## Why it matters

A subagent (a separate agent the main one delegates a task to) feels free but is not: every handoff [adds coordination overhead, tool calls, and wait time](https://github.blog/ai-and-ml/how-we-made-github-copilot-cli-more-selective-about-delegation/). Delegate too eagerly and you stack failure-prone tool paths and repeated searches onto work the main agent could have done in one step. The lever here is orchestration policy, not a smarter model — the kind of tuning the harness owns.

## How it works

1. **Analyze trajectories.** LLMs read full agent sessions to isolate where delegation helped versus where it only added overhead.
2. **Keep focused work local.** The main agent now handles narrow find-read-edit tasks directly instead of handing them off.
3. **Reserve subagents for breadth.** Delegation is kept for broad, cross-cutting, or genuinely parallelizable work.
4. **Treat subagents as parallelism, not a pause.** The main agent keeps working on independent tasks instead of stalling on a result, and handoffs must be specific.
5. **Validate before shipping.** Generated regression cases and offline benchmarks gated the change before staff and public A/B tests.

> Delegation is powerful but not free; the win came from delegating less, not from a better model.

## What broke

The failure mode was the harness over-delegating, and the fix was policy, not a prompt or a new user setting. The same lever shows up across the cluster: GitHub's [rubber duck feature](https://www.youtube.com/watch?v=r8zwd-RiBdM) auto-triggers a different-family model to critique planning, large implementations, and test generation at fixed boundaries — the presenter reports this approximates roughly 75% of a stronger model's quality at lower cost. And [custom agent profiles](https://github.blog/ai-and-ml/github-copilot/from-one-off-prompts-to-workflows-how-to-use-custom-agents-in-github-copilot-cli/) move team standards into versioned, reviewable Markdown in the repo. In each case the model is held constant and the harness does the engineering.

[Harness Engineering](/guide/harness-engineering/)
