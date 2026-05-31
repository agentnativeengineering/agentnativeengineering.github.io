---
title: "Scope & Simplicity"
order: 1
question: "Should this even be an agent — or is a workflow enough?"
summary: "The first operational decision is whether to use an agent at all. Most production failures are design failures: an agent where a workflow would do, broad autonomy where narrow scope was safer."
principles:
  - "Use the simplest thing that works; add agency only when it pays for itself."
  - "Don't build an agent when a deterministic workflow will do the job."
  - "Give each agent narrow responsibilities — not broad, open-ended autonomy."
tools:
  - "Deterministic workflows"
  - "LangGraph (explicit graphs)"
  - "Step Functions / Temporal workflows"
updated: 2026-05-30
draft: false
---

Every other domain in this guide is about keeping an agent alive in production. This one is
about a cheaper outcome: not needing to. The most-repeated advice from the labs building these
systems is not *how* to make agents autonomous — it is *restraint* about when to.

## The pain

The failure mode is enthusiasm. A task that is really a fixed sequence of steps gets built as an
open-ended agent loop, and now you own non-determinism, runaway cost, and a debugging surface you
never needed.

- Anthropic's guidance is explicit: *"find the simplest solution possible, and only increase
  complexity when needed."* Agentic systems *"often trade latency and cost for better task
  performance, and you should consider when this tradeoff makes sense."*
- OpenAI's build guide says the same in reverse: *"start with a single agent"* and evolve to
  multi-agent orchestration *"only when it becomes necessary"* — for many problems *"a
  deterministic script may suffice."*
- Microsoft names the anti-pattern directly: the *"everything agent"* — *"a single agent with
  broad permissions, many tools, and loosely defined responsibilities."* It is the hardest thing
  to secure, observe, and bound.
- The community framing is blunter still: much of what ships as an "agent" is mostly a workflow,
  and from the *12-Factor Agents* project, *"the best ones are mostly just well-engineered software
  with LLMs sprinkled in at key points."*

There is data behind the caution: a 2025 survey of practitioners running agents in production found
about **68% execute fewer than ten steps** before a human intervenes. Teams are deliberately trading
capability for controllability — because the systems that hold up in production are the bounded ones.

## What production demands

- **Choose workflow-vs-agent deliberately, and write down why.** If the control flow is fixed,
  make it a workflow with LLM steps — not an agent. (MUST)
- **Prefer deterministic control flow.** Let the model decide *within* steps, not the topology of
  the whole system, wherever the topology is knowable. (SHOULD)
- **Bound the tools per agent.** Tool-selection accuracy degrades as the toolset grows; specialise
  instead of accumulating. (SHOULD)
- **Single agent before multi-agent.** Multi-agent systems use roughly **15× the tokens** of a
  chat and multiply the failure surface; reach for them only when the task value justifies it.
  (SHOULD)

## Patterns

Most "agent" use cases are actually one of a handful of **workflow** shapes — prompt chaining,
routing, parallelisation, orchestrator-workers, evaluator-optimiser. These are composable, mostly
deterministic, and far easier to operate. Reserve the true open-ended agent loop (model drives its
own control flow until done) for tasks where you genuinely cannot enumerate the steps in advance.

## Open-source building blocks

A plain function call or a typed state machine beats a framework here. When you do need structure,
use one that makes the control flow **explicit and inspectable** — LangGraph graphs, Temporal or
Step Functions workflows — rather than an opaque autonomous loop.

## Demo → production

A demo wires twelve tools into one prompt and lets the model "figure it out." In production that
agent picks the wrong tool, loops, and blows its context budget. The production version is a small
graph: three deterministic steps, one LLM decision point, a clear boundary on what it may touch.

## Verify it

Try to draw the system's control flow as a diagram. If you *can* draw a fixed topology, it is a
workflow — build it as one, and you have removed a whole class of production problems before
they start.

## Sources

- Anthropic — [Building effective agents](https://www.anthropic.com/research/building-effective-agents) (simplicity; the latency/cost tradeoff; workflow patterns).
- OpenAI — [A practical guide to building agents](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf) ("start with a single agent"; "a deterministic script may suffice").
- Microsoft — [Defense in depth for autonomous AI agents](https://www.microsoft.com/en-us/security/blog/2026/05/14/defense-in-depth-autonomous-ai-agents/) (the "everything agent" anti-pattern; narrow responsibilities).
- [Measuring Agents in Production](https://arxiv.org/abs/2512.04123) (practitioner survey; ~68% of production agents execute fewer than ten steps before human intervention).
- HumanLayer — [12-Factor Agents](https://github.com/humanlayer/12-factor-agents) ("well-engineered software with LLMs sprinkled in").
- Anthropic — [Building a multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system) (multi-agent systems use ~15× the tokens; use only when task value is high).
