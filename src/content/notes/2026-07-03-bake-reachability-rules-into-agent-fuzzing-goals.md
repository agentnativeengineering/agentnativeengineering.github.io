---
title: "Bake reachability rules into agent fuzzing goals so it hunts real bugs"
date: 2026-07-03
summary: "Trail of Bits drove GPT-5.5-Cyber to build a bespoke zlib fuzzing campaign in a day, and the win was validity discipline: it rejected an unreachable crash as noise because reachability rules were encoded in the goal."
takeaways:
  - "An agent fuzzer is only as useful as the validity rules in its goal: encode reachability so it discards technically-real-but-unreachable crashes and keeps hunting for exploitable bugs."
  - "Point a capable model at your own code and let it build the fuzz lab first, before attackers do the same with far less effort."
  - "The expertise moat around bespoke fuzzing is gone; the differentiator is now the disclosure discipline you bake into the objective, not the tooling itself."
tags: ["security", "fuzzing", "coordinated-disclosure", "agent-autonomy"]
sourceName: "The Trail of Bits Blog"
sourceUrl: "https://blog.trailofbits.com/2026/07/02/field-reports-from-patch-the-planet/"
sources:
  - title: "Trail of Bits: GPT-5.5-Cyber built a zlib fuzzing lab in a day (Patch the Planet)"
    url: "https://blog.trailofbits.com/2026/07/02/field-reports-from-patch-the-planet/"
draft: false
---
## What happened

In a [field report dated 2026-07-02](https://blog.trailofbits.com/2026/07/02/field-reports-from-patch-the-planet/), Trail of Bits described pointing OpenAI's GPT-5.5-Cyber model at [zlib](https://blog.trailofbits.com/2026/07/02/field-reports-from-patch-the-planet/) — the ubiquitous compression library — as part of its Patch the Planet collaboration with OpenAI. Driven through Codex with a `/goal` command (a directive that holds an objective across many turns), the model decided on its own that statically re-reading heavily-audited code was a poor use of tokens and instead [built a bespoke fuzzing campaign in a single day](https://blog.trailofbits.com/2026/07/02/field-reports-from-patch-the-planet/): C/C++ harnesses across a dozen entrypoints, sanitizer builds, and seeds repurposed from edge-case tests. Findings are now under coordinated disclosure.

## Why it matters

The sharpest engineering detail is not that it found bugs — it is that it [rejected a real-but-unreachable crash as noise](https://blog.trailofbits.com/2026/07/02/field-reports-from-patch-the-planet/). An autonomous fuzzer that reports every technically-valid crash floods maintainers who are already spread thin. The signal-to-noise of the whole exercise came from strict validity and reachability rules baked into the goal, not from the model's raw capability.

> An agent fuzzer's value lives in the validity rules you encode, not the crashes it can trigger.

## The catch

Trail of Bits frames this as the expertise moat around bespoke fuzzing disappearing — a force multiplier for defenders, but a lowered barrier for low-skill attackers too. The defensive takeaway is to run this on your own code first, and to treat the goal's reachability discipline as the load-bearing part: without it, you get a firehose of unreachable-crash reports instead of the exploitable bugs that actually matter.

[Security](/guide/security/)
