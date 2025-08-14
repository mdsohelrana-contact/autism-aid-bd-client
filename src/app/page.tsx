import AboutSection from "@/components/modules/Home/AboutSection";
import CategorySection from "@/components/modules/Home/CategorySection";
import FeaturedProducts from "@/components/modules/Home/FeaturedProducts";

import { HeroSection } from "@/components/modules/Home/HeroSection";
import SpecialOffer from "@/components/modules/Home/SpecialOffer";



export default function Home() {
  return (
    <>
      <div>
        <HeroSection />
        <SpecialOffer />
        <CategorySection />
        <FeaturedProducts />
        <AboutSection />
      </div>
    </>
  );
}
