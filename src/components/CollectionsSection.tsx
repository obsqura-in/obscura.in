import { Link } from "react-router-dom";
import categoryRings from "@/assets/category-rings.jpg";
import categoryNecklaces from "@/assets/category-necklaces.jpg";
import categoryBracelets from "@/assets/category-bracelets.jpg";
import categoryEarrings from "@/assets/category-earrings.jpg";
import categorySets from "@/assets/category-sets.jpg";
import categorySpecials from "@/assets/category-specials.jpg";

const categories = [
  { name: "Rings", slug: "rings", description: "Elegant statements for your fingers", image: categoryRings },
  { name: "Necklaces", slug: "necklaces", description: "Grace that adorns your neckline", image: categoryNecklaces },
  { name: "Bracelets", slug: "bracelets", description: "Timeless elegance for your wrist", image: categoryBracelets },
  { name: "Earrings", slug: "earrings", description: "Delicate whispers of luxury", image: categoryEarrings },
  { name: "Sets", slug: "sets", description: "Curated collections of harmony", image: categorySets },
  { name: "Obsqura Specials", slug: "specials", description: "Exclusive limited editions", image: categorySpecials },
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
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              to={`/collections/${category.slug}`}
              className="group relative overflow-hidden border border-border bg-background hover:border-primary transition-all duration-700 ease-elegant hover-glow opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Cover Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-elegant group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent transition-opacity duration-700" />
              </div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="font-display text-2xl lg:text-3xl text-foreground group-hover:text-primary transition-colors duration-500 ease-elegant mb-2">
                  {category.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground transition-colors duration-500">
                  {category.description}
                </p>
                <div className="mt-4 font-body text-xs tracking-[0.2em] uppercase text-primary opacity-0 group-hover:opacity-100 transition-all duration-700 ease-elegant transform translate-y-2 group-hover:translate-y-0">
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
