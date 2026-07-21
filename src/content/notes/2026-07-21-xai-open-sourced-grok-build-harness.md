---
title: "xAI open-sourced the whole Rust harness behind its coding agent"
date: 2026-07-21
summary: "xAI released Grok Build, the complete Rust harness — agent loop, tool layer, terminal UI, sandbox, and extension system — that turns a model into a working coding agent, under Apache 2.0."
takeaways:
  - "Read a shipped harness as its own artifact: the agent loop, tool layer, sandbox, and extension system are where a model becomes a usable coding agent — and now one lab's is fully open."
  - "The gap between coding agents increasingly lives in the scaffolding, not the weights, so a lab releasing its entire harness exposes a layer that is usually proprietary."
  - "Grok Build is Rust and Apache 2.0, and ships the terminal UI, workspace and version-control management, MCP support, sandboxing, and an extension system for skills, plugins, and hooks."
tags: ["harness-engineering", "open-source", "coding-agents", "tooling"]
sourceName: "Grok Build — xAI (GitHub, 2026)"
sourceUrl: "https://github.com/xai-org/grok-build"
sources:
  - title: "Grok Build — xAI (GitHub, 2026)"
    url: "https://github.com/xai-org/grok-build"
draft: false
---
## What happened

xAI published [Grok Build](https://github.com/xai-org/grok-build), described as its "terminal-based AI coding agent" that "understands your codebase, edits files, executes shell commands, searches the web, and manages long-running tasks." What is notable is the harness itself: the whole thing ships open (Apache 2.0, ~99.6% Rust) — the agent runtime, tool implementations, terminal UI, workspace management, sandboxing, and an extension system.

## Why it matters

A model on its own does not edit your repository — the harness around it does, by assembling context, dispatching tools, isolating execution, and rendering diffs. As frontier models converge, more of the difference between coding agents lives in that scaffolding. A lab releasing its entire harness turns a normally-hidden layer into something you can read, compare against your own, and learn from.

## How it works

1. **The runtime.** An agent loop with interactive, headless (scripting and CI), and editor-embedded entry points via the Agent Client Protocol.
2. **The tool and workspace layer.** File-editing, terminal, and search tools, plus workspace management over the host filesystem, version control, and execution.
3. **The edges.** MCP server support, sandboxing, and an extension system for skills, plugins, and hooks — the seams where you would adapt it.

> When models converge, the harness is the product — so read the ones that ship.

## The catch

It is a reference to read rather than a project to join: the repository's own policy is that external contributions are not accepted. And "open source" here covers the harness only — you still bring a model to run it. Treat it as one lab's design choices rather than a settled standard.

[Harness Engineering](/guide/harness-engineering/)
