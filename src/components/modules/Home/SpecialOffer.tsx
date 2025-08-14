"use client";

import { SectionHeader } from "@/components/shared/Components/SectionHeader";
import OfferProductCard from "../Products/Card/OfferProductCard";
import { motion } from "framer-motion";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { OfferProduct } from "@/components/types/product.type";
import { useAddToCart } from "@/hooks/useAddToCart";

import PrimaryButton from "@/components/shared/Components/Buttons/PrimaryButton";

const SpecialOffer = () => {
  const { addToCart } = useAddToCart();

  const offers: OfferProduct[] = [
    {
      id: 101,
      name: "Autism Starter Kit Bundle",
      namebn: "অটিজম স্টার্টার কিট বান্ডল",
      price: 8500,
      originalPrice: 12000,
      discount: 30,
      rating: 4.9,
      reviews: 245,
      image:
        "https://images.unsplash.com/photo-1588776814546-cfeeb3c6e58f?auto=format&fit=crop&w=400&q=80",
      badge: "Limited Time",
      category: "Bundle Deals",
      timeLeft: "2 days left",
      isFlashSale: true,
    },
    {
      id: 102,
      name: "Sensory Integration Therapy Set",
      namebn: "সেন্সরি ইন্টিগ্রেশন থেরাপি সেট",
      price: 6200,
      originalPrice: 8500,
      discount: 27,
      rating: 4.8,
      reviews: 189,
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
      badge: "Best Value",
      category: "Therapy Equipment",
      timeLeft: "5 days left",
      isFlashSale: false,
    },
    {
      id: 103,
      name: "Weighted Sensory Blanket",
      namebn: "ওজনযুক্ত সেন্সরি কম্বল",
      price: 4500,
      originalPrice: 5500,
      discount: 18,
      rating: 4.7,
      reviews: 124,
      image:
        "https://images.unsplash.com/photo-1602526210304-6e7b4e7f6f8f?auto=format&fit=crop&w=400&q=80",
      badge: "Popular",
      category: "Sensory Tools",
      timeLeft: "3 days left",
      isFlashSale: true,
    },
    {
      id: 104,
      name: "Communication Picture Cards",
      namebn: "যোগাযোগ ছবি কার্ড",
      price: 2200,
      originalPrice: 3000,
      discount: 0,
      rating: 4.9,
      reviews: 89,
      image:
        "https://images.unsplash.com/photo-1588702547927-4b6a3c9e7b7a?auto=format&fit=crop&w=400&q=80",
      badge: "New",
      category: "Communication Aids",
      timeLeft: "7 days left",
      isFlashSale: false,
    },
    {
      id: 105,
      name: "Fidget Sensory Kit",
      namebn: "ফিজেট সেন্সরি কিট",
      price: 1800,
      originalPrice: 2200,
      discount: 18,
      rating: 4.7,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=400&q=80",
      badge: "Hot",
      category: "Sensory Tools",
      timeLeft: "4 days left",
      isFlashSale: true,
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <SectionHeader
          title="Special Offers"
          description="Limited time deals on our best rehabilitation equipment bundles"
          badgeText="Flash Deals"
        />

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
        >
          {offers.map((offer) => (
            <SwiperSlide key={offer.id}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <OfferProductCard
                  product={offer}
                  onAddToCart={() => addToCart(offer)}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View All Button */}
        <div className="text-center mt-8">
          <PrimaryButton href="/products" className="w-1/3">
            View All
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
