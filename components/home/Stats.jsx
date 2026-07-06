"use client";

import { School, Users, GraduationCap, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/shared/Container";

const stats = [
  {
    icon: School,
    value: "500+",
    label: "Schools & Madrasas",
  },
  {
    icon: Users,
    value: "250K+",
    label: "Students Managed",
  },
  {
    icon: GraduationCap,
    value: "18K+",
    label: "Teachers Active",
  },
  {
    icon: Clock,
    value: "6+",
    label: "Years Serving Institutes",
  },
];

function parseValue(value) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { number: 0, suffix: value };
  return { number: parseInt(match[1], 10), suffix: match[2] };
}

function useCountUp(target, shouldStart, duration = 1400) {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!shouldStart || startedRef.current) return;
    startedRef.current = true;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    let raf;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shouldStart, target, duration]);

  return count;
}

function StatCard({ icon: Icon, value, label, index, isVisible }) {
  const { number, suffix } = parseValue(value);
  const count = useCountUp(number, isVisible, 1200 + index * 150);

  return (
    <div
      className={`group flex flex-col items-center gap-3 px-4 py-6 text-center transition-all duration-700 ease-out sm:py-2 ${
        index === 0 ? "sm:pl-0" : ""
      } ${index === stats.length - 1 ? "sm:pr-0" : ""} ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: isVisible ? `${index * 120}ms` : "0ms" }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-600 group-hover:ring-brand-500">
        <Icon className="h-5 w-5 text-brand-200 transition-colors duration-300 group-hover:text-white" />
      </div>
      <div>
        <p className="text-3xl sm:text-4xl font-bold tabular-nums text-white">
          {count}
          {suffix}
        </p>
        <p className="mt-1.5 text-sm text-brand-200/80">{label}</p>
      </div>
    </div>
  );
}

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-brand-900 py-16 sm:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/4 top-0 -z-0 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-500 opacity-20 blur-3xl animate-pulse-slow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 bottom-0 -z-0 h-72 w-72 translate-y-1/2 rounded-full bg-brand-400 opacity-10 blur-3xl animate-pulse-slow"
        style={{ animationDelay: "1.5s" }}
      />

      <Container>
        <div
          className={`relative mb-10 text-center transition-all duration-700 ease-out sm:mb-14 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-300">
            Trusted at Scale
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Numbers that speak for themselves
          </h2>
        </div>

        <div className="relative grid grid-cols-2 divide-y divide-white/10 sm:grid-cols-4 sm:divide-y-0 sm:divide-x">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              {...stat}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}