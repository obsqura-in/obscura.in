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
  },
  {
    id: 2,
    name: "Serpentine Pendant",
    category: "Necklaces",
    image: necklaceImage,
  },
  {
    id: 3,
    name: "Luna Drop Earrings",
    category: "Earrings",
    image: earringsImage,
  },
  {
    id: 4,
    name: "Golden Infinity Bracelet",
    category: "Bracelets",
    image: ringImage,
  },
  {
    id: 5,
    name: "Celestial Chain Necklace",
    category: "Necklaces",
    image: necklaceImage,
  },
  {
    id: 6,
    name: "Aurora Stud Earrings",
    category: "Earrings",
    image: earringsImage,
  },
  {
    id: 7,
    name: "Twilight Band Ring",
    category: "Rings",
    image: ringImage,
  },
  {
    id: 8,
    name: "Obsqura Signature Set",
    category: "Sets",
    image: necklaceImage,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero heroImage={heroImage} />
      <FeaturedCollection items={collectionItems} />
      <CollectionsSection />
      <BrandStory storyImage={storyImage} />
      <Footer />
    </div>
  );
};

export default Index;
