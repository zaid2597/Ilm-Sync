"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { X, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function MobileMenu({ isOpen, onClose, navLinks = [] }) {
  const [mounted, setMounted] = useState(false);

  // Only render portal on client (avoids SSR document errors)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const menu = (
    <div className="fixed inset-0 z-[9999] lg:hidden">
      {/* backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className="fixed inset-0 z-[9999] bg-slate-900/50 backdrop-blur-sm"
      />

      {/* drawer */}
      <div
        className="fixed inset-y-0 right-0 z-[10000] flex h-full w-full max-w-xs flex-col
                   overflow-hidden bg-white shadow-2xl"
      >
        {/* header - fixed, doesn't shrink */}
        <div className="flex shrink-0 items-center justify-between p-6 pb-2">
          <Link href="/" className="flex shrink-0 items-center" onClick={onClose}>
            <Image
              src="/logo.png"
              alt="Ilm Sync"
              width={160}
              height={64}
              priority
              className="h-14 w-auto object-contain"
            />
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-50"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* nav links - scrollable, takes remaining space */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* footer button - fixed at bottom, never overlaps */}
        <div className="shrink-0 border-t border-slate-100 p-6 pt-4">
          <Button href="/request-demo" icon={ArrowRight} className="w-full" onClick={onClose}>
            Request a Demo
          </Button>
        </div>
      </div>
    </div>
  );

  return createPortal(menu, document.body);
}
