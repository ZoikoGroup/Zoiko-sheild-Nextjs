import React from "react";

interface SectionEyebrowProps {
  text: string;
  className?: string;
  light?: boolean;
}

export default function SectionEyebrow({
  text,
  className = "",
  light = false,
}: SectionEyebrowProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span
        className={`h-0.5 w-8 shrink-0 ${light ? "bg-[#C44242]" : "bg-[#C44242]"}`}
        aria-hidden="true"
      />
      <span className="font-jetbrains text-[13px] font-bold uppercase tracking-[0.13em] text-[#C44242]">
        {text}
      </span>
    </div>
  );
}
