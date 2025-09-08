import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-hero mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-text-body max-w-3xl mx-auto">
            Ready to transform your business? We'd love to hear from you. 
            Reach out and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-text-hero mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-hero mb-2">
                    First Name *
                  </label>
                  <Input 
                    type="text" 
                    placeholder="John" 
                    required 
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-hero mb-2">
                    Last Name *
                  </label>
                  <Input 
                    type="text" 
                    placeholder="Doe" 
                    required 
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-hero mb-2">
                  Email Address *
                </label>
                <Input 
                  type="email" 
                  placeholder="john@company.com" 
                  required 
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-hero mb-2">
                  Company
                </label>
                <Input 
                  type="text" 
                  placeholder="Your Company Name" 
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-hero mb-2">
                  Message *
                </label>
                <Textarea 
                  placeholder="Tell us about your project and how we can help..."
                  rows={5}
                  required 
                  className="w-full"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-text-hero mb-6">Contact Information</h3>
              <p className="text-text-body mb-8">
                Our team is here to help. Choose the best way to reach us and we'll 
                respond as quickly as possible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-hero mb-1">Office Address</h4>
                  <p className="text-text-body">
                    123 Business Drive, Suite 100<br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-hero mb-1">Phone</h4>
                  <p className="text-text-body">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-hero mb-1">Email</h4>
                  <p className="text-text-body">hello@businesscorp.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-hero mb-1">Business Hours</h4>
                  <p className="text-text-body">
                    Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                    Weekend: Emergency support only
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-transparent rounded-xl p-6 border border-primary/20">
              <h4 className="font-semibold text-text-hero mb-2">Quick Response Guarantee</h4>
              <p className="text-text-body text-sm">
                We typically respond to all inquiries within 2 hours during business hours. 
                For urgent matters, please call our direct line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;