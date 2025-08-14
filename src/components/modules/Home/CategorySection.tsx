"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/Providers/LanguageProvider";
import { Brain, MessageCircle, Activity, Puzzle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const CategorySection = () => {
  const { t } = useLanguage();

  const categories = [
    {
      icon: Brain,
      title: t("products.sensory"),
      description: "Sensory integration tools, weighted blankets, fidget toys",
      image: "/placeholder.svg?height=300&width=400",
      href: "/products?category=sensory",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: MessageCircle,
      title: t("products.communication"),
      description: "AAC devices, picture cards, communication boards",
      image: "/placeholder.svg?height=300&width=400",
      href: "/products?category=communication",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Activity,
      title: t("products.motor"),
      description: "Fine motor tools, gross motor equipment, balance aids",
      image: "/placeholder.svg?height=300&width=400",
      href: "/products?category=motor",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Puzzle,
      title: t("products.therapy"),
      description: "Professional therapy equipment, assessment tools",
      image: "/placeholder.svg?height=300&width=400",
      href: "/products?category=therapy",
      color: "bg-purple-100 text-purple-600",
    },
  ];
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
            {t("products.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("products.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link key={category.title} href={category.href}>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      width={400}
                      height={300}
                    />
                    <div className="absolute top-4 left-4">
                      <div className={`p-3 rounded-full ${category.color}`}>
                        <category.icon className="h-6 w-6" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
