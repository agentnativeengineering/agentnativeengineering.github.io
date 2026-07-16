[curious] Five or six AI coding agents, running at once. And the first thing that broke? [pause] Not the model. The engineer in front of them. So — what actually gives out first?

[warm] This is the Agentic Daily Brief.

[pause] Let's start with the news — and the loudest one this morning came from Mira Murati. Her new lab, Thinking Machines, just shipped its very first model. It's called Inkling, it's huge — nearly a trillion parameters — and here's the twist: they gave the whole thing away. Full open weights, a license that lets anyone build on it. They're even upfront that it isn't the best model out there. [curious] That's the bet — that an open model you tune yourself beats a one-size-fits-all closed one. A real shot across the bow at OpenAI, Anthropic, and Google.

A few more, quick. OpenAI built its own in-house super-hacker — a model called GPT-Red whose whole job is to attack OpenAI's other systems. Training against it dropped successful prompt-injection attacks from over ninety percent down to under twenty-three. Microsoft patched a record five hundred seventy security holes this month, and credits AI for digging up the buried ones. And xAI is suing one of its own users, for allegedly using Grok to generate abuse images of children — the first time it's gone after a customer like that.

[warm] Okay. Back to that engineer. His name is Kyle Lee, he's at KRAFTON — the game studio — and the talk he gave felt less like a demo and more like a confession. He runs a fleet of AI coding agents across three machines. A laptop, two always-on Linux boxes. Every single day. Not a thing he spun up for the stage.

[curious] It started simple. Him and a terminal, a couple of agents. Then a couple more. And really fast, he's staring at five, six live agents at the same time. And here's the part that got me — um, at that point, he wasn't really running agents anymore. He'd become the scheduler, deciding who does what. The memory, holding what all six were doing. The reviewer, checking every one. One human, three jobs, six agents. [slow] It does not scale.

[thoughtful] And it wasn't only his attention. As he added machines, things broke in ways that had nothing to do with AI. Orchestrator agents doing the work themselves instead of handing it down. Sessions stacking up until a box ran out of memory. Credentials colliding across workspaces. A laptop dying and wiping every job still in flight.

He asked himself a strange question. How does a handful of executives run a company of thousands? [pause] They don't hold it all in their heads. They split it up. Everyone sees only their own slice.

[surprised] That's what he built. Not a metaphor — a real org chart, in software. A CEO agent. VPs. Managers. Workers. Context flows down; each layer gets only the slice it needs. Results flow back up. Kyle reviews only what reaches the very top. And nothing acts on its own — every plan an agent wants to run waits until he approves it, from one web inbox. Instead of juggling six contexts in his head, he holds exactly one.

[curious] There's a second move under that, and I'll keep it short. Each agent keeps its state in files on disk — its mission, its progress — instead of trapped in the chat window. So when the window fills up, he doesn't carefully compress it. He wipes it, and lets the agent re-read its own files. Crash the laptop mid-job? The work's on disk. It survives. A Snapchat engineer, Jeffrey Lee-Chan, made the same call from the other side — keep the orchestrator's head on the goal, not clogged with every tool detail.

[thoughtful] Now — where's the hole in this? Kyle's the first to point at it. The whole thing is hand-rolled. One person's control plane, and, you know, held together with willpower. And the parts he hasn't cracked — uh, keeping machines in sync, handing secrets around safely, deciding who gets the compute — [slow] those are the exact problems Kubernetes solved years ago. His own plan is to stop reinventing them and build on top. So take it as a working stopgap, not a platform.

But the shape of the lesson holds. Run more than a few agents, and you quietly become their bottleneck — the scheduler, the memory, the reviewer. Kyle's fix was to hand that whole job to an org chart, and only ever read the top.

[pause] Which lands us on a bigger version of the same idea — over at Anthropic.

[curious] Angela Jiang runs a lot of Anthropic's platform, and she said something that stuck with me. Tokens aren't fungible — maybe this token is advising, this one is executing, this one is dreaming.

[thoughtful] Anthropic frames it as three layers. Knowledge — just get an answer. Execution — actually do the work, edit files across a bunch of systems. And a new one stacked on top: coordination. That top layer is where you decide which token gets which job. And here's what it means if you're building. For a while, the game was hand-wiring one long loop — a big prompt, a pile of tools, or rather a pile of glue holding those tools together, all wired just so. But as models got easier to steer, a lot of that rigid scaffolding can just... go. The leverage moves up. It stops being how much glue you hand-wire, and starts being how you compose the model with itself.

[surprised] Notice it rhymes with Kyle's org chart, right? He routes work to the right agent. She routes work to the right token.

[warm] There's a money angle too. If you're scared an agent will run up a giant bill, the reflex is a hard spending cap. Jiang's team leans the other way — route tokens smartly so you're not burning the expensive ones on cheap work. One trick: when a model gets stuck, instead of grinding, it calls a smarter, pricier model for a quick bit of advice, then carries on. Cheaper because it's organized, not because it's throttled.

[thoughtful] The catch — and she's honest about it — this coordination layer barely exists yet. They've got, in her words, only inklings of it. And it opens a fresh failure mode they've named hyperindependence — a bunch of agents all wandering off on their own, uncoordinated, sprawling. An org chart saves you from being the bottleneck, then can quietly turn into chaos if nobody's really in charge. Routing only pays off if your routing is any good.

[warm] So here's one thing worth trying this week. Next time you put an agent on a long job, don't keep its state in the chat window. Have it write its plan and its progress to a plain file as it goes. Then if it crashes — or you just reset it — it reads that file back and picks up where it left off. Small habit. Saves you a whole rerun.

[slow] One talk worth watching before you go. Francesco Bonacci, from a company called Cua, ran a hard reality check on computer-use agents — the ones that click around a screen like a person would. On his benchmark, the best model cleared only... I mean, six of twenty-five tasks. The idea to carry: the demos look further along than the agents really are. If you're betting on this, test on your own tasks before you trust the highlight reel.

[pause] So — what gives out first when you scale a crew of agents? [surprised] Not the machine, not the model. You do. Your attention is the bottleneck nobody warns you about. And both of today's builders answered it the same way — they stopped holding it all in their heads, and gave the work a shape above the work. An org chart for the agents. A job for each token. Stop being the scheduler.

[warm] That's today's Agentic Daily Brief. [pause] Brought to you by Agent Native Engineering — open knowledge for building and running AI agents. The full write-ups, with their sources, are at agent native engineering dot com. [warm] See you next time.
