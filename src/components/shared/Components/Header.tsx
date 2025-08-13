"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/Providers/LanguageProvider";
import { useAuth } from "@/lib/Providers/authProvider";
import { ThemeToggle } from "../Toggoles/ThemeToggole";
import { LanguageToggle } from "../Toggoles/LanguageToggole";
import CartSheet from "./CartSheet";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const { user, logout } = useAuth();
  const pathname = usePathname();

  const productCategories = [
    { name: t("categories.cognitive"), href: "/products/cognitive" },
    { name: t("categories.focus"), href: "/products/focus" },
    { name: t("categories.eyeContact"), href: "/products/eye-contact" },
    { name: t("categories.communication"), href: "/products/communication" },
    { name: t("categories.sensory"), href: "/products/sensory" },
    { name: t("categories.motor"), href: "/products/motor" },
  ];

  const blogCategories = [
    { name: t("blog.autism"), href: "/blog/autism" },
    { name: t("blog.cp"), href: "/blog/cerebral-palsy" },
    { name: t("blog.stroke"), href: "/blog/stroke" },
    { name: t("blog.therapy"), href: "/blog/therapy" },
    { name: t("blog.family"), href: "/blog/family" },
  ];

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  const handleLogout = () => logout();

  const menuVariants = {
    open: { opacity: 1, maxHeight: "1000px", transition: { duration: 0.3 } },
    closed: { opacity: 0, maxHeight: 0, transition: { duration: 0.3 } },
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center transition-colors duration-300">
            <Heart className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="font-serif font-bold text-xl text-primary hidden sm:block">
            autism-AID BD
          </span>
          <span className="font-serif font-bold text-lg text-primary sm:hidden">
            AID BD
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex space-x-2 items-center">
            {navigation.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink
                  className={cn(
                    "inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                  href={item.href}
                >
                  {item.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

            {/* Products Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>{t("nav.products")}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {productCategories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="block space-y-1 rounded-md p-3 text-sm leading-none transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        {category.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Blog Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>{t("nav.blog")}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {blogCategories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="block space-y-1 rounded-md p-3 text-sm leading-none transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        {category.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right-side actions */}
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <LanguageToggle />

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hidden sm:flex text-foreground"
                >
                  <User className="h-4 w-4 mr-2" />
                  {user.name.split(" ")[0]}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 bg-background text-foreground"
              >
                <div className="px-2 py-1.5">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
                <DropdownMenuSeparator className="border-border" />
                <DropdownMenuItem asChild>
                  <Link href="/account">{t("nav.myAccount")}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/account?tab=orders">{t("nav.myOrders")}</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="border-border" />
                <DropdownMenuItem onClick={handleLogout}>
                  {t("nav.signOut")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden sm:flex items-center space-x-2">
              <Button asChild variant="outline" size="sm">
                <Link href="/signup">{t("nav.register")}</Link>
              </Button>
            </div>
          )}

          <CartSheet />

          {/* Mobile toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="lg:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur"
          >
            <nav className="flex flex-col space-y-1 p-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    pathname === item.href
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-primary hover:bg-accent"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Products mobile */}
              <div className="pl-3">
                <p className="text-sm font-medium text-foreground">
                  {t("nav.products")}
                </p>
                {productCategories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="block px-3 py-2 text-sm text-muted-foreground rounded-md hover:text-primary hover:bg-accent transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>

              {/* Blog mobile */}
              <div className="pl-3">
                <p className="text-sm font-medium text-foreground">
                  {t("nav.blog")}
                </p>
                {blogCategories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="block px-3 py-2 text-sm text-muted-foreground rounded-md hover:text-primary hover:bg-accent transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>

              {/* Register button mobile */}
              {!user && (
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2 w-full text-center cursor-pointer"
                >
                  <Link href="/signup">{t("nav.register")}</Link>
                </Button>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
