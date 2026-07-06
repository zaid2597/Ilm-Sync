import { ArrowRight, PhoneCall } from "lucide-react";
import Container from "@/components/shared/Container";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-brand-600 py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-500 opacity-50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-700 opacity-50 blur-3xl"
      />

      <Container>
        <div className="relative flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Ready to simplify your school&apos;s daily operations?
          </h2>
          <p className="max-w-xl text-brand-100">
            Join hundreds of schools and madrasas already running attendance,
            fees, and communication on Ilm Sync — free setup included.
          </p>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            <Button
              href="/request-demo"
              variant="secondary"
              icon={ArrowRight}
              className="bg-white text-brand-700 ring-0 hover:bg-brand-50"
            >
              Request a Free Demo
            </Button>
            <Button
              href="/contact"
              variant="ghost"
              icon={PhoneCall}
              className="text-white ring-1 ring-inset ring-white/30 hover:bg-white/10"
            >
              Talk to Our Team
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
