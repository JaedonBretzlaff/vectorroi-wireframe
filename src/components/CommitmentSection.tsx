const CommitmentSection = () => {
  const results = [
    { metric: "99.9%", label: "Uptime Guarantee" },
    { metric: "24/7", label: "Support Available" },
    { metric: "48hr", label: "Response Time" },
    { metric: "100%", label: "Success Rate" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-hover">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Our Commitment to Your Success
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Quote Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <blockquote className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed mb-6">
                "At Company Name, we don't just provide software – we partner with you for long-term success. 
                Our commitment goes beyond implementation to ensure your business achieves its full potential."
              </blockquote>
              
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">JD</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">John Davidson</p>
                  <p className="text-white/80">CEO & Founder, Company Name</p>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="grid grid-cols-2 gap-6">
              {results.map((result, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {result.metric}
                  </div>
                  <div className="text-white/80 text-sm font-medium">
                    {result.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;