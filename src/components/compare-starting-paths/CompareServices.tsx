"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, GitFork, ShieldAlert } from "lucide-react";

export default function CompareServices() {
  return (
    <div className="relative w-full bg-[#F6F4EE] flex items-center justify-center px-6 md:px-12 py-16 overflow-x-hidden">
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
              COMPARE SERVICES
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-[40px] font-bold text-[#111A1E] tracking-tight mb-3">
            Two independent starting paths.
          </h2>

          {/* Description */}
          <p className="text-[#4A555B] text-base sm:text-lg">
            Explore the operating job each service supports. Neither path is
            ranked or presented as a prerequisite.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Card 1: Managed Defense */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-[#E5E0D5] flex flex-col justify-between"
          >
            <div>
              {/* Icon / Badge */}
              <div className="w-12 h-12 rounded-xl bg-[#FDF3F2] flex items-center justify-center text-[#C8382C] mb-6">
                <ShieldAlert className="w-6 h-6" />
              </div>

              {/* Path Tag */}
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C8382C] block mb-2">
                SECURITY-OPERATIONS PATH
              </span>

              {/* Card Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111A1E] tracking-tight mb-6">
                Managed Defense
              </h3>

              <div className="w-full h-[1px] bg-[#EFECE4] mb-6"></div>

              {/* Specs List */}
              <div className="space-y-4 mb-8">
                <div className="grid grid-cols-3 gap-4 items-start">
                  <span className="text-xs font-bold text-[#7C8890] tracking-wider uppercase">
                    Outcome
                  </span>
                  <span className="col-span-2 text-sm text-[#111A1E] font-normal leading-relaxed">
                    Detection, investigation, governed response.
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 items-start">
                  <span className="text-xs font-bold text-[#7C8890] tracking-wider uppercase">
                    Core objects
                  </span>
                  <span className="col-span-2 text-sm text-[#111A1E] font-normal leading-relaxed">
                    Signals, cases, investigations, response decisions.
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 items-start">
                  <span className="text-xs font-bold text-[#7C8890] tracking-wider uppercase">
                    Authority
                  </span>
                  <span className="col-span-2 text-sm text-[#111A1E] font-normal leading-relaxed">
                    Response decision rights (R0-R4).
                  </span>
                </div>
              </div>
            </div>

            {/* Button */}
            <div>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-[#7C8890]/40 text-[#111A1E] text-sm font-bold tracking-wide hover:bg-[#F6F4EE] transition-colors group"
              >
                <span>Explore Managed Defense</span>
                <ArrowRight className="w-4 h-4 text-[#111A1E] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Continuous Assurance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-[#E5E0D5] flex flex-col justify-between"
          >
            <div>
              {/* Icon / Badge */}
              <div className="w-12 h-12 rounded-xl bg-[#FDF3F2] flex items-center justify-center text-[#C8382C] mb-6">
                <GitFork className="w-6 h-6" />
              </div>

              {/* Path Tag */}
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C8382C] block mb-2">
                CONTROL / EVIDENCE ASSURANCE PATH
              </span>

              {/* Card Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111A1E] tracking-tight mb-6">
                Continuous Assurance
              </h3>

              <div className="w-full h-[1px] bg-[#EFECE4] mb-6"></div>

              {/* Specs List */}
              <div className="space-y-4 mb-8">
                <div className="grid grid-cols-3 gap-4 items-start">
                  <span className="text-xs font-bold text-[#7C8890] tracking-wider uppercase">
                    Outcome
                  </span>
                  <span className="col-span-2 text-sm text-[#111A1E] font-normal leading-relaxed">
                    Ongoing control and evidence assurance, audit readiness.
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 items-start">
                  <span className="text-xs font-bold text-[#7C8890] tracking-wider uppercase">
                    Core objects
                  </span>
                  <span className="col-span-2 text-sm text-[#111A1E] font-normal leading-relaxed">
                    Controls, tests, evidence, exceptions, mappings.
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 items-start">
                  <span className="text-xs font-bold text-[#7C8890] tracking-wider uppercase">
                    Authority
                  </span>
                  <span className="col-span-2 text-sm text-[#111A1E] font-normal leading-relaxed">
                    Control and evidence evaluation ownership.
                  </span>
                </div>
              </div>
            </div>

            {/* Button */}
            <div>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-[#7C8890]/40 text-[#111A1E] text-sm font-bold tracking-wide hover:bg-[#F6F4EE] transition-colors group"
              >
                <span>Explore Continuous Assurance</span>
                <ArrowRight className="w-4 h-4 text-[#111A1E] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}