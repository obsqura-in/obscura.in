import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CollectionsSection from "@/components/CollectionsSection";
import FeaturedCollection from "@/components/FeaturedCollection";
import BrandStory from "@/components/BrandStory";
import Footer from "@/components/Footer";

import heroImage from "@/assets/hero-jewelry.jpg";
import storyImage from "@/assets/story-craftsmanship.jpg";
import ringImage from "@/assets/collection-ring.jpg";
import necklaceImage from "@/assets/collection-necklace.jpg";
import earringsImage from "@/assets/collection-earrings.jpg";

const collectionItems = [
  {
    id: 1,
    name: "Midnight Obsidian Ring",
    category: "Rings",
    image: ringImage,
    price: 2499,
  },
  {
    id: 2,
    name: "Serpentine Pendant",
    category: "Necklaces",
    image: necklaceImage,
    price: 3299,
  },
  {
    id: 3,
    name: "Luna Drop Earrings",
    category: "Earrings",
    image: earringsImage,
    price: 1899,
  },
  {
    id: 4,
    name: "Golden Infinity Bracelet",
    category: "Bracelets",
    image: ringImage,
    price: 2799,
  },
  {
    id: 5,
    name: "Celestial Chain Necklace",
    category: "Necklaces",
    image: necklaceImage,
    price: 3599,
  },
  {
    id: 6,
    name: "Aurora Stud Earrings",
    category: "Earrings",
    image: earringsImage,
    price: 1599,
  },
  {
    id: 7,
    name: "Twilight Band Ring",
    category: "Rings",
    image: ringImage,
    price: 2199,
  },
  {
    id: 8,
    name: "Obsqura Signature Set",
    category: "Sets",
    image: necklaceImage,
    price: 7999,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeaturedCollection items={collectionItems} />
      <CollectionsSection />
      <BrandStory storyImage={storyImage} />
      <Footer />
    </div>
  );
};

export default Index;
