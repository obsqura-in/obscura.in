import { Button } from "@/components/ui/button";

interface HeroProps {
  heroImage: string;
}

const Hero = ({ heroImage }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury jewelry"
          className="w-full h-full object-cover opacity-60 scale-105 animate-[scale-in_2s_cubic-bezier(0.25,0.46,0.45,0.94)_forwards]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-6 opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            Artisanal Jewelry
          </p>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-8 opacity-0 animate-slide-up" style={{ animationDelay: "0.5s" }}>
            Where Mystery
            <br />
            <span className="italic text-gradient-gold">Meets Elegance</span>
          </h1>
          
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-12 opacity-0 animate-slide-up" style={{ animationDelay: "0.7s" }}>
            Handcrafted pieces that transcend time, each jewel telling a story of 
            hidden beauty and timeless sophistication.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-slide-up" style={{ animationDelay: "0.9s" }}>
            <a href="#collections">
              <Button variant="hero" size="xl" className="transition-all duration-500 ease-elegant hover:scale-105">
                Explore Collection
              </Button>
            </a>
            <Button variant="minimal" size="lg" className="transition-all duration-500 ease-elegant">
              Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
