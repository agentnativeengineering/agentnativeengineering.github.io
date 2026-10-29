---
title: "Folding subagents into one loop means compaction decides what your agent forgets"
date: 2026-10-29
summary: "Anthropic now tells teams to fold most subagents into a single agent loop, and its own compaction docs list what that loop loses each time it summarizes: mid-run instructions, images, documents and fetched pages."
takeaways:
  - "Once one long agent loop replaces your subagents, every compaction is a handoff you didn't write, so pin your constraints and re-attach your files instead of hoping the summary keeps them."
  - "Claude's compaction summarizes mid-conversation system messages too, so instructions you injected mid-run stop applying unless you state them again after the summary."
  - "Images, documents, uploads and fetched URLs inside the summarized range are gone after compaction, and a custom summarization prompt is the documented fix when the default drops something."
tags: ["memory-and-context", "compaction", "subagents", "long-running-agents"]
domain: memory-and-context
sourceName: "Claude Blog"
sourceUrl: "https://claude.com/blog/building-agents-when-to-fold-subagents-into-your-main-agent-loop"
sources:
  - title: "Building agents: When to fold subagents into your main agent loop"
    url: "https://claude.com/blog/building-agents-when-to-fold-subagents-into-your-main-agent-loop"
  - title: "anthropics/single-agent-loop-kit"
    url: "https://github.com/anthropics/single-agent-loop-kit"
  - title: "Compaction overview (Claude Platform docs)"
    url: "https://platform.claude.com/docs/en/build-with-claude/compaction"
  - title: "Compaction on demand (Claude Platform docs)"
    url: "https://platform.claude.com/docs/en/build-with-claude/compaction-on-demand"
  - title: "Governance Decay: How Context Compaction Silently Erases Safety Constraints in Long-Horizon LLM Agents"
    url: "https://arxiv.org/abs/2606.22528"
upstream: "aidailybrief/2026-10-25"
draft: false
---

## The Takeaway

When one long agent loop takes over from your subagents, each compaction works as an unwritten handoff document, so decide for yourself what it has to carry forward.

## The details

- On 2026-10-22 Anthropic's guide [argued that many enterprise agents do better as one loop that loads skills and tools on demand](https://claude.com/blog/building-agents-when-to-fold-subagents-into-your-main-agent-loop). It cites one customer whose single loop ran roughly 2x faster, and warns that each subagent call "still hands back a lossy summary."
- The guide's [companion kit](https://github.com/anthropics/single-agent-loop-kit) still keeps subagents for parallel research in fresh contexts, independent verification, and work that reads far more than the main agent needs afterwards.
- Claude's [compaction](https://platform.claude.com/docs/en/build-with-claude/compaction) replaces older turns with a server-written summary, either on demand or at a token threshold. Both modes are in beta.
- The [on-demand docs](https://platform.claude.com/docs/en/build-with-claude/compaction-on-demand) list the losses. Mid-conversation `role: "system"` messages get summarized, so "their text instructions stop applying." Images, documents, uploads and fetched URLs "are gone." Two mistakes in swapping the summary block in "raise no error."
- A single-author [arXiv paper from June 2026](https://arxiv.org/abs/2606.22528) found that policy violation rates went from 0% with the policy in full context to 30% after compaction, across seven model families. A mitigation the paper calls Constraint Pinning brought them back to 0% on its benchmark.

## Why it matters

If you run long-lived agent threads, the summarizer is part of your safety and correctness surface, so review it the way you would review a handoff document. The docs give two fixes: [restate any instruction that still matters](https://platform.claude.com/docs/en/build-with-claude/compaction-on-demand) in a new system message after the summary, and supply your own summarization prompt (up to 16,384 characters) that names what must survive. One step the sources don't spell out: add a compaction round to your eval set, then check that hard constraints still hold and that the files and pages the agent relied on are still available. Caveats: the 2x speedup comes from one customer the vendor reports on, and the decay numbers come from one benchmark.

[Memory & Context](/guide/memory-and-context/)
