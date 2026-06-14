---
title: "The lethal trifecta keeps recurring"
date: 2026-05-29
summary: "A Claude.ai exfiltration disclosed this week shows the lethal trifecta is still unsolved a year after EchoLeak — the only reliable defense is to remove one of its three legs."
tags: ["security", "prompt-injection"]
domain: "security"
sourceName: "oasis.security"
sourceUrl: "https://www.oasis.security/blog/claude-ai-prompt-injection-data-exfiltration-vulnerability"
draft: false
---

The newest case landed days ago. Oasis Security disclosed a [Claude.ai prompt-injection exfiltration](https://www.oasis.security/blog/claude-ai-prompt-injection-data-exfiltration-vulnerability) (updated 27 May 2026): a hidden instruction delivered through a `claude.ai/new?q=…` link made Claude search the victim's own conversation history and upload it — through the allowed Files API — to the *attacker's* Anthropic account. No tools or integrations were enabled; the channel out was Anthropic's own API. The fix shipped, but the shape is the same one we keep seeing.

That shape has a name. Simon Willison's [lethal trifecta](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/) is the combination of three capabilities in one agent: access to **private data**, exposure to **untrusted content**, and the ability to **communicate externally**. Any system with all three can be turned against its owner — untrusted content carries the instructions, and the agent has both the data to steal and a channel to leak it.

The uncomfortable part is the defense. Willison is blunt: "we still don't know how to 100% reliably prevent this." Vendors advertise guardrails that block "95% of attacks," but as he notes, "in web application security 95% is a failing grade." Prompt injection is not a bug you patch — it's a property of the system.

The recurrence is the proof. [EchoLeak](https://thehackernews.com/2025/06/zero-click-ai-vulnerability-exposes.html) (CVE-2025-32711) was the canonical zero-click case in mid-2025; [CamoLeak](https://www.legitsecurity.com/blog/camoleak-critical-github-copilot-vulnerability-leaks-private-source-code) hit GitHub Copilot Chat last autumn; ForcedLeak hit Salesforce Agentforce; now Claudy Day hits Claude.ai. Same trifecta, different product, every couple of months. Patches close each instance; the pattern survives.

What does breaking a leg look like? Avery Kit's [database-tooling talk](https://www.youtube.com/watch?v=jDxAtxGv3fI) cuts the private-data leg — three separate identities, parameterized tools where the agent supplies only a date (never raw SQL or credentials), least-privilege scoping. Nate B Jones' [breach-pattern talk](https://www.youtube.com/watch?v=SX1myuPEDFg) constrains the communicate-out leg — classify each action by consequence and route anything with external impact through a judge that can block or escalate before it fires.

Don't try to make injection survivable. Design so no single agent holds all three legs at once.

[Security](/guide/security/)
