"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const IMG = "/images/security-trust-center";

export type Tone = "green" | "amber" | "red" | "blue";

const toneStyles: Record<Tone, string> = {
  green: "bg-[#e4f0ec] text-[#1f7a6c]",
  amber: "bg-[#fdf1c7] text-[#b45309]",
  red: "bg-[#fbeaea] text-[#c44242]",
  blue: "bg-[#dde8f5] text-[#4b5d70]",
};

export function Pill({ tone, children }: { tone: Tone; children: React.ReactNode }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 font-jetbrains font-bold text-[11px] leading-[15px] tracking-[0.3px] whitespace-nowrap ${toneStyles[tone]}`}
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
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  dark?: boolean;
}) {
  const accent = dark ? "#e0967d" : "#c44242";
  return (
    <Reveal className="flex flex-col gap-4 items-start w-full">
      <div className="flex items-center gap-3">
        <span className="w-6 h-[2px] shrink-0" style={{ backgroundColor: accent }} />
        <span className="font-jetbrains font-bold text-[12px] uppercase tracking-[1.5px]" style={{ color: accent }}>
          {eyebrow}
        </span>
      </div>
      <h2
        className={`font-hanken font-extrabold leading-[1.15] text-[28px] sm:text-[32px] lg:text-[36px] tracking-[-0.5px] m-0 ${
          dark ? "text-white" : "text-[#0a2029]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`font-manrope font-medium leading-[24px] text-[15px] lg:text-[16px] m-0 max-w-[1040px] ${
            dark ? "text-[#c9d6e3]" : "text-[#5b6670]"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

const containerClass =
  "flex flex-col gap-10 mx-auto max-w-[1440px] w-full px-4 sm:px-6 lg:px-10 xl:px-[108px] py-14 lg:py-[80px]";

export function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className="bg-[#f7f5f0] border-t border-[rgba(18,59,76,0.08)] w-full">
      <div className={`${containerClass} ${className}`}>{children}</div>
    </section>
  );
}

/** Full-bleed section on a photo. The photos already carry a navy tint, so the overlay stays light. */
export function DarkImageSection({ image, children }: { image: string; children: React.ReactNode }) {
  return (
    <section className="relative w-full overflow-hidden bg-[#0b1f33]">
      <div className="absolute inset-0">
        <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(11,31,51,0.35)]" />
      </div>
      <div className={`relative ${containerClass}`}>{children}</div>
    </section>
  );
}

export const cardClass = "bg-white border border-[rgba(18,59,76,0.1)] rounded-[12px]";

export type Feature = { title: string; desc: string };

/** Plain title + paragraph columns used by most sections on this page. */
export function FeatureColumns({
  items,
  columns = 3,
  dark = false,
}: {
  items: Feature[];
  columns?: 3 | 4;
  dark?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-1 gap-x-6 gap-y-8 w-full ${
        columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"
      }`}
    >
      {items.map((f, i) => (
        <Reveal key={f.title} delay={i * 0.05} className="flex flex-col gap-2">
          <h3 className={`font-manrope font-bold text-[16px] m-0 ${dark ? "text-white" : "text-[#0a2029]"}`}>
            {f.title}
          </h3>
          <p
            className={`font-manrope text-[14px] leading-[21px] m-0 ${dark ? "text-[#c9d6e3]" : "text-[#5b6670]"}`}
          >
            {f.desc}
          </p>
        </Reveal>
      ))}
    </div>
  );
}

/** A light section whose whole body is a FeatureColumns grid. */
export function FeatureSection({
  eyebrow,
  title,
  items,
  columns = 3,
}: {
  eyebrow: string;
  title: string;
  items: Feature[];
  columns?: 3 | 4;
}) {
  return (
    <Section>
      <SectionHeader eyebrow={eyebrow} title={title} />
      <FeatureColumns items={items} columns={columns} />
    </Section>
  );
}

/** A photo-backed dark section whose body is a FeatureColumns grid. */
export function DarkFeatureSection({
  image,
  eyebrow,
  title,
  items,
  children,
}: {
  image: string;
  eyebrow: string;
  title: string;
  items: Feature[];
  children?: React.ReactNode;
}) {
  return (
    <DarkImageSection image={image}>
      <SectionHeader dark eyebrow={eyebrow} title={title} />
      <FeatureColumns dark items={items} />
      {children}
    </DarkImageSection>
  );
}
