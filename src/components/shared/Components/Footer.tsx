"use client";

import Link from "next/link";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/lib/Providers/LanguageProvider";
const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Heart className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-serif font-bold text-xl text-primary">
                autism-AID BD
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering lives through quality rehabilitation equipment and
              compassionate support for the autism community in Bangladesh.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/products"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t("nav.products")}
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t("nav.about")}
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t("nav.contact")}
              </Link>
              <Link
                href="/support"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Support Center
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Categories</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/products?category=sensory"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t("products.sensory")}
              </Link>
              <Link
                href="/products?category=communication"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t("products.communication")}
              </Link>
              <Link
                href="/products?category=motor"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t("products.motor")}
              </Link>
              <Link
                href="/products?category=therapy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t("products.therapy")}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+880 1700-000000</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@autismaidbd.com</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>Dhanmondi, Dhaka-1205, Bangladesh</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-2">
              <h4 className="font-medium text-foreground text-sm">
                Stay Updated
              </h4>
              <div className="flex gap-2">
                <Input placeholder="Your email" className="text-sm" />
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 autism-AID BD. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/shipping"
              className="hover:text-primary transition-colors"
            >
              Shipping Info
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
