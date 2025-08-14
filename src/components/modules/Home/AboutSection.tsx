"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/Providers/LanguageProvider";

import { Award, Users, Truck, HeadphonesIcon } from "lucide-react";
import Image from "next/image";
const AboutSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      title: "Quality Assured",
      description:
        "All products are tested and certified for safety and effectiveness",
    },
    {
      icon: Users,
      title: "Expert Support",
      description:
        "Our team includes therapists and special education professionals",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Free delivery in Dhaka, nationwide shipping available",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Always here to help with product selection and guidance",
    },
  ];
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
                Empowering Lives Through Quality Care
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At autism-AID BD, we understand the unique needs of individuals
                with autism and their families. Our carefully curated selection
                of rehabilitation equipment is designed to support development,
                enhance communication, and improve quality of life.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Founded by parents and professionals who understand the journey,
                we&apos;re committed to providing accessible, high-quality tools
                that make a real difference in daily life.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Therapy session"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                width={600}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Stats overlay */}
            <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl border-0">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">
                      Families Served
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-sm text-muted-foreground">
                      Satisfaction Rate
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
