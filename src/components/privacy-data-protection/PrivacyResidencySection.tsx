"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ResidencyItem {
  title: string;
  description: string;
}

const residencyItems: ResidencyItem[] = [
  {
    title: "Hosting / Processing Region",
    description: "Tenant database nodes are hosted exclusively in AWS region: EU-West-3 (Paris).",
  },
  {
    title: "Customer-Selected Region",
    description: "User logs are bound strictly to this zone — zero background replication.",
  },
  {
    title: "Support Access Bounded",
    description: "Our support operations are localized; access from outer zones is restricted.",
  },
  {
    title: "Subprocessor Location Constraints",
    description: "Assurance mappings track subprocessor storage locations, updated daily.",
  },
];

export default function PrivacyResidencySection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0A2029] py-16 sm:py-20 px-6 sm:px-10 lg:px-20 flex justify-center border-b border-[#123B4C]/10">
      <div className="max-w-[1240px] w-full flex flex-col gap-10 sm:gap-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="text-xs sm:text-sm font-bold font-mono tracking-[0.12em] text-[#C44242] uppercase">
              RESIDENCY LIMITS
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A2029] tracking-[-0.024em] leading-tight">
            Data Residency & International Transfers
          </h2>
          <p className="text-[#5B6670] text-sm sm:text-[15px] leading-relaxed font-normal">
            Keep control. We enforce local boundaries, mapping customer selections strictly to regional cloud data volumes.
          </p>
        </motion.div>

        {/* Residency Row: Left Cards List + Right Image */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full">
          {/* Left Column: Active Residency Profile title + 4 separate white cards */}
          <div className="flex-1 flex flex-col gap-4 w-full">
            <h3 className="text-lg sm:text-[20px] font-extrabold text-[#0A2029] tracking-tight">
              Active Residency Profile
            </h3>

            <div className="flex flex-col gap-2.5 sm:gap-3 w-full">
              {residencyItems.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="bg-white border border-[#123B4C]/10 rounded-[8px] px-4 py-3 sm:py-3.5 flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-3 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                >
                  <span className="text-[14px] font-extrabold text-[#0A2029] tracking-tight shrink-0">
                    {item.title}
                  </span>
                  <span className="text-[13px] text-[#5B6670] font-normal leading-relaxed">
                    {item.description}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Residency Review Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full lg:w-[480px] shrink-0 flex justify-center"
          >
            <div className="relative w-full aspect-[450/280] sm:aspect-[450/260] lg:aspect-[450/255] rounded-[16px] overflow-hidden shadow-lg border border-[#123B4C]/10 bg-white">
              <Image
                src="/images/privacy-data-protection/Residency-Review-Image.png"
                alt="Data Residency Review"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
