"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css/parallax";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Heart, Shield, Truck, Gift, Star } from "lucide-react";
import { useLanguage } from "@/lib/Providers/LanguageProvider";

interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  image: string;
  badge?: {
    text: string;
    type: "offer" | "new" | "popular";
  };
}

export function HeroSection() {
  const { t } = useLanguage();

  const slides: CarouselSlide[] = [
    {
      id: 1,
      title: t("hero.title"),
      subtitle: t("hero.subtitle"),
      ctaText: t("hero.cta"),
      ctaLink: "/products",
      secondaryCtaText: t("hero.learn_more"),
      secondaryCtaLink: "/about",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1920&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Cognitive Development Tools",
      subtitle:
        "Enhance learning and cognitive skills with our specialized equipment designed for autism therapy",
      ctaText: "Shop Cognitive Tools",
      ctaLink: "/products?category=cognitive",
      image:
        "https://images.unsplash.com/photo-1522206024047-9c925421675b?q=80&w=1920&auto=format&fit=crop",
      badge: { text: "25% OFF", type: "offer" },
    },
    {
      id: 3,
      title: "Focus & Attention Training",
      subtitle:
        "Build concentration and attention span with our proven focus enhancement equipment",
      ctaText: "View Focus Tools",
      ctaLink: "/products?category=focus",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1920&auto=format&fit=crop",
      badge: { text: "NEW", type: "new" },
    },
  ];

  const getBadgeStyles = (type: string) => {
    switch (type) {
      case "offer":
        return "bg-red-500 text-white";
      case "new":
        return "bg-green-500 text-white";
      case "popular":
        return "bg-blue-500 text-white";
      default:
        return "bg-primary text-primary-foreground";
    }
  };

  const getBadgeIcon = (type: string) => {
    switch (type) {
      case "offer":
        return <Gift className="h-3 w-3" />;
      case "new":
        return <Star className="h-3 w-3" />;
      case "popular":
        return <Heart className="h-3 w-3" />;
      default:
        return null;
    }
  };

  return (
    <section className="relative overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade, Parallax]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        effect="fade"
        speed={1000}
        parallax
        className="h-[500px] md:h-[600px] lg:h-[700px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            {/* Background with parallax */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
              data-swiper-parallax="-20%"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Text content */}
            <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
              <div
                className="max-w-2xl text-white space-y-6 bg-black/30 p-6 rounded-lg"
                data-swiper-parallax="-100"
              >
                {slide.badge && (
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${getBadgeStyles(
                      slide.badge.type
                    )} shadow-lg`}
                  >
                    {getBadgeIcon(slide.badge.type)}
                    {slide.badge.text}
                  </div>
                )}

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl opacity-90">{slide.subtitle}</p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <Link href={slide.ctaLink}>
                      {slide.ctaText}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  {slide.secondaryCtaText && (
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-white text-white hover:bg-white/10"
                    >
                      <Link href={slide.secondaryCtaLink!}>
                        {slide.secondaryCtaText}
                      </Link>
                    </Button>
                  )}
                </div>

                {index === 0 && (
                  <div className="flex flex-wrap gap-6 pt-6 border-t border-white/20">
                    <div className="flex items-center gap-2 text-sm opacity-80">
                      <Heart className="h-4 w-4 text-red-400" />
                      <span>Trusted by 500+ families</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm opacity-80">
                      <Shield className="h-4 w-4 text-green-400" />
                      <span>Quality guaranteed</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm opacity-80">
                      <Truck className="h-4 w-4 text-yellow-400" />
                      <span>Free delivery in Dhaka</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
