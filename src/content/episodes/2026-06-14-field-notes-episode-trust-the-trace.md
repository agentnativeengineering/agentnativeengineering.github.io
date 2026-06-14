---
title: "The Travel Agent That Aced Its Test and Made Up the Numbers"
date: 2026-06-14
summary: "Four converging lessons: check the trace not the answer, sandbox agent code by default, question stored memory, and own the thin loop."
audio: "/audio/field-notes-episode-trust-the-trace.mp3"
seconds: 431
covers:
  - "2026-06-14-memory-tools-anchor-models-to-user-mistakes"
  - "2026-06-14-harness-is-a-thin-loop-you-own"
  - "2026-06-14-agent-fabricated-data-on-empty-tool-results"
  - "2026-06-14-zero-capability-sandbox-agent-code"
oneIdea:
  title: "An agent can score 84% on response quality and 32% on faithfulness — the answer that reads best is the one fabricating over empty tool results."
  body: "AWS ran a travel agent through its open-source eval kit and the gap was stark: polished output, invented exchange rates. Output-level testing never sees the empty tool result the agent papered over. The fix is trace-level evaluation — judging the final answer against what the tools actually returned — not a better prompt."
stats:
  - n: "84% vs 32%"
    label: "Travel agent's response-quality score vs its faithfulness score in AWS's eval kit"
  - n: "~50 lines"
    label: "A bare-bones agent loop that scores up to 74% on SWE-bench Verified"
  - n: "0 capabilities"
    label: "Cloudflare, AWS, and others converge on sandboxes that start with no access"
  - n: "+200%"
    label: "Merges per engineer per day after Claude Code adoption at Anthropic"
brief:
  - kind: story
    domain: "evaluation"
    source: "AWS ML Blog"
    url: "https://aws.amazon.com/blogs/machine-learning/evaluate-ai-agents-systematically-with-agent-evalkit/"
    title: "Output testing missed that an agent fabricated data on empty tool results"
    body: "AWS's Agent-EvalKit caught a travel agent scoring 84% on response quality but only 32% on faithfulness. When its search tools returned empty, the agent invented exchange rates and temperatures rather than admit it had nothing. Output-level testing never sees the gap — only tracing the full execution path does."
    take: true
  - kind: story
    domain: "security"
    source: "AWS ML Blog"
    url: "https://aws.amazon.com/blogs/machine-learning/its-safe-to-close-your-laptop-now-hosting-coding-agents-on-amazon-bedrock-agentcore/"
    title: "Run agent code in a zero-capability sandbox, not on your laptop"
    body: "Cloudflare, AWS, and independent builders converged the same week on one fix: disposable sandboxes that start with zero capabilities and grant permissions one at a time. Your laptop shares its SSH keys, ports, and filesystem with any agent you run — containment has to be the default, not a rule you remember."
    take: false
  - kind: story
    domain: "memory-and-context"
    source: "TechCrunch"
    url: "https://techcrunch.com/2026/06/10/how-memory-tools-can-make-ai-models-worse/"
    title: "Memory tools can anchor agents to user mistakes"
    body: "Writer's research shows stored memory acts as an anchor, pulling models toward irrelevant or wrong user-introduced facts and raising sycophancy. With a user's financial misconception seeded, a model dropped its correct answer to agree with the mistake. More user history can mean less accuracy."
    take: false
  - kind: story
    domain: "harness-engineering"
    source: "WorkOS"
    url: "https://workos.com/blog/boris-cherny-claude-code-acquired-interview-takeaways"
    title: "The harness is a thin loop you own, not a framework"
    body: "Teams running coding agents converge on the same shape: a small loop you control, every mistake written into the instructions file, and verification that the agent can actually run what it builds. A ~50-line loop scores up to 74% on SWE-bench Verified — the leverage is in the files, not the framework."
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
