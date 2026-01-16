import { Link } from "react-router-dom";

const categories = [
  { name: "Rings", slug: "rings", description: "Elegant statements for your fingers" },
  { name: "Necklaces", slug: "necklaces", description: "Grace that adorns your neckline" },
  { name: "Bracelets", slug: "bracelets", description: "Timeless elegance for your wrist" },
  { name: "Earrings", slug: "earrings", description: "Delicate whispers of luxury" },
  { name: "Sets", slug: "sets", description: "Curated collections of harmony" },
  { name: "Obsqura Specials", slug: "specials", description: "Exclusive limited editions" },
];

const CollectionsSection = () => {
  return (
    <section id="collections" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Explore Our World
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Collections
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/collections/${category.slug}`}
              className="group relative p-8 lg:p-10 border border-border bg-background hover:border-primary transition-all duration-500 hover-glow"
            >
              <div className="flex flex-col items-center text-center">
                <h3 className="font-display text-2xl lg:text-3xl text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                  {category.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {category.description}
                </p>
                <div className="mt-6 font-body text-xs tracking-[0.2em] uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Collection →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
