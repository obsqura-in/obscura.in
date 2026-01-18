import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

import comingSoonImage from "@/assets/coming-soon-product.png";

const categoryData: Record<string, { title: string; description: string }> = {
  rings: { title: "Rings", description: "Elegant statements for your fingers" },
  necklaces: { title: "Necklaces", description: "Grace that adorns your neckline" },
  bracelets: { title: "Bracelets", description: "Timeless elegance for your wrist" },
  earrings: { title: "Earrings", description: "Delicate whispers of luxury" },
  sets: { title: "Sets", description: "Curated collections of harmony" },
  specials: { title: "Obsqura Specials", description: "Exclusive limited editions" },
};

// Sample products for each category
const sampleProducts = [
  { id: 101, name: "Midnight Obsidian", price: 2499 },
  { id: 102, name: "Serpentine Dream", price: 2999 },
  { id: 103, name: "Luna Whisper", price: 1899 },
  { id: 104, name: "Golden Eclipse", price: 3299 },
  { id: 105, name: "Celestial Chain", price: 2799 },
  { id: 106, name: "Starlight Drops", price: 1599 },
];

const Collection = () => {
  const { category } = useParams<{ category: string }>();
  const { addToCart } = useCart();
  
  const categoryInfo = categoryData[category || ""] || {
    title: "Collection",
    description: "Explore our curated pieces",
  };

  const handleAddToCart = (product: { id: number; name: string; price: number }) => {
    addToCart({
      id: product.id,
      name: product.name,
      category: categoryInfo.title,
      image: comingSoonImage,
      price: product.price,
    });
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-16 lg:mb-24">
            <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
              {categoryInfo.description}
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
              {categoryInfo.title}
            </h1>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {sampleProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-card mb-6 hover-glow">
                  <img
                    src={comingSoonImage}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div className="text-center">
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                    {categoryInfo.title}
                  </p>
                  <h3 className="font-display text-xl text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="font-body text-lg text-primary mb-4">
                    ₹{product.price.toLocaleString('en-IN')}
                  </p>
                  <Button
                    variant="hero"
                    size="sm"
                    onClick={() => handleAddToCart(product)}
                    className="w-full"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Collection;
