import { redirect } from "next/navigation";

export const revalidate = 3;

export default function ArticlesPage({ searchParams }: { searchParams?: { category?: string } }) {
  void searchParams;
  redirect("/listings");
}
