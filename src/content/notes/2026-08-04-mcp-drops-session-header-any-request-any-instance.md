---
title: "MCP drops the session header so any request can hit any server instance"
date: 2026-08-04
summary: "The 2026-07-28 MCP spec retires the initialize handshake and Mcp-Session-Id header, pushing agent state out of the connection and into the request payload."
takeaways:
  - "Keep agent state in the payload rather than the connection: anything held open across turns dies at the next deploy, client crash, or load-balancer hop."
  - "If a server must remember something between calls, mint an explicit handle from a tool and have the model pass it back as an argument."
  - "Server-initiated prompts and long-running work now use poll-and-retry: the server returns input_required, and the client retries the original call with the answers attached."
tags: ["architecture-and-orchestration", "mcp", "statelessness", "protocol"]
sourceName: "Model Context Protocol Blog"
sourceUrl: "https://blog.modelcontextprotocol.io/posts/2026-07-28/"
sources:
  - title: "The 2026-07-28 MCP specification release"
    url: "https://blog.modelcontextprotocol.io/posts/2026-07-28/"
draft: false
---
## What happened

On 2026-07-28 the Model Context Protocol project — the open protocol an agent host uses to talk to tool servers — [published the 2026-07-28 specification](https://blog.modelcontextprotocol.io/posts/2026-07-28/) and retired the `initialize`/`initialized` exchange along with the `Mcp-Session-Id` header. "Each request now travels on its own, carrying its protocol version, client identity, and client capabilities in `_meta`," so "any request can now land on any server instance behind a plain round-robin load balancer without needing shared storage."

## Why it matters

A protocol-level session is state you must keep somewhere: sticky routing, a shared store, or a server that stays up between calls. It also breaks in the ordinary cases — a deploy, a crashed client, a human who walks away mid-prompt. Move that state into the payload and the server boundary is a plain HTTP call again.

## How it works

1. **Stateless core.** Every request self-describes in `_meta`, so no handshake precedes it.
2. **Explicit handles.** "Dropping the protocol-level session doesn't force your application to be stateless" — [mint a handle from a tool and have the model pass it back as an argument](https://blog.modelcontextprotocol.io/posts/2026-07-28/).
3. **Poll-and-retry.** Multi round-trip requests replace the server-initiated `elicitation/create`, `sampling/createMessage` and `roots/list` calls that needed a held-open stream: the server returns `resultType: 'input_required'`, and the client retries with the answers in `inputResponses`.
4. **Long work as an extension.** [Tasks left the experimental core](https://blog.modelcontextprotocol.io/posts/2026-07-28/) for the `io.modelcontextprotocol/tasks` extension — contributed by AWS for "reliable, long-running agents" — with poll-based `tasks/get` and a new `tasks/update`.

> If the server needs to remember something, put it in the payload: mint a handle and make the model hand it back.

## The catch

This is a spec, not a shipped ecosystem — SDKs and clients still have to implement it. Polling trades a held-open connection for extra requests. And a handle in tool arguments is model-controlled input: it can be dropped, reused, or swapped between conversations, so scope it server-side and authorize every use.

[Architecture & Orchestration](/guide/architecture-and-orchestration/)
