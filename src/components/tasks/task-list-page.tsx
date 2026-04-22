import Link from 'next/link'
import { ArrowRight, Building2, FileText, Image as ImageIcon, LayoutGrid, Tag, User } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { TaskListClient } from '@/components/tasks/task-list-client'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { fetchTaskPosts } from '@/lib/task-data'
import { SITE_CONFIG, getTaskConfig, type TaskKey } from '@/lib/site-config'
import { CATEGORY_OPTIONS, normalizeCategory } from '@/lib/categories'
import { taskIntroCopy } from '@/config/site.content'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { TASK_LIST_PAGE_OVERRIDE_ENABLED, TaskListPageOverride } from '@/overrides/task-list-page'

/** Decorative hero image beside listing / article intros (replaces former filter panel). */
const listingHeroPlaceholderSrc =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&h=720&q=82'
const insightsHeroPlaceholderSrc =
  'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&h=720&q=82'

function TaskListHeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={`relative min-h-[220px] overflow-hidden rounded-[2rem] border border-[#124170]/10 shadow-[0_18px_50px_rgba(15,23,42,0.06)] lg:min-h-[280px]`}>
      <img src={src} alt={alt} className="h-full w-full object-cover" width={1200} height={720} loading="lazy" />
    </div>
  )
}

const taskIcons: Record<TaskKey, any> = {
  listing: Building2,
  article: FileText,
  image: ImageIcon,
  profile: User,
  classified: Tag,
  sbm: LayoutGrid,
  social: LayoutGrid,
  pdf: FileText,
  org: Building2,
  comment: FileText,
}

const variantShells = {
  'listing-directory':
    'bg-[radial-gradient(ellipse_at_20%_0%,rgba(170,255,199,0.45),transparent_42%),linear-gradient(180deg,#f4fff8_0%,#ffffff_58%,#eefcf4_100%)]',
  'listing-showcase':
    'bg-[linear-gradient(135deg,#e9fff3_0%,#ffffff_45%,#f0f9ff_100%)]',
  'article-editorial':
    'bg-[radial-gradient(circle_at_100%_0%,rgba(103,192,144,0.12),transparent_32%),linear-gradient(180deg,#ffffff_0%,#f6fffb_100%)]',
  'article-journal':
    'bg-[linear-gradient(180deg,#ffffff_0%,#eefcf4_55%,#e4f7ee_100%)]',
  'image-masonry':
    'bg-[linear-gradient(165deg,#0a1f2d_0%,#124170_42%,#0d1a28_100%)] text-white',
  'image-portfolio':
    'bg-[linear-gradient(180deg,#071a24_0%,#215b63_55%,#0c141c_100%)] text-white',
  'profile-creator':
    'bg-[linear-gradient(180deg,#061018_0%,#124170_40%,#0a1620_100%)] text-white',
  'profile-business':
    'bg-[linear-gradient(180deg,#f6fffb_0%,#ffffff_50%,#e8fff3_100%)]',
  'classified-bulletin':
    'bg-[linear-gradient(180deg,#fffdf6_0%,#ffffff_50%,#f4fff8_100%)]',
  'classified-market':
    'bg-[radial-gradient(circle_at_0%_20%,rgba(255,214,170,0.35),transparent_40%),linear-gradient(180deg,#fffaf2_0%,#ffffff_100%)]',
  'sbm-curation':
    'bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_55%,#eefcf4_100%)]',
  'sbm-library':
    'bg-[radial-gradient(circle_at_0%_100%,rgba(18,65,112,0.06),transparent_38%),linear-gradient(180deg,#ffffff_0%,#f4fff8_100%)]',
} as const

export async function TaskListPage({ task, category }: { task: TaskKey; category?: string }) {
  if (TASK_LIST_PAGE_OVERRIDE_ENABLED) {
    return await TaskListPageOverride({ task, category })
  }

  const taskConfig = getTaskConfig(task)
  const posts = await fetchTaskPosts(task, 30)
  const normalizedCategory = category ? normalizeCategory(category) : 'all'
  const intro = taskIntroCopy[task]
  const baseUrl = SITE_CONFIG.baseUrl.replace(/\/$/, '')
  const schemaItems = posts.slice(0, 10).map((post, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `${baseUrl}${taskConfig?.route || '/posts'}/${post.slug}`,
    name: post.title,
  }))
  const { recipe } = getFactoryState()
  const layoutKey = recipe.taskLayouts[task as keyof typeof recipe.taskLayouts] || `${task}-${task === 'listing' ? 'directory' : 'editorial'}`
  const shellClass = variantShells[layoutKey as keyof typeof variantShells] || 'bg-background'
  const Icon = taskIcons[task] || LayoutGrid

  const isDark = ['image-masonry', 'image-portfolio', 'profile-creator'].includes(layoutKey)
  const ui = isDark
    ? {
        muted: 'text-slate-300',
        panel: 'border border-white/10 bg-white/6',
        soft: 'border border-white/10 bg-white/5',
        input: 'border-white/10 bg-white/6 text-white',
        button: 'bg-white text-slate-950 hover:bg-slate-200',
      }
    : layoutKey.startsWith('article') || layoutKey.startsWith('sbm')
      ? {
          muted: 'text-[#215B63]/85',
          panel: 'border border-[#124170]/12 bg-white/95 shadow-[0_20px_55px_rgba(18,65,112,0.06)]',
          soft: 'border border-[#67C090]/25 bg-[#f6fffb]',
          input: 'border border-[#124170]/15 bg-white text-[#124170]',
          button: 'bg-[#124170] text-white hover:bg-[#0f3558]',
        }
      : {
          muted: 'text-[#215B63]/88',
          panel: 'border border-[#124170]/10 bg-white shadow-[0_20px_55px_rgba(18,65,112,0.06)]',
          soft: 'border border-[#67C090]/22 bg-[#f6fffb]',
          input: 'border border-[#124170]/12 bg-white text-[#124170]',
          button: 'bg-[#124170] text-white hover:bg-[#0f3558]',
        }

  return (
    <div className={`min-h-screen ${shellClass}`}>
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {task === 'listing' ? (
          <SchemaJsonLd
            data={[
              {
                '@context': 'https://schema.org',
                '@type': 'ItemList',
                name: 'Business Directory Listings',
                itemListElement: schemaItems,
              },
              {
                '@context': 'https://schema.org',
                '@type': 'LocalBusiness',
                name: SITE_CONFIG.name,
                url: `${baseUrl}/listings`,
                areaServed: 'Worldwide',
              },
            ]}
          />
        ) : null}
        {task === 'article' || task === 'classified' ? (
          <SchemaJsonLd
            data={{
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: `${taskConfig?.label || task} | ${SITE_CONFIG.name}`,
              url: `${baseUrl}${taskConfig?.route || ''}`,
              hasPart: schemaItems,
            }}
          />
        ) : null}

        {layoutKey === 'listing-directory' || layoutKey === 'listing-showcase' ? (
          <section className="mb-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className={`rounded-[2rem] p-7 shadow-[0_24px_70px_rgba(15,23,42,0.07)] ${ui.panel}`}>
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] opacity-70"><Icon className="h-4 w-4" /> {taskConfig?.label || task}</div>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-foreground">{taskConfig?.description || 'Latest posts'}</h1>
              <p className={`mt-4 max-w-2xl text-sm leading-7 ${ui.muted}`}>
                Structured fields, geography, and trust cues stay visible so visitors can compare listings without wading through unrelated feeds.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={taskConfig?.route || '#'} className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${ui.button}`}>Explore results <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
            <TaskListHeroImage src={listingHeroPlaceholderSrc} alt="Decorative city skyline image beside the listings introduction." />
          </section>
        ) : null}

        {layoutKey === 'article-editorial' || layoutKey === 'article-journal' ? (
          <section className="mb-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className={`text-xs uppercase tracking-[0.3em] ${ui.muted}`}>{taskConfig?.label || task}</p>
              <h1 className="mt-3 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-foreground">{taskConfig?.description || 'Latest posts'}</h1>
              <p className={`mt-5 max-w-2xl text-sm leading-8 ${ui.muted}`}>
                Longer reads sit on a brighter canvas with mint accents so editorial content feels distinct from the directory rhythm—without changing how posts load or filter.
              </p>
            </div>
            <TaskListHeroImage src={insightsHeroPlaceholderSrc} alt="Decorative reading and workspace image beside the insights introduction." />
          </section>
        ) : null}

        {layoutKey === 'image-masonry' || layoutKey === 'image-portfolio' ? (
          <section className="mb-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] ${ui.soft}`}>
                <Icon className="h-3.5 w-3.5" /> Visual feed
              </div>
              <h1 className="mt-5 text-5xl font-semibold tracking-[-0.05em]">{taskConfig?.description || 'Latest posts'}</h1>
              <p className={`mt-5 max-w-2xl text-sm leading-8 ${ui.muted}`}>
                Deep-teal stages and generous media windows keep this lane gallery-forward—built for fast visual scanning instead of directory comparisons.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className={`min-h-[220px] rounded-[2rem] ${ui.panel}`} />
              <div className={`min-h-[220px] rounded-[2rem] ${ui.soft}`} />
              <div className={`col-span-2 min-h-[120px] rounded-[2rem] ${ui.panel}`} />
            </div>
          </section>
        ) : null}

        {layoutKey === 'profile-creator' || layoutKey === 'profile-business' ? (
          <section className={`mb-12 rounded-[2.2rem] p-8 shadow-[0_24px_70px_rgba(15,23,42,0.1)] ${ui.panel}`}>
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div className={`min-h-[240px] rounded-[2rem] ${ui.soft}`} />
              <div>
                <p className={`text-xs uppercase tracking-[0.3em] ${ui.muted}`}>{taskConfig?.label || task}</p>
                <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-foreground">Profiles framed as trust anchors—not thumbnails in a feed.</h1>
                <p className={`mt-5 max-w-2xl text-sm leading-8 ${ui.muted}`}>
                  Light surfaces, mint dividers, and calmer density separate identity pages from listing cards while keeping navigation and data paths identical.
                </p>
              </div>
            </div>
          </section>
        ) : null}

        {layoutKey === 'classified-bulletin' || layoutKey === 'classified-market' ? (
          <section className="mb-12 grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className={`rounded-[1.8rem] p-6 ${ui.panel}`}>
              <p className={`text-xs uppercase tracking-[0.3em] ${ui.muted}`}>{taskConfig?.label || task}</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-foreground">Classifieds tuned for urgency and quick reads.</h1>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {['Quick to scan', 'Shorter response path', 'Clearer urgency cues'].map((item) => (
                <div key={item} className={`rounded-[1.5rem] p-5 ${ui.soft}`}>
                  <p className="text-sm font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {layoutKey === 'sbm-curation' || layoutKey === 'sbm-library' ? (
          <section className="mb-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <p className={`text-xs uppercase tracking-[0.3em] ${ui.muted}`}>{taskConfig?.label || task}</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-foreground">Bookmarks organized like research shelves.</h1>
              <p className={`mt-5 max-w-2xl text-sm leading-8 ${ui.muted}`}>
                Cool mist backgrounds and ink typography keep saved links readable for longer sessions without borrowing listing-card chrome.
              </p>
            </div>
            <div className={`rounded-[2rem] p-6 ${ui.panel}`}>
              <p className={`text-xs uppercase tracking-[0.24em] ${ui.muted}`}>Collection filter</p>
              <form className="mt-4 flex items-center gap-3" action={taskConfig?.route || '#'}>
                <select name="category" defaultValue={normalizedCategory} className={`h-11 flex-1 rounded-xl px-3 text-sm ${ui.input}`}>
                  <option value="all">All categories</option>
                  {CATEGORY_OPTIONS.map((item) => (
                    <option key={item.slug} value={item.slug}>{item.name}</option>
                  ))}
                </select>
                <button type="submit" className={`h-11 rounded-xl px-4 text-sm font-medium ${ui.button}`}>Apply</button>
              </form>
            </div>
          </section>
        ) : null}

        {intro ? (
          <section className={`mb-12 rounded-[2rem] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-8 ${ui.panel}`}>
            <h2 className="text-2xl font-semibold text-foreground">{intro.title}</h2>
            {intro.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className={`mt-4 text-sm leading-7 ${ui.muted}`}>{paragraph}</p>
            ))}
            {intro.links.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                {intro.links.map((link) => (
                  <a key={link.href} href={link.href} className="font-semibold text-foreground hover:underline">
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </section>
        ) : null}

        <TaskListClient task={task} initialPosts={posts} category={normalizedCategory} />
      </main>
      <Footer />
    </div>
  )
}
