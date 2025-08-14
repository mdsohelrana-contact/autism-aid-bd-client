"use client";

import React, { ReactNode } from "react";
import { SectionHeader } from "./SectionHeader";

interface SectionProps {
  title?: string;
  description?: string;
  badgeText?: string;
  badgeIcon?: boolean;
  className?: string;
  children: ReactNode;
}

export const CustomSection: React.FC<SectionProps> = ({
  title,
  description,
  badgeText,
  badgeIcon = true,
  className = "",
  children,
}) => {
  return (
    <section
      className={`relative w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 ${className}`}
    >
      {/* Optional Header */}
      {(title || description || badgeText) && (
        <SectionHeader
          title={title || ""}
          description={description}
          badgeText={badgeText}
          badgeIcon={badgeIcon}
          className="mb-12"
        />
      )}

      {/* Section Content */}
      <div className="w-full max-w-screen-xl mx-auto grid gap-8 sm:gap-10 md:gap-12 lg:gap-16">
        {children}
      </div>
    </section>
  );
};
