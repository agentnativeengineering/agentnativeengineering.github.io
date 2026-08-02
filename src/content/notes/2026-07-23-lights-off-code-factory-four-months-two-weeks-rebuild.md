---
title: "A lights-off code factory ran four months, then took two weeks to rebuild by hand"
date: 2026-07-23
summary: "Dex Horthy's account of HumanLayer's fully automated coding factory ends in a hand rebuild, and the fix he lands on is four planning phases that pull every expensive decision in front of the code."
takeaways:
  - "Make the design decisions before the agent writes, because every one you skip comes back as a comment on a two-thousand-line diff."
  - "Reviewing only the finished output catches problems too late: agent failures start in the first few steps and stay hidden until recovery is impossible."
  - "HumanLayer routes non-trivial work through product requirements, system architecture, program design, and vertical slices, reviewing each slice as it lands."
tags: ["harness-engineering", "coding-agents", "code-review", "planning"]
sourceName: "Addy Osmani — Software Factories, Light and Dark"
sourceUrl: "https://addyosmani.com/blog/software-factories/"
draft: false
---
## What happened

[Dex Horthy's "Why Software Factories Fail"](https://github.com/humanlayer/advanced-context-engineering-for-coding-agents/blob/main/wsff.md), subtitled "or: harness engineering is not enough," describes HumanLayer going "full lights-off" in July 2025 — background agents on the work, nobody reading the output. It kept breaking: "Your site was down. Your users were pissed." By the third recurrence in November they judged a rewrite easier, and his cofounder "spent two whole weeks in VS Code (not even cursor) plumbing out all the patterns by hand." Addy Osmani, [writing on July 20](https://addyosmani.com/blog/software-factories/), names the bill as comprehension debt: "the widening gap between how much code exists and how much any human still understands."

## Why it matters

More harness did not remove the constraint, it moved it: "Review still takes hours or days... So review is now the bottleneck." Deleting review turned that bottleneck into an outage. An [analysis of 1,794 annotated agent trajectories](https://arxiv.org/abs/2607.09510) found failures "typically begin within the first few execution steps" and "often remain hidden until recovery is no longer possible."

## How it works

1. **Product requirements.** A short doc fixing what and why, carried in mockups: "a rough HTML mockup of the actual screen settles an argument that three paragraphs would only prolong."
2. **System architecture.** How "services, endpoints, schemas, queues, and stores talk to each other," drawn as sequence diagrams.
3. **Program design.** Types, signatures, call-stack and file-tree diffs — each one "a decision you'd otherwise be making implicitly during code review -- at the most expensive possible time to change your mind."
4. **Vertical slices.** End-to-end slices reviewed as they land: "Checking 100-200 lines and resteering is a lot cheaper."

> A factory can only run as fast as someone can still understand what came out of it.

## The catch

One founder's account of his own company, self-reported and without a control group, and he flags the industry figures he cites as correlation only. The process is deliberately selective — small, obvious changes still go "straight to the agent." And the fix spends the scarce thing the factory was meant to free: "Most frontier models won't design a plan like this without human steering, and it's hard to generalize per codebase or even per task, so I prefer to stay in the loop here."

[Harness Engineering](/guide/harness-engineering/)
