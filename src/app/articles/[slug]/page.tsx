import { redirect } from "next/navigation";

export const revalidate = 3;

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  void params;
  return {};
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  void params;
  redirect("/listings");
}
