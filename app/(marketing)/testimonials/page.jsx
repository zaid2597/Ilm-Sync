import { Star, Quote, ArrowRight } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/ui/Button";

const testimonials = [
  {
    quote:
      "Fee follow-ups used to take our office a full week every month. With Ilm Sync, reminders go out automatically and collections happen faster.",
    name: "Ayesha Farooq",
    role: "Principal, Al-Noor Grammar School",
    initials: "AF",
  },
  {
    quote:
      "Parents finally see attendance and results the same day. Complaints about missed updates have almost completely stopped.",
    name: "Muhammad Bilal",
    role: "Administrator, Dar-ul-Uloom Academy",
    initials: "MB",
  },
  {
    quote:
      "We moved from three different registers to one dashboard. Our teachers spend more time teaching and less time on paperwork now.",
    name: "Sana Iqbal",
    role: "Director, Bright Future School System",
    initials: "SI",
  },
  {
    quote:
      "Onboarding took less than a day. Their support team personally helped us import records from our old Excel sheets.",
    name: "Faisal Rehman",
    role: "Principal, City Grammar High School",
    initials: "FR",
  },
  {
    quote:
      "Managing three campuses used to mean three separate systems. Now everything is in one place and reporting is instant.",
    name: "Nadia Sheikh",
    role: "Owner, Little Scholars School Network",
    initials: "NS",
  },
  {
    quote:
      "The parent app changed how families see our madrasa. They trust us more because they can see their child&apos;s progress themselves.",
    name: "Hafiz Abdul Rauf",
    role: "Head, Jamia Islamia Madrasa",
    initials: "AR",
  },
];

export default function TestimonialsPage() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 sm:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[500px] bg-gradient-to-b from-brand-50 via-white to-white"
      />
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by school leaders across Pakistan"
          description="From single-campus academies to multi-branch school systems and madrasas, administrators rely on Ilm Sync every day."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ quote, name, role, initials }) => (
            <div
              key={name}
              className="flex flex-col justify-between rounded-2xl bg-brand-50/60 p-7 ring-1 ring-brand-100"
            >
              <div>
                <Quote className="h-7 w-7 text-brand-300" />
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-brand-500 text-brand-500"
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-700">
                  &quot;{quote}&quot;
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{name}</p>
                  <p className="text-xs text-slate-500">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-slate-600">
            Ready to become our next success story?
          </p>
          <Button href="/request-demo" icon={ArrowRight}>
            Request a Free Demo
          </Button>
        </div>
      </Container>
    </section>
  );
}