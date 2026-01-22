import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const careGuides = [
  {
    icon: "💧",
    title: "Water is permitted. Chemicals are not.",
    description:
      "Occasional contact with water is acceptable. However, keep your jewellery away from perfumes, deodorants, hairsprays, sanitizers, and household chemicals. Chlorinated water, commonly found in swimming pools, is particularly harmful and should be strictly avoided.",
  },
  {
    icon: "✨",
    title: "Apply last. Remove first.",
    description:
      "Always wear jewellery after completing your skincare, makeup, and fragrance routine. Remove it before sleeping, exercising, or bathing to preserve its finish and structure.",
  },
  {
    icon: "📦",
    title: "Store with intention.",
    description:
      "Each piece deserves its own space. Store jewellery separately in a dry, airtight pouch or box to prevent scratches, tangling, and oxidation.",
  },
  {
    icon: "🌊",
    title: "Protect from moisture.",
    description:
      "Ensure jewellery is completely dry before storing. Prolonged exposure to moisture can dull shine and weaken plating.",
  },
  {
    icon: "🧽",
    title: "Clean gently, sparingly.",
    description:
      "After wear, wipe with a soft, dry cloth. Avoid water washing, soaps, brushes, or chemical cleaners. Gentle care extends longevity.",
  },
  {
    icon: "☀️",
    title: "Avoid heat and direct sunlight.",
    description:
      "Excessive heat and prolonged sun exposure may fade stones and compromise the plating. Store in a cool, shaded environment.",
  },
  {
    icon: "🤲",
    title: "Handle delicately.",
    description:
      "Artificial jewellery is crafted for elegance, not force. Avoid pulling, bending, or impact to maintain its form and finish.",
  },
  {
    icon: "🔄",
    title: "Rotate your pieces.",
    description:
      "Allow jewellery time to rest between wears. Regular rotation helps maintain brilliance and reduces wear.",
  },
];

const JewelleryCare = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-16 lg:mb-24">
            <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4 fade-in-up">
              Preserve Your Treasures
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground fade-in-up stagger-1">
              Jewellery <span className="italic">Care Guide</span>
            </h1>
            <div className="w-24 h-px bg-primary mx-auto mt-8 fade-in-up stagger-2" />
          </div>

          {/* Care Guides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {careGuides.map((guide, index) => (
              <div
                key={guide.title}
                className={`group relative bg-card/30 backdrop-blur-sm border border-border/50 p-8 lg:p-10 
                  hover:border-primary/50 hover:bg-card/50 transition-all duration-500 ease-out
                  fade-in-up stagger-${Math.min(index + 1, 4)}`}
              >
                {/* Decorative corner */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/30 
                  group-hover:border-primary/60 transition-colors duration-500" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/30 
                  group-hover:border-primary/60 transition-colors duration-500" />

                {/* Icon */}
                <span className="text-3xl mb-6 block opacity-80 group-hover:opacity-100 
                  transform group-hover:scale-110 transition-all duration-300">
                  {guide.icon}
                </span>

                {/* Title */}
                <h2 className="font-display text-xl lg:text-2xl text-foreground mb-4 
                  group-hover:text-primary transition-colors duration-300">
                  {guide.title}
                </h2>

                {/* Description */}
                <p className="font-body text-muted-foreground leading-relaxed text-sm lg:text-base">
                  {guide.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="max-w-2xl mx-auto mt-20 text-center">
            <div className="w-16 h-px bg-primary/50 mx-auto mb-8" />
            <p className="font-body text-sm text-muted-foreground leading-relaxed italic">
              "Each piece of OBSQURA jewellery is crafted to be cherished. 
              With mindful care, your treasures will retain their beauty for years to come."
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JewelleryCare;
