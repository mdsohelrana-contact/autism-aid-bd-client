"use client";

import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import clsx from "clsx";

interface CartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg"; // only controls width
  fullWidth?: boolean;
}

const CartButton: FC<CartButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = true,
  className,
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center gap-2 font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed px-3 py-1 text-sm cursor-pointer";

  const widthStyle = clsx({
    "w-full": fullWidth,
    "w-20": !fullWidth && size === "sm",
    "w-28": !fullWidth && size === "md",
    "w-36": !fullWidth && size === "lg",
  });

  const variantStyle = clsx({
    "bg-primary text-white hover:bg-primary/90 active:bg-primary/80":
      variant === "primary",
    "bg-secondary text-white hover:bg-secondary/90 active:bg-secondary/80":
      variant === "secondary",
    "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 active:bg-gray-100":
      variant === "ghost",
  });

  return (
    <button
      className={clsx(baseStyle, widthStyle, variantStyle, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default CartButton;
