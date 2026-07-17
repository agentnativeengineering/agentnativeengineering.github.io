---
title: "Atlan Versioned Its Agent Context Like Code After Three Hundred Skills Drifted"
date: 2026-07-17
summary: "Three talks draw one line: agents run the work, but the verdict, the current context, and the enforceable boundary stay yours to own."
audio: "/audio/episode-what-part-is-still-yours.mp3"
seconds: 490
youtube: "https://youtu.be/xxdnzHbuduI"
covers:
  - "2026-07-17-mcp-deprecates-roots-sampling-logging"
  - "2026-07-17-manage-agent-context-like-code"
  - "2026-07-17-agent-cannot-inherit-the-consequences"
oneIdea:
  title: "Making generation cheaper doesn't make review any cheaper."
  body: "Addy Osmani's point is that agents got fast at producing work, but someone still has to understand a change well enough to defend it. The Wharton finding on cognitive surrender — people keeping a wrong answer and feeling surer — is why the reviewer's judgment can't be delegated. The durable job isn't a capability; it's owning the verdict."
stats:
  - n: "96%"
    label: "engineers who don't fully trust AI-written code (Sonar survey)"
  - n: "73%"
    label: "who kept the wrong answer when the AI was wrong — and felt surer"
  - n: "1,000×"
    label: "jump in model intelligence in a decade; business context barely moved"
  - n: "1 in 5"
    label: "AI use cases that actually reach production, Atlan reports"
brief:
  - kind: story
    domain: "harness-engineering"
    source: "Addy Osmani / AI Engineer"
    url: "https://www.youtube.com/watch?v=n97BCfyFIvw"
    title: "An agent can follow your runbook, but it can't inherit the consequences"
    body: "Osmani argues the durable engineering job is owning the verdict: agents run the inner loop, but deciding, verifying, and accepting risk stay with a human who can be answerable. His rule for agent-shipped code: explain it or don't ship it. Making generation cheaper never made review cheaper."
    take: true
  - kind: story
    domain: "memory-and-context"
    source: "Prukalpa Sankar / AI Engineer"
    url: "https://www.youtube.com/watch?v=8G_1-3IO4ZQ"
    title: "Atlan built 300 agent skills, then found context has to be versioned like code"
    body: "Atlan's skills fed each other and each update broke the next, so agents ran on stale truth. Model intelligence jumped roughly a thousandfold in a decade while business context barely moved. The fix is treating context like code: versioned, owned, with a maintainer."
    take: false
  - kind: story
    domain: "harness-engineering"
    source: "Model Context Protocol"
    url: "https://modelcontextprotocol.io/seps/2577-deprecate-roots-sampling-and-logging"
    title: "MCP's next spec drops Roots, Sampling, and Logging"
    body: "The 2026-07-28 spec deprecates three low-adoption features that each overlapped a more explicit alternative — advisory guidance the protocol couldn't actually enforce. The principle: a protocol stays trustworthy by carrying only what it alone can enforce. Nothing breaks today; the change is advisory."
    take: false
  - kind: story
    domain: "model-behavior"
    source: "The Decoder"
    url: "https://the-decoder.com/kimis-open-model-k3-nears-gpt-5-6-sol-and-fable-5-while-signaling-the-end-of-super-cheap-chinese-ai/"
    title: "Moonshot ships Kimi K3, a 2.8-trillion-parameter open model closing on the frontier"
    body: "Kimi K3 is the largest open-weight model yet out of China, nearing top closed models on its own benchmarks. It is markedly pricier than its predecessor, which Moonshot frames as the end of ultra-cheap Chinese AI; full weights are due July 27."
    take: false
  - kind: story
    domain: "agent-security"
    source: "The Verge"
    url: "https://www.theverge.com/tech/966442/1password-anthropic-claude-browser-integration"
    title: "1Password lets Claude use your logins without ever seeing the passwords"
    body: "A new browser integration injects logins and MFA codes to Anthropic's Claude through a channel the AI cannot read, with a single biometric approval per task. It targets one of the biggest blockers to letting agents act on real websites: handing over credentials safely."
    take: false
  - kind: quote
    domain: "harness-engineering"
    source: "Addy Osmani / AI Engineer"
    url: "https://www.youtube.com/watch?v=n97BCfyFIvw"
    title: "The agent can follow your runbook, but it can't inherit the consequences."
    attribution: "— Addy Osmani, in an AI Engineer talk"
    take: false
draft: false
---
