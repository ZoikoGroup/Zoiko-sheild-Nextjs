"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function QualificationContext() {
  const [formData, setFormData] = useState({
    timeline: "",
    businessImpact: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-4 h-[2px] bg-[#BE3A34]" />
              <span className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#BE3A34] uppercase">
                <span className="sm:hidden">STEP 6 OF 6: PRIORITIZATION</span>
                <span className="hidden sm:inline">QUALIFICATION CONTEXT</span>
              </span>
            </div>

            <h2 className="text-xl sm:text-3xl lg:text-[34px] font-bold text-[#0B1B26] tracking-tight mb-2">
              <span className="sm:hidden">Timeline &amp; business context</span>
              <span className="hidden sm:inline">Timeline milestones and architectural impact</span>
            </h2>

            <p className="hidden sm:block text-[13.5px] sm:text-[14px] text-[#52606D] leading-relaxed">
              This data helps our product team qualify pipeline requests. We do not support artificial urgency or implied prioritization.
            </p>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
            {/* Left 8 cols: Form Inputs */}
            <div className="lg:col-span-8 space-y-3.5 sm:space-y-4 w-full">
              {/* Timeline */}
              <div>
                <label className="block text-xs font-semibold text-[#0B1B26] mb-1.5">
                  Target Production Deployment Timeline <span className="text-[#BE3A34]">*</span>
                </label>
                <input
                  type="text"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  placeholder="e.g. Q3 2026, September 2026"
                  className="w-full bg-[#FAF9F5] border border-[#D5DFE5] rounded-lg px-3.5 py-2.5 text-sm text-[#0B1B26] placeholder-[#627585] outline-none focus:bg-white focus:ring-2 focus:ring-[#0B1B26]/10 transition-all"
                />
              </div>

              {/* Business Impact */}
              <div>
                <label className="block text-xs font-semibold text-[#0B1B26] mb-1.5">
                  <span className="sm:hidden">Business impact if integration is deferred *</span>
                  <span className="hidden sm:inline">
                    Business impact if this integration is deferred or unavailable *
                  </span>
                </label>
                {/* Mobile input */}
                <input
                  type="text"
                  name="businessImpact"
                  value={formData.businessImpact}
                  onChange={handleChange}
                  placeholder="e.g. Manual process audit overhead, slower containment"
                  className="sm:hidden w-full bg-[#FAF9F5] border border-[#D5DFE5] rounded-lg px-3.5 py-2.5 text-sm text-[#0B1B26] placeholder-[#627585] outline-none focus:bg-white focus:ring-2 focus:ring-[#0B1B26]/10 transition-all"
                />
                {/* Desktop input */}
                <input
                  type="text"
                  name="businessImpact"
                  value={formData.businessImpact}
                  onChange={handleChange}
                  placeholder="e.g. Manual process audit overhead, slower incident containment times"
                  className="hidden sm:block w-full bg-[#FAF9F5] border border-[#D5DFE5] rounded-lg px-3.5 py-2.5 text-sm text-[#0B1B26] placeholder-[#627585] outline-none focus:bg-white focus:ring-2 focus:ring-[#0B1B26]/10 transition-all"
                />
              </div>
            </div>

            {/* Right 4 cols: Guidance Card */}
            <div className="lg:col-span-4 mt-2 lg:mt-0">
              <div className="bg-[#FAF9F5] border border-[#EAE6DF] border-l-4 border-l-[#BE3A34] rounded-xl p-4 sm:p-5">
                <h4 className="text-xs font-bold text-[#0B1B26] mb-1.5 sm:mb-2">
                  Prioritization Notes
                </h4>
                <p className="text-[11.5px] text-[#6B7280] leading-relaxed">
                  Provide realistic milestones and explain the operational impact of delay{" "}
                  <span className="sm:hidden">to help the team prioritize.</span>
                  <span className="hidden sm:inline">
                    . This information helps the team understand the request in the context of your broader security program.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
