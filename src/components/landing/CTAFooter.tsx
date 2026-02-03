import { Button } from "@/components/ui/button";
import { Sparkles, Rocket } from "lucide-react";

const CTAFooter = () => {
  const handleGetStarted = () => {
    window.location.href = "/app";
  };

  return (
    <footer className="relative py-24 px-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-t from-ferretto-purple/20 via-ferretto-pink/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Floating elements */}
      <div className="absolute top-10 left-[10%] w-24 h-24 rounded-full bg-ferretto-purple/20 blur-2xl floating" />
      <div className="absolute bottom-10 right-[10%] w-32 h-32 rounded-full bg-ferretto-orange/15 blur-2xl floating-delayed" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-ferretto-purple/20 via-ferretto-pink/20 to-ferretto-orange/20 mb-8">
          <Rocket className="w-10 h-10 text-primary" />
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Ready to Transform{" "}
          <span className="gradient-text">Your Learning?</span>
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Join thousands of educators and students already using Ferretto Edu Pro 
          to revolutionize their educational experience.
        </p>

        {/* CTA Button */}
        <Button
          onClick={handleGetStarted}
          size="lg"
          className="relative px-12 py-8 text-xl font-bold rounded-2xl bg-gradient-to-r from-ferretto-purple via-ferretto-pink to-ferretto-orange text-primary-foreground glow-button animate-pulse-glow hover:scale-105 transition-transform duration-300"
        >
          <Sparkles className="w-6 h-6 mr-3" />
          Get Started Ferreto
        </Button>

        {/* Footer branding */}
        <div className="mt-16 pt-8 border-t border-border/30">
          <p className="text-muted-foreground">
            <span className="gradient-text font-bold">Ferretto Edu Pro</span>
            {" "}&copy; {new Date().getFullYear()}. Built for the future of education.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default CTAFooter;
