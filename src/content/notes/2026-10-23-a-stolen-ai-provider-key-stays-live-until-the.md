---
title: "A stolen AI provider key stays live until the provider revokes it"
date: 2026-10-23
summary: "Railway and OpenCode both lost customers' stored secrets within a week, and in OpenCode's case the stolen AI provider keys ran up hundreds to $1,700 overnight, so revocation and spend caps have to happen at the provider."
takeaways:
  - "A provider API key stored on a hosting or agent platform is a bearer credential that can be spent from anywhere, so when that platform is breached only revoking the key at the issuing provider stops it, and only a cap set at the provider limits the bill."
  - "In the OpenCode Console breach, users reported overnight charges from a few hundred dollars up to $1,700 before they woke up."
  - "Give each tool or project its own key with a hard spend cap and the narrowest model scope available, and keep a list of every third party that holds one."
tags: ["access-and-identity", "api-key-rotation", "secrets-management", "spend-limits"]
domain: access-and-identity
sourceName: "Railway Blog"
sourceUrl: "https://blog.railway.com/p/security-disclosure-wednesday-october-21st"
sources:
  - title: "Railway: Security disclosure, Wednesday October 21st"
    url: "https://blog.railway.com/p/security-disclosure-wednesday-october-21st"
  - title: "TechCrunch: Developer platform Railway urges 'all users' to revoke secret keys after cyberattack"
    url: "https://techcrunch.com/2026/10/22/developer-platform-railway-urges-all-users-to-revoke-secret-keys-after-cyberattack/"
  - title: "TechCrunch: Hackers hit AI coding tool OpenCode, running up charges on users' AI accounts"
    url: "https://techcrunch.com/2026/10/19/hackers-hit-ai-coding-tool-opencode-running-up-charges-on-users-ai-accounts/"
  - title: "BleepingComputer: OpenCode hack exposes API keys amid AI distillation attacks"
    url: "https://bleepingcomputer.com/news/security/opencode-hack-exposes-api-keys-amid-ai-distillation-attacks"
  - title: "Cloud Security Alliance: OpenCode Console Breach: Concentrated Provider Keys at Risk"
    url: "https://labs.cloudsecurityalliance.org/research/csa-research-note-opencode-console-provider-key-breach-20261/"
upstream: "aidailybrief/2026-10-22"
draft: false
---

## The Takeaway

Railway encrypted stored secrets at rest, and that did not stop them leaking once the platform was breached. Your blast radius comes down to how fast you can revoke keys at each provider and what spend cap each key already carries.

## The details

- On 2026-10-21, [Railway disclosed](https://blog.railway.com/p/security-disclosure-wednesday-october-21st) that an unauthorized party may have accessed encrypted customer environment variables and "obtained the decrypted contents" of some. It paused all deployments, told users to rotate all variables and registry credentials, and asked upstream providers to "revoke all keys proactively."
- Railway links the attack to a wider campaign against platform companies aimed at AI inference providers. It has not disclosed the root cause or how many users were affected, and its CEO [told TechCrunch](https://techcrunch.com/2026/10/22/developer-platform-railway-urges-all-users-to-revoke-secret-keys-after-cyberattack/) a post-mortem is coming.
- Days earlier, attackers broke into an older OpenCode system and exposed provider keys for [1.4% of Console users](https://techcrunch.com/2026/10/19/hackers-hit-ai-coding-tool-opencode-running-up-charges-on-users-ai-accounts/). Spend alerts from OpenAI, Anthropic and Google fired overnight, and Anthropic and Google blocked the exposed keys.
- Users reported [unauthorized charges from several hundred dollars up to $1,700 overnight](https://bleepingcomputer.com/news/security/opencode-hack-exposes-api-keys-amid-ai-distillation-attacks), and OpenCode gave 00:30 UTC on October 17 as the earliest possible exposure. The charge figures are self-reported.
- The [Cloud Security Alliance notes](https://labs.cloudsecurityalliance.org/research/csa-research-note-opencode-console-provider-key-breach-20261/) that provider keys are usually bearer credentials, usable from anywhere. Deleting a key on the platform does not undo a copy already taken; only the issuing provider can invalidate it.

## Why it matters

Any team whose agents call model APIs with keys stored on a third-party platform is exposed the same way, and the bill builds while you sleep. The CSA recommends [one key per tool or project, hard provider-side spend caps, and keys injected from your own secrets manager](https://labs.cloudsecurityalliance.org/research/csa-research-note-opencode-console-provider-key-breach-20261/). A step the sources don't spell out: rehearse revoking keys across all your providers before you need to. Caveats: neither company has published a root cause, OpenCode's "distillation attack" framing is [disputed](https://techcrunch.com/2026/10/19/hackers-hit-ai-coding-tool-opencode-running-up-charges-on-users-ai-accounts/), and no one has publicly confirmed that Railway keys were drained.

[Access & Identity](/guide/access-and-identity/)
