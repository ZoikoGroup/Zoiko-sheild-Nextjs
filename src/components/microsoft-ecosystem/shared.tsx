"use client";

import React from "react";
import { motion } from "framer-motion";

export type Tone = "teal" | "amber" | "red" | "slate";

const toneStyles: Record<Tone, { bg: string; text: string; dot: string }> = {
  teal: { bg: "bg-[#e4f0ec]", text: "text-[#1f7a6c]", dot: "bg-[#1f7a6c]" },
  amber: { bg: "bg-[#fdf1e3]", text: "text-[#d97706]", dot: "bg-[#d97706]" },
  red: { bg: "bg-[#fbeaea]", text: "text-[#c44242]", dot: "bg-[#c44242]" },
  slate: { bg: "bg-[#e9edf2]", text: "text-[#4b5d70]", dot: "bg-[#4b5d70]" },
};

export const toneText: Record<Tone, string> = {
  teal: "text-[#1f7a6c]",
  amber: "text-[#d97706]",
  red: "text-[#c44242]",
  slate: "text-[#5b6670]",
};

export function Badge({
  tone = "teal",
  dot = true,
  size = "md",
  children,
}: {
  tone?: Tone;
  dot?: boolean;
  size?: "sm" | "md";
  children: React.ReactNode;
}) {
  const s = toneStyles[tone];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full shrink-0 ${s.bg} ${
        size === "sm" ? "px-2 py-[3px]" : "px-2.5 py-1"
      }`}
    >
      {dot && <span className={`rounded-full size-[6px] shrink-0 ${s.dot}`} />}
      <span
        className={`font-jetbrains font-bold uppercase whitespace-nowrap ${s.text} ${
          size === "sm" ? "text-[10px]" : "text-[11px]"
        }`}
      >
        {children}
      </span>
    </span>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  eyebrow,
  eyebrowTone = "teal",
  title,
  description,
  descriptionClassName = "max-w-[740px]",
}: {
  eyebrow?: string;
  eyebrowTone?: Tone;
  title: React.ReactNode;
  description?: React.ReactNode;
  descriptionClassName?: string;
}) {
  return (
    <Reveal className="flex flex-col gap-4 items-start w-full">
      {eyebrow && <Badge tone={eyebrowTone}>{eyebrow}</Badge>}
      <h2 className="font-hanken font-extrabold leading-[1.1] text-[28px] sm:text-[32px] lg:text-[36px] text-[#0a2029] tracking-[-0.5px] m-0">
        {title}
      </h2>
      {description && (
        <p
          className={`font-manrope leading-[23px] lg:leading-[25px] text-[14.5px] lg:text-[16px] text-[#5b6670] m-0 ${descriptionClassName}`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

export function Section({
  alt = false,
  className = "",
  children,
}: {
  alt?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`${alt ? "bg-[#f0ede6]" : "bg-[#f7f5f0]"} border-t border-[rgba(18,59,76,0.08)] w-full`}
    >
      <div
        className={`flex flex-col gap-10 lg:gap-12 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-[108px] py-14 lg:py-[80px] ${className}`}
      >
        {children}
      </div>
    </section>
  );
}

export const cardClass =
  "bg-white border border-[rgba(18,59,76,0.1)] rounded-[16px]";
