import {
  CalendarCheck,
  Wallet,
  FileBarChart2,
  Smartphone,
  Users2,
  MessageCircle,
  BookOpen,
  Bus,
  Library,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/ui/Button";

const features = [
  {
    icon: CalendarCheck,
    number: "01",
    title: "Attendance Tracking",
    description:
      "Mark daily attendance for students and staff in seconds. Automatic absentee alerts are sent to parents in real time.",
  },
  {
    icon: Wallet,
    number: "02",
    title: "Fee Management",
    description:
      "Generate fee vouchers, track payments, and send due-date reminders automatically — no manual fee registers needed.",
  },
  {
    icon: FileBarChart2,
    number: "03",
    title: "Exams & Result Cards",
    description:
      "Record marks, auto-calculate grades and GPA, and publish digital result cards that parents can view instantly.",
  },
  {
    icon: Smartphone,
    number: "04",
    title: "Parent Mobile App",
    description:
      "Keep parents connected with real-time updates on attendance, homework, results, and school announcements.",
  },
  {
    icon: Users2,
    number: "05",
    title: "Staff & HR Management",
    description:
      "Manage staff records, attendance, payroll, and leave requests from a single, organized administration panel.",
  },
  {
    icon: MessageCircle,
    number: "06",
    title: "SMS & WhatsApp Alerts",
    description:
      "Send fee reminders, announcements, and emergency notices directly to parents' phones, instantly.",
  },
  {
    icon: BookOpen,
    number: "07",
    title: "Homework & Diary",
    description:
      "Teachers can assign homework and share a digital diary that parents and students can check anytime.",
  },
  {
    icon: Bus,
    number: "08",
    title: "Transport Management",
    description:
      "Track school vehicles, assign routes, and manage transport fees for students who use school transport.",
  },
  {
    icon: Library,
    number: "09",
    title: "Library Management",
    description:
      "Keep track of book inventory, issue and return records, and overdue reminders for your school library.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-20 pb-16 sm:pt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(theme(colors.brand.100)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
        />
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-700 shadow-sm">
              Features
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Everything your institute needs, built in
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              From daily attendance to fee collection and parent
              communication — Ilm Sync covers the full operations of a
              modern school or madrasa.
            </p>
          </div>
        </Container>
      </section>

      {/* Features grid */}
      <section className="bg-white pb-24">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, number, title, description }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-sm shadow-brand-600/20 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-semibold text-slate-200 transition-colors duration-300 group-hover:text-brand-200">
                    {number}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {description}
                </p>

                <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-brand-600 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
                  Learn more
                  <ArrowUpRight className="h-4 w-4" />
                </div>

                {/* corner accent on hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-50 opacity-0 transition-opacity duration-300 group-hover:opacity-60"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-600 py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-500 opacity-50 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-700 opacity-50 blur-3xl"
        />
        <Container>
          <div className="relative flex flex-col items-center gap-6 text-center">
            <h2 className="max-w-xl text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Ready to see it all in action?
            </h2>
            <p className="max-w-lg text-brand-100">
              Book a free walkthrough and we&apos;ll show you exactly how Ilm
              Sync fits your institute.
            </p>
            <Button
              href="/request-demo"
              variant="secondary"
              icon={ArrowRight}
              className="bg-white text-brand-700 ring-0 hover:bg-brand-50"
            >
              Request a Free Demo
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}