import type { SiteConfig } from '@/lib/site-types'

const site: SiteConfig = {
  slug: 'paper-marbling-studio',
  name: 'Tide & Pigment Studio',
  description:
    'Paper marbling studio offering beginner-friendly workshops, custom stationery runs, and elegant handmade papers for artists, event designers, and curious first-timers.',
  thumbnail: 'https://images.unsplash.com/photo-1510935813936-763eb6fbc613?w=400&h=300&fit=crop',
  accentColor: '#F2C14E',
  dateAdded: '2026-03-09',
  category: 'Arts & Crafts',
  theme: {
    primaryColor: '#0f3d3e',
    secondaryColor: '#f2c14e',
    fontFamily: 'raleway',
    borderRadius: 'lg',
  },
  sections: [
    {
      __typename: 'ParagraphHero',
      id: 'paper-marbling-studio-hero',
      eyebrow: 'Tide & Pigment Studio',
      title: 'Hand-marbled paper with movement, color, and calm',
      subtitle:
        'Learn the art of floating pigment on water, pulling one-of-a-kind prints, and turning traditional marbling techniques into modern stationery, framing pieces, and event details.',
      layout: 'left-aligned',
      backgroundColor: 'light',
      backgroundImage: {
        url: 'https://images.unsplash.com/photo-1510935813936-763eb6fbc613?w=1400&q=80',
        alt: 'Colorful marbled paper sheets and art tools arranged on a studio table',
      },
      primaryCtaText: 'Book a Workshop',
      primaryCtaUrl: '#workshops',
      secondaryCtaText: 'View Custom Work',
      secondaryCtaUrl: '#commissions',
    },
    {
      __typename: 'ParagraphCardGroup',
      id: 'paper-marbling-studio-offerings',
      eyebrow: 'Offerings',
      title: 'Choose a studio visit that matches your pace',
      subtitle:
        'From first-time classes to custom marbled paper sets, every format is designed to feel approachable and visually rich.',
      columns: '3',
      cards: [
        {
          id: 'paper-marbling-studio-card-1',
          icon: 'Palette',
          title: 'Intro Workshops',
          description:
            'Small-group sessions covering pigment prep, comb patterns, and how to pull clean prints on paper.',
          linkText: 'See class schedule',
          linkUrl: '#',
        },
        {
          id: 'paper-marbling-studio-card-2',
          icon: 'Gift',
          title: 'Custom Stationery',
          description:
            'Commission marbled paper for invitations, menus, gift wrap, and limited-run packaging inserts.',
          linkText: 'Explore commission options',
          linkUrl: '#',
        },
        {
          id: 'paper-marbling-studio-card-3',
          icon: 'Users',
          title: 'Private Creative Events',
          description:
            'Host team gatherings, bridal parties, or client experiences with guided marbling and take-home pieces.',
          linkText: 'Plan a private session',
          linkUrl: '#',
        },
      ],
    },
    {
      __typename: 'ParagraphSidebyside',
      id: 'paper-marbling-studio-process',
      eyebrow: 'Studio Method',
      title: 'Traditional technique, modern guidance',
      content:
        '<p>We start with a short introduction to bath preparation, color behavior, and the hand movements that shape feathered, stone, and wave patterns. The process is tactile, quiet, and surprisingly easy to enjoy as a beginner.</p><p>Once your palette is set, you build designs directly on the surface before transferring them to paper. Each pull is unique, which means every piece carries subtle variation and character.</p>',
      image: {
        url: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80',
        alt: 'Artist working with paint and paper in a bright craft studio',
      },
      imagePosition: 'right',
      features: [
        {
          id: 'paper-marbling-studio-feature-1',
          icon: 'Sparkles',
          title: 'Pattern instruction',
          description: 'Learn classic combed, bouquet, and stone styles without needing prior art experience.',
        },
        {
          id: 'paper-marbling-studio-feature-2',
          icon: 'BookOpen',
          title: 'Technique notes',
          description: 'Leave with a concise process guide covering color ratios, drying, and flattening.',
        },
        {
          id: 'paper-marbling-studio-feature-3',
          icon: 'Palette',
          title: 'Curated pigments',
          description: 'Seasonal color libraries help you create papers that feel cohesive and display-ready.',
        },
      ],
      ctaText: 'Read about the process',
      ctaUrl: '#',
    },
    {
      __typename: 'ParagraphStat',
      id: 'paper-marbling-studio-stats',
      eyebrow: 'Studio Snapshot',
      title: 'Built for small-batch craft and repeatable quality',
      backgroundColor: 'gradient',
      stats: [
        {
          id: 'paper-marbling-studio-stat-1',
          value: '24',
          label: 'Seats per week',
          description: 'Intentionally small classes so each guest gets direct guidance at the tray.',
        },
        {
          id: 'paper-marbling-studio-stat-2',
          value: '300+',
          label: 'Custom sheets monthly',
          description: 'Hand-pulled papers produced for stationers, stylists, and local creative teams.',
        },
        {
          id: 'paper-marbling-studio-stat-3',
          value: '12',
          label: 'Seasonal palettes',
          description: 'Rotating color stories inspired by coastlines, stone, textiles, and botanical tones.',
        },
        {
          id: 'paper-marbling-studio-stat-4',
          value: '4.9/5',
          label: 'Guest rating',
          description: 'Average feedback from workshop participants and commission clients.',
        },
      ],
    },
    {
      __typename: 'ParagraphTextBlock',
      id: 'paper-marbling-studio-commissions',
      eyebrow: 'Custom Work',
      title: 'Commission marbled paper that feels made for the occasion',
      alignment: 'center',
      content:
        '<p>We produce small custom runs for wedding suites, editorial styling, boxed sets, and retail packaging accents. Clients can choose from existing palettes or work with the studio on a tailored color direction.</p><p>Because each sheet is pulled by hand, the final collection feels coordinated without becoming repetitive, which makes it especially useful for premium stationery and presentation pieces.</p>',
      ctaText: 'Start a commission brief',
      ctaUrl: '#',
    },
    {
      __typename: 'ParagraphPricing',
      id: 'paper-marbling-studio-pricing',
      eyebrow: 'Pricing',
      title: 'Flexible ways to learn or order',
      subtitle:
        'Whether you want one relaxing workshop or a custom paper run, pricing stays straightforward and scope is confirmed before production begins.',
      tiers: [
        {
          id: 'paper-marbling-studio-tier-1',
          name: 'Studio Sampler',
          price: '$58',
          billingPeriod: '/guest',
          description: 'A first marbling session for beginners',
          features: ['90-minute guided class', '4 finished marbled sheets', 'Use of studio materials'],
          ctaText: 'Reserve a seat',
          ctaUrl: '#',
        },
        {
          id: 'paper-marbling-studio-tier-2',
          name: 'Signature Workshop',
          price: '$112',
          billingPeriod: '/guest',
          description: 'More time, more pulls, and deeper technique coaching',
          features: ['2-hour studio session', '8 finished marbled sheets', 'Palette planning guidance', 'Flattening and finishing tips'],
          isFeatured: true,
          ctaText: 'Book signature workshop',
          ctaUrl: '#',
        },
        {
          id: 'paper-marbling-studio-tier-3',
          name: 'Custom Paper Run',
          price: '$240',
          billingPeriod: '/project',
          description: 'Ideal for events, branded packaging, and artful presentation pieces',
          features: ['Up to 25 custom sheets', 'Color consultation', 'Digital preview set', 'Pickup or local delivery coordination'],
          ctaText: 'Request a quote',
          ctaUrl: '#',
        },
      ],
    },
    {
      __typename: 'ParagraphQuote',
      id: 'paper-marbling-studio-testimonials',
      eyebrow: 'Client Notes',
      title: 'What guests remember after their first pull',
      layout: 'grid',
      testimonials: [
        {
          id: 'paper-marbling-studio-testimonial-1',
          quote:
            'The workshop was calm, hands-on, and genuinely beautiful. I left with finished pieces I actually wanted to frame.',
          authorName: 'Elena M.',
          authorTitle: 'Weekend workshop guest',
          rating: 5,
        },
        {
          id: 'paper-marbling-studio-testimonial-2',
          quote:
            'Our invitation suite felt distinctive without becoming overly formal. The studio translated our color notes perfectly.',
          authorName: 'Jordan P.',
          authorTitle: 'Custom stationery client',
          rating: 5,
        },
        {
          id: 'paper-marbling-studio-testimonial-3',
          quote:
            'It worked extremely well as a team event because everyone could make something personal while still learning a shared process.',
          authorName: 'Priya R.',
          authorTitle: 'Private event organizer',
          rating: 5,
        },
      ],
    },
    {
      __typename: 'ParagraphNewsletter',
      id: 'paper-marbling-studio-newsletter',
      eyebrow: 'Studio Updates',
      title: 'Get new workshop dates and palette releases',
      subtitle:
        'Join the mailing list for class openings, seasonal paper drops, and behind-the-scenes notes from the marbling table.',
      placeholder: 'Enter your email',
      buttonText: 'Join the list',
      backgroundColor: 'dark',
    },
  ],
}

export default site
