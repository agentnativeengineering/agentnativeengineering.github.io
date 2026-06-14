---
title: "Never expose a raw MCP server"
date: 2026-05-30
summary: "MCP shipped without mandatory auth, so put a gateway in front of every server that enforces OAuth 2.1, audience validation, and no token passthrough — and route it through a registry that acts as your control plane."
tags: ["mcp", "security"]
domain: "security"
sourceName: "theregister.com"
sourceUrl: "https://www.theregister.com/security/2026/05/13/bug-hunter-tracks-down-three-serious-mcp-database-flaws-one-left-unpatched/"
draft: false
---

On [13 May 2026 The Register reported](https://www.theregister.com/security/2026/05/13/bug-hunter-tracks-down-three-serious-mcp-database-flaws-one-left-unpatched/) three flaws a researcher found in the MCP servers fronting popular databases: a SQL-injection in the [Apache Doris MCP](https://www.theregister.com/security/2026/05/13/bug-hunter-tracks-down-three-serious-mcp-database-flaws-one-left-unpatched/) (CVE-2025-66335, since patched), an authentication bypass in the [Apache Pinot MCP](https://www.theregister.com/security/2026/05/13/bug-hunter-tracks-down-three-serious-mcp-database-flaws-one-left-unpatched/) that ran HTTP transport with no auth, and information disclosure in the [Alibaba RDS MCP](https://www.theregister.com/security/2026/05/13/bug-hunter-tracks-down-three-serious-mcp-database-flaws-one-left-unpatched/) — unauthenticated clients could reach its tools and exfiltrate metadata. Alibaba declined to patch, calling it "not applicable." The analyst's summary was that the failures sat in the "missing or faulty security validation between the MCP server and its back end."

That is the same gap [a missing-auth bug in nginx-ui](https://www.rapid7.com/blog/post/etr-cve-2026-33032-nginx-ui-missing-mcp-authentication/) (CVE-2026-33032, CVSS 9.8) opened a month earlier: one MCP endpoint skipped the auth middleware, and any network-adjacent attacker could take over the server in two requests. It is also the pattern [Knostic mapped at scale in 2025](https://www.knostic.ai/blog/mapping-mcp-servers-study), finding 1,862 MCP servers exposed and not one requiring authentication. For a protocol whose whole job is to connect agents to your data and tools, that is a direct path to exfiltration.

The fix is already written down. The [MCP authorization spec](https://modelcontextprotocol.io/specification/draft/basic/authorization) builds on OAuth 2.1 with PKCE, requires clients to send an [RFC 8707](https://www.rfc-editor.org/rfc/rfc8707.html) `resource` parameter, and requires servers to validate that a token was issued specifically for them. It also states that [token passthrough is explicitly forbidden](https://modelcontextprotocol.io/specification/draft/basic/authorization): a server that forwards a token meant for it to a downstream API creates the confused-deputy problem, where the downstream service trusts a token it never should have seen. Most exposed deployments skip all of this.

You do not have to retrofit each server. Front them with a gateway that enforces auth once, and route everything through a registry that acts as your control plane. Uber runs this in production: its MCP gateway and registry is, in its team's words, ["the control plane for all MCP interactions"](https://www.youtube.com/watch?v=yVqMxBahjfA) at the company. Every call routes through a [central authorization service and a PII redactor](https://www.youtube.com/watch?v=yVqMxBahjfA), the gateway [blocks mutable endpoints that could topple critical services](https://www.youtube.com/watch?v=yVqMxBahjfA), and [third-party MCP servers face extra gating and scanning](https://www.youtube.com/watch?v=yVqMxBahjfA) before any agent can touch them. The registry is the single source of truth for what exists and what version is live.

[Access & Identity](/guide/access-and-identity/).
