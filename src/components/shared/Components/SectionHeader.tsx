"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

interface SectionHeaderProps {
  title: string; // Main heading
  description?: string; // Optional subtext
  badgeText?: string; // Optional badge
  badgeIcon?: boolean; // show Zap icons?
  className?: string; // Extra classes for container
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  badgeText,
  badgeIcon = true,
  className = "",
}) => {
  return (
    <motion.header
      className={`text-center mb-16 px-4 sm:px-6 lg:px-8 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Badge + Icons */}
      {badgeText && badgeIcon && (
        <div className="flex items-center justify-center gap-3 mb-6">
          <Zap className="h-6 w-6 text-accent animate-pulse" />
          <Badge className="bg-accent-20 text-accent-foreground font-semibold px-6 py-2 rounded-full">
            {badgeText}
          </Badge>
          <Zap className="h-6 w-6 text-accent animate-pulse" />
        </div>
      )}

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
          {description}
        </p>
      )}
    </motion.header>
  );
};
