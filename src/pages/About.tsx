import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, Instagram } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-16 lg:mb-24">
            <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
              Our Story
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
              About <span className="italic">OBSQURA</span>
            </h1>
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-invert mx-auto mb-16">
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                OBSQURA is a luxury jewelry brand that celebrates the beauty of mystery and elegance. 
                Each piece in our collection is meticulously crafted to transcend time, telling stories 
                of hidden beauty and timeless sophistication.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Our artisans bring decades of expertise to every creation, ensuring that each jewel 
                becomes a treasured heirloom for generations to come. We believe in the power of 
                exceptional craftsmanship and the enduring allure of fine jewelry.
              </p>
            </div>

            {/* Contact Details */}
            <div className="border border-border p-8 lg:p-12">
              <h2 className="font-display text-2xl text-foreground mb-8 text-center">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <a
                  href="mailto:obsqura.in@gmail.com"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Mail size={20} className="text-primary" />
                  <span className="font-body">obsqura.in@gmail.com</span>
                </a>
                
                <a
                  href="tel:9892082068"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Phone size={20} className="text-primary" />
                  <span className="font-body">9892082068</span>
                </a>
                
                <a
                  href="https://instagram.com/Obsqura.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Instagram size={20} className="text-primary" />
                  <span className="font-body">@Obsqura.in</span>
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

export default About;
