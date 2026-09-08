"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function CatalogAtAGlance() {
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

  const categories = [
    {
      title: "Microsoft ecosystem",
      badge: "CONDITIONAL",
      desc: "Identity, productivity, endpoint, cloud and security integrations. A source-approved category label — not a blanket claim of support across all Microsoft products.",
      route: "/integrations/microsoft",
    },
    {
      title: "Cloud platforms",
      badge: "CONDITIONAL",
      desc: "AWS, Azure and GCP cloud-native telemetry categories. Those vendor names are category examples taken from the source descriptor — not proof that a live connector exists for any of them.",
      route: "/integrations/cloud",
    },
    {
      title: "Endpoint & identity",
      badge: "CONDITIONAL",
      desc: "EDR, identity, PAM and access sources.",
      route: "/integrations/endpoint-identity",
    },
    {
      title: "Ticketing & workflows",
      badge: "CONDITIONAL",
      desc: "Case, ITSM, notification and workflow integrations.",
      route: "/integrations/ticketing-workflows",
    },
  ] as const;

  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-20 font-sans text-[#111827]">
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
              CATALOG AT A GLANCE
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-[36px] font-bold text-[#0B192C] leading-[1.15] tracking-tight mb-4"
          >
            The catalog shows what the registry approves. Right now, that&apos;s
            nothing.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[#6B7280] max-w-2xl font-normal leading-relaxed"
          >
            A populated marketplace assembled from general market knowledge
            would be faster to build and completely unverifiable. So the
            discovery surface is here, and it stays empty until the controlled
            integration registry supplies current entries.
          </motion.p>
        </div>

        {/* Search & Empty State Box */}
        <motion.div
          variants={itemVariants}
          className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden shadow-xs mb-16"
        >
          {/* Filter Bar */}
          <div className="p-4 bg-[#EEEBE7] border-b border-[#E5E7EB] flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 min-w-[240px]">
              <input
                type="text"
                readOnly
                placeholder="Search approved integrations.."
                className="w-full bg-white border border-[#E5E7EB] rounded-md px-3 py-2 text-xs font-mono text-[#6B7280] placeholder-[#9CA3AF] focus:outline-none"
              />
            </div>

            {/* Dropdown Filters */}
            {["Category", "Availability", "Direction", "Mode"].map(
              (filter, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E5E7EB] rounded-md px-3 py-2 text-xs font-mono text-[#6B7280] flex items-center gap-2 cursor-pointer hover:bg-gray-50"
                >
                  <span>{filter}</span>
                  <ChevronDown className="w-3 h-3 text-[#9CA3AF]" />
                </div>
              ),
            )}
          </div>

          {/* Empty State Canvas */}
          <div className="py-20 px-6 flex flex-col items-center justify-center text-center">
            {/* Empty Brackets Icon */}
            <div className="text-2xl font-mono text-[#D1D5DB] tracking-widest mb-4">
              [ &nbsp; ]
            </div>

            <h3 className="text-base sm:text-lg font-bold text-[#0B192C] mb-2">
              No approved connector records to display
            </h3>

            <p className="text-xs sm:text-sm text-[#6B7280] max-w-xl leading-relaxed">
              Filters and search operate on registry-backed records only. When
              integrations are approved for public rendering, each appears here
              with its state, mode, direction, permission profile and review
              date attached — never as a bare logo.
            </p>
          </div>

          {/* Bottom Note inside Card */}
          <div className="p-4 bg-[#F9F8F6]/30 border-t border-[#E5E7EB] text-[11px] font-mono text-[#9CA3AF] leading-relaxed">
            Query terms are not logged beyond an approved coarse class. No
            restricted connector aliases are exposed through search, and no
            internal draft or ready-state metadata is discoverable through
            filters.
          </div>
        </motion.div>

        {/* Four source-defined categories Section */}
        <motion.div variants={itemVariants} className="mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-[#0B192C] mb-2">
            Four source-defined categories — all conditional
          </h3>
          <p className="text-xs sm:text-sm text-[#6B7280]">
            A category name is not evidence that connectors within it are live.
            These render as conditional routes, not as available collections.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
        >
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#F5F3EF]/60 border border-dashed border-[#D6D3D1] rounded-xl p-6 flex flex-col justify-between"
            >
              <div>
                {/* Header with Title and Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h4 className="text-base font-bold text-[#0B192C]">
                    {cat.title}
                  </h4>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#FEF3C7] border border-[#FDE68A] text-[9px] font-mono font-bold text-[#92400E] shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]"></span>
                    {cat.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-[#6B7280] leading-relaxed mb-6 font-normal">
                  {cat.desc}
                </p>
              </div>

              {/* Route Footer */}
              <div className="font-mono text-[11px] text-[#A8A29E]">
                {cat.route}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Disclaimer Footnote */}
        <motion.p
          variants={itemVariants}
          className="text-xs text-[#9CA3AF] leading-relaxed"
        >
          No category carries a connector count, a &quot;most popular&quot; or
          &quot;recommended&quot; marker, an installation time, a customer logo
          or an adoption metric.
        </motion.p>
      </motion.div>
    </section>
  );
}
