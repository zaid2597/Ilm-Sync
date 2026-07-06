import Link from "next/link";
import { Home, ArrowLeft, SearchX } from "lucide-react";
import Container from "@/components/shared/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[600px] bg-gradient-to-b from-brand-50 via-white to-white"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 -z-10 h-96 w-96 rounded-full bg-brand-100 blur-3xl opacity-60"
      />

      <Container>
        <div className="mx-auto flex max-w-lg flex-col items-center gap-6 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100">
            <SearchX className="h-8 w-8" />
          </div>

          <p className="text-sm font-semibold tracking-widest text-brand-600">
            ERROR 404
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            This page couldn&apos;t be found
          </h1>

          <p className="text-base leading-relaxed text-slate-600">
            The page you&apos;re looking for doesn&apos;t exist or may have been
            moved. Let&apos;s get you back to Ilm Sync.
          </p>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            <Button href="/" icon={Home}>
              Back to Home
            </Button>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-slate-600 hover:text-brand-700"
            >
              <ArrowLeft className="h-4 w-4" />
              Contact Support
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
