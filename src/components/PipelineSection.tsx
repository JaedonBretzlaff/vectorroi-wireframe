import pipelineDiagram from "@/assets/pipeline-diagram.jpg";

const PipelineSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-hero mb-6">
            Your Pipeline With Us
          </h2>
          <p className="text-xl text-text-body max-w-3xl mx-auto">
            See how your business processes transform with our integrated solution. 
            From lead generation to customer success, every step is optimized for maximum efficiency.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-section-bg to-white rounded-2xl p-8 shadow-feature">
            <img 
              src={pipelineDiagram} 
              alt="Business pipeline workflow diagram showing integrated process flow from lead generation to customer success"
              className="w-full h-auto rounded-lg shadow-card"
            />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-hero-gradient rounded-full opacity-10 blur-xl"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full opacity-20 blur-2xl"></div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">85%</div>
            <p className="text-text-body">Faster Processing</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">60%</div>
            <p className="text-body">Cost Reduction</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">95%</div>
            <p className="text-text-body">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PipelineSection;