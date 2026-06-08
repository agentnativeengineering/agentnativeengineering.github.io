---
title: "Memory & Context"
order: 3
question: "What does your agent actually remember, and what is it carrying in the window right now?"
summary: "An agent's working memory is a small, leaky window; its real knowledge has to live somewhere durable. Production agents decide what to keep, where to keep it, what to load back in — and how to isolate it per session, check its integrity, and expire unverified context before it can be poisoned."
principles:
  - "Keep durable state outside the context window."
  - "Pick the memory types the task needs; not every agent needs all four."
  - "Load context just in time; a full window is not a healthy one."
  - "Isolate memory per session and user, validate its integrity on read, and expire unverified content — poisoned memory persists across every later session."
tools:
  - "Graphiti"
  - "mem0"
  - "Letta"
  - "Redis"
updated: 2026-06-08
draft: false
---

An agent's working memory is the context window: fast, immediately accessible, and gone when the
session ends. Everything an agent is supposed to *know* across runs has to live somewhere else, and
deciding what goes where is most of the work.

## The pain

If the only record of what happened lives in chat history, there is nothing to recover from. The
window gets truncated and compacted; anything load-bearing that sits only there is already lost.
The *12-Factor Agents* framing of owning your context window puts it plainly: the transcript is the
wrong place for state you need to keep.

The window is also not a reliable place to *reason* from once it fills up. Anthropic describes the
effect as context rot: model performance declines as context length grows, and details buried
mid-window stop being recalled. A bigger context window does not fix this; the architecture has to
change.

## What production demands

- Externalize anything load-bearing into a durable store. In-memory or transcript-only state MUST
  NOT be the source of truth. (Execution durability — checkpoint, replay, resume — lives in
  [Durable Execution](/guide/durable-execution/).)
- Decide which memory types the task actually needs. A routing bot needs only working memory; a
  coding agent may need all four. Adding memory the task doesn't use adds cost without capability.
  (SHOULD)
- Manage the window deliberately: compact when it fills, retrieve just in time, and isolate
  sub-agent context so one agent's scratch work doesn't leak into another's. (SHOULD)
- Govern what gets written to long-term memory. A wrong fact that persists is worse than no memory
  at all. (SHOULD)

## Patterns

The CoALA framework (Cognitive Architectures for Language Agents) names four memory types worth
keeping distinct. **Working** memory is the context window itself. **Semantic** memory is durable
facts and conventions (often just Markdown files — a `CLAUDE.md` is semantic memory). **Procedural**
memory is how-to: skills loaded on demand rather than held in the window. **Episodic** memory is
distilled experience from past runs ("last time the auth bug was in the middleware"), not raw
transcripts. Not every agent needs all four; pick the ones the task uses.

For the window itself: compact a near-full conversation into a summary and continue; fetch data
just in time with lightweight identifiers instead of preloading it; give sub-agents isolated
context and hand them a complete, self-contained payload rather than expecting them to inherit the
parent's history. Watch tool-schema bloat too. A single MCP server shipping 80 tools can spend
roughly 55k tokens of definitions before the agent does anything, so prune the toolset to what the
job needs (see [Harness Engineering](/guide/harness-engineering/)).

For cross-session memory, a store like Graphiti tracks facts bi-temporally, so a later fact can
supersede an earlier one instead of silently contradicting it. This matters because reliability
decays with run length: METR finds agent success rates fall off roughly exponentially as tasks get
longer, which makes stale or wrong long-term facts more costly the further a run goes.

Treat the tooling as immature. Clay, running ~300M agent runs a month, reports that memory tools
"haven't really hit product market fit" for continual learning; what has shown promise for them is
plainer — append-only logs on a file system, and turning traces into reusable skills. Start simple
before reaching for a memory product (see [Scope & Simplicity](/guide/scope-and-simplicity/)).

## Open-source building blocks

- **Long-term / cross-session memory:** Graphiti (bi-temporal knowledge graph, handles
  contradiction), mem0, Letta.
- **Working store / cache:** Redis for session state and short-lived context.
- **Semantic & procedural memory:** plain files — Markdown for facts, `skill.md` skills loaded by
  progressive disclosure so they don't sit in the window.

## Demo → production

```text
demo         every turn:              # whole transcript resent each call
                send full history    # window fills, recall rots, bills climb

production  working: window          # compacted, just-in-time retrieval
            semantic: files          # facts, conventions
            procedural: skills       # loaded on demand
            episodic: store          # distilled, governed, bi-temporal
```

## Verify it

Start a fresh session and ask the agent something it should have learned in a previous run. Does it
recall the distilled fact, or only what's in the current window? Then check the reverse: after a
fact changes, does the old value still surface from long-term memory? If it does, your write path
has no governance for staleness.

## Sources

- Anthropic — [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) (context rot; compaction; just-in-time retrieval; notes persisted outside the context window).
- Sumers, Yao, Narasimhan & Griffiths / Princeton — [Cognitive Architectures for Language Agents (CoALA)](https://arxiv.org/abs/2309.02427) (working / semantic / episodic / procedural memory).
- Martin Keen, IBM Technology — [The Four Types of Memory Every AI Agent Needs](https://www.youtube.com/watch?v=BacJ6sEhqMo): the four CoALA types in practice, "not every agent needs all four," semantic memory as Markdown, skills via progressive disclosure.
- HumanLayer — [12-Factor Agents: Own your context window](https://github.com/humanlayer/12-factor-agents/blob/main/content/factor-03-own-your-context-window.md).
- Toby Ord / METR — [Is there a half-life for the success rates of AI agents?](https://www.tobyord.com/writing/half-life) (success decays ~exponentially with task length).
- Graphiti / Zep — [Graphiti: bi-temporal knowledge graph for agent memory](https://github.com/getzep/graphiti) (contradiction handling across time).
- Jeff Barg, Clay (LangChain) — [How Clay manages 300M agent runs a month with LangSmith](https://www.youtube.com/watch?v=cx6_tb6HCeY): "memory tools of today haven't really hit product market fit"; append-only logs and skills-from-traces.
- Martin Keen, IBM Technology — [CLI vs MCP: How AI Agents Choose the Right Tool for the Job](https://www.youtube.com/watch?v=g9JIUM0MHgQ): an MCP server shipping 80 tools ≈ 55k tokens of schema in the window.
- Cloud and Coffee with Navnit — [Avoid the Context Trap: Orchestrating Subagents in the Claude Agent SDK](https://www.youtube.com/watch?v=H-8gUvYfRPs): sub-agents start with null context and need a complete, self-contained payload.
