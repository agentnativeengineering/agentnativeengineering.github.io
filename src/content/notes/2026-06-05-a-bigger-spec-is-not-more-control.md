---
title: "A bigger spec is not more control"
date: 2026-06-05
summary: "Spec-driven development is suddenly everywhere — GitHub's Spec Kit shipped five releases in four days this month. The pitch is that a bigger, clearer spec gives you more control over what the agent builds. A Thoughtworks engineer's tests show it doesn't: the agent still ignored the spec and over-specified small work. Right-size the spec and review the output against it."
takeaways:
  - "Spec-driven development means writing a detailed spec first and having a coding agent generate the code from it. It is suddenly everywhere — GitHub's Spec Kit passed 109,000 stars and shipped five releases in four days in early June 2026 — and the pitch is that a bigger, clearer spec gives you more control over what the agent builds."
  - "A bigger spec does not guarantee the agent follows it. In one engineer's tests the agent ignored notes that some classes already existed and duplicated them, and a workflow turned a one-line bug into sixteen acceptance criteria."
  - "Right-size the spec to the task and review the output against it. Generation is now the fast, cheap part; deciding what to build, integrating it, and checking the agent actually followed the spec are not."
tags: ["coding-agents", "spec-driven-development", "scope"]
domain: "scope-and-simplicity"
sourceName: "github.com"
sourceUrl: "https://github.com/github/spec-kit"
draft: false
---

**Why this matters to you.** *Spec-driven development* (SDD) means writing a detailed specification first and having a coding agent generate the code from it — you author the spec itself, and the agent compiles it into working code. It is suddenly everywhere: GitHub's [Spec Kit](https://github.com/github/spec-kit) passed 109,000 stars and shipped five releases in four days this month ([v0.9.0 through v0.9.4, June 1–4 2026](https://github.com/github/spec-kit/releases/tag/v0.9.4)), and every major coding tool — Kiro, Cursor, Claude Code — now has an SDD mode. The pitch is seductive: a bigger, clearer spec gives you more control over what the agent builds. The honest finding is that it doesn't, quite.

**What actually happens.** Birgitta Böckeler, a distinguished engineer at Thoughtworks, ran Kiro, Spec Kit, and Tessl on real tasks ([martinfowler.com, *Understanding Spec-Driven Development*](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html), 15 Oct 2025). Two failures recurred. First, a bigger spec does not buy adherence: "just because the windows are larger, doesn't mean that AI will properly pick up on everything that's in there." Running Spec Kit on an existing codebase, "the agent ignored the notes that these were descriptions of existing classes, it just took them as a new specification and generated them all over again, creating duplicates." Second, SDD over-fires on small work: a Kiro workflow "turned this small bug into 4 'user stories' with a total of 16 acceptance criteria" — "like using a sledgehammer to crack a nut."

**The idea underneath.** Generation is now the cheap, fast part. Kiro's own team reports large-spec implementation dropping from [60–90 minutes to about 15](https://kiro.dev/blog/faster-smarter-specs/) with parallel execution. What didn't get faster is everything around it: deciding what to build, integrating it, and checking the agent actually did what the spec said. A spec is still just an instruction. Like a prompt, a longer one can be confidently misread, and nothing binds the agent to honour every line. More words can simply become more surface area for the agent to skip.

**What to do.** Right-size the spec to the task. For a one-line change, a sentence will do; reserve full specs and their sixteen acceptance criteria for genuinely complex features where the up-front thinking pays for itself. And always review the generated code against the spec rather than assuming it was followed: the failure mode is silent — plausible code that quietly diverged from the spec, a duplicated class, a skipped constraint. Treat the spec as an artifact you maintain and verify after every run.

[Scope & Simplicity](/guide/scope-and-simplicity/)
