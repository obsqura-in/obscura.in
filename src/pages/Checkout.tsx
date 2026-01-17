import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Minus, Plus, X } from "lucide-react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { items, totalItems, updateQuantity, removeFromCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-20 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Your Cart is Empty
            </h1>
            <p className="font-body text-muted-foreground mb-8">
              Explore our collections and find something you love.
            </p>
            <Link to="/#collections">
              <Button variant="hero">Browse Collections</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-12 text-center">
            Checkout
          </h1>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Order Summary */}
            <div className="space-y-6">
              <h2 className="font-display text-2xl text-foreground mb-6">Order Summary</h2>
              
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 pb-6 border-b border-border">
                  <div className="w-20 h-24 bg-card overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">
                          {item.category}
                        </p>
                        <h4 className="font-display text-lg text-foreground">
                          {item.name}
                        </h4>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="font-body text-foreground w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="pt-4">
                <p className="font-body text-muted-foreground">
                  Total Items: <span className="text-foreground">{totalItems}</span>
                </p>
              </div>
            </div>

            {/* Shipping Details Form */}
            <div className="space-y-6">
              <h2 className="font-display text-2xl text-foreground mb-6">Shipping Details</h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+91 98920 82068" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="Street address" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="Mumbai" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pincode">PIN Code</Label>
                    <Input id="pincode" placeholder="400001" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" placeholder="Maharashtra" />
                </div>
              </div>

              <Button variant="hero" size="xl" className="w-full mt-8">
                Proceed to Payment
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
