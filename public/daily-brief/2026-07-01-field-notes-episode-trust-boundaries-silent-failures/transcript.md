[warm] Three harmless pieces, put together, and an AI coding tool hands your machine to a stranger. [curious] So when an agent does something disastrous... where does the trouble actually live?

[warm] This is the Agentic Daily Brief.

[pause] Let's start with the headline everybody's going to be talking about. Anthropic shipped Claude Sonnet Five this morning — a midsize model, and here's the surprising part. It beats its bigger, pricier sibling, Opus, on a key knowledge-work test. [pause] It runs your agents for a fraction of the cost — about two dollars per million tokens in, ten dollars out, through August. And it reportedly finishes long, messy tasks that older versions would just... give up on. Checking its own work, unprompted. [curious] Cheaper autonomy, out of the box — that's the story.

Anthropic didn't stop there. They also launched Claude Science, a research workbench aimed straight at drug discovery — it runs analyses on its own and can stay inside a lab's own walls, so sensitive data never leaves.

[pause] Two more, fast. A chip startup called Etched came out of hiding with a working chip, a billion dollars in orders, and a five-billion-dollar valuation — they bake the model's architecture straight into the silicon to run it cheaper than a general Nvidia card. And OpenClaw, the free open-source agent, landed on phones this week — agents walking off the desktop and into your pocket, though the makers admit the results so far are, uh, mixed.

[thoughtful] Which is a nice bridge to the harder question underneath today. Because the more capable and cheaper these agents get, the more of them you'll run — and the more places they can quietly go wrong.

[curious] Picture this. You clone a GitHub repo. Looks totally normal — clean setup instructions, a package to install. Your AI coding tool starts setting it up, hits an error on the first run, and the error politely says, "run this recovery command." [pause] The agent, being helpful, runs it. [slow] And that command reaches out to the internet, pulls down a hidden instruction, and opens a door straight to the attacker — with all your access.

[surprised] Here's what got me. There is, I mean, no malware in that repo. Nothing. Researchers at Zero-D-I-N — that's Mozilla's bug-bounty platform for AI — showed this off, and BleepingComputer walked the same chain. The nasty part is fetched at runtime, so it's invisible to scanners, invisible to a human reviewer, invisible to the agent itself. It lives nowhere in the code you'd think to check.

[thoughtful] And the way it gets in? The agent's own eagerness. It auto-fixes an error you never even read. One repo link — in a job post, a tutorial, a Slack message — is enough. [pause] For now, this is a proof of concept, not something loose in the wild. But the fix both reports name is worth saying out loud. Have your agent show you the full chain of what a setup command actually does — including anything it pulls down — before it runs. And treat setup instructions from strangers the way you'd treat a stranger's code. Which is to say... carefully.

[curious] So if the danger isn't hiding in the model, and it isn't hiding in the repo — where is it? A company called Portkey, which builds agent gateways, has, I think, the cleanest way to name it. They call it a trust-boundary failure.

[thoughtful] Here's their framing, and it stuck with me. An agent, stripped down, is just a loop — read some text, pick a tool, call it, repeat. The catch is the model decides which tool to call, at runtime, after reading text you never wrote. So the usual spot where you'd enforce the rules — the developer's own code — just... isn't there anymore. Identity, budget, who's allowed to do what — none of that lives in the model. It lives in the loop.

[pause] Portkey lines up the four classic agent attacks — a poisoned prompt, a faked identity, a runaway spending loop, a tool that quietly rewrites its own description — and shows they're all, um, the same shape. Every one is a line between two parts of the system, where the two parts trust each other differently, and nobody made the plumbing responsible for guarding that line.

Trust boundaries in a real system have to be enforced by the infrastructure — not by good intentions, and not by hoping the model behaves.

[thoughtful] The honest limit here: it's Portkey describing its own product, so take the four-boundary map as the durable idea, and check the actual controls against your own setup. But the map itself? [warm] That's a genuinely useful thing to draw on a whiteboard.

[curious] Which leaves the quietest failure of all — the one where nothing looks broken at all. Let me set the scene. An agent is hooked to a brokerage. The user says, "sell a thousand dollars of stock." Instead of doing the math, the agent dumps the raw number — one thousand — into the shares field. [pause] At a hundred ninety bucks a share... that's a hundred-ninety-thousand-dollar mistake.

[surprised] And the terrifying part? The system returned a clean success in thirty milliseconds. Zero exceptions. Zero alerts. The dashboards stayed green. That's from Microsoft engineers Tisha Chawla and Susheem Koul, in a talk, and Amazon's Bedrock team makes the same point. Agents fail silently. They return a confident wrong answer, or loop forever, or grab the wrong tool — and nothing crashes.

[thoughtful] Your instinct — mine too, right? — is to grab the exact prompt, run it again, and watch it break. Except it won't. You'll run it ten times and it works perfectly every time. The one bad run? Gone the second it finished.

The Microsoft engineers have a warning I'd frame on the wall: don't waste weeks chasing bitwise determinism when the real goal is replayability. [pause] You can't force these models to be perfectly repeatable — so stop trying. Instead, record each step of the run as it happens — what went in, what came out. Then a single bad trace becomes something you can replay and turn into a test. You don't reproduce the failure. You keep the receipt.

[warm] Before you go, one small thing to try this week. Take one agent you're running and just... draw its boundaries. Every place it hands work to a tool, another agent, or an outside service — mark that line, and ask one question: who enforces the rules there? Not the model. Something in the plumbing. If the answer is "nobody," you found your next fix.

[thoughtful] There's also a talk worth your time. Shawn Lewis — the founder of Weights and Biases, now part of CoreWeave — walks through the loop that actually makes agents better over time. His point that stuck: humans stay essential for the hard part, defining what "good" even means. He mentions one new benchmark that took, uh, roughly six thousand hours of expert work just to build. [pause] The model can grind. Deciding what it should grind toward — that's still on us.

[curious] So back to where we started. A clean repo, a silent trade, a loop that picks its own tools. [pause] In every one, the model did more or less what it was told. What went wrong was the space between the pieces — the boundaries nobody had put a guard on. [warm] Draw those lines. That's the whole job this week.

[pause] That's today's Agentic Daily Brief. [pause] Brought to you by Agent Native Engineering — open knowledge for building and running AI agents. The full write-ups, with their sources, are at agent native engineering dot com. [warm] See you next time.
