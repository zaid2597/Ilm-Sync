import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import FeaturesOverview from "@/components/home/FeaturesOverview";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <FeaturesOverview />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </main>
  );
}
