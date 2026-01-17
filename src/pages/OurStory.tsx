import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ourStoryBg from "@/assets/our-story-bg.png";

const storyLines = [
  "Obsqura was born from a desire to create jewelry that feels personal, not ordinary.",
  "In a world of repetitive designs, we chose to offer variety that carries depth, intention, and quiet luxury.",
  "Every piece is crafted to make you feel confident, composed, and effortlessly elegant.",
  "From delicate rings to statement sets and Obsqura Specials, each collection tells its own story.",
  "Our designs balance minimalism with bold character, allowing beauty to speak without excess.",
  "Obsqura represents affordable luxury, where refinement is accessible and never diluted.",
  "With thoughtful care, our jewelry is made to stay with you, holding its brilliance over time.",
  "Obsqura is not about following trends, but about creating pieces that remain meaningful long after the moment passes.",
];

const OurStory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="relative">
        {/* Background Image */}
        <div className="fixed inset-0 z-0">
          <img 
            src={ourStoryBg} 
            alt="OBSQURA" 
            className="w-full h-full object-contain opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 pt-32 pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-24">
                <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
                  Our Journey
                </p>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-foreground">
                  Our <span className="italic text-gradient-gold">Story</span>
                </h1>
              </div>

              {/* Story Lines with Scroll Sections */}
              <div className="space-y-0">
                {storyLines.map((line, index) => (
                  <section 
                    key={index}
                    className="min-h-[60vh] flex items-center justify-center opacity-0 animate-slide-up"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <p className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground text-center leading-relaxed max-w-3xl">
                      {line}
                    </p>
                  </section>
                ))}
              </div>

              {/* Closing */}
              <div className="text-center mt-24 pt-24 border-t border-border">
                <span className="font-display text-4xl text-primary">Est. 2024</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OurStory;
