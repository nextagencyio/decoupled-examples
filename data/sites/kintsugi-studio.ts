import type { SiteConfig } from '@/lib/site-types'

const site: SiteConfig = {
  slug: 'kintsugi-studio',
  name: 'Golden Seam Studio',
  description:
    'Kintsugi studio offering restorative workshops, ceramic repair commissions, and quiet private sessions that turn cracked pottery into luminous keepsakes.',
  thumbnail: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop',
  accentColor: '#C89B3C',
  dateAdded: '2026-03-18',
  category: 'Arts & Crafts',
  theme: {
    primaryColor: '#3F3A36',
    secondaryColor: '#C89B3C',
    fontFamily: 'work-sans',
    borderRadius: 'none',
  },
  sections: [
    {
      __typename: 'ParagraphHero',
      id: 'kintsugi-studio-hero',
      eyebrow: 'Golden Seam Studio',
      title: 'Repair beloved ceramics with gold, patience, and a steadier pace',
      subtitle:
        'Visit a quiet kintsugi studio where chipped bowls, teacups, and heirloom pieces are repaired through guided workshops and careful commissions that honor the object instead of hiding its history.',
      layout: 'left-aligned',
      backgroundColor: 'light',
      backgroundImage: {
        url: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1400&q=80',
        alt: 'Handcrafted ceramic cups with gold-finished detailing on a clean studio surface',
      },
      primaryCtaText: 'Book a Repair Workshop',
      primaryCtaUrl: '#workshops',
      secondaryCtaText: 'Request a Commission',
      secondaryCtaUrl: '#commissions',
    },
    {
      __typename: 'ParagraphCardGroup',
      id: 'kintsugi-studio-offerings',
      eyebrow: 'Ways To Begin',
      title: 'Choose a repair format that fits the piece and the story behind it',
      subtitle:
        'Every format includes materials guidance, repair sequencing, and practical advice on which ceramics are best suited for decorative restoration.',
      columns: '3',
      cards: [
        {
          id: 'kintsugi-studio-card-1',
          icon: 'CupSoda',
          title: 'Intro Repair Workshop',
          description:
            'Bring one small ceramic item and learn safe bonding, seam placement, and metallic finishing in a beginner-friendly session.',
          linkText: 'View workshop details',
          linkUrl: '#',
        },
        {
          id: 'kintsugi-studio-card-2',
          icon: 'PackageOpen',
          title: 'Commissioned Restoration',
          description:
            'Entrust a sentimental bowl, planter, or serving piece to the studio for a carefully paced decorative repair.',
          linkText: 'See commission options',
          linkUrl: '#',
        },
        {
          id: 'kintsugi-studio-card-3',
          icon: 'Users',
          title: 'Private Reflection Sessions',
          description:
            'Book a small-group workshop for families, teams, or memorial keepsakes in a quieter studio setting.',
          linkText: 'Plan a private session',
          linkUrl: '#',
        },
      ],
    },
    {
      __typename: 'ParagraphSidebyside',
      id: 'kintsugi-studio-process',
      eyebrow: 'Repair Method',
      title: 'A deliberate process that treats each break as part of the final design',
      content:
        '<p>Sessions begin by assessing the ceramic body, sorting fragments, and deciding whether the piece is best repaired for display, ritual use, or memory keeping. That first review helps guests work with realistic expectations and more confident hands.</p><p>From there, the studio guides you through bonding, filling, sanding, and metallic seam application in a calm sequence that prioritizes stability and visual balance over speed.</p>',
      image: {
        url: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80',
        alt: 'Hands working carefully with small craft tools at a bright table',
      },
      imagePosition: 'right',
      features: [
        {
          id: 'kintsugi-studio-feature-1',
          icon: 'ShieldCheck',
          title: 'Clear material guidance',
          description: 'Learn which breaks can be repaired confidently and which pieces are best preserved as display objects.',
        },
        {
          id: 'kintsugi-studio-feature-2',
          icon: 'Sparkles',
          title: 'Thoughtful seam finishing',
          description: 'Apply metallic detailing in a way that feels restrained, balanced, and true to the object.',
        },
        {
          id: 'kintsugi-studio-feature-3',
          icon: 'Clock3',
          title: 'Unhurried pacing',
          description: 'Small classes keep the room focused so guests can work carefully instead of rushing the repair.',
        },
      ],
      ctaText: 'Read the repair guide',
      ctaUrl: '#',
    },
    {
      __typename: 'ParagraphStat',
      id: 'kintsugi-studio-stats',
      eyebrow: 'Studio Snapshot',
      title: 'Made for small objects, steady hands, and meaningful restoration',
      backgroundColor: 'gradient',
      stats: [
        {
          id: 'kintsugi-studio-stat-1',
          value: '260+',
          label: 'Ceramic pieces restored',
          description: 'Bowls, cups, vases, and keepsakes repaired for display in homes, tea rooms, and studios.',
        },
        {
          id: 'kintsugi-studio-stat-2',
          value: '8',
          label: 'Seats per workshop',
          description: 'A smaller class size keeps instruction personal and protects the slower pace the craft needs.',
        },
        {
          id: 'kintsugi-studio-stat-3',
          value: '3-5 wks',
          label: 'Typical commission turnaround',
          description: 'Time allowed for assessment, staged repair, finishing, and careful curing between steps.',
        },
        {
          id: 'kintsugi-studio-stat-4',
          value: '4.9/5',
          label: 'Guest rating',
          description: 'Average feedback from workshop guests and restoration clients who valued the studio atmosphere.',
        },
      ],
    },
    {
      __typename: 'ParagraphTextBlock',
      id: 'kintsugi-studio-commissions',
      eyebrow: 'Commission Work',
      title: 'Restore pieces that still deserve a visible place at the table or on the shelf',
      alignment: 'center',
      content:
        '<p>Golden Seam Studio handles decorative repairs for tea bowls, serving dishes, family ceramics, and travel keepsakes that carry personal significance. Each commission begins with a photo review and a short consultation about the object, the break pattern, and the intended final use.</p><p>Clients receive candid recommendations when a repair would be unstable, overly fragile, or better suited to display rather than food service, keeping the work respectful and practical.</p>',
      ctaText: 'Start a commission request',
      ctaUrl: '#',
    },
    {
      __typename: 'ParagraphQuote',
      id: 'kintsugi-studio-testimonials',
      eyebrow: 'Client Notes',
      title: 'What guests remember most after repairing a piece themselves',
      layout: 'grid',
      testimonials: [
        {
          id: 'kintsugi-studio-testimonial-1',
          quote:
            'The session was calm, precise, and surprisingly approachable. I left with a repaired tea cup that feels even more special now.',
          authorName: 'Naomi R.',
          authorTitle: 'Workshop guest',
          rating: 5,
        },
        {
          id: 'kintsugi-studio-testimonial-2',
          quote:
            'We sent a cracked serving bowl from my grandmother and the finished piece felt respectful rather than overdone.',
          authorName: 'Elias T.',
          authorTitle: 'Commission client',
          rating: 5,
        },
        {
          id: 'kintsugi-studio-testimonial-3',
          quote:
            'Our private session gave everyone enough time to focus, and the instructor explained each step without rushing the room.',
          authorName: 'Priya S.',
          authorTitle: 'Private group organizer',
          rating: 5,
        },
      ],
    },
    {
      __typename: 'ParagraphPricing',
      id: 'kintsugi-studio-pricing',
      eyebrow: 'Pricing',
      title: 'Simple ways to learn the process or hand over a meaningful repair',
      subtitle:
        'Workshop pricing includes studio materials for one small object, while commissions are scoped after reviewing photos and break complexity.',
      tiers: [
        {
          id: 'kintsugi-studio-tier-1',
          name: 'Guided Repair',
          price: '$72',
          billingPeriod: '/guest',
          description: 'Best for first-time kintsugi guests',
          features: ['90-minute workshop', 'Repair of one small ceramic item', 'Bonding and metallic finishing materials'],
          ctaText: 'Reserve a seat',
          ctaUrl: '#',
        },
        {
          id: 'kintsugi-studio-tier-2',
          name: 'Private Studio Session',
          price: '$180',
          billingPeriod: '/session',
          description: 'A quieter format for pairs, families, or sentimental pieces',
          features: ['Up to 2 guests', 'Extended guided repair time', 'Material selection support', 'Care instructions to take home'],
          isFeatured: true,
          ctaText: 'Book a private session',
          ctaUrl: '#',
        },
        {
          id: 'kintsugi-studio-tier-3',
          name: 'Commissioned Restoration',
          price: '$240',
          billingPeriod: '/piece',
          description: 'For heirloom ceramics and display-ready repairs completed by the studio',
          features: ['Photo assessment', 'Decorative restoration plan', 'Progress updates', 'Pickup or insured return shipping'],
          ctaText: 'Request an estimate',
          ctaUrl: '#',
        },
      ],
    },
    {
      __typename: 'ParagraphAccordion',
      id: 'kintsugi-studio-faq',
      eyebrow: 'Common Questions',
      title: 'What to know before bringing a piece into the studio',
      subtitle:
        'A few practical notes help guests choose the right object and understand what decorative restoration can realistically do.',
      items: [
        {
          id: 'kintsugi-studio-faq-1',
          question: 'What kinds of ceramics work best for kintsugi workshops?',
          answer:
            '<p>Small to medium ceramic bowls, cups, and decorative vessels with a clean break pattern tend to be the best candidates. Extremely thin porcelain, missing large sections, or heat-damaged pieces may require a commission review instead.</p>',
        },
        {
          id: 'kintsugi-studio-faq-2',
          question: 'Can repaired pieces be used for food or drink afterward?',
          answer:
            '<p>The studio focuses on decorative restoration. Some repaired objects are best used for display only, and the instructor will explain that clearly before work begins so guests can make an informed choice.</p>',
        },
        {
          id: 'kintsugi-studio-faq-3',
          question: 'Do I need prior pottery or repair experience?',
          answer:
            '<p>No prior experience is needed. Workshops are paced for beginners, with each step demonstrated in sequence and plenty of time for questions before moving on.</p>',
        },
      ],
    },
  ],
}

export default site
