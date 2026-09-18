"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface TrajectoryCard {
  title: string;
  description: string;
  linkText: string;
  href: string;
}

const trajectoryCards: TrajectoryCard[] = [
  {
    title: "Integrate a Product",
    description:
      "Connect pre-approved directory or EDR products using our structured schema-driven connector templates.",
    linkText: "Integrations Path",
    href: "/integrations",
  },
  {
    title: "Use the REST API",
    description:
      "Interact directly with Zoiko Shield endpoints to extract cryptographic evidence and orchestrate queries programmatically.",
    linkText: "API Reference",
    href: "#api-reference",
  },
  {
    title: "Receive Webhooks",
    description:
      "Establish low-latency event listeners for continuous posture conflicts and automated action telemetry.",
    linkText: "Webhooks Catalog",
    href: "#webhooks",
  },
  {
    title: "Deploy & Operate",
    description:
      "Understand architecture requirements, least-privilege permissions, and self-hosted secure evidence storage options.",
    linkText: "Operations Guide",
    href: "#operations",
  },
  {
    title: "Prove Compliance",
    description:
      "Map synchronized EDR and identity telemetry to continuous regulatory evidence frameworks automatically.",
    linkText: "Evidence Frameworks",
    href: "/framework-coverage",
  },
  {
    title: "Evaluate Architecture",
    description:
      "Review our Trust Center security controls, data minimization, and multi-party governance mechanisms.",
    linkText: "Security Whitepaper",
    href: "/architecture",
  },
];

export default function IntegrationTrajectory() {
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
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <section className="w-full bg-[#F5F2EB] py-16 sm:py-20 lg:py-24 px-6 md:px-12 lg:px-16 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          {/* Tag / Kicker */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#BE3A34]" />
            <span className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#BE3A34] uppercase">
              IMPLEMENTATION GOALS
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0B1B26] tracking-tight mb-3">
            Choose your integration trajectory
          </h2>

          {/* Subtitle */}
          <p className="text-[14.5px] sm:text-base text-[#52606D] max-w-3xl leading-relaxed">
            Tailored documentation pathways optimized for security architects, developers, and compliance administrators.
          </p>
        </div>

        {/* 6-Card Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {trajectoryCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-7 sm:p-8 flex flex-col justify-between border border-[#E7E5DF] shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#DCD8CF] transition-all duration-200 group"
            >
              <div>
                <h3 className="text-[17px] sm:text-[18px] font-bold text-[#0B1B26] mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-[#5A6874] leading-[1.65] font-normal">
                  {card.description}
                </p>
              </div>

              <div className="pt-6 mt-auto">
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#BE3A34] hover:text-[#A82E29] transition-colors"
                >
                  <span>{card.linkText}</span>
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
