import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 lg:py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl tracking-[0.3em] text-foreground mb-6">
              OBSQURA
            </h3>
            <p className="font-body text-muted-foreground max-w-sm leading-relaxed">
              Where mystery meets elegance. Handcrafted luxury jewelry for those 
              who appreciate the beauty in the obscure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-foreground mb-6">
              Explore
            </h4>
            <ul className="space-y-4">
              {["Collections", "New Arrivals", "Bespoke", "Gift Cards"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-foreground mb-6">
              Connect
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:obsqura.in@gmail.com"
                  className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  obsqura.in@gmail.com
                </a>
              </li>
              <li>
                <p className="font-body text-sm text-muted-foreground">
                  By Appointment Only
                </p>
              </li>
            </ul>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              {[Instagram, Facebook, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground tracking-wider">
            © 2024 OBSQURA. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            {["Privacy Policy", "Terms of Service", "Shipping"].map((link) => (
              <a
                key={link}
                href="#"
                className="font-body text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
