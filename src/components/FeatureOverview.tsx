import { CheckCircle, Zap, Shield, Users, BarChart3, Clock } from "lucide-react";

const FeatureOverview = () => {
  const features = [
    { icon: Zap, title: "Lightning Fast Performance", description: "Optimized for speed and efficiency" },
    { icon: Shield, title: "Enterprise Security", description: "Bank-level security protocols" },
    { icon: Users, title: "Team Collaboration", description: "Seamless team workflow management" },
    { icon: BarChart3, title: "Advanced Analytics", description: "Data-driven insights and reporting" },
    { icon: Clock, title: "24/7 Support", description: "Round-the-clock customer assistance" },
    { icon: CheckCircle, title: "Easy Integration", description: "Connects with your existing tools" },
  ];

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        {/* Hook Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-hero mb-6">
            Why Choose BusinessCorp?
          </h2>
          <p className="text-xl text-text-body max-w-3xl mx-auto leading-relaxed">
            Our comprehensive solution eliminates inefficiencies and empowers your team to focus on what matters most. 
            Join thousands of successful businesses that have transformed their operations with our platform.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-card hover:shadow-feature transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-feature-gradient p-3 rounded-lg">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-hero mb-2">{feature.title}</h3>
                  <p className="text-text-body text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureOverview;