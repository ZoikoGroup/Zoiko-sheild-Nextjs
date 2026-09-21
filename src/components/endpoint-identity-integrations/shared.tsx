"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const IMG = "/images/endpoint-identity-integrations";

export type Tone = "green" | "amber" | "red" | "blue";

const toneStyles: Record<Tone, string> = {
  green: "bg-[#e4f0ec] text-[#1f7a6c]",
  amber: "bg-[#fdf1c7] text-[#b45309]",
  red: "bg-[#fbeaea] text-[#c44242]",
  blue: "bg-[#dde8f5] text-[#3b5b86]",
};

export function Pill({ tone, children }: { tone: Tone; children: React.ReactNode }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 font-jetbrains font-bold text-[11px] leading-[15px] ${toneStyles[tone]}`}
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

export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  const color = dark ? "#e0967d" : "#c44242";
  return (
    <div className="flex items-center gap-3">
      <span className="w-6 h-[2px] shrink-0" style={{ backgroundColor: color }} />
      <span
        className="font-jetbrains font-medium text-[12px] uppercase tracking-[2px]"
        style={{ color }}
      >
        {children}
      </span>
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <Reveal className="flex flex-col gap-4 items-start w-full">
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2
        className={`font-hanken font-extrabold leading-[1.15] text-[28px] sm:text-[32px] lg:text-[36px] tracking-[-0.5px] m-0 ${
          dark ? "text-white" : "text-[#0a2029]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`font-manrope font-medium leading-[24px] text-[15px] lg:text-[16px] m-0 max-w-[1000px] ${
            dark ? "text-[#c9d6e3]" : "text-[#5b6670]"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

export const containerClass =
  "flex flex-col gap-10 mx-auto max-w-[1440px] w-full px-4 sm:px-6 lg:px-10 xl:px-[108px] py-14 lg:py-[80px]";

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
      <div className={`${containerClass} ${className}`}>{children}</div>
    </section>
  );
}

/** Full-bleed dark section with a photo background and navy overlay. */
export function DarkImageSection({
  image,
  overlay = "bg-gradient-to-b from-[rgba(15,42,74,0.15)] to-[rgba(15,42,74,0.4)]",
  children,
}: {
  image: string;
  overlay?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative w-full overflow-hidden bg-[#0f2a4a]">
      <div className="absolute inset-0">
        <Image src={image} alt="" fill sizes="100vw" className="object-cover brightness-[1.2]" />
        <div className={`absolute inset-0 ${overlay}`} />
      </div>
      <div className={`relative ${containerClass}`}>{children}</div>
    </section>
  );
}

export const cardClass =
  "bg-white border border-[rgba(18,59,76,0.1)] rounded-[12px]";

/** Two-column text + image layout used by the product/photo sections. */
export function MediaSection({
  alt = false,
  reverse = false,
  eyebrow,
  title,
  lead,
  children,
  image,
  imageAlt,
}: {
  alt?: boolean;
  reverse?: boolean;
  eyebrow: string;
  title: string;
  lead: string;
  children?: React.ReactNode;
  image: string;
  imageAlt: string;
}) {
  return (
    <Section alt={alt}>
      <div
        className={`flex flex-col gap-10 lg:gap-12 lg:items-center w-full ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <Reveal className="flex flex-col gap-5 items-start flex-1 min-w-0">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="font-hanken font-extrabold leading-[1.15] text-[28px] sm:text-[32px] lg:text-[36px] text-[#0a2029] tracking-[-0.5px] m-0">
            {title}
          </h2>
          <p className="font-manrope font-medium leading-[27px] text-[16px] lg:text-[17px] text-[#5b6670] m-0">
            {lead}
          </p>
          {children}
        </Reveal>
        <Reveal delay={0.1} className="w-full lg:w-[44%] xl:w-[520px] shrink-0">
          <div className="relative w-full aspect-[3/2] rounded-[16px] overflow-hidden">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
