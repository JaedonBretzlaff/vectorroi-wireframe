const CommitmentSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-hover">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Our Commitment to Your Success
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <blockquote className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed mb-6">
              "At BusinessCorp, we don't just provide software – we partner with you for long-term success. 
              Our commitment goes beyond implementation to ensure your business achieves its full potential."
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">JD</span>
              </div>
              <div className="text-left">
                <p className="text-white font-semibold text-lg">John Davidson</p>
                <p className="text-white/80">CEO & Founder, BusinessCorp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;