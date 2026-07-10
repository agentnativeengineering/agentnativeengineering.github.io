[curious] Today on the Agentic Daily Brief: a coding agent that's allowed to be wrong — at the edge of a black hole. How does failing freely produce code you can trust? ... Hold that thought.

On today's episode: the telescope that lets its code be wrong... and a number with the word trillions in it.

[warm] This is the Agentic Daily Brief — your daily update on agent engineering.

First — the headlines.

This week's biggest warning comes from the supply chain. Ars Technica reports that seventy-three verified Microsoft open source packages on GitHub were laced with credential-stealing code... and the trap springs when an AI coding agent opens them. Second time in weeks.

Google Cloud announced it's hosting Apple's expanded Private Cloud Compute — the system Apple uses to run AI requests privately. Data stays encrypted even while it's being processed, and the host software is open source, so the privacy claims can be checked.

In funding news, TechCrunch reports Jedify raised twenty-four million dollars to feed business context to AI agents — with Snowflake investing, and wiring it into its own products.

And researchers at Writer published two papers showing that memory features can make models worse — pulling them toward a user's misconceptions instead of the truth.

That's the headlines. Now... to the telescope.

It's a desk at the University of Arizona, and an astrophysicist named Chi-kwan Chan is watching his coding agent produce ideas that fail. He's not worried. And by the end of this story, you'll see why.

OpenAI published an account of how he works this week, and it's the clearest picture I've seen of a pattern worth stealing.

Chan is part of the Event Horizon Telescope collaboration — the team that gave us the first image of a black hole, back in twenty nineteen.

Now they want something harder. The first video of the supermassive black hole at the center of the M eighty-seven galaxy.

So what's standing in the way? ... Plasma. That's superheated matter, broken apart into charged particles. In the hot, thin regions near a black hole, those particles rarely collide. Instead, each one spirals around magnetic field lines, like a corkscrew that never stops turning.

And here's the problem. A standard simulation — the software model of all that physics — has to compute every tiny turn of every corkscrew. Even the fastest supercomputers spend most of their time on those spirals. Chan has said that for decades, this is what's limited how realistically anyone can simulate black-hole plasma.

So he hands the math to Codex, OpenAI's coding agent. He asks it to derive new algorithms — new recipes, the step-by-step procedures a simulation follows — that track particle motion differently, so the computer no longer follows every spiral.

[thoughtful] And here's the part I keep coming back to. Many of those generated approaches fail. Many. And that's fine — because every candidate can be inspected, then tested against problems with known solutions, cases where the right answer already exists, before it's accepted. The test decides what survives. Not Chan's eyes. Not a reviewer's patience.

In other words, when you already know what correct looks like, you can let an agent guess aggressively. Wrong guesses cost almost nothing. The check throws them away automatically.

Now flip that around, and you see why this reaches well past astrophysics. Where no known answer exists, a human becomes the verifier. The agent can then only move as fast as you can review. And reviewing plausible-looking, math-heavy code line by line is often slower than just writing it yourself.

One more thing — and this is the tease paying off. If the new algorithms hold up, they could enable simulations of trillions of particles. [pause] Trillions. But notice the word could. That's the hoped-for payoff, not a delivered result, and I'm keeping the hedge exactly where the researchers put it.

The full note, with every source linked, is on the site.

Before you go — one thing to try tomorrow. Pick one task you already hand to a coding agent. And BEFORE you write the prompt... write the check. A test whose correct answer you can state on your own — an answer worked out by hand, a golden file, meaning a saved copy of known-good output, or a slow brute-force version you trust. Then wire it into the agent's loop, so failed attempts get thrown out without you ever reading them.

Remember the agent at the edge of the black hole, free to be wrong? That's the whole lesson. Generation is allowed to fail... because verification is the gate.

Write that check tonight, and tomorrow the window opens again. Come compare notes.

That's today's Agentic Daily Brief. [pause] The show is brought to you by Agent Native Engineering — open knowledge for building and running AI agents. Every story, every source linked, at agent native engineering dot com. [warm] See you in the next episode.
