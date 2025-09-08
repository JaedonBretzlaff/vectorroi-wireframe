const Footer = () => {
  const navigation = {
    main: [
      { name: 'Home', href: '#home' },
      { name: 'How it works', href: '#how-it-works' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'About', href: '#about' },
      { name: 'Contact', href: '#contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
    ],
    social: [
      { name: 'Twitter', href: '#' },
      { name: 'LinkedIn', href: '#' },
      { name: 'Facebook', href: '#' },
      { name: 'YouTube', href: '#' },
    ]
  };

  return (
    <footer className="bg-text-hero text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold">BusinessCorp</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Transforming business operations with innovative solutions that help companies 
              scale efficiently and effectively.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <ul className="space-y-3 mb-6">
              {navigation.social.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="space-y-2">
              <p className="text-white/70 text-sm">
                📧 hello@businesscorp.com
              </p>
              <p className="text-white/70 text-sm">
                📞 +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-sm">
              © 2024 BusinessCorp. All rights reserved.
            </p>
            <p className="text-white/70 text-sm">
              Made with ❤️ for modern businesses
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;