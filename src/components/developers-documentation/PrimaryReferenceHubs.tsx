"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ReferenceHub {
  title: string;
  description: string;
  linkText: string;
  href: string;
}

const referenceHubs: ReferenceHub[] = [
  {
    title: "API Reference v2.0",
    description:
      "Detailed endpoint parameters, error matrices, and schema-backed structures for every resource.",
    linkText: "Launch API Specs",
    href: "#api-specs",
  },
  {
    title: "Webhooks Catalog",
    description:
      "Configure listeners for instant posture conflicts, security alerts, and control elevation states.",
    linkText: "View Event Schemas",
    href: "#webhook-schemas",
  },
  {
    title: "Release Notes",
    description:
      "Follow breaking updates, deprecated parameter schedules, and verified version improvements.",
    linkText: "Browse Version Log",
    href: "#version-log",
  },
];

export default function PrimaryReferenceHubs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <section className="w-full bg-[#F5F2EB] py-16 sm:py-20 lg:py-24 px-6 md:px-12 lg:px-16 font-sans text-[#111827] border-t border-[#E7E5DF]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          {/* Tag / Kicker */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#BE3A34]" />
            <span className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#BE3A34] uppercase">
              REFERENCE RESOURCES
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0B1B26] tracking-tight">
            Primary reference hubs
          </h2>
        </div>

        {/* 3 Reference Hub Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {referenceHubs.map((hub, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-[#E7E5DF] shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#DCD8CF] transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <h3 className="text-[17px] sm:text-[18px] font-bold text-[#0B1B26] mb-3 leading-snug">
                  {hub.title}
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-[#5A6874] leading-[1.65]">
                  {hub.description}
                </p>
              </div>

              <div className="pt-6 mt-auto">
                <Link
                  href={hub.href}
                  className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#BE3A34] hover:text-[#A82E29] transition-colors"
                >
                  <span>{hub.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
