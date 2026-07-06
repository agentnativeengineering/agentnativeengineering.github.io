[warm] Twenty-six thousand people installed an AI skill. [pause] It passed three scans, then quietly changed what it did.

[curious] So when you hand an agent a tool, what keeps it in line?

[warm] This is the Agentic Daily Brief.

Start with the biggest thing that landed overnight. Meituan — the Chinese delivery giant — open-sourced a big coding model called LongCat two point oh. [curious] Two things jump out. It's enormous, well over a trillion parameters. And they trained the whole thing without a single Nvidia chip — on fifty thousand domestic Chinese processors. On their own coding benchmark, it edges out GPT five point five. Read that as the hardware wall getting a little lower, not higher.

[surprised] And in a rare public standoff, Anthropic said no to the Pentagon — refusing to let Claude power autonomous weapons or domestic surveillance, even as the Department of War moved to cut the company out.

Okay. Money. Let's start there, because it's the one that made all of this concrete for me.

You've handed an AI your credit card. What stops it from emptying the account?

Here's the problem underneath. A model doesn't behave the same way twice — that's kind of the whole point of it, it improvises. Great when it's finding you a flight. [slow] Less great when, on a bad day, it buys the wrong thing, from the wrong seller, for the wrong amount. And if the credential it's carrying is just... your raw card number — or rather, a raw card number someone pasted into a tool call? Then the only thing between the agent and your bank balance is the wording of a prompt. That's it.

Steve Kaliski, a principal engineer at Stripe, gave a talk on exactly this. And his fix is almost boring, which is why I trust it. Instead of a card number, the agent carries a token — a credential scoped to one seller, one amount, one time window. Stripe enforces that at the moment of the charge. [surprised] He demoed an agent trying to spend past its limit, and the charge just... bounced. Rejected. Not because the agent behaved — because the credential itself couldn't go further.

[thoughtful] That's the move. You don't try to make the agent trustworthy. You make the credential carry the rule. A confused agent, a buggy one, even a hijacked one, can't exceed the mandate — because the enforcement lives at the charge, not in the conversation. The scope of that credential is your blast radius — so size it to the one task in front of the agent, not everything the agent might ever do.

A hijacked agent can't drain your account. The card itself says no.

Which is a lovely guarantee for money. But most of what an agent touches doesn't come with Stripe standing at the door.

Remember those twenty-six thousand people from the top? Let me tell you what happened to them. A security firm called AIR built a fake agent skill — and think of a skill as a little bundle of instructions your agent just reads and obeys. They dressed it up as a design helper. Then they ran it past three separate scanners, from Cisco, from Nvidia, from a skills marketplace. [surprised] All three said: safe.

Then came the part that matters. They built up trust the way any of us would judge a project — reputation on GitHub, a merge into a popular open-source repo. It spread to twenty-six thousand users. Some of them agents wired into corporate accounts. [slow] And then the skill reached out to a remote server for its real instructions, and AIR swapped them out. After the review. After the green light.

[curious] What did that scan actually prove? Well — that the skill was safe at one instant. um... nothing about the next one. [thoughtful] A scan is a snapshot — I mean, a thorough snapshot, but still just one frozen moment. A skill that phones out for its instructions is a movie. You can't govern a movie with a photograph. The real fix is to pin the fetched content to a fixed fingerprint you control — so if it changes, it breaks, loudly.

The thing to sit with: a skill can pass every check today and quietly turn into malware tomorrow.

One last one. That same idea — that the tool itself is the risk — showed up this week from the biggest players, pointed the other direction.

The coding tool your team runs? It's vendor code. Running inside your network. With read access to your source.

This week Alibaba reportedly banned Claude Code outright — classified it high-risk, told staff to switch to an in-house tool by the tenth of the month. [curious] The trigger was a claim that one version could quietly identify Chinese users. Anthropic's Thariq Shihipar confirmed the mechanism was real — called it a March experiment to stop account abuse and distillation, which is, uh, training your own model on a rival's answers — and said it's already coming down.

You can read the politics however you want. [thoughtful] But the durable part is what Meta reportedly did from the other side. Its engineers now need approval before they touch Claude Code or OpenAI's Codex at all. Why? Not because they think the data gets stolen outright. Because the traffic itself is a signal. What you ask, how often, in what shape — that leaks intent, right? Even when the provider swears it never trains on your data.

The lesson for the rest of us has nothing to do with China. Treat a coding agent like any outside program holding the keys to your repo: know what it phones home, and decide what's allowed to leave.

Before you close the laptop, one small thing worth doing tomorrow. Open your agent's spend tool — the place it actually pays for things. Find where the credential lives. If it's a full card number, or an open-ended key... that's your homework. Swap it for something scoped, and make the limit enforced on the far end, not in the prompt.

[curious] And if you want one idea to chew on, there's a walkthrough on the Better Stack channel of a Microsoft Research tool called SkillOpt. The concept is genuinely nice. It treats your agent's skill file itself as something you can train, like a model — it watches the agent win and fail, and writes back the rules that actually worked. And those improved instructions carry over from one model to another. The instruction file as a learnable asset. Worth a watch.

So. You hand an agent a tool — code, a skill, a card. What keeps it honest? [slow] Not a promise. Not a one-time green light. The limit has to live inside the thing itself, and get checked every single time the agent reaches for it. The card that says no. The fingerprint that breaks when the file changes. The tool you watched before you trusted it.

That's today's Agentic Daily Brief. [pause] Brought to you by Agent Native Engineering — open knowledge for building and running AI agents. The full write-ups, with their sources, are at agent native engineering dot com. [warm] See you next time.
