"use client";

import { SectionHeader } from "@/components/shared/Components/SectionHeader";
import { useLanguage } from "@/lib/Providers/LanguageProvider";
import { Brain, MessageCircle, Activity, Puzzle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const CategorySection = () => {
  const { t } = useLanguage();

  const categories = [
    {
      icon: Brain,
      title: t("products.sensory"),
      description:
        "Enhance development with sensory integration tools, weighted blankets, and fidget toys.",
      image: "/images/categories/sensory.jpg",
      href: "/products?category=sensory",
      color: "bg-gradient-to-tr from-blue-200 to-blue-400 text-blue-700",
    },
    {
      icon: MessageCircle,
      title: t("products.communication"),
      description:
        "Boost communication skills with AAC devices, picture cards, and interactive boards.",
      image: "/images/categories/communication.jpg",
      href: "/products?category=communication",
      color: "bg-gradient-to-tr from-green-200 to-green-400 text-green-700",
    },
    {
      icon: Activity,
      title: t("products.motor"),
      description:
        "Support motor skills with fine and gross motor tools, balance aids, and therapy equipment.",
      image: "/images/categories/motor.jpg",
      href: "/products?category=motor",
      color: "bg-gradient-to-tr from-yellow-200 to-yellow-400 text-yellow-700",
    },
    {
      icon: Puzzle,
      title: t("products.therapy"),
      description:
        "Professional therapy equipment, assessment tools, and resources for specialists.",
      image: "/images/categories/therapy.jpg",
      href: "/products?category=therapy",
      color: "bg-gradient-to-tr from-purple-200 to-purple-400 text-purple-700",
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <SectionHeader
        title="Explore Our Categories"
        description="Discover our curated range of products to support children's development, therapy, and learning."
      />

      <div className="container mx-auto px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.title}>
              <Link
                href={category.href}
                className="group relative block overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
                aria-label={`Shop ${category.title} products`}
              >
                <div className="relative w-full h-64 rounded-t-3xl overflow-hidden">
                  <Image
                    src={category.image}
                    alt={`${category.title} products`}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 brightness-95 group-hover:brightness-105"
                    width={400}
                    height={300}
                    priority
                  />
                  <div
                    className={`absolute top-5 left-5 p-4 rounded-full ${category.color} shadow-lg transition-transform duration-500 group-hover:scale-110`}
                  >
                    <category.icon className="h-8 w-8" />
                  </div>
                </div>

                <div className="bg-white p-6 -mt-16 relative z-10 rounded-2xl transition-transform duration-500 group-hover:-translate-y-6">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mt-2 leading-relaxed">
                    {category.description}
                  </p>
                  <span className="mt-4 inline-block text-primary font-semibold group-hover:underline">
                    Shop Now →
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CategorySection;
