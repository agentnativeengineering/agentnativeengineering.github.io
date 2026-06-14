---
title: "Observability"
order: 10
phase: "operate"
question: "Can you see exactly what your agent did, and why?"
summary: "Classic latency-and-error metrics are necessary but insufficient for non-deterministic systems. You need the full trace of reasoning, tool calls, and tokens — to the OpenTelemetry GenAI standard — because the per-run trace, not the aggregate, tells you what happened. And when a compromise is what you're watching for, shrink time-to-detect: dwell time and coverage are the metrics that contain it."
principles:
  - "You can't operate what you can't trace: capture reasoning, tool calls, and tokens per step."
  - "Instrument to the OpenTelemetry GenAI conventions, not a private dialect."
  - "Shrink time-to-detect: put a model on the front of the alert queue for first-pass triage, and keep the human for the judgement call."
tools:
  - "OpenTelemetry GenAI (gen_ai.*)"
  - "Langfuse"
  - "Arize Phoenix"
  - "LangSmith"
updated: 2026-06-08
draft: false
---

When a deterministic service is slow, the symptom narrows the cause. When an agent takes 45
seconds, it could be the model, a slow tool, a retry loop, or a planning detour — and the same
symptom has many causes on different runs. Aggregate dashboards can't disambiguate that. The trace
can.

## The pain

Agent observability is not APM. *"Unlike traditional APM that monitors latency and errors, agent
observability tracks output quality, faithfulness, safety, and behavioral drift"* across *"every
step an AI agent takes: LLM calls, tool invocations, retrieval steps, planning decisions, and the
cascading effects between them."* Anthropic, building a real multi-agent system, found the same:
*"Adding full production tracing let us diagnose why agents failed and fix issues systematically."*

There are two failure modes. One is having *no* trace — operating with no visibility on a non-deterministic system.
The other is subtler: buying a platform and calling it done. As practitioners note, teams that
*"buy a platform and call it done tend to have dashboards full of data they cannot act on"* — the
value is the **trace → eval → fix loop**, and *"that loop is where reliability comes from."*

And there is now a standard, so you don't have to invent a private schema. The OpenTelemetry GenAI
semantic conventions define `gen_ai.*` spans — `invoke_agent`, `execute_tool`, the model `chat`
call — with token usage, finish reasons, and (optionally) messages. Microsoft ties it back to
identity: *"separate agent identity enables meaningful observability, because actions can be traced
back to a specific agent."*

## What production demands

- **Full-trace instrumentation** of every run: the agent span, each LLM call, each tool
  invocation, retrievals, and the token/cost of each step. (MUST)
- **Conform to the OpenTelemetry GenAI conventions** (`gen_ai.*`) so your traces are portable
  across backends instead of a dialect only your code understands. (SHOULD)
- **Per-step cost, latency, and outcome** captured on the span — feeds both
  [Autonomy & Cost](/guide/autonomy-and-cost/) and [Evaluation](/guide/evaluation/). (MUST)
- **Close the loop:** route failing traces into eval cases and fixes — observability you don't act
  on doesn't improve reliability. (SHOULD)
- **Attribute every action to a specific agent identity** for auditability. (SHOULD)

## Patterns

Span hierarchy `invoke_agent → chat → execute_tool` · shared trace IDs linking agent spans to
underlying system spans so you can cross-reference an agent decision with the infra it touched ·
tail-based sampling to keep the interesting (slow, failed, expensive) traces · drift detection on
output quality, not just latency.

## Open-source building blocks

- **Standard:** OpenTelemetry GenAI semantic conventions (`gen_ai.*`).
- **Tracing/eval backends:** Langfuse (self-hostable), Arize Phoenix (open source, retrieval-aware
  metrics), LangSmith (deep LangChain/LangGraph integration). Frameworks like LangChain, CrewAI,
  and AutoGen emit OTel-compatible spans.

## Demo → production

A demo logs the final answer and the total latency. When it misbehaves, you guess. The production
agent emits a `gen_ai.*` trace per run — every thought, tool call, and token — so "why did it take
45 seconds and pick the wrong tool?" is a query, not a guess.

## Verify it

Take your worst recent agent failure. Can you pull a single trace that shows every step it took,
which tool was slow, how many tokens each step burned, and where it went wrong — without adding
print statements after the fact? If not, you're operating on guesswork.

## Sources

- OpenTelemetry — [GenAI agent spans semantic conventions](https://opentelemetry.io/docs/specs/semconv/gen-ai/gen-ai-agent-spans/) (`invoke_agent`, `execute_tool`, `gen_ai.*`) and [Inside the LLM call: GenAI observability](https://opentelemetry.io/blog/2026/genai-observability/).
- Anthropic — [Building a multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system) ("full production tracing let us diagnose why agents failed").
- MLflow — [Top agent observability tools, 2026](https://mlflow.org/top-5-agent-observability-tools/) (agent observability ≠ APM).
- Latitude — [Best LLM observability tools for agents](https://latitude.so/blog/best-llm-observability-tools-agents-latitude-vs-langfuse-langsmith) ("dashboards full of data they cannot act on"; the trace→eval→fix loop).
- Microsoft — [Defense in depth for autonomous AI agents](https://www.microsoft.com/en-us/security/blog/2026/05/14/defense-in-depth-autonomous-ai-agents/) (identity enables observability).
- Anthropic — [Zero Trust for AI Agents](https://cdn.prod.website-files.com/6889473510b50328dbb70ae6/6a1611a04085d7cd3dadc924_Claude-eBook-Zero-Trust-for-AI-Agents-05182026.pdf) (dwell time and coverage as the first metrics to move; a model on the front of the alert queue for first-pass triage; detection speed).
