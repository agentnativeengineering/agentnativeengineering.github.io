#!/usr/bin/env bash
# Author one ANE Note from the 4AM corpus, deduped vs the site's published notes,
# using the Anthropic API (ANTHROPIC_TOKEN). topic-judge -> note-writer -> note-reviewer.
set -uo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"; SITE="$(cd "$HERE/.." && pwd)"
MODEL="${MODEL:-claude-opus-4-8}"
: "${ANTHROPIC_TOKEN:?ANTHROPIC_TOKEN not set}"
OUT="${1:-$SITE/authoring-out}"; mkdir -p "$OUT"

# one Anthropic Messages call: $1 = system-prompt file, $2 = user string
call() {
  local body; body=$(jq -n --rawfile sys "$1" --arg u "$2" --arg m "$MODEL" \
    '{model:$m,max_tokens:4096,system:$sys,messages:[{role:"user",content:$u}]}')
  local resp; resp=$(curl -sS https://api.anthropic.com/v1/messages \
    -H "x-api-key: $ANTHROPIC_TOKEN" -H "anthropic-version: 2023-06-01" \
    -H "content-type: application/json" -d "$body")
  local txt; txt=$(echo "$resp" | jq -r '.content[0].text // empty')
  if [ -z "$txt" ]; then echo "::error::Anthropic call failed: $(echo "$resp" | jq -c '.error // .' | head -c 300)"; return 1; fi
  printf '%s' "$txt"
}

# published set (title + domain) from the live site notes = dedup backbone
PUB=$(for f in "$SITE"/src/content/notes/*.md; do
  awk 'BEGIN{t="";d=""} /^title:/{sub(/^title:[ ]*/,"");gsub(/"/,"");t=$0} /^domain:/{sub(/^domain:[ ]*/,"");gsub(/"/,"");d=$0} /^---/{n++; if(n==2){print d" | "t; exit}}' "$f"
done)
SLIM=$(jq -c 'map({id,title,summary,source,url})' "$HERE/corpus.json")

echo ">> topic-judge"
TOPIC=$(call "$HERE/roles/topic-judge.md" "You are choosing ONE topic for a new ANE Note.

CORPUS (4AM, candidate items):
$SLIM

ALREADY PUBLISHED (domain | title) — do NOT duplicate any of these topics:
$PUB

Pick the SINGLE strongest NEW agentic-engineering topic (a specific, sourced lesson; not a product pitch; not already covered). Return ONLY minified JSON: {\"topic\":\"\",\"claim\":\"\",\"domain\":\"<one slug>\",\"cluster\":[{\"id\":0,\"title\":\"\",\"url\":\"\",\"source\":\"\"}],\"whyNew\":\"\"}") || exit 1
echo "$TOPIC" > "$OUT/topic.json"
IDS=$(echo "$TOPIC" | jq -r '[.cluster[].id] | join(",")' 2>/dev/null)
echo "   topic: $(echo "$TOPIC" | jq -r '.topic' 2>/dev/null) | cluster ids: $IDS"
[ -z "$IDS" ] && { echo "::error::topic-judge returned no cluster"; echo "$TOPIC"; exit 1; }

SRC=$(jq --argjson ids "[$IDS]" -c 'map(select(.id as $i | $ids | index($i)) | {id,title,url,source,body})' "$HERE/corpus.json")

echo ">> note-writer"
NOTE=$(call "$HERE/roles/note-writer.md" "Draft ONE ANE Note.

CHOSEN TOPIC:
$TOPIC

CLUSTER SOURCES (full — ground every claim in these; allowlist URLs to these only):
$SRC

Match the site's note frontmatter (title, date, summary, takeaways[<=3], tags[tags[0]=domain slug], sourceName, sourceUrl, draft:false) and house voice (plain, specific, crux-card body: What happened / Why it matters / (opt) How it works / The catch, ~250 words). Output ONLY the complete note markdown, nothing else.") || exit 1
printf '%s' "$NOTE" > "$OUT/draft.md"

echo ">> note-reviewer"
REVIEW=$(call "$HERE/roles/note-reviewer.md" "Adversarially review this ANE Note against its cited sources and the contract (grounding: every claim traces to a source; dated lead; correct domain; card body shape; house voice; URL allowlist).

SOURCES:
$SRC

NOTE:
$NOTE

Return ONLY minified JSON: {\"pass\":true,\"issues\":[],\"note\":\"<corrected full markdown>\"}") || exit 1
echo "$REVIEW" > "$OUT/review.json"
PASS=$(echo "$REVIEW" | jq -r '.pass' 2>/dev/null)
FINAL=$(echo "$REVIEW" | jq -r '.note // empty' 2>/dev/null); [ -z "$FINAL" ] && FINAL="$NOTE"
printf '%s' "$FINAL" > "$OUT/note.md"
echo "   review pass: $PASS"

{
  echo "## ANE authoring pipeline — result"
  echo ""
  echo "**Topic:** $(echo "$TOPIC" | jq -r '.topic' 2>/dev/null)  ·  **domain:** $(echo "$TOPIC" | jq -r '.domain' 2>/dev/null)  ·  **review pass:** $PASS"
  echo ""
  echo "**Why new:** $(echo "$TOPIC" | jq -r '.whyNew' 2>/dev/null)"
  echo ""
  [ "$PASS" != "true" ] && { echo "**Reviewer issues:** $(echo "$REVIEW" | jq -c '.issues' 2>/dev/null)"; echo ""; }
  echo '```markdown'
  cat "$OUT/note.md"
  echo '```'
} >> "${GITHUB_STEP_SUMMARY:-/dev/stdout}"
echo ">> done — note at $OUT/note.md"
