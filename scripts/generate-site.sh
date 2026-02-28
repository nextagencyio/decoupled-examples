#!/usr/bin/env bash
set -euo pipefail

# ── Ensure node/npm/codex are on PATH (cron has minimal PATH) ──────
export PATH="$HOME/.nvm/versions/node/v24.13.1/bin:$PATH"

# ── Configuration ───────────────────────────────────────────────────
PROJECT_DIR="$HOME/nodejs/decoupled-examples"
LOG_FILE="$PROJECT_DIR/scripts/generate-site.log"
CODEX_BIN="$HOME/.nvm/versions/node/v24.13.1/bin/codex"
NPX_BIN="$HOME/.nvm/versions/node/v24.13.1/bin/npx"
GIT_BIN="/usr/bin/git"
MAX_DELAY_SECONDS=3600  # 0–60 minutes

# ── Random delay ────────────────────────────────────────────────────
DELAY=$((RANDOM % MAX_DELAY_SECONDS))
echo "[$(TZ=America/Chicago date '+%Y-%m-%d %H:%M:%S %Z')] Sleeping ${DELAY}s before starting..." >> "$LOG_FILE"
sleep "$DELAY"

cd "$PROJECT_DIR"
echo "[$(TZ=America/Chicago date '+%Y-%m-%d %H:%M:%S %Z')] Starting site generation..." >> "$LOG_FILE"

# ── Pull latest ─────────────────────────────────────────────────────
$GIT_BIN pull --rebase origin main >> "$LOG_FILE" 2>&1 || true

# ── Build dynamic context ──────────────────────────────────────────
TODAY=$(TZ=America/Chicago date '+%Y-%m-%d')
EXISTING_SITES=$(ls -1 data/sites/*.ts 2>/dev/null | grep -v _registry | sed 's|.*/||;s|\.ts$||' | tr '\n' ', ' | sed 's/,$//')
SITE_COUNT=$(ls -1 data/sites/*.ts 2>/dev/null | grep -v _registry | wc -l)

# ── Codex prompt ────────────────────────────────────────────────────
cat <<PROMPT | $CODEX_BIN exec --full-auto -C "$PROJECT_DIR" -
You are adding a new example site to the decoupled-examples project.
Read AGENTS.md for full documentation on the component schema and project rules.

## Context
- Today's date: ${TODAY}
- Existing sites (${SITE_COUNT} total): ${EXISTING_SITES}
- DO NOT duplicate or closely resemble any existing site theme.

## Your task

1. Think of a creative, unique theme for a new example website. Ideas: yoga studio,
   pet adoption agency, indie bookstore, vintage record shop, astronomy club, surf school,
   artisan cheese shop, botanical garden, photography studio, bike repair shop, board game cafe,
   pottery workshop, travel blog, organic farm, music school, coworking space, ice cream parlor,
   flower shop, escape room, marine aquarium, craft brewery, dance studio, etc.
   Pick something not already in the existing sites list above.

2. Create a new file at data/sites/<slug>.ts following the SiteConfig format in AGENTS.md.
   Use 7-10 sections with at least 5 different component types. Start with ParagraphHero.
   End with ParagraphNewsletter or ParagraphAccordion.
   IMPORTANT: Include a 'category' field — pick from: Food & Drink, Wellness & Fitness,
   Arts & Crafts, Music & Entertainment, Nature & Garden, Adventure & Sports,
   Pets & Animals, Education, Home & Services, Travel & Hospitality.
   IMPORTANT: Include a 'theme' field with primaryColor, secondaryColor, fontFamily, and
   borderRadius. Choose colors that match the site's personality. Use a font and border
   radius that differs from the most recently added sites. See AGENTS.md for theme details.

3. Use real Unsplash photo URLs for all images:
   - Thumbnail: https://images.unsplash.com/photo-PHOTO_ID?w=400&h=300&fit=crop
   - Hero/section images: https://images.unsplash.com/photo-PHOTO_ID?w=1400&q=80
   - Side-by-side images: https://images.unsplash.com/photo-PHOTO_ID?w=800&q=80

4. Update data/sites/_registry.ts: add the import and include it in the sites array.

5. Update UPDATES.md: add a new entry at the TOP with today's date (${TODAY}).
   Format: ## ${TODAY}\n- Added **Site Name** (\`slug\`) — Brief description

6. Update README.md: add the new site to the TOP of the "Latest Updates" bullet list
   (keep existing entries, just prepend the new one). Same format as UPDATES.md but
   with route path: - **Site Name** (\`/slug\`) — Brief description

7. Run: npx next build
   If there are TypeScript errors, fix them before proceeding.

IMPORTANT REMINDERS:
- __typename for stats is 'ParagraphStat' (singular, no trailing s)
- __typename for text is 'ParagraphTextBlock' (not ParagraphText)
- Every section needs a unique id
- All content must be safe, professional, family-friendly
- Do NOT modify any files in app/components/, app/page.tsx, app/[site]/, lib/types.ts, or lib/sites.ts
PROMPT

CODEX_EXIT=$?

if [ $CODEX_EXIT -ne 0 ]; then
  echo "[$(TZ=America/Chicago date '+%Y-%m-%d %H:%M:%S %Z')] Codex failed with exit code $CODEX_EXIT" >> "$LOG_FILE"
  exit 1
fi

# ── Verify build ────────────────────────────────────────────────────
echo "[$(TZ=America/Chicago date '+%Y-%m-%d %H:%M:%S %Z')] Verifying build..." >> "$LOG_FILE"
$NPX_BIN next build >> "$LOG_FILE" 2>&1

if [ $? -ne 0 ]; then
  echo "[$(TZ=America/Chicago date '+%Y-%m-%d %H:%M:%S %Z')] Build failed, reverting changes" >> "$LOG_FILE"
  $GIT_BIN checkout -- . 2>/dev/null
  $GIT_BIN clean -fd 2>/dev/null
  exit 1
fi

# ── Extract latest site name from UPDATES.md for commit message ────
LATEST_LINE=$(head -3 UPDATES.md | grep "^-" | head -1 || echo "New example site")

# ── Commit and push ─────────────────────────────────────────────────
$GIT_BIN add data/sites/ UPDATES.md README.md
$GIT_BIN commit -m "feat: add new example site (auto-generated)

${LATEST_LINE}

Generated by Codex CLI" >> "$LOG_FILE" 2>&1

$GIT_BIN push origin main >> "$LOG_FILE" 2>&1

echo "[$(TZ=America/Chicago date '+%Y-%m-%d %H:%M:%S %Z')] Successfully generated and pushed new site" >> "$LOG_FILE"
