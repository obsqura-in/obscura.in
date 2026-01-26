import { useState } from "react";
import { Menu, X, LogOut } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import CartSheet from "@/components/CartSheet";
import WishlistSheet from "@/components/WishlistSheet";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import obsquraLogo from "@/assets/obsqura-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = async () => {
    await signOut();
    toast.success("You have been signed out.");
    navigate("/");
    setIsOpen(false);
  };

  const handleCollectionsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const collectionsSection = document.getElementById("collections");
      if (collectionsSection) {
        collectionsSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const collectionsSection = document.getElementById("collections");
        if (collectionsSection) {
          collectionsSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    setIsOpen(false);
  };

  const navLinks = [
    ...(user 
      ? [{ name: "Profile", href: "/profile" }] 
      : [{ name: "Login", href: "/login" }]
    ),
    { name: "AI Mode", href: "/ai-mode" },
    { name: "Collections", href: "#collections", onClick: handleCollectionsClick },
    { name: "Contact", href: "/contact" },
    { name: "Jewellery Care Guide", href: "/jewellery-care" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 transition-all duration-500">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5 font-display text-2xl tracking-[0.3em] text-foreground hover:text-primary transition-colors duration-500">
            OBSQURA
            <img src={obsquraLogo} alt="OBSQURA Logo" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              link.onClick ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={link.onClick}
                  className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-500 link-underline cursor-pointer"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-500 link-underline"
                >
                  {link.name}
                </Link>
              )
            ))}
            {user && (
              <button
                onClick={handleSignOut}
                className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-500 link-underline flex items-center gap-2"
              >
                <LogOut size={14} />
                Logout
              </button>
            )}
            <WishlistSheet />
            <CartSheet />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <WishlistSheet />
            <CartSheet />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors duration-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-700 ease-elegant ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-8 border-t border-border/50">
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, index) => (
                link.onClick ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={link.onClick}
                    className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-all duration-500 cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-all duration-500"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              {user && (
                <button
                  onClick={handleSignOut}
                  className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-all duration-500 flex items-center gap-2"
                >
                  <LogOut size={14} />
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
