import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-md mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
                {isLogin ? "Welcome Back" : "Join OBSQURA"}
              </h1>
              <p className="font-body text-muted-foreground">
                {isLogin 
                  ? "Sign in to access your account" 
                  : "Create an account to start your journey"}
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {!isLogin && (
                <div>
                  <label className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    className="bg-card border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              )}
              
              <div>
                <label className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              
              <div>
                <label className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                  Password
                </label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <Button variant="hero" size="xl" className="w-full">
                {isLogin ? "Sign In" : "Create Account"}
              </Button>
            </form>

            {/* Toggle */}
            <div className="text-center mt-8">
              <p className="font-body text-sm text-muted-foreground">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-primary hover:underline"
                >
                  {isLogin ? "Sign up" : "Sign in"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
