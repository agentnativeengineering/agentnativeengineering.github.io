---
title: "Treat agent config files as a security-reviewed boundary"
date: 2026-07-02
summary: "A scan of 34,266 repositories found 1 in 4 organizations had gaps in their agent config files — including hardcoded secrets and over-broad command permissions — because CLAUDE.md and AGENTS.md are treated as notes, not security-reviewed code."
takeaways:
  - "Your agent's config file (CLAUDE.md, AGENTS.md, .cursorrules) is executable policy inside your security boundary — review it like CI/CD config, not like a README."
  - "A scan of 34,266 repos found ~1,150 higher-severity issues, including 21 hardcoded secrets, 449 dangerous command permissions, and 437 PII exposure risks."
  - "Beyond secrets, nearly 5,000 files had no explicit stop conditions or fallback paths, so the agent just keeps going on failure."
tags: ["security", "agent-config", "claude-md", "agents-md", "secrets-scanning"]
sourceName: "Codacy"
sourceUrl: "https://blog.codacy.com/we-scanned-34266-repos.-1-in-4-orgs-showed-gaps-in-ai-agent-config-files"
sources:
  - title: "Codacy: We scanned 34,266 repos — 1 in 4 orgs showed gaps in AI agent config files"
    url: "https://blog.codacy.com/we-scanned-34266-repos.-1-in-4-orgs-showed-gaps-in-ai-agent-config-files"
draft: false
---
## What happened

In a study published 2026-06-23, code-quality vendor [Codacy ran a linter across 34,266 repositories](https://blog.codacy.com/we-scanned-34266-repos.-1-in-4-orgs-showed-gaps-in-ai-agent-config-files) to see how teams manage their agent instruction files — the `CLAUDE.md`, `.cursorrules`, `AGENTS.md`, and `copilot-instructions.md` files that coding agents read as standing orders. About [1 in 4 of the 1,353 organizations showed gaps](https://blog.codacy.com/we-scanned-34266-repos.-1-in-4-orgs-showed-gaps-in-ai-agent-config-files), and the scan flagged roughly 1,150 higher-severity security issues: 449 dangerous command permissions, 437 PII (personally identifiable information) exposure risks, 71 data-exfiltration vulnerabilities, and 21 hardcoded secrets — sitting in plain text that an agent loads on every run.

## Why it matters

An agent config file is not documentation; it is executable policy. Whatever it grants — a permission, a secret, a "just run it" instruction — the agent will act on, so the file is part of your application security boundary. Yet most repos treat it as a scratch note that never sees review, which is exactly how a hardcoded key or an over-broad command permission ships unnoticed.

> Treat CLAUDE.md and AGENTS.md like CI/CD config and infrastructure-as-code: secrets scanning, permission review, and a required PR check.

## The catch

The scan also found the quieter half of the problem: over 13,000 clarity issues (7,700+ undefined terms, vague directives like "format code properly") and nearly 5,000 missing escape hatches — [no explicit stop conditions or fallback paths](https://blog.codacy.com/we-scanned-34266-repos.-1-in-4-orgs-showed-gaps-in-ai-agent-config-files). Locking down secrets is the urgent fix, but an agent with no defined failure behavior fails just as expensively — it keeps going. The mitigation is the same discipline you already apply to config code: concrete wording, defined stop conditions, secrets and permission scanning, and CODEOWNERS review on every change to these files.

[Security](/guide/security/)
