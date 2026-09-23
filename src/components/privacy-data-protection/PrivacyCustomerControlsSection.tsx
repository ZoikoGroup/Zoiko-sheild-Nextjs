"use client";

import React from "react";
import { motion } from "framer-motion";

interface SettingItem {
  title: string;
  subtext: string;
  buttonLabel: string;
}

const settingsList: SettingItem[] = [
  {
    title: "Data Collection Scope",
    subtext: "All Telemetry Enabled (Default)",
    buttonLabel: "Configure Scope",
  },
  {
    title: "Retention Policy Limit",
    subtext: "30 Days (Standard Audit Log)",
    buttonLabel: "Modify Period",
  },
  {
    title: "AI Feature Integration",
    subtext: "Active - Data Exclusion Rule Enforced",
    buttonLabel: "Toggle AI Help",
  },
  {
    title: "Guest / Support Access",
    subtext: "Locked - Emergency Approval Required",
    buttonLabel: "Grant Support Key",
  },
  {
    title: "Database Export Request",
    subtext: "Last executed 14d ago by Admin",
    buttonLabel: "Initiate Export",
  },
  {
    title: "Tenant Account Closure",
    subtext: "Zero residual hold active",
    buttonLabel: "Queue Deletion",
  },
];

export default function PrivacyCustomerControlsSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0A2029] py-16 sm:py-20 px-6 sm:px-10 lg:px-20 flex justify-center border-b border-[#123B4C]/10">
      <div className="max-w-[1240px] w-full flex flex-col gap-10 sm:gap-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="text-xs sm:text-sm font-bold font-mono tracking-[0.12em] text-[#C44242] uppercase">
              CONSOLE SETTINGS
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A2029] tracking-[-0.024em] leading-tight">
            Active Customer Privacy Controls
          </h2>
          <p className="text-[#5B6670] text-sm sm:text-[15px] leading-relaxed font-normal">
            Representative dashboard workspace settings available directly to tenant administrators.
          </p>
        </motion.div>

        {/* Console UI Plate */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full bg-white border border-[#123B4C]/10 rounded-[16px] p-6 sm:p-7 shadow-[0_2px_4px_rgba(0,0,0,0.02)] flex flex-col gap-5"
        >
          <h3 className="text-lg sm:text-[20px] font-extrabold text-[#0A2029] tracking-tight">
            Workspace Privacy & Data Configuration
          </h3>

          <div className="flex flex-col gap-3 w-full">
            {settingsList.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="bg-[#F7F5F0] rounded-[8px] px-4 py-3 sm:px-5 sm:py-3.5 flex flex-row items-center justify-between gap-4"
              >
                <div className="flex flex-col gap-0.5">
                  <span className="text-[14.5px] font-extrabold text-[#0A2029] tracking-tight">
                    {item.title}
                  </span>
                  <span className="text-[12.5px] text-[#5B6670] font-normal leading-normal">
                    {item.subtext}
                  </span>
                </div>

                <button
                  type="button"
                  className="bg-white hover:bg-white/80 active:scale-[0.98] text-[#0A2029] border border-[#123B4C]/10 rounded-[6px] px-4 py-2 text-[12.5px] font-bold shrink-0 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all cursor-pointer"
                >
                  {item.buttonLabel}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
