"use client";

import { useEffect, useRef, useState } from "react";
import { UserPlus, Settings2, LayoutDashboard, LineChart } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create Your Account",
    description:
      "Sign up and tell us about your institute — school, madrasa, or academy, any size.",
  },
  {
    number: "02",
    icon: Settings2,
    title: "Add Students & Staff",
    description:
      "Import your existing records or add classes, students, and teachers with our guided setup.",
  },
  {
    number: "03",
    icon: LayoutDashboard,
    title: "Run Daily Operations",
    description:
      "Mark attendance, collect fees, record results, and message parents — all from one dashboard.",
  },
  {
    number: "04",
    icon: LineChart,
    title: "Track & Grow",
    description:
      "Use built-in reports to spot trends in attendance, fees, and performance across your institute.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-brand-50/50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Getting started is simple"
          title="Up and running in four steps"
          description="Most institutes are fully onboarded on Ilm Sync within a single day, with free guided setup."
        />

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* connecting line for large screens — animates in */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-px origin-left bg-brand-200 lg:block"
          >
            <div
              className={`h-full bg-brand-500 transition-transform duration-[1400ms] ease-out ${
                isVisible ? "scale-x-100" : "scale-x-0"
              }`}
              style={{ transformOrigin: "left" }}
            />
          </div>

          {steps.map(({ number, icon: Icon, title, description }, index) => (
            <div
              key={number}
              className={`group relative flex flex-col gap-4 transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white shadow-md shadow-brand-600/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-600/40">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-bold tracking-widest text-brand-300 transition-colors duration-300 group-hover:text-brand-400">
                {number}
              </span>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}