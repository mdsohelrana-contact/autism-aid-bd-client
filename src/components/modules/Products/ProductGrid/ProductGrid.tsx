"use client";

import { Product } from "@/components/types/product.type";
import { motion } from "framer-motion";
import ProductCard from "../Card/ProductCard";

interface ProductGridProps {
  products: Product[];
  handleAddToCart: (product: Product) => void;
  handleFavorite?: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  handleAddToCart,
  handleFavorite,
}) => {
  return (
    <motion.div
      className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
        >
          <ProductCard
            product={product}
            buttons={{
              onAddToCart: () => handleAddToCart(product),
              onFavorite: handleFavorite ? () => handleFavorite(product) : undefined,
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProductGrid;
