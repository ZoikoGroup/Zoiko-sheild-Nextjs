"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function TargetPlatformDetails() {
  const [formData, setFormData] = useState({
    vendor: "",
    productName: "",
    apiUrl: "",
    deployed: "",
    connectivity: "",
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
          {/* Section Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-4 h-[2px] bg-[#BE3A34]" />
              <span className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#BE3A34] uppercase">
                <span className="sm:hidden">STEP 2 OF 6: TARGET SPECIFICATIONS</span>
                <span className="hidden sm:inline">TARGET CAPABILITIES</span>
              </span>
            </div>

            <h2 className="text-xl sm:text-3xl lg:text-[34px] font-bold text-[#0B1B26] tracking-tight mb-2">
              Specify target platform details
            </h2>

            <p className="hidden sm:block text-[13.5px] sm:text-[14px] text-[#52606D] leading-relaxed">
              Please provide authenticated source references. File uploads or raw secrets are strictly prohibited in this phase.
            </p>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
            {/* Form Fields: Left 8 cols */}
            <div className="lg:col-span-8 space-y-3.5 sm:space-y-4">
              {/* Field 1: Vendor / Organization */}
              <div>
                <label className="block text-xs font-semibold text-[#0B1B26] mb-1.5">
                  Vendor / Developer Organization <span className="text-[#BE3A34]">*</span>
                </label>
                <input
                  type="text"
                  name="vendor"
                  value={formData.vendor}
                  onChange={handleChange}
                  placeholder="e.g. Microsoft, CrowdStrike, HashiCorp"
                  className="w-full bg-[#FAF9F5] border border-[#D5DFE5] rounded-lg px-3.5 py-2.5 text-sm text-[#0B1B26] placeholder-[#627585] outline-none focus:bg-white focus:ring-2 focus:ring-[#0B1B26]/10 transition-all"
                />
              </div>

              {/* Field 2: Product Name */}
              <div>
                <label className="block text-xs font-semibold text-[#0B1B26] mb-1.5">
                  Product or Platform Family Name <span className="text-[#BE3A34]">*</span>
                </label>
                <input
                  type="text"
                  name="productName"
                  value={formData.productName}
                  onChange={handleChange}
                  placeholder="e.g. Defender, Active Directory, Vault"
                  className="w-full bg-[#FAF9F5] border border-[#D5DFE5] rounded-lg px-3.5 py-2.5 text-sm text-[#0B1B26] placeholder-[#627585] outline-none focus:bg-white focus:ring-2 focus:ring-[#0B1B26]/10 transition-all"
                />
              </div>

              {/* Field 3: API URL */}
              <div>
                <label className="block text-xs font-semibold text-[#0B1B26] mb-1.5">
                  API Documentation Reference URL <span className="text-[#BE3A34]">*</span>
                </label>
                <input
                  type="text"
                  name="apiUrl"
                  value={formData.apiUrl}
                  onChange={handleChange}
                  placeholder="https://api.vendor.com/docs"
                  className="w-full bg-[#FAF9F5] border border-[#D5DFE5] rounded-lg px-3.5 py-2.5 text-sm text-[#0B1B26] placeholder-[#627585] outline-none focus:bg-white focus:ring-2 focus:ring-[#0B1B26]/10 transition-all"
                />
              </div>

              {/* Field 4 & 5: Two columns on desktop, stacked on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0B1B26] mb-1.5">
                    Already deployed in your environment? <span className="text-[#BE3A34]">*</span>
                  </label>
                  <input
                    type="text"
                    name="deployed"
                    value={formData.deployed}
                    onChange={handleChange}
                    placeholder="Yes / No / Evaluating"
                    className="w-full bg-[#FAF9F5] border border-[#D5DFE5] rounded-lg px-3.5 py-2.5 text-sm text-[#0B1B26] placeholder-[#627585] outline-none focus:bg-white focus:ring-2 focus:ring-[#0B1B26]/10 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B1B26] mb-1.5">
                    Current connectivity architecture
                  </label>
                  <input
                    type="text"
                    name="connectivity"
                    value={formData.connectivity}
                    onChange={handleChange}
                    placeholder="e.g. Webhook, Poll, Syslog, Agent"
                    className="w-full bg-[#FAF9F5] border border-[#D5DFE5] rounded-lg px-3.5 py-2.5 text-sm text-[#0B1B26] placeholder-[#627585] outline-none focus:bg-white focus:ring-2 focus:ring-[#0B1B26]/10 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Right 4 cols: Reference Quality */}
            <div className="lg:col-span-4 mt-2 lg:mt-0">
              <div className="bg-[#FAF9F5] border border-[#EAE6DF] border-l-4 border-l-[#0D9488] rounded-xl p-4 sm:p-5">
                <h4 className="text-xs font-bold text-[#0B1B26] mb-1.5 sm:mb-2">
                  Reference Quality
                </h4>
                <p className="text-[11.5px] text-[#6B7280] leading-relaxed">
                  Include the official API documentation URL and any public developer references to accelerate feasibility checks.
                  <span className="hidden sm:inline"> and reduces follow-up questions.</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
