# AGENTS.md

## Project Overview

Gallery of AI-generated example SPA websites built with reusable paragraph components from [decoupled-components](https://github.com/nextagencyio/decoupled-components). Each site is a route (e.g., `/coffee-shop`) rendered from a TypeScript data file. A daily cron job generates new sites automatically.

## Architecture

- **Site data**: `data/sites/<slug>.ts` — TypeScript files exporting a default `SiteConfig` object
- **Registry**: `data/sites/_registry.ts` — imports and re-exports all site configs as an array
- **Components**: `app/components/paragraphs/` — shared paragraph components (**DO NOT MODIFY**)
- **UI**: `app/components/ui/` — shared UI components (**DO NOT MODIFY**)
- **Types**: `lib/types.ts` (component props — **DO NOT MODIFY**), `lib/site-types.ts` (SiteConfig)
- **Routing**: `app/[site]/page.tsx` dynamically renders sites from data
- **Gallery**: `app/page.tsx` shows all sites as a card grid

## Adding a New Site

1. Create `data/sites/<slug>.ts` with a default export of type `SiteConfig`
2. Update `data/sites/_registry.ts` to import and include the new site in the `sites` array
3. Add a new entry at the **top** of `UPDATES.md` with today's date
4. Verify with `npx next build` — must pass with zero errors

## SiteConfig Interface

```typescript
interface SiteConfig {
  slug: string           // kebab-case, must match filename
  name: string           // Creative business/site name
  description: string    // 1-2 sentences for the gallery card
  thumbnail: string      // Unsplash URL (use ?w=400&h=300&fit=crop)
  accentColor: string    // Hex color for the gallery card accent bar
  dateAdded: string      // ISO date string (YYYY-MM-DD)
  theme: SiteTheme       // Visual theme — each site MUST have a unique color/font combo
  sections: ParagraphType[]  // 6-10 paragraph sections composing the page
}

interface SiteTheme {
  primaryColor: string      // Hex color (e.g., '#2563eb') — drives buttons, links, accents
  secondaryColor: string    // Hex color (e.g., '#f59e0b') — drives secondary elements
  fontFamily: 'inter' | 'dm-sans' | 'playfair' | 'space-grotesk' | 'merriweather' | 'raleway' | 'source-serif' | 'work-sans'
  borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}
```

### Theme Guidelines
- Choose colors that **match the site's personality** (e.g., green for nature, blue for tech, red for food)
- Use a **different primary/secondary pair** from existing sites
- Pick a **font that fits the brand**: serif fonts (playfair, merriweather, source-serif) for elegant/traditional, sans-serif (inter, dm-sans, space-grotesk, raleway, work-sans) for modern/clean
- Vary `borderRadius`: 'none' for sharp/modern, 'lg'/'xl' for friendly/soft, '2xl' for playful

## Available Paragraph Components

Each section in the `sections` array must have a `__typename` and `id` field plus its specific props.

### ParagraphHero (`__typename: 'ParagraphHero'`)
- **Required**: `id`, `title`
- **Optional**: `eyebrow`, `subtitle`, `layout` ('centered' | 'left-aligned'), `backgroundColor` ('gradient' | 'dark' | 'light'), `backgroundImage` ({url, alt}), `primaryCtaText`, `primaryCtaUrl`, `secondaryCtaText`, `secondaryCtaUrl`

### ParagraphCardGroup (`__typename: 'ParagraphCardGroup'`)
- **Required**: `id`
- **Optional**: `eyebrow`, `title`, `subtitle`, `columns` ('2' | '3' | '4'), `cards` (array of {id, icon, title, description, linkText, linkUrl})
- Icon values must be valid Lucide icon names (e.g., Coffee, Heart, Star, Globe, Zap, Shield, Users, etc.)

### ParagraphSidebyside (`__typename: 'ParagraphSidebyside'`)
- **Required**: `id`, `title`
- **Optional**: `eyebrow`, `content` (HTML string), `image` ({url, alt}), `imagePosition` ('left' | 'right'), `features` (array of {id, icon, title, description}), `ctaText`, `ctaUrl`

### ParagraphAccordion (`__typename: 'ParagraphAccordion'`)
- **Required**: `id`, `items` (array of {id, question, answer})
- **Optional**: `eyebrow`, `title`, `subtitle`
- `answer` fields are HTML strings

### ParagraphQuote (`__typename: 'ParagraphQuote'`)
- **Required**: `id`, `testimonials` (array of {id, quote, authorName})
- **Optional**: `eyebrow`, `title`, `layout` ('single' | 'grid'), testimonial fields: `authorTitle`, `authorCompany`, `rating` (1-5)

### ParagraphPricing (`__typename: 'ParagraphPricing'`)
- **Required**: `id`
- **Optional**: `eyebrow`, `title`, `subtitle`, `tiers` (array of {id, name, price, billingPeriod?, description?, features? (string[]), isFeatured?, ctaText?, ctaUrl?})

### ParagraphLogoCollection (`__typename: 'ParagraphLogoCollection'`)
- **Required**: `id`, `logos` (array of {id, name})
- **Optional**: `eyebrow`, `title`, logo fields: `image` ({url, alt}), `url`

### ParagraphStats (`__typename: 'ParagraphStat'`)
**IMPORTANT: The __typename is 'ParagraphStat' (singular, NO trailing 's')**
- **Required**: `id`, `stats` (array of {id, value, label})
- **Optional**: `eyebrow`, `title`, `backgroundColor`, stat field: `description`

### ParagraphNewsletter (`__typename: 'ParagraphNewsletter'`)
- **Required**: `id`, `title`
- **Optional**: `eyebrow`, `subtitle`, `placeholder`, `buttonText`, `backgroundColor` ('light' | 'dark' | 'gradient')

### ParagraphText (`__typename: 'ParagraphTextBlock'`)
**IMPORTANT: The __typename is 'ParagraphTextBlock' (NOT 'ParagraphText')**
- **Required**: `id`, `content` (HTML string)
- **Optional**: `eyebrow`, `title`, `alignment` ('left' | 'center'), `ctaText`, `ctaUrl`

## CRITICAL RULES

1. **NEVER modify** files in `app/components/`, `app/layout.tsx`, `app/page.tsx`, `app/[site]/`, `lib/types.ts`, or `lib/sites.ts`
2. **ONLY create/edit** files in `data/sites/`, `UPDATES.md`, and `README.md`
3. All content must be **safe, professional, and family-friendly** — no violence, adult content, gambling, drugs, or controversial political topics
4. Use **Unsplash** for all images: `https://images.unsplash.com/photo-PHOTO_ID?w=WIDTH&q=80`
5. Use **valid Lucide icon names** for card and feature icons
6. Every section needs a **unique id** (pattern: `slug-componenttype`, e.g., `bakery-hero`)
7. Always **start with ParagraphHero** and include **at least 5 different component types**
8. Include at least one **ParagraphSidebyside** with an Unsplash image
9. End with either **ParagraphNewsletter** or **ParagraphAccordion**
10. Do **NOT duplicate themes** that already exist (check existing files in `data/sites/`)
11. Use **6-10 sections** per site for variety without excess
12. The `__typename` values must be **exactly** as documented above — especially `'ParagraphStat'` and `'ParagraphTextBlock'`
