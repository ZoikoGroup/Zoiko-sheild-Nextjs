"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ScaleAndInfrastructure() {
  const [formData, setFormData] = useState({
    deploymentModel: "",
    tenantsRegions: "",
    sovereignty: "",
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
                <span className="sm:hidden">STEP 5 OF 6: DEPLOYMENT SCOPE</span>
                <span className="hidden sm:inline">SCALE &amp; INFRASTRUCTURE</span>
              </span>
            </div>

            <h2 className="text-xl sm:text-3xl lg:text-[34px] font-bold text-[#0B1B26] tracking-tight mb-2">
              Deployment scope{" "}
              <span className="sm:hidden">&amp; sovereignty</span>
              <span className="hidden sm:inline">and regulatory boundaries</span>
            </h2>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
            {/* Left 8 cols: Form Inputs */}
            <div className="lg:col-span-8 space-y-3.5 sm:space-y-4 w-full">
              {/* Two Column on desktop, stacked on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0B1B26] mb-1.5">
                    Target Environment Deployment Model <span className="text-[#BE3A34]">*</span>
                  </label>
                  <input
                    type="text"
                    name="deploymentModel"
                    value={formData.deploymentModel}
                    onChange={handleChange}
                    placeholder="SaaS / On-Premises / Hybrid"
                    className="w-full bg-[#FAF9F5] border border-[#D5DFE5] rounded-lg px-3.5 py-2.5 text-sm text-[#0B1B26] placeholder-[#627585] outline-none focus:bg-white focus:ring-2 focus:ring-[#0B1B26]/10 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B1B26] mb-1.5">
                    Total number of discrete tenants/regions <span className="text-[#BE3A34]">*</span>
                  </label>
                  <input
                    type="text"
                    name="tenantsRegions"
                    value={formData.tenantsRegions}
                    onChange={handleChange}
                    placeholder="e.g. 3 tenants (US, EU, APAC)"
                    className="w-full bg-[#FAF9F5] border border-[#D5DFE5] rounded-lg px-3.5 py-2.5 text-sm text-[#0B1B26] placeholder-[#627585] outline-none focus:bg-white focus:ring-2 focus:ring-[#0B1B26]/10 transition-all"
                  />
                </div>
              </div>

              {/* Sovereignty Requirements */}
              <div>
                <label className="block text-xs font-semibold text-[#0B1B26] mb-1.5">
                  Compliance boundaries or data sovereignty{" "}
                  <span className="hidden sm:inline">requirements</span>
                </label>
                <input
                  type="text"
                  name="sovereignty"
                  value={formData.sovereignty}
                  onChange={handleChange}
                  placeholder="e.g. Must reside fully inside EU sovereign cloud"
                  className="w-full bg-[#FAF9F5] border border-[#D5DFE5] rounded-lg px-3.5 py-2.5 text-sm text-[#0B1B26] placeholder-[#627585] outline-none focus:bg-white focus:ring-2 focus:ring-[#0B1B26]/10 transition-all"
                />
              </div>
            </div>

            {/* Right 4 cols: Guidance Card */}
            <div className="lg:col-span-4 mt-2 lg:mt-0">
              <div className="bg-[#FAF9F5] border border-[#EAE6DF] border-l-4 border-l-[#0D9488] rounded-xl p-4 sm:p-5">
                <h4 className="text-xs font-bold text-[#0B1B26] mb-1.5 sm:mb-2">
                  Sovereignty &amp; Scale
                </h4>
                <p className="text-[11.5px] text-[#6B7280] leading-relaxed">
                  Specify whether the integration must operate inside a specific region{" "}
                  <span className="hidden sm:inline">, tenant model,</span> or compliance boundary{" "}
                  <span className="sm:hidden">to</span>
                  <span className="hidden sm:inline">. This information helps the team</span> evaluate deployment complexity.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
