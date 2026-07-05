---
title: "The First AI-Run Ransomware Recovered From Its Own Mistake in Thirty-One Seconds"
date: 2026-07-05
summary: "Sysdig's JADEPUFFER ransomware ran itself, AISI shows capped benchmarks read the floor, and Adapt boots a microVM per chat — defense at machine speed."
audio: "/audio/field-notes-episode-jadepuffer-thirty-one-seconds.mp3"
seconds: 561
youtube: "https://youtu.be/d0QtdC5s9YM"
covers:
  - "2026-07-04-firecracker-microvm-agent-sandboxes-at-scale"
  - "2026-07-04-fixed-token-budgets-benchmarks-read-the-floor"
  - "2026-07-04-ai-bug-hunting-flipped-bottleneck-patching-cves"
oneIdea:
  title: "A fixed compute budget makes an agent benchmark report the minimum capability: AISI found 10x the tokens stretched the frontier time horizon from ~2 hours to 14."
  body: "The UK's AI Security Institute tested frontier models across seven benchmarks at varying compute budgets and found performance still climbing when standard caps cut it off — with the biggest gains on tasks where the agent can verify its own work, like code and exploits. That matters beyond leaderboards: the same week, Sysdig documented JADEPUFFER, the first LLM-run ransomware, exploiting old unpatched flaws at machine speed. Planning security around capped benchmark scores means planning around a floor while attackers work from the curve."
stats:
  - n: "31 s"
    label: "JADEPUFFER went from a failed login to a working fix — no human in the loop"
  - n: "~1,500"
    label: "high/critical CVEs reported in June 2026, over 3.5x the previous monthly record"
  - n: "2→14 hrs"
    label: "frontier agent time horizon when the token budget grows tenfold (AISI)"
  - n: "24%"
    label: "best model's solve rate on Snorkel's Senior SWE-Bench of real, under-specified tasks"
brief:
  - kind: story
    domain: "security"
    source: "Sysdig"
    url: "https://www.sysdig.com/blog/jadepuffer-agentic-ransomware-for-automated-database-extortion"
    title: "The first LLM-run ransomware got in through a years-old unpatched flaw"
    body: "Sysdig's threat research team documented JADEPUFFER, which it assesses as the first ransomware operation driven end-to-end by an LLM agent. It entered through a known unpatched Langflow CVE, pivoted to a production database, and recovered from a failed step in 31 seconds. With AI bug-hunting driving a record ~1,500 high/critical CVEs in June, the binding constraint is now triage and patching, not discovery."
    take: true
  - kind: story
    domain: "evaluation"
    source: "The Decoder"
    url: "https://the-decoder.com/uks-ai-security-institute-finds-standard-benchmarks-systematically-underestimate-what-ai-agents-can-actually-do/"
    title: "AISI: fixed token budgets make agent benchmarks read the floor, not the true curve"
    body: "The UK's AI Security Institute tested frontier models across seven benchmarks and found capability is a curve over compute — 10x the token budget lifted software-engineering success ~25% and stretched the frontier time horizon from ~2 to 14 hours. Gains concentrate where agents can verify their own work; Snorkel's Senior SWE-Bench shows realism cuts the other way, with the best model at 24%."
    take: false
  - kind: story
    domain: "security"
    source: "Adapt"
    url: "https://adapt.com/blog/orchestrating-agent-sandboxes"
    title: "Adapt runs a Firecracker microVM for every agent conversation"
    body: "Adapt CTO Sean Smith describes outgrowing gVisor's syscall overhead and boot-control limits, and moving to hardware-virtualized Firecracker microVMs — one per conversation. Sub-second boots let them kill the warm pool entirely, at the cost of building their own control plane for scheduling, networking, and OCI-to-rootfs conversion."
    take: false
  - kind: story
    domain: "security"
    source: "TechCrunch"
    url: "https://techcrunch.com/2026/07/04/alibaba-reportedly-bans-employees-from-using-claude-code/"
    title: "Alibaba bans employees from Claude Code, labeling it high-risk software"
    body: "Alibaba will reportedly bar employees from Anthropic's Claude Code starting July 10, steering staff to its in-house Qoder tool after a Reddit post claimed a version could identify Chinese users — which an Anthropic developer described as a March anti-reseller experiment being removed. A sharp escalation in the tug-of-war over Chinese access to frontier coding agents."
    take: false
  - kind: quote
    domain: "security"
    source: "Agent Native Engineering"
    url: "https://www.sysdig.com/blog/jadepuffer-agentic-ransomware-for-automated-database-extortion"
    title: "AI didn't just speed up finding bugs; it turned your unpatched backlog into a machine-speed attack surface."
    attribution: "— the lesson from Sysdig's JADEPUFFER research"
    take: false
draft: false
---
