import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

import LanguageProvider from "@/lib/Providers/LanguageProvider";
import { AuthProvider } from "@/lib/Providers/authProvider";
import { CartProvider } from "@/lib/Providers/CartProvider";

import Header from "@/components/shared/Components/Header";
import Footer from "@/components/shared/Components/Footer";

// Google Fonts: English
const notoSans = Noto_Sans({
  variable: "--font-english",
  subsets: ["latin"],
  display: "swap",
});

// Google Fonts: Bengali
const notoBengali = Noto_Sans_Bengali({
  variable: "--font-bengali",
  subsets: ["bengali"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Autism-AID BD",
  description:
    "Rehab equipment, resources, and support for autism, cerebral palsy, stroke, and related conditions.",
  keywords: [
    "autism",
    "rehab equipment",
    "cerebral palsy",
    "stroke",
    "therapy",
    "Bangladesh",
  ],
  authors: [{ name: "Autism-AID BD Team", url: "https://autism-aid.bd" }],
  themeColor: "#5854f1",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} ${notoBengali.variable} antialiased bg-background text-foreground font-sans`}
      >
        <LanguageProvider>
          <AuthProvider>
            <CartProvider>
              <div className="flex flex-col min-h-screen">
                {/* Header */}
                <Header />

                {/* Main Content */}
                <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 md:py-8">
                  {children}
                </main>

                {/* Footer */}
                <Footer />
              </div>
            </CartProvider>
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
