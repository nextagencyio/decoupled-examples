import type { SiteConfig } from '@/lib/site-types'

const site: SiteConfig = {
  slug: 'perfume-atelier',
  name: 'Atelier Aureline',
  description:
    'Custom perfume atelier offering scent consultations, blending workshops, and signature fragrance development for personal and event commissions.',
  thumbnail: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=300&fit=crop',
  accentColor: '#c0841a',
  dateAdded: '2026-03-06',
  category: 'Home & Services',
  theme: {
    primaryColor: '#7f1d1d',
    secondaryColor: '#0f766e',
    fontFamily: 'source-serif',
    borderRadius: 'md',
  },
  sections: [
    {
      __typename: 'ParagraphHero',
      id: 'perfume-atelier-hero',
      eyebrow: 'Atelier Aureline',
      title: 'Design a fragrance that feels unmistakably yours',
      subtitle:
        'Explore a modern perfume atelier where guided scent consultations, private blending sessions, and bespoke formulas turn memory and mood into wearable fragrance.',
      layout: 'left-aligned',
      backgroundColor: 'light',
      backgroundImage: {
        url: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=1400&q=80',
        alt: 'Elegant perfume bottles and fragrance materials arranged on a marble table',
      },
      primaryCtaText: 'Book a Scent Session',
      primaryCtaUrl: '#experiences',
      secondaryCtaText: 'How Blending Works',
      secondaryCtaUrl: '#process',
    },
    {
      __typename: 'ParagraphCardGroup',
      id: 'perfume-atelier-experiences',
      eyebrow: 'Experiences',
      title: 'Choose the way you want to explore fragrance',
      subtitle:
        'Every visit is paced for beginners and enthusiasts alike, with guided smelling strips, formulation notes, and a finished bottle to take home.',
      columns: '3',
      cards: [
        {
          id: 'perfume-atelier-card-1',
          icon: 'Sparkles',
          title: 'Signature Blend',
          description:
            'A one-on-one consultation to build a personal scent around notes you naturally gravitate toward.',
          linkText: 'See session details',
          linkUrl: '#',
        },
        {
          id: 'perfume-atelier-card-2',
          icon: 'Users',
          title: 'Group Blending Workshop',
          description:
            'A social studio session for birthdays, team outings, and creative weekends with guided scent exercises.',
          linkText: 'View workshop format',
          linkUrl: '#',
        },
        {
          id: 'perfume-atelier-card-3',
          icon: 'Gift',
          title: 'Event Fragrance Bar',
          description:
            'On-site scent discovery stations for weddings, launches, and hospitality events with mini bottle favors.',
          linkText: 'Plan an event setup',
          linkUrl: '#',
        },
      ],
    },
    {
      __typename: 'ParagraphSidebyside',
      id: 'perfume-atelier-process',
      eyebrow: 'Our Process',
      title: 'A structured approach to a deeply personal scent',
      content:
        '<p>We begin with scent preferences, memory prompts, and a guided introduction to top, heart, and base notes. That first pass helps narrow a fragrance direction before any formula work begins.</p><p>From there, your perfumer builds short-list accords for you to compare, refine, and rebalance until the blend feels clear, cohesive, and distinctly yours.</p>',
      image: {
        url: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80',
        alt: 'Hands mixing perfume oils in a bright atelier workspace',
      },
      imagePosition: 'right',
      features: [
        {
          id: 'perfume-atelier-feature-1',
          icon: 'FlaskConical',
          title: 'Formula guidance',
          description: 'Learn how citrus, florals, woods, resins, and musks shape the final composition.',
        },
        {
          id: 'perfume-atelier-feature-2',
          icon: 'BookOpen',
          title: 'Take-home formula card',
          description: 'Each finished blend includes notes, concentration details, and refill instructions.',
        },
        {
          id: 'perfume-atelier-feature-3',
          icon: 'Clock3',
          title: 'Wear test review',
          description: 'We help assess how the scent opens, softens, and settles over several hours.',
        },
      ],
      ctaText: 'Read about note families',
      ctaUrl: '#',
    },
    {
      __typename: 'ParagraphLogoCollection',
      id: 'perfume-atelier-partners',
      eyebrow: 'Trusted By',
      title: 'A studio chosen for thoughtful brand and private events',
      logos: [
        { id: 'perfume-atelier-logo-1', name: 'Hotel Lumiere' },
        { id: 'perfume-atelier-logo-2', name: 'Cedar House Weddings' },
        { id: 'perfume-atelier-logo-3', name: 'North Row Gallery' },
        { id: 'perfume-atelier-logo-4', name: 'Marlow Paper Co.' },
        { id: 'perfume-atelier-logo-5', name: 'Sable & Stone' },
      ],
    },
    {
      __typename: 'ParagraphStat',
      id: 'perfume-atelier-stats',
      eyebrow: 'Studio Snapshot',
      title: 'Crafted for detail, not volume',
      backgroundColor: 'light',
      stats: [
        {
          id: 'perfume-atelier-stat-1',
          value: '180+',
          label: 'Aroma materials',
          description: 'Botanical, resinous, mineral, and modern accords available in the studio library',
        },
        {
          id: 'perfume-atelier-stat-2',
          value: '92%',
          label: 'Clients reorder',
          description: 'Returning guests who request a refill or seasonal variation within a year',
        },
        {
          id: 'perfume-atelier-stat-3',
          value: '75 min',
          label: 'Typical session',
          description: 'Enough time to evaluate, blend, and bottle without feeling rushed',
        },
        {
          id: 'perfume-atelier-stat-4',
          value: '4.9/5',
          label: 'Guest rating',
          description: 'Average score across private consultations and small-group workshops',
        },
      ],
    },
    {
      __typename: 'ParagraphPricing',
      id: 'perfume-atelier-pricing',
      eyebrow: 'Pricing',
      title: 'Book a session that matches your occasion',
      subtitle:
        'Each experience includes studio guidance, fragrance materials, and a finished bottle unless otherwise noted.',
      tiers: [
        {
          id: 'perfume-atelier-tier-1',
          name: 'Discovery Flight',
          price: '$68',
          billingPeriod: '/guest',
          description: 'Best for first-time visitors',
          features: ['45-minute guided smelling session', 'Mini custom blend', 'Scent family profile card'],
          ctaText: 'Reserve discovery',
          ctaUrl: '#',
        },
        {
          id: 'perfume-atelier-tier-2',
          name: 'Signature Session',
          price: '$145',
          billingPeriod: '/guest',
          description: 'A complete personal fragrance consultation',
          features: ['75-minute private appointment', '30 ml finished fragrance', 'Formula saved for refill', 'Follow-up adjustment window'],
          isFeatured: true,
          ctaText: 'Book signature session',
          ctaUrl: '#',
        },
        {
          id: 'perfume-atelier-tier-3',
          name: 'Private Atelier Event',
          price: '$720',
          billingPeriod: '/group',
          description: 'Creative gatherings for celebrations and client hospitality',
          features: ['Up to 8 guests', 'Dedicated perfumer host', 'Custom place cards', 'Optional event favor upgrade'],
          ctaText: 'Request event proposal',
          ctaUrl: '#',
        },
      ],
    },
    {
      __typename: 'ParagraphQuote',
      id: 'perfume-atelier-testimonials',
      eyebrow: 'Client Notes',
      title: 'Why guests come back to blend again',
      layout: 'grid',
      testimonials: [
        {
          id: 'perfume-atelier-testimonial-1',
          quote:
            'The process felt welcoming instead of intimidating, and I left with a fragrance that actually suits how I dress and live.',
          authorName: 'Natalie V.',
          authorTitle: 'Signature session guest',
          rating: 5,
        },
        {
          id: 'perfume-atelier-testimonial-2',
          quote:
            'Our team workshop was creative, polished, and far more memorable than a standard private event.',
          authorName: 'Marcus L.',
          authorTitle: 'Studio event organizer',
          rating: 5,
        },
        {
          id: 'perfume-atelier-testimonial-3',
          quote:
            'They translated a few loose ideas into a balanced scent I now wear every week.',
          authorName: 'Priya S.',
          authorTitle: 'Refill member',
          rating: 5,
        },
      ],
    },
    {
      __typename: 'ParagraphNewsletter',
      id: 'perfume-atelier-newsletter',
      eyebrow: 'Stay In The Loop',
      title: 'Get seasonal scent releases and workshop dates',
      subtitle:
        'Join our studio list for early access to limited accords, refill days, and small-group blending events.',
      placeholder: 'Enter your email',
      buttonText: 'Join the list',
      backgroundColor: 'gradient',
    },
  ],
}

export default site
