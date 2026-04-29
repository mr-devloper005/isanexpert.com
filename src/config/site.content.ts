import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: '',
  },
  footer: {
    tagline: '',
  },
  hero: {
    badge: 'Business directory',
    title: ['Listings visitors can compare in minutes.', 'Context when they want to read longer.'],
    description:
      'Isanexpert combines a structured business directory with clear publishing surfaces. Operators keep categories, locations, and contact paths consistent; readers move from a shortlist of listings to contact without losing their place.',
    primaryCta: {
      label: 'Create a listing',
      href: '/dashboard/listings/new',
    },
    secondaryCta: {
      label: 'Browse directory',
      href: '/listings',
    },
    searchPlaceholder: 'Search listings',
    focusLabel: 'Focus',
    featureCardBadge: 'Recently updated',
    featureCardTitle: 'What appears on the home surface',
    featureCardDescription:
      'The homepage highlights fresh listings and supporting content so first-time visitors immediately see how your business presents itself: imagery, headline, category, and geography before they open a full profile.',
  },
  home: {
    metadata: {
      title: 'Isanexpert — business listings',
      description:
        'Browse verified-style business listings across categories,  move from search to contact with fewer dead ends. Built for teams that care how their brand reads online.',
      openGraphTitle: 'Isanexpert — business listings',
      openGraphDescription:
        'A directory-first experience: compare services by location and category with consistent listing structure and contact paths.',
      keywords: [
        'Isanexpert',
        'business directory',
        'company listings',
        'local services directory',
        'B2B listings',
        'business profiles',
        'service discovery',
      ],
    },
    introBadge: 'What we are building',
    introTitle: 'A directory that respects how people actually decide.',
    introParagraphs: [
      'Most people do not read a homepage like a brochure. They scan for category, geography, and proof that a business is legitimate, then open one or two listings to compare hours, scope, and contact options.',
      'Isanexpert keeps that scanning rhythm honest: listings use consistent fields so you are not comparing apples with vague paragraphs. When someone needs more than a card can hold, the detail page carries highlights, media, and contact-ready context in plain language.',
      'Whether you run a clinic, a studio, a consultancy, or a regional chain, the goal is the same—publish information once, keep it easy to update, and let visitors trust what they see.',
    ],
    sideBadge: 'What visitors notice first',
    sidePoints: [
      'Readable typography and spacing so dense categories do not feel like a spreadsheet.',
      'Strong contrast between list pages and detail pages so each format does its job.',
      'Mobile layouts that keep phone numbers, addresses, and primary actions within thumb reach.',
      'Search and filters that stay predictable as you add more listings over time.',
    ],
    primaryLink: {
      label: 'Open listings',
      href: '/listings',
    },
    secondaryLink: {
      label: 'Browse listings',
      href: '/listings',
    },
  },
  cta: {
    badge: 'For operators',
    title: 'Publish once, keep every field aligned with how buyers compare you.',
    description:
      'Use the listing editor to set category, service area, phone, and narrative copy. Visitors see the same structure on every profile, which makes shortlisting faster and reduces repetitive questions before the first conversation.',
    primaryCta: {
      label: 'Start a listing',
      href: '/dashboard/listings/new',
    },
    secondaryCta: {
      label: 'Contact us',
      href: '/contact',
    },
  },
  taskSectionHeading: 'Latest {label}',
  taskSectionDescriptionSuffix:
    'New and updated entries appear here in publish order. Open any item for the full description, media, and contact block.',
} as const

export const taskPageMetadata: Record<Exclude<TaskKey, 'comment' | 'org' | 'social'>, { title: string; description: string }> = {
  article: {
    title: 'Insights',
    description:
      'Longer articles on positioning, operations, and digital presence for businesses that list on Isanexpert. Use this section when you want procurement context, marketing notes, or sector trends beyond a single listing card.',
  },
  listing: {
    title: 'Listings',
    description:
      'Search and filter businesses by category and geography. Each listing is built to answer the questions people ask before they call: who you serve, where you work, how to reach you, and what proof you can show.',
  },
  classified: {
    title: 'Classifieds',
    description:
      'Short notices for roles, equipment, rentals, and time-bound offers. Classifieds sit beside the main directory so urgent posts stay visible without replacing structured business profiles.',
  },
  image: {
    title: 'Gallery',
    description:
      'Image-led posts for portfolios, menus, interiors, and campaign photography. Pair galleries with listings when visuals carry as much information as the written summary.',
  },
  profile: {
    title: 'Profiles',
    description:
      'People and teams behind the listings: founders, practice leads, and brand accounts. Profiles give context when a buyer wants to know who answers the phone.',
  },
  sbm: {
    title: 'Bookmarks',
    description:
      'Saved links and reference collections for research-heavy buyers and internal teams. Organize vendor docs, policy PDFs, and competitor pages alongside your own listings.',
  },
  pdf: {
    title: 'Documents',
    description:
      'Menus, rate cards, compliance PDFs, and long-form downloads that belong next to a listing. Visitors can grab a file and still return to the directory in one click.',
  },
}

export const taskIntroCopy: Record<
  TaskKey,
  { title: string; paragraphs: string[]; links: { label: string; href: string }[] }
> = {
  listing: {
    title: 'Business listings',
    paragraphs: [
      'This index is organised so you can move from category to geography without losing context. Each card carries a headline, category label, and location line where the publisher provided one, which makes shortlists easier when you are comparing three or four vendors.',
      'Open a listing when you need the full narrative: services offered, areas covered, hours, and the contact paths the business prefers. Media and highlights sit with the text so you are not hunting through tabs.',
      'If you operate multiple branches, keep each location distinct so search results stay honest and customers land on the page that matches their city or neighbourhood.',
    ],
    links: [],
  },
  article: {
    title: 'Insights library',
    paragraphs: [
      'Articles here are written for operators and buyers who already found a shortlist of listings and want deeper context: how to read a proposal, what questions to ask on a site visit, or how seasonal demand shifts a category.',
      'Pieces are tagged by topic so you can follow a thread across weeks instead of rereading the same introduction on every vendor site. When an article references a service type, you can jump back into listings with the same vocabulary.',
      'Contributors focus on clarity: short sections, concrete examples, and checklists you can reuse in email or procurement notes.',
    ],
    links: [],
  },
  classified: {
    title: 'Classifieds',
    paragraphs: [
      'Classifieds cover time-sensitive posts: roles, equipment, short rentals, and local announcements. They are meant to be read quickly, with a headline and price or date where it matters.',
      'Because they sit on the same platform as full listings, you can move from a classified notice into a structured business profile when you need more detail on the seller or buyer organisation.',
      'Use filters to narrow by category, then open individual posts for contact instructions and any attachments the publisher added.',
    ],
    links: [
      { label: 'Listings', href: '/listings' },
      { label: 'Listings', href: '/listings' },
      { label: 'Profiles', href: '/profile' },
    ],
  },
  image: {
    title: 'Visual gallery',
    paragraphs: [
      'Some decisions are visual first: interiors, product lines, event spaces, and campaign photography belong in a gallery format where the image carries the headline.',
      'Galleries are linked from listings and articles when the publisher connects them, so you can move from inspiration to specification without switching sites.',
      'When you publish, add alt text and captions where you can—they help accessibility and search without changing how the grid behaves.',
    ],
    links: [
      { label: 'Listings', href: '/listings' },
      { label: 'Listings', href: '/listings' },
      { label: 'Classifieds', href: '/classifieds' },
    ],
  },
  profile: {
    title: 'Profiles',
    paragraphs: [
      'Profiles identify the people and teams behind listings: founders, clinical leads, studio heads, and brand accounts. They answer the question of who owns the relationship after the first call.',
      'A strong profile repeats the same name, geography, and service lines you see on listings so visitors do not encounter conflicting stories.',
      'Use the profile to add biography, credentials, and links to deeper reading; keep contact routing consistent with your main listing so customers always know the best channel.',
    ],
    links: [
      { label: 'Listings', href: '/listings' },
      { label: 'Listings', href: '/listings' },
      { label: 'Images', href: '/images' },
    ],
  },
  sbm: {
    title: 'Bookmarks',
    paragraphs: [
      'Bookmarks are for material you want to return to: tender documents, regulator pages, competitor sites, and internal playbooks. They are organised as collections so teams can share a shelf instead of a long chat thread.',
      'Each item keeps its title and note field short so the shelf stays scannable. Link out to PDFs or external tools when the source of truth lives elsewhere.',
      'Collections can sit next to articles and listings in your workflow—you are not forced into a single content type for every reference.',
    ],
    links: [
      { label: 'Listings', href: '/listings' },
      { label: 'Listings', href: '/listings' },
      { label: 'PDFs', href: '/pdf' },
    ],
  },
  pdf: {
    title: 'Document library',
    paragraphs: [
      'PDFs host menus, rate cards, technical specifications, and compliance packs that are awkward to paste into a listing body. Visitors download once and keep the version that was live on the date of publish.',
      'Files stay grouped by category so procurement teams can pull the right pack for a sector without searching unrelated folders.',
      'When a document updates, replace the file and note the revision date in the summary line so repeat buyers know they have the current version.',
    ],
    links: [
      { label: 'Listings', href: '/listings' },
      { label: 'Listings', href: '/listings' },
      { label: 'Profiles', href: '/profile' },
    ],
  },
  social: {
    title: 'Community updates',
    paragraphs: [
      'Short updates highlight launches, office moves, hiring windows, and partnership news. They are meant to complement listings rather than replace them.',
      'Readers can scan the feed quickly, then follow links into listings or articles when they need the full picture.',
      'Publishers should keep tone factual and dated where time sensitivity matters so the archive stays trustworthy months later.',
    ],
    links: [
      { label: 'Listings', href: '/listings' },
      { label: 'Listings', href: '/listings' },
      { label: 'PDFs', href: '/pdf' },
    ],
  },
  comment: {
    title: 'Comments',
    paragraphs: [
      'Comments stay attached to articles so discussion remains next to the argument it responds to. Moderation follows the same community standards as the rest of the site.',
      'Readers can quote a paragraph, ask a follow-up question, or share a counterexample without opening a separate thread elsewhere.',
      'Authors receive notifications when new comments arrive so answers land while the article is still relevant.',
    ],
    links: [
      { label: 'Listings', href: '/listings' },
      { label: 'Listings', href: '/listings' },
      { label: 'Classifieds', href: '/classifieds' },
    ],
  },
  org: {
    title: 'Organisations',
    paragraphs: [
      'Organisation pages describe companies, collectives, and institutions that may operate several listings under one legal name. They unify branding and contact policy across branches.',
      'Use this format when the buyer cares about governance: who signs contracts, where invoices go, and which office handles escalations.',
      'Link organisation pages from listings and profiles so visitors always see the same corporate narrative.',
    ],
    links: [
      { label: 'Listings', href: '/listings' },
      { label: 'Listings', href: '/listings' },
      { label: 'PDF library', href: '/pdf' },
    ],
  },
}

