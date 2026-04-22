import Link from "next/link";
import { PageShell } from "@/components/shared/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/site-config";
import { siteIdentity } from "@/config/site.identity";

const pillars = [
  {
    title: "Comparable business profiles",
    body: "Category, geography, and contact details appear in the same rhythm on every listing so buyers can shortlist without re-reading marketing fluff for basics.",
  },
  {
    title: "Context beside the card",
    body: "Longer descriptions, highlights, and the insights library sit next to the grid for procurement and marketing teams who already narrowed the field.",
  },
  {
    title: "Built for operators",
    body: "Search, filters, and task routes stay predictable—whether you publish listings, articles, or supporting assets—so internal teams train once and keep publishing.",
  },
];

const values = [
  {
    title: "Clarity over volume",
    description:
      "We optimise for scan-friendly profiles and honest geography lines instead of endless feeds that bury the phone number three screens deep.",
  },
  {
    title: "Editorial when it helps",
    description:
      "Articles and notes explain how services differ in practice—coverage areas, compliance posture, delivery models—without replacing the structured listing underneath.",
  },
  {
    title: "Trust in the details",
    description:
      "Consistent fields, visible categories, and room for proof points mean visitors can compare vendors fairly before the first conversation.",
  },
];

const companyFacts = [
  { label: "Legal name", value: `${siteIdentity.name} (operating brand)` },
  { label: "Product", value: "Public business directory, listings, and insights publishing" },
  { label: "Primary domain", value: siteIdentity.domain },
  { label: "Public site", value: siteIdentity.url.replace(/^https?:\/\//, "") },
  { label: "Support & partnerships", value: `hello@${siteIdentity.domain}` },
  { label: "Audience", value: "Regional businesses, clinics, agencies, and procurement-led buyers comparing vendors online" },
];

export default function AboutPage() {
  return (
    <PageShell
      title={`About ${SITE_CONFIG.name}`}
      description={`${SITE_CONFIG.name} is a business directory and publishing surface for structured listings, regional operators, and long-form insights that sit beside the card.`}
      actions={
        <Button asChild>
          <Link href="/contact">Contact us</Link>
        </Button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-border bg-card">
          <CardContent className="space-y-4 p-6">
            <Badge variant="secondary">Our story</Badge>
            <h2 className="text-2xl font-semibold text-foreground">
              A directory surface for businesses that are compared, not just discovered.
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {SITE_CONFIG.name} started from a simple frustration: buyers open five tabs, each with a different layout,
              and still cannot tell which vendor covers their city or answers the phone first. We built a calm grid with
              predictable fields—category, service area, highlights, and contact paths—so shortlists stay honest.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Listings stay the anchor. Articles, PDFs, and shorter updates wrap around them when teams need procurement
              notes, checklists, or policy context. The goal is fewer repeated questions before the first call, not more
              animation on the homepage.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {pillars.map((item) => (
                <div key={item.title} className="rounded-lg border border-border bg-secondary/40 p-4">
                  <div className="text-sm font-semibold text-foreground">{item.title}</div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="space-y-4">
          {values.map((value) => (
            <Card key={value.title} className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="mt-10 border-border bg-card">
        <CardContent className="space-y-4 p-6">
          <Badge variant="outline">Company</Badge>
          <h2 className="text-xl font-semibold text-foreground">At a glance</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {SITE_CONFIG.name} is operated as a directory-first web product: publishers maintain structured profiles;
            readers search by category and geography; editorial content explains how categories behave in practice. We do
            not position the site as a closed social network—accounts exist so operators can manage listings and saved
            material, while the public index stays open and readable.
          </p>
          <dl className="mt-4 grid gap-3 sm:grid-cols-2">
            {companyFacts.map((row) => (
              <div key={row.label} className="rounded-lg border border-border bg-muted/30 px-4 py-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{row.label}</dt>
                <dd className="mt-1 text-sm text-foreground">{row.value}</dd>
              </div>
            ))}
          </dl>
          <p className="text-xs text-muted-foreground">
            Regulatory disclosures, registered address, and billing contacts for enterprise customers are provided on
            request after we verify your organisation—use the contact page and reference &quot;company information&quot; in
            the subject line.
          </p>
        </CardContent>
      </Card>
    </PageShell>
  );
}
