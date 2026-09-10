"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DeploymentModel() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  } as const;

  const cardsData = [
    {
      title: "Offices aren't hosting",
      description:
        "An office location establishes nothing about hosting, residency, service availability or support coverage. They're different registries with different owners.",
    },
    {
      title: "Integrations aren't deployment",
      description:
        "A connector being available in a region does not establish that a deployment mode is available there.",
    },
    {
      title: "No recommended mode",
      description:
        'No mode is marked recommended without an explicit neutral decision rule supplied by product authority — and a conditional mode shows its prerequisites and state, not a generic "Request Access" button.',
    },
  ] as const;

  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-20 font-sans text-[#111827]">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header Section */}
        <div className="mb-10">
          {/* Tag */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-4 h-[2px] bg-[#E0402F]"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-[#E0402F] uppercase">
              DEPLOYMENT MODEL
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-[34px] font-bold text-[#0B192C] leading-[1.25] lg:leading-[58px] tracking-normal mb-4"
          >
            No modes are named, so no modes are compared.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[#6B7280] max-w-2xl font-normal leading-relaxed"
          >
            A comparison table doesn&apos;t appear until at least two approved
            public modes exist. Until the deployment registry is populated, this
            is the contract each mode will have to satisfy.
          </motion.p>
        </div>

        {/* 3D Illustration Graphic */}
        <motion.div
          variants={itemVariants}
          className="relative w-full rounded-2xl overflow-hidden border border-[#E5E7EB] bg-white shadow-xs mb-8"
        >
          <Image
            src="/images/platform/6.png"
            alt="Deployment Model Visual Architecture"
            width={1200}
            height={600}
            className="w-full h-auto object-cover block"
            priority
          />
        </motion.div>

        {/* Bottom 3-Column Info Cards */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cardsData.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 flex flex-col justify-start shadow-xs hover:shadow-md transition-shadow duration-200"
            >
              {/* Top Decorative Icon/Square */}
              <div className="w-6 h-6 rounded-md border border-[#E5E7EB] bg-[#FAF9F8] flex items-center justify-center mb-6">
                <span className="w-2 h-2 rounded-xs bg-[#6B7280]" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#0B192C] mb-3 leading-snug">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
