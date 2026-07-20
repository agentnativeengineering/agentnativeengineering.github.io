[curious] Seven of the best AI models. [pause] One real engineering task. Told to start from a blank page, every single one scored zero. So what was the demo actually measuring?

[warm] This is the Agentic Daily Brief.

Let's start with the news, because Wall Street had a rough few days. Moonshot AI — a Chinese lab — released an open model called Kimi K-three, and independent tests put it right up near the best Western frontier models. [surprised] And it's free to download. That combination helped drag US tech stocks lower. The Nasdaq slid more than one percent, and the chip sector tipped into bear-market territory. The fear underneath it all? [pause] That pricey American AI can't keep charging a premium when a capable model costs, well, nothing.

A few more, fast. Google pushed back the public launch of its flagship Gemini three-point-five Pro — the coding just wasn't hitting the company's own targets, or rather, it wasn't clearing Google's own bar — and that stumble wiped roughly two hundred billion dollars off Alphabet. Anthropic is in early talks to rent about ten billion dollars of computing power from Meta, just to keep serving Claude. And AI music startup Suno got breached — leaked code suggests it trained on millions of songs pulled straight from YouTube and other sites, which is, uh, exactly the kind of thing the record labels suing them would love to see.

[warm] Okay. Away from the trading floor, into a circuit-board editor. Because the most honest test I ran into this week had nothing to do with which model is smartest. It was about what these agents can actually do once you sit them down at a keyboard.

So, the setup. A team called Cua built a benchmark — Cua Bench — and the word that matters is verifiable. Every task gets graded by an objective checker. Pass or fail. Not another model nodding along, saying "yeah, that looks about right." [curious] That distinction is bigger than it sounds. When a model grades a model, the score is soft — you can look good without being good. A hard checker doesn't care how confident you sound.

Then they pointed seven frontier models at real work — electrical-engineering tasks inside KiCad, which is an open-source tool for designing circuit boards. Not demo puzzles. Actual jobs a working engineer sits down and does.

[pause] The results were rough. The best model — GPT five-point-five — finished six of twenty-five tasks. [slow] Six. The other six models clustered right behind it, and not one of the seven got even a third of the way to a full score. Just a flat, disappointing line straight across the leaderboard. No real winner. Everybody stuck.

But the number that actually stopped me was this. [pause] Every single win came from editing a design that already existed. Ask any of the seven to build a circuit from an empty file, and all of them scored zero.

[surprised] Zero. [pause] Not "struggled." Not "got halfway." Nothing.

[curious] That's a very particular kind of failure, right? These agents can click around an app you've already set up. They can nudge things, adjust, tweak what's in front of them. But the blank page — the part where you have to decide what to even make, I mean, dream the thing up from nothing — that's where they fell straight off a cliff.

For anyone eyeing one of these to handle real desktop work — filing, booking, laying out a document from scratch — that's the line you need to feel. It'll happily polish a draft you hand it. Ask it to originate the thing, and right now, you're on your own.

[curious] Here's the more important question, though. It isn't which model topped the chart. It's what a slick demo was quietly hiding all along. Because if your only test is a curated screen-recording, the agent looks like it's totally got this. You never see the ceiling. [slow] Your users find it for you, in production, on a Tuesday.

[thoughtful] Cua's own fix for this is genuinely clever, and it's worth understanding. Instead of the agent staring at raw pixels and guessing where to click, their driver reaches first for the accessibility tree — think of it as the operating system's own labeled map of every button and menu on the screen. Clean, structured, reliable. It only drops down to clicking raw pixels when that map comes up short, and it only yanks a window to the front as a last resort, so it never steals the screen out from under you. They say that reordering pushed the pass rate from around sixty percent up to eighty — while burning roughly a third fewer tokens. [surprised] Better results and cheaper, just from reading a tidy list of labels instead of decoding a full screenshot every step.

[thoughtful] The honest caveat — those last two numbers come from Cua's own talk about Cua's own tool. So, uh, hold them as vendor figures until somebody independent reproduces the run. But the durable lesson doesn't lean on those numbers at all. [thoughtful] My read is that the fancy driver is the smaller story here. The bigger one is the benchmark itself. A test you can't fake with a good demo, run on the real app your agent drives, with the build-from-nothing case scored separately from the edit-what's-there case. Do that, and you find your ceiling before your customers do.

[curious] That idea — that a good evaluator gives you a clean yes or no — showed up in another talk worth watching this week. Annabell Schäfer, from Langfuse, argues that most teams grade their agents on mush. Vague scores like "is this correct," "is this helpful." Her fix: swap the mush for high-signal binary criteria. Is the answer actually grounded in the source? Is the brand name right? Which known failure mode just happened? On one classification task, that kind of sharp, quantifiable check helped lift accuracy about fifteen points — and the biggest single jump came the moment they pinned down one clear failure mode. [warm] And crucially — build those checks with people who actually know the domain. Sharp questions with real answers beat fuzzy scores every time.

[warm] So, before you close the laptop, one thing worth trying this week. Take a single task your agent does all the time. Write the dumbest checker you can for it — one that returns just pass or fail, no opinions, no vibes. Then run it twice. Once editing something that already exists, and once starting from a blank file. I'd bet the gap between those two scores tells you more about your agent than any leaderboard ever will.

[thoughtful] Which brings us right back to where we started. Seven of the best models going, one real task, and a blank page that beat every last one of them. The demo measured whether they could tidy up work you'd already begun. [pause] The empty file measured whether they could actually do the work — and on that, the number was zero.

[warm] That's today's Agentic Daily Brief. [pause] Brought to you by Agent Native Engineering — open knowledge for building and running AI agents. The full write-ups, with their sources, are at agent native engineering dot com. [warm] See you next time.
