#!/usr/bin/env node
// Create a new field note with today's date.
// Usage: npm run new -- "Your title here" [tag1,tag2]
import { mkdir, writeFile, access } from 'node:fs/promises';
import { join } from 'node:path';

const title = process.argv[2];
const tags = (process.argv[3] || '').split(',').map((t) => t.trim()).filter(Boolean);

if (!title) {
  console.error('Usage: npm run new -- "Your title here" [tag1,tag2]');
  process.exit(1);
}

const now = new Date();
const iso = now.toISOString();
const ymd = iso.slice(0, 10);
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '')
  .slice(0, 60);

const dir = join('src', 'content', 'notes');
const file = join(dir, `${ymd}-${slug}.md`);

const front = `---
title: "${title.replace(/"/g, '\\"')}"
date: ${ymd}
summary: ""
tags: [${tags.map((t) => `"${t}"`).join(', ')}]
draft: true
---

`;

await mkdir(dir, { recursive: true });
try {
  await access(file);
  console.error(`Already exists: ${file}`);
  process.exit(1);
} catch {
  await writeFile(file, front);
  console.log(`Created ${file}`);
}
