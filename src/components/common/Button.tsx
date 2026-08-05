import React from "react";
import { cn } from "@/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "cyan" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:scale-95";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-zoiko-primary hover:bg-[#8C181C] text-white shadow-md border border-zoiko-primary/30 transition-all",
    cyan:
      "bg-zoiko-cyan hover:bg-[#2563EB] text-white shadow-md font-semibold transition-all",
    secondary:
      "bg-white hover:bg-zoiko-card-hover text-zoiko-dark border border-zoiko-border shadow-sm transition-all",
    ghost: "bg-transparent hover:bg-black/5 text-zoiko-dark hover:text-black dark:hover:bg-white/10 dark:text-white",
    outline:
      "bg-transparent hover:bg-zoiko-dark/5 text-zoiko-dark border border-zoiko-dark/20 hover:border-zoiko-dark dark:text-white dark:border-white/20 dark:hover:border-white dark:hover:bg-white/5 shadow-sm",
  };

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
