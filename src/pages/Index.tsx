import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import DemoCredentials from "@/components/landing/DemoCredentials";
import CTAFooter from "@/components/landing/CTAFooter";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <DemoCredentials />
      <CTAFooter />
    </main>
  );
};

export default Index;
