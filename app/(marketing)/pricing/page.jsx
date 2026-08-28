"use client";

import { useState } from "react";
import { Check, ArrowRight, Sparkles, HelpCircle } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/ui/Button";

const plans = [
  {
    name: "Starter",
    monthly: 8000,
    annual: 6800,
    description: "For small academies just getting started.",
    highlighted: false,
    features: [
      "Up to 200 students",
      "Attendance tracking",
      "Fee management",
      "Basic result cards",
      "Email support",
    ],
  },
  {
    name: "Standard",
    monthly: 18000,
    annual: 15300,
    description: "For growing schools that need parent communication.",
    highlighted: true,
    features: [
      "Up to 800 students",
      "Everything in Starter",
      "Parent mobile app",
      "SMS & WhatsApp alerts",
      "Staff & HR management",
      "Priority support",
    ],
  },
  {
    name: "Premium",
    monthly: null,
    annual: null,
    description: "For multi-campus school systems and Colleges.",
    highlighted: false,
    features: [
      "Unlimited students",
      "Everything in Standard",
      "Multi-campus dashboard",
      "Transport & library modules",
      "Dedicated account manager",
      "Free onboarding & training",
    ],
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

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
              Pricing
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Simple pricing for every institute
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              No hidden fees. No long-term contracts. Choose the plan that
              fits your institute and upgrade anytime as you grow.
            </p>

            {/* Billing toggle */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white p-1.5 shadow-sm">
              <button
                type="button"
                onClick={() => setAnnual(false)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${!annual ? "bg-brand-600 text-white" : "text-slate-500"
                  }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setAnnual(true)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${annual ? "bg-brand-600 text-white" : "text-slate-500"
                  }`}
              >
                Annual
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-bold ${annual ? "bg-white/20 text-white" : "bg-brand-50 text-brand-700"
                    }`}
                >
                  Save 15%
                </span>
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing cards */}
      <section className="bg-white pb-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {plans.map((plan) => {
              const price = annual ? plan.annual : plan.monthly;
              const isCustom = price === null;

              if (plan.highlighted) {
                return (
                  <div key={plan.name} className="group relative pt-4 lg:-translate-y-4">
                    {/* animated glow behind the card */}
                    <div
                      aria-hidden="true"
                      className="absolute -inset-1 top-3 rounded-[1.5rem] bg-gradient-to-br from-brand-400 via-brand-500 to-brand-700 opacity-70 blur-xl transition-opacity duration-300 group-hover:opacity-100 animate-pulse"
                    />

                    {/* badge sits above everything, outside the clipped card */}
                    <span className="absolute left-1/2 top-0 z-20 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-brand-700 shadow-md">
                      <Sparkles className="h-3.5 w-3.5" />
                      Most Popular
                    </span>

                    {/* gradient border wrapper */}
                    <div className="relative rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 p-[1.5px] shadow-2xl shadow-brand-900/30 transition-transform duration-300 hover:-translate-y-2">
                      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-brand-600 p-8 pt-10">
                        <h3 className="text-lg font-semibold text-white">
                          {plan.name}
                        </h3>
                        <p className="mt-2 text-sm text-brand-100">
                          {plan.description}
                        </p>

                        <div className="mt-6 flex items-baseline gap-1">
                          <span className="text-4xl font-bold text-white">
                            Rs {price.toLocaleString()}
                          </span>
                          <span className="text-brand-100">/month</span>
                        </div>
                        {annual && (
                          <p className="mt-1 text-xs text-brand-200">
                            Billed annually
                          </p>
                        )}

                        <ul className="mt-8 flex flex-col gap-3">
                          {plan.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                              <span className="text-sm text-brand-50">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-8">
                          <Button
                            href="/request-demo"
                            variant="secondary"
                            icon={ArrowRight}
                            className="w-full bg-white text-brand-700 ring-0 hover:bg-brand-50"
                          >
                            Get Started
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={plan.name}
                  className="group relative flex flex-col rounded-2xl bg-white p-8 ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/10 hover:ring-brand-200"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    {plan.description}
                  </p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-slate-900">
                      {isCustom ? "Custom" : `Rs ${price.toLocaleString()}`}
                    </span>
                    {!isCustom && <span className="text-slate-500">/month</span>}
                  </div>
                  {annual && !isCustom && (
                    <p className="mt-1 text-xs text-brand-600">
                      Billed annually
                    </p>
                  )}

                  <ul className="mt-8 flex flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                        <span className="text-sm text-slate-600">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button
                      href="/request-demo"
                      variant="primary"
                      icon={ArrowRight}
                      className="w-full transition-transform duration-300 group-hover:scale-[1.02]"
                    >
                      {isCustom ? "Talk to Sales" : "Get Started"}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* FAQ pointer */}
      <section className="bg-brand-50/50 py-16">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col items-center gap-4 rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-slate-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <HelpCircle className="h-6 w-6" />
            </div>
            <SectionHeading
              title="Still have questions?"
              description="Check our frequently asked questions or talk to our team directly."
            />
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="/faqs" variant="secondary">
                View FAQs
              </Button>
              <Button href="/contact" icon={ArrowRight}>
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}