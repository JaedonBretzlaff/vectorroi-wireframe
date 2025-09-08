import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureOverview from "@/components/FeatureOverview";
import DifferentiatorSection from "@/components/DifferentiatorSection";
import CommitmentSection from "@/components/CommitmentSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PipelineSection from "@/components/PipelineSection";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeatureOverview />
        <DifferentiatorSection />
        <CommitmentSection />
        <HowItWorksSection />
        <PipelineSection />
        <PricingSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
