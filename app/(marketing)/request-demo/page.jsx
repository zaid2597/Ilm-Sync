"use client";

import { useState } from "react";
import { CheckCircle2, CalendarCheck, ShieldCheck, Users } from "lucide-react";
import Container from "@/components/shared/Container";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const perks = [
  {
    icon: CalendarCheck,
    text: "30-minute guided walkthrough",
  },
  {
    icon: Users,
    text: "Tailored to your institute&apos;s size",
  },
  {
    icon: ShieldCheck,
    text: "No commitment, no credit card",
  },
];

export default function RequestDemoPage() {
  const [formData, setFormData] = useState({
    schoolName: "",
    contactName: "",
    email: "",
    phone: "",
    city: "",
    studentCount: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire this up to your backend / CRM
    setSubmitted(true);
  }

  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 sm:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[500px] bg-gradient-to-b from-brand-50 via-white to-white"
      />
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-5">
          {/* Left: copy */}
          <div className="lg:col-span-2 lg:sticky lg:top-24">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-700 ring-1 ring-inset ring-brand-100">
              Request a Demo
            </span>
            <h1 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              See Ilm Sync working for your institute
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Fill out the form and our team will schedule a free, no-obligation
              walkthrough tailored to your school or madrasa.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {perks.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center gap-3 py-10 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Demo request received!
                  </h3>
                  <p className="text-sm text-slate-600">
                    Our team will reach out within one business day to
                    schedule your walkthrough.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <Input
                    id="schoolName"
                    name="schoolName"
                    label="School / Madrasa Name"
                    placeholder="e.g. Al-Noor Grammar School"
                    value={formData.schoolName}
                    onChange={handleChange}
                    required
                  />

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Input
                      id="contactName"
                      name="contactName"
                      label="Your Name"
                      placeholder="Full name"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      id="phone"
                      name="phone"
                      label="Phone Number"
                      placeholder="03XX XXXXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Input
                    id="email"
                    name="email"
                    type="email"
                    label="Email Address"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Input
                      id="city"
                      name="city"
                      label="City"
                      placeholder="e.g. Karachi"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      id="studentCount"
                      name="studentCount"
                      label="Number of Students"
                      placeholder="e.g. 350"
                      value={formData.studentCount}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" icon={CalendarCheck} className="w-fit">
                    Schedule My Demo
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}