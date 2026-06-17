---
title: "M365 Copilot SearchLeak: why guardrails keep losing to injected instructions"
date: 2026-06-17
summary: "A max-critical Copilot flaw let an injected instruction exfiltrate 2FA codes — the lesson is that guardrails patch symptoms while the user/content trust boundary stays broken."
takeaways:
  - "Treat every guardrail as a symptom patch, not a boundary: assume injected instructions will reach your agent and design so that even a fully-obeyed injection cannot reach data or a network egress it should not."
  - "Block the exfiltration channel, not just the prompt — restrict which domains the agent can fetch, and strip or sandbox markup that turns rendered output into an outbound request."
  - "Any user-controllable input, including URL query parameters, is untrusted content the model may execute as an instruction."
tags: ["security", "prompt-injection", "exfiltration", "copilot"]
sourceName: "Ars Technica"
sourceUrl: "https://arstechnica.com/security/2026/06/critical-copilot-vulnerability-allowed-hackers-to-seal-2fa-code-from-users/"
sources:
  - title: "Ars Technica: Critical Copilot vulnerability allowed hackers to steal 2FA codes"
    url: "https://arstechnica.com/security/2026/06/critical-copilot-vulnerability-allowed-hackers-to-seal-2fa-code-from-users/"
draft: false
---
## What happened

If your agent can read a user's private data and also reach the network, an attacker who slips one instruction into the content it processes can walk that data out — and the guardrails you bolted on will not stop it. That is the wall the latest Copilot disclosure makes concrete.

In a [report dated 2026-06-16](https://arstechnica.com/security/2026/06/critical-copilot-vulnerability-allowed-hackers-to-seal-2fa-code-from-users/), Ars Technica described how Microsoft, the week prior, patched a vulnerability it rated max-critical in its M365 Copilot platform. Security firm Varonis had disclosed a proof-of-concept (dubbed SearchLeak) that could retrieve 2FA codes and other sensitive data from emails Copilot could access. The named root cause: large language models (LLMs) "are unable to distinguish between instructions provided by users and those snuck into third-party content" they summarize or act on.

## Why it matters

This is the security domain's core lesson stated plainly: there is no reliable in-model boundary between *what the user asked* and *what the data the agent reads tells it to do*. Microsoft's defenses were a stack of guardrails — block form submissions, wrap output in code blocks so a browser treats it as text, and restrict which sites Copilot may contact without approval. Each is real, and each is a symptom patch. The report's framing is that these "recurring failures show why the industry approach to securing LLMs keeps breaking down": you cannot prompt your way out of a missing trust boundary.

## How it works

1. **Injection has many entry points.** Varonis put the malicious command in a URL query parameter (the `q` value), not an email body — a variant they call parameter-to-prompt injection. Any user-controllable input counts as untrusted content.
2. **The model obeys.** Because the LLM cannot separate the user's intent from text it merely reads, the injected instruction is treated as a command.
3. **Guardrails get bypassed.** Restrictions on form submissions and untrusted sites were sidestepped by abusing permitted markup and rendering behavior.
4. **Rendered output becomes egress.** Markup that the client renders can itself issue an outbound web request, carrying the secret to a server where it lands in the logs.

> A guardrail that filters the prompt does nothing once the data itself can reach the network.

## What broke

The fix is not a smarter system prompt; it is harness and architecture. Assume an injection will reach the model and design so an obeyed injection still cannot act: keep the agent's data access and its network egress from co-existing, allowlist outbound domains tightly, and strip or sandbox any markup that can turn displayed output into a request. Microsoft's patch closed this chain, but the report's point stands — until the user/content boundary is enforced outside the model, the next markup trick wins.

[Security](/guide/security/)
