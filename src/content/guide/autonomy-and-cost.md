---
title: "Autonomy, Cost & Control"
order: 6
question: "What stops a looping agent before it burns the weekend's budget?"
summary: "An agent doesn't crash when it goes wrong — it spends. Bound autonomy in steps, time, money, and agency with a hard cutoff enforced before the next call, and govern rollout, policy, spend, and acceptable-use from one control plane."
principles:
  - "Cap autonomy in steps, time, and money — and enforce the cap before the next call."
  - "Alerts are not enforcement; a budget without a hard cutoff is a wish."
  - "Govern rollout, policy, spend, and acceptable-use from one control plane — and automate the bookkeeping around incidents, not the containment decision."
tools:
  - "LiteLLM (per-key/session budgets)"
  - "Durable-workflow cancellation"
  - "Agent gateway / control plane"
updated: 2026-06-08
draft: false
---

Deterministic software fails loudly: it throws, it pages, it stops. An agent fails *quietly and
expensively* — it keeps calling the model. The defining operational fact of this domain is that an
agent that goes wrong doesn't crash, it spends, and the only thing that reliably stops the spend is a
control that fires *before* the next API call.

## The pain

The canonical incident: four agents coordinating over a protocol got into a generate-then-verify
loop and ran for **264 hours — eleven days — racking up \$47,000** before a human noticed the
billing dashboard. The postmortem's lesson: there were *"no
per-agent budget caps, and no mechanism that could have terminated the session before the next API
call completed."* They *had* monitoring. *"Cost monitoring reveals what happened; cost enforcement
prevents what's happening next."*

It isn't a one-off. A Claude Code session was reported consuming **1.67 billion tokens in ~5
hours** through plan-execution loops and recursive calls. Developers report four-figure bills from
agents left running over a weekend. And the labs confirm the underlying need for stopping
conditions — Anthropic: agents require *"stopping conditions (such as a maximum number of
iterations) to maintain control."*

Crucially, the cutoff must be **deterministic, not delegated to the model.** Microsoft is explicit:
enforcement *"ideally is enforced deterministically by the application layer, or orchestrator, not
delegated to the model"* — because *"if escalation is left to probabilistic reasoning, an
adversarial prompt or an ambiguous instruction can bypass review entirely."*

## What production demands

- **Hard caps on iterations, wall-clock time, and spend per session** — enforced at the
  orchestration/gateway layer, terminating the run *before* the next call when a cap is crossed.
  (MUST)
- **Cost attribution at ingest**, keyed by `(tenant, workload, model)` — by invoice time the
  labels you needed are gone, and averages lie (a small share of tenants often drives most spend).
  (MUST)
- **Enforcement over alerting.** Dashboards and Slack alerts are asynchronous; in a fast loop the
  session finishes before anyone reads them. (MUST)
- **Decompose long-horizon tasks** into short, checkpointed units — both for reliability (success
  decays with length) and so a cap can bound a unit cleanly. (SHOULD)
- **Route by cost:** cheap models for easy turns, escalate only when needed. (SHOULD)

## Patterns

The composed pattern is a budget at the **LLM gateway** (per-key / per-session `max_budget`,
reject on exceed) *plus* a **budget check at every durable-workflow yield point** that cancels the
run mid-flight. The gateway stops new calls; the workflow cancellation kills an in-flight loop —
together they are the cutoff the \$47K incident lacked.

Teams that run agents at scale converge on a **control plane**: one layer that governs rollout,
policy, cost, and audit instead of a scatter of scripts. Uber routes every tool call through an MCP
gateway it calls "the control plane for all MCP interactions"; LaunchDarkly's AgentControl wraps
guarded rollout, auto-rollback on a latency or cost regression, and per-model budgets behind "one
control plane, one single pane of glass." The caps above are the enforcement primitive; the control
plane is where you operate them across many agents.

## Open-source building blocks

- **LiteLLM** — one OpenAI-compatible chokepoint for 100+ providers with per-key/team/user and
  per-session budgets, request rejection on exceed, and full token/cost logging.
- **Durable-execution cancellation** (Temporal/Restate) — the mechanism that can actually halt a
  running agent at its next step.

## Demo → production

A demo agent loops `while not done` with no ceiling — and one bad stopping condition becomes an
eleven-day bill. The production agent has a max-iterations cap, a per-session token budget at the
gateway that returns `429` at 100%, and a workflow that cancels the run before the next call.

## Verify it

Give an agent a task it can't complete and let it run. Does something **stop it** — a max-iteration
cap, a token budget, a wall-clock limit — before it spends more than you'd lose comfortably? If the
only thing that would have stopped it is you noticing the dashboard, you have alerting, not
enforcement.

## Sources

- [The \$47,000 agent loop: why token-budget alerts aren't budget enforcement](https://dev.to/waxell/the-47000-agent-loop-why-token-budget-alerts-arent-budget-enforcement-389i) (264-hour loop; "enforcement prevents what's happening next").
- Anthropic — [Building effective agents](https://www.anthropic.com/research/building-effective-agents) ("stopping conditions… to maintain control") and [multi-agent system](https://www.anthropic.com/engineering/multi-agent-research-system) (effort budgets; ~15× token use).
- Microsoft — [Defense in depth for autonomous AI agents](https://www.microsoft.com/en-us/security/blog/2026/05/14/defense-in-depth-autonomous-ai-agents/) (enforce deterministically at the application/orchestrator layer, not via the model).
- GitHub — [anthropics/claude-code issue #4095](https://github.com/anthropics/claude-code/issues/4095) (1.67B-token runaway).
- [LiteLLM budgets & rate limits](https://docs.litellm.ai/docs/proxy/users) (per-key/session `max_budget`, reject on exceed).
- LaunchDarkly — [AgentControl: Real-time control for agents in production](https://www.youtube.com/watch?v=4dkFTXbXIYI) (guarded rollout, auto-rollback on latency/cost regression, per-model budgets; "one control plane, one single pane of glass").
- Agentic AI Foundation — [How Uber Runs 60,000 AI Agent Tasks Per Week With MCP](https://www.youtube.com/watch?v=yVqMxBahjfA) (the MCP gateway as "the control plane for all MCP interactions").
- Anthropic — [Zero Trust for AI Agents](https://cdn.prod.website-files.com/6889473510b50328dbb70ae6/6a1611a04085d7cd3dadc924_Claude-eBook-Zero-Trust-for-AI-Agents-05182026.pdf) (AI governance and acceptable-use policy from one control plane; "automate the bookkeeping around incidents, not the decisions").
