import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const founders = [
    {
      name: "Sarah Johnson",
      title: "CEO & Co-Founder",
      credentials: "MBA Harvard, Former VP at TechCorp",
      bio: "Sarah brings 15+ years of enterprise software experience and a passion for helping businesses scale efficiently. She previously led digital transformation initiatives at Fortune 500 companies."
    },
    {
      name: "Michael Chen", 
      title: "CTO & Co-Founder",
      credentials: "PhD Computer Science MIT, Ex-Google Principal Engineer",
      bio: "Michael is a renowned technologist who has built scalable systems serving millions of users. His expertise in distributed systems and AI drives our platform's technical excellence."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-hero mb-6">
            About Company Name
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-text-body leading-relaxed mb-8">
              Founded in 2018, Company Name emerged from the simple belief that business operations 
              shouldn't be complicated. Our founders, frustrated by inefficient legacy systems, 
              set out to create a solution that would truly transform how modern businesses operate.
            </p>
            <p className="text-lg text-text-body leading-relaxed">
              Today, we serve over 10,000 businesses worldwide, from innovative startups to established 
              enterprises. Our mission remains unchanged: to simplify business operations and unlock 
              the full potential of every organization we serve.
            </p>
          </div>
        </div>

        {/* Founders Section */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
          {founders.map((founder, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6 inline-block">
                <div className="wireframe-image wireframe-image-md rounded-full">
                  Image
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-hero-gradient rounded-full opacity-20 blur-xl"></div>
              </div>
              <h3 className="text-2xl font-bold text-text-hero mb-2">{founder.name}</h3>
              <p className="text-primary font-semibold mb-2">{founder.title}</p>
              <p className="text-sm text-text-body font-medium mb-4">{founder.credentials}</p>
              <p className="text-text-body leading-relaxed">{founder.bio}</p>
            </div>
          ))}
        </div>

        {/* Forward Looking Message */}
        <div className="bg-gradient-to-r from-section-bg to-primary/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-text-hero mb-4">
            Building the Future of Business Operations
          </h3>
          <p className="text-lg text-text-body max-w-3xl mx-auto leading-relaxed">
            As we look ahead, we're committed to continued innovation and excellence. 
            Our roadmap includes AI-powered insights, advanced automation capabilities, 
            and even deeper integrations to help your business stay ahead of the curve.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="px-8 py-6 text-lg rounded-lg min-w-[200px]">
            CTA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;