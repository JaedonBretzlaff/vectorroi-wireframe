import { Button } from "@/components/ui/button";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="py-20 lg:py-32 bg-gradient-to-br from-background to-section-bg">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-hero leading-tight">
              Transform Your Business
              <span className="bg-hero-gradient bg-clip-text text-transparent block">
                Operations Today
              </span>
            </h1>
            
            <p className="text-xl text-text-body leading-relaxed max-w-2xl">
              Streamline your workflow, boost productivity, and scale your business with our 
              cutting-edge solution designed for modern enterprises.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                See How It Works
              </Button>
            </div>
          </div>

          {/* Right Dashboard Image */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-feature p-4">
              <img 
                src={heroDashboard} 
                alt="Business dashboard interface showing analytics and data visualization"
                className="w-full h-auto rounded-lg"
              />
            </div>
            {/* Floating elements for visual interest */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-hero-gradient rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full opacity-30 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;