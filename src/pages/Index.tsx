import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import CTAFooter from "@/components/landing/CTAFooter";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <CTAFooter />
    </main>
  );
};

export default Index;
