---
title: "Agents Report Success While the Work Silently Fails"
date: 2026-09-11
summary: "AI agents can report task completion while exit codes, dashboards, and cached values all stay green even though the underlying work silently failed or corrupted data."
takeaways:
  - "Success signals like exit codes and dashboards can stay green while the underlying work silently fails."
  - "Independent verification catches errors that self-checking misses, recovering roughly three times as much as self-verification."
  - "A check must be independent of the failure mode it tests for, or it will confirm the same error instead of catching it."
tags: [reliability]
domain: reliability
sourceName: "github.com"
sourceUrl: "https://github.com/PegasidsAI/silent-failures"
draft: false
---

## The Takeaway
Agent self-reporting is insufficient for verification. Production systems require independent state checks between steps because success signals often remain green during silent failures.

## The details
- On September 8, 2026, Maximilian Adams documented unattended agents reporting "success" while an upstream source had been dead for seven weeks and every dashboard indicator stayed green ([Four ways my unattended agents reported success](https://github.com/PegasidsAI/silent-failures)).
- Exit code zero confirmed the job ran but not that it produced data.
- Adams argues a check is only useful to the extent it is independent of the failure mode it is meant to detect ([Four ways my unattended agents reported success](https://github.com/PegasidsAI/silent-failures)), since a check that shares the job's assumptions will confirm the same error rather than catch it.
- Openpyxl silently drops cached formula values when an agent edits an unrelated cell ([Openpyxl silently drops cached formula values](https://kookerella.com/posts/ai-agent-silently-breaks-formula-values)); the agent reports task completion, but downstream tools reading with `data_only=True` encounter nulls instead of numbers.
- No exception is raised, and the file opens correctly in Excel, masking the corruption from human review.

## Why it matters
These failures break idempotency and corrupt downstream context. When a check shares assumptions with the execution environment, it confirms the error rather than finding it. Amy Yuan notes that self-verification recovers only a third of what independent verification does ([Agentic Workflow Design: Six Principles for 2026](https://www.amyzyuan.com/thoughts/agentic-workflow-design-2026)). Systems must verify state changes externally, ensuring that reported success corresponds to actual outcome observability rather than mere process execution.

[Reliability](/guide/reliability/)
