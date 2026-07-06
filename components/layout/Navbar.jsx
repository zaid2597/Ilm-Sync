"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ArrowRight } from "lucide-react";
import Container from "@/components/shared/Container";
import Button from "@/components/ui/Button";
import MobileMenu from "@/components/layout/MobileMenu";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 shadow-sm backdrop-blur-md">
      <Container>
        <nav className="flex h-24 items-center justify-between lg:h-28">
          {/* Logo */}
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

          {/* Desktop links */}
          <div className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-[15px] font-medium text-slate-700 transition-colors duration-200 hover:text-brand-600"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-brand-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              href="/request-demo"
              icon={ArrowRight}
              className="shadow-md shadow-brand-600/20"
            >
              Request a Demo
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition-colors duration-200 hover:bg-slate-50 lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </Container>

      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        navLinks={navLinks}
      />
    </header>
  );
}