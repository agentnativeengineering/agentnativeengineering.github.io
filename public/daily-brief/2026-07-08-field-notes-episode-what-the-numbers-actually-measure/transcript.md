[warm] Sixty-five percent off your token bill. [pause] That's what a popular little skill promises. [curious] Someone finally measured it. [slow] It came back... eight. [curious] How much of what we believe survives being measured?

[warm] This is the Agentic Daily Brief.

Meta answered part of that the hard way this week. They shipped their first in-house image model — Muse Image — and wired it straight into Instagram, WhatsApp, and the Meta AI app. [surprised] The catch that lit up everyone's feed? If your profile is public, you're opted in by default — anyone can tag your username in a prompt and make images with your face. Opting out only blocks new ones. What's already made stays made.

Meanwhile, Microsoft started quietly swapping the frontier labs out of Copilot. Some prompts in Excel, Word, and Outlook now route to Microsoft's own cheaper in-house models — with AI chief Mustafa Suleyman framing it flatly as cutting what they pay Anthropic, right?

Anthropic, for its part, pushed Claude Cowork up into the cloud — so your agents keep running when the laptop's shut, scheduled tasks firing even when no device is online. And Liquid AI open-sourced a fix for reasoning models that get stuck in loops — repeating the same line until they burn the whole context window.

[curious] Which brings me back to the thing sitting under all of it. Measuring. Say you're rolling a coding agent out to your team — what actually gets people to use it?

Three researchers at Microsoft — Emerson Murphy-Hill and colleagues — tracked tens of thousands of their own engineers picking up command-line coding agents. [pause] And what spread it wasn't a mandate. Wasn't a licensing push from the top. [surprised] It was watching the person next to you use it.

First use, they wrote, spread mostly through people's social networks. You saw a teammate lean on it — well, or rather, you saw them stop struggling — so you tried it too. Which makes who-sits-near-whom a real input to your rollout. Not an afterthought. At that scale, token spend runs into the millions a year, so a rollout that misreads why people adopt is expensive and slow at the same time.

The payoff showed up, too. The engineers who adopted merged about twenty-four percent more pull requests than they otherwise would have — and that held for four months, so it reads like a habit, not a honeymoon.

[thoughtful] But the authors are careful, and I want to sit on this one. A merged pull request measures output — not the value it delivered. Twenty-four percent more of them is a speed signal, not proof you shipped more that was worth shipping.

So before you call it a win, pair that number with one signal for quality. Which is really a question about cost, too — what are you actually paying for?

[curious] Cost. You've seen the trick — tell your agent to write like a caveman, drop the polite prose, save tokens. The pitch on the tin — I mean the advertised number — sixty-five percent.

The JetBrains AI team actually ran it. A paired A-B test, dozens of real coding tasks, the skill forced on the whole time. [pause] The measured saving? [slow] About eight and a half percent. And they call that the ceiling — not the everyday case.

Why so small? [pause] Think about what's actually in a coding session. Code. Diffs. Tool calls. Exact error strings. A good compression trick leaves every bit of that untouched — because mangling a diff breaks the run, right? The only thing that shrinks is the chatter between tools. And, uh, there just isn't much of it.

[thoughtful] Here's the honest part, though. The terseness didn't dent quality — statistically a wash. But that eight percent is fragile; one pricing-tier fluke erases it. And it aims at the wrong lever entirely. Your real bill isn't the words the model writes out — it's the context you re-feed it every single turn.

[curious] One last idea before you go — and this one flips the frame. Ask a plain chat model which Pokémon names end in a certain sound. It'll confidently get it wrong. Hand that same model a tool to run code, and it fetches the whole list, writes a little script, filters it — done. Same knowledge. The tool unlocked it.

That's from, uh, Thariq Shihipar at Anthropic — he works on Claude Code — in a talk called A Field Guide to Fable. His name for it is capability overhang: the real ability of a fresh model sitting latent, uneven, waiting. Spiky, he says — sharp here, blank there — until the right tool turns can't into can.

So when a new model ships, the reflex is to prompt it like the last one. His point? You'll leave most of it on the table. The gains hide in what you let the thing actually do.

[surprised] Read the shine carefully, though. This is Anthropic talking up its own model, at a conference, not a controlled study. And every arm you hand a model to unlock it also widens what can go wrong — you know, the same tool that frees it is the one you then have to govern.

[warm] Before you go, one thing worth trying this week. Take a number your AI tooling brags about — a saving, a velocity bump, a benchmark. [pause] And ask the JetBrains question: what is this actually measuring? Then find one signal for the thing you truly care about, and set them side by side. Half the time, the pitch and the real number aren't even close.

One talk worth your time on exactly that nerve. Angel Ortmann Lee, a security engineer on the Duolingo English Test, gave a talk called Build AI Systems for Discernment, Not Approval. [surprised] Her finding stopped me — trained proctors, over ninety percent accurate on their own, accepted half of the fabricated cheating flags the AI handed them. Half. They rubber-stamped it. Her fix wasn't a smarter model — she reframed the AI's output as a preliminary alert that demands independent evidence, and false acceptances fell by about a fifth. No model change at all.

[thoughtful] How much of what we believe survives the measuring? [slow] Sixty-five became eight. Twenty-four percent more pull requests, but of what. A model that couldn't name a Pokémon until it got a shell. [thoughtful] Less of the pitch holds up than you'd hope — and what's left is truer, and honestly more useful. [curious] So next standup, when someone quotes you a number, ask the quiet one: what did we actually measure?

That's today's Agentic Daily Brief. [pause] Brought to you by Agent Native Engineering — open knowledge for building and running AI agents. The full write-ups, with their sources, are at agent native engineering dot com. [warm] See you next time.
