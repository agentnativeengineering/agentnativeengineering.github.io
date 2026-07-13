---
title: "DoorDash Replayed a Thousand Old Pull Requests to Triple Its Bug Catch"
date: 2026-07-13
summary: "DoorDash's staged AI reviewer caught 3x the bugs a single pass missed — proof the easy metrics AI inflates hide the ones that actually matter."
audio: "/audio/field-notes-episode-easy-metrics-lie.mp3"
seconds: 623
youtube: "https://youtu.be/9Qm14yhf_uw"
covers:
  - "2026-07-12-ai-roi-is-a-throughput-problem"
  - "2026-07-12-measure-ai-coding-value-by-outcomes-not-activity"
  - "2026-07-12-dashbench-build-your-eval-stage-scout-then-verify"
oneIdea:
  title: "Acceptance rate can't record the bug your reviewer missed — a code reviewer can look great in production while missing most of what actually matters."
  body: "DoorDash learned this replaying its own historical pull requests: production signals like acceptance rate only ever book comments accepted or rejected, never the false negatives a reviewer stayed silent on. A staged scout-then-verify reviewer surfaced roughly three times the real findings of a strong single pass — a gap no production metric could ever show. You can't rank reviewers without replaying real cases where you already know the answers."
stats:
  - n: "164 → 504"
    label: "Real bugs found: single-pass reviewer vs staged scout-then-verify on DoorDash's PRs"
  - n: "53.6% vs 30.7%"
    label: "Weighted recall, DoorDash's staged reviewer vs a strong single pass"
  - n: "5x / 4x"
    label: "Extra dollars and latency per PR the staged reviewer's coverage costs"
  - n: "~80%"
    label: "Best staged config's recall on critical findings — even the winner isn't perfect"
brief:
  - kind: story
    domain: "evaluation"
    source: "DoorDash Engineering"
    url: "https://careersatdoordash.com/blog/how-we-learned-to-trust-our-ai-code-reviewer-at-doordash/"
    title: "A staged AI code reviewer caught 3x the bugs of a single pass"
    body: "DoorDash built DashBench from ~1,000 of its own historical PRs, then found a scout-then-verify reviewer surfaced 504 real findings (53.6% weighted recall) versus 164 (30.7%) for a strong single pass. Acceptance rate in production can't record the bugs a reviewer misses, so you can't rank reviewers without replaying real cases — and the coverage cost ~5x the dollars and 4x the latency."
    take: true
  - kind: story
    domain: "autonomy-and-cost"
    source: "20VC / Arvind Jain"
    url: "https://www.youtube.com/watch?v=jX-Uq8JJ_j8"
    title: "Most of your agent's tokens go to assembling context, not working"
    body: "Glean's Arvind Jain argues AI ROI is a throughput problem: agents wired crudely to enterprise systems brute-force their own context assembly, burning most tokens before real work starts. Glean's own triage agent handled ~95% of production issues but ran ~$1M/month — more than the on-call team it replaced. The lever is the retrieval layer, not a bigger model."
    take: false
  - kind: story
    domain: "evaluation"
    source: "METR"
    url: "https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/"
    title: "AI inflates the coding metrics that are easy to count"
    body: "Activity metrics — lines of code, PRs, percent AI-written — are exactly what AI puffs up while delivery speed and stability lag. METR's randomized trial found experienced devs were measurably slower with AI on mature codebases, yet believed they were faster. Baseline delivered outcomes before rollout: throughput, change-fail rate, cost per merged PR."
    take: false
  - kind: story
    domain: "autonomy-and-cost"
    source: "Anthropic"
    url: "https://the-decoder.com/claude-code-now-has-a-built-in-browser-that-lets-the-ai-read-click-and-type-on-external-websites/"
    title: "Anthropic gives Claude Code a built-in browser"
    body: "Claude Code now has an integrated browser the agent can use to read, click, and type on external sites like docs and issue trackers — with classifiers screening write actions and hard blocks on purchases, account creation, and CAPTCHA-bypassing without consent. Organizations can gate it behind an allowlist or disable it entirely."
    take: false
  - kind: story
    domain: "autonomy-and-cost"
    source: "Alaya Lab"
    url: "https://the-decoder.com/ai-agents-win-at-slay-the-spire-2-after-researchers-replace-growing-chat-logs-with-structured-memory/"
    title: "Structured memory beats bloated chat logs for long-running agents"
    body: "Researchers at Alaya Lab and Shanghai Jiao Tong University replaced an agent's ever-growing transcript with five rebuilt memory layers, keeping prompts near 5,000 tokens instead of ballooning past 500,000. It won 6 of 10 Slay the Spire 2 games while transcript agents won none and burned 66–90x more tokens per point."
    take: false
  - kind: quote
    domain: "evaluation"
    source: "DoorDash Engineering"
    url: "https://careersatdoordash.com/blog/how-we-learned-to-trust-our-ai-code-reviewer-at-doordash/"
    title: "You can't tell a better reviewer from a worse one by watching which comments get accepted."
    attribution: "— DoorDash, on why acceptance rate can't see false negatives"
    take: false
  - kind: quote
    domain: "evaluation"
    source: "getDX"
    url: "https://getdx.com/blog/ai-measurement-hub/"
    title: "If a metric jumps the moment you switch on AI, it is probably measuring activity rather than value."
    attribution: "— on measuring AI's real ROI in engineering"
    take: false
draft: false
---
