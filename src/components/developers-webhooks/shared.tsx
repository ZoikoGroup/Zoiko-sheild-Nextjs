"use client";

import React from "react";
import { motion } from "framer-motion";

export const IMG = "/images/developers-webhooks";

export type Tone = "green" | "amber" | "red" | "slate";

const toneStyles: Record<Tone, string> = {
  green: "bg-[#e4f0ec] text-[#1f7a6c]",
  amber: "bg-[#fdf1c7] text-[#b45309]",
  red: "bg-[#fbeaea] text-[#c44242]",
  slate: "bg-[#eceae4] text-[#5b6670]",
};

/** Small rectangular status tag (RELEASED, 200 OK, v1.4 ACTIVE, …). */
export function Tag({
  tone,
  children,
  className = "",
}: {
  tone: Tone;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-[4px] px-2 py-0.5 font-jetbrains font-bold text-[10px] leading-[16px] whitespace-nowrap ${toneStyles[tone]} ${className}`}
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
    <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 w-full">
      <div className="flex flex-col gap-3 items-start">
        <p className="font-jetbrains font-bold text-[12px] text-[#c44242] uppercase tracking-[1px] m-0">
          {eyebrow}
        </p>
        <h2 className="font-hanken font-extrabold leading-[1.2] text-[26px] sm:text-[28px] lg:text-[30px] text-[#0a2029] tracking-[-0.3px] m-0">
          {title}
        </h2>
        {description && (
          <p className="font-manrope leading-[24px] text-[15px] lg:text-[16px] text-[#5b6670] m-0 max-w-[1000px]">
            {description}
          </p>
        )}
      </div>
      {aside}
    </Reveal>
  );
}

export function Section({
  alt = false,
  id,
  className = "",
  children,
}: {
  alt?: boolean;
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`${alt ? "bg-[#f0ede6]" : "bg-[#f7f5f0]"} border-t border-[rgba(18,59,76,0.08)] w-full scroll-mt-28`}
    >
      <div
        className={`flex flex-col gap-8 mx-auto max-w-[1440px] w-full px-4 sm:px-6 lg:px-10 xl:px-[108px] py-14 lg:py-[80px] ${className}`}
      >
        {children}
      </div>
    </section>
  );
}

export const cardClass = "bg-white border border-[rgba(18,59,76,0.1)] rounded-[12px]";

export const tableHeadCell =
  "font-jetbrains font-bold text-[11px] text-[#0a2029] text-left uppercase px-4 py-4";

/** Renders an identifier like `event.device.unhealthy_v1` so it only wraps after `.` or `_`. */
export function BreakableName({ children }: { children: string }) {
  const parts: string[] = [];
  let current = "";
  for (const ch of children) {
    current += ch;
    if (ch === "." || ch === "_") {
      parts.push(current);
      current = "";
    }
  }
  if (current) parts.push(current);
  return (
    <>
      {parts.map((p, i) => (
        <React.Fragment key={i}>
          {p}
          {i < parts.length - 1 && <wbr />}
        </React.Fragment>
      ))}
    </>
  );
}
