import React from "react";
import { cn } from "@/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "cyan" | "emerald" | "amber" | "outline";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = "primary", className }) => {
  const variants = {
    primary: "bg-zoiko-primary/8 text-zoiko-primary border-zoiko-primary/20",
    cyan: "bg-zoiko-cyan/8 text-zoiko-cyan border-zoiko-cyan/20",
    emerald: "bg-emerald-500/10 text-zoiko-emerald border-emerald-500/20",
    amber: "bg-amber-500/10 text-zoiko-amber border-amber-500/20",
    outline: "bg-white/40 text-zoiko-dark border-zoiko-border dark:bg-white/5 dark:text-gray-300 dark:border-white/10",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-md transition-all duration-300",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
