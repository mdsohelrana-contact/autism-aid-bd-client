"use client";

import { FC, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import clsx from "clsx";

interface ViewAllButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "lg" | "default" | "icon";
  className?: string;
}

const PrimaryButton: FC<ViewAllButtonProps> = ({
  href,
  children,
  variant = "primary",
  size = "lg",
  className,
}) => {
  const variantStyle = clsx({
    "bg-primary text-white hover:bg-primary/90 active:bg-primary/80":
      variant === "primary",
    "bg-secondary text-white hover:bg-secondary/90 active:bg-secondary/80":
      variant === "secondary",
    "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 active:bg-gray-100":
      variant === "ghost",
  });

  return (
    <Link href={href} passHref>
      <Button
        variant="default" // Keep it compatible with your UI library
        size={size}
        className={clsx(variantStyle, className, "cursor-pointer transition-all duration-200 font-bold")}
      >
        {children}
      </Button>
    </Link>
  );
};

export default PrimaryButton;
