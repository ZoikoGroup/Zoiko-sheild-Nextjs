"use client";

import React from "react";
import { motion } from "framer-motion";

interface RoleItem {
  title: string;
  description: string;
}

const roles: RoleItem[] = [
  {
    title: "Organization Owner",
    description: "Full tenant administration, setup configuration.",
  },
  {
    title: "Security Admin",
    description: "Policy enforcement, alert triage, agent isolation actions.",
  },
  {
    title: "Privacy / Compliance",
    description: "Read-only access to compliance logs and evidence ledgers.",
  },
  {
    title: "Integration Admin",
    description: "Manage active API credentials for providers.",
  },
  {
    title: "Support Personnel",
    description: "Explicitly blocked. Requires JIT emergency token.",
  },
  {
    title: "Auditor / Viewer",
    description: "Strictly bounded read-only view of historical evidence.",
  },
];

export default function PrivacyAccessIsolationSection() {
  return (
    <section className="w-full bg-[#F0EDE6] text-[#0A2029] py-16 sm:py-20 px-6 sm:px-10 lg:px-20 flex justify-center border-b border-[#123B4C]/10">
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
              SECURITY CONTROL BOUNDS
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A2029] tracking-[-0.024em] leading-tight">
            Access & Tenant Isolation
          </h2>
          <p className="text-[#5B6670] text-sm sm:text-[15px] leading-relaxed font-normal">
            Strong boundary enforcement. We block cross-tenant leakage using strict logical database constraints, checked on every query execution.
          </p>
        </motion.div>

        {/* Isolation Layout: Left (Roles List) & Right (Callout Cards) */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 w-full">
          {/* Left Column: Role-Based Architecture */}
          <div className="flex-1 flex flex-col gap-4 w-full">
            <h3 className="text-lg sm:text-[22px] font-extrabold text-[#0A2029] tracking-tight">
              Role-Based Architecture
            </h3>
            <div className="flex flex-col gap-2.5 w-full">
              {roles.map((role, idx) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className="bg-white border border-[#123B4C]/10 rounded-[8px] p-3 sm:px-4 sm:py-3 flex items-center gap-3 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                >
                  <span className="w-1 h-6 rounded-[2px] bg-[#C44242] shrink-0" />
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 w-full">
                    <span className="text-[14.5px] font-extrabold text-[#0A2029] tracking-tight sm:w-48 shrink-0">
                      {role.title}
                    </span>
                    <span className="text-[13px] text-[#5B6670] font-normal leading-relaxed flex-1">
                      {role.description}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Boundary Callouts */}
          <div className="w-full lg:w-[480px] shrink-0 flex flex-col gap-5">
            {/* Break Glass Safeguard */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#0A2440] text-white rounded-[12px] p-5 sm:p-6 flex flex-col justify-between gap-4 border border-[#0A2440] shadow-md"
            >
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[11px] font-bold text-[#E0967D] uppercase tracking-wider">
                  BREAK-GLASS ACCESS SAFEGUARD
                </span>
                <p className="text-white/80 text-xs sm:text-[13px] leading-relaxed font-medium">
                  Emergency support access is offline by default. If requested, it demands a cryptographic approval ticket from your own Org Owner before opening a strictly audited 1-hour session.
                </p>
              </div>
              <div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/10 text-[#E0967D] border border-[#E0967D]/30 text-[11px] font-bold">
                  Offline & Locked
                </span>
              </div>
            </motion.div>

            {/* Least Privilege Service Identities */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white border border-[#123B4C]/10 rounded-[12px] p-5 sm:p-6 flex flex-col justify-between gap-4 shadow-[0_2px_4px_rgba(0,0,0,0.02)]"
            >
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[11px] font-bold text-[#C44242] uppercase tracking-wider">
                  LEAST-PRIVILEGE SERVICE IDENTITIES
                </span>
                <p className="text-[#5B6670] text-xs sm:text-[13px] leading-relaxed font-medium">
                  API integrations operate using isolated credentials bound strictly to specified read or write Scopes. We do not use global admin tokens for any connector.
                </p>
              </div>
              <div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#E4F0EC] text-[#1F7A6C] text-[11px] font-bold">
                  Enforced
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
