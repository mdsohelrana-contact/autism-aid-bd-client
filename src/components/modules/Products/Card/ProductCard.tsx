"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Product } from "@/components/types/product.type";
import CartButton from "@/components/shared/Components/Buttons/CartButton";
import Link from "next/link";

export interface ProductButtons {
  onAddToCart?: (product: Product) => void;
  onFavorite?: (product: Product) => void;
}

interface ProductCardProps {
  product: Product;
  buttons?: ProductButtons;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, buttons }) => {
  const savings = product.originalPrice ? product.originalPrice - product.price : 0;

  return (
    // hover:-translate-y-1 
    <Card className="group shadow-md transition-all duration-300 
    border-0 ">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            width={300}
            height={300}
          />

          {product.badge && (
            <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
              {product.badge}
            </Badge>
          )}

          {savings > 0 && (
            <div className="absolute bottom-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
              Save ৳{savings.toLocaleString()}
            </div>
          )}
        </div>

        <div className="p-4 space-y-3">
          <div className="space-y-1">
            {product.category && (
              <p className="text-sm text-muted-foreground">{product.category}</p>
            )}

          <Link className="font-serif font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 " href={`/products/${product.id}`}>
            <h2 className="hover:underline hover:decoration-blue-600 hover:text-blue-600">{product.name}</h2>
            </Link>
          </div>

          {product.rating !== undefined && (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              {product.reviews !== undefined && (
                <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
              )}
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-primary">
                  ৳{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    ৳{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          </div>

          {buttons?.onAddToCart && (
           <CartButton >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart 
           </CartButton>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
