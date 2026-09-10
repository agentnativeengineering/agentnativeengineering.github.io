---
title: "WorkOS Relay Strips Bearer Tokens Out of Agent Context"
date: 2026-09-10
summary: "WorkOS's Relay proxy gateway, shipped August 6, 2026, injects provider credentials at the network boundary so agents never hold a bearer token that prompt injection could steal."
takeaways:
  - "Route agent API calls through a proxy gateway like WorkOS Relay so credentials never enter the agent's context window at all."
  - "Adopt ID-JAG token delegation so identity providers, not agents, decide which app-to-app scopes are allowed per request."
  - "Bind destructive actions to out-of-band step-up approval tied to a user's sub claim and the exact operation hash."
tags: [access-and-identity]
domain: access-and-identity
sourceName: "workos.com"
sourceUrl: "https://workos.com/blog/credentials-out-of-agent-context"
draft: false
---

## The Takeaway
Agents should inherit scoped, short-lived credentials through proxy gateways instead of holding long-lived bearer tokens, and high-risk actions should require step-up authentication to limit the blast radius of a compromise.

## The details
*   On August 6, 2026, WorkOS shipped Relay, a proxy gateway that injects provider credentials at the network boundary so the agent's process never holds a token an attacker or a prompt injection could exfiltrate ([WorkOS Relay](https://workos.com/blog/credentials-out-of-agent-context)).
*   Okta, Auth0, and Descope converged on the same delegation pattern within eight days in late August, using ID-JAG tokens where the identity provider acts as policy enforcement point, minting scoped assertions only when admin policy allows a given app-to-app request ([Cross App Access](https://workos.com/blog/cross-app-access-converged-in-eight-days)).
*   MCP's Step-Up Authorization Flow only covers `403 insufficient_scope`; it has no vocabulary for stale authentication (`401 insufficient_user_authentication`), so destructive actions still need an out-of-band approval bound to the user's `sub` claim and a hash of the operation ([MCP Step-Up](https://workos.com/blog/mcp-scope-step-up-vs-authentication-step-up)).
*   Audit trails only close the loop when every action log carries the agent's registration ID (`sub`) alongside the authorizing user in the `act` claim, joining credential issuance to resource access in one place ([Agent Identity](https://workos.com/blog/agent-identity-authorization-audit)).

## Why it matters
Platform and security teams keep gating recoverable filesystem actions while API calls that archive 214 CRM deals or issue a refund sail through unreviewed, because permission prompts track recoverability, not damage ([Blast Radius](https://workos.com/blog/agent-permissions-blast-radius)). Proxy gateways fix the credential-exposure half of that problem, but they concentrate risk into a new target that needs the same hardening as the TeamPCP supply-chain campaign exposed in credential brokers ([Relay](https://workos.com/blog/credentials-out-of-agent-context)).

[Access & Identity](/guide/access-and-identity/)
