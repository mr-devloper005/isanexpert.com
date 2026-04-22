export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'sarpaeva1f',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Isanexpert',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Business directory and market insights',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'Isanexpert helps people find serious businesses and helps operators publish listings that read like real profiles: clear addresses, categories, hours where relevant, and room for the story behind the service. The directory stays fast to scan; the insights section adds longer reads when visitors want comparison guides, checklists, and sector context before they call or book.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'isanexpert.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://isanexpert.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || 'AIzaSyBco7dIECu3rJWjP3J0MImnR_uxlbeqAe0',

} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const
