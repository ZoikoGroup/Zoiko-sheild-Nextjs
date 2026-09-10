"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function RouteStateMap() {
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

  const statesList = [
    { name: "Draft", desc: "defined, not eligible for public rendering." },
    {
      name: "Ready",
      desc: "content, product, legal, security, accessibility and SEO checks all pass.",
    },
    {
      name: "Active",
      desc: "rendered publicly, with a named owner and a current review date.",
    },
    {
      name: "Conditional",
      desc: "rendered only when its explicit condition is true.",
    },
    {
      name: "Suspended",
      desc: "an honest fallback or removal. Never a dead link.",
    },
    {
      name: "Retired",
      desc: "redirected, removed from the sitemap, with history preserved.",
    },
  ] as const;

  return (
    <section className="w-full bg-[#0B2237] py-16 px-6 md:px-12 lg:px-20 font-sans text-white">
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
            <span className="w-4 h-[2px] bg-[#93A6B8]"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-[#93A6B8] uppercase">
              ROUTE STATE MAP
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-[34px] font-bold text-white leading-[1.15] tracking-tight mb-4"
          >
            What&apos;s current, and what isn&apos;t.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-[17px] text-[#93A6B8] max-w-2xl font-normal leading-relaxed"
          >
            Every route below renders according to its state in the controlled
            registry — not according to what would look most complete.
            Conditional means not yet current, and it is shown as such.
          </motion.p>
        </div>

        {/* Top 3D State Graphic Image */}
        <motion.div
          variants={itemVariants}
          className="relative w-full aspect-[16/9] max-h-[520px] rounded-2xl overflow-hidden mb-8 border border-[#1E293B] shadow-2xl bg-[#030712]"
        >
          <Image
            src="/images/platform/2.png"
            alt="Route State Map 3D Diagram"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Bottom Two Cards */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Card 1: Six Content States */}
          <div className="bg-[#0E2C46] border border-[#1E293B] rounded-xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-6">
                Six content states
              </h3>

              <div className="space-y-4">
                {statesList.map((st, idx) => (
                  <div
                    key={idx}
                    className="text-xs sm:text-sm leading-relaxed pb-3 border-b border-[#FFFFFF24] last:border-b-0 flex items-start gap-2 text-[#94A3B8]"
                  >
                    <span className="text-[#E0402F] shrink-0 mt-0.5">▢</span>
                    <div>
                      <span className="font-bold text-white">{st.name}</span> —{" "}
                      {st.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Claims that need evidence */}
          <div className="bg-[#0E2C46] border border-[#FFFFFF24] rounded-xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">
                Claims that need evidence before they appear
              </h3>

              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                Certification and assurance status • uptime, availability,
                recovery and response time • detection performance • integration
                counts, named vendors and connector modes • AI autonomy,
                accuracy or safety • customer results, logos and testimonials •
                regional or industry availability • any guaranteed-outcome
                language.
              </p>

              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                None of those is on this page, which is why the page is shorter
                than a typical platform overview — and more useful to anyone
                actually evaluating.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
