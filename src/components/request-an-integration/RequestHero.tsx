"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function RequestHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#F8F6F1]/70 border-b border-[#E8E5DF]/80 pt-6 sm:pt-8 pb-10 sm:pb-16 lg:py-20 font-sans text-[#111827]">
      {/* Ambient Gradient Glows matching reference */}
      <div 
        className="pointer-events-none absolute -top-24 right-0 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] rounded-full blur-[90px] sm:blur-[110px] opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(230, 90, 80, 0.45) 0%, rgba(245, 140, 130, 0.2) 50%, transparent 75%)",
        }}
        aria-hidden="true"
      />
      <div 
        className="pointer-events-none absolute top-40 -right-20 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full blur-[80px] sm:blur-[100px] opacity-35"
        style={{
          background: "radial-gradient(circle, rgba(45, 180, 180, 0.35) 0%, rgba(100, 210, 200, 0.15) 50%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Request Intro */}
          <motion.div
            className="lg:col-span-6 flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tag / Kicker */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="w-4 h-[2px] bg-[#BE3A34]" />
              <span className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#BE3A34] uppercase">
                REQUEST AN INTEGRATION
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-[30px] leading-[1.12] sm:text-5xl lg:text-[54px] font-bold text-[#0B1B26] lg:leading-[1.08] tracking-tight mb-4 sm:mb-5"
            >
              Tell us what you need to
              <br />
              connect.
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-[14px] sm:text-base text-[#52606D] leading-[1.6] sm:leading-[1.65] max-w-[530px] mb-6 sm:mb-7"
            >
              Share the product, platform, or security system you need Zoiko Shield to work with. We&apos;ll use your request to evaluate demand, technical fit, and the right next step.
            </motion.p>

            {/* Call to Actions (Mobile 2-column grid, desktop inline-flex) */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-3.5 mb-5 sm:mb-7">
              <Link
                href="#request-form"
                className="bg-[#BE3A34] hover:bg-[#A82E29] text-white text-[13px] sm:text-[13.5px] font-semibold px-4 sm:px-6 py-2.5 rounded-lg shadow-sm transition-colors duration-150 flex items-center justify-center text-center"
              >
                <span className="sm:hidden">Start Request</span>
                <span className="hidden sm:inline">Start integration request</span>
              </Link>
              <Link
                href="/integrations"
                className="bg-transparent hover:bg-black/5 border border-[#0B1B26] text-[#0B1B26] text-[13px] sm:text-[13.5px] font-semibold px-4 sm:px-5 py-2.5 rounded-lg transition-colors duration-150 flex items-center justify-center text-center"
              >
                <span className="sm:hidden">Catalog</span>
                <span className="hidden sm:inline">Explore Integration Catalog</span>
              </Link>
            </motion.div>

            {/* Technical Disclaimers / Guarantee */}
            <motion.div variants={itemVariants} className="flex items-start gap-2 max-w-[520px]">
              <ShieldCheck className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
              <p className="font-mono text-[11px] sm:text-[11.5px] text-[#556472] leading-snug">
                No roadmap commitment is created by submitting a request. Never include secrets.
              </p>
            </motion.div>

            {/* Mobile Hero Visual Image (Under footnote on mobile, hidden on desktop) */}
            <motion.div
              variants={itemVariants}
              className="block lg:hidden mt-6 w-full"
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-black/5">
                <Image
                  src="/images/Zoiko Shield - Request-an-integration/rai1.jpg"
                  alt="Architecture and security specialists reviewing an integration blueprint"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Visual Image (Desktop only) */}
          <motion.div
            className="hidden lg:flex lg:col-span-6 relative justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <div className="relative w-full max-w-[560px] aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.12)] border border-black/5">
              <Image
                src="/images/Zoiko Shield - Request-an-integration/rai1.jpg"
                alt="Architecture and security specialists reviewing an integration blueprint"
                fill
                priority
                sizes="(max-width: 1200px) 50vw, 560px"
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
