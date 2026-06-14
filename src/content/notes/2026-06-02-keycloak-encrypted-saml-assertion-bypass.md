---
title: "A Keycloak SAML flaw lets a stolen login token impersonate anyone (CVE-2026-2092)"
date: 2026-06-02
summary: "Keycloak's SAML broker checked the outer message's signature but not the encrypted login inside it when the message was unsigned (CVE-2026-2092). Upgrade to a patched line."
takeaways:
  - "Patch Keycloak now if you broker SAML logins. A flaw disclosed 29 May 2026 (CVE-2026-2092) lets an attacker who already holds a valid signed SAML login forge a login as anyone — any user or agent."
  - "The gap is a skipped check. Keycloak verified the outer message's signature but not the encrypted login inside it when the outer message itself was unsigned."
  - "Fix it in two moves. Upgrade to a patched line, then require signed SAML responses on every external login provider (the advisory prescribes only the upgrade; the signing step is this note's hardening)."
tags: ["access-identity", "security"]
domain: "access-and-identity"
sourceName: "github.com"
sourceUrl: "https://github.com/keycloak/keycloak/security/advisories/GHSA-794g-x443-36f7"
draft: false
---

If you run Keycloak — a widely used open-source login server — to let people or agents sign in through an outside identity provider, a flaw disclosed on 29 May 2026 lets an attacker log in as anyone.

Some plain SAML vocabulary first. SAML is the XML standard for single sign-on. A *login provider* (IdP, the outside service like Google or Okta that vouches for you) sends Keycloak a *response* — the outer message. Inside it sits an *assertion*: the XML statement saying "this is who logged in," naming a *principal* (the claimed identity — any account, human or machine). Pieces can be *signed* (tamper-proof) and/or *encrypted* (hidden). Keycloak here is the *broker*: the server that accepts these logins and issues the tokens your apps trust.

The advisory is [GHSA-794g-x443-36f7 / CVE-2026-2092](https://github.com/keycloak/keycloak/security/advisories/GHSA-794g-x443-36f7), rated HIGH (7.7 out of 10 on the standard CVSS severity scale). Keycloak's SAML broker does not properly validate an encrypted assertion when the overall response is not signed. An attacker who already holds a valid signed SAML assertion can craft a malicious response and inject an encrypted assertion for a principal it chooses — granting unauthorized access.

So the broker checked one thing (the outer signature) while the identity decision was driven by another (the injected encrypted assertion). It vouched for a user it never actually checked. The advisory does not say how easily the starting assertion is obtained; reading it as a low bar — the attacker's own legitimate login to a trusted provider — is this note's take.

This matters beyond the human login path. More teams now use Keycloak to issue identities to automated agents as well as people. (The advisory scopes this to SAML brokering; the agent-native stake is this note's framing.) Fool the broker about who someone is, and every downstream least-privilege decision is built on a forged identity.

The advisory names only upgrade as the fix and lists no workaround. The affected `org.keycloak:keycloak-services` ranges are `< 26.2.14`, `>= 26.3.0 < 26.4.10`, `>= 26.5.0 < 26.5.5`; the patched lines are 26.2.14 / 26.4.10 / 26.5.5 / 26.6.0.

A hardening that follows from the trigger — the bug only fires on an unsigned response — is to require signed SAML responses on every external login provider. The advisory itself lists no workaround, so treat this as the note's own move. As deeper defense the advisory does not address, a relationship-based authorization service like [OpenFGA](https://github.com/openfga/openfga) or [SpiceDB](https://github.com/authzed/spicedb) — where you declare rules like "user X can edit doc Y" — limits the blast radius if a wrong identity slips through.

Do this today: check your Keycloak version (Admin Console footer, or `kc.sh --version`). If it is below 26.2.14 / 26.4.10 / 26.5.5 / 26.6.0 for your minor line, upgrade to the matching patch — that is the whole fix, no config change. While there, turn on required response signing per external login provider (confirm the exact toggle in the admin UI first).

[Access & Identity](/guide/access-and-identity/)
