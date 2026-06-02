---
title: "PyTorch wrote down the rules its repo gives coding agents"
date: 2026-06-02
summary: "When many of a repo's PRs are AI-authored, the bottleneck moves to human review, so PyTorch published a playbook that sorts AI code on a slop spectrum and gives each band its own rule."
tags: ["harness-engineering", "agents-md", "code-review"]
draft: false
---

Many PRs to PyTorch are now AI-authored, and that changed where the work piles up. At the May 2026 compiler offsite the core team assembled a playbook for the repo, written up by Edward Yang on the [PyTorch devlog](https://docs.pytorch.org/devlogs/ai-agents/2026-05-30-ai-coding-playbook/) (30 May 2026). Its central observation is operational: "In an age of cheap code, we are human review bottlenecked." Generating code is cheap. Reviewing and owning it is not.

So the playbook treats AI-generated code as a spectrum and gives each band its own rule.

The first band is **AI as a substitution for human-written code**: a human reads every line and owns every line. The norms that follow are about making that review cheap — write the read order for a big PR, do not mix cosmetic and semantic changes, and answer human review comments yourself rather than auto-replying with an agent. Reviewers are told to consult AI first and escalate only unresolved questions to humans. An agent may autonomously fix nits, but the author still verifies each fix.

The second band is **mass AI PRs** — agents burning down an issue tracker in parallel. Those are allowed only when there is "high-level agreement that these fixes, in aggregate have an ROI that justifies the human time spent," because a wave of PRs raises reviewer burden and the operator owns those initial reviews.

The third band is **unreviewed code**, and here the rule is blunt: "As of today, we do not accept unreviewed AI generated code (aka slop) to the main pytorch/pytorch repo." Live experiments live out-of-tree. Even there, unreviewed is not unowned: the owner reviews the design, the code sits behind a human-designed API boundary, it must be throw-away-and-rewrite-able, ideally its output is verifiable, and it must pass AI code review for security, tests, and global invariants.

The playbook also names a tooling roadmap — an open-source reimplementation of Meta's RADAR (risk-aware auto-review for low-risk PRs from trusted maintainers), automatic AI linting with subsystem-specific criteria, and automated fbcode-to-OSS test generation. Those are explicitly on the roadmap and have not shipped yet. The norms above are what is in force today.

The reusable, open-source path for carrying these conventions is [`AGENTS.md`](https://github.com/agentsmd/agents.md), the AAIF-hosted format for a per-repo agent-context file. It is the versioned, reviewable artifact where a team encodes exactly this kind of rule so it travels with the repo instead of living as tribal knowledge.

The move that generalizes: classify each AI change before you merge it, route it to the cheapest correct review path, and keep unreviewed output out-of-tree behind an API boundary until it is encapsulated and verifiable.

[Harness Engineering](/guide/harness-engineering/)
