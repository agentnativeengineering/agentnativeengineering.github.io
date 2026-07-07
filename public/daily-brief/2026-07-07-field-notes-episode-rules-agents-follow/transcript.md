[warm] Only about one in eight. [pause] That's how many code changes at Dropbox checked back against their own security plan. [curious] So — is writing a rule down enough to make it stick?

[warm] This is the Agentic Daily Brief.

[curious] The news moved fast overnight, so let's clear the decks first. Tencent open-sourced a model it's calling Hy-three, and the interesting part isn't the raw size — it's the efficiency. It carries about two hundred and ninety-five billion parameters in total, but only around twenty-one billion actually fire for any given token. Tencent says that's enough to match models two to five times its active weight, and, um, they report hallucinations dropping from roughly twelve and a half percent down to about five. It's openly licensed, so anyone can run it — which means near-frontier quality at a fraction of the cost to serve.

Same morning, a second Chinese lab, Zhipu, shipped ZCode — a cut-price coding agent aimed straight at Claude Code and OpenAI's Codex, with a benchmark showing its open model nearly tied with Anthropic's best. [surprised] And Epoch AI put out a number worth sitting with: the top model in the world now holds that crown for, uh, about seven weeks before somebody knocks it off. The lead keeps changing hands — so betting your whole stack on one model looks riskier every month.

[pause] Okay. Picture handing an agent the keys to your production systems. It can merge code, update tickets, touch real customer data. Something goes wrong. What actually stops it?

On June twenty-ninth, NVIDIA published a reference design for running autonomous agents inside a company, and the core move is almost boringly simple. Every single action the agent takes gets checked against a policy before it happens. Not logged after — checked before. The network's blocked by default, except for a short allowlist. A proxy holds the real secrets, so the agent never sees them. And any action that changes something — merging code, updating a ticket — routes to a human to sign off first.

[slow] Governance you can't enforce before the action is just a record of what went wrong. An audit log tells you what a rogue agent did. Only a check before it can stop it.

[thoughtful] Now, the cynical read is that this is just NVIDIA selling you its own stack — "AI factory" branding and all. Fair. But the same pieces show up — well, the same load-bearing pieces — independently at AWS and at Microsoft. When three companies who'd each love to sell you something different all land on the same shape, that's the shape worth copying, whoever you end up buying from.

That's a rule you enforce. Here's a stranger cousin — a rule that rewrites itself.

[curious] If you run agents, you've probably got a file of instructions for them. Do this, avoid that, here's how our tools behave. And you tuned it by hand, on a hunch, with no real idea whether your last edit helped or quietly made things worse. Microsoft Research published a method called SkillOpt that treats that file — plain markdown — like a trainable weight. A second model watches the agent work, reads where it stumbled, and proposes tiny edits. Add this line. Cut that one. It keeps an edit only if the score actually goes up. The one thing that learns is a single text file.

[surprised] And here's the part that got me. They trained a spreadsheet skill inside one coding agent, then dropped it into a completely different model with no extra tuning — or rather, no further training at all — and it lifted that model from twenty-two out of a hundred... to eighty-two. The workflow knowledge transferred. Not just the benchmark score.

For anyone hand-editing an agent's instruction file right now, that's the real signal — the thing you're nudging by feel could be trained against a measured target instead. Where it breaks: the loop only works when you can grade the outcome. No score to check against, no learning. So it fits verifiable tasks, not open-ended ones — and the numbers are Microsoft's own, one benchmark, nobody's reproduced it yet.

[warm] One last story, and it circles right back to where we started. Remember that number from the top? Dropbox went looking for where it comes from. They pulled a hundred and fifty security design reviews. A threat model — the list of attacks a design is meant to defend against — gets written during review, everyone agrees on it, and then... it goes quiet. I mean, genuinely, nobody looks at it again. The code lands weeks later, and nobody lines it up against the plan. Only twelve percent of those changes even linked back to their threat model.

To fix it, Dropbox built an agent that pulls up the relevant threat model right at review time and holds it against the actual change — flagging the controls everyone agreed on that quietly never shipped. [surprised] And the detail that got me? The judging wasn't the hard part. Finding the old reviews was. Their search reconnected about eighty percent of them — and most of those had no shared ticket ID to search for. The match was only findable by meaning, right?

They keep the findings advisory, not blocking. A citation a reviewer can wave off in a couple of seconds costs way less than a false alarm that jams a good merge — so a wrong flag is cheap, and a caught gap is worth a lot.

[pause] So — back to what we opened on. Does writing a rule down actually make it hold? Across all three, the answer came back the same. [slow] No. A rule you write once and file away is just a record. NVIDIA's held because it got checked before every action. Microsoft's held because it kept retraining against a real target. Dropbox's threat models only held once an agent dragged them back into the room at review time. [thoughtful] The rule doesn't do its job the moment you write it down. It does its job when something keeps it alive at the moment it matters.

[curious] Before you close the laptop, one thing worth trying this week. Take last quarter's design reviews — or whatever your version of "we agreed on this once" is — and just count how many of the changes that followed actually reference them. Measure your own gap before you build anything to close it. Dropbox's number came in at twelve percent. Yours might sting more.

[thoughtful] And one talk worth your time if you're building agents. Weights and Biases founder Shawn Lewis, in a conversation with CoreWeave, laid out the development loop he keeps coming back to — ship the app, watch where the model fails in production, cluster those failures into evals, then sharpen your prompts and the setup around the model against those evals, and ship it back. His point that stuck with me: the easy benchmarks are already maxed out, so humans stay essential — for deciding what "better" even means.

[warm] That's today's Agentic Daily Brief. [pause] Brought to you by Agent Native Engineering — open knowledge for building and running AI agents. The full write-ups, with their sources, are at agent native engineering dot com. [warm] See you next time.
