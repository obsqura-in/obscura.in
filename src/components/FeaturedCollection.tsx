import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface CollectionItem {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
}

interface FeaturedCollectionProps {
  items: CollectionItem[];
}

const FeaturedCollection = ({ items }: FeaturedCollectionProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (item: CollectionItem) => {
    addToCart({
      id: item.id,
      name: item.name,
      category: item.category,
      image: item.image,
      price: item.price,
    });
    toast.success(`${item.name} added to cart`);
  };

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Curated Selection
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Featured <span className="italic">Pieces</span>
          </h2>
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="group cursor-pointer opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-card mb-4 hover-glow">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-elegant group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-elegant" />
              </div>
              
              <div className="text-center">
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1 transition-colors duration-500">
                  {item.category}
                </p>
                <h3 className="font-display text-sm md:text-base text-foreground group-hover:text-primary transition-colors duration-500 ease-elegant mb-1">
                  {item.name}
                </h3>
                <p className="font-body text-sm text-primary mb-3">
                  ₹{item.price.toLocaleString('en-IN')}
                </p>
                <Button
                  variant="hero"
                  size="sm"
                  onClick={() => handleAddToCart(item)}
                  className="w-full transition-all duration-500 ease-elegant hover:scale-[1.02]"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
