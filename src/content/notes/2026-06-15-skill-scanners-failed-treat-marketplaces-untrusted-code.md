---
title: "Skill scanners failed in under an hour: treat marketplaces as untrusted code"
date: 2026-06-15
summary: "Trail of Bits bypassed every major agent-skill scanner with standard tricks, so the only real defense is curating and pinning skills, not trusting a detector."
takeaways:
  - "Treat public skill marketplaces as untrusted code: use curated collections, pin versions, and control who introduces a dependency instead of outsourcing that judgment to a scanner."
  - "A static scanner gives an attacker unlimited attempts to iterate until something slips through, and it does nothing against prompt injection."
  - "An agent that reads files, runs commands, and holds persistent credentials should run isolated and never be attached to sensitive identities or production systems."
tags: ["security", "skills", "supply-chain", "untrusted-code"]
sourceName: "Trail Of Bits Blog"
sourceUrl: "https://blog.trailofbits.com/2026/06/03/the-sorry-state-of-skill-distribution/"
sources:
  - title: "The sorry state of skill distribution (Trail of Bits)"
    url: "https://blog.trailofbits.com/2026/06/03/the-sorry-state-of-skill-distribution/"
  - title: "Security risks of self-hosted autonomous agents (IBM Technology)"
    url: "https://www.youtube.com/watch?v=7qZH3D7u-z8"
draft: false
---
## What happened

A skill is a packaged bundle of instructions and code (often a `SKILL.md` plus scripts) that you install into an agent to teach it a task. Public skill marketplaces let an agent install one in a click, and several security vendors now ship "skill scanners" that promise to catch malicious ones before they run.

In a [post dated 2026-06-03](https://blog.trailofbits.com/2026/06/03/the-sorry-state-of-skill-distribution/), Trail of Bits reported that those scanners do not work. They bypassed ClawHub's detector, Cisco's skill-scanner, and all three scanners built into skills.sh. As they put it, the bypasses "were not advanced attacks: it took us less than an hour to conceive and implement three of the four." Their conclusion is blunt: the trust model "is broken at the root."

## Why it matters

A skill is a new kind of dependency, and it can hide harm in natural-language instructions as well as in code — a far wider attack surface than a normal package. If you lean on a scanner as your gate, you have a false sense of safety. The same point is made in an [IBM Technology video](https://www.youtube.com/watch?v=7qZH3D7u-z8) (published 2026-06-04), which argues a self-hosted autonomous agent that reads files, runs commands, and holds persistent credentials must be treated as untrusted code, citing tens of thousands of exposed agent gateways leaking plaintext secrets.

## How it works

1. **Static scanners are guessable.** Their logic is fixed, so an attacker reads the source and iterates until input slips through — [unlimited attempts at the same lock](https://blog.trailofbits.com/2026/06/03/the-sorry-state-of-skill-distribution/).
2. **Prompt injection is out of scope.** A scanner that checks code does nothing about malicious natural-language instructions inside a skill.
3. **Trusting the explanation backfires.** Trail of Bits showed legitimate Anthropic skills look suspicious yet pass because the scanner believes the skill's own embedded description.
4. **Curate the source instead.** Use vetted collections, pin versions, and control who can add a dependency.

> The defense is not a smarter detector; it is deciding who is allowed to introduce a skill in the first place.

## What broke

The failure is treating detection as the control. A static gate gives the adversary endless retries and ignores natural-language payloads entirely. The fix is procedural, not a better prompt: [curated marketplaces and pinned versions](https://blog.trailofbits.com/2026/06/03/the-sorry-state-of-skill-distribution/), plus the [assume-breach posture](https://www.youtube.com/watch?v=7qZH3D7u-z8) of running the agent isolated and never attaching it to sensitive identities or production systems.

[Security](/guide/security/)
