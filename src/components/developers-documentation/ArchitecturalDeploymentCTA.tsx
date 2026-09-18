"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ArchitecturalDeploymentCTA() {
  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-32 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Background Image with Dark Contrast Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Zoiko Shield - Developers-documentation/ddp3.jpg"
          alt="Security architects reviewing system architecture"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Deep dark navy overlay to match reference */}
        <div className="absolute inset-0 bg-[#0B1A26]/85 backdrop-blur-[2px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Tag / Kicker */}
        <motion.div
          className="flex items-center gap-2 mb-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          <span className="w-4 h-[2px] bg-[#BE3A34]" />
          <span className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.2em] text-gray-300 uppercase">
            ARCHITECTURAL DEPLOYMENT
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-[1.12] mb-5"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Design a resilient evidence collection strategy
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-[14.5px] sm:text-base text-gray-300/90 leading-relaxed max-w-2xl mb-8"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Our primary developer guidelines and API reference remain completely public. If your regulated
          enterprise requires complex regional deployments, custom posture rule sets, or multi-party
          approval keys, schedule a consultation with our core security architects.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Link
            href="/contact"
            className="bg-[#BE3A34] hover:bg-[#A82E29] text-white text-[13.5px] font-semibold px-6 py-3 rounded-lg shadow-sm transition-colors duration-150 inline-flex items-center justify-center"
          >
            Talk to a Security Architect
          </Link>
          <Link
            href="#sandbox"
            className="bg-transparent hover:bg-white/10 border border-gray-400/80 text-white text-[13.5px] font-semibold px-6 py-3 rounded-lg transition-colors duration-150 inline-flex items-center justify-center"
          >
            Access Sandbox
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
