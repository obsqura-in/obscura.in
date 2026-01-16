import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const careGuides = [
  {
    title: "Gold Jewelry Care",
    tips: [
      "Remove jewelry before swimming or bathing",
      "Avoid contact with perfumes, lotions, and chemicals",
      "Store in a soft cloth pouch or jewelry box",
      "Clean gently with warm soapy water and a soft brush",
      "Polish with a jewelry cloth to maintain shine",
    ],
  },
  {
    title: "Silver Jewelry Care",
    tips: [
      "Store in anti-tarnish bags or airtight containers",
      "Wear regularly - natural oils help prevent tarnish",
      "Clean with a silver polishing cloth",
      "Avoid exposure to humidity and air",
      "Remove before household chores",
    ],
  },
  {
    title: "Gemstone Care",
    tips: [
      "Handle gemstones by the band, not the stone",
      "Avoid extreme temperature changes",
      "Clean with lukewarm water and mild soap",
      "Have prongs checked regularly by a jeweler",
      "Store separately to prevent scratching",
    ],
  },
  {
    title: "Pearl Care",
    tips: [
      "Pearls should be the last thing you put on",
      "Wipe with a soft cloth after each wear",
      "Avoid contact with cosmetics and perfumes",
      "Store flat in a soft cloth to prevent stretching",
      "Have pearl strands restrung annually if worn often",
    ],
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
            <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
              Preserve Your Treasures
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
              Jewellery <span className="italic">Care Guide</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
              Proper care ensures your precious pieces remain beautiful for generations. 
              Follow these guidelines to maintain the brilliance of your OBSQURA jewelry.
            </p>
          </div>

          {/* Care Guides */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {careGuides.map((guide) => (
              <div
                key={guide.title}
                className="border border-border p-8 lg:p-10 hover:border-primary transition-colors duration-300"
              >
                <h2 className="font-display text-2xl text-foreground mb-6">
                  {guide.title}
                </h2>
                <ul className="space-y-4">
                  {guide.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="font-body text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* General Tips */}
          <div className="max-w-3xl mx-auto mt-16 lg:mt-24 text-center">
            <h2 className="font-display text-3xl text-foreground mb-6">
              General Tips
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              Always remove jewelry before sleeping, exercising, or doing manual work. 
              Have your jewelry professionally cleaned and inspected annually. 
              When in doubt, consult with our team at OBSQURA for personalized care advice.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default JewelleryCare;
