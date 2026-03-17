# Decoupled Examples

**107 example sites** — a growing collection of AI-generated SPA websites built with reusable paragraph components from [decoupled-components](https://github.com/nextagencyio/decoupled-components).

New sites are generated daily by [Codex CLI](https://github.com/openai/codex) running on a cron schedule.

## Latest Updates

- **Loop & Loom Studio** (`/tufting-studio`) — Rug tufting studio offering beginner workshops, custom wall pieces, and private sessions centered on bold color and soft texture
- **Blue Tessera Studio** (`/mosaic-studio`) — Mosaic art studio offering tile workshops, custom house numbers, and team sessions built around color, pattern, and hands-on making
- **Tide & Pigment Studio** (`/paper-marbling-studio`) — Paper marbling studio offering beginner-friendly workshops, custom stationery runs, and elegant handmade papers
- **Atelier Aureline** (`/perfume-atelier`) — Custom perfume atelier offering scent consultations, blending workshops, and signature fragrance development
- **Second Hand Watchworks** (`/watch-repair`) — Precision watch repair and restoration studio offering diagnostics, battery service, and heirloom overhauls with transparent turnaround times
- **Skybound Balloon Adventures** (`/hot-air-balloon`) — Sunrise hot-air-balloon flight company with scenic valley routes, private charters, and first-time friendly experiences
- **Ink & Flourish Studio** (`/calligraphy-studio`) — Modern calligraphy studio with lettering workshops, private coaching, and live event personalization
- **Grand Loop Miniature Railway** (`/miniature-railway`) — Interactive miniature railway museum with operating layouts, build workshops, and weekend train days for families
- **Tranquil Path Gardens** (`/zen-garden`) — Japanese zen garden and meditation retreat
- **Canopy Eco Lodge** (`/eco-lodge`) — Sustainable eco-lodge with treehouse cabins and guided hikes
- **Phoenix Glass Studio** (`/glass-blowing`) — Glass blowing studio and gallery with classes and live demos
- **Ironside Brewing Co.** (`/craft-brewery`) — Craft brewery and taproom with small-batch beers
- **Puzzle Palace** (`/escape-room`) — Immersive escape room experiences with themed rooms
- **Sakura Sushi** (`/sushi-restaurant`) — Authentic Japanese sushi restaurant featuring omakase
- **Circuit Breakers Robotics** (`/robotics-club`) — Youth robotics club and STEM education center
- **The Laugh Factory** (`/improv-theater`) — Improv comedy theater with live shows and training
- **City Hive Learning Center** (`/urban-beekeeping`) — Urban beekeeping school with beginner classes
- **Verdant Path Botanical Garden** (`/botanical-garden`) — Botanical garden with seasonal exhibits and plant workshops

See [UPDATES.md](UPDATES.md) for the full changelog with all 107 sites.

## How It Works

Each example site is a **data-driven route** in a single Next.js app. The sites share 10 reusable paragraph components (Hero, Cards, Side-by-Side, Accordion, Quotes, Pricing, Logos, Stats, Newsletter, Text) and are defined entirely by TypeScript data files in `data/sites/`.

A cron job runs Codex CLI every weekday morning at ~6 AM CST. Codex reads the existing sites, picks a new creative theme, generates the data file, updates the registry, and pushes the commit.

## Available Components

| Component | Description |
|---|---|
| ParagraphHero | Full-width hero with eyebrow, title, subtitle, CTAs, background options |
| ParagraphCardGroup | Responsive grid of cards (2/3/4 columns) with icons |
| ParagraphSidebyside | Content + image layout with feature lists |
| ParagraphAccordion | Collapsible FAQ/accordion sections |
| ParagraphQuote | Testimonials in single or grid layout |
| ParagraphPricing | Multi-tier pricing tables with feature comparison |
| ParagraphLogoCollection | Brand/partner logo showcase |
| ParagraphStats | Key metrics and data points |
| ParagraphNewsletter | Email subscription forms |
| ParagraphText | Rich text blocks with optional CTAs |

## Development

```bash
npm install
npm run dev     # Development server
npm run build   # Production build
npm start       # Serve production build
```

## Project Structure

```
app/
  page.tsx                    # Gallery homepage
  [site]/page.tsx             # Dynamic route for each site
  components/paragraphs/      # Shared paragraph components
  components/ui/              # Shared UI components
data/
  sites/_registry.ts          # All site imports
  sites/<slug>.ts             # Individual site data files
lib/
  types.ts                    # Component type definitions
  site-types.ts               # SiteConfig interface
  sites.ts                    # Site loader utilities
scripts/
  generate-site.sh            # Daily cron script (Codex CLI)
```

## Adding a Site Manually

1. Create `data/sites/<slug>.ts` exporting a `SiteConfig` object
2. Add the import to `data/sites/_registry.ts`
3. Update `UPDATES.md`
4. Run `npx next build` to verify

See [AGENTS.md](AGENTS.md) for the full component schema and data format.
