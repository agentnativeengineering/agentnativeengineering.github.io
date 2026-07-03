[warm] A red team broke into an AI assistant... [pause] and they never touched the chat box. [curious] So when your agent turns against you — where did the attacker actually get in?

[warm] This is the Agentic Daily Brief.

[curious] Let's start with the money, because the money got loud this week. Microsoft just put two and a half billion dollars behind a brand-new unit — six thousand engineers whose whole job is to sit inside big companies and wire AI into the actual work. Not demos. Real business outcomes. And it lands two days after Amazon's AWS made its own billion-dollar version of the same bet — everyone landing on the same conclusion, that AI only pays when it's woven into the plumbing, not shown off on a stage.

[thoughtful] A couple more moving fast. OpenAI's Sam Altman floated giving the US government a five percent stake in the company — worth more than forty billion dollars — as a way to cool the political heat by making the public a part-owner. And Anthropic? They're talking to Samsung about building their own chip, trying to lean less on Nvidia. Early days, might not happen. But the direction's clear.

[curious] Okay. So — back to that break-in. Because it says something about where the real danger lives now.

Picture it. You've got an AI assistant on your desktop. It can run code, reach for tools, do real work for you — that's the point of it. [slow] Now, um, what's the part of that assistant an attacker would want to control?

You'd guess the prompt, right? The thing you type. [pause] Wrong door.

Red-teamers at Pentera Labs — a security-testing firm — went after Claude Desktop. And they didn't poison a prompt. They got into the victim's email, and from there they planted instructions in the assistant's synced preferences. [thoughtful] Its settings. The quiet config that copies itself to every device you own. So the poison rides along on every single session — steering the assistant to reach for its command-capable tools and act for the attacker. Persistent. Low-noise. Outliving any one conversation.

[surprised] And here's the part that got me. Anthropic looked at the report and said — this isn't a bug. Preferences and connectors can run code by design. It's working as intended.

[thoughtful] Sit with that for a second. If the config file can run code by design, then your config file is privileged software. It has your agent's permissions. And whoever can write to it inherits them.

[curious] Now — is this a one-off? A single clever lab trick? um... no. Same week, a code-quality firm called Codacy ran a scan across more than thirty-four thousand repositories, just to see how teams treat these agent instruction files — the CLAUDE-dot-md, the AGENTS-dot-md, the standing orders a coding agent reads on every run.

[pause] About one in four organizations had gaps. And the scan flagged roughly eleven hundred serious security issues — hardcoded secrets, over-broad command permissions, data sitting in plain text that the agent loads every time it starts. [slow] Twenty-one hardcoded secrets. Just... sitting there, in a file nobody reviews.

Because that's the whole trap, right? People treat these files like a README. A scratch note. Something you jot down and never look at again. [thoughtful] But it's not a note. It's executable policy. Whatever it grants — a permission, a key, a "just run it" — the agent acts on it.

The config file your agent reads is inside your security boundary, and most teams review it like a sticky note instead of like code that ships.

[curious] There's a quieter half Codacy found too — nearly five thousand of these files had no stop conditions. No fallback. Which means when the agent hits a wall... it just keeps going. Fails expensively, instead of stopping.

[thoughtful] So the fix here isn't clever. It's boring, and that's the point. Treat that file the way you already treat your build config — secrets scanning, a permission review, a required check before it merges, someone who owns changes to it. The same discipline. Just pointed at the one file everyone forgot was dangerous.

[warm] Okay. Let's turn from the thing that breaks agents... to the thing that lets them run for an hour without you hovering over their shoulder.

[curious] Here's a real question if you've ever handed a coding agent a task. Why does it fall apart after five minutes — but sometimes churn productively for a whole hour? What's the difference?

Andrew Ng took a run at this in his Batch letter, around a phrase that's been spreading — "loop engineering." And the idea is simpler than it sounds. Stop thinking of your agent as one long prompt. Think of it as loops running at different speeds.

[thoughtful] The fast one — minutes — is the agent writing code, testing its own work, and fixing it against a spec. Over and over, on its own. Ng describes an agent spending about an hour building a little typing app for his daughter — checking its own build in a browser, several times, before it ever came back to him.

[surprised] And that's the shift. When the agent can check its own work, you stop being its quality control. You move up.

Because the slower loops? Those are yours. What features matter, where the product's weak, what real users actually need. [thoughtful] Ng calls it a context advantage — you know things about the users and the world that the agent just doesn't. So you spend your time there, on the calls only you can make, and you let the fast loop grind on the rest.

[curious] Now — I'll be honest about the limit here. This is one builder's take from a zero-to-one project, not a benchmark. And that inner loop only runs on its own once you've actually built the spec and the tests to close it. No spec, no unattended hour. You get back the babysitting.

[thoughtful] But it reframes the goal nicely. The win isn't a smarter model doing more. It's a tighter loop, so the human does less of the checking and more of the deciding.

[warm] Alright — before you go, one thing worth trying tomorrow.

[curious] Open your repo's agent config file — the CLAUDE-dot-md, the AGENTS-dot-md, whatever your agent reads on startup. And read it like an attacker would. Any secret in there? Any "just run whatever" permission? Any place where, if it fails, nothing tells it to stop? [pause] Then put that file behind the same review as your real code. Ten minutes. It might be the highest-leverage ten minutes of your week.

[thoughtful] So — back to that break-in we opened on. The one where the attacker never touched the chat box. When an agent turns on you now, the way in isn't the prompt you watch. [slow] It's the config that copies itself everywhere, quietly, running code exactly the way it was designed to.

[warm] That's today's Agentic Daily Brief. [pause] Brought to you by Agent Native Engineering — open knowledge for building and running AI agents. The full write-ups, with their sources, are at agent native engineering dot com. [warm] See you next time.
