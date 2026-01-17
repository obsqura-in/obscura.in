import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-video.mp4";

const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-60 scale-105"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-6 opacity-0 animate-slide-up" style={{
          animationDelay: "0.3s"
        }}>
        </p>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-8 opacity-0 animate-slide-up" style={{
          animationDelay: "0.5s"
        }}>
            Where Mystery
            <br />
            <span className="italic text-gradient-gold">Meets Elegance</span>
          </h1>
          
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-12 opacity-0 animate-slide-up" style={{
          animationDelay: "0.7s"
        }}>
        </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-slide-up" style={{
          animationDelay: "0.9s"
        }}>
            <a href="#collections">
              <Button variant="hero" size="default" className="transition-all duration-500 ease-elegant hover:scale-105">
                Explore Collection
              </Button>
            </a>
            <a href="/our-story">
              <Button variant="minimal" size="default" className="transition-all duration-500 ease-elegant">
                Our Story
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
