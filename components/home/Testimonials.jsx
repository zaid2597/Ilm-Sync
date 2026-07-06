"use client";

import { Star, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";

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
];

function TestimonialCard({ quote, name, role, initials, index, isVisible }) {
  return (
    <div
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-brand-50/60 p-7 ring-1 ring-brand-100 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:bg-white hover:shadow-xl hover:shadow-brand-900/10 hover:ring-brand-200 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
    >
      {/* oversized decorative quote mark, revealed on hover */}
      <Quote
        aria-hidden="true"
        className="pointer-events-none absolute -right-3 -top-3 h-24 w-24 rotate-6 text-brand-200/0 transition-all duration-500 group-hover:text-brand-200/60 group-hover:rotate-3"
      />

      <div className="relative">
        <Quote className="h-7 w-7 text-brand-300 transition-colors duration-300 group-hover:text-brand-500" />
        <div className="mt-3 flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 fill-brand-500 text-brand-500 transition-all duration-300 ${
                isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible
                  ? `${index * 150 + 300 + i * 60}ms`
                  : "0ms",
              }}
            />
          ))}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-slate-700">
          &quot;{quote}&quot;
        </p>
      </div>

      <div className="relative mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white ring-2 ring-transparent transition-all duration-300 group-hover:ring-brand-200">
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">{name}</p>
          <p className="text-xs text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
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
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What institutes say"
          title="Trusted by school leaders across Pakistan"
          description="From single-campus academies to multi-branch school systems, administrators rely on Ilm Sync every day."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              {...testimonial}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}