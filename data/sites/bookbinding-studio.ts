import type { SiteConfig } from '@/lib/site-types'

const site: SiteConfig = {
  slug: 'bookbinding-studio',
  name: 'Spine & Thread Bindery',
  description:
    'Bookbinding studio offering handbound journal workshops, custom guest books, and small-batch cloth-bound editions made with archival materials and measured craft.',
  thumbnail: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop',
  accentColor: '#6E8F8D',
  dateAdded: '2026-03-19',
  category: 'Arts & Crafts',
  theme: {
    primaryColor: '#6B4226',
    secondaryColor: '#6E8F8D',
    fontFamily: 'source-serif',
    borderRadius: 'xl',
  },
  sections: [
    {
      __typename: 'ParagraphHero',
      id: 'bookbinding-studio-hero',
      eyebrow: 'Spine & Thread Bindery',
      title: 'Bind journals, albums, and keepsake books with cloth, paper, and patient hands',
      subtitle:
        'Step into a modern bindery where beginners learn hand stitching, cloth wrapping, and page assembly while clients commission elegant guest books, family recipe volumes, and limited-run editions.',
      layout: 'left-aligned',
      backgroundColor: 'light',
      backgroundImage: {
        url: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1400&q=80',
        alt: 'Stacks of books and binding materials arranged on a workshop table',
      },
      primaryCtaText: 'Book a Workshop',
      primaryCtaUrl: '#workshops',
      secondaryCtaText: 'Request a Custom Bind',
      secondaryCtaUrl: '#custom',
    },
    {
      __typename: 'ParagraphCardGroup',
      id: 'bookbinding-studio-offerings',
      eyebrow: 'What We Make',
      title: 'Choose a format built for writing, gifting, or preserving something worth keeping',
      subtitle:
        'Every booking includes guided material selection, binding instruction, and finishing details that make the final piece feel durable and personal.',
      columns: '3',
      cards: [
        {
          id: 'bookbinding-studio-card-1',
          icon: 'BookOpen',
          title: 'Handbound Journal Workshops',
          description:
            'Learn pamphlet stitch, exposed spine structures, and cloth cover assembly in a small-group class designed for first-timers.',
          linkText: 'See workshop dates',
          linkUrl: '#',
        },
        {
          id: 'bookbinding-studio-card-2',
          icon: 'Ribbon',
          title: 'Guest Books & Albums',
          description:
            'Commission wedding guest books, baby albums, and family archive volumes wrapped in linen, buckram, or printed paper.',
          linkText: 'Explore custom options',
          linkUrl: '#',
        },
        {
          id: 'bookbinding-studio-card-3',
          icon: 'Users',
          title: 'Private Studio Sessions',
          description:
            'Reserve the bindery for team events, literary groups, and celebratory gatherings with a project scaled to your timeline.',
          linkText: 'Plan a private session',
          linkUrl: '#',
        },
      ],
    },
    {
      __typename: 'ParagraphSidebyside',
      id: 'bookbinding-studio-process',
      eyebrow: 'Binding Process',
      title: 'A measured sequence from folded signatures to a finished spine that sits flat and ages well',
      content:
        '<p>Workshops begin with paper grain direction, folding accuracy, and signature prep so the book opens cleanly instead of fighting the structure over time.</p><p>From there, guests stitch text blocks, reinforce the spine, wrap boards, and add finishing touches like title labels, ribbon markers, and protective corners with clear guidance at each step.</p>',
      image: {
        url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80',
        alt: 'Hands working with paper, thread, and bookbinding tools at a bench',
      },
      imagePosition: 'right',
      features: [
        {
          id: 'bookbinding-studio-feature-1',
          icon: 'Ruler',
          title: 'Archival material guidance',
          description: 'Choose papers, boards, and adhesives that suit sketching, fountain pens, and long-term storage.',
        },
        {
          id: 'bookbinding-studio-feature-2',
          icon: 'Scissors',
          title: 'Precise finishing',
          description: 'Trim edges, wrap corners, and set cloth covers with enough structure to feel polished without rushing.',
        },
        {
          id: 'bookbinding-studio-feature-3',
          icon: 'BookMarked',
          title: 'Functional formats',
          description: 'Build books that open comfortably, travel well, and are made to be filled rather than shelved unused.',
        },
      ],
      ctaText: 'Read the bindery guide',
      ctaUrl: '#',
    },
    {
      __typename: 'ParagraphStat',
      id: 'bookbinding-studio-stats',
      eyebrow: 'Bindery Snapshot',
      title: 'Small classes, sturdy materials, and books designed to be handled often',
      backgroundColor: 'gradient',
      stats: [
        {
          id: 'bookbinding-studio-stat-1',
          value: '320+',
          label: 'Books bound in studio',
          description: 'Journals, albums, portfolios, and keepsake volumes completed by guests and commission clients.',
        },
        {
          id: 'bookbinding-studio-stat-2',
          value: '14',
          label: 'Cloth colors stocked',
          description: 'A rotating selection of linen, book cloth, and patterned papers chosen for calm, classic palettes.',
        },
        {
          id: 'bookbinding-studio-stat-3',
          value: '10',
          label: 'Seats per workshop',
          description: 'The studio stays intentionally small so folding, stitching, and casing-in can be taught carefully.',
        },
        {
          id: 'bookbinding-studio-stat-4',
          value: '4.9/5',
          label: 'Average guest rating',
          description: 'Feedback from workshop participants and custom clients who valued the clarity of instruction and finish quality.',
        },
      ],
    },
    {
      __typename: 'ParagraphTextBlock',
      id: 'bookbinding-studio-custom',
      eyebrow: 'Custom Projects',
      title: 'Commission books that feel personal enough to keep for decades',
      alignment: 'center',
      content:
        '<p>Spine & Thread Bindery creates cloth-bound guest books, archival family recipe collections, presentation volumes for photographers, and short-run editions for poets, teachers, and local organizations.</p><p>Each project starts with a short consultation about size, paper weight, cover material, and how the finished book will be used so the structure matches the purpose instead of just the look.</p>',
      ctaText: 'Start a project brief',
      ctaUrl: '#',
    },
    {
      __typename: 'ParagraphLogoCollection',
      id: 'bookbinding-studio-clients',
      eyebrow: 'Made For',
      title: 'Chosen for thoughtful gifts, special editions, and event keepsakes',
      logos: [
        { id: 'bookbinding-studio-logo-1', name: 'Maple Street Poetry Fest' },
        { id: 'bookbinding-studio-logo-2', name: 'North House Letters' },
        { id: 'bookbinding-studio-logo-3', name: 'Hearth & Hall Events' },
        { id: 'bookbinding-studio-logo-4', name: 'Willow Creek Library Friends' },
        { id: 'bookbinding-studio-logo-5', name: 'Studio Alder Photography' },
      ],
    },
    {
      __typename: 'ParagraphPricing',
      id: 'bookbinding-studio-pricing',
      eyebrow: 'Pricing',
      title: 'Simple ways to learn the craft or commission a finished volume',
      subtitle:
        'Workshop seats include materials and instruction, while custom pricing depends on size, cloth selection, page count, and finishing details.',
      tiers: [
        {
          id: 'bookbinding-studio-tier-1',
          name: 'Intro Journal',
          price: '$78',
          billingPeriod: '/guest',
          description: 'Best for a first handbound book',
          features: ['2-hour workshop', 'One stitched journal', 'Paper, thread, and cloth cover materials included'],
          ctaText: 'Reserve a seat',
          ctaUrl: '#',
        },
        {
          id: 'bookbinding-studio-tier-2',
          name: 'Signature Ledger',
          price: '$148',
          billingPeriod: '/guest',
          description: 'A longer session for harder covers and refined finishing',
          features: ['3.5-hour guided workshop', 'Hardcover book block', 'Ribbon marker and title label', 'Protective wrap to take home'],
          isFeatured: true,
          ctaText: 'Book signature workshop',
          ctaUrl: '#',
        },
        {
          id: 'bookbinding-studio-tier-3',
          name: 'Custom Keepsake Volume',
          price: '$260',
          billingPeriod: '/project',
          description: 'For guest books, albums, and presentation editions',
          features: ['Design consultation', 'Material samples', 'Interior paper planning', 'Pickup or local delivery'],
          ctaText: 'Request a quote',
          ctaUrl: '#',
        },
      ],
    },
    {
      __typename: 'ParagraphAccordion',
      id: 'bookbinding-studio-faq',
      eyebrow: 'Common Questions',
      title: 'Helpful details before your first binding session',
      subtitle:
        'A few practical answers on materials, experience level, and the difference between workshop projects and commissioned books.',
      items: [
        {
          id: 'bookbinding-studio-faq-1',
          question: 'Do I need prior craft experience to join a workshop?',
          answer:
            '<p>No. Intro sessions are built for beginners and focus on one binding structure at a time, with templates, tool guidance, and paced instruction throughout.</p>',
        },
        {
          id: 'bookbinding-studio-faq-2',
          question: 'Can I use fountain pen friendly paper?',
          answer:
            '<p>Yes. The bindery keeps several paper stocks selected for smoother writing tools, including options with lower feathering and better show-through control.</p>',
        },
        {
          id: 'bookbinding-studio-faq-3',
          question: 'What custom books are most commonly commissioned?',
          answer:
            '<p>Guest books, baby albums, travel journals, family recipe collections, and presentation books for photographers and writers are the most common requests.</p>',
        },
        {
          id: 'bookbinding-studio-faq-4',
          question: 'How long do custom projects usually take?',
          answer:
            '<p>Most single-volume commissions are completed in two to four weeks depending on material availability, personalization, and page count.</p>',
        },
      ],
    },
  ],
}

export default site
