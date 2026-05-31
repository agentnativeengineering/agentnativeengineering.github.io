#!/usr/bin/env node
// Fast structural validation of field notes — runs before astro check/build.
// Catches the common authoring mistakes (esp. from the daily agent) with friendly errors.
// The zod schema in src/content.config.ts is the source of truth; this is a quick pre-flight.
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const DIR = join('src', 'content', 'notes');
const REQUIRED = ['title', 'date'];
const errors = [];
const warnings = [];

let files = [];
try {
  files = (await readdir(DIR)).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));
} catch {
  console.log('No notes directory yet — nothing to validate.');
  process.exit(0);
}

const slugs = new Map();

for (const file of files) {
  const path = join(DIR, file);
  const raw = await readFile(path, 'utf8');

  // 1. frontmatter block present and well-formed
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) {
    errors.push(`${file}: missing or malformed frontmatter (must start with --- ... ---)`);
    continue;
  }
  const fm = m[1];
  const get = (key) => {
    const r = fm.match(new RegExp(`^${key}\\s*:\\s*(.+)$`, 'm'));
    return r ? r[1].trim() : null;
  };

  // 2. required keys
  for (const key of REQUIRED) {
    if (get(key) === null) errors.push(`${file}: missing required frontmatter key "${key}"`);
  }

  // 3. date format + validity
  const dateRaw = (get('date') || '').replace(/^["']|["']$/g, '');
  if (dateRaw) {
    if (!/^\d{4}-\d{2}-\d{2}/.test(dateRaw)) {
      errors.push(`${file}: date "${dateRaw}" must be YYYY-MM-DD`);
    } else if (Number.isNaN(Date.parse(dateRaw))) {
      errors.push(`${file}: date "${dateRaw}" is not a real calendar date`);
    }
    // filename should start with the date for a clean, sortable archive
    if (!file.startsWith(dateRaw.slice(0, 10))) {
      warnings.push(`${file}: filename should start with its date (${dateRaw.slice(0, 10)}-...)`);
    }
  }

  // 4. title sanity
  const title = (get('title') || '').replace(/^["']|["']$/g, '');
  if (title && title.length > 90) {
    warnings.push(`${file}: title is ${title.length} chars — aim for < 90 for clean cards`);
  }

  // 5. summary present (used in stream + RSS + meta description)
  const summary = (get('summary') || '').replace(/^["']|["']$/g, '');
  if (!summary && get('draft') !== 'true') {
    warnings.push(`${file}: no summary — add one for the stream, RSS, and SEO`);
  }

  // 6. body not empty
  const body = raw.slice(m[0].length).trim();
  if (!body && get('draft') !== 'true') {
    errors.push(`${file}: body is empty`);
  }

  // 7. duplicate slug detection
  const slug = file.replace(/\.mdx?$/, '');
  if (slugs.has(slug)) errors.push(`${file}: duplicate slug "${slug}"`);
  slugs.set(slug, true);
}

if (warnings.length) {
  console.log('\nWarnings:');
  for (const w of warnings) console.log(`  ⚠ ${w}`);
}

if (errors.length) {
  console.error('\nContent validation FAILED:');
  for (const e of errors) console.error(`  ✗ ${e}`);
  console.error(`\n${errors.length} error(s) across ${files.length} note(s).`);
  process.exit(1);
}

console.log(`\n✓ Content OK — ${files.length} note(s), ${warnings.length} warning(s).`);
