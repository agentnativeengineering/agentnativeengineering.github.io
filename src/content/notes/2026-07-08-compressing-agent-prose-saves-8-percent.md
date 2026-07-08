---
title: "Compressing agent prose saves ~8.5%: code and diffs dominate the token stream"
date: 2026-07-08
summary: "JetBrains A/B tested a terse-output skill on real coding tasks and measured ~8.5% output-token savings, not the advertised 65%, because agent sessions are byte-dominated by code, diffs, and tool calls the skill leaves verbatim."
takeaways:
  - "In real agent coding sessions, code, diffs, and tool calls dominate the token stream, so compressing the narration between tool calls yields only high-single-digit savings — the dominant cost is input context, not output."
  - "JetBrains ran the Caveman skill in a paired A/B test on 82 tasks: an advertised 65% output-token saving measured only ~8.5%, even with the skill forcibly on."
  - "Terseness caused no measurable quality loss (sign test p=0.82), but the ~10% cost saving was fragile and easily erased by a single pricing-tier outlier."
tags: ["autonomy-and-cost", "token-cost", "benchmarking", "claude-code"]
sourceName: "JetBrains AI Blog"
sourceUrl: "https://blog.jetbrains.com/ai/2026/07/speak-to-ai-agents-like-cavemen-tosave-tokens/"
sources:
  - title: "JetBrains: A/B testing the Caveman token-compression skill on Claude Code"
    url: "https://blog.jetbrains.com/ai/2026/07/speak-to-ai-agents-like-cavemen-tosave-tokens/"
draft: false
---
## What happened

In a post dated 2026-07-06, the [JetBrains AI team benchmarked Caveman](https://blog.jetbrains.com/ai/2026/07/speak-to-ai-agents-like-cavemen-tosave-tokens/) — a skill that tells an agent to write in terse, "caveman" prose to cut tokens — running a paired A/B test on Claude Code across 82 real agentic tasks on their SkillsBench harness. The skill advertises a 65% token saving. [With the skill forcibly on, measured output-token savings were only about 8.5%](https://blog.jetbrains.com/ai/2026/07/speak-to-ai-agents-like-cavemen-tosave-tokens/) — and the team calls that the ceiling, not the usual case.

## Why it matters

If you are trying to bound agent spend, it matters *where* the tokens actually are. In a coding session the byte stream is dominated by code, diffs, tool invocations, and exact error strings — content a good compression skill leaves verbatim because mangling it breaks execution. So the only thing that compresses is the narration between tool calls, and [as the team puts it, "there is not much of it."](https://blog.jetbrains.com/ai/2026/07/speak-to-ai-agents-like-cavemen-tosave-tokens/)

## How it works

1. **The skill preserves executables.** Code, diffs, and error strings stay verbatim, so terseness never touches them.
2. **Only narration shrinks.** Compression applies solely to prose between tool calls.
3. **Prose is a thin slice.** In agentic work that slice is small, capping realistic savings in the high single digits.

> The advertised 65% applies to chat-style prose, not agentic work that is byte-dominated by code and diffs.

## The catch

The upside is real: [quality was statistically indistinguishable between arms (sign test p=0.82)](https://blog.jetbrains.com/ai/2026/07/speak-to-ai-agents-like-cavemen-tosave-tokens/), so terseness caused no measurable degradation. But the [~10% per-task cost saving was fragile — a single pricing-tier outlier could erase it](https://blog.jetbrains.com/ai/2026/07/speak-to-ai-agents-like-cavemen-tosave-tokens/). And output compression ignores the bigger lever entirely: the dominant agent token cost is the input context you feed each turn, which no output-side trick touches.

[Autonomy, Cost & Control](/guide/autonomy-and-cost/)
