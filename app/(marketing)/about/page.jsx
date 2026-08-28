"use client";

import { Target, Heart, Users, ShieldCheck, ArrowRight } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/ui/Button";
import TeamSection from "@/components/contact/TeamSection";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To remove the administrative burden from schools and Colleges so educators can focus on what matters most — teaching.",
  },
  {
    icon: Heart,
    title: "Built With Care",
    description:
      "Every feature in Ilm Sync comes from real conversations with school administrators across Pakistan.",
  },
  {
    icon: Users,
    title: "For Every Institute",
    description:
      "From single-campus academies to multi-branch school systems and Colleges, Ilm Sync scales with you.",
  },
  {
    icon: ShieldCheck,
    title: "Data You Can Trust",
    description:
      "Student and staff records are kept secure, with role-based access so the right people see the right data.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-16 pb-20 sm:pt-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[500px] bg-gradient-to-b from-brand-50 via-white to-white"
        />
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-700 ring-1 ring-inset ring-brand-100">
              About Ilm Sync
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Simplifying school management, one institute at a time
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Ilm Sync started with a simple observation: schools and
              Colleges were spending more time on paperwork than on
              education. We set out to fix that.
            </p>
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="bg-white pb-20">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Why we built Ilm Sync
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Across Pakistan, thousands of schools and Colleges still rely
                on paper registers, scattered spreadsheets, and WhatsApp
                groups to manage attendance, fees, and communication with
                parents. This leads to lost records, delayed fee collection,
                and parents who feel disconnected from their child&apos;s
                progress.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We built Ilm Sync to bring all of this into one connected,
                easy-to-use system — designed specifically for the way
                schools and Colleges in Pakistan actually operate.
              </p>
              <div className="pt-2">
                <Button href="/request-demo" icon={ArrowRight}>
                  See Ilm Sync in Action
                </Button>
              </div>
            </div>

            <div className="rounded-2xl bg-brand-50 p-8 ring-1 ring-brand-100">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold text-brand-700">50+</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Schools & Colleges
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-brand-700">10K+</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Students Managed
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-brand-700">1K+</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Teachers Active
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-brand-700">3+</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Years of Service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-brand-50/50 py-20">
        <Container>
          <SectionHeading
            eyebrow="What drives us"
            title="Our values"
            description="These principles guide every decision we make about Ilm Sync."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-6 ring-1 ring-slate-100"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-600 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <TeamSection />
    </>
  );
}