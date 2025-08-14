"use client";

import { Product } from "@/components/types/product.type";
import ProductGrid from "../Products/ProductGrid/ProductGrid";

import { CustomSection } from "@/components/shared/Components/CustomSection";
import { useAddToCart } from "@/hooks/useAddToCart";

import PrimaryButton from "@/components/shared/Components/Buttons/PrimaryButton";
const FeaturedProducts = () => {
  const { addToCart } = useAddToCart();

  const products: Product[] = [
    {
      id: 1,
      name: "Weighted Sensory Blanket",
      namebn: "ওজনযুক্ত সেন্সরি কম্বল",
      category: "Sensory Tools",
      price: 4500,
      originalPrice: 5500,
      discount: 18,
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1602526210304-6e7b4e7f6f8f",
      gallery: [
        "https://images.unsplash.com/photo-1602526210304-6e7b4e7f6f8f",
        "https://images.unsplash.com/photo-1602526210304-6e7b4e7f6f8f?crop=entropy&cs=tinysrgb&fit=max",
      ],
      badge: "Best Seller",
      description:
        "A comfortable weighted sensory blanket designed to help children with sensory processing challenges relax and sleep better.",
      shortDescription:
        "Comfortable weighted sensory blanket for relaxation and sleep.",
      availability: "InStock",
      inStock: true,
      sku: "WSB-001",
      brand: "AutismAid",
      currency: "BDT",
      url: "/products/weighted-sensory-blanket",
      releaseDate: "2025-01-01",
      metaTitle: "Weighted Sensory Blanket – AutismAid Bangladesh",
      metaDescription:
        "Buy the Weighted Sensory Blanket for children with sensory processing challenges. Improve relaxation and sleep. Available now in Bangladesh.",
      metaKeywords: [
        "weighted blanket",
        "sensory blanket",
        "autism aid",
        "children relaxation",
      ],
      weight: 2.5,
      dimensions: "120x150 cm",
      color: "Gray",
      material: "Cotton & Glass Beads",
      warranty: "6 months manufacturer warranty",
    },
    {
      id: 2,
      name: "Communication Picture Cards",
      namebn: "যোগাযোগ ছবি কার্ড",
      category: "Communication Aids",
      price: 2200,
      originalPrice: undefined,
      rating: 4.9,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1588702547927-4b6a3c9e7b7a",
      gallery: ["https://images.unsplash.com/photo-1588702547927-4b6a3c9e7b7a"],
      badge: "New",
      description:
        "Set of picture cards to improve communication skills for children with speech or language difficulties.",
      shortDescription:
        "Picture cards to enhance communication skills in children.",
      availability: "InStock",
      inStock: true,
      sku: "CPC-002",
      brand: "AutismAid",
      currency: "BDT",
      url: "/products/communication-picture-cards",
      releaseDate: "2025-02-01",
      metaTitle: "Communication Picture Cards – AutismAid Bangladesh",
      metaDescription:
        "Enhance your child's communication skills with our Picture Cards. Suitable for children with speech or language difficulties.",
      metaKeywords: [
        "communication cards",
        "speech therapy",
        "children learning",
        "autism aid",
      ],
      weight: 0.5,
      dimensions: "15x10x2 cm",
      color: "Multicolor",
      material: "Cardboard",
      warranty: "No warranty",
    },
    {
      id: 3,
      name: "Fidget Sensory Kit",
      namebn: "ফিজেট সেন্সরি কিট",
      category: "Sensory Tools",
      price: 1800,
      originalPrice: 2200,
      discount: 18,
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
      gallery: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68"],
      badge: "Popular",
      description:
        "A compact kit with various fidget toys designed to enhance focus and calm anxiety in children.",
      shortDescription: "Compact fidget kit for focus and anxiety relief.",
      availability: "InStock",
      inStock: true,
      sku: "FSK-003",
      brand: "AutismAid",
      currency: "BDT",
      url: "/products/fidget-sensory-kit",
      releaseDate: "2025-03-01",
      metaTitle: "Fidget Sensory Kit – AutismAid Bangladesh",
      metaDescription:
        "Boost focus and calm anxiety in children with our Fidget Sensory Kit. Compact and portable kit.",
      metaKeywords: ["fidget toys", "sensory kit", "focus tools", "autism aid"],
      weight: 0.7,
      dimensions: "20x15x5 cm",
      color: "Multicolor",
      material: "Plastic & Silicone",
      warranty: "3 months manufacturer warranty",
    },
    {
      id: 4,
      name: "Balance Training Board",
      namebn: "ব্যালেন্স ট্রেনিং বোর্ড",
      category: "Motor Skills",
      price: 3200,
      originalPrice: undefined,
      rating: 4.6,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
      gallery: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68"],
      badge: undefined,
      description:
        "A sturdy balance board to improve coordination, core strength, and motor skills in children.",
      shortDescription:
        "Balance board to improve motor skills and coordination.",
      availability: "InStock",
      inStock: true,
      sku: "BTB-004",
      brand: "AutismAid",
      currency: "BDT",
      url: "/products/balance-training-board",
      releaseDate: "2025-04-01",
      metaTitle: "Balance Training Board – AutismAid Bangladesh",
      metaDescription:
        "Enhance your child's coordination and core strength with our Balance Training Board. Ideal for motor skill development.",
      metaKeywords: [
        "balance board",
        "motor skills",
        "child exercise",
        "autism aid",
      ],
      weight: 3,
      dimensions: "60x30x5 cm",
      color: "Blue",
      material: "Wood",
      warranty: "6 months manufacturer warranty",
    },
  ];

  return (
    <CustomSection
      title="Featured Products"
      description="Check out our most popular products."
      badgeText="Top Picks"
    >
      {/* Product Grid */}
      <ProductGrid products={products} handleAddToCart={addToCart} />

      {/* View All Button */}

     <div className="text-center">
        <PrimaryButton  href="/products" className="w-1/3">
          View All
        </PrimaryButton>
      </div>
    </CustomSection>
  );
};

export default FeaturedProducts;
