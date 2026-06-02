---
title: "Worker versioning instead of patch sprawl"
date: 2026-06-02
summary: "Alaska Airlines hit 50+ accumulated Temporal patches in three years; pinning each in-flight execution to the build it started on let them ship breaking changes with no patch and no non-determinism error."
tags: ["durable-execution", "deploys"]
draft: false
---

A durable workflow has to be deterministic on replay. The engine rebuilds in-flight state by replaying recorded history, so any edit to a code path a running execution will replay through is a non-determinism hazard. Change the code and an in-flight execution hits a non-determinism error. That single constraint is what produced the patch debt that two Alaska Airlines engineers walked through at Temporal's [Replay 2026](https://www.youtube.com/watch?v=fdy7sKuxw9M) (published 29 May 2026).

Their numbers set the scene. Alaska's booking-engine team has run Temporal in production since mid-2023 — roughly three years — as an early adopter of the .NET SDK. The airline carried 55M+ passengers in 2025, which works out to about 3 million Temporal actions a day, and the team merges around 32 PRs a week into a system where idempotency is critical: a retry that double-charges a customer's card is, in their words, a very bad day.

The sanctioned way to evolve replayed workflow code is Temporal's [patching API](https://docs.temporal.io/develop/dotnet/versioning) — wrap each change so old executions take the old branch and new ones take the new branch. It works, but every breaking change leaves another `if-else` branch in the workflow, and the branch can only be removed once all executions carrying it drain. Removing one was a five-step deploy-and-drain ritual. Over three years that compounded into 50+ accumulated patches, patches begetting patches, code nobody could safely clean up.

What they moved to is [worker versioning](https://docs.temporal.io/worker-versioning), now generally available, plus what they call rainbow deployments. Services and workers are tagged together as one release. A new release is deployed side by side with the live one, takes zero customer traffic, and can be tested end to end; when it's ready the traffic manager shifts over in seconds and rollback is one command. The key property is that in-flight workflows do not move to the new release — they keep draining on the build they started on, while new executions start on the new build.

That removes the premise the patch was guarding. Each execution is pinned to its starting Build ID, so a running execution never replays against code it didn't start on, and the non-determinism error can't occur. New code only ever sees new executions, so there's nothing to branch on and nothing to clean up later. The five-step deploy collapsed to one step.

The mechanism is open source — [Temporal](https://github.com/temporalio/temporal) ships both the patching API and worker versioning — and the same evolve-replayed-code problem shows up in Restate, DBOS, and Dapr workflow, each with its own versioning story. The lesson generalizes: don't make patching your only tool for code evolution. Use it for small in-place changes, and pin executions to a build for the breaking ones.

[Durable Execution](/guide/durable-execution/)
