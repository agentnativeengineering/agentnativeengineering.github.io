---
title: "A session-based search CLI that keeps results out of the agent's context window"
date: 2026-06-06
summary: "agent-asearch, a Go single-binary CLI, gives an agent one command to search 18 sources and returns a session id plus compact metadata instead of dumping every result into the context window."
takeaways:
  - "Search tools that return full results blow the context budget fast. agent-asearch instead runs the chosen sources in parallel, stores results on disk, and hands the agent only a session id, a total count, and the next commands to run."
  - "The agent reads results in small paginated chunks and filters by source. That lets it pull, say, 20 Reddit hits at a time rather than paging through 42 mixed results inline."
  - "Five sources work with zero keys, including Hacker News via Algolia, Reddit, GitHub, the Jina reader, and a web fallback chaining DuckDuckGo, Wikipedia, and Bing. Paid backends like Tavily and Exa are opt-in through config."
tags: ["memory-and-context", "context-window", "agent-tools", "search"]
draft: false
---
**Why this matters to you.** If you have ever wired a web-search tool into an agent, you know the failure mode: a single query returns ten results with full snippets, the agent calls it three times, and suddenly half the context window is search debris the model has to read past on every turn. The cost is real — you pay for those tokens, latency climbs, and the model's attention thins out across noise it never needed.

**What it does.** On 2026-06-06, a developer posted [agent-asearch](https://github.com/izzzzzi/agent-asearch) to Hacker News, a Go single-binary CLI that gives an agent one command to search across 18 sources — the web, Hacker News, Reddit, GitHub code, YouTube, X, and API backends like Tavily, Exa, Brave, and Perplexity. The point of interest is not the source count; it is the [session-based workflow](https://github.com/izzzzzi/agent-asearch). An `open` command runs the chosen sources in parallel, stores the results locally, and returns a compact JSON object: a session id, a total count, and a `next_commands` block telling the agent exactly how to read on.

**The pattern.** Smart teams reach for the same shape here: keep the bulk of a tool's output out of the window and hand back a handle the agent can dereference on demand. agent-asearch does this concretely — after `open`, the agent calls [`results read`](https://github.com/izzzzzi/agent-asearch) with a limit and a sequence number, or `results filter` to pull just one source. Forty-two hits become a 20-row page of Reddit results, fetched only when the agent decides it wants them.

**The idea underneath.** It comes down to where the bytes live: the expensive resource is the model's context window — the local disk is cheap. By writing results to disk and returning [stable, parseable JSON](https://github.com/izzzzzi/agent-asearch) metadata, the tool lets the agent spend tokens on a session id plus a count rather than on raw snippets it may discard. Pagination turns "read everything, then decide" into "decide, then read" — the model commits context budget only to the source and page it actually wants.

**What to do tomorrow.** Audit your noisiest agent tool the same way. If it returns a list, change the contract so the first call returns a handle and a summary, and add a second call that fetches a bounded page. You do not need this specific CLI to borrow the shape. Note also that [five of the sources](https://github.com/izzzzzi/agent-asearch) — HN, Reddit, GitHub, the Jina reader, and a web fallback — run with no API keys, so you can test the workflow before committing to paid backends.

[Memory & Context](/guide/memory-and-context/)
