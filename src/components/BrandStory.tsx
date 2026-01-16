import { Button } from "@/components/ui/button";

interface BrandStoryProps {
  storyImage: string;
}

const BrandStory = ({ storyImage }: BrandStoryProps) => {
  return (
    <section id="story" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden hover-glow opacity-0 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <img
              src={storyImage}
              alt="Jewelry craftsmanship"
              className="w-full h-full object-cover transition-transform duration-1000 ease-elegant hover:scale-105"
            />
            <div className="absolute inset-0 border border-primary/20 transition-colors duration-700" />
          </div>

          {/* Content */}
          <div className="lg:pl-8 opacity-0 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-6">
              Our Philosophy
            </p>
            
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-8">
              Crafted in
              <br />
              <span className="italic text-gradient-gold">Shadows & Light</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
              <p>
                At OBSQURA, we believe that true beauty lies in the obscure—the 
                hidden details that reveal themselves only to those who look deeper. 
                Each piece is a meditation on contrast: the interplay of darkness 
                and brilliance, tradition and innovation.
              </p>
              <p>
                Our artisans work in the quiet hours, when inspiration flows freely 
                and every hammer stroke carries intention. We source only the rarest 
                materials, treating each gem as a universe unto itself, waiting to 
                be discovered.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-8">
              <Button variant="hero" size="lg" className="transition-all duration-500 ease-elegant hover:scale-105">
                Discover Our Atelier
              </Button>
              
              <div className="h-px flex-1 bg-border max-w-24 transition-all duration-700" />
              
              <span className="font-display text-4xl text-primary">Est. 2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
