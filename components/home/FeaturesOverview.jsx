import {
  CalendarCheck,
  Wallet,
  FileBarChart2,
  Smartphone,
  Users2,
  MessageCircle,
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
      "Mark daily attendance for students and staff in seconds, with automatic absentee alerts to parents.",
  },
  {
    icon: Wallet,
    number: "02",
    title: "Fee Management",
    description:
      "Generate fee vouchers, track payments, and send due-date reminders — no more manual fee registers.",
  },
  {
    icon: FileBarChart2,
    number: "03",
    title: "Exams & Result Cards",
    description:
      "Record marks, auto-calculate grades, and publish digital result cards parents can view instantly.",
  },
  {
    icon: Smartphone,
    number: "04",
    title: "Parent Mobile App",
    description:
      "Keep parents connected with real-time updates on attendance, homework, results, and announcements.",
  },
  {
    icon: Users2,
    number: "05",
    title: "Staff & HR",
    description:
      "Manage staff records, attendance, payroll, and leave requests from a single, organized panel.",
  },
  {
    icon: MessageCircle,
    number: "06",
    title: "SMS & WhatsApp Alerts",
    description:
      "Send fee reminders, announcements, and emergency notices directly to parents' phones.",
  },
];

export default function FeaturesOverview() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Everything in one place"
            title="Built for how schools actually run"
            description="Ilm Sync replaces registers, spreadsheets, and scattered WhatsApp groups with one connected system for your whole institute."
          />
          <Button
            href="/features"
            variant="secondary"
            icon={ArrowRight}
            className="hidden shrink-0 sm:inline-flex"
          >
            Explore All Features
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, number, title, description }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-sm shadow-brand-600/20">
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

              <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-brand-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Learn more
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:hidden">
          <Button href="/features" variant="secondary" icon={ArrowRight}>
            Explore All Features
          </Button>
        </div>
      </Container>
    </section>
  );
}