---
title: "When \"encrypted\" stood in for \"verified\" in a SAML broker"
date: 2026-06-02
summary: "Keycloak's CVE-2026-2092 let one valid signed assertion spoof any principal — validate every assertion that feeds an identity decision, including the encrypted one."
tags: ["access-identity", "security"]
draft: false
---

A federation broker that checks the *signature* on a SAML response but skips validating an **encrypted** assertion inside an *unsigned* response can be turned into an identity spoof. That is exactly what the Keycloak team disclosed on 29 May 2026.

The advisory is [GHSA-794g-x443-36f7 / CVE-2026-2092](https://github.com/keycloak/keycloak/security/advisories/GHSA-794g-x443-36f7), rated **HIGH** (CVSS 7.7). Keycloak's SAML broker endpoint does not properly validate an encrypted assertion when the overall SAML response is not signed. An attacker who holds **any one valid signed SAML assertion** can craft a malicious response and inject an encrypted assertion for an **arbitrary principal**, leading to unauthorized access and potential information disclosure.

The shape of the bug is a textbook trust-boundary gap. SAML lets a response carry signed and/or encrypted assertions. The broker treated the response-level signature check as sufficient and did not independently verify the encrypted assertion's authenticity when the response itself was unsigned. So the gate validated one thing — the response shell — while the identity decision was actually driven by another, the injected encrypted assertion. The broker became a confused deputy, asserting a principal it never verified.

This matters beyond the human login path. Keycloak is the CNCF-Incubating OIDC/SAML broker that many teams run as the identity control plane in front of both their people and their agents — the component that federates external identity providers and issues the tokens downstream services, and increasingly non-human agent identities, trust. If the broker that mints an agent's identity can be made to trust the wrong principal, every downstream least-privilege decision is built on a forged subject.

The fix is already shipped. The advisory names the affected `org.keycloak:keycloak-services` ranges (`< 26.2.14`, `>= 26.3.0 < 26.4.10`, `>= 26.5.0 < 26.5.5`) and the patched lines: **26.2.14 / 26.4.10 / 26.5.5 / 26.6.0**. Upgrade is the primary remediation; no protocol change is required.

Two defenses follow directly. Require **signed SAML responses** on every brokered IdP — the bug only triggers when the overall response is unsigned, so enforcing signing removes the attacker's entry condition before the broker parses the payload. And box in what a brokered identity can reach: externalize authorization onto explicit relations with [OpenFGA](https://github.com/openfga/openfga) or [SpiceDB](https://github.com/authzed/spicedb), so even an authenticated-but-wrong principal is constrained rather than implicitly trusted.

The rule underneath: every assertion that feeds an identity decision gets authenticated on its own merits. Don't let "encrypted" stand in for "verified," and fail closed on unsigned responses.

[Access & Identity](/guide/access-and-identity/)
