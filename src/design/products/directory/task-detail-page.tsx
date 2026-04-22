import Link from 'next/link'
import { ArrowRight, Globe, Mail, MapPin, Phone, ShieldCheck, Tag } from 'lucide-react'
import { ContentImage } from '@/components/shared/content-image'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { TaskPostCard } from '@/components/shared/task-post-card'
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
    <div className="min-h-screen bg-[linear-gradient(180deg,#f4fff8_0%,#ffffff_45%,#eefcf4_100%)] text-[#124170]">
      <SchemaJsonLd data={schemaPayload} />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Link href={taskRoute} className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#215B63] hover:text-[#124170]">
          ← Back to {taskLabel}
        </Link>

        <section className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div>
            <div className="overflow-hidden rounded-[2.2rem] border border-[#124170]/10 bg-white shadow-[0_24px_70px_rgba(18,65,112,0.08)]">
              <div className="relative h-[420px] overflow-hidden bg-[#e8fff3]">
                <ContentImage src={images[0]} alt={post.title} fill className="object-cover" />
              </div>
              {images.length > 1 ? (
                <div className="grid grid-cols-4 gap-3 p-4">
                  {images.slice(1, 5).map((image) => (
                    <div key={image} className="relative h-24 overflow-hidden rounded-2xl border border-[#124170]/10 bg-[#f6fffb]">
                      <ContentImage src={image} alt={post.title} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="mt-8 rounded-[2rem] border border-[#124170]/10 bg-white p-7 shadow-[0_20px_60px_rgba(18,65,112,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#215B63]/85">Overview</p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.03em] text-[#124170]">
                Services, coverage, and how to reach this business
              </h2>
              <p className="mt-4 text-sm leading-8 text-[#124170]/78">{description}</p>
              {highlights.length ? (
                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  {highlights.slice(0, 4).map((item) => (
                    <div key={item} className="rounded-[1.4rem] border border-[#67C090]/22 bg-[#f6fffb] px-4 py-4 text-sm text-[#215B63]">
                      {item}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-[#124170]/10 bg-white p-7 shadow-[0_24px_60px_rgba(18,65,112,0.08)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#215B63]/85">{category || taskLabel}</p>
                  <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-[-0.04em] text-[#124170]">{post.title}</h1>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#124170] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#AAFFC7]">
                  <ShieldCheck className="h-3.5 w-3.5" /> Verified
                </span>
              </div>

              <div className="mt-6 grid gap-3">
                {location ? (
                  <div className="flex items-center gap-3 rounded-2xl border border-[#124170]/10 bg-[#f6fffb] px-4 py-3 text-sm text-[#215B63]">
                    <MapPin className="h-4 w-4 shrink-0 text-[#67C090]" /> {location}
                  </div>
                ) : null}
                {phone ? (
                  <div className="flex items-center gap-3 rounded-2xl border border-[#124170]/10 bg-[#f6fffb] px-4 py-3 text-sm text-[#215B63]">
                    <Phone className="h-4 w-4 shrink-0 text-[#67C090]" /> {phone}
                  </div>
                ) : null}
                {email ? (
                  <div className="flex items-center gap-3 rounded-2xl border border-[#124170]/10 bg-[#f6fffb] px-4 py-3 text-sm text-[#215B63]">
                    <Mail className="h-4 w-4 shrink-0 text-[#67C090]" /> {email}
                  </div>
                ) : null}
                {website ? (
                  <div className="flex items-center gap-3 rounded-2xl border border-[#124170]/10 bg-[#f6fffb] px-4 py-3 text-sm text-[#215B63]">
                    <Globe className="h-4 w-4 shrink-0 text-[#67C090]" /> {website}
                  </div>
                ) : null}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {website ? (
                  <a
                    href={website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#124170] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0f3558]"
                  >
                    Visit website <ArrowRight className="h-4 w-4" />
                  </a>
                ) : null}
                <Link
                  href={taskRoute}
                  className="inline-flex items-center gap-2 rounded-full border border-[#124170]/15 bg-[#f6fffb] px-5 py-3 text-sm font-semibold text-[#124170] transition hover:border-[#67C090]/45 hover:bg-white"
                >
                  Browse more
                </Link>
              </div>
            </div>

            {mapEmbedUrl ? (
              <div className="overflow-hidden rounded-[2rem] border border-[#124170]/10 bg-white shadow-[0_24px_60px_rgba(18,65,112,0.08)]">
                <div className="border-b border-[#124170]/10 px-6 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#215B63]/85">Location</p>
                </div>
                <iframe src={mapEmbedUrl} title={`${post.title} map`} className="h-[320px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            ) : null}
          </div>
        </section>

        {related.length ? (
          <section className="mt-14">
            <div className="flex flex-col gap-4 border-b border-[#124170]/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#215B63]/85">Related</p>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.03em] text-[#124170]">Continue exploring nearby.</h2>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#124170]/12 bg-[#f6fffb] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#215B63]">
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
