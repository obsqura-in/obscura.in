import { useState } from "react";
import { Send, Sparkles, RefreshCw, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";

import categoryRings from "@/assets/category-rings.jpg";
import categoryNecklaces from "@/assets/category-necklaces.jpg";
import categoryEarrings from "@/assets/category-earrings.jpg";
import categoryBracelets from "@/assets/category-bracelets.jpg";
import categorySets from "@/assets/category-sets.jpg";
import categorySpecials from "@/assets/category-specials.jpg";

const categoryImages: Record<string, string> = {
  rings: categoryRings,
  necklaces: categoryNecklaces,
  earrings: categoryEarrings,
  bracelets: categoryBracelets,
  sets: categorySets,
  specials: categorySpecials,
};

type Product = {
  name: string;
  category: string;
  price: number;
  reason: string;
};

type Recommendations = {
  products: Product[];
  styling_tip: string;
};

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/jewelry-ai`;

const suggestedPrompts = [
  "I'm looking for elegant everyday jewelry",
  "Help me find a gift for someone special",
  "I want something bold and statement-making",
  "Recommend jewelry for my wedding day",
];

const AIMode = () => {
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<Recommendations | null>(null);
  const [lastQuery, setLastQuery] = useState("");
  const { addToCart } = useCart();

  const fetchRecommendations = async (query: string) => {
    setIsLoading(true);
    setLastQuery(query);
    setRecommendations(null);

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ 
          messages: [{ role: "user", content: query }] 
        }),
      });

      if (!resp.ok) {
        const errorData = await resp.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to get recommendations");
      }

      const data = await resp.json();
      
      if (data.recommendations) {
        setRecommendations(data.recommendations);
      } else {
        throw new Error("No recommendations received");
      }
    } catch (error) {
      console.error("AI error:", error);
      toast.error(error instanceof Error ? error.message : "Failed to get recommendations");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e?: React.FormEvent, promptOverride?: string) => {
    e?.preventDefault();
    const query = promptOverride || userInput.trim();
    if (!query || isLoading) return;
    setUserInput("");
    fetchRecommendations(query);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const resetChat = () => {
    setRecommendations(null);
    setUserInput("");
    setLastQuery("");
  };

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: Date.now(),
      name: product.name,
      category: product.category,
      price: product.price,
      image: categoryImages[product.category] || categoryRings,
    });
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
          
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="text-center max-w-3xl mx-auto fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-body tracking-widest uppercase text-primary">AI Stylist</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
                AI <span className="text-gradient-gold">Mode</span>
              </h1>
              
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Tell us your style and we'll curate the perfect pieces for you.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              {/* Input Section */}
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden shadow-2xl mb-12">
                <div className="flex items-center justify-between px-6 py-4 border-b border-border/50 bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground">OBSQURA Stylist</h3>
                      <p className="text-xs text-muted-foreground font-body">Describe your style, occasion, or mood</p>
                    </div>
                  </div>
                  {recommendations && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={resetChat}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Start Over
                    </Button>
                  )}
                </div>

                <div className="p-6">
                  {!recommendations && !isLoading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {suggestedPrompts.map((prompt, index) => (
                        <button
                          key={index}
                          onClick={() => handleSubmit(undefined, prompt)}
                          className="px-4 py-3 text-sm font-body text-left rounded-xl border border-border/50 bg-background/50 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 text-muted-foreground hover:text-foreground"
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="flex gap-3">
                    <Textarea
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Describe your ideal jewelry style, occasion, or what you're looking for..."
                      className="flex-1 min-h-[52px] max-h-32 resize-none bg-background border-border/50 focus:border-primary/50 rounded-xl font-body"
                      disabled={isLoading}
                    />
                    <Button
                      type="submit"
                      disabled={!userInput.trim() || isLoading}
                      className="h-[52px] px-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
                    >
                      <Send className="w-5 h-5" />
                    </Button>
                  </form>
                </div>
              </div>

              {/* Loading State */}
              {isLoading && (
                <div className="text-center py-16">
                  <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-muted/50 border border-border/50">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.2s" }} />
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.4s" }} />
                    <span className="text-sm font-body text-muted-foreground ml-2">Curating your perfect pieces...</span>
                  </div>
                </div>
              )}

              {/* Results */}
              {recommendations && (
                <div className="fade-in-up">
                  {/* Query Display */}
                  <div className="text-center mb-8">
                    <p className="text-sm text-muted-foreground font-body mb-2">Showing results for</p>
                    <p className="font-display text-xl text-foreground">"{lastQuery}"</p>
                  </div>

                  {/* Styling Tip */}
                  {recommendations.styling_tip && (
                    <div className="bg-primary/5 border border-primary/20 rounded-xl px-6 py-4 mb-10 text-center">
                      <p className="font-body text-sm text-foreground">
                        <span className="text-primary font-medium">Styling Tip:</span> {recommendations.styling_tip}
                      </p>
                    </div>
                  )}

                  {/* Product Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recommendations.products.map((product, index) => (
                      <div
                        key={index}
                        className="group bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-xl"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {/* Product Image */}
                        <div className="relative aspect-square overflow-hidden">
                          <img
                            src={categoryImages[product.category] || categoryRings}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          {/* Category Badge */}
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 text-xs font-body uppercase tracking-wider bg-background/90 backdrop-blur-sm rounded-full text-foreground">
                              {product.category}
                            </span>
                          </div>

                          {/* Quick Add Button */}
                          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                            <Button
                              onClick={() => handleAddToCart(product)}
                              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                            >
                              <ShoppingBag className="w-4 h-4 mr-2" />
                              Add to Cart
                            </Button>
                          </div>
                        </div>

                        {/* Product Info */}
                        <div className="p-5">
                          <h3 className="font-display text-lg text-foreground mb-1">{product.name}</h3>
                          <p className="text-sm text-muted-foreground font-body mb-3 line-clamp-2">{product.reason}</p>
                          <div className="flex items-center justify-between">
                            <span className="font-display text-lg text-primary">₹{product.price.toLocaleString()}</span>
                            <Link
                              to={`/collections/${product.category}`}
                              className="text-xs font-body uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
                            >
                              View Collection →
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Try Again */}
                  <div className="text-center mt-12">
                    <Button
                      variant="outline"
                      onClick={resetChat}
                      className="border-primary/30 hover:bg-primary/5"
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Get New Recommendations
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIMode;
