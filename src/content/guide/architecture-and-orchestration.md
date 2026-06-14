---
title: "Architecture & Orchestration"
order: 5
phase: "build"
question: "What is the simplest architecture for this task — and before you split one agent into many, what have you actually bought, and what new failure surface did you just sign up for?"
summary: "Architecture is pattern selection: match single-agent, sequential, parallel, or hierarchical to your control, complexity, and budget. Going multi-agent multiplies both capability and failure surface and costs roughly 15x the tokens of a single agent. The work is in the seams: structured handoffs, isolated context, explicit trust boundaries, and a separate verifier that distrusts the agent it checks."
principles:
  - "Match the pattern — single, sequential, parallel, hierarchical — to your control, complexity, and budget; stay single-agent until one provably can't do the job."
  - "Keep the creator and the verifier as separate agents with separate context — one model cannot optimise for doing and for judging at once."
  - "Pass context explicitly between agents; sub-agents inherit nothing, verification gates sit at every handoff, and a delegate never inherits the delegator's full rights."
  - "Verify a peer's identity and authority before accepting its handoff — a compromised low-privilege agent will relay valid-looking instructions to a high-privilege one."
tools:
  - "LangGraph (supervisor)"
  - "A2A protocol"
  - "Claude Agent SDK subagents"
updated: 2026-06-08
draft: false
---

Most "we need multiple agents" instincts are really "this prompt got too long." Splitting the
work across agents can help, but it is an architecture decision with a price tag, not a default.
Settle [scope and simplicity](/guide/scope-and-simplicity/) first; only then reach for orchestration.

## The pain

Anthropic measured their own multi-agent research system using *"about 15x more tokens than chats"* — the economics only close on high-value work. You also multiply the failure surface: every
extra agent is another context window that can rot, another handoff that can drop information,
another place a wrong premise can enter and never get questioned.

UC Berkeley's MAST study developed its failure taxonomy from around 150 hand-annotated multi-agent traces and found that most
failures are not bad single steps. They are *inter-agent misalignment*: one agent misreads
something, passes it on, and every downstream agent treats the flawed input as an established fact.
There is no human-style "that number looks off" reflex unless you build one in.

## What production demands

- **A single agent first.** Reach for multiple agents only when one provably cannot hold the task,
  not because the prompt feels crowded. (MUST)
- **A separate verifier.** The agent that did the work has a stake in it passing, so a fresh agent
  with fresh context — ideally a different model — checks the output. Factory's term for this is
  validation that is "adversarial by design." (MUST)
- **Explicit handoffs.** A finishing agent writes down what it did, what it left undone, what it
  ran, and what it found. The next agent reads that, not the prior chat history. (MUST)
- **Verification gates between agents,** so a bad value is caught at the boundary before it becomes
  a downstream premise. (SHOULD) See [reliability](/guide/reliability/).
- **A coordination layer that is built for agents.** Reusing GitHub or a ticket tracker as the
  place agents synchronise gets noisy fast and hides where a human should step in. (SHOULD)

## Patterns

Luke Alvoeiro (Factory) offers a five-way taxonomy for how agents relate: **delegation** (a parent
spawns a child for a scoped task), **creator–verifier** (one builds, another checks),
**direct communication** (peers talk with no coordinator — fragile, state fragments),
**negotiation** (peers contend over a shared resource), and **broadcast** (one informs many to keep
a long run coherent).

In practice these compose into a **supervisor / orchestrator–worker–verifier** shape: an
orchestrator plans and defines what "done" means, workers each take one scoped feature with clean
context, and validators check behaviour end to end. A **triage router** front-ends requests and
dispatches to the right specialist. **Parallel fan-out** works well for read-only sub-tasks (search,
research) and badly for writes, where agents step on each other and coordination overhead eats the
speedup.

## Open-source building blocks

LangGraph's supervisor pattern gives you an orchestrator node that routes to worker nodes with
explicit state. The [A2A protocol](https://a2a-protocol.org/latest/) (now a Linux Foundation
project) is an open wire format for agents built on different frameworks to discover each other and
hand off long-running tasks without exposing internal state. The Claude Agent SDK exposes
sub-agents via its task tool, each with its own system prompt, tool allow-list, and — critically — a
blank context you must fill.

## Demo → production

The demo version spawns a sub-agent and asks it to *"synthesise the previous findings."* It errors,
because the sub-agent started with no memory and never saw those findings. The production version
treats every sub-agent as starting with no memory: it ships a self-contained payload — the content,
separated from metadata, with the goal and the quality bar — and lets the sub-agent work toward the
goal rather than following dictated steps. Nate B Jones puts the verifier rule plainly: you cannot
have the same agent optimising for two goals, so the judge is a different agent entirely.

## Verify it

Feed the system an input with a planted error — a wrong quantity, a stale URL — three agents
upstream of where it matters. Does a verification gate catch it at the boundary, or does it surface
at the end as confidently-built output? Then strip the parent's context from a sub-agent's prompt
and confirm it still has everything it needs to act.

## Sources

- Anthropic — [How we built our multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system) (the ~15x token figure; orchestrator–worker architecture).
- Luke Alvoeiro, Factory — [The Multi-Agent Architecture That Actually Ships](https://www.youtube.com/watch?v=ow1we5PzK-o) (five-pattern taxonomy; orchestrator/worker/validator; structured handoffs; "validation is adversarial by design"; serial writes with read-only parallelism).
- Lou Bichard, Ona — [The Missing Primitive for Agent Swarms](https://www.youtube.com/watch?v=5Sui_OnSRlY) (runtime/orchestration/triggers are solved, coordination is not; "GitHub is not a coordination layer for agents").
- Cloud and Coffee with Navnit — [Avoid the Context Trap: Orchestrating Subagents in the Claude Agent SDK](https://www.youtube.com/watch?v=H-8gUvYfRPs) (sub-agents inherit no context; explicit payload transfer; goals over step-by-step).
- UC Berkeley — [Why Do Multi-Agent LLM Systems Fail? (MAST)](https://arxiv.org/abs/2503.13657) (taxonomy from ~150 hand-annotated traces; inter-agent misalignment; flawed input accepted downstream as premise).
- Linux Foundation — [Agent2Agent (A2A) Protocol](https://a2a-protocol.org/latest/) (open inter-agent communication standard).
