import type { TaskKey } from "./site-config";
import type { SitePost } from "./site-connector";
import { getDemoListingPosts } from "./demo-listings";
import { getDemoArticlePosts } from "./demo-articles";

const taskSeeds: Record<TaskKey, string> = {
  listing: "listing",
  classified: "classified",
  article: "article",
  image: "image",
  profile: "profile",
  social: "social",
  pdf: "pdf",
  org: "org",
  sbm: "sbm",
  comment: "comment",
};

const taskTitles: Record<TaskKey, string[]> = {
  listing: [
    "Urban Coffee Studio",
    "Growth Labs Agency",
    "Northside Fitness",
    "PixelCraft Design",
    "Prime Auto Care",
  ],
  classified: [
    "Used MacBook Pro 16",
    "Studio Space for Rent",
    "Hiring Frontend Developer",
    "Weekend Photography Gig",
    "City Center Apartment",
  ],
  article: [
    "Scaling Local SEO in 2026",
    "The Future of Directory Sites",
    "Design Systems for Multi-Site",
    "From MVP to Marketplace",
    "Content Ops That Ship Fast",
  ],
  image: [
    "Golden Hour Interiors",
    "Mountain Trail Series",
    "Studio Portrait Set",
    "Neon Night Market",
    "Minimal Workspace",
  ],
  profile: [
    "Aisha Khan",
    "Rohan Patel",
    "Studio R&R",
    "Team Northwind",
    "Maya Desai",
  ],
  social: [
    "Community Launch Update",
    "Collab Request: Designers",
    "Weekly Trend Digest",
    "New Partnerships Announced",
    "Creator Spotlight Series",
  ],
  pdf: [
    "Local SEO Playbook",
    "Marketplace UX Guide",
    "Outbound Sales Template",
    "Agency Pricing Deck",
    "SaaS Metrics Cheatsheet",
  ],
  org: [
    "Northwind Collective",
    "Brightline Media",
    "Atlas Labs",
    "Cobalt Studio",
    "Zenith Partners",
  ],
  sbm: [
    "SEO Checklist 2026",
    "Directory Growth Tactics",
    "Backlink Outreach Vault",
    "AI Writing Tools List",
    "Local Listing Audit",
  ],
  comment: [
    "Reply: Agency Growth Stack",
    "Commentary: Link Building",
    "Response: Listing Quality",
    "Thread: SEO Experiments",
    "Hot Take: Directory UX",
  ],
};

const taskCategories: Record<TaskKey, string[]> = {
  listing: ["business", "technology", "service", "health", "automotive"],
  classified: ["jobs-payroll", "real-estate", "service", "shopping", "travel"],
  article: ["business", "digital", "blog", "news", "education"],
  image: ["lifestyle", "travel", "photography", "arts", "fashion"],
  profile: ["business", "service", "digital", "education", "health"],
  social: ["news", "social-media", "event", "entertainment", "business"],
  pdf: ["education", "business", "finance", "technology", "service"],
  org: ["business", "industry-manufacturing", "service", "digital", "education"],
  sbm: ["digital", "technology", "business", "education", "news"],
  comment: ["blog", "news", "business", "digital", "education"],
};

const summaryByTask: Record<TaskKey, string> = {
  listing:
    "Directory profile with category, geography, and contact details written for buyers who compare several vendors in one sitting.",
  classified:
    "Time-bound notice—role, rental, equipment, or local offer—with the essentials repeated in the first lines so scanners do not miss constraints.",
  article:
    "Editorial note or guide: context for procurement, marketing, or operations teams that already narrowed a shortlist of listings.",
  image:
    "Visual-first post: interiors, products, or campaign photography meant to sit beside a listing when imagery carries the story.",
  profile:
    "Identity surface for a founder, lead, or brand account so visitors know who responds after the first enquiry.",
  social:
    "Short operational update—hours change, new branch, hiring window—meant to complement longer listings and articles.",
  pdf:
    "Downloadable menu, rate card, policy, or technical appendix visitors can keep alongside the live listing.",
  org:
    "Organisation overview when several listings roll up to one legal entity and shared contact policy.",
  sbm:
    "Saved external reference—regulator page, tender document, or tool link—with a short note on why the team keeps returning to it.",
  comment:
    "Threaded response attached to an article so discussion stays next to the argument it addresses.",
};

const randomFrom = (items: string[], index: number) =>
  items[index % items.length];

const buildImage = (task: TaskKey, index: number) =>
  `https://picsum.photos/seed/${taskSeeds[task]}-${index}/1200/800`;

export const getMockPostsForTask = (task: TaskKey): SitePost[] => {
  if (task === "listing") {
    return getDemoListingPosts();
  }
  if (task === "article") {
    return getDemoArticlePosts();
  }
  return Array.from({ length: 5 }).map((_, index) => {
    const title = taskTitles[task][index];
    const category = randomFrom(taskCategories[task], index);
    const slug = `${title}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    return {
      id: `${task}-mock-${index + 1}`,
      title,
      slug,
      summary: summaryByTask[task],
      content: {
        type: task,
        category,
        location: "Delhi",
        description: summaryByTask[task],
        phone: "+91-9999999999",
      },
      media: [{ url: buildImage(task, index), type: "IMAGE" }],
      tags: [task, category],
      authorName: "Site Master Pro",
      publishedAt: new Date().toISOString(),
    };
  });
};
