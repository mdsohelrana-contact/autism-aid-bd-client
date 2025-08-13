/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Plus, Minus, Trash2, ShoppingBag } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/Providers/LanguageProvider"
import { useCart } from "@/lib/Providers/CartProvider"

const CartSheet = () => {
  const { items, updateQuantity, removeItem, getTotalItems, getTotalPrice, isOpen, setIsOpen } = useCart()
  const { language } = useLanguage()

  const totalItems = getTotalItems()
  const totalPrice = getTotalPrice()

  const t = (en: string, bn: string) => (language === "bn" ? bn : en)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="relative">
          <ShoppingCart className="h-4 w-4" />
          {totalItems > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
            >
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            {t("Shopping Cart", "শপিং কার্ট")} ({totalItems} {t("items", "আইটেম")})
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
              <ShoppingCart className="h-16 w-16 text-muted-foreground" />
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">{t("Your cart is empty", "আপনার কার্ট খালি")}</h3>
                <p className="text-sm text-muted-foreground">
                  {t("Add some products to get started", "শুরু করতে কিছু পণ্য যোগ করুন")}
                </p>
              </div>
              <Button asChild onClick={() => setIsOpen(false)}>
                <Link href="/">{t("Continue Shopping", "কেনাকাটা চালিয়ে যান")}</Link>
              </Button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto py-4 space-y-4">
                {items.map((item: any) => (
                  <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                      width={64}
                      height={64}
                    />
                    <div className="flex-1 space-y-2">
                      <div>
                        <h4 className="font-medium text-sm line-clamp-2">{item.name}</h4>
                        <p className="text-xs text-muted-foreground">{item.category}</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 w-8 p-0 bg-transparent"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 w-8 p-0 bg-transparent"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-primary">
                          ৳{(item.price * item.quantity).toLocaleString()}
                        </span>
                        {item.originalPrice && (
                          <span className="text-xs text-muted-foreground line-through">
                            ৳{(item.originalPrice * item.quantity).toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Summary */}
              <div className="border-t pt-4 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>
                      {t("Subtotal", "সাবটোটাল")} ({totalItems} {t("items", "আইটেম")})
                    </span>
                    <span>৳{totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>{t("Shipping", "শিপিং")}</span>
                    <span className="text-green-600">{t("Free", "বিনামূল্যে")}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>{t("Total", "মোট")}</span>
                    <span className="text-primary">৳{totalPrice.toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button asChild className="w-full" onClick={() => setIsOpen(false)}>
                    <Link href="/checkout">{t("Proceed to Checkout", "চেকআউটে এগিয়ে যান")}</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full bg-transparent" onClick={() => setIsOpen(false)}>
                    <Link href="/">{t("Continue Shopping", "কেনাকাটা চালিয়ে যান")}</Link>
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default CartSheet
