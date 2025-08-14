import { Product } from "@/components/types/product.type";
import { useCart } from "@/lib/Providers/CartProvider";

export const useAddToCart = () => {
  const { addItem } = useCart();

  const addToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      namebn: product.namebn ?? undefined,
      price: product.price,
      originalPrice: product.originalPrice ?? undefined,
      image: product.image,
      category: product.category,
      sku: product.sku ?? undefined,
      brand: product.brand ?? undefined,
      currency: product.currency ?? "BDT",
      url: product.url ?? undefined,
    });
  };

  return { addToCart };
};
