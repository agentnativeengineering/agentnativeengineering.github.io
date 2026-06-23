---
title: "Index Once, Phone the Frontier Model Less, Delegate Twenty-Three Percent Fewer Times"
date: 2026-06-23
summary: "Three production teams converge: don't grep the whole repo, don't route every step to the frontier model, don't over-delegate — spend the expensive thing on purpose."
audio: "/audio/field-notes-episode-spend-the-expensive-thing-deliberately.mp3"
seconds: 476
covers:
  - "2026-06-15-github-copilot-cli-selective-delegation"
  - "2026-06-15-reserve-frontier-model-for-reasoning"
  - "2026-06-15-index-context-instead-of-grep-large-codebases"
oneIdea:
  title: "The job isn't to grep the whole repo into the window every time — it's to retrieve the right context once and stop paying to rediscover it."
  body: "On a million-file codebase the window can't hold everything, so a blind-grep agent re-learns the repo every session and burns thousands of tokens doing it. Augment Code's fix was to index once and fetch the right slice per request. The same instinct shows up in reserving the frontier model for real reasoning and in delegating less — spend the expensive resource on purpose."
stats:
  - n: "23%"
    label: "Drop in Copilot CLI tool failures per session — from delegating less, same model"
  - n: "$368 vs $954"
    label: "Open worker + frontier advisor beat frontier-end-to-end at ~a third the cost on Harvey's LAB"
  - n: "1M files"
    label: "Repo size Augment Code's context engine indexes instead of re-grepping each session"
  - n: "27B/day"
    label: "ML predictions Blue Yonder serves running a smaller domain model in the inner loop"
brief:
  - kind: story
    domain: "model-selection"
    source: "Fireworks AI"
    url: "https://fireworks.ai/blog/open-source-agents-frontier-advisors"
    title: "Reserve the frontier model for reasoning, run cheaper code for the predictable rest"
    body: "Three teams converge on the same pattern: call a frontier model only where it changes the answer. Fireworks' open worker that phones Claude Opus as an advisor (~0.83 calls/task) scored 18/100 at $368, beating Opus end-to-end at 14/100 and $954. Blue Yonder runs a smaller domain model in the inner loop at 27B predictions/day."
    take: true
  - kind: story
    domain: "harness-engineering"
    source: "The GitHub Blog"
    url: "https://github.blog/ai-and-ml/how-we-made-github-copilot-cli-more-selective-about-delegation/"
    title: "GitHub cut Copilot CLI tool failures 23% by delegating less, not switching models"
    body: "GitHub mined full agent trajectories and found the main agent was spinning up sub-agents for work already narrow or fully described. Making delegation more selective cut tool failures per session 23% with no quality regression — same model, a harness-policy change."
    take: false
  - kind: story
    domain: "memory-and-context"
    source: "Augment Code"
    url: "https://www.youtube.com/watch?v=6FMGck0wlak"
    title: "Stop letting coding agents grep huge codebases: index context instead"
    body: "On million-file repos, blind grep makes the agent re-learn the codebase every session and burn thousands of tokens. Augment Code abandoned model training to build a context engine that indexes the repo once and retrieves the right slice per request — with Adobe as the landmark customer."
    take: false
  - kind: quote
    domain: "model-selection"
    source: "Google ADK / 1,000-agent marathon"
    url: "https://www.youtube.com/watch?v=EtxJJJ_7WQY"
    title: "Use the LLM for reasoning; use regular code when the logic is predictable."
    attribution: "— takeaway from a 1,000-agent marathon simulation where almost none call an LLM once the race starts"
    take: false
draft: false
---
