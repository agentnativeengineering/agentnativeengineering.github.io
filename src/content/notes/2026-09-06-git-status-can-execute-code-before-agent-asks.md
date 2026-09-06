---
title: "A background git status call can run code before your agent asks"
date: 2026-09-06
summary: "A background `git status` call that AI coding agents run to gather repo context can be hijacked by a malicious `.git/config` into running arbitrary code before any trust prompt appears."
takeaways:
  - "Treat any repo's .git/config as executable code, not inert metadata, especially before opening it with an AI coding agent — a key like core.fsmonitor can name a command git will run for you."
  - "AI coding agents (Claude Code, Goose, Codex, Cursor, Qwen Code, Grok Build, Hermes) run background git status/git diff calls for context on open, often before any workspace-trust prompt, giving a poisoned config a free path to execute with your privileges."
  - "Four of eight reported findings were still unpatched at publication (Qwen Code, Grok Build, Hermes, one Claude Code variant); check your agent's patch status and inspect .git/config before opening unfamiliar repos delivered as files rather than cloned."
tags: ["security", "git", "supply-chain", "coding-agents"]
sourceName: "Manifold Security"
sourceUrl: "https://www.manifold.security/blog/ai-coding-agents-git-hijack"
sources:
  - title: "GitSpawn: AI coding agents git hijack (Manifold Security)"
    url: "https://www.manifold.security/blog/ai-coding-agents-git-hijack"
  - title: "Hacker News discussion"
    url: "https://news.ycombinator.com/item?id=49572279"
draft: false
---
## What happened
On 2026-09-01, security researcher Francisco Rosales at [Manifold Security](https://www.manifold.security/blog/ai-coding-agents-git-hijack) disclosed GitSpawn, a vulnerability class hitting seven AI coding agents: Claude Code, Goose, Hermes, Qwen Code, Grok Build, Codex, and Cursor. All of them run background git commands — `git status`, `git diff` — to build repository context the moment you open a folder, often before any workspace-trust prompt appears. Eight findings were reported; Claude Code, Goose (tracked as CVE-2026-72718), Codex, and Cursor have since been patched, while Qwen Code, Grok Build, Hermes, and one Claude Code variant remained unpatched at publication. The [Hacker News thread](https://news.ycombinator.com/item?id=49572279) picked it up the same week.

## Why it matters
An agent's context-gathering step is supposed to be read-only. Here it isn't: a repo's own `.git/config` is metadata the agent trusts implicitly, and git config supports keys that name a command to run. That turns "let me look at this repo" into arbitrary code execution on your machine, with your privileges, outside the sandbox, with zero approval prompt — before you've decided whether to trust the code at all.

## How it works
1. **Delivery.** The malicious `.git` directory must arrive as files — a zip, a shared drive, a USB stick — because clone/fetch/pull don't carry local config.
2. **Trigger.** Opening the folder in an agent fires a background `git status` or `git diff` to refresh the index and gather context.
3. **Sink.** A poisoned key like `core.fsmonitor` names a command; git executes it as part of that "harmless" call.
4. **Blast radius.** The command runs with the user's full privileges, no sandbox, no prompt.

> The same call that's supposed to just gather context is the one that runs the attacker's command.

## The catch
Patches only close the specific sinks reported so far — four of eight known variants were still open at publication, and the class itself (config-driven execution during "read-only" git calls) can recur in any tool that shells out to git for context. Manifold recommends inspecting `.git/config` before opening any unfamiliar repo in an agent, and for vendors, sanitizing background calls (e.g. `git -c core.fsmonitor=false status`) rather than trusting repo-local config.

[Security](/guide/security/)
