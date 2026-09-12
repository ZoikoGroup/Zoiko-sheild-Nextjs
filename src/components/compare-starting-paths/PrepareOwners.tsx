"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface PathReadiness {
  id: string;
  title: string;
  items: string[];
}

const readinessData: PathReadiness[] = [
  {
    id: "managed-defense",
    title: "Managed Defense",
    items: [
      "Security operations owner",
      "Systems, sources and use cases scope",
      "Telemetry access",
      "Escalation contacts",
    ],
  },
  {
    id: "continuous-assurance",
    title: "Continuous Assurance",
    items: [
      "Assurance or control program owner",
      "Controls and frameworks scope",
      "Evidence access",
      "Control owners",
    ],
  },
];

export default function PrepareOwners() {
  return (
    <div className="relative w-full bg-[#F0EDE6] flex items-center justify-center px-6 md:px-12 py-20 overflow-x-hidden">
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-start">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 flex flex-col items-start"
        >
          {/* Subheading / Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-4 h-[1px] bg-[#C8382C]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C8382C]">
              READINESS
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-[44px] font-bold text-[#111A1E] tracking-tight mb-3 leading-[1.1]">
            Prepare the owners, scope and access each path needs.
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-12">
          {readinessData.map((path, index) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1 * (index + 1),
                ease: "easeOut",
              }}
              className="bg-white rounded-[14px] p-6 sm:p-8 shadow-sm border border-[#E5E0D5] flex flex-col justify-between"
            >
              <div>
                {/* Card Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111A1E] tracking-tight mb-8">
                  {path.title}
                </h3>

                {/* Items List */}
                <div className="space-y-5">
                  {path.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-4">
                      <div className="w-5 h-5 rounded-full bg-[#EBF5F0] flex items-center justify-center text-[#2E7D32] shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span className="text-sm sm:text-base text-[#111A1E] font-normal leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xs sm:text-sm text-[#7C8890] tracking-wide"
        >
          Availability, coverage, service levels, included capabilities and
          commercial terms vary by approved service scope and contract.
        </motion.p>
      </div>
    </div>
  );
}
