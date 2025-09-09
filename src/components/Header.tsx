import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3">
            <div className="wireframe-image wireframe-image-sm rounded-full">
              Logo
            </div>
            <span className="text-xl font-bold text-text-hero">Company Name</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-text-body hover:text-primary transition-colors">
              Home
            </a>
            <a href="#how-it-works" className="text-text-body hover:text-primary transition-colors">
              How it works
            </a>
            <a href="#pricing" className="text-text-body hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-text-body hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-text-body hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <Button variant="cta" size="lg" className="px-8 py-6 rounded-lg min-w-[200px]">
            CTA
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;