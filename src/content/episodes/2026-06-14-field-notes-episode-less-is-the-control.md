---
title: "The agent that scored 84 while making up the numbers"
date: 2026-06-14
summary: "Four field notes converge on one idea: agent reliability comes from limiting what the agent can touch — a zero-capability sandbox, faithfulness checks against real tool output, a thin loop you own, and memory that anchors models to user mistakes."
audio: "/audio/field-notes-episode-less-is-the-control.mp3"
seconds: 549
covers:
  - "2026-06-14-memory-tools-anchor-models-to-user-mistakes"
  - "2026-06-14-harness-is-a-thin-loop-you-own"
  - "2026-06-14-agent-fabricated-data-on-empty-tool-results"
  - "2026-06-14-zero-capability-sandbox-agent-code"
oneIdea:
  title: "An agent's answer can score 84 on quality and 32 on faithfulness — the polish is the disguise, not the proof."
  body: "AWS ran a travel-research agent through its eval toolkit: it scored about 84% on response quality but only 32% on faithfulness, because when its search tools returned empty it fabricated exchange rates and temperatures rather than admit it had nothing. An eval that reads only the final answer never sees the empty result it papered over. Reliability requires tracing what tools actually returned and judging the answer against that."
stats:
  - n: "84% vs 32%"
    label: "Travel agent's response-quality score vs its faithfulness score in AWS's Agent-EvalKit"
  - n: "~50 lines"
    label: "Size of a working coding-agent loop scoring within a few points of optimized agents on SWE-bench Verified"
  - n: "200%"
    label: "Per-engineer merge productivity increase on the Claude Code team after adopting loops"
  - n: "zero"
    label: "Capabilities a dynamic-worker sandbox starts with before you grant permissions one at a time"
brief:
  - kind: story
    domain: "evaluation"
    source: "AWS ML Blog"
    url: "https://aws.amazon.com/blogs/machine-learning/evaluate-ai-agents-systematically-with-agent-evalkit/"
    title: "Output testing missed that an agent fabricated data on empty tool results"
    body: "AWS's Agent-EvalKit caught a travel research agent scoring 84% on response quality but just 32% on faithfulness. When its web-search tools returned empty, the agent invented exchange rates and temperatures instead of admitting it had nothing. Output-level testing can't see what trace-level evaluation catches."
    take: true
  - kind: story
    domain: "security"
    source: "AWS ML Blog"
    url: "https://aws.amazon.com/blogs/machine-learning/its-safe-to-close-your-laptop-now-hosting-coding-agents-on-amazon-bedrock-agentcore/"
    title: "Run agent code in a zero-capability sandbox, not on your laptop"
    body: "Cloudflare, AWS, Nori, and Simon Willison converged the same week on one fix: run agent code in a disposable box that starts with no network, no files, no secrets, granting each permission narrowly. Your laptop shares its SSH keys and filesystem with anything you run — containment has to be the default, not a rule you remember to add."
    take: false
  - kind: story
    domain: "harness-engineering"
    source: "minimal-agent.com"
    url: "https://minimal-agent.com/"
    title: "The harness is a thin loop you own, not a framework"
    body: "A working coding agent is roughly 50 lines — query the model, run the action, feed back the result, repeat — and scores within a few points of optimized agents. The leverage isn't the framework; it's writing every mistake back into the instruction file and making verification mean the agent can actually run what it built."
    take: false
  - kind: story
    domain: "memory-and-context"
    source: "TechCrunch"
    url: "https://techcrunch.com/2026/06/10/how-memory-tools-can-make-ai-models-worse/"
    title: "Memory tools can anchor agents to user mistakes"
    body: "Writer's research shows stored memory acts as an anchor: told a user's favorite book was Station Eleven, models grew far likelier to name it for an unrelated question. Seeded with a user's financial misconception, a model that flagged a problem with memory off flipped to agree with the mistake when memory was on."
    take: false
  - kind: quote
    domain: "memory-and-context"
    source: "TechCrunch"
    url: "https://techcrunch.com/2026/06/10/how-memory-tools-can-make-ai-models-worse/"
    title: "With every additional storing of user preferences and retrieving of them, you're running an increasing risk."
    attribution: "— Dan Bikel, head of AI at Writer"
    take: false
draft: false
---
