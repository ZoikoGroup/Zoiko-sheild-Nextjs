"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface OptionItem {
  id: string;
  title: string;
  mobileTitle?: string;
  description: string;
  mobileShow: boolean;
}

const classificationOptions: OptionItem[] = [
  {
    id: "existing_customer",
    title: "Existing Customer Production",
    description:
      "I currently utilize Zoiko Shield and require this connector for active enterprise production goals.",
    mobileShow: true,
  },
  {
    id: "prospective_evaluation",
    title: "Prospective Customer Evaluation",
    mobileTitle: "Prospective Customer Eval",
    description:
      "I am actively evaluating Zoiko Shield and this integration represents a primary decision criteria.",
    mobileShow: true,
  },
  {
    id: "partner_proposal",
    title: "Technology Partner Proposal",
    description:
      "We represent a technology/security vendor seeking to build a certified integration path together.",
    mobileShow: true,
  },
  {
    id: "developer_research",
    title: "Technical Developer Research",
    description:
      "Exploring APIs and compliance frameworks for future system capabilities.",
    mobileShow: false,
  },
];

export default function RequestClassification() {
  const [selectedId, setSelectedId] = useState<string>("existing_customer");

  return (
    <section className="w-full bg-[#F5F2EB] py-4 sm:py-6 px-5 sm:px-6 md:px-12 lg:px-16 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="bg-white rounded-3xl p-5 sm:p-8 lg:p-10 border border-[#E7E5DF] shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-4 h-[2px] bg-[#BE3A34]" />
              <span className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#BE3A34] uppercase">
                <span className="sm:hidden">STEP 1 OF 6: </span>CLASSIFICATION
              </span>
            </div>

            <h2 className="text-xl sm:text-3xl lg:text-[34px] font-bold text-[#0B1B26] tracking-tight mb-2">
              What is the nature of this custom request?
            </h2>

            <p className="hidden sm:block text-[13.5px] sm:text-[14px] text-[#52606D] leading-relaxed">
              Select the option that best mirrors your current architectural exploration.
            </p>
          </div>

          {/* Grid: Options on Left, Routing Signals on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
            {/* Options List / Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {classificationOptions.map((opt) => {
                const isSelected = selectedId === opt.id;
                return (
                  <div
                    key={opt.id}
                    onClick={() => setSelectedId(opt.id)}
                    className={`rounded-xl p-4 sm:p-5 border cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                      !opt.mobileShow ? "hidden sm:flex" : "flex"
                    } ${
                      isSelected
                        ? "border-[#BE3A34] bg-[#FFFBFB] shadow-xs"
                        : "border-[#E5E2DA] bg-white hover:border-[#D0CCC2] hover:bg-[#FAF9F5]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-sm font-bold text-[#0B1B26] leading-snug">
                        {opt.mobileTitle ? (
                          <>
                            <span className="sm:hidden">{opt.mobileTitle}</span>
                            <span className="hidden sm:inline">{opt.title}</span>
                          </>
                        ) : (
                          opt.title
                        )}
                      </h3>
                      {/* Radio Indicator */}
                      <div className="shrink-0 mt-0.5">
                        {isSelected ? (
                          <div className="w-4 h-4 rounded-full border-2 border-[#BE3A34] flex items-center justify-center">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#BE3A34]" />
                          </div>
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-gray-400/80" />
                        )}
                      </div>
                    </div>

                    <p className="text-xs text-[#6B7280] leading-relaxed">
                      {opt.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Routing Signals (Mobile styled with crimson left border) */}
            <div className="lg:col-span-4 mt-2 lg:mt-0">
              <div className="bg-[#FAF9F5] border border-[#EAE6DF] border-l-4 border-l-[#BE3A34] rounded-xl p-4 sm:p-5">
                <h4 className="text-xs font-bold text-[#0B1B26] mb-1.5 sm:mb-2">
                  Routing Signals
                </h4>
                <p className="text-[11.5px] text-[#6B7280] leading-relaxed">
                  Existing customer requests are prioritized for feasibility review. Partner proposals are routed to the Technology Integration team.
                  <span className="hidden sm:inline"> Research requests are used to enrich future roadmap planning.</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
