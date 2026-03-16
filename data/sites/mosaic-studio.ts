import type { SiteConfig } from '@/lib/site-types'

const site: SiteConfig = {
  slug: 'mosaic-studio',
  name: 'Blue Tessera Studio',
  description:
    'Mosaic art studio offering tile workshops, custom house numbers, and team sessions that turn color, pattern, and patience into lasting handmade pieces.',
  thumbnail: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400&h=300&fit=crop',
  accentColor: '#D97745',
  dateAdded: '2026-03-16',
  category: 'Arts & Crafts',
  theme: {
    primaryColor: '#1F4A6E',
    secondaryColor: '#D97745',
    fontFamily: 'merriweather',
    borderRadius: '2xl',
  },
  sections: [
    {
      __typename: 'ParagraphHero',
      id: 'mosaic-studio-hero',
      eyebrow: 'Blue Tessera Studio',
      title: 'Build color, texture, and pattern one tile at a time',
      subtitle:
        'Step into a bright mosaic studio where beginners and experienced makers design trays, wall pieces, and home accents using thoughtfully curated tile palettes and clear hands-on instruction.',
      layout: 'left-aligned',
      backgroundColor: 'light',
      backgroundImage: {
        url: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1400&q=80',
        alt: 'Colorful mosaic tiles and handmade materials arranged on a craft table',
      },
      primaryCtaText: 'Book a Workshop',
      primaryCtaUrl: '#workshops',
      secondaryCtaText: 'See Custom Projects',
      secondaryCtaUrl: '#commissions',
    },
    {
      __typename: 'ParagraphCardGroup',
      id: 'mosaic-studio-workshops',
      eyebrow: 'Studio Formats',
      title: 'Choose a project that fits your pace and style',
      subtitle:
        'Every format includes guided design support, tile selection help, and finishing instructions that make the process approachable from the first session.',
      columns: '3',
      cards: [
        {
          id: 'mosaic-studio-card-1',
          icon: 'Shapes',
          title: 'Intro Tile Workshop',
          description:
            'Create a small tray or trivet while learning layout basics, adhesive technique, and grout timing.',
          linkText: 'View workshop details',
          linkUrl: '#',
        },
        {
          id: 'mosaic-studio-card-2',
          icon: 'Home',
          title: 'Custom House Numbers',
          description:
            'Design weather-ready number plaques with balanced color palettes and clean, readable arrangements.',
          linkText: 'Explore commission options',
          linkUrl: '#',
        },
        {
          id: 'mosaic-studio-card-3',
          icon: 'Users',
          title: 'Private Group Sessions',
          description:
            'Host birthdays, team outings, and neighborhood gatherings with guided projects sized for group success.',
          linkText: 'Plan a private event',
          linkUrl: '#',
        },
      ],
    },
    {
      __typename: 'ParagraphSidebyside',
      id: 'mosaic-studio-process',
      eyebrow: 'How It Works',
      title: 'Start with a sketch, finish with a piece you will actually display',
      content:
        '<p>Each session begins with pattern planning, color balancing, and a short introduction to tools so you can focus on design decisions instead of guessing your next step.</p><p>Once the layout is set, we guide you through cutting, spacing, adhesion, and grout cleanup in a sequence that keeps the project calm, tidy, and manageable for beginners.</p>',
      image: {
        url: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80',
        alt: 'Hands arranging small craft materials in a bright studio workspace',
      },
      imagePosition: 'right',
      features: [
        {
          id: 'mosaic-studio-feature-1',
          icon: 'Palette',
          title: 'Curated tile wall',
          description: 'Choose from matte, glossy, and stone-look tiles grouped into ready-made color stories.',
        },
        {
          id: 'mosaic-studio-feature-2',
          icon: 'Scissors',
          title: 'Tool guidance',
          description: 'Learn safe cutting and placement techniques without needing prior experience.',
        },
        {
          id: 'mosaic-studio-feature-3',
          icon: 'CheckCircle2',
          title: 'Finishing support',
          description: 'Leave with clear grout, sealing, and care steps so your piece holds up beautifully.',
        },
      ],
      ctaText: 'Read the studio guide',
      ctaUrl: '#',
    },
    {
      __typename: 'ParagraphStat',
      id: 'mosaic-studio-stats',
      eyebrow: 'Studio Snapshot',
      title: 'Designed for hands-on learning and polished results',
      backgroundColor: 'gradient',
      stats: [
        {
          id: 'mosaic-studio-stat-1',
          value: '180+',
          label: 'Tile colors stocked',
          description: 'Glass, ceramic, and stone-inspired pieces organized for easy palette building.',
        },
        {
          id: 'mosaic-studio-stat-2',
          value: '16',
          label: 'Seats per workshop',
          description: 'Small group size keeps layout feedback personal and practical.',
        },
        {
          id: 'mosaic-studio-stat-3',
          value: '420+',
          label: 'Custom plaques completed',
          description: 'Address markers and wall pieces made for homes, studios, and storefronts.',
        },
        {
          id: 'mosaic-studio-stat-4',
          value: '4.9/5',
          label: 'Guest rating',
          description: 'Average review score from workshop guests and commission clients.',
        },
      ],
    },
    {
      __typename: 'ParagraphLogoCollection',
      id: 'mosaic-studio-partners',
      eyebrow: 'Trusted By',
      title: 'Chosen for community events and thoughtful custom gifts',
      logos: [
        { id: 'mosaic-studio-logo-1', name: 'Harbor Street Market' },
        { id: 'mosaic-studio-logo-2', name: 'Cedar House Realty' },
        { id: 'mosaic-studio-logo-3', name: 'Juniper Civic Arts' },
        { id: 'mosaic-studio-logo-4', name: 'Maple Lane Interiors' },
        { id: 'mosaic-studio-logo-5', name: 'Northside Makers Fair' },
      ],
    },
    {
      __typename: 'ParagraphPricing',
      id: 'mosaic-studio-pricing',
      eyebrow: 'Pricing',
      title: 'Simple ways to make, gift, or commission',
      subtitle:
        'Whether you want a one-time workshop or a finished piece for your home, scope and materials are clear before work begins.',
      tiers: [
        {
          id: 'mosaic-studio-tier-1',
          name: 'Tabletop Session',
          price: '$64',
          billingPeriod: '/guest',
          description: 'Best for first-time mosaic makers',
          features: ['90-minute workshop', 'One small tray or trivet', 'Tiles, tools, and grout included'],
          ctaText: 'Reserve a seat',
          ctaUrl: '#',
        },
        {
          id: 'mosaic-studio-tier-2',
          name: 'Signature Panel',
          price: '$128',
          billingPeriod: '/guest',
          description: 'A longer studio session for framed wall pieces',
          features: ['2.5-hour guided workshop', 'Expanded tile palette', 'Pattern coaching', 'Take-home finishing kit'],
          isFeatured: true,
          ctaText: 'Book signature workshop',
          ctaUrl: '#',
        },
        {
          id: 'mosaic-studio-tier-3',
          name: 'Custom Address Plaque',
          price: '$240',
          billingPeriod: '/project',
          description: 'A durable custom piece made for entryways and porches',
          features: ['Design consultation', 'Proof before production', 'Weather-ready substrate', 'Pickup or local delivery'],
          ctaText: 'Request a design consult',
          ctaUrl: '#',
        },
      ],
    },
    {
      __typename: 'ParagraphQuote',
      id: 'mosaic-studio-testimonials',
      eyebrow: 'Client Notes',
      title: 'Why guests come back for a second project',
      layout: 'grid',
      testimonials: [
        {
          id: 'mosaic-studio-testimonial-1',
          quote:
            'The guidance was clear without being restrictive. I left with a tray that looks handmade in the best possible way.',
          authorName: 'Erin C.',
          authorTitle: 'Workshop guest',
          rating: 5,
        },
        {
          id: 'mosaic-studio-testimonial-2',
          quote:
            'Our house number plaque turned out beautifully and the color mockups made the decision process easy.',
          authorName: 'Daniel M.',
          authorTitle: 'Commission client',
          rating: 5,
        },
        {
          id: 'mosaic-studio-testimonial-3',
          quote:
            'The team session felt relaxed, creative, and genuinely well organized. Everyone finished with something they were proud of.',
          authorName: 'Sonia R.',
          authorTitle: 'Private event host',
          rating: 5,
        },
      ],
    },
    {
      __typename: 'ParagraphAccordion',
      id: 'mosaic-studio-faq',
      eyebrow: 'FAQ',
      title: 'Helpful details before your first tile session',
      subtitle: 'A few common questions about project timing, materials, and beginner readiness.',
      items: [
        {
          id: 'mosaic-studio-faq-1',
          question: 'Do I need prior art experience to join a workshop?',
          answer:
            '<p>No. Most guests are first-timers, and every session includes a simple project plan, tile layout guidance, and help with finishing steps.</p>',
        },
        {
          id: 'mosaic-studio-faq-2',
          question: 'Can I take my project home the same day?',
          answer:
            '<p>Yes for most tabletop pieces. We provide cure-time instructions and a grout kit when a final step needs to be completed at home after the adhesive sets.</p>',
        },
        {
          id: 'mosaic-studio-faq-3',
          question: 'What kinds of custom pieces do you make?',
          answer:
            '<p>We regularly create address plaques, mirror borders, small wall panels, and giftable tabletop accents for homes, shops, and events.</p>',
        },
        {
          id: 'mosaic-studio-faq-4',
          question: 'Are private sessions available for teams or celebrations?',
          answer:
            '<p>Yes. Private bookings can be tailored for birthdays, team events, and neighborhood groups with project formats that fit your timing and space needs.</p>',
        },
      ],
    },
  ],
}

export default site
