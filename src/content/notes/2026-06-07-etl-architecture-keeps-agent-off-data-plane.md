---
title: "An ETL architecture that keeps the AI agent off the data plane"
date: 2026-06-07
summary: "A proposed agentic-Airbyte design runs data syncs through four bounded contracts so the coding agent plans the job but never touches the rows or the secrets."
takeaways:
  - "The risk is letting an agent both read untrusted data and hold credentials. This design splits those: the agent writes a bounded job spec, and a sandbox runner executes it so the prompt is never the data plane."
  - "Each stage owns one decision and emits a narrow output. The spec lists refs, a credential profile, a retry policy, validation checks, and artifacts, and execution returns logs, JUnit, metrics, and row counts that decide finish, retry, repair, or alert."
  - "Failures become boundary breaks rather than mysteries. A break at a contract edge tells you where to look and what you are allowed to change, instead of debugging a single opaque agent run."
tags: ["security", "etl", "sandbox", "data-plane", "airbyte"]
domain: "security"
sourceName: "zozo123.github.io"
sourceUrl: "https://zozo123.github.io/agentic-airbyte/"
draft: false
---
**Why this matters to you.** If you wire an AI coding agent into a data pipeline, the tempting shortcut is to let it read the source rows, hold the warehouse credentials, and move the data itself. That hands one nondeterministic process both untrusted input and live secrets — the exact shape of the lethal trifecta, where an injected row can steer an agent that also has the means to exfiltrate.

**What it proposes.** On 2026-06-07 a write-up titled [ETLs in the Era of AI and Sandboxes](https://zozo123.github.io/agentic-airbyte/) proposed an alternative: an "agentic Airbyte" where the agent plans but never touches the data. Its framing is blunt — "Agent plans. Crabbox runs. Airbyte moves. Evidence decides." The agent (the post names [Claude Code, Codex, or OpenCode](https://zozo123.github.io/agentic-airbyte/) as the harness) turns a goal into a bounded job spec; a sandbox runner called Crabbox leases a worker and runs that spec under a durable run id; Airbyte moves the rows directly; and execution emits evidence that decides what happens next.

**The pattern.** Four narrow contracts. The [spec](https://zozo123.github.io/agentic-airbyte/) carries refs, a credential profile, a retry policy, validation, and artifacts — and explicitly redacts password, token, and secret. The credential profile name becomes scoped environment variables inside the worker only; the agent sees only the profile name, never the values. The connector moves rows directly so, in the author's words, "the prompt never becomes the data plane."

**The idea underneath.** It is separation of concerns made physical. Because the agent's output is a [spec contract rather than prose](https://zozo123.github.io/agentic-airbyte/), the data never flows back through the prompt window, so an injected record cannot rewrite the job. And because each box takes a narrow input and emits a narrow output, the post argues that [failures show up as boundary breaks](https://zozo123.github.io/agentic-airbyte/) — a break points to where to look and what you are allowed to change, instead of one opaque run you have to re-read line by line.

**What to do tomorrow.** This is still a design write-up — a worked CLI example, no reported production deployment yet — so treat it as a pattern to evaluate, then act: audit any agent-in-the-loop pipeline you already run and check whether the agent ever holds raw rows and credentials at the same time. If it does, move the row movement to a connector and pass credentials by scoped profile, so the model only ever sees a spec and the resulting evidence.

[Security](/guide/security/)
