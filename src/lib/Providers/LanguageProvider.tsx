"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "bn";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Translation dictionary
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.about": "About Us",
    "nav.contact": "Contact",
    "nav.cart": "Cart",
    "nav.account": "Account",
    "nav.blog": "Blog",
    "nav.signIn": "Sign In",
    "nav.register": "Register",
    "nav.myAccount": "My Account",
    "nav.myOrders": "My Orders",
    "nav.signOut": "Sign Out",

    "categories.cognitive": "Cognitive Development",
    "categories.focus": "Focus & Attention",
    "categories.eyeContact": "Eye Contact Training",
    "categories.communication": "Communication Aids",
    "categories.sensory": "Sensory Integration",
    "categories.motor": "Motor Skills",

    "blog.autism": "Autism Resources",
    "blog.cp": "Cerebral Palsy",
    "blog.stroke": "Stroke Recovery",
    "blog.therapy": "Therapy Guides",
    "blog.family": "Family Support",

    // Homepage
    "hero.title": "Empowering Lives Through Quality Rehabilitation Equipment",
    "hero.subtitle":
      "Discover premium autism therapy tools and rehabilitation equipment designed to support development and enhance quality of life.",
    "hero.cta": "Shop Now",
    "hero.learn_more": "Learn More",

    // Products
    "products.title": "Our Products",
    "products.subtitle":
      "Carefully selected rehabilitation equipment for every need",
    "products.sensory": "Sensory Tools",
    "products.communication": "Communication Aids",
    "products.motor": "Motor Skills",
    "products.therapy": "Therapy Equipment",

    // Common
    "common.loading": "Loading...",
    "common.add_to_cart": "Add to Cart",
    "common.buy_now": "Buy Now",
    "common.price": "Price",
    "common.quantity": "Quantity",
    "common.total": "Total",
    "common.search": "Search products...",
  },
  bn: {
    // Navigation
    "nav.home": "হোম",
    "nav.products": "পণ্যসমূহ",
    "nav.about": "আমাদের সম্পর্কে",
    "nav.contact": "যোগাযোগ",
    "nav.cart": "কার্ট",
    "nav.account": "অ্যাকাউন্ট",
    "nav.blog": "ব্লগ",
    "nav.signIn": "সাইন ইন",
    "nav.register": "নিবন্ধন",
    "nav.myAccount": "আমার অ্যাকাউন্ট",
    "nav.myOrders": "আমার অর্ডার",
    "nav.signOut": "সাইন আউট",

    "categories.cognitive": "জ্ঞানীয় উন্নয়ন",
    "categories.focus": "মনোযোগ ও একাগ্রতা",
    "categories.eyeContact": "চোখের যোগাযোগ প্রশিক্ষণ",
    "categories.communication": "যোগাযোগ সহায়ক",
    "categories.sensory": "সেন্সরি ইন্টিগ্রেশন",
    "categories.motor": "মোটর দক্ষতা",

    "blog.autism": "অটিজম রিসোর্স",
    "blog.cp": "সেরিব্রাল পালসি",
    "blog.stroke": "স্ট্রোক পুনরুদ্ধার",
    "blog.therapy": "থেরাপি গাইড",
    "blog.family": "পারিবারিক সহায়তা",

    // Homepage
    "hero.title": "মানসম্পন্ন পুনর্বাসন সরঞ্জামের মাধ্যমে জীবনকে ক্ষমতায়ন",
    "hero.subtitle":
      "উন্নয়নে সহায়তা এবং জীবনযাত্রার মান বৃদ্ধির জন্য ডিজাইন করা প্রিমিয়াম অটিজম থেরাপি টুলস এবং পুনর্বাসন সরঞ্জাম আবিষ্কার করুন।",
    "hero.cta": "এখনই কিনুন",
    "hero.learn_more": "আরও জানুন",

    // Products
    "products.title": "আমাদের পণ্যসমূহ",
    "products.subtitle":
      "প্রতিটি প্রয়োজনের জন্য যত্নসহকারে নির্বাচিত পুনর্বাসন সরঞ্জাম",
    "products.sensory": "সেন্সরি টুলস",
    "products.communication": "যোগাযোগ সহায়ক",
    "products.motor": "মোটর দক্ষতা",
    "products.therapy": "থেরাপি সরঞ্জাম",

    // Common
    "common.loading": "লোড হচ্ছে...",
    "common.add_to_cart": "কার্টে যোগ করুন",
    "common.buy_now": "এখনই কিনুন",
    "common.price": "দাম",
    "common.quantity": "পরিমাণ",
    "common.total": "মোট",
    "common.search": "পণ্য খুঁজুন...",
  },
};

  const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "bn")) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export default LanguageProvider
