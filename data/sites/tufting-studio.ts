import type { SiteConfig } from '@/lib/site-types'

const site: SiteConfig = {
  slug: 'tufting-studio',
  name: 'Loop & Loom Studio',
  description:
    'Rug tufting studio offering beginner workshops, custom wall pieces, and private group sessions built around bold color, soft texture, and hands-on design.',
  thumbnail: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=400&h=300&fit=crop',
  accentColor: '#E3A72F',
  dateAdded: '2026-03-17',
  category: 'Arts & Crafts',
  theme: {
    primaryColor: '#7A2848',
    secondaryColor: '#E3A72F',
    fontFamily: 'space-grotesk',
    borderRadius: 'sm',
  },
  sections: [
    {
      __typename: 'ParagraphHero',
      id: 'tufting-studio-hero',
      eyebrow: 'Loop & Loom Studio',
      title: 'Design a rug that feels graphic, tactile, and entirely your own',
      subtitle:
        'Spend an afternoon in a bright tufting studio where first-timers and design lovers turn sketches into punchy rugs, mirror frames, and soft wall pieces with clear guidance from start to finish.',
      layout: 'left-aligned',
      backgroundColor: 'light',
      backgroundImage: {
        url: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=1400&q=80',
        alt: 'Colorful yarn cones and textile materials arranged in a creative studio',
      },
      primaryCtaText: 'Book a Workshop',
      primaryCtaUrl: '#workshops',
      secondaryCtaText: 'View Custom Rugs',
      secondaryCtaUrl: '#commissions',
    },
    {
      __typename: 'ParagraphCardGroup',
      id: 'tufting-studio-offerings',
      eyebrow: 'Studio Formats',
      title: 'Pick a project that matches your pace and scale',
      subtitle:
        'Every booking includes yarn selection help, frame setup, finishing guidance, and practical instruction that keeps the process approachable.',
      columns: '3',
      cards: [
        {
          id: 'tufting-studio-card-1',
          icon: 'Shapes',
          title: 'Intro Rug Workshop',
          description:
            'Make a small coaster set or mini rug while learning line control, filling techniques, and clean finishing.',
          linkText: 'See workshop details',
          linkUrl: '#',
        },
        {
          id: 'tufting-studio-card-2',
          icon: 'Frame',
          title: 'Statement Wall Pieces',
          description:
            'Create bold graphic art for shelves, studios, and entryways with support on shape, contrast, and texture.',
          linkText: 'Explore project options',
          linkUrl: '#',
        },
        {
          id: 'tufting-studio-card-3',
          icon: 'Users',
          title: 'Private Group Sessions',
          description:
            'Bring teams, birthdays, and friend groups into the studio for a guided making session with take-home pieces.',
          linkText: 'Plan a private event',
          linkUrl: '#',
        },
      ],
    },
    {
      __typename: 'ParagraphSidebyside',
      id: 'tufting-studio-process',
      eyebrow: 'How It Works',
      title: 'From sketch to sheared finish in one structured, satisfying flow',
      content:
        '<p>Guests begin by choosing a simple shape language, transferring the design to cloth, and building a palette from studio yarn walls organized by tone and texture.</p><p>From there, instructors walk through tufting machine handling, edge control, glue setting, backing, trimming, and carving so the final piece looks intentional rather than unfinished.</p>',
      image: {
        url: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80',
        alt: 'Hands working with soft textile materials in a creative workshop setting',
      },
      imagePosition: 'right',
      features: [
        {
          id: 'tufting-studio-feature-1',
          icon: 'Palette',
          title: 'Curated yarn wall',
          description: 'Pick from wool blends, high-contrast brights, and quieter neutrals grouped for easy mixing.',
        },
        {
          id: 'tufting-studio-feature-2',
          icon: 'PenTool',
          title: 'Design support',
          description: 'Refine shapes and outlines before tufting so even simple ideas land with confidence.',
        },
        {
          id: 'tufting-studio-feature-3',
          icon: 'Scissors',
          title: 'Finishing instruction',
          description: 'Learn trimming and carving techniques that give the surface depth and a polished silhouette.',
        },
      ],
      ctaText: 'Read the studio guide',
      ctaUrl: '#',
    },
    {
      __typename: 'ParagraphStat',
      id: 'tufting-studio-stats',
      eyebrow: 'Studio Snapshot',
      title: 'Built for small groups, strong color, and finished pieces you keep',
      backgroundColor: 'gradient',
      stats: [
        {
          id: 'tufting-studio-stat-1',
          value: '140+',
          label: 'Yarn shades stocked',
          description: 'Seasonal color runs are added often so repeat guests can build new palettes every visit.',
        },
        {
          id: 'tufting-studio-stat-2',
          value: '12',
          label: 'Frames in studio',
          description: 'A compact setup keeps sessions personal while still accommodating private groups.',
        },
        {
          id: 'tufting-studio-stat-3',
          value: '480+',
          label: 'Pieces completed',
          description: 'Mini rugs, mirror surrounds, and wall hangings made by guests and commission clients.',
        },
        {
          id: 'tufting-studio-stat-4',
          value: '4.9/5',
          label: 'Average rating',
          description: 'Feedback from workshop guests who valued both the guidance and the finished results.',
        },
      ],
    },
    {
      __typename: 'ParagraphTextBlock',
      id: 'tufting-studio-commissions',
      eyebrow: 'Custom Work',
      title: 'Commission soft, graphic pieces for homes, shops, and creative offices',
      alignment: 'center',
      content:
        '<p>The studio also produces small custom runs for reading nooks, kids rooms, boutique displays, and branded interiors that need a warmer, more tactile focal point.</p><p>Clients can bring a sketch, logo direction, or moodboard and receive clear recommendations on scale, color balance, pile height, and hanging or floor-ready finishing.</p>',
      ctaText: 'Start a commission brief',
      ctaUrl: '#',
    },
    {
      __typename: 'ParagraphPricing',
      id: 'tufting-studio-pricing',
      eyebrow: 'Pricing',
      title: 'Simple options for trying tufting or ordering custom work',
      subtitle:
        'Workshop pricing includes materials and instruction, while commissions are scoped around size, color complexity, and finishing needs.',
      tiers: [
        {
          id: 'tufting-studio-tier-1',
          name: 'Mini Maker',
          price: '$68',
          billingPeriod: '/guest',
          description: 'Best for first-time tufting guests',
          features: ['90-minute workshop', 'Mini rug or coaster set', 'Yarn and backing included'],
          ctaText: 'Reserve a seat',
          ctaUrl: '#',
        },
        {
          id: 'tufting-studio-tier-2',
          name: 'Signature Rug Session',
          price: '$132',
          billingPeriod: '/guest',
          description: 'A longer studio booking with more room for custom shapes',
          features: ['2.5-hour guided session', 'Up to 20 x 20 inch project', 'Carving and finishing support', 'Protective carry wrap'],
          isFeatured: true,
          ctaText: 'Book signature session',
          ctaUrl: '#',
        },
        {
          id: 'tufting-studio-tier-3',
          name: 'Custom Commission',
          price: '$260',
          billingPeriod: '/project',
          description: 'For branded pieces, nursery decor, and statement wall rugs',
          features: ['Design consultation', 'Color mockup', 'Backing and edge finishing', 'Pickup or local delivery'],
          ctaText: 'Request a quote',
          ctaUrl: '#',
        },
      ],
    },
    {
      __typename: 'ParagraphQuote',
      id: 'tufting-studio-testimonials',
      eyebrow: 'Guest Notes',
      title: 'What people say after their first tufting session',
      layout: 'grid',
      testimonials: [
        {
          id: 'tufting-studio-testimonial-1',
          quote:
            'The process felt easier than I expected, and the finishing guidance made my rug look far more polished than I thought possible.',
          authorName: 'Maya L.',
          authorTitle: 'Weekend workshop guest',
          rating: 5,
        },
        {
          id: 'tufting-studio-testimonial-2',
          quote:
            'We commissioned a playful wall piece for our kids reading corner and the studio translated our sketch into something bright and durable.',
          authorName: 'Jonah P.',
          authorTitle: 'Commission client',
          rating: 5,
        },
        {
          id: 'tufting-studio-testimonial-3',
          quote:
            'It worked exceptionally well as a team event because everyone could make a different design while still learning the same process together.',
          authorName: 'Renee C.',
          authorTitle: 'Private event organizer',
          rating: 5,
        },
      ],
    },
    {
      __typename: 'ParagraphNewsletter',
      id: 'tufting-studio-newsletter',
      eyebrow: 'Studio Updates',
      title: 'Get workshop dates, palette drops, and new sample releases',
      subtitle:
        'Join the mailing list for class openings, commission availability, and behind-the-scenes notes from the tufting frames.',
      placeholder: 'Enter your email',
      buttonText: 'Join the list',
      backgroundColor: 'dark',
    },
  ],
}

export default site
