import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Award, Handshake, Rocket, Users } from "lucide-react";

const DifferentiatorSection = () => {
  const differentiators = [
    {
      icon: Star,
      title: "Industry-Leading Innovation",
      description: "Cutting-edge technology that stays ahead of market trends"
    },
    {
      icon: TrendingUp,
      title: "Proven ROI Results",
      description: "Average 300% return on investment within first 6 months"
    },
    {
      icon: Award,
      title: "Award-Winning Platform",
      description: "Recognized by industry experts and customer satisfaction awards"
    },
    {
      icon: Handshake,
      title: "White-Glove Onboarding",
      description: "Dedicated success team ensures smooth implementation"
    },
    {
      icon: Rocket,
      title: "Scalable Architecture",
      description: "Grows with your business from startup to enterprise"
    },
    {
      icon: Users,
      title: "Customer-First Approach",
      description: "Built based on feedback from over 10,000 active users"
    }
  ];

  const competitorData = [
    { metric: "Implementation Time", us: "1 week", competitor1: "3-6 months", competitor2: "2-4 months" },
    { metric: "Customer Support", us: "24/7 Live Chat", competitor1: "Email Only", competitor2: "Business Hours" },
    { metric: "Customization", us: "Fully Customizable", competitor1: "Limited", competitor2: "Template-based" },
    { metric: "Pricing Model", us: "Transparent", competitor1: "Hidden Fees", competitor2: "Complex Tiers" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-hero mb-6">
            How We're Different
          </h2>
          <p className="text-xl text-text-body max-w-3xl mx-auto">
            While others promise, we deliver. Our unique approach combines cutting-edge technology 
            with personalized service to ensure your success.
          </p>
        </div>

        {/* Differentiator Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {differentiators.map((item, index) => (
            <div 
              key={index}
              className="flex items-center space-x-4 p-6 bg-gradient-to-r from-feature-gradient to-transparent rounded-xl border border-border hover:shadow-feature transition-all duration-300"
            >
              <div className="bg-primary p-3 rounded-lg">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-text-hero mb-1">{item.title}</h3>
                <p className="text-text-body text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Chart */}
        <div className="bg-section-bg rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-text-hero text-center mb-8">
            See How We Compare
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-text-body font-medium">Feature</th>
                  <th className="text-center py-4 px-4 text-primary font-bold">BusinessCorp</th>
                  <th className="text-center py-4 px-4 text-text-body font-medium">Competitor A</th>
                  <th className="text-center py-4 px-4 text-text-body font-medium">Competitor B</th>
                </tr>
              </thead>
              <tbody>
                {competitorData.map((row, index) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium text-text-hero">{row.metric}</td>
                    <td className="py-4 px-4 text-center">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {row.us}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center text-text-body">{row.competitor1}</td>
                    <td className="py-4 px-4 text-center text-text-body">{row.competitor2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="px-8 py-6 text-lg">
            Experience the Difference
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorSection;