"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Star, ShoppingCart, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { OfferProduct } from "@/components/types/product.type";
import CartButton from "@/components/shared/Components/Buttons/CartButton";

interface OfferProductCardProps {
  product: OfferProduct;
  onAddToCart: () => void;
}

const OfferProductCard: React.FC<OfferProductCardProps> = ({
  product,
  onAddToCart,
}) => {
  const {
    name,
    category,
    image,
    price,
    originalPrice,
    discount,
    rating,
    reviews,
    badge,
    timeLeft,
    isFlashSale,
  } = product;

  return (
    <motion.article
      whileHover={{ scale: 1.015, y: -2 }}
      className="group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      itemScope
      itemType="https://schema.org/Product"
    >
      <Card className="group border-0 shadow-md rounded-lg transition-all duration-300 hover:shadow-lg">
        <CardContent className="p-0">
          {/* Image */}
          <figure className="relative" itemProp="image">
            <Image
              src={image}
              alt={`${name} - ${category} special offer`}
              width={400}
              height={300}
              className="w-full h-52 object-cover transition-transform duration-500 "
            />

            {/* Discount */}
            {discount > 0 && (
              <Badge
                className={`absolute top-3 left-3 px-2 py-0.5 text-xs rounded-full font-semibold ${
                  isFlashSale
                    ? "bg-red-500 text-white"
                    : "bg-primary text-white"
                }`}
              >
                -{discount}%
              </Badge>
            )}

            {/* Label */}
            {badge && (
              <Badge className="absolute top-3 right-3 bg-white/90 text-xs font-medium text-foreground px-2 py-0.5 rounded-full">
                {badge}
              </Badge>
            )}

            {/* Time Left */}
            {timeLeft && (
              <div className="absolute bottom-3 left-3 bg-black/80 text-white px-2 py-0.5 rounded-full text-[11px] flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {timeLeft}
              </div>
            )}
          </figure>

          {/* Content */}
          <div className="p-4 space-y-3">
            {/* Category & Name */}
            <header>
              <p
                className="text-[11px] text-muted-foreground uppercase tracking-wide"
                itemProp="category"
              >
                {category}
              </p>
              <h3
                className="text-sm font-semibold line-clamp-2 group-hover:text-primary transition-colors"
                itemProp="name"
              >
                {name}
              </h3>
            </header>

            {/* Rating */}
            <div
              className="flex items-center gap-1 text-xs text-muted-foreground"
              itemProp="aggregateRating"
              itemScope
              itemType="https://schema.org/AggregateRating"
            >
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="font-medium" itemProp="ratingValue">
                {rating}
              </span>
              <span>
                (<span itemProp="reviewCount">{reviews}</span>)
              </span>
            </div>

            {/* Price */}
            <div
              className="flex items-baseline gap-2"
              itemProp="offers"
              itemScope
              itemType="https://schema.org/Offer"
            >
              <span
                className="text-lg font-bold text-primary"
                itemProp="price"
                content={price.toString()}
              >
                ৳{price.toLocaleString()}
              </span>
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ৳{originalPrice.toLocaleString()}
                </span>
              )}
              <meta itemProp="priceCurrency" content="BDT" />
              <link itemProp="availability" href="https://schema.org/InStock" />
            </div>

            {/* Add to Cart */}
            <CartButton
              
              variant="primary"
              onClick={onAddToCart}
              className="w-full"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </CartButton>
          </div>
        </CardContent>
      </Card>
    </motion.article>
  );
};

export default OfferProductCard;
