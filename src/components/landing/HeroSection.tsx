import { Button } from "@/components/ui/button";
import { Sparkles, Zap, GraduationCap } from "lucide-react";

const HeroSection = () => {
  const handleGetStarted = () => {
    // This will be updated to navigate to the main app
    window.location.href = "/app";
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ferretto-purple/20 via-ferretto-pink/10 to-ferretto-orange/20 animate-gradient" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-ferretto-purple/30 blur-xl floating" />
      <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-ferretto-pink/20 blur-2xl floating-delayed" />
      <div className="absolute bottom-40 left-1/4 w-24 h-24 rounded-full bg-ferretto-orange/25 blur-xl floating" />
      <div className="absolute bottom-20 right-1/3 w-16 h-16 rounded-full bg-ferretto-cyan/30 blur-lg floating-delayed" />
      
      {/* Decorative icons */}
      <div className="absolute top-32 right-[15%] floating">
        <div className="glassmorphism p-4 rounded-2xl">
          <GraduationCap className="w-8 h-8 text-ferretto-purple" />
        </div>
      </div>
      <div className="absolute bottom-32 left-[15%] floating-delayed">
        <div className="glassmorphism p-4 rounded-2xl">
          <Zap className="w-8 h-8 text-ferretto-orange" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-ferretto-gold" />
          <span className="text-sm font-medium text-foreground/80">
            Next-Gen Learning Management System
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Transform Education with{" "}
          <span className="gradient-text">Ferretto Edu Pro</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Biometric attendance, smart course management, real-time collaboration, 
          and powerful analytics — all in one beautiful platform.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button
            onClick={handleGetStarted}
            size="lg"
            className="relative px-10 py-7 text-lg font-bold rounded-2xl bg-gradient-to-r from-ferretto-purple via-ferretto-pink to-ferretto-orange text-primary-foreground glow-button animate-pulse-glow hover:scale-105 transition-transform duration-300"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Get Started Ferreto
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-7 text-lg rounded-2xl border-border/50 hover:bg-muted/50 transition-all duration-300"
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Features
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          {[
            { value: "100%", label: "Browser-Based" },
            { value: "3", label: "User Roles" },
            { value: "∞", label: "Possibilities" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
