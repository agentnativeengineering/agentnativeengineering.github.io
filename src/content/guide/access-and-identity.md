---
title: "Access & Identity"
order: 8
question: "Who is the agent, and what is it actually allowed to touch?"
summary: "An agent is not its user. Give every agent its own verifiable identity, grant least-privilege scoped and short-lived access, delegate rather than pass credentials through, and put a human on every irreversible action."
principles:
  - "Give every agent its own verifiable identity — it is not its user."
  - "Grant least privilege: scoped, short-lived, delegated — never pass a token straight through."
  - "Put a software-enforced human gate on every irreversible action."
tools:
  - "OAuth 2.1 + token exchange (RFC 8693)"
  - "OpenFGA / ReBAC (Zanzibar)"
  - "Keycloak / OIDC"
updated: 2026-05-30
draft: false
---

When an agent acts, two questions decide whether it's safe: *who is acting*, and *what may they
touch*. The dangerous default is to let the agent borrow a human's broad credentials and inherit
everything that human can reach. That is how agents quietly surface data nobody meant them to see.

## The pain

The scale of the gap: Okta's *AI at Work 2025* report finds **~91% of organisations are using AI
agents, but only ~10% have a mature strategy to manage them as non-human identities.** Agents are
*non-human identities*, and treating them as a logged-in human is the root of the problem — they
*"surface sensitive information employees didn't realize they could access"* through inherited
permissions.

The classic failure is the **confused deputy**: the agent presents human-derived credentials and
the downstream service has no way to check that the human actually authorised *this specific*
action. The MCP authorization spec calls token *passthrough* out by name as an anti-pattern for
exactly this reason — an MCP server that forwards the inbound token is *"acting as a confused
deputy."* The fix is delegation: exchange a broad human token for a **narrow, short-lived,
audience-scoped** one (OAuth Token Exchange, RFC 8693; Resource Indicators, RFC 8707).

And the human gate matters most where actions can't be undone. Replit's agent deleted a production
database *during an explicit code-and-action freeze*, then misreported that rollback wouldn't work
— a textbook case for a gate that the model cannot talk its way past. Microsoft's rule:
human-in-the-loop *"ideally is enforced deterministically by the application layer… not delegated
to the model."*

## What production demands

- **A unique, verifiable identity per agent**, with narrowly scoped permissions, lifecycle
  controls, and accountability. Microsoft: *"No actions should be permitted by default. Actions are
  enabled explicitly, based on role and system needs."* (MUST)
- **Least privilege, scoped and short-lived.** The agent gets only what the task needs, for as
  long as the task needs it. (MUST)
- **Delegate, don't pass through.** Mint a downstream-scoped token via token exchange; never reuse
  the user's inbound credential. (MUST)
- **Fine-grained, query-time authorization** so retrieval/tool access is checked per resource
  against the principal's relationships — not a blanket grant. (MUST — critical for agentic RAG.)
- **A human gate on every irreversible/high-risk action**, software-enforced, with a checklist —
  intent, data lineage, permission chain, blast radius, rollback — not a bare "Approve?". (MUST)

## Patterns

Rate every tool by risk (read-only vs write, reversibility, blast radius) and require approval
above a threshold · a credential broker that exchanges tokens and verifies intent · ReBAC tuples
(Zanzibar-style) for "which docs may this principal see" enforced at query time · separate agent
identities so actions trace back to a specific agent (also see
[Observability](/guide/observability/)).

## Open-source building blocks

- **Authentication:** Keycloak / OIDC.
- **Authorization (ReBAC/FGA):** OpenFGA (CNCF, Zanzibar-style); SpiceDB for stricter consistency.
- **Delegation:** OAuth 2.1 with Token Exchange (RFC 8693) and Resource Indicators (RFC 8707);
  the MCP authorization spec mandates these and bans token passthrough.

## Demo → production

A demo agent runs with a developer's personal token and can reach everything that developer can.
The production agent has its own identity, holds a task-scoped token minted by exchange, can read
only the resources its relationships permit, and must pass a human gate before it deletes,
deploys, or pays.

## Verify it

Ask: if this agent were hijacked, what is the most it could reach?
If the honest answer is "everything its user can," you have an identity problem. Then try an
irreversible action and confirm a human gate — enforced in code, not policy — actually blocks it.

## Sources

- Okta — [AI at Work 2025](https://www.okta.com/newsroom/press-releases/) (~91% using AI agents; ~10% with a mature non-human-identity strategy) · framing via Resilient Cyber — [Identity is the agentic AI problem nobody has solved yet](https://www.resilientcyber.io/p/identity-is-the-agentic-ai-problem).
- Microsoft — [Defense in depth for autonomous AI agents](https://www.microsoft.com/en-us/security/blog/2026/05/14/defense-in-depth-autonomous-ai-agents/) ("unique, verifiable identity"; "no actions permitted by default"; deterministic HITL).
- [MCP authorization spec](https://modelcontextprotocol.io/specification/draft/basic/authorization) (OAuth 2.1, RFC 8707/9728; token passthrough as confused-deputy anti-pattern).
- OpenAI — [A practical guide to building agents](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf) (rate tools by risk; human approval for high-risk actions).
- [OpenFGA](https://openfga.dev/) (Zanzibar-style ReBAC) · Replit prod-DB deletion — [Fortune](https://fortune.com/2025/07/23/ai-coding-tool-replit-wiped-database-called-it-a-catastrophic-failure/).
