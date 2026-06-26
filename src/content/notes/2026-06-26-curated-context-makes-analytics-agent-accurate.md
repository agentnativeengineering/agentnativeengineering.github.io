---
title: "Curated context, not just retrieval, is what makes an analytics agent accurate"
date: 2026-06-26
summary: "GitHub's internal Qubot agent got roughly 3x faster and more accurate once hand-curated context became a first-class part of data modeling, a lesson Siemens and AWS reached independently."
takeaways:
  - "Treat the context an agent reads as a first-class engineering artifact you curate and version, not an afterthought you bolt onto retrieval; GitHub found structured context made its analytics agent about 3x faster at returning the right answer."
  - "When relationships matter, a knowledge graph beats flattening everything into a vector store: Siemens modeled hundreds of millions of lines of legacy code as a graph so agents could trace dependencies, and AWS built Context as a knowledge graph to stop agents giving confident wrong answers."
  - "Gate every change to the context layer through an offline eval and benchmark harness before it ships, the way GitHub measures accuracy, latency, and regressions per release."
tags: ["memory-and-context", "context-curation", "knowledge-graph", "analytics-agents"]
sourceName: "The GitHub Blog"
sourceUrl: "https://github.blog/ai-and-ml/github-copilot/how-we-built-an-internal-data-analytics-agent/"
sources:
  - title: "GitHub: How we built Qubot, an internal data analytics agent"
    url: "https://github.blog/ai-and-ml/github-copilot/how-we-built-an-internal-data-analytics-agent/"
  - title: "Google Cloud: How Siemens modernizes legacy code with agentic workflows"
    url: "https://cloud.google.com/blog/products/ai-machine-learning/how-siemens-sliced-the-elephant-modernizing-legacy-code-with-agentic-workflows/"
  - title: "The Decoder: AWS launches Context and Continuum for production agents"
    url: "https://the-decoder.com/aws-says-ai-agents-lack-business-context-and-security-launches-two-services-to-patch-the-gaps/"
draft: false
---
## What happened

In a [post dated 2026-06-19](https://github.blog/ai-and-ml/github-copilot/how-we-built-an-internal-data-analytics-agent/), GitHub described Qubot, an internal Copilot-powered agent that lets any employee query the data warehouse in plain language. The team's headline finding was not about the model: structured, hand-curated context made Qubot "not only more accurate but roughly three times faster at returning the right answer," which led them to treat context artifacts as "a first-class part of data modeling." Qubot now serves hundreds of users running thousands of queries.

## Why it matters

Most teams reach for retrieval-augmented generation (RAG) — pulling matching documents into the prompt — and assume better search fixes wrong answers. GitHub's result says the bottleneck is upstream: an agent that can read the warehouse still picks the wrong table, grain, or filter without curated domain knowledge telling it which is right. The context layer is the agent's working memory, and curating it is the work.

## How it works

1. **Tier the knowledge.** GitHub maps curated markdown onto bronze (raw), silver (conformed), and gold (business-ready) data, loaded at runtime via the GitHub MCP Server.
2. **Model relationships as a graph.** [Siemens](https://cloud.google.com/blog/products/ai-machine-learning/how-siemens-sliced-the-elephant-modernizing-legacy-code-with-agentic-workflows/) modeled hundreds of millions of lines of legacy code as a Spanner knowledge graph instead of flat vectors, so agents trace dependencies and link code to requirements.
3. **Gate it with evals.** GitHub runs every context change through an offline harness measuring accuracy, latency, and regressions before shipping.

> The agent's accuracy lives in the context you curate, not the retrieval you bolt on.

## The catch

This is expensive, ongoing human work — domain experts must write and maintain the curated knowledge, and GitHub scopes Qubot to exploratory questions, not dashboard replacement. [AWS](https://the-decoder.com/aws-says-ai-agents-lack-business-context-and-security-launches-two-services-to-patch-the-gaps/) frames the same problem from the failure side: without a business-context knowledge graph, agents give "confident wrong answers." The fix is real data modeling, not a quick index.

[Memory & Context](/guide/memory-and-context/)
