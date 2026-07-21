---
title: "A prompt injection planted in an agent's memory keeps attacking every future session"
date: 2026-07-21
summary: "Researchers tested Claude Code and OpenAI Codex and found that once a malicious instruction sits in an agent's persistent memory files, it keeps influencing current and future sessions — even though the agents resist overwriting their own memory."
takeaways:
  - "Treat an agent's persistent memory — CLAUDE.md, project files, saved preferences — as untrusted input on every read, not only when it is written, and constrain what those files are allowed to trigger."
  - "Persistent memory changes the prompt-injection threat model: an instruction planted once keeps running across sessions, so the write-time guard you already trust is not the whole defense."
  - "The study found agents resist overwriting their own memory from external content, yet payloads already in those files still succeed — and success varies by system, model, and multi-session sequence."
tags: ["security", "prompt-injection", "memory", "agents"]
sourceName: "Bad Memory: Evaluating Prompt Injection Risks from Memory in Agentic Systems (arXiv, 2026)"
sourceUrl: "https://arxiv.org/abs/2607.14611"
sources:
  - title: "Bad Memory: Evaluating Prompt Injection Risks from Memory in Agentic Systems (arXiv, 2026)"
    url: "https://arxiv.org/abs/2607.14611"
draft: false
---
## What happened

In a [paper submitted 2026-07-16](https://arxiv.org/abs/2607.14611), researchers evaluated prompt-injection attacks against memory-based agents in a sandboxed synthetic workspace, testing Anthropic Claude Code and OpenAI Codex across four models. Their finding: while it is hard to make an agent overwrite its own memory files with untrusted external content, "payloads already planted in those files can successfully attack current and future sessions."

## Why it matters

Persistent memory — the thing that makes agents self-improving — is also a durable injection channel. An ordinary prompt injection dies with the session; one embedded in a memory file survives it. The risk lives on the read side: an agent trusts its own memory on load, so a payload already in the file runs every session without ever having to defeat the write-side guard.

## How it works

1. **The write guard mostly holds.** The agents resisted being tricked into overwriting their own memory files from untrusted external content.
2. **The read side does not.** A payload already sitting in a memory file influenced the current session and later ones, because loaded memory is treated as trusted context.
3. **Persistence is uneven.** "Attack success and payload persistence vary substantially across systems, models, adversarial goals, and multi-session attack sequences" — you cannot assume your stack is the safe one.

> Your agent's memory is input — trust it on every read the way you would any other untrusted file.

## The catch

This is a sandboxed synthetic workspace rather than an exploit caught in the wild, and the authors' aim is defense: "protect memory updates without removing useful agent adaptation." The two harnesses and four models each behaved differently, so the results demonstrate the threat model rather than ranking which agent is safe to trust.

[Security](/guide/security/)
