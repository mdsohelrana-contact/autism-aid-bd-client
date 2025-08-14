export interface Product {
  id: number;
  sku?: string;
  name: string;
  namebn?: string;
  url?: string;
  brand?: string;

  // Pricing
  price: number;
  originalPrice?: number;
  currency?: string;
  discount?: number;

  // Stock & availability
  inStock?: boolean;
  availability?: "InStock" | "OutOfStock";
  quantity?: number;

  // Category & tags
  category: string;
  tags?: string[];

  // Ratings & reviews
  rating?: number;
  reviews?: number;

  // Visuals
  image: string;
  gallery?: string[];
  badge?: string;

  // Description & content
  description?: string;
  shortDescription?: string;

  // SEO & structured data
  releaseDate?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string[];

  // Optional extras
  weight?: number;
  dimensions?: string;
  color?: string;
  material?: string;
  warranty?: string;
}

export interface OfferProduct {
  id: number;
  name: string;
  namebn?: string;
  category: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  badge?: string;
  timeLeft?: string;
  isFlashSale?: boolean;
}
