---
title: "Silent MCP Schema Drift Breaks Agents Without Warning"
date: 2026-09-10
summary: "MCP tool schemas can change without any description update, and standard clients never re-prompt for approval, so agents keep calling tools against a stale mental model until CI fingerprinting or pre-flight hooks catch it."
takeaways:
  - "Seventeen tool definitions changed their input schema or annotations while descriptions stayed byte-identical across 14 servers in a 27-hour window, per mcp-pin's September 3 crawl of 248 public MCP servers."
  - "CI-based fingerprinting that canonicalizes tool metadata with RFC 8785 and hashes it with SHA-256 flags schema-only diffs that description-only review misses."
  - "yul's PreToolUse hook blocks manifest writes that pin outdated dependencies, returning the correct version via stderr so the agent retries instead of shipping a stale pin."
tags: [harness-engineering, mcp, reliability]
domain: harness-engineering
sourceName: "github.com"
sourceUrl: "https://github.com/GautamTalksDev/mcp-pin/blob/main/docs/findings/2026-09-03-schema-drift.md"
draft: false
---

## The Takeaway

MCP tool schemas can change without any visible description edit, so agents keep calling tools against a stale mental model until something breaks.

## The details

- On 3 September 2026, a crawl of 248 public MCP servers by [mcp-pin's schema drift findings](https://github.com/GautamTalksDev/mcp-pin/blob/main/docs/findings/2026-09-03-schema-drift.md) found 14 servers changed within 27 hours, and 17 tool definitions altered their input schema or annotations, such as a flipped `readOnlyHint` or a changed enum, while the description text stayed byte-identical.
- No MCP client re-prompts for approval when only the schema changes, so a model keeps treating a tool the way it did at first approval, even after the tool's actual behavior shifts.
- The same findings show that canonicalizing tool metadata per RFC 8785 and hashing it with SHA-256, as `mcp-pin` does in CI, creates a baseline that flags schema-only diffs on every pull request.
- Separately, [`yul`](https://github.com/chains-project/yul) installs a `PreToolUse` hook that blocks manifest writes pinning outdated dependencies with exit code 2, returning the correct version on stderr so the agent retries with a validated spec instead of shipping a stale pin.

## Why it matters

Teams running long-lived agents against MCP servers should stop trusting description diffs alone and start fingerprinting the full tool schema, then pair that with pre-flight hooks like `yul`'s so a stale or drifted dependency fails the write instead of failing silently at runtime.

[Harness Engineering](/guide/harness-engineering/)
