import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
            <div className="prose prose-invert mx-auto">
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
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
