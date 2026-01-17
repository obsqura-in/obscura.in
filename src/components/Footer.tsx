import { Instagram, Facebook, Mail } from "lucide-react";
const Footer = () => {
  return <footer id="contact" className="py-16 lg:py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl tracking-[0.3em] text-foreground mb-6">
              OBSQURA
            </h3>
            <p className="font-body max-w-sm leading-relaxed text-secondary-foreground text-base">
              Obsqura was born from a desire to create jewelry that feels personal, not ordinary.  In a world of repetitive designs, we chose to offer variety that carries depth, intention, and quiet luxury.  
 
 
 

            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-6 text-primary">
              Explore
            </h4>
            <ul className="space-y-4">
              {["Collections", "New Arrivals", "Bespoke", "Gift Cards"].map(link => <li key={link}>
                  <a href="#" className="font-body text-sm transition-colors duration-300 text-secondary-foreground">
                    {link}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-foreground mb-6">
              Connect
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:obsqura.in@gmail.com" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                  obsqura.in@gmail.com
                </a>
              </li>
              <li>
                <p className="font-body text-sm text-muted-foreground">
              </p>
              </li>
            </ul>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              {[Instagram, Facebook, Mail].map((Icon, index) => <a key={index} href="#" className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300">
                  <Icon size={18} />
                </a>)}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground tracking-wider">© 2026 OBSQURA. All rights reserved.</p>
          <div className="flex items-center gap-8">
            {["Privacy Policy", "Terms of Service", "Shipping"].map(link => <a key={link} href="#" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors duration-300">
                {link}
              </a>)}
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;