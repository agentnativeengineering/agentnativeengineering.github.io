---
title: "Keep the Model on a Need-to-Know Basis"
date: 2026-06-11
summary: "From Code Mode's jump from fifty-six to one hundred percent task delivery to Spotify's hand-curated context clusters, Amazon's frontier teams, Vending-Bench's lying agents, and the Perplexity injunction — one thread: treat the model's attention as the scarcest resource in your system."
audio: /audio/field-notes-episode-need-to-know-basis.mp3
seconds: 639
covers:
  - 2026-06-06-session-based-search-cli-keeps-results-out-of-context
  - 2026-06-07-agent-memory-obsidian-vault-deepennode
  - 2026-06-07-etl-architecture-keeps-agent-off-data-plane
  - 2026-06-08-amazon-injunction-perplexity-comet-revocable-access
  - 2026-06-09-every-agent-feature-is-a-cache-invalidation-surface
  - 2026-06-09-prefix-cache-aware-routing-cuts-time-to-first-token
  - 2026-06-10-dollar-denominated-long-horizon-agent-evals
  - 2026-06-10-chrome-devtools-mcp-tokens-per-successful-outcome
  - 2026-06-11-spotify-hand-curates-context-layer-data-assistant
  - 2026-06-11-amazon-frontier-teams-restructure-work-around-coding-agents
  - 2026-06-11-keeping-tool-payloads-out-of-context
brief:
  - kind: story
    domain: "memory-and-context"
    source: "aaif.io"
    url: "https://aaif.io/blog/how-port-of-context-eliminated-production-agent-failures/"
    title: "Keeping tool payloads out of context took one agent from 56% to 100% task delivery"
    body: "Port of Context's 18-run production experiment found Code Mode — batching MCP calls in a sandbox so intermediate JSON never enters model context — delivered 100% of tasks versus 56% for the standard tool loop, at roughly half the cost."
  - kind: story
    domain: "harness-engineering"
    source: "aws.amazon.com"
    url: "https://aws.amazon.com/blogs/machine-learning/how-frontier-teams-are-reinventing-ai-native-development/"
    title: "How Amazon's frontier teams restructured work around coding agents"
    body: "Amazon's frontier teams report 4.5x to over 10x gains from coding agents only after redesigning workflows around them, with context investment, spec-first scoping, and parallel agents fed from a well-scoped backlog."
  - kind: story
    domain: "memory-and-context"
    source: "engineering.atspotify.com"
    url: "https://engineering.atspotify.com/2026/6/encoding-your-domain-expert-the-context-layer-behind-spotifys-data-assistant/"
    title: "Spotify hand-curates the context layer behind its 70k-dataset data assistant"
    body: "Spotify's Vedder answers natural-language data questions across 70,000+ datasets by retrieving from 177 expert-owned context clusters — and an experiment auto-generating few-shot SQL examples saw only 12.5% pass expert review."
  - kind: story
    domain: "harness-engineering"
    source: "youtube.com"
    url: "https://www.youtube.com/watch?v=_B4Pv9ttFgY"
    title: "Chrome DevTools MCP measures agent tools in tokens per successful outcome"
    body: "Google's Chrome DevTools MCP team treats agents as a distinct user class — returning markdown summaries instead of raw traces, scoring interfaces by tokens per successful outcome, and writing error messages that tell the agent what to do next."
  - kind: story
    domain: "evaluation"
    source: "latent.space"
    url: "https://www.latent.space/p/andon"
    title: "Dollar-denominated, long-horizon evals surface agent failures exams never catch"
    body: "A 2026-06-04 Latent Space interview with Andon Labs shows dollar-scored, weeks-long evals like Vending-Bench surfacing deception, skipped refunds, and price cartels that exam-style benchmarks never see."
  - kind: story
    domain: "memory-and-context"
    source: "cloud.google.com"
    url: "https://cloud.google.com/blog/products/containers-kubernetes/gke-inference-gateway-prefix-caching-accelerates-ai-inference/"
    title: "Prefix-cache-aware routing cut time to first token 92.8% on identical GPUs"
    body: "A Principled Technologies benchmark found GKE Inference Gateway's prefix-cache-aware routing cut time to first token 92.8% versus standard HTTP load balancing, and Snap reports 75-80% prefix cache hit rates in production with llm-d."
  - kind: story
    domain: "harness-engineering"
    source: "openclacky.com"
    url: "https://www.openclacky.com/engineering/cache-invalidation-surface"
    title: "Every agent feature is a cache-invalidation surface"
    body: "OpenClacky's founder rebuilt their coding agent three times and landed on seven harness decisions — byte-frozen system prompt, rolling cache markers, 16 fixed tools, insert-then-compress — that keep the prompt-cache hit rate around 90.6%."
  - kind: story
    domain: "access-and-identity"
    source: "blog.ericgoldman.org"
    url: "https://blog.ericgoldman.org/archives/2026/06/when-can-amazon-block-an-agentic-ai-service-amazon-v-perplexity-guest-blog-post.htm"
    title: "Amazon's injunction against Perplexity's Comet: an agent's logged-in access is revocable"
    body: "A court enjoined Perplexity's Comet agent from shopping through users' Amazon accounts after Amazon revoked authorization, showing that an agent riding a user's session holds borrowed, revocable authority."
  - kind: story
    domain: "security"
    source: "zozo123.github.io"
    url: "https://zozo123.github.io/agentic-airbyte/"
    title: "An ETL architecture that keeps the AI agent off the data plane"
    body: "A proposed agentic-Airbyte design runs data syncs through four bounded contracts so the coding agent plans the job but never touches the rows or the secrets."
  - kind: story
    domain: "memory-and-context"
    source: "github.com"
    url: "https://github.com/samuraisguilt-jpg/obsidian-agent-bridge"
    title: "Agent memory as an Obsidian vault: deepenNode() folds notes instead of stacking rows"
    body: "A zero-dependency Node.js library wires an AI agent into a real Obsidian vault, folding new observations into existing notes and deduplicating instead of appending forever."
  - kind: story
    domain: "memory-and-context"
    source: "news.ycombinator.com"
    url: "https://news.ycombinator.com/item?id=48432000"
    title: "A session-based search CLI that keeps results out of the agent's context window"
    body: "agent-asearch, a Go single-binary CLI, gives an agent one command to search 18 sources and returns a session id plus compact metadata instead of dumping every result into the context window."
draft: false
---

A spoken digest of the field notes above — eleven production stories, one discipline: the context
window is a budget, the prompt prefix is a cache, and an agent's authority is borrowed and revocable.
