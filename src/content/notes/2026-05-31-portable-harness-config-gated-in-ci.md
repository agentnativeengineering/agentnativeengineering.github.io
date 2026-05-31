---
title: "Keep harness config in version control and gate it in CI"
date: 2026-05-31
summary: "Skills, hooks, and rules belong in version control, written to a portable shape, with a CI gate that validates them before they ship."
tags: ["harness-engineering", "agents-md", "ci"]
draft: false
---

A working skill, hook, or rule that fixes an agent's behavior helps exactly one person until it is packaged. It lives in someone's local config, it is not versioned, nothing checks that it still parses, and it does not exist for the next developer or the next agent. The fix that matters is to treat harness config the way you treat code: keep skills, hooks, and rules in version control, write them to a portable shape, and add a CI gate that validates them before they ship.

A recent release shows the shape concretely. ECC's [`v2.0.0-rc.1`](https://github.com/affaan-m/ECC/releases/tag/v2.0.0-rc.1) (published 25 May 2026) packages its skills, hooks, and rules to target multiple harnesses — Claude Code, Codex, OpenCode, Cursor, Gemini, and Zed — rather than maintaining a separate setup per tool. The same release runs `scripts/ci/validate-skills.js`, which validates 243 skills, plus `validate-install-manifests`, behind a suite of roughly 2,568 passing tests. A malformed skill fails that gate instead of failing mid-task in someone else's run.

This is one repo demonstrating the pattern. It is cited here for the mechanism rather than for how widely it is adopted, and that mechanism generalizes. You do not need that particular project to get the same guarantees.

The reusable, open-source path is two pieces. First, the [`AGENTS.md`](https://agents.md/) convention: a rules file any agent reading the repo can pick up, so the config is portable across tools rather than pinned to one. Second, any CI runner — GitHub Actions, or a plain `npm test` step — that schema- or lint-checks the skill and hook files before they merge. That is all the gate needs to be: something that parses every skill and hook and fails the build if one is malformed.

The two parts solve two different failures. Portability removes the "trapped in one setup" failure — the same file runs across harnesses instead of helping the one person who wrote it. The CI gate removes the "silently broke" failure — a bad skill or hook is caught at merge time instead of derailing a task days later. Together they turn a local habit into infrastructure with the same review, versioning, and test guarantees as the rest of the codebase.

So when a skill or hook earns its keep, do not leave it in your local config. Commit it, make it portable, and gate it in CI.

[Harness Engineering](/guide/harness-engineering/)
