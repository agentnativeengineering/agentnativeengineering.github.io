---
title: "Harness Engineering"
order: 12
phase: "engineer"
question: "When the agent is doing the engineering, what is the system around the model that makes its work reliable?"
summary: "An agent is a model plus a harness: the tools, context, memory, sub-agents, prompts, and hooks that connect the model to the real world. Harness engineering is the craft of building and evolving that wrapper so an agent can do production engineering work — kept in version control and under managed settings users can't override, because a modified config is as dangerous as modified code. It is one of the fastest-emerging skills in the field."
principles:
  - "Treat every agent failure as a harness defect, not a model defect — encode the fix into the repo."
  - "Engineer the context, not just the prompt: keep sessions small, focused, and token-efficient."
  - "Keep harness config in version control and under managed settings users can't override — treat a config change like a code change."
  - "Move work off your laptop and out of the loop only as fast as your governance and review can follow."
tools:
  - "AGENTS.md"
  - "Skills"
  - "Claude Agent SDK / Claude Code"
  - "git worktrees"
updated: 2026-06-08
draft: false
---

Most of this guide treats the agent as a system you operate. This page is about the case where the
agent is the engineer, and you are building the system around it. A working definition has settled
in: an agent is a model plus a harness, where the harness is everything that connects the model to
the real world — its tools, the context it sees, its memory, its sub-agents, its prompts, and its
hooks. The model reasons. The harness is what you build, and it is where almost all of the
reliability lives.

## The pain

A bare model can do very little. It cannot read a file, run a command, or open a pull request. The
coding tool you choose — Claude Code, Codex, or another — is itself a harness someone engineered
around the model, and on top of it you build your own layer of rules, skills, tools, and hooks
([Cole Medin, *Harness Engineering*](https://www.youtube.com/watch?v=ulNsa0sD8N0)). The trap is
what Medin calls the skill-issue reframe: the agent does something dumb, the engineer blames the
model, and the fix gets filed under "wait for the next version." Usually the failure is legible.
The agent did not know a convention, or it ran a destructive command. That is a missing line in your
harness, not a missing IQ point in the model.

## What production demands

- **Treat each failure as a harness defect.** The agent broke a convention, so you add it to
  `AGENTS.md`; it ran something destructive, so you add a hook that blocks it. (SHOULD)
- **Block destructive actions deterministically.** A pre-tool-use hook that rejects dangerous
  commands before they execute, plus a stop hook that runs tests, lint, and type-checks before the
  agent declares itself done. (MUST)
- **Keep each session small and focused.** Plan, implement, and validate in separate sessions,
  each handing off an artifact, so no single context window is overwhelmed
  ([Medin](https://www.youtube.com/watch?v=ulNsa0sD8N0)). (SHOULD)
- **Make context a first-class input.** Patrick Debois at the Background Agents Summit framed
  context as "the new code," deserving the same engineering rigor as code
  ([Ona, *Background Agents Summit 2026*](https://www.youtube.com/watch?v=1VZPX7QD2tk)). (SHOULD)

## Patterns

Context engineering is the foundation. Anthropic defines it as "the set of strategies for curating
and maintaining the optimal set of tokens (information) during LLM inference," distinct from prompt
engineering, with the goal of "the smallest set of high-signal tokens that maximize the likelihood
of some desired outcome" ([Anthropic, *Effective context engineering for AI
agents*](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)). The
named techniques are concrete: **compaction** (summarize a near-full window and reinitiate),
**just-in-time retrieval** (hold lightweight references and load data on demand rather than
front-loading it), structured note-taking, and sub-agents that work in clean windows.

Encode your process into the repository. `AGENTS.md` is a plain, open format for project-specific
agent instructions — conventions, build steps, test commands — adopted across more than 60,000
projects and now stewarded by the Linux Foundation's Agentic AI Foundation alongside MCP
([Linux Foundation
announcement](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation)).
Skills go further: composable, shareable, versioned recipes for how work gets done. Uber treats
skills as recipes for using its tools, shared across teams, with evaluations that check invocation
correctness and output quality so versions can be A/B-tested and promoted from staging to production
([Agentic AI Foundation, *How Uber runs 60,000 AI agent tasks per
week*](https://www.youtube.com/watch?v=yVqMxBahjfA)).

The workflow scales by orchestrating sessions, not by enlarging one. Run a handful of parallel
sessions, isolate them with **git worktrees** so they do not collide on the same files, and hand
artifacts between them ([Zen van Riel, *The Agentic Engineer
Workflow*](https://www.youtube.com/watch?v=ElYxdpYi4U0)). Ona describes the trajectory as moving
from in-the-loop to on-the-loop to out-of-the-loop, where "planning becomes specification,
implementation becomes delegation, testing becomes governance, and review becomes triage"
([Ona](https://www.youtube.com/watch?v=1VZPX7QD2tk)). Worth stating plainly: the practitioners
seeing real gains report roughly 30–60%, not 5x, and reviewing AI-generated code becomes the new
bottleneck if you let throughput outrun it ([van
Riel](https://www.youtube.com/watch?v=ElYxdpYi4U0)).

## Open-source building blocks

- **Process in the repo:** `AGENTS.md` ([agents.md](https://agents.md/)), Skills as versioned,
  shareable recipes.
- **Harness:** Claude Code and the Claude Agent SDK; pre-tool-use and stop hooks for deterministic
  guardrails.
- **Orchestration:** git worktrees for isolated parallel sessions; loop scripts that chain
  plan → implement → review sessions until a done condition is met.

## Demo → production

A demo harness is one long chat: a single session, a growing context window, and you re-explaining
the codebase every time it drifts. A production harness writes the conventions into `AGENTS.md`,
encodes the plan/implement/validate steps as skills, blocks destructive commands with a hook, gates
"done" on a passing test run, and splits the work across focused sessions in separate worktrees. It
gets more reliable each time it fails, because each failure becomes a rule written back into the
harness.

## Verify it

Take the last thing one of your agents got wrong. Is there now a line in `AGENTS.md`, a hook, or a
skill that would stop it happening again — or did you just rerun it and hope it went better? If the
harness did not change, the same failure is still available.

This loops back to the rest of the guide. When the agent is the engineer, the trace is the
code-review surface, so you need full instrumentation of what it did and why
([Observability](/guide/observability/)). The eval is the spec, the acceptance criteria the agent is
delegated against ([Evaluation](/guide/evaluation/)). And the agent's work must run under the same
identity and human-gate discipline as any other actor in production
([Access & Identity](/guide/access-and-identity/)).

## Sources

- Cole Medin — [*Harness Engineering: What Separates Top Agentic Engineers Right Now*](https://www.youtube.com/watch?v=ulNsa0sD8N0) (model + harness; the skill-issue reframe; every mistake becomes a rule; hooks; separate plan/implement/validate sessions).
- Ona — [*Background Agents Summit 2026: What Comes After AI Coding Assistants*](https://www.youtube.com/watch?v=1VZPX7QD2tk) (in/on/out of the loop; "planning becomes specification… review becomes triage"; application engineering becoming harness engineering; "context is the new code", Patrick Debois).
- Agentic AI Foundation — [*How Uber Runs 60,000 AI Agent Tasks Per Week With MCP*](https://www.youtube.com/watch?v=yVqMxBahjfA) (skills as shareable recipes; eval, A/B-test, and promote skills).
- Zen van Riel — [*The Agentic Engineer Workflow You Need in 2026*](https://www.youtube.com/watch?v=ElYxdpYi4U0) (parallel sessions, git worktrees, AI + human review; 30–60% not 5x).
- Anthropic — [*Effective context engineering for AI agents*](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) (definition vs prompt engineering; compaction, just-in-time retrieval, sub-agents).
- Linux Foundation — [*Announcing the Agentic AI Foundation*](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation) and [agents.md](https://agents.md/) (AGENTS.md as an open standard, 60,000+ projects, now an AAIF project).
