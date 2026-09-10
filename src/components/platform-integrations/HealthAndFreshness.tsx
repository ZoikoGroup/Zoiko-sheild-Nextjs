"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HealthAndFreshness() {
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

  const healthItems = [
    {
      title: "Catalog active",
      desc: "A publicly approved integration route and record exist.",
      tag: "DOESN'T MEAN",
      meaning: "That you're entitled to it, or that anyone has connected it.",
      type: "green",
    },
    {
      title: "Connection authorized",
      desc: "Your administrator's authorization is currently valid for the approved scope.",
      tag: "DOESN'T MEAN",
      meaning:
        "That the connection is working. Expired or insufficient access is a separate state from a provider outage.",
      type: "green",
    },
    {
      title: "Connection healthy",
      desc: "Approved health checks indicate expected operation, as of the last check time.",
      tag: "DOESN'T MEAN",
      meaning:
        "That data is current. A healthy connection can still be delivering stale or partial data.",
      type: "green",
    },
    {
      title: "Data current",
      desc: "The freshness expectation for this connector is currently being met.",
      tag: "DOESN'T MEAN",
      meaning:
        "A guaranteed sync interval, latency figure or recovery commitment. Freshness is an expectation, not an SLA.",
      type: "green",
    },
    {
      title: "Platform operational",
      desc: (
        <>
          Not shown here at all.{" "}
          <a href="#" className="text-[#E0402F] font-semibold hover:underline">
            System Status
          </a>{" "}
          is authoritative for public service health.
        </>
      ),
      tag: "DOESN'T BELONG HERE",
      meaning:
        "A static integration card must never imply live platform availability.",
      type: "icon",
    },
  ] as const;

  return (
    <section className="w-full bg-[#EEEBE7] py-16 px-6 md:px-12 lg:px-20 font-sans text-[#111827]">
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
              HEALTH AND FRESHNESS
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-[34px] sm:text-4xl lg:text-[44px] font-bold text-[#0B192C] leading-[1.15] tracking-tight mb-4 max-w-4xl"
          >
            Five different greens. They don&apos;t mean the same thing.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[#6B7280] max-w-2xl font-normal leading-relaxed"
          >
            Each statement below can be true while the next one is false.
            Collapsing them into a single indicator is how an integration page
            ends up quietly wrong about whether your data is arriving.
          </motion.p>
        </div>

        {/* List Box Container */}
        <motion.div
          variants={itemVariants}
          className="border border-[#E1DDD8] rounded-2xl overflow-hidden shadow-xs mb-8"
        >
          <div className="divide-y divide-[#E5E7EB]">
            {healthItems.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 items-stretch"
              >
                {/* 1st Column: Transparent Background (Icon/Indicator Column) */}
                <div className="md:col-span-1 p-6 flex items-start justify-center bg-transparent">
                  <div className="shrink-0 pt-1">
                    {item.type === "green" ? (
                      /* Green Circle Container (#2E9E6B) */
                      <div className="w-6 h-6 rounded-full bg-[#2E9E6B]/15 flex items-center justify-center">
                        <span className="w-3 h-3 rounded-full bg-[#2E9E6B]" />
                      </div>
                    ) : (
                      /* Dashed Square Icon for Platform Operational */
                      <div className="w-6 h-6 flex items-center justify-center text-[#9CA3AF]">
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray="2 2"
                        >
                          <rect x="4" y="4" width="16" height="16" rx="2" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>

                {/* 2nd Column: White Background (Title & Description Column) */}
                <div className="md:col-span-5 p-6 sm:p-8 bg-white flex flex-col justify-center border-t md:border-t-0 md:border-l border-[#E5E7EB]">
                  <h3 className="text-base font-bold text-[#0B192C] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* 3rd Column: #FCF9F4 Background (Tag & Meaning Column) with #B8791C Divider */}
                <div className="md:col-span-6 p-6 sm:p-8 bg-[#FCF9F4] md:border-l border-[#B8791C] flex flex-col justify-center">
                  <span className="font-mono text-[10px] font-bold text-[#B8791C] tracking-wider uppercase mb-1.5 block">
                    {item.tag}
                  </span>
                  <p className="text-xs sm:text-sm text-[#8C6B3A] leading-relaxed font-normal">
                    {item.meaning}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          variants={itemVariants}
          className="flex items-start gap-3 text-xs font-mono text-[#9CA3AF] leading-relaxed max-w-5xl"
        >
          <span className="w-4 h-[2px] bg-[#E0402F] shrink-0 mt-2"></span>
          <p>
            Where telemetry is missing or authority can&apos;t determine a
            state, the answer is &quot;unknown&quot; or &quot;needs review&quot;
            — never green. A provider issue is identified as a third-party
            dependency without asserting root cause before evidence exists.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
