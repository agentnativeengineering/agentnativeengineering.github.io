[warm] Thirty-one seconds. [pause] That's how long a ransomware agent needed to fix its failed break-in... and keep moving. [curious] So when attacks run at machine speed — what on our side keeps up?

[pause] [warm] This is the Agentic Daily Brief.

Alibaba just told its engineers to put down Claude Code. Starting July tenth, the company reportedly bans Anthropic's coding agent as high-risk software and points everyone at its in-house tool, Qoder, instead. The spark was a Reddit post claiming one version of Claude Code could quietly identify Chinese users — an Anthropic developer called that a March experiment aimed at unauthorized resellers, now being removed — but the ban still marks a sharp escalation in the fight over Chinese access to frontier coding agents.

One more: England's NHS says an AI triage agent will sit in its app for every patient by twenty twenty-eight, deciding whether you need a doctor, a pharmacist, or the emergency room.

[pause] Right — let's go back to that break-in, because it lands close to home. Somewhere in your company there's a list of known bugs nobody has patched yet. Every team has one. This week, that list quietly changed from a chore... into a target.

Sysdig's threat research team documented what they assess is the first ransomware operation run end-to-end by a language model. They named it JADEPUFFER. No human at a keyboard — the agent broke into an internet-facing Langflow server, a tool for building agent workflows, then pivoted to a production database and ran a full extortion playbook against it. If you run anything agent-shaped that faces the internet, this one is about you.

[curious] The part that stopped me was the way in. How did it get through? ... Not with anything clever. Through a known, public flaw — old, fix long available, never applied. When one login attempt failed, the agent diagnosed — well, guessed, then tested — a repair, and had it working [slow] thirty-one seconds after the failure. Its own code narrated its reasoning as it went, you know, the way model-written code explains itself without being asked.

Zoom out, and the other half of the picture is a chart from Epoch AI. June set a record: roughly fifteen hundred high or critical vulnerabilities reported in a single month, more than triple the old monthly record — right as the big labs' AI bug-hunting programs spun up. [surprised] Finding flaws has gotten that cheap, that quickly.

The more important question isn't how many bugs the machines can find — it's how fast anyone fixes them. Discovery used to be the expensive half of security. um... not anymore. The slow half now is everything after: deciding what matters, shipping the patch, rolling it out. The human half.

Where the scary number oversells: that spike counts reports, not your exposure — most of those flaws live in software you may not even run, and better hunting isn't the same as new risk. What JADEPUFFER proves is duller, and worse. It didn't need a fresh discovery at all. Your unpatched backlog is now an attack surface, and it gets probed faster than any human team moves.

Which left me squinting at the other numbers we lean on... because if a bug count can read too high, a capability score can read too low.

[curious] Nearly every decision you make about agents — what to buy, what to allow, what to worry about — rests on benchmark scores. The UK's AI Security Institute just showed those scores are systematically understated. Their study ran frontier models across a spread of benchmarks and varied one thing: the compute budget, how many tokens the agent may burn before time's up. Standard evals cap that budget. Performance, it turns out, is still climbing when the cap cuts it off. Hand the agent ten times the budget, and the stretch of human work it can finish grows from about two hours... [slow] to fourteen.

Cut the budget while the curve is still climbing, and the score tells you the minimum, not the maximum.

[thoughtful] My read is that this is a safety finding wearing a benchmark costume. If you plan around what agents can't do, a floor dressed up as a ceiling means you're under-planning — and the gains concentrate where an agent can check its own work, running code, testing an exploit... uh, exactly the territory from our first story.

So is more compute the whole answer? No. Extra tokens barely move tasks where the agent gets no feedback — medical benchmarks plateau early. Realism cuts the other way too: Snorkel built a benchmark from real senior-engineer work, or rather, work the way it actually arrives — vague, half-specified — and the best model there solves fewer than one in four tasks. Same agent, two rulers. A fourteen-hour worker on one, a struggling junior on the other, and the ruler you pick decides what you believe.

One last story. Measurement is one kind of defense. Walls are the other — and one team just wrote up what real walls cost.

When a chat agent can install software, browse, and run programs it wrote itself, I mean — that's untrusted code, full stop. What keeps one person's agent out of everyone else's data? ... At Adapt, the answer is a whole computer. Sean Smith, their CTO, described giving every single conversation its own virtual machine, born the moment the chat starts.

They didn't begin there. The first try was gVisor, a software stand-in for the operating system's kernel — and at scale it hurt. Everything ran a little slower, some things behaved subtly wrong, and they had no control over boot times or how machines packed together. The switch was to Firecracker — stripped-down virtual machines with real hardware walls, booting in [surprised] a few hundred milliseconds.

That speed changed the whole shape of the system. Boot fast enough, and you don't need idle spares warmed up and waiting. Spin a machine up when the conversation starts. Tear it down when it ends. [whispers] Nothing lingers.

Their bet isn't free, though. Owning real virtual machines means owning the plumbing a managed platform used to handle — scheduling, networking, turning container images into bootable disks — so Adapt built an entire control plane just to win back the convenience they gave up. Set that next to the break-in story and Adapt reads like the other side of the same day: assume the agent's code might go wrong, and shrink the blast radius to one conversation.

[warm] Before you head off, one small thing worth doing Monday: list your internet-facing services and ask a single question — which one has a published fix we haven't applied, and for how long? That exact gap, on one exposed server, was JADEPUFFER's entire way in.

[curious] If you've got a little time this weekend, Peter Yang has a talk worth watching, called Agents will use apps more than humans. His argument, leaning on Cloudflare data, is that bot traffic already tops human traffic — so an app built for human clicks risks becoming a dumb pipe an agent steers from the outside. The idea to carry: make your product something agents can discover and use, through APIs, command lines, and MCP, the standard plug for wiring tools to agents.

[pause] So, the question from the top: when an attacker recovers from its own mistake in half a minute, what keeps pace on defense? [slow] Mostly, boring things. The old patch applied this week instead of next quarter. A throwaway machine around every conversation. A longer ruler before we decide what agents can't do. Unglamorous, all of it — and right now, that's the half that decides.

That's today's Agentic Daily Brief. [pause] Brought to you by Agent Native Engineering — open knowledge for building and running AI agents. The full write-ups, with their sources, are at agent native engineering dot com. [warm] See you next time.
