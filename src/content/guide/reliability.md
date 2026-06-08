---
title: "Reliability"
order: 5
question: "When — not if — a tool fails, what does your agent do next?"
summary: "For agents, errors are the common case, not the edge case, and the reliability gap is in the runtime around the model, not the model. Idempotent side effects, per-tool timeouts, verification between steps, and a tested path back to a known-good state are table stakes."
principles:
  - "Treat failure as the default path: every tool call can time out, error, or return garbage."
  - "Make every side effect idempotent — safe to retry."
  - "Verify between steps and between agents; never accept upstream output as ground truth."
  - "Keep a tested rollback to a known-good state; recovery you haven't rehearsed will fail when you need it."
tools:
  - "Idempotency keys"
  - "Circuit breakers"
  - "Evaluator-optimiser / verifier loops"
updated: 2026-06-08
draft: false
---

A demo can call a tool when everything works. Production is when things don't: a tool
hangs, returns partial results, mutates state, or leaves the workflow somewhere the model can't
reason its way out of. Reliability is what you build *around* the model for exactly those moments.

## The pain

As one production guide puts it, *"the reliability
gap is not in the model. It is in the runtime layer around it."* And agents are
non-deterministic by construction: Anthropic notes they *"make dynamic decisions and are
non-deterministic between runs, even with identical prompts,"* which is why you cannot test your
way to determinism — you engineer for failure instead.

The arithmetic compounds: chain seven tool calls at 99.5% success each and the *workflow* succeeds
only ~96.5% of the time — dozens of failed runs a day at scale. And blind retries are their own
hazard: a real incident had *"an agent double-charge a test customer \$847 because a Stripe API
call timed out and the retry logic didn't check whether the first charge actually went through."*

In multi-agent systems the errors don't stay local. UC Berkeley's MAST study (taxonomy from ~150
annotated traces) found a signature cascade: one agent misreads *"10.5K units"* as *"105K units,"* passes it
downstream, and every receiving agent *"builds on the flawed input as a valid premise"* — there is
no human-style "that number looks wrong" check unless you build one.

## What production demands

- **Track four tool outcomes, not two:** success, explicit failure, timeout, and *unknown* — and
  treat *unknown* as requiring review, never as success. (MUST)
- **Idempotency on every stateful write.** If a tool can charge, refund, email, delete, or deploy,
  it must be safe to retry — use idempotency keys and check whether the first attempt landed before
  retrying. (MUST)
- **Per-tool timeouts** matched to each tool's normal runtime, plus retries with backoff and
  circuit breakers on every external call. (MUST)
- **Verification gates** between steps and between agents — the loop is *gather context → act →
  verify → repeat*; *"agents that can check and improve their own output… catch mistakes before
  they compound."* (SHOULD)
- **Graceful degradation:** a partial, honest answer beats a confident wrong one. (SHOULD)

## Patterns

Idempotency keys and a dedupe store for writes · retry-with-backoff + circuit breaker per tool ·
an explicit verifier step (evaluator-optimiser) before any irreversible action · "looks wrong"
sanity checks at agent-to-agent boundaries so a bad value can't propagate as accepted fact.

## Open-source building blocks

Idempotency and retry semantics come from your durable-execution layer (Temporal, DBOS,
Restate) rather than from a model SDK. Verifier loops are a prompt/orchestration pattern; tool
schemas (e.g. Pydantic-validated arguments) catch a large share of bad calls before they execute.

## Demo → production

A demo agent calls `charge_card()` and retries on any error — and double-charges. The production
agent passes an idempotency key, records the outcome durably, distinguishes *timeout* from
*failure*, and asks a verifier "did this actually go through?" before trying again.

## Verify it

Inject failure on purpose: make a tool time out, return a 500, and return a plausible-but-wrong
value. Does the agent retry safely (no duplicate side effect), surface the unknown for review, and
catch the bad value at a verification gate — or does it continue as if nothing failed?

## Sources

- Adaline Labs — [Reliable tool-using AI agents in production](https://labs.adaline.ai/p/reliable-tool-using-ai-agents-production) ("the reliability gap is in the runtime"; four outcomes; idempotency keys; per-tool timeouts).
- Anthropic — [Building a multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system) (non-determinism between identical runs) and [Building agents with the Claude Agent SDK](https://claude.com/blog/building-agents-with-the-claude-agent-sdk) ("catch mistakes before they compound").
- UC Berkeley — [Why do multi-agent LLM systems fail? (MAST)](https://arxiv.org/abs/2503.13657) (taxonomy from ~150 annotated traces; cascading misread propagated as premise).
- BuildMVPFast — [Idempotent AI agents](https://www.buildmvpfast.com/blog/idempotent-ai-agent-retry-safe-patterns-production-workflow-2026) (the $847 double-charge; compounding-reliability math).
