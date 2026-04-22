import type { SitePost } from '@/lib/site-connector'

/** Editorial-style hero backdrop (architecture / city). */
export const DIRECTORY_HERO_BACKDROP =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=82'

const img = (id: string, w = 1600, h = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=82`

/**
 * Sample listings when the live feed is short; merged after real posts.
 */
export function getDemoListingPosts(): SitePost[] {
  const now = new Date().toISOString()
  return [
    {
      id: 'demo-listing-metropolitan-health',
      title: 'Metropolitan Integrative Health',
      slug: 'metropolitan-integrative-health',
      summary:
        'Outpatient clinic combining general practice, nutrition counselling, and physiotherapy under one roof. Same-week appointments for new patients, evening slots twice weekly, and lab partners within a fifteen-minute walk for routine panels.',
      content: {
        type: 'listing',
        category: 'health',
        location: 'Bandra West, Mumbai',
        address: '14 Turner Road, Bandra West, Mumbai 400050',
        description:
          '<p>Metropolitan Integrative Health serves families and working professionals who want coordinated care without bouncing between disconnected clinics. Morning blocks are reserved for acute visits; afternoons lean toward planned follow-ups for chronic conditions, nutrition planning, and post-injury rehabilitation.</p><p>New patients complete a structured intake so clinicians see medications, allergies, and prior investigations before the first face-to-face conversation. Where imaging or specialist opinion is required, coordinators summarise options in plain language so decisions do not feel rushed.</p><p>The practice publishes transparent fee bands for common visit types and posts seasonal advisories—monsoon respiratory care, travel vaccination windows, and workplace ergonomics—so returning visitors know what to expect before they call.</p>',
        phone: '+91 22 4012 8890',
        highlights: [
          'Same-week GP and specialist slots',
          'On-site phlebotomy with SMS results',
          'Corporate retainers for SME teams',
        ],
        latitude: 19.0544,
        longitude: 72.8406,
      },
      media: [{ url: img('photo-1576091160399-112ba8d25d1d', 1400, 900), type: 'IMAGE' }],
      tags: ['listing', 'health', 'Mumbai'],
      authorName: 'Isanexpert Editorial',
      publishedAt: now,
    },
    {
      id: 'demo-listing-cipherlane-design',
      title: 'Cipherlane Product Design Studio',
      slug: 'cipherlane-product-design',
      summary:
        'Product and UX design for B2B SaaS, fintech onboarding, and hardware-adjacent apps. Research sprints, design systems in Figma, and embedded support through your first GA release so engineering is not guessing at edge states.',
      content: {
        type: 'listing',
        category: 'digital',
        location: 'Sector 44, Gurugram',
        address: 'Tower C, Level 9, DLF Cyber City, Gurugram 122002',
        description:
          '<p>Cipherlane works with product and engineering leads who need a studio that can read API constraints and compliance copy without treating them as “someone else’s problem.” Discovery workshops produce journey maps, risk-ranked backlog notes, and a component inventory so your first sprint after kickoff is build-ready.</p><p>Design systems ship with naming, spacing, and interaction rules that match how your team already ships code—tokens, Storybook examples, or plain Figma libraries, depending on where you want the source of truth to live.</p><p>For regulated flows, Cipherlane documents error paths, empty states, and consent surfaces in language legal can review once, then reuse across releases. Retainers cover weekly design QA so regressions do not creep in after handoff.</p>',
        phone: '+91 124 6610 4400',
        highlights: ['Two-week discovery sprint format', 'Figma + Storybook handoff kits', 'Design QA on release candidates'],
        latitude: 28.4942,
        longitude: 77.085,
      },
      media: [{ url: img('photo-1552664730-d307ca884978', 1400, 900), type: 'IMAGE' }],
      tags: ['listing', 'digital', 'Gurugram'],
      authorName: 'Isanexpert Editorial',
      publishedAt: now,
    },
    {
      id: 'demo-listing-ember-hospitality',
      title: 'Ember Hospitality Group',
      slug: 'ember-hospitality-group',
      summary:
        'Operator of neighbourhood cafés and a central kitchen in Pune handling corporate catering, venue partnerships, and festival pop-ups. Seasonal menus with documented allergen handling and volume capacity for seated events up to five hundred guests.',
      content: {
        type: 'listing',
        category: 'food',
        location: 'Koregaon Park, Pune',
        address: 'Unit 4, North Main Road, Koregaon Park, Pune 411001',
        description:
          '<p>Ember Hospitality grew from a single chef-led café into a small group that still behaves like a kitchen-first company. Beans are roasted to a house profile; bread and pastry production move through the commissary so every outlet hits the same baseline quality on busy mornings.</p><p>The catering arm publishes sample menus by head-count band and service style—standing reception, seated lunch, and hybrid office events—so procurement teams can budget without a long discovery call. Dietary accommodation notes are explicit: vegan, Jain, nut-free, and gluten-aware lines are costed separately rather than treated as last-minute exceptions.</p><p>Venue partners receive load-in diagrams, power requirements, and staffing ratios Ember has learned from past installs, which reduces friction when brands book roadshows or product launches.</p>',
        phone: '+91 20 6688 4411',
        highlights: ['HACCP-aligned production', 'Corporate catering retainers', 'Pop-up build team for retail launches'],
        latitude: 18.5362,
        longitude: 73.8933,
      },
      media: [{ url: img('photo-1555396273-367ea4eb4db5', 1400, 900), type: 'IMAGE' }],
      tags: ['listing', 'food'],
      authorName: 'Isanexpert Editorial',
      publishedAt: now,
    },
    {
      id: 'demo-listing-summit-architects',
      title: 'Summit Studio Architects',
      slug: 'summit-studio-architects',
      summary:
        'Architecture and interior coordination for residential row housing, boutique retail, and light commercial fit-outs. BIM-native documentation, passive cooling studies for warm climates, and weekly site presence through handover.',
      content: {
        type: 'listing',
        category: 'home-improvement',
        location: 'Indiranagar, Bengaluru',
        address: '100 Feet Road, Indiranagar, Bengaluru 560038',
        description:
          '<p>Summit Studio Architects works with owners who want drawings they can discuss with contractors without translating jargon. Concept sketches move quickly into coordinated services, structure, and façade studies so municipal submissions do not stall on missing sheets.</p><p>The studio publishes daylight and ventilation notes for typical Bengaluru plots—east-west depth, courtyard options, and roof strategies that reduce mechanical cooling load. Clients receive annotated PDFs they can circulate to family members or investors who will not open modelling software.</p><p>During construction, site visits follow a fixed cadence with photo logs and snag lists shared the same evening. That rhythm reduces rework when interior vendors arrive before civil defects are closed.</p>',
        phone: '+91 80 4411 9033',
        highlights: ['BIM coordination with MEP consultants', 'Heritage-adjacent façade studies', 'Interior coordination packages'],
        latitude: 12.9719,
        longitude: 77.6412,
      },
      media: [{ url: img('photo-1600585154340-be6161a56a0c', 1400, 900), type: 'IMAGE' }],
      tags: ['listing', 'home-improvement'],
      authorName: 'Isanexpert Editorial',
      publishedAt: now,
    },
    {
      id: 'demo-listing-harbor-finance',
      title: 'Harborline Private Wealth',
      slug: 'harborline-private-wealth',
      summary:
        'Independent advisory for founders after liquidity events and for family offices balancing India and offshore entities. Cash-flow modelling, estate alignment conversations, and quarterly portfolio reviews with plain-language risk commentary.',
      content: {
        type: 'listing',
        category: 'finance',
        location: 'BKC, Mumbai',
        address: 'G Tower, Bandra Kurla Complex, Mumbai 400051',
        description:
          '<p>Harborline Private Wealth works with clients who already have accountants and lawyers in place but need a single narrative across brokerage statements, private credit, and operating company dividends. Reports consolidate positions by entity and currency so board discussions start from one set of numbers.</p><p>The team publishes occasional notes on regulatory changes that affect repatriation timelines, trust structuring, and concentrated equity positions—written for founders who need to brief family members who are not full-time in finance.</p><p>Engagements begin with a written scope: meeting cadence, document checklist, and escalation paths when markets move sharply. That clarity avoids the open-ended retainer conversations many new wealth clients dread.</p>',
        phone: '+91 22 5001 7720',
        highlights: ['Cross-border cash-flow models', 'Quarterly risk memos in plain language', 'Coordination with existing tax counsel'],
        latitude: 19.0665,
        longitude: 72.8643,
      },
      media: [{ url: img('photo-1560472354-b33ff0c44a43', 1400, 900), type: 'IMAGE' }],
      tags: ['listing', 'finance'],
      authorName: 'Isanexpert Editorial',
      publishedAt: now,
    },
    {
      id: 'demo-listing-vertex-cloud',
      title: 'Vertex Cloud Systems',
      slug: 'vertex-cloud-systems',
      summary:
        'Managed cloud operations and security monitoring for healthcare and finance workloads on major hyperscalers. Twenty-four-hour bilingual network operations centre, documented runbooks, and migration squads embedded with client engineering teams.',
      content: {
        type: 'listing',
        category: 'technology',
        location: 'HITEC City, Hyderabad',
        address: 'Mindspace IT Park, Building 10, Hyderabad 500081',
        description:
          '<p>Vertex Cloud Systems supports teams that have moved production workloads to the cloud but still carry regulatory obligations from their on-premise years. Engineers maintain infrastructure-as-code baselines, drift detection, and patch windows that align with change-advisory processes.</p><p>The NOC publishes monthly incident summaries with root-cause categories—not marketing language, but enough detail for risk committees to see trends. Tabletop exercises for ransomware and region failover are scheduled twice yearly by default unless a client governance calendar dictates otherwise.</p><p>FinOps reporting ties tagged resources to cost centres so finance can challenge growth in non-production environments before invoices spike. That discipline is especially useful when product teams spin up many short-lived sandboxes.</p>',
        phone: '+91 40 4747 1200',
        highlights: ['SOC2-aligned change management', 'Bilingual NOC coverage', 'FinOps dashboards by cost centre'],
        latitude: 17.4474,
        longitude: 78.3762,
      },
      media: [{ url: img('photo-1451187580459-43490279c0fa', 1400, 900), type: 'IMAGE' }],
      tags: ['listing', 'technology'],
      authorName: 'Isanexpert Editorial',
      publishedAt: now,
    },
  ]
}
