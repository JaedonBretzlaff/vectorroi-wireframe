import { Settings, Users, BarChart, CheckCircle } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      icon: Settings,
      title: "Setup & Configuration",
      description: "Our team helps you configure the platform to match your specific business needs and workflow requirements."
    },
    {
      number: "2", 
      icon: Users,
      title: "Team Onboarding",
      description: "We provide comprehensive training and onboarding to ensure your team is confident and productive from day one."
    },
    {
      number: "3",
      icon: BarChart,
      title: "Launch & Monitor",
      description: "Go live with full support and real-time monitoring to track performance and optimize your processes."
    },
    {
      number: "4",
      icon: CheckCircle,
      title: "Scale & Optimize",
      description: "Continuously improve and scale your operations with our ongoing support and feature updates."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-hero mb-6">
            How It Works
          </h2>
          <p className="text-xl text-text-body max-w-3xl mx-auto">
            Getting started is simple. Our proven 4-step process ensures you're up and running quickly with maximum impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                {/* Number Badge */}
                <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="bg-white rounded-lg p-4 shadow-card inline-block">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                {/* Connecting Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-primary/30 transform translate-x-8"></div>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-text-hero mb-3">{step.title}</h3>
              <p className="text-text-body">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;