import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-16 lg:mb-24">
            <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
              Get in Touch
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
              Contact <span className="italic">Us</span>
            </h1>
          </div>

          {/* Contact Details */}
          <div className="max-w-xl mx-auto">
            <div className="border border-border p-8 lg:p-12 bg-card">
              <div className="space-y-8">
                <a
                  href="mailto:obsqura.in@gmail.com"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-1">Email</p>
                    <span className="font-body text-foreground">obsqura.in@gmail.com</span>
                  </div>
                </a>
                
                <a
                  href="tel:9892082068"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-1">Phone</p>
                    <span className="font-body text-foreground">9892082068</span>
                  </div>
                </a>
                
                <a
                  href="https://instagram.com/Obsqura.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                    <Instagram size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-1">Instagram</p>
                    <span className="font-body text-foreground">@Obsqura.in</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
