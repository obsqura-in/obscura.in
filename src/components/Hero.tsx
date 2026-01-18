import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-video.mp4";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60 scale-105">
          <source src={heroVideo} type="video/mp4" />
        </video>
        
      </div>

      {/* Content */}
      <div className="absolute bottom-12 left-0 right-0 z-10 flex justify-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-slide-up" style={{
        animationDelay: "0.5s"
      }}>
          <button
            onClick={() => {
              const element = document.getElementById('collections');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <Button variant="hero" size="default" className="transition-all duration-500 ease-elegant hover:scale-105">
              Explore Collection
            </Button>
          </button>
          <a href="/our-story">
            <Button variant="minimal" size="default" className="transition-all duration-500 ease-elegant">
              Our Story
            </Button>
          </a>
        </div>
      </div>
    </section>;
};
export default Hero;