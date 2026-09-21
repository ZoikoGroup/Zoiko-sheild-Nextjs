"use client";

import React from "react";
import { motion } from "framer-motion";

export const IMG = "/images/trust-center";

export type Tone = "green" | "amber" | "red" | "slate";

const toneStyles: Record<Tone, string> = {
  green: "bg-[#e4f0ec] text-[#1f7a6c]",
  amber: "bg-[#fdf1c7] text-[#b45309]",
  red: "bg-[#fbeaea] text-[#c44242]",
  slate: "bg-[#eceae4] text-[#5b6670]",
};

export function Pill({ tone, children }: { tone: Tone; children: React.ReactNode }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 font-sans font-bold text-[12px] leading-[16px] tracking-[0.2px] whitespace-nowrap ${toneStyles[tone]}`}
    >
      {children}
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
  title,
  description,
  aside,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 w-full">
      <div className="flex flex-col gap-3 items-start">
        <p className="font-sans font-bold text-[12px] text-[#c44242] uppercase tracking-[0.8px] m-0">{eyebrow}</p>
        <h2 className="font-sans font-extrabold leading-[1.2] text-[26px] sm:text-[28px] lg:text-[32px] text-[#0a2029] tracking-[-0.5px] m-0">
          {title}
        </h2>
        {description && (
          <p className="font-manrope leading-[24px] text-[15px] lg:text-[16px] text-[#5b6670] m-0 max-w-[900px]">
            {description}
          </p>
        )}
      </div>
      {aside}
    </Reveal>
  );
}

const sectionBg = {
  light: "bg-[#f7f5f0]",
  alt: "bg-[#f0ede6]",
};

export function Section({
  tone = "light",
  id,
  className = "",
  children,
}: {
  tone?: keyof typeof sectionBg;
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`${sectionBg[tone]} border-t border-[rgba(18,59,76,0.08)] w-full scroll-mt-28`}>
      <div
        className={`flex flex-col gap-10 mx-auto max-w-[1440px] w-full px-4 sm:px-6 lg:px-10 xl:px-[108px] py-14 lg:py-[80px] ${className}`}
      >
        {children}
      </div>
    </section>
  );
}

export const cardClass = "bg-white border border-[rgba(18,59,76,0.1)] rounded-[12px]";

export const fieldClass =
  "w-full bg-[#f0ede6] border border-[rgba(18,59,76,0.1)] rounded-[8px] px-3 py-3 font-manrope text-[14px] text-[#0a2029] placeholder:text-[#8a8f96] outline-none focus:border-[#1f7a6c] focus:ring-2 focus:ring-[#1f7a6c]/20";
