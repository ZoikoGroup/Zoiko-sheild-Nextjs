import React from "react";

type Props = {
  label: string;
  tone?: "red" | "teal" | "light";
};

const TONES: Record<NonNullable<Props["tone"]>, { bar: string; text: string }> =
  {
    red: { bar: "bg-[#C53B3B]", text: "text-[#C53B3B]" },
    teal: { bar: "bg-[#0F766E]", text: "text-[#0F766E]" },
    light: { bar: "bg-[#C53B3B]", text: "text-white/70" },
  };

export default function SectionEyebrow({ label, tone = "red" }: Props) {
  const t = TONES[tone];
  return (
    <div className="mb-5 flex items-center gap-2.5">
      <span className={`h-0.5 w-5 shrink-0 ${t.bar}`} aria-hidden="true" />
      <span
        className={`font-jetbrains text-[11px] font-bold uppercase tracking-wider sm:text-xs ${t.text}`}
      >
        {label}
      </span>
    </div>
  );
}
