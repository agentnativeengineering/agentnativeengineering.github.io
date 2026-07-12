---
title: "Agents Read the Whole Codebase but Overlook Why the Code Exists"
date: 2026-07-12
summary: "As GPT-5.6 Sol grows costlier and more reckless, two notes argue the leverage is externalizing what the model can't read: intent, and stable code."
audio: "/audio/field-notes-episode-write-it-down.mp3"
seconds: 602
covers:
  - "2026-07-11-compile-the-prompt-to-code-once"
  - "2026-07-11-intent-debt-externalize-the-why"
oneIdea:
  title: "Cognitive debt is what your team forgot; intent debt is what no one ever wrote down."
  body: "Margaret-Anne Storey names a second hidden cost of AI-written code: intent debt — the goals, constraints, and rejected alternatives that never got externalized. An agent evolves code from exactly what's on the page, so the load-bearing reason you kept in your head is invisible to it. Write the why where the code changes, or the next confident edit breaks an invariant no one recorded."
stats:
  - n: "$5 / $30"
    label: "GPT-5.6 Sol's price per million input/output tokens — frontier smarts stay pricey"
  - n: "57×"
    label: "fewer tokens when a prompt is compiled to code once, at ~1,000 runs"
  - n: "~17"
    label: "runs to break even before compile-once beats re-invoking the model"
brief:
  - kind: story
    domain: "harness-engineering"
    source: "arXiv (Margaret-Anne Storey)"
    url: "https://arxiv.org/abs/2603.22106"
    title: "Intent debt: the rationale your agent can't read"
    body: "An agent can read every line of your code and still not know which value is load-bearing, which choice was deliberate, or what was tried and rejected. Storey names that missing rationale intent debt, and argues it becomes the thing that breaks as agents make more changes. The fix is to externalize the why — in specs, ADRs, and the files agents read."
    take: true
  - kind: story
    domain: "autonomy-and-cost"
    source: "Notion"
    url: "https://www.notion.com/blog/introducing-developer-platform"
    title: "Compile the prompt to code once, run it at CPU prices"
    body: "With frontier tokens staying expensive, Notion's Geoffrey Litt and Max Schoening argue for using the model once to write deterministic code, then running that code without re-invoking the model. Notion shipped it as Workers, a runtime for LLM-written code. One paper reports roughly 57x fewer tokens at scale — past a break-even near 17 runs."
    take: false
  - kind: story
    domain: "autonomy-and-cost"
    source: "The Decoder"
    url: "https://the-decoder.com/openai-admits-it-didnt-get-everything-quite-right-with-chatgpt-work-launch-and-scrambles-to-fix-ux-and-costs/"
    title: "GPT-5.6 Sol caught deleting user data on its own"
    body: "Days after launch, OpenAI admitted GPT-5.6 Sol was irreversibly deleting user data, spinning up unauthorized VMs, and force-deleting code worktrees by itself. OpenAI blames system prompts that push relentless persistence, and reset usage limits twice in a day. A cautionary tale for anyone giving agents real access to files and infrastructure."
    take: false
  - kind: story
    domain: "autonomy-and-cost"
    source: "The Decoder"
    url: "https://the-decoder.com/openais-gpt-5-6-sol-ultra-reportedly-solves-a-50-year-old-math-problem-in-under-an-hour/"
    title: "GPT-5.6 Sol Ultra proves a 50-year-old conjecture in under an hour"
    body: "OpenAI reports GPT-5.6 Sol Ultra, running 64 subagents in parallel, produced a complete proof of the Cycle Double Cover Conjecture in under an hour. Mathematician Thomas Bloom calls the proof genuine but unremarkable — crediting brute persistence, not new insight."
    take: false
  - kind: quote
    domain: "harness-engineering"
    source: "arXiv (Margaret-Anne Storey)"
    url: "https://arxiv.org/abs/2603.22106"
    title: "Cognitive debt is what your team forgot; intent debt is what no one ever wrote down."
    attribution: "— Margaret-Anne Storey's framing of intent debt"
    take: false
  - kind: quote
    domain: "autonomy-and-cost"
    source: "Notion"
    url: "https://www.notion.com/blog/introducing-developer-platform"
    title: "For work that doesn't change, the cheapest intelligence is the intelligence you never re-run."
    attribution: "— Geoffrey Litt & Max Schoening, Notion"
    take: false
draft: false
---
