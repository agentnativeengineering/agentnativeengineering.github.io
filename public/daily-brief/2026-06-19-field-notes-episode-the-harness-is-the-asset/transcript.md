[warm] Two teams. [pause] One at Cloudflare, one at Visa. [curious] They never compared notes... and they built almost the exact same thing. [pause] So when an AI agent finally pulls off something hard — overnight, unattended — what's actually doing the work? The clever model, or the boring scaffolding around it?

This is the Agentic Daily Brief.

[curious] And that question is already in the air in today's money news. Amazon's looking at selling its own AI chips — the homegrown ones it calls Trainium — directly to other companies, instead of only renting them out in its cloud. [pause] That's the first time it would go after Nvidia on Nvidia's own turf, selling hardware. And if a real second supplier shows up, the chip scarcity that squeezes anyone training or running big models could finally ease.

[thoughtful] Meanwhile, a smaller signal in the same direction — an inference startup called Baseten is reportedly raising one and a half billion dollars, tripling its value in six months. [pause] Inference is the unglamorous job of actually serving models cheaply in production. And the fact that it's suddenly the hottest layer in AI tells you where the real money thinks the hard work lives. [slow] Not the model. The plumbing around it.

Which is exactly the thread running through everything I want to walk you through today.

So let's start with security. Picture this — you point an AI at a giant pile of company code and say, find me the bugs. [pause] Here's the catch nobody warns you about. It finds tons of them. And most of them... aren't real. Plausible-sounding bugs that fall apart the second a human checks. Cloudflare reports that when they started, almost half of what the agent flagged got rejected on review. [slow] Forty percent. So you haven't removed the work. You've just moved it onto a tired human's desk.

[curious] So how'd they fix it? Not with a smarter model. Cloudflare built what they call a harness — basically the machinery that wraps the model, keeps its memory, and checks its work. And the key move was a gate. Before any bug gets filed, the agent has to produce three things — a clear theory of the attack, a working proof that it's real, and a proposed patch. [pause] No proof, no ticket.

[surprised] And the payoff? That rejection rate dropped from forty percent... down to eleven. [pause] Same models. Just a wall in front of them that says, prove it first.

Now here's the part that got me. Five days earlier, Visa had open-sourced almost the identical design — threat model first, then a vote among several agents to kill the false alarms. Two teams, working apart, landing on the same shape. As Visa put it plainly — the bottleneck isn't finding bugs. It's trusting what you found. [warm] When two independent teams converge like that, that's not a coincidence. That's the field telling you where the real engineering is.

[curious] Okay. Away from the code, into a robotics lab — but watch for the same move. Nvidia's research team wired up coding agents to direct the training of physical robots. Teaching robot arms to cut zip ties, and to slot a graphics card into a tight socket on a motherboard. [pause] And the head of the lab said something that stuck with me. He said part of the lab now improves itself overnight — quote, "we just read the reports in the morning."

[surprised] Leaving an agent running all night, unsupervised? [pause] That's the thing most teams are too scared to do. Because if it makes one bad change while you're asleep, it quietly keeps it, and the damage compounds. So what let them sleep? Same idea as Cloudflare, different building. A harness with one stubborn rule — keep a change only if you can measure that it made things better. [slow] Verify, or throw it away.

[thoughtful] And on the very same day, OpenAI showed the twin of this in a chemistry lab. Their system ran more than ten thousand reactions and pushed the yield on a hard drug-making step from about seventeen percent up to twenty-five. [pause] But — and this is the honest part — they called it only near-autonomous. Humans still picked which ideas to test at the bench and ran the final checks by hand. [warm] The freedom is real. The gate is still human. And that's by design.

[curious] So here's the line I keep coming back to, and I think it's the whole episode in one sentence — the harness is the part that lasts; you can swap the model freely, but keep the state, the gates, and the second opinion. [pause] Nvidia's proof? They ran the same harness across three totally different coding agents, from three different labs. The model was the swappable part. The scaffolding was the asset.

[warm] One last story before you go — and it's the quiet one underneath all of this. Memory.

[curious] Here's a question. How does an agent stay coherent across two hundred steps... when the model behind it forgets everything the moment each step ends? [pause] Because it does. Xiaomi's team put it bluntly — the model is stateless. Every single call starts from a blank slate. All the continuity comes from the runtime around it.

Their fix is clever in a really unglamorous way. They don't let the main agent stop and summarize itself when it's running low on room — because the summarizing eats the very space it's trying to save. [pause] Instead, a separate little writer — its own helper with its own budget — quietly saves the important state to a file. And it saves early. Not when the window's almost full and quality's already slipping, but at fixed checkpoints along the way. [surprised] The result? Xiaomi reports that once tasks pass two hundred steps, their agent wins more than sixty-five percent of the time against the leading rival. [pause] Same kind of model underneath. A smarter runtime around it.

[warm] So before you go, one thing worth trying this week. Take whatever agent you trust the least, and don't reach for a bigger model. [curious] Instead, add one gate — a single check that has to pass before its output counts as done. Make it prove its work, the way Cloudflare made the bug prove it was real. [pause] Then watch how much of the noise just... falls away.

[thoughtful] Because that's the answer to the question we opened with. Two teams, an overnight lab, a stateless model that somehow holds two hundred steps in its head. [slow] None of it came from a cleverer model. [warm] The intelligence we keep crediting to the model... is mostly living in the boring, durable machinery we build around it.

That's today's Agentic Daily Brief. [pause] Brought to you by Agent Native Engineering — open knowledge for building and running AI agents. The full write-ups, with their sources, are at agent native engineering dot com. [warm] See you next time.
