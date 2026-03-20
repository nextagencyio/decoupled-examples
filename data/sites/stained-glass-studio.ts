import type { SiteConfig } from '@/lib/site-types'

const site: SiteConfig = {
  slug: 'stained-glass-studio',
  name: 'Lumen Pane Studio',
  description:
    'Stained glass studio offering copper foil workshops, custom window panels, and private group sessions shaped around color, light, and careful assembly.',
  thumbnail: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=300&fit=crop',
  accentColor: '#E9C46A',
  dateAdded: '2026-03-20',
  category: 'Arts & Crafts',
  theme: {
    primaryColor: '#1D3557',
    secondaryColor: '#E9C46A',
    fontFamily: 'dm-sans',
    borderRadius: 'md',
  },
  sections: [
    {
      __typename: 'ParagraphHero',
      id: 'stained-glass-studio-hero',
      eyebrow: 'Lumen Pane Studio',
      title: 'Cut, foil, and solder stained glass pieces that change with the light',
      subtitle:
        'Step into a bright neighborhood studio where beginners learn copper foil technique, returning makers build leaded panels, and homeowners commission colorful pieces designed for entryways, shelves, and sunlit corners.',
      layout: 'left-aligned',
      backgroundColor: 'light',
      backgroundImage: {
        url: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1400&q=80',
        alt: 'Colorful craft materials arranged on a studio worktable',
      },
      primaryCtaText: 'Book a Glass Workshop',
      primaryCtaUrl: '#workshops',
      secondaryCtaText: 'Request a Custom Panel',
      secondaryCtaUrl: '#commissions',
    },
    {
      __typename: 'ParagraphCardGroup',
      id: 'stained-glass-studio-offerings',
      eyebrow: 'Studio Formats',
      title: 'Choose a project that fits your first sketch, your window, or your group event',
      subtitle:
        'Each format includes design support, glass selection guidance, and paced instruction that keeps the process approachable without flattening the craft.',
      columns: '3',
      cards: [
        {
          id: 'stained-glass-studio-card-1',
          icon: 'Sparkles',
          title: 'Copper Foil Starter Class',
          description:
            'Learn safe cutting, grinding, foiling, and soldering while making a small sun catcher designed to catch real afternoon light.',
          linkText: 'See class dates',
          linkUrl: '#',
        },
        {
          id: 'stained-glass-studio-card-2',
          icon: 'Square',
          title: 'Panel Building Workshops',
          description:
            'Return for longer sessions focused on geometric panels, botanical motifs, and framed pieces sized for shelves or interior doors.',
          linkText: 'Explore workshop paths',
          linkUrl: '#',
        },
        {
          id: 'stained-glass-studio-card-3',
          icon: 'Home',
          title: 'Custom Window Commissions',
          description:
            'Commission transoms, hanging panels, and privacy inserts designed to add color and pattern without losing daylight.',
          linkText: 'Start a commission brief',
          linkUrl: '#',
        },
      ],
    },
    {
      __typename: 'ParagraphSidebyside',
      id: 'stained-glass-studio-process',
      eyebrow: 'How It Works',
      title: 'A guided process from sketch and glass choice to clean solder lines and a stable finish',
      content:
        '<p>Workshop guests begin with a template scaled to the project so they can focus on shape transitions, color balance, and how individual pieces will read once sunlight passes through them.</p><p>From there, instructors guide each step of scoring, breaking, grinding, copper foiling, soldering, and finishing so the final piece feels deliberate, sturdy, and ready to hang or frame.</p>',
      image: {
        url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80',
        alt: 'Hands working carefully with tools in a bright craft studio',
      },
      imagePosition: 'right',
      features: [
        {
          id: 'stained-glass-studio-feature-1',
          icon: 'Palette',
          title: 'Color-led design help',
          description: 'Choose opalescent, cathedral, and textured glass with guidance on contrast, glow, and room placement.',
        },
        {
          id: 'stained-glass-studio-feature-2',
          icon: 'Wrench',
          title: 'Tool confidence',
          description: 'Learn cutting and soldering technique in a paced format built for first-timers and careful repeat practice.',
        },
        {
          id: 'stained-glass-studio-feature-3',
          icon: 'Sun',
          title: 'Light-aware finishing',
          description: 'Design pieces that shift throughout the day instead of looking flat once they leave the bench.',
        },
      ],
      ctaText: 'Read the studio guide',
      ctaUrl: '#',
    },
    {
      __typename: 'ParagraphStat',
      id: 'stained-glass-studio-stats',
      eyebrow: 'Studio Snapshot',
      title: 'Built for jewel-tone glass, patient instruction, and pieces worth keeping on display',
      backgroundColor: 'gradient',
      stats: [
        {
          id: 'stained-glass-studio-stat-1',
          value: '180+',
          label: 'Glass sheets in rotation',
          description: 'A curated mix of transparent, streaky, and textured colors chosen for strong light play and balanced palettes.',
        },
        {
          id: 'stained-glass-studio-stat-2',
          value: '9',
          label: 'Seats per workshop',
          description: 'Small classes leave enough bench space for safer cutting, cleaner soldering, and direct instructor feedback.',
        },
        {
          id: 'stained-glass-studio-stat-3',
          value: '340+',
          label: 'Panels and hangings completed',
          description: 'Sun catchers, geometric panels, and custom home commissions finished through classes and studio builds.',
        },
        {
          id: 'stained-glass-studio-stat-4',
          value: '4.9/5',
          label: 'Average guest rating',
          description: 'Feedback from workshop guests and commission clients who valued the clarity, pacing, and finish quality.',
        },
      ],
    },
    {
      __typename: 'ParagraphQuote',
      id: 'stained-glass-studio-testimonials',
      eyebrow: 'Guest Notes',
      title: 'What people remember after seeing their piece lit for the first time',
      layout: 'grid',
      testimonials: [
        {
          id: 'stained-glass-studio-testimonial-1',
          quote:
            'The instruction was calm and exact. My first sun catcher actually looked polished, and the color choices made even more sense once I brought it home.',
          authorName: 'Marina K.',
          authorTitle: 'Starter class guest',
          rating: 5,
        },
        {
          id: 'stained-glass-studio-testimonial-2',
          quote:
            'We commissioned a narrow entry panel for our old house and the studio translated the architecture into something bright without feeling too ornate.',
          authorName: 'Elliot and Sam P.',
          authorTitle: 'Commission clients',
          rating: 5,
        },
        {
          id: 'stained-glass-studio-testimonial-3',
          quote:
            'Our private workshop worked beautifully for a team event because everyone could customize a pattern while still learning the same process together.',
          authorName: 'Dana R.',
          authorTitle: 'Private group organizer',
          rating: 5,
        },
      ],
    },
    {
      __typename: 'ParagraphTextBlock',
      id: 'stained-glass-studio-commissions',
      eyebrow: 'Custom Work',
      title: 'Commission glass pieces for entryways, shelves, and rooms that need color without clutter',
      alignment: 'center',
      content:
        '<p>Lumen Pane Studio creates hanging panels, cabinet inserts, sidelights, and small architectural pieces for homeowners, boutiques, and hospitality spaces that want a more personal source of color and pattern.</p><p>Each project starts with dimensions, placement notes, and a conversation about privacy, sunlight direction, and style so the finished panel feels integrated with the space rather than simply decorative.</p>',
      ctaText: 'Start a custom inquiry',
      ctaUrl: '#',
    },
    {
      __typename: 'ParagraphPricing',
      id: 'stained-glass-studio-pricing',
      eyebrow: 'Pricing',
      title: 'Simple ways to try the craft or plan a finished panel',
      subtitle:
        'Workshops include shared tools and starter materials, while commissions are scoped after a short design consultation and dimension review.',
      tiers: [
        {
          id: 'stained-glass-studio-tier-1',
          name: 'Sun Catcher Session',
          price: '$84',
          billingPeriod: '/guest',
          description: 'Best for first-time stained glass guests',
          features: ['2-hour guided class', 'One small hanging project', 'Glass, foil, and solder included'],
          ctaText: 'Reserve a seat',
          ctaUrl: '#',
        },
        {
          id: 'stained-glass-studio-tier-2',
          name: 'Panel Workshop',
          price: '$156',
          billingPeriod: '/guest',
          description: 'A longer format for framed geometric or botanical pieces',
          features: ['4-hour studio session', 'Pattern transfer support', 'Grinding and solder finishing', 'Take-home care instructions'],
          isFeatured: true,
          ctaText: 'Book panel workshop',
          ctaUrl: '#',
        },
        {
          id: 'stained-glass-studio-tier-3',
          name: 'Custom Commission',
          price: '$320',
          billingPeriod: '/project start',
          description: 'For hanging panels, sidelights, and small architectural inserts',
          features: ['Design consultation', 'Glass palette proposal', 'Site or dimension review', 'Install-ready finishing options'],
          ctaText: 'Request an estimate',
          ctaUrl: '#',
        },
      ],
    },
    {
      __typename: 'ParagraphNewsletter',
      id: 'stained-glass-studio-newsletter',
      eyebrow: 'Studio Updates',
      title: 'Get workshop dates, commission openings, and new pattern releases',
      subtitle:
        'Join the list for class announcements, seasonal color runs, and practical notes from the stained glass bench.',
      placeholder: 'Enter your email',
      buttonText: 'Join the list',
      backgroundColor: 'dark',
    },
  ],
}

export default site
