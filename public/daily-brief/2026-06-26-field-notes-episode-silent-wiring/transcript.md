[warm] Exit code zero. [pause] An agent ran a setup command, got a clean pass, and quietly built a project from twenty-twenty — six years stale. [curious] So when an agent does the wrong thing and nothing complains... what didn't it see?

This is the Agentic Daily Brief.

[curious] And that question is already loose in the news today. The big one — OpenAI is holding back its next model, GPT five-point-six. Not by choice, exactly. The White House asked them to slow the rollout, so OpenAI told staff it'll ship only as a limited preview, approved one customer at a time, while government offices build a way to test model security. [surprised] Officials judged its cyber-offense skills on par with the strongest frontier systems. That's the U.S. government directly gating when a commercial model can ship — which, uh, we haven't really seen before.

Two more, quick. Anthropic told senators that operators linked to Alibaba's Qwen lab spun up roughly twenty-five thousand fake accounts to run nearly twenty-nine million conversations with Claude — what Anthropic calls the largest known attempt to copy a model's abilities by harvesting its answers. And DeepReinforce open-sourced Ornith one-point-oh, a coding model that, during training, learns to build its own scaffold instead of leaning on one an engineer wired up by hand.

[curious] Back to that stale project. Microsoft's developer team wrote this one up, and it's the kind of thing that makes your stomach drop a little. An agent runs a setup command — no version pinned, just the package name, assume "latest." The command finishes. Exit code zero. Files appear. The agent moves on, happy.

[pause] Except it just installed a release from twenty-twenty. The SharePoint toolkit, version one-eleven, when the current one is one twenty-three. [surprised] A six-year gap, silently.

[thoughtful] Here's why it happened. When you don't pin a version, the package manager picks the newest release that fits your runtime — and an ancient package with no stated requirements counts as fitting everything. So when the new releases rule out your setup, it quietly falls back to the old one. And the agent? It has no eyes for any of this. As the authors put it — runtime environments are invisible to agents. It sees "command ran, files appeared," and nothing else.

[slow] A failure that returns a clean pass is worse than a crash. A crash you'd catch. This one you build on.

[thoughtful] So if you've got agents scaffolding anything, the fix isn't smarter prompting. It's making the silent path loud — pin the version, then check what actually landed in the project file afterward. The agent won't add that check for you. You have to.

[curious] Now — that's one agent fooled by one quiet tool. But what happens when the agent is the reviewer? When you build a whole pipeline of agents checking each other's work?

[thoughtful] Engineer Chris Williams wrote a piece on exactly this, and it reframed something for me. The instinct, when you go agentic, is to copy the human software process — you know, design, build, review, sign-off — but swap a person for an agent in each seat. Williams says that's a trap. That whole process, he argues, is sixty years of defenses against *human* weakness. Forgetfulness. Ego. Fear of blame. [surprised] Agents don't have those.

[pause] What they do have is a different set of failures. Sycophancy — just agreeing. Confident hallucination. Quitting the moment something looks done.

[slow] A probabilistic agent checking another probabilistic agent isn't a control loop unless the gate is one the agent can't game and the reviewer comes in cold, with no idea who built the thing.

[thoughtful] Because here's the failure he names, and it's vivid. Agents build a gorgeous storefront with nothing behind the counter — the screen works, the tests pass, the data underneath is faked. The builder declares victory. And every downstream agent nods along, because they all share the same blind spot. You haven't built verification. You've automated agreement.

[warm] His rule is clean: every gate you add should defend against a specific way the *model* fails. If it only guards against a human flaw — cut it. And that nodding-along problem? You can flip it. Point the agent's eagerness-to-please at an adversarial job — tell it to *refute* the work, not approve it. Sycophancy stops being a bug when its whole charter is "prove this wrong."

[curious] One more story before you go — and it's the deepest plumbing of the three. Picture this: you want one agent that can reach across your Slack, your email, your calendar, all at once. To do real work for you. [pause] Sounds simple. It isn't.

[thoughtful] Jerome Swannack — one of the original architects of MCP, the standard that connects AI tools to your apps — explained why. The protocol only flows one way. Servers offer tools, the client calls them. But the client can't offer anything back. So the moment you want an agent that orchestrates your *other* tools, you've got nowhere clean to put the keys. [surprised] You end up scattering passwords and login flows across every single service. Trust smeared everywhere, and the user gets a fragile chain of "approve this, approve that."

[curious] Swannack's fix is to make the connection two-way, so the client becomes a switchboard — the sub-agent asks for something, the client routes it and holds all the credentials in one place. And honestly, the field is circling this exact spot from both sides — some teams pushing the prompts and tools out of the app and onto a server you can edit live, others pulling them into the browser where the agent can see what you've actually got selected on screen.

[slow] It's a proposal, not shipped — Swannack demoed it, but it's not in the stable protocol yet. The real signal is that everyone's arguing about the same doorway: where the credentials and tools should live.

[warm] So before you go, one thing worth trying this week. Take one gate in your agent setup — one review step, one approval — and ask the blunt question: what *model* failure does this actually catch? If the honest answer is "it just makes another agent say looks good"... you've found an automated yes-man. Either give it a real, deterministic check, or point it at refuting the work instead.

[thoughtful] Because all three of today's stories are the same shape, really. A stale project nobody flagged. A storefront with nothing behind it. Keys scattered across a dozen doors. [pause] The model did its job each time. [warm] What went quiet was everything we built around it to keep it honest — the check that never fired, the reviewer that only nodded, the switchboard that was never there.

That's today's Agentic Daily Brief. [pause] Brought to you by Agent Native Engineering — open knowledge for building and running AI agents. The full write-ups, with their sources, are at agent native engineering dot com. [warm] See you next time.
