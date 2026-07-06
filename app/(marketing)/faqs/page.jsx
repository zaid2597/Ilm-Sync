"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/ui/Button";

const faqs = [
  {
    question: "How long does it take to set up Ilm Sync for my school?",
    answer:
      "Most institutes are fully onboarded within a single day. Our team guides you through importing student and staff records, and you can start using attendance and fee features right away.",
  },
  {
    question: "Can I import my existing student and staff records?",
    answer:
      "Yes. You can import records from Excel or your existing register format. Our onboarding team helps map your data correctly during setup.",
  },
  {
    question: "Does Ilm Sync work for madrasas as well as schools?",
    answer:
      "Yes, Ilm Sync is built to support both standard schools and madrasas, including features tailored to Islamic studies curriculum tracking.",
  },
  {
    question: "Is there a mobile app for parents?",
    answer:
      "Yes. Parents get access to a dedicated mobile app where they can view attendance, results, fee status, homework, and school announcements in real time.",
  },
  {
    question: "What happens to our data if we cancel?",
    answer:
      "Your data always belongs to your institute. If you decide to cancel, we provide a full export of all your records before closing your account.",
  },
  {
    question: "Do you offer training for our staff?",
    answer:
      "Yes, every plan includes free onboarding and training sessions for your administrative staff and teachers to get comfortable with the system.",
  },
  {
    question: "Can Ilm Sync handle multiple campuses under one account?",
    answer:
      "Yes. Our Premium plan is built specifically for multi-campus school systems, with a unified dashboard to manage all campuses from one place.",
  },
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState(0);

  function toggle(index) {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  }

  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 sm:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[500px] bg-gradient-to-b from-brand-50 via-white to-white"
      />
      <Container>
        <SectionHeading
          eyebrow="FAQs"
          title="Frequently asked questions"
          description="Everything you need to know about getting started with Ilm Sync."
        />

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-slate-100 rounded-2xl border border-slate-100">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm sm:text-base font-medium text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-brand-600 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-sm leading-relaxed text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-slate-600">Still have a question?</p>
          <Button href="/contact" icon={ArrowRight}>
            Contact Our Team
          </Button>
        </div>
      </Container>
    </section>
  );
}