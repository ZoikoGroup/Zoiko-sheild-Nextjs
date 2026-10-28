import React from "react";
import Image from "next/image";

interface ZoikoLogoProps {
  variant?: "light" | "dark";
  className?: string;
  height?: number;
}

export const ZoikoLogo: React.FC<ZoikoLogoProps> = ({ variant = "light", className = "", height = 36 }) => {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <Image
        src="/images/logo.png"
        alt="Zoiko Shield Logo"
        // logo.png is 105×32; keep the attributes in that ratio so next/image doesn't warn.
        width={Math.round((height * 105) / 32)}
        height={height}
        className={`h-9 w-auto object-contain ${variant === "dark" ? "brightness-110 contrast-125" : ""}`}
        priority
      />
    </div>
  );
};
