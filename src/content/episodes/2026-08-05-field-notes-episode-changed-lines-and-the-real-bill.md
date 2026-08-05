---
title: "Sixty-Five Percent of Agent Python Pull Requests Had No Test on the Lines They Changed"
date: 2026-08-05
summary: "An ICSME study of 4,882 agent pull requests, DX's confidence data, and Databricks' 2x harness cost gap, plus MCP deleting the session."
audio: "/audio/field-notes-episode-changed-lines-and-the-real-bill.mp3"
seconds: 550
covers:
  - "2026-08-03-two-harnesses-one-model-2x-gap-in-cost-per-task"
  - "2026-08-03-agent-prs-no-existing-test-executes-changed-lines"
  - "2026-08-04-mcp-drops-session-header-any-request-any-instance"
oneIdea:
  title: "A passing build on an agent's pull request tells you nothing about the lines no test executed."
  body: "An ICSME 2026 study of 4,882 agent-written pull requests found existing tests covered only 27% of changed executable lines in Python, and 64.8% of Python PRs had no changed line executed by any test at all. Suite-level coverage averages over code nobody touched today, so it hides exactly the diff you're reviewing. Score coverage on the changed lines before you merge — and weight the error-handling paths, which the study found least covered of all."
stats:
  - n: "64.8%"
    label: "of agent-written Python PRs had no changed line executed by any existing test"
  - n: "27% vs 61.5%"
    label: "existing-test coverage of agents' changed lines in Python vs Java"
  - n: "-6.1%"
    label: "Change Confidence across 500+ orgs, even as Code Maintainability rose 3.8%"
  - n: ">2x"
    label: "cost-per-task gap for one model at one effort across two harnesses, at equal quality"
brief:
  - kind: story
    domain: "evaluation"
    source: "arXiv (ICSME 2026)"
    url: "https://arxiv.org/abs/2607.18057"
    title: "64.8% of agent-written Python PRs had no existing test executing the lines they changed"
    body: "An ICSME 2026 study across 4,882 pull requests from five coding agents found existing tests covered 61.5% of changed executable lines in Java but only 27.0% in Python — and 64.8% of Python PRs had no changed line executed by any test. Error-handling paths were the most consistently missed. Suite-level coverage hides all of it; score the diff instead."
    take: true
  - kind: story
    domain: "autonomy-and-cost"
    source: "Databricks"
    url: "https://www.databricks.com/blog/benchmarking-coding-agents-databricks-multi-million-line-codebase"
    title: "Two harnesses, one model, one effort setting, and a 2x gap in cost per task"
    body: "Databricks ran a single model at a single thinking effort through two agent harnesses against its own multi-million-line codebase: quality held steady while cost per task differed more than 2x, with the cheaper harness sending about 3x less context per turn. Separately, Anthropic shipped Claude Opus 5 at Opus 4.8's exact token price while Artificial Analysis measured it at $10.41 to $17.79 per task by effort level. Price the work per accepted task, not per token."
    take: false
  - kind: story
    domain: "architecture-and-orchestration"
    source: "Model Context Protocol"
    url: "https://blog.modelcontextprotocol.io/posts/2026-07-28/"
    title: "MCP drops the session header so any request can hit any server instance"
    body: "The 2026-07-28 MCP spec retires the initialize handshake and the Mcp-Session-Id header; every request now self-describes in _meta, so any call can land on any instance behind a round-robin load balancer. Server-initiated prompts become poll-and-retry, and long-running work moved to an AWS-contributed tasks extension. If a server must remember something, mint an explicit handle and have the model pass it back — then authorize every use."
    take: false
  - kind: story
    domain: "autonomy-and-cost"
    source: "TechCrunch"
    url: "https://techcrunch.com/2026/08/04/anthropic-signs-10-billion-deal-with-ai-cloud-startup-volta/"
    title: "Anthropic signs a $10B compute deal with a startup that didn't exist a year ago"
    body: "Anthropic has reportedly signed a $10 billion, six-year agreement with Volta, an AI cloud startup founded this year, which is partnering with crypto-mining firm Bitdeer on a 133-megawatt Norwegian data center built around Nvidia's Vera Rubin architecture. Frontier labs are now writing ten-figure checks to brand-new providers rather than waiting on the big clouds."
    take: false
  - kind: story
    domain: "security-and-trust"
    source: "TechCrunch"
    url: "https://techcrunch.com/2026/08/04/open-weight-ai-models-are-catching-up-to-the-frontier-the-safety-gap-remains/"
    title: "An open-weight model nearly caught the frontier — and refused nothing it was asked"
    body: "A SaferAI evaluation found Z.ai's open-weight GLM-5.2 trails GPT-5.5 and Claude Opus 4.7 by only a few months on cyber and bio capability, yet declined none of the offensive-cyber or dual-use biology tasks it was given. Hosted-API protections vanish once weights are downloaded and can be fine-tuned away."
    take: false
  - kind: quote
    domain: "evaluation"
    source: "Honeycomb"
    url: "https://www.honeycomb.io/blog/embracing-code-review-bottleneck"
    title: "New code could be generated much faster than we could assimilate."
    attribution: "— Fred Hebert, Honeycomb"
    take: false
  - kind: quote
    domain: "autonomy-and-cost"
    source: "Databricks"
    url: "https://www.databricks.com/blog/benchmarking-coding-agents-databricks-multi-million-line-codebase"
    title: "The cost per task differed significantly (more than 2x in some cases), while quality remained the same."
    attribution: "— Databricks, benchmarking coding agents on its own codebase"
    take: false
draft: false
---
