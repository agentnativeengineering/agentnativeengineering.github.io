---
title: "The intersection rule: scope an agent to the overlap of its role and the user's permissions"
date: 2026-06-13
summary: "When an agent runs with the invoking user's full token, a misread instruction can do anything the user can; the fix is scoping each tool call to the overlap of the agent's role and the user's real-time permissions."
takeaways:
  - "Give each agent its own OAuth identity and scope every tool call to the intersection of the agent's role and the user's live permissions, never the union."
  - "Run RFC 8693 token exchange instead of forwarding the user's token, and evaluate permissions just-in-time rather than caching them at invocation."
  - "Fail closed: when authorization fails, halt the agent rather than falling back to broader access."
tags: ["access-and-identity", "oauth", "token-exchange", "delegated-access"]
sourceName: "WorkOS"
sourceUrl: "https://workos.com/blog/delegated-access-ai-agents"
sources:
  - title: "Delegated access for AI agents: the intersection rule"
    url: "https://workos.com/blog/delegated-access-ai-agents"
  - title: "The 2026 AI agent auth checklist"
    url: "https://workos.com/blog/ai-agent-auth-checklist"
  - title: "Managing API keys, tokens, and secrets for AI agents"
    url: "https://workos.com/blog/ai-agent-secrets-management"
  - title: "Why agent audit logs differ from application logs"
    url: "https://workos.com/blog/agent-audit-logs"
draft: false
---
## What happened

When an AI agent deletes a production database, it usually had permission to do it. That is the uncomfortable framing of a [WorkOS post dated 2026-06-10](https://workos.com/blog/delegated-access-ai-agents) by Maria Paktiti: the agent was not compromised and did not run outside its boundaries — it inherited whatever the user who invoked it could do. A senior engineer with full infrastructure access asks an agent to "clean up old resources," and a production replica is gone. A companion WorkOS piece grounds this in a real incident: in 2026 [a coding agent deleted a Railway production database in nine seconds](https://workos.com/blog/ai-agent-secrets-management) through an account-scoped token.

The proposed fix is the intersection rule. An agent's effective authority at each tool call must be the strict overlap of the agent's own configured role and the user's current real-time permissions — never the union of the two.

## Why it matters

"Run as the user" collapses two separate relationships: what the user may do, and what the agent may do on the user's behalf. The [OWASP Top 10 for LLM applications (2025)](https://workos.com/blog/delegated-access-ai-agents) calls the result excessive agency — an agent that can take actions with greater impact than its function needs. Because the agent acts on natural-language instructions at runtime, a misread request or a prompt injected into a document it reads can redirect that authority. Delegation alone does not solve it: if the user is highly privileged, the agent still inherits a high ceiling. The intersection rule caps that ceiling at the agent's own role.

## How it works

1. **Per-agent identity.** Give the agent its own OAuth client identity, separate from the user, so it is a distinct principal you can scope and revoke.
2. **Token exchange, not forwarding.** Use [RFC 8693 token exchange](https://workos.com/blog/ai-agent-auth-checklist) to swap the user's token for a scoped downstream token instead of forwarding the user's token.
3. **Drop excess scopes.** A B2B support-agent walkthrough shows the [exchanged token dropping billing and admin scopes](https://workos.com/blog/delegated-access-ai-agents) the user holds but the agent role does not.
4. **Just-in-time checks.** Evaluate permissions at each call rather than caching them at invocation, so a revoked or demoted user takes effect immediately.
5. **Fail closed.** On an authorization failure, [halt the agent](https://workos.com/blog/ai-agent-auth-checklist) rather than triggering a broader fallback.

> The agent's authority should be the overlap of its role and the user's live permissions, not everything the user can do.

## What broke

Standard logs cannot answer who was accountable. WorkOS argues an [agent audit log needs six fields](https://workos.com/blog/agent-audit-logs) app logs lack — user identity, agent identity, the session's authorized scope, the tool call with arguments, the delegation chain, and whether a human approved — and that sampling tools like Datadog or CloudWatch conflict with the completeness and immutability an audit trail requires. The fix is harness work: a separate, identity-centric audit concern, not a tweaked logger.

[Access & Identity](/guide/access-and-identity/)
