"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FiveLayerModel() {
  const layers = [
    {
      id: "01",
      layerId: "layer_id = L1",
      badge: "REQUIRED BEFORE THIS SLOT RENDERS PUBLICLY",
      fields: [
        { name: "display_name", status: "awaiting" },
        { name: "one_line_purpose", status: "awaiting" },
        { name: "user_jobs", status: "awaiting" },
        { name: "included_scope", status: "awaiting" },
        { name: "excluded_scope", status: "awaiting" },
        { name: "authoritative_route", status: "awaiting" },
        { name: "state", status: "draft" },
        { name: "claim_ids", status: "awaiting" },
        { name: "owner / review_date", status: "awaiting" },
      ],
      note: null,
    },
    {
      id: "02",
      layerId: "layer_id = L2",
      badge: "SAME CONTRACT APPLIES",
      fields: [
        { name: "display_name", status: "awaiting" },
        { name: "relationship_to_other_layers", status: "awaiting" },
        { name: "state", status: "draft" },
      ],
      note: "Adjacency and dependency between layers is an approved fact, not an inference. Nothing about the order is read off the footer's column structure.",
    },
    {
      id: "03",
      layerId: "layer_id = L3",
      badge: "SAME CONTRACT APPLIES",
      fields: [
        { name: "display_name", status: "awaiting" },
        { name: "excluded_scope", status: "awaiting" },
        { name: "state", status: "draft" },
      ],
      note: "Excluded scope matters as much as included scope. A layer that can't state what it doesn't do isn't ready to be described.",
    },
    {
      id: "04",
      layerId: "layer_id = L4",
      badge: "SAME CONTRACT APPLIES",
      fields: [
        { name: "display_name", status: "awaiting" },
        { name: "claim_ids / evidence_refs", status: "awaiting" },
        { name: "state", status: "draft" },
      ],
      note: "Any claim-bearing descriptor needs an evidence reference behind it before it can be shown.",
    },
    {
      id: "05",
      layerId: "layer_id = L5",
      badge: "SAME CONTRACT APPLIES",
      fields: [
        { name: "display_name", status: "awaiting" },
        { name: "owner / review_date", status: "awaiting" },
        { name: "state", status: "draft" },
      ],
      note: "Mobile and narrow layouts preserve this exact order in a single column. The order is content, not decoration.",
    },
  ] as const;

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
              THE FIVE-LAYER MODEL
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-[30px] lg:text-[34px] font-bold text-[#0B192C] leading-[1.15] tracking-tight mb-4"
          >
            Five layers. We&apos;re not going to guess their names.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-[17px] text-[#5C6B79] max-w-xl font-normal leading-relaxed"
          >
            The platform&apos;s structure is confirmed: exactly five layers, in
            an order set by the product authority. The approved public names,
            purposes and scopes are not yet released — so the slots are shown
            with the contract each one must satisfy before it can be filled.
          </motion.p>
        </div>

        {/* Five Layers Table Container */}
        <motion.div
          variants={itemVariants}
          className="border border-[#E1DDD8] rounded-t-lg overflow-hidden divide-y divide-[#E5E7EB]"
        >
          {layers.map((layer) => (
            <div
              key={layer.id}
              className="flex flex-col lg:flex-row min-h-[140px]"
            >
              {/* Box 1: Transparent BG (78px Width) */}
              <div className="w-full lg:w-[78px] shrink-0 bg-transparent p-6 sm:p-8 lg:p-6 flex items-start justify-center border-b lg:border-b-0 lg:border-r border-[#E5E7EB]">
                <span className="text-xl sm:text-2xl font-bold text-[#0B192C]">
                  {layer.id}
                </span>
              </div>

              {/* Box 2: White BG (494px Width) */}
              <div className="w-full lg:w-[494px] shrink-0 bg-white p-6 sm:p-8 flex flex-col border-b lg:border-b-0 lg:border-r border-[#E5E7EB]">
                {/* Skeleton Placeholder Lines */}
                <div className="space-y-2 mb-8 opacity-25 pt-1">
                  <div className="h-2 bg-[#C9C3BB] rounded w-full"></div>
                  <div className="h-2 bg-[#C9C3BB] rounded w-5/6"></div>
                  <div className="h-2 bg-[#C9C3BB] rounded w-3/4"></div>
                </div>

                {/* Code Identifier */}
                <div className="font-mono text-xs text-[#9CA3AF]">
                  {layer.layerId}{" "}
                  <span className="opacity-75">
                    • order fixed by product authority
                  </span>
                </div>
              </div>

              {/* Box 3: #FCFBFA BG (548px Width) */}
              <div className="w-full lg:w-[548px] shrink-0 bg-[#FCFBFA] p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  {/* Badge */}
                  <div className="text-[10px] font-mono tracking-wider text-[#5C6B79] uppercase mb-4">
                    {layer.badge}
                  </div>

                  {/* Field Rows */}
                  <div className="space-y-2 font-mono text-xs mb-4">
                    {layer.fields.map((field, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between py-0.5"
                      >
                        <span className="text-[#5C6B79]">{field.name}</span>
                        <span
                          className={
                            field.status === "draft"
                              ? "text-[#0B2237] font-semibold"
                              : "text-[#0B2237] font-semibold"
                          }
                        >
                          {field.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Optional Footnote */}
                {layer.note && (
                  <p className="text-xs text-[#6B7280] font-sans leading-relaxed pt-3 border-t border-[#E5E7EB]/60">
                    {layer.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Connected Below Warning Card */}
        <motion.div
          variants={itemVariants}
          className="bg-[#FDF2F0] border-t-2 border-[#E0402F] border-x border-b border-x-[#E5E7EB] border-b-[#E5E7EB] rounded-b-lg p-6 sm:p-8"
        >
          <div className="text-[11px] font-mono font-bold tracking-widest text-[#A63220] uppercase mb-2">
            CONTENT BLOCKER • RELEASE BLOCKING
          </div>
          <h3 className="text-base sm:text-lg font-bold text-[#7E2413] mb-2">
            A missing product fact is not a copywriting invitation.
          </h3>
          <p className="text-xs sm:text-sm text-[#8A4436] leading-relaxed">
            The layers are not named after Evidence, Detection, AI or any other
            footer column, and they are not the five verbs above. No name is
            placed in alt text or structured data ahead of public approval
            either. Until the authoritative specification supplies the names,
            this section stays structurally honest rather than plausibly filled.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
