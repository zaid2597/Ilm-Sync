import Link from "next/link";
import Image from "next/image";
import { GraduationCap, Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Container from "@/components/shared/Container";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Request a Demo", href: "/request-demo" },
    { label: "Gallery", href: "/gallery" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "FAQs", href: "/faqs" },
    { label: "Testimonials", href: "/testimonials" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-conditions" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

function FooterLink({ href, label }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1 text-sm text-slate-600 transition-colors duration-200 hover:text-brand-600"
    >
      <span className="relative">
        {label}
        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-brand-600 transition-all duration-300 group-hover:w-full" />
      </span>
      <ArrowUpRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-100 bg-white">
      {/* faint top accent line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent"
      />

      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/logo.png"
              alt="Ilm Sync"
              width={200}
              height={200}
              priority
              className="h-20 w-auto object-contain lg:h-22"
            />
          </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              An all-in-one school management system for attendance, fees,
              results, and parent communication — built for schools and
              madrasas across Pakistan.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href="tel:+923001234567"
                className="group flex items-center gap-3 text-sm text-slate-600 transition-colors duration-200 hover:text-brand-600"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-50 transition-colors duration-200 group-hover:bg-brand-100">
                  <Phone className="h-3.5 w-3.5 text-brand-600" />
                </span>
                +92 300 1234567
              </a>
              <a
                href="mailto:support@ilmsync.com"
                className="group flex items-center gap-3 text-sm text-slate-600 transition-colors duration-200 hover:text-brand-600"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-50 transition-colors duration-200 group-hover:bg-brand-100">
                  <Mail className="h-3.5 w-3.5 text-brand-600" />
                </span>
                support@ilmsync.com
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-50">
                  <MapPin className="h-3.5 w-3.5 text-brand-600" />
                </span>
                Karachi, Pakistan
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600 hover:text-white hover:shadow-md hover:shadow-brand-600/20"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-3">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="text-sm font-semibold text-slate-900">
                  {heading}
                </h4>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <FooterLink href={link.href} label={link.label} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Ilm Sync. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">Made with care in Pakistan</p>
        </div>
      </Container>
    </footer>
  );
}
