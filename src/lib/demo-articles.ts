import type { SitePost } from '@/lib/site-connector'

const cover = (sig: string) =>
  `https://images.unsplash.com/${sig}?auto=format&fit=crop&w=1600&h=900&q=82`

/** Sample insights when the article feed is still light; real articles stay first. */
export function getDemoArticlePosts(): SitePost[] {
  const now = new Date().toISOString()
  return [
    {
      id: 'demo-article-trust-signals',
      title: 'Trust signals that actually move listing conversions',
      slug: 'trust-signals-listing-conversions',
      summary:
        'Visitors decide in under a minute whether to shortlist a business. This note walks through the fields and habits that correlate with higher contact rates—without resorting to gimmicks or fake urgency.',
      content: {
        type: 'article',
        category: 'business',
        excerpt:
          'Align your category labels, hours, and proof points with what appears on maps and social profiles. Inconsistency is the silent conversion killer.',
        body: '<p>When someone lands on a directory, they are usually comparing three or four options that look similar at a glance. The listings that win are not always the cheapest; they are the ones where geography, category, and contact paths match what the visitor already saw elsewhere.</p><p>Start with a single source of truth for the business name and address. If your Google Business Profile still shows an old neighbourhood while the directory shows a new office, you lose trust before the conversation begins.</p><p>Second, publish real photography of the location or team. Stock images are easy to spot and signal that the operator has not invested in the profile. Short captions under each image help accessibility and search without bloating the page.</p><p>Finally, write service descriptions as outcomes, not slogans. “Annual maintenance contracts for commercial HVAC in Pune” beats “World-class solutions” because it answers who you help and where you work.</p>',
      },
      media: [{ url: cover('photo-1454165804606-c3d57bc86b40'), type: 'IMAGE' }],
      tags: ['article', 'business'],
      authorName: 'Isanexpert Editorial',
      publishedAt: now,
    },
    {
      id: 'demo-article-local-seo',
      title: 'Local SEO hygiene for multi-location brands',
      slug: 'local-seo-hygiene-multi-location',
      summary:
        'Duplicate descriptions across branches, drifting phone numbers, and mismatched categories quietly cap visibility. Here is a maintenance checklist teams can run quarterly without hiring a separate agency project.',
      content: {
        type: 'article',
        category: 'digital',
        excerpt:
          'Treat each location URL as its own product page: unique hero copy, FAQs grounded in that city, and reviews tied to the correct storefront.',
        body: '<p>Search engines reward distinct value per URL. When fifty city pages share the same introduction with only the place name swapped, rankings plateau because nothing differentiates the experience for readers or crawlers.</p><p>Begin with an inventory: canonical domain, HTTPS everywhere, and consistent NAP (name, address, phone) on the directory, maps, and footer of the corporate site. Spreadsheets beat memory for this work—assign an owner and a review date.</p><p>Next, localise proof. A Bengaluru branch should mention neighbourhoods served, parking context, and languages spoken on site. A Hyderabad branch might highlight industrial corridor access instead. Those specifics also help human visitors who never read the SEO article.</p><p>Close the loop by measuring queries that already bring traffic to weaker pages. Improve titles and meta descriptions where impressions are high but clicks are low; that is where rewritten copy pays off fastest.</p>',
      },
      media: [{ url: cover('photo-1460925895917-afdab827c52f'), type: 'IMAGE' }],
      tags: ['article', 'digital'],
      authorName: 'Isanexpert Editorial',
      publishedAt: now,
    },
    {
      id: 'demo-article-photography',
      title: 'Photography briefs that make listings feel premium',
      slug: 'photography-briefs-premium-listings',
      summary:
        'Natural light, context shots, and a consistent aspect ratio reduce cognitive load when visitors compare cards side by side. This brief is written for operators who brief a photographer once a year.',
      content: {
        type: 'article',
        category: 'blog',
        excerpt:
          'Lead with environment, then detail—signage, team at work, and product close-ups support trust without cluttering the hero.',
        body: '<p>Ask for a wide establishing frame that shows signage and street context. That single image answers “Is this the place I think it is?” before anyone reads the headline.</p><p>Follow with two detail frames: one human moment (staff interacting with a customer or patient) and one product or equipment shot that signals quality. Avoid filters that distort colour on food, clinical, or retail product photography—accuracy matters more than drama.</p><p>Export three crops from the same master file if your directory and social channels need different ratios, but keep colour grading identical so the brand feels coherent everywhere.</p><p>Finally, rename files descriptively before upload. Future-you will thank present-you when searching the media library during a renovation or menu change.</p>',
      },
      media: [{ url: cover('photo-1542038784456-1ea8e935640e'), type: 'IMAGE' }],
      tags: ['article', 'blog'],
      authorName: 'Isanexpert Editorial',
      publishedAt: now,
    },
  ]
}
