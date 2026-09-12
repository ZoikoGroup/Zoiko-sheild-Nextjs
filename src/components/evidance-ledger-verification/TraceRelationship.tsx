"use client";

import React from "react";
import { motion } from "framer-motion";

interface StepCard {
  id: string;
  number: string;
  title: string;
}

interface RowField {
  id: string;
  name: string;
}

const stepCardsData: StepCard[] = [
  { id: "01", number: "01", title: "SOURCE AUTHORITY" },
  { id: "02", number: "02", title: "RELATIONSHIP CONTRACT" },
  { id: "03", number: "03", title: "TARGET EVIDENCE" },
];

const leftColumnFields: RowField[] = [
  { id: "1", name: "relationship_id" },
  { id: "2", name: "relationship_type" },
  { id: "3", name: "version / effective time" },
  { id: "4", name: "missing / unknown treatment" },
];

const rightColumnFields: RowField[] = [
  { id: "5", name: "source_ref / target_ref" },
  { id: "6", name: "basis" },
  { id: "7", name: "state" },
  { id: "8", name: "owner / reviewer" },
];

export default function TraceRelationship() {
  return (
    <div className="relative w-full bg-[#F0EDE6] flex items-center justify-center px-6 md:px-12 py-20 overflow-x-hidden">
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-start">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 flex flex-col items-start max-w-3xl"
        >
          {/* Subheading / Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-4 h-[1px] bg-[#C8382C]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C8382C]">
              02 &mdash; LINEAGE
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl lg:text-[40px] font-bold text-[#111A1E] tracking-tight mb-3 leading-[1.1]">
            Trace every relationship. Surface every missing hop.
          </h2>

          {/* Description */}
          <p className="text-[#4A555B] text-base sm:text-lg leading-relaxed">
            Lineage records describe how one governed object relates to another,
            including basis, effective time, review authority and explicit
            unknown treatment.
          </p>
        </motion.div>

        {/* First Row: 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
          {stepCardsData.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              className="bg-white p-6 rounded-[20px] shadow-sm border border-[#E5E0D5] flex flex-col"
            >
              <span className="text-xs font-mono font-semibold text-[#C8382C] tracking-widest mb-4">
                {card.number}
              </span>
              <h3 className="text-[18px] font-bold max-w-20 text-[#111A1E] tracking-tight leading-snug">
                {card.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Subsequent Rows: 2 Columns of Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-6">
          {/* Left Column Fields */}
          <div className="flex flex-col gap-4">
            {leftColumnFields.map((field, index) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.05,
                  ease: "easeOut",
                }}
                className="bg-white py-5 px-6 rounded-[14px] shadow-sm border border-[#E5E0D5] flex items-center"
              >
                <span className="font-mono text-sm font-semibold text-[#111A1E] tracking-tight">
                  {field.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Right Column Fields */}
          <div className="flex flex-col gap-4">
            {rightColumnFields.map((field, index) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.05,
                  ease: "easeOut",
                }}
                style={{ borderRadius: "14px" }}
                className="bg-white py-5 px-6 shadow-sm border border-[#E5E0D5] flex items-center"
              >
                <span className="font-mono text-sm font-semibold text-[#111A1E] tracking-tight">
                  {field.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white border border-[#D5CFC7] text-[#111A1E] text-sm font-bold tracking-wide hover:bg-[#EAE6DD] transition-colors shadow-sm"
          >
            View Lineage Detail
          </a>
        </motion.div>
      </div>
    </div>
  );
}
