"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  PlayCircle,
  CheckCircle2,
  Bell,
  TrendingUp,
  Star,
  Wallet,
  Smartphone,
  CalendarCheck,
} from "lucide-react";
import Container from "@/components/shared/Container";
import Button from "@/components/ui/Button";

const avatarInitials = ["AF", "MB", "SI", "FR"];

const slides = [
  {
    label: "Attendance Overview",
    icon: CalendarCheck,
    stat1: { label: "Attendance Today", value: "96.4%" },
    stat2: { label: "Fees Collected", value: "Rs 2.1M" },
    rows: [
      { icon: Bell, text: "Result cards published", time: "2m ago" },
      { icon: TrendingUp, text: "Enrollment up 12% this term", time: "1h ago" },
    ],
  },
  {
    label: "Fee Management",
    icon: Wallet,
    stat1: { label: "Vouchers Sent", value: "1,240" },
    stat2: { label: "Pending Dues", value: "Rs 340K" },
    rows: [
      { icon: Bell, text: "Reminder sent to 84 parents", time: "5m ago" },
      { icon: TrendingUp, text: "Collection rate up 8% this month", time: "3h ago" },
    ],
  },
  {
    label: "Parent App Activity",
    icon: Smartphone,
    stat1: { label: "Active Parents", value: "3,802" },
    stat2: { label: "Messages Sent", value: "612" },
    rows: [
      { icon: Bell, text: "Homework diary updated", time: "10m ago" },
      { icon: TrendingUp, text: "App engagement up 21% this week", time: "2h ago" },
    ],
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const activeSlide = slides[active];
  const ActiveIcon = activeSlide.icon;

  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-24 sm:pt-28 sm:pb-32">
      {/* Subtle dot-grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(theme(colors.brand.100)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 -z-10 h-96 w-96 rounded-full bg-brand-100 blur-3xl opacity-40"
      />

      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
          {/* Left: copy */}
          <div className="flex flex-col gap-8">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-100 bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-700 shadow-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-600" />
              </span>
              Now live in 50+ schools across Pakistan
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] tracking-tight text-slate-900">
              Run your entire school,
              <br className="hidden sm:block" />{" "}
              <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
                from one dashboard.
              </span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-slate-600">
              Ilm Sync brings attendance, fees, results, and parent
              communication into a single easy-to-use system — built for
              schools and Colleges that want less paperwork and more clarity.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="/request-demo" icon={ArrowRight}>
                Request a Free Demo
              </Button>
              <Button href="/features" variant="secondary" icon={PlayCircle}>
                See How It Works
              </Button>
            </div>

            {/* Social proof row */}
            <div className="flex flex-wrap items-center gap-5 pt-2">
              <div className="flex -space-x-2.5">
                {avatarInitials.map((initials) => (
                  <div
                    key={initials}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-brand-600 text-xs font-semibold text-white"
                  >
                    {initials}
                  </div>
                ))}
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-brand-100 text-xs font-semibold text-brand-700">
                  +
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-brand-500 text-brand-500" />
                  ))}
                  <span className="ml-1.5 text-sm font-semibold text-slate-900">4.9/5</span>
                </div>
                <p className="text-xs text-slate-500">
                  from 50+ schools & Colleges
                </p>
              </div>
            </div>
          </div>

          {/* Right: rotating product mockup */}
          <div className="relative">
            <div className="relative rounded-2xl border border-slate-200/80 bg-white shadow-2xl shadow-slate-900/10">
              {/* fake browser bar */}
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
                  <ActiveIcon className="h-3.5 w-3.5 text-brand-500" />
                  {activeSlide.label}
                </div>
              </div>

              {/* content area — fixed height so slides don't jump */}
              <div className="relative h-[280px] overflow-hidden p-5">
                {slides.map((slide, index) => (
                  <div
                    key={slide.label}
                    className={`absolute inset-0 p-5 transition-all duration-500 ease-out ${index === active
                      ? "translate-x-0 opacity-100"
                      : index < active
                        ? "-translate-x-4 opacity-0"
                        : "translate-x-4 opacity-0"
                      }`}
                  >
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                      <div>
                        <p className="text-xs font-medium text-slate-400">Overview</p>
                        <p className="text-lg font-bold text-slate-900">
                          Professional Schooling System
                        </p>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-brand-600 flex items-center justify-center text-white font-semibold">
                        AH
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 py-5">
                      <div className="rounded-xl bg-brand-600 p-4 text-white">
                        <p className="text-xs font-medium text-brand-100">
                          {slide.stat1.label}
                        </p>
                        <p className="mt-1 text-2xl font-bold">{slide.stat1.value}</p>
                      </div>
                      <div className="rounded-xl bg-brand-50 p-4">
                        <p className="text-xs font-medium text-brand-700">
                          {slide.stat2.label}
                        </p>
                        <p className="mt-1 text-2xl font-bold text-slate-900">
                          {slide.stat2.value}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 border-t border-slate-100 pt-4">
                      {slide.rows.map((row) => (
                        <div
                          key={row.text}
                          className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3"
                        >
                          <div className="flex items-center gap-3">
                            <row.icon className="h-4 w-4 text-brand-600" />
                            <span className="text-sm text-slate-700">{row.text}</span>
                          </div>
                          <span className="text-xs text-slate-400">{row.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* dot indicators */}
              <div className="flex items-center justify-center gap-2 border-t border-slate-100 py-3.5">
                {slides.map((slide, index) => (
                  <button
                    key={slide.label}
                    type="button"
                    aria-label={`Show ${slide.label}`}
                    onClick={() => setActive(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${index === active ? "w-6 bg-brand-600" : "w-1.5 bg-slate-200"
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* floating badge */}
            <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-xl bg-white p-4 shadow-xl ring-1 ring-slate-100">
              <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center">
                <CheckCircle2 className="h-5 w-5 text-brand-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Setup takes 1 day</p>
                <p className="text-xs text-slate-500">Guided onboarding included</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}