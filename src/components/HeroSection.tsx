import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="py-20 lg:py-32 bg-gradient-to-br from-background to-section-bg">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-hero leading-tight">
              Transform Your Business
              <span className="block">
                Operations Today
              </span>
            </h1>
            
            <p className="text-xl text-text-body leading-relaxed max-w-2xl">
              Streamline your workflow, boost productivity, and scale your business with our 
              cutting-edge solution designed for modern enterprises.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6 rounded-lg min-w-[200px]">
                CTA
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                See How It Works
              </Button>
            </div>
          </div>

          {/* Right Dashboard Image */}
          <div className="relative">
            <div className="relative bg-white rounded-lg border border-border p-4">
              <div className="wireframe-image wireframe-image-xl">
                Image
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;