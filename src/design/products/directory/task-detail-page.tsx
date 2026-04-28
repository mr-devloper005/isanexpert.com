import Link from 'next/link'
import { Globe, Mail, MapPin, Phone, Tag } from 'lucide-react'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { TaskPostCard } from '@/components/shared/task-post-card'
import { RichContent, formatRichHtml } from '@/components/shared/rich-content'
import { DirectoryImageSlider } from '@/design/products/directory/directory-image-slider'
import type { SitePost } from '@/lib/site-connector'
import type { TaskKey } from '@/lib/site-config'

export function DirectoryTaskDetailPage({
  task,
  taskLabel,
  taskRoute,
  post,
  description,
  category,
  images,
  mapEmbedUrl,
  related,
}: {
  task: TaskKey
  taskLabel: string
  taskRoute: string
  post: SitePost
  description: string
  category: string
  images: string[]
  mapEmbedUrl: string | null
  related: SitePost[]
}) {
  const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const location = typeof content.address === 'string' ? content.address : typeof content.location === 'string' ? content.location : ''
  const website = typeof content.website === 'string' ? content.website : ''
  const phone = typeof content.phone === 'string' ? content.phone : ''
  const email = typeof content.email === 'string' ? content.email : ''
  const highlights = Array.isArray(content.highlights) ? content.highlights.filter((item): item is string => typeof item === 'string') : []
  const postedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null
  const descriptionHtml = formatRichHtml(description, 'Details coming soon.')

  const schemaPayload = {
    '@context': 'https://schema.org',
    '@type': task === 'profile' ? 'Organization' : 'LocalBusiness',
    name: post.title,
    description,
    image: images[0],
    url: `${taskRoute}/${post.slug}`,
    address: location || undefined,
    telephone: phone || undefined,
    email: email || undefined,
  }

  return (
    <div className="min-h-screen bg-[#eef2f6] text-[#1f3855]">
      <SchemaJsonLd data={schemaPayload} />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 rounded-2xl border border-[#d8e2ef] bg-white px-5 py-5 text-sm text-[#375a7f]">
          <Link href="/" className="hover:text-[#1f3855]">Home</Link>{' '}
          <span className="text-[#8ba0b6]">&raquo;</span>{' '}
          <Link href={taskRoute} className="hover:text-[#1f3855]">{taskLabel}</Link>{' '}
          <span className="text-[#8ba0b6]">&raquo;</span>{' '}
          <span className="font-medium text-[#1f3855]">{post.title}</span>
        </div>

        <section className="rounded-2xl border border-[#d8e2ef] bg-white p-5 shadow-sm">
          <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div className="relative h-[320px] overflow-hidden rounded-md border border-[#d8e2ef] bg-[#f2f6fb] sm:h-[420px]">
              <DirectoryImageSlider images={images} altBase={post.title} />
            </div>
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-[#1f3855]">{post.title}</h1>
              {(post.authorName || postedDate) ? (
                <p className="mt-4 text-sm text-[#6b86a4]">
                  Posted by {post.authorName || post.title}
                  {postedDate ? ` ${postedDate}` : ''}
                </p>
              ) : null}
              <div className="mt-4 border-t border-[#d8e2ef] pt-4">
                <h2 className="text-4xl font-medium tracking-tight text-[#1f3855]">About</h2>
                <RichContent html={descriptionHtml} className="mt-4 text-sm leading-8 text-[#476b90]" />
              </div>
              {highlights.length ? (
                <div className="mt-6 grid gap-2">
                  {highlights.slice(0, 3).map((item) => (
                    <p key={item} className="text-sm text-[#476b90]">- {item}</p>
                  ))}
                </div>
              ) : null}
            </div>
          </div>

          <div className="mt-8 grid gap-3 text-sm text-[#375a7f]">
            {location ? (
              <div className="grid gap-2 sm:grid-cols-[220px_1fr]">
                <p className="inline-flex items-center gap-2 font-medium"><MapPin className="h-4 w-4" /> Location</p>
                <p className="break-words">
                  {location}{' '}
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#1f5c9a] hover:underline"
                  >
                    [map]
                  </a>
                </p>
              </div>
            ) : null}
            {website ? (
              <div className="grid gap-2 sm:grid-cols-[220px_1fr]">
                <p className="inline-flex items-center gap-2 font-medium"><Globe className="h-4 w-4" /> Website</p>
                <a href={website} target="_blank" rel="noreferrer" className="break-all text-[#1f5c9a] hover:underline">{website}</a>
              </div>
            ) : null}
            {phone ? (
              <div className="grid gap-2 sm:grid-cols-[220px_1fr]">
                <p className="inline-flex items-center gap-2 font-medium"><Phone className="h-4 w-4" /> Phone</p>
                <p>{phone}</p>
              </div>
            ) : null}
            {email ? (
              <div className="grid gap-2 sm:grid-cols-[220px_1fr]">
                <p className="inline-flex items-center gap-2 font-medium"><Mail className="h-4 w-4" /> Email</p>
                <a href={`mailto:${email}`} className="break-all text-[#1f5c9a] hover:underline">{email}</a>
              </div>
            ) : null}
          </div>

          <div className="mt-5">
            <span className="inline-flex items-center rounded-md bg-[#dbe3ec] px-3 py-1 text-base font-semibold text-[#2d4662]">
              #{category || taskLabel}
            </span>
          </div>
        </section>

        {mapEmbedUrl ? (
          <section className="mt-8 overflow-hidden rounded-2xl border border-[#d8e2ef] bg-white">
            <iframe src={mapEmbedUrl} title={`${post.title} map`} className="h-[320px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </section>
        ) : null}

        {related.length ? (
          <section className="mt-14">
            <div className="flex flex-col gap-4 border-b border-[#d8e2ef] pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#607f9f]">Related</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1f3855]">Continue exploring nearby.</h2>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#d8e2ef] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2d4662]">
                <Tag className="h-3.5 w-3.5" /> {taskLabel}
              </span>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {related.map((item) => (
                <TaskPostCard key={item.id} post={item} href={`${taskRoute}/${item.slug}`} taskKey={task} />
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </div>
  )
}
