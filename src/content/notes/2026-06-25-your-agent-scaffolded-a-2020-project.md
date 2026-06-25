---
title: "Your agent scaffolded a 2020 project and saw only exit code 0"
date: 2026-06-25
summary: "An agent ran npx, got exit code 0, and silently scaffolded a six-year-old release — because runtime environments are invisible to agents and silent tool success masks the wrong result."
takeaways:
  - "A tool that fails silently and returns a clean exit code is a hallucination surface: the agent has no signal that it built on the wrong result."
  - "npx without a pinned version can resolve to an ancient release whose engines field matches your Node runtime, and the agent only sees exit code 0."
  - "Make the silent path loud: pin versions, control the Node version with .nvmrc, and verify the resolved version in package.json after scaffolding."
tags: ["reliability", "tool-use", "npm", "silent-failure"]
sourceName: "Microsoft Developer Blog"
sourceUrl: "https://developer.microsoft.com/blog/your-agent-just-scaffolded-a-project-from-2020"
sources:
  - title: "Your agent just scaffolded a project from 2020 (Microsoft Developer Blog)"
    url: "https://developer.microsoft.com/blog/your-agent-just-scaffolded-a-project-from-2020"
draft: false
---
## What happened

In a [Microsoft developer blog post dated 2026-06-11](https://developer.microsoft.com/blog/your-agent-just-scaffolded-a-project-from-2020), engineers describe an agent that ran `npx create-some-app` with no version pinned, got exit code 0, and quietly scaffolded a project from 2020. Since `npm-pick-manifest` v9.1.0 (mid-2024), `npx` without a version prefers the newest release whose `engines` field matches your Node runtime — and packages with *no* engine constraint count as compatible with everything. So when newer versions exclude your Node version, npm [falls back to an ancient one](https://developer.microsoft.com/blog/your-agent-just-scaffolded-a-project-from-2020). They watched an agent install SharePoint Framework v1.11.0 instead of the current v1.23.0.

## Why it matters

The agent could not tell. As the authors put it, "runtime environments are invisible to agents" — it [sees only "command ran, exit code 0, files appeared"](https://developer.microsoft.com/blog/your-agent-just-scaffolded-a-project-from-2020). Successful execution masked a six-year version gap. A tool that fails *silently* — returning a plausible result instead of an error — turns into a hallucination surface: the agent confidently builds on a wrong premise it has no signal to question.

## How it works

1. **No version pin.** The agent types the package name and assumes "latest."
2. **npm resolves to your Node.** It picks the newest release whose `engines` matches your runtime, treating unconstrained old versions as universally compatible.
3. **Newer releases get excluded.** Tight upper bounds or caret ranges knock out current versions for your Node.
4. **Exit code 0.** Files appear, the agent moves on, never comparing expected versus actual.

> A failure that returns a clean exit code is worse than a crash — the agent builds on it.

## The catch

The fix is to make the silent path loud and pinned: [pin versions in prompts and extensions, control Node via `.nvmrc`/`.node-version`, and verify the resolved version in the generated `package.json`](https://developer.microsoft.com/blog/your-agent-just-scaffolded-a-project-from-2020) after scaffolding. As a package author, prefer lower-bound-only `engines` constraints so you don't trigger the fallback for others. None of this is automatic — the agent won't add the check for you.

[Reliability](/guide/reliability/)
