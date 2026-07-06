import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";

const blogPosts = [
  {
    slug: "5-ways-to-simplify-fee-collection",
    title: "5 Ways to Simplify Fee Collection at Your School",
    excerpt:
      "Manual fee registers cause delays and errors. Here are five practical ways schools are speeding up fee collection with digital tools.",
    category: "Fee Management",
    date: "June 12, 2026",
    author: "Ilm Sync Team",
  },
  {
    slug: "why-parent-communication-matters",
    title: "Why Real-Time Parent Communication Matters More Than Ever",
    excerpt:
      "Parents who stay informed are more engaged in their child&apos;s education. Learn how real-time updates build trust between schools and families.",
    category: "Parent Engagement",
    date: "May 28, 2026",
    author: "Ilm Sync Team",
  },
  {
    slug: "digitizing-attendance-for-madrasas",
    title: "Digitizing Attendance Tracking for Madrasas",
    excerpt:
      "Madrasas have unique attendance needs. Here&apos;s how digital attendance systems can be adapted for Islamic educational institutions.",
    category: "Madrasa Management",
    date: "May 14, 2026",
    author: "Ilm Sync Team",
  },
  {
    slug: "choosing-the-right-school-management-system",
    title: "How to Choose the Right School Management System",
    excerpt:
      "Not all school software is built the same. Here&apos;s a checklist to help administrators evaluate the right system for their institute.",
    category: "Guides",
    date: "April 30, 2026",
    author: "Ilm Sync Team",
  },
  {
    slug: "reducing-paperwork-in-school-administration",
    title: "Reducing Paperwork in School Administration",
    excerpt:
      "From admissions to result cards, discover how schools are cutting down on paperwork and saving hours of administrative work each week.",
    category: "Operations",
    date: "April 9, 2026",
    author: "Ilm Sync Team",
  },
  {
    slug: "multi-campus-school-management-tips",
    title: "Managing Multiple Campuses Without Losing Visibility",
    excerpt:
      "Running more than one campus brings unique challenges. Here&apos;s how school networks stay coordinated across locations.",
    category: "Operations",
    date: "March 22, 2026",
    author: "Ilm Sync Team",
  },
];

export default function BlogPage() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 sm:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[500px] bg-gradient-to-b from-brand-50 via-white to-white"
      />
      <Container>
        <SectionHeading
          eyebrow="Blog"
          title="Insights for modern school administration"
          description="Tips, guides, and stories to help schools and madrasas run more smoothly."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white transition-all duration-200 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5"
            >
              <div className="flex h-40 items-center justify-center bg-gradient-to-br from-brand-500 to-brand-700">
                <span className="text-sm font-semibold uppercase tracking-wider text-white/90">
                  {post.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" />
                    {post.author}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-700">
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {post.excerpt}
                </p>

                <span className="mt-auto flex items-center gap-1.5 pt-2 text-sm font-semibold text-brand-600">
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}