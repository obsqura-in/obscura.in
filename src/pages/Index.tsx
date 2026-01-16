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
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero heroImage={heroImage} />
      <CollectionsSection />
      <FeaturedCollection items={collectionItems} />
      <BrandStory storyImage={storyImage} />
      <Footer />
    </div>
  );
};

export default Index;
