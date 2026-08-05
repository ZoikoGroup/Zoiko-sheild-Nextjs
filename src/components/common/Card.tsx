import React from "react";
import { cn } from "@/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, glowOnHover = true }) => {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 relative overflow-hidden",
        glowOnHover && "hover:border-zoiko-primary/30 hover:shadow-lg hover:shadow-zoiko-primary/5",
        className
      )}
    >
      {children}
    </div>
  );
};
