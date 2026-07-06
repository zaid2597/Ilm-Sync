import {
  LayoutDashboard,
  CalendarCheck,
  Wallet,
  Smartphone,
  FileBarChart2,
  Users2,
} from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";

const screenshots = [
  {
    icon: LayoutDashboard,
    title: "Dashboard Overview",
    description: "A single view of attendance, fees, and activity across your institute.",
  },
  {
    icon: CalendarCheck,
    title: "Attendance Module",
    description: "Mark and review daily attendance for students and staff.",
  },
  {
    icon: Wallet,
    title: "Fee Management",
    description: "Generate vouchers and track fee collection in real time.",
  },
  {
    icon: Smartphone,
    title: "Parent Mobile App",
    description: "Parents view attendance, results, and announcements on the go.",
  },
  {
    icon: FileBarChart2,
    title: "Result Cards",
    description: "Auto-generated digital result cards ready to share with parents.",
  },
  {
    icon: Users2,
    title: "Staff & HR Panel",
    description: "Manage staff records, attendance, and payroll in one place.",
  },
];

export default function GalleryPage() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 sm:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[500px] bg-gradient-to-b from-brand-50 via-white to-white"
      />
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="A closer look at Ilm Sync"
          description="Screenshots of the modules your institute will use every day."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {screenshots.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="overflow-hidden rounded-2xl border border-slate-100 bg-white"
            >
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-brand-500 to-brand-800">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
                  <Icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}