---
title: "When AI writes the code, review becomes the bottleneck"
date: 2026-06-02
summary: "When AI writes most of your pull requests, the slow part stops being writing code and becomes reviewing it — so PyTorch sorts every AI change into three buckets and gives each its own review rule."
takeaways:
  - "When AI writes most of your pull requests, your bottleneck flips from writing code to reviewing it. A human still has to read and own every line, and that review is now the slow, expensive part."
  - "PyTorch's fix is one simple rule. Sort every AI change into three buckets by how much human review it needs before it can merge."
  - "There are three buckets. Normal AI help (a human reads every line), bulk AI pull requests (only if the time saved beats the review hours), and unreviewed 'slop' kept out of the main repo — sandbox only."
tags: ["harness-engineering", "agents-md", "code-review"]
domain: "harness-engineering"
sourceName: "docs.pytorch.org"
sourceUrl: "https://docs.pytorch.org/devlogs/ai-agents/2026-05-30-ai-coding-playbook/"
draft: false
---

**Why this matters to you.** This is a general process rule for any team — nothing here is specific to PyTorch or machine learning. The moment your team lets AI write a lot of code, you hit a wall that has nothing to do with writing code. Generating a pull request — a PR, one proposed change submitted for review — becomes nearly free, but a human still has to read it, understand it, and take responsibility for it, and *that* review is now your bottleneck. PyTorch, one of the largest open-source projects, hit this first and [wrote down how they handle it](https://docs.pytorch.org/devlogs/ai-agents/2026-05-30-ai-coding-playbook/) (Edward Yang, 30 May 2026) so you can copy the rule instead of inventing it. In their words: "In an age of cheap code, we are human review bottlenecked."

**The rule: sort every AI change by how much review it needs.** PyTorch stopped treating all AI code the same and split it into three bands, each with its own requirement before it's allowed in:

- **AI as a normal helper.** A person reads every line and owns every line. To keep that review cheap: tell the reviewer what order to read a big change in, never mix cosmetic edits and logic changes in one PR, and answer review comments yourself instead of letting a bot reply for you.
- **Bulk AI pull requests** — an agent working through a backlog, opening many PRs in parallel, for example to burn down a list of tracker issues. Allowed only when the team decides the hours the agent saves beat the hours humans will spend reviewing its PRs — so estimate that trade up front and have a named owner sign off, because every one of those PRs still needs a person to read it.
- **Unreviewed "slop"** — their blunt word for AI code *nobody has read*. For now, PyTorch keeps it out of the main repository — sandbox only. It can only live in a separate, throwaway space, walled off so the rest of the code only touches it through one human-designed boundary you could rip out and rewrite from scratch.

**The point underneath:** give each change the lightest review it can safely get — no more than it needs, never less — and never let code nobody has read into the code everyone depends on.

**What to do.** PyTorch doesn't say where to record these rules; a natural home is an [`AGENTS.md`](https://github.com/agentsmd/agents.md) file in your repository — a plain text file that is handed to every coding agent that works there. It's the versioned, reviewable place to keep these conventions so they travel with the code instead of living in one person's head.

[Harness Engineering](/guide/harness-engineering/)
