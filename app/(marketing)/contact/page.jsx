"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Container from "@/components/shared/Container";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import TeamSection from "@/components/contact/TeamSection";

const contactDetails = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+92 333 0271688",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "support@ilmsync.com",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Gulshan-e-Iqbal, Karachi, Pakistan",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon – Sat, 9:00 AM – 6:00 PM",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire this up to your backend / email service
    setSubmitted(true);
  }

  return (
    <>
      <section className="relative overflow-hidden bg-white pt-16 pb-20 sm:pt-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[500px] bg-gradient-to-b from-brand-50 via-white to-white"
        />
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-700 ring-1 ring-inset ring-brand-100">
              Contact Us
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              We&apos;d love to hear from you
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Have questions about Ilm Sync? Send us a message and our team
              will get back to you within one business day.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <div className="flex flex-col gap-5">
                {contactDetails.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-start gap-4 rounded-2xl bg-brand-50/60 p-5 ring-1 ring-brand-100"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {label}
                      </p>
                      <p className="mt-1 text-sm text-slate-600">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
                {submitted ? (
                  <div className="flex flex-col items-center gap-3 py-10 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                      <Send className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Message sent!
                    </h3>
                    <p className="text-sm text-slate-600">
                      Thanks for reaching out. Our team will contact you
                      shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <Input
                        id="name"
                        name="name"
                        label="Full Name"
                        placeholder="Your name"
                        value={formData.name}
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

                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-slate-700"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Tell us about your institute and what you need..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors duration-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
                      />
                    </div>

                    <Button type="submit" icon={Send} className="w-fit">
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <TeamSection />
    </>
  );
}