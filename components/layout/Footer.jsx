import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Container from "@/components/shared/Container";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Fee Management", href: "/features" },
  { label: "Attendance Sync", href: "/features" },
  { label: "Parent Portal", href: "/features" },
  { label: "Reports & Analytics", href: "/features" },
  { label: "WhatsApp Notifications", href: "/features" },
  { label: "Result Cards", href: "/features" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-100 bg-white">
      {/* faint top accent line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent"
      />

      <Container className="py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand & Social */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex shrink-0 items-center">
              <Image
                src="/logo.png"
                alt="Ilm Sync"
                width={200}
                height={200}
                priority
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-600 max-w-xs">
              An all-in-one school management system for attendance, fees,
              results, and parent communication — built for schools and
              Colleges across Pakistan.
            </p>

            <div className="mt-2 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600 hover:text-white hover:shadow-md"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Company */}
          <div>
            <h4 className="text-base font-bold text-slate-900">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 hover:text-brand-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-base font-bold text-slate-900">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 hover:text-brand-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Get in Touch */}
          <div>
            <h4 className="text-base font-bold text-slate-900">
              Get in Touch
            </h4>
            <div className="mt-4 flex flex-col gap-3.5 text-sm text-slate-600">
              <a
                href="mailto:support@ilmsync.com"
                className="flex items-center gap-3 transition-colors duration-200 hover:text-brand-600"
              >
                <Mail className="h-4 w-4 shrink-0 text-brand-600" />
                <span>support@ilmsync.com</span>
              </a>
              <a
                href="tel:+923330271688"
                className="flex items-center gap-3 transition-colors duration-200 hover:text-brand-600"
              >
                <Phone className="h-4 w-4 shrink-0 text-brand-600" />
                <span>+92 333 0271688</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-brand-600" />
                <span>Karachi, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="mt-12 border-t border-slate-100 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:grid md:grid-cols-3 text-sm text-slate-500">
            <div className="flex items-center justify-center md:justify-start">
              <Link href="/privacy-policy" className="transition-colors duration-200 hover:text-brand-600">
                Privacy Policy
              </Link>
            </div>
            <p className="text-center">
              © {new Date().getFullYear()} Ilm Sync. All rights reserved.
            </p>
            <div className="flex items-center justify-center md:justify-end">
              <Link href="/terms-conditions" className="transition-colors duration-200 hover:text-brand-600">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
