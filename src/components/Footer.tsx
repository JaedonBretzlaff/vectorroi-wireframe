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
    <footer className="bg-primary text-primary-foreground border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="wireframe-image wireframe-image-sm rounded-full">
                Logo
              </div>
              <span className="text-xl font-bold">Company Name</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
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
                    className="text-muted-foreground hover:text-primary-foreground transition-colors"
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
                    className="text-muted-foreground hover:text-primary-foreground transition-colors"
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
                    className="text-muted-foreground hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                📧 hello@businesscorp.com
              </p>
              <p className="text-muted-foreground text-sm">
                📞 +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;