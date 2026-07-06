import { MapPin, Briefcase, ArrowRight, Heart, Rocket, Users } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/ui/Button";

const perks = [
  {
    icon: Rocket,
    title: "Real Impact",
    description:
      "Your work directly helps hundreds of schools and thousands of students across Pakistan.",
  },
  {
    icon: Users,
    title: "Small, Focused Team",
    description:
      "Work closely with founders and a lean team where every voice matters.",
  },
  {
    icon: Heart,
    title: "Growth & Learning",
    description:
      "We invest in your growth with learning budgets and room to take on real ownership.",
  },
];

const openings = [
  {
    title: "Frontend Developer (Next.js)",
    department: "Engineering",
    location: "Karachi (On-site)",
    type: "Full-time",
  },
  {
    title: "Backend Developer (Node.js)",
    department: "Engineering",
    location: "Karachi (On-site)",
    type: "Full-time",
  },
  {
    title: "Customer Success Executive",
    department: "Customer Success",
    location: "Karachi (On-site)",
    type: "Full-time",
  },
  {
    title: "Sales Executive — School Partnerships",
    department: "Sales",
    location: "Remote (Pakistan)",
    type: "Full-time",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-16 pb-16 sm:pt-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[500px] bg-gradient-to-b from-brand-50 via-white to-white"
        />
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-700 ring-1 ring-inset ring-brand-100">
              Careers
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Help us change how schools are run
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              We&apos;re a small team building tools that hundreds of schools
              and madrasas depend on every day. Join us.
            </p>
          </div>
        </Container>
      </section>

      {/* Perks */}
      <section className="bg-brand-50/50 py-16">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {perks.map(({ icon: Icon, title, description }) => (
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

      {/* Openings */}
      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow="Open Roles"
            title="Current openings"
            description="Don't see a role that fits? Send us your resume anyway — we're always open to meeting talented people."
          />

          <div className="mt-12 flex flex-col gap-4">
            {openings.map((job) => (
              <div
                key={job.title}
                className="flex flex-col gap-4 rounded-2xl border border-slate-100 p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {job.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="h-4 w-4" />
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <Button href="/contact" variant="secondary" icon={ArrowRight}>
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}