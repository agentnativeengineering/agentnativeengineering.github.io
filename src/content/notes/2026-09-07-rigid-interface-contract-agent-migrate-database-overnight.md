---
title: "A rigid interface contract let an agent migrate 30 database classes overnight"
date: 2026-09-07
summary: "Google's Finance Engineering team migrated 30+ database classes to Cloud Spanner with a headless coding agent by first locking the fuzzy part of the task into a rigid interface contract."
takeaways:
  - "Give an autonomous coding agent a narrow, deterministic interface instead of a fuzzy instruction, and repetitive multi-file work becomes safe to run unattended overnight."
  - "Google's Finance Engineering team standardized a single MutationConverter contract across 30+ DAOs before letting Antigravity CLI generate dual-write code and tests in headless mode."
  - "Wiring the agent's output straight into the real build/test suite, with failures fed back for self-correction, was what made unattended runs trustworthy, not the model alone."
tags: ["harness-engineering", "headless-agent", "database-migration", "test-feedback-loop"]
sourceName: "Google Cloud Blog"
sourceUrl: "https://cloud.google.com/blog/topics/developers-practitioners/using-antigravity-cli-to-streamline-dual-write-database-migration/"
sources:
  - title: "Google Cloud: Automating dual-write Spanner migration with Antigravity CLI"
    url: "https://cloud.google.com/blog/topics/developers-practitioners/using-antigravity-cli-to-streamline-dual-write-database-migration/"
draft: false
---
## What happened
On 2026-09-04, Google's Finance Engineering team [described](https://cloud.google.com/blog/topics/developers-practitioners/using-antigravity-cli-to-streamline-dual-write-database-migration/) migrating a legacy data layer to Cloud Spanner (Google's globally distributed database) without taking production offline, by running the Antigravity CLI coding agent in headless mode (script-driven, no interactive chat) across 30+ Data Access Objects, or DAOs (the classes that read and write a data store). Each DAO needed a hand-written converter mapping the app's domain model to Spanner's schema, plus dual-write logic and unit tests, work the team says "would have taken months of engineering time" by hand.

## Why it matters
The real bottleneck wasn't writing the code, it was trusting an unattended agent with financial writes, where a single mismatch between two datastores is a real bug, not a style nit. Handing an agent a fuzzy "add dual-write support" instruction at that scale is a governance risk; the fix was removing the fuzziness before automating anything.

## How it works
1. **Fix the target first.** The team standardized every DAO around one rigid `MutationConverter` interface, turning schema translation into a fixed, checkable contract instead of open-ended judgment.
2. **Go headless.** An orchestration script fed the agent each DAO's source plus the target schema and drove it across dozens of files at once, instead of one file per chat session.
3. **Wire it to the test harness.** Every generated converter, DAO, and test ran the real build/test suite; failures fed straight back to the model for self-correction, no human in the loop.
4. **Let it run overnight.** With the contract and feedback loop in place, the pipeline ran unattended and produced a reviewable changelist by morning.

> Decouple the fuzzy part of a migration into a rigid interface, and the repetitive rest becomes safe to run unattended.

## The catch
This ran against staging with strict parity checks, not production yet, the team says it's "preparing for production." The whole approach leans on the test suite being genuinely thorough: an agent wired to a weak harness will confidently generate code that passes weak tests. It also assumes you can isolate a truly rigid contract like the converter interface; messier, judgment-heavy refactors won't decompose this cleanly.

[\Harness Engineering](/guide/harness-engineering/)
