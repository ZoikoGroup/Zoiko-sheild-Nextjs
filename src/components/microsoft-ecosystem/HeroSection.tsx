"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Badge } from "./shared";

const metrics = [
  { label: "Ecosystem Freshness", value: "99.99%", accent: false },
  { label: "Connected Tenants", value: "4 Active", accent: false },
  { label: "Last Scope Review", value: "2 hrs ago", accent: true },
];

const services = [
  { name: "Microsoft Entra ID (Tenant 0x3A2B)", status: "Connected", tone: "teal" as const },
  { name: "Defender for Endpoint telemetry", status: "Connected", tone: "teal" as const },
  { name: "Microsoft Purview Audit logs", status: "Partial Scope", tone: "amber" as const },
];

const principles = ["SOURCE-AWARE", "PERMISSION-SCOPED", "AUDIT-VISIBLE", "HUMAN-GOVERNED"];

export default function HeroSection() {
  return (
    <section className="bg-[#f7f5f0] w-full relative overflow-hidden">
      {/* Glow effects */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-120px] top-[-80px] size-[520px] rounded-full bg-[radial-gradient(circle,rgba(196,66,66,0.35),transparent_70%)]" />
        <div className="absolute right-[240px] top-[180px] size-[480px] rounded-full bg-[radial-gradient(circle,rgba(31,122,108,0.25),transparent_70%)]" />
        <div className="absolute right-[-160px] bottom-[-200px] size-[560px] rounded-full bg-[radial-gradient(circle,rgba(10,32,41,0.3),transparent_70%)]" />
      </div>

      <div className="relative flex flex-col lg:flex-row gap-12 lg:gap-8 xl:gap-[44px] items-center mx-auto max-w-[1440px] w-full px-4 sm:px-6 lg:px-10 xl:px-[108px] py-12 lg:py-[80px]">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-7 items-start flex-1 min-w-0 w-full lg:max-w-[600px]"
        >
          <div className="flex gap-2 items-center">
            <div className="bg-[#c44242] w-5 h-[1.5px] shrink-0" />
            <p className="font-jetbrains font-bold text-[12px] text-[#c44242] tracking-[1.5px] uppercase m-0">
              Microsoft Ecosystem
            </p>
          </div>

          <h1 className="font-hanken font-extrabold leading-[1.15] text-[36px] sm:text-[44px] lg:text-[40px] xl:text-[48px] text-[#0a2029] tracking-[-0.8px] m-0">
            Make Microsoft security context more{" "}
            <span className="text-[#c44242]">defensible</span>.
          </h1>

          <p className="font-manrope font-medium leading-[26px] text-[16px] text-[#5b6670] m-0">
            Connect Microsoft identity, security operations, endpoint, device,
            cloud, and compliance signals to Zoiko Shield so teams can
            correlate risk, preserve evidence lineage, and govern response
            from one controlled operating layer.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 w-full sm:w-auto">
            <a
              href="/integration-catalog"
              className="inline-flex items-center justify-center px-6 py-[14px] rounded-[10px] bg-[#c44242] shadow-[0px_6px_20px_rgba(196,66,66,0.16)] hover:bg-[#b23636] transition-colors"
            >
              <span className="font-manrope font-bold text-[15px] text-white whitespace-nowrap">
                Explore Microsoft Integrations
              </span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-[14px] rounded-[10px] border-[1.5px] border-[#0a2029] hover:bg-[#0a20290d] transition-colors"
            >
              <span className="font-manrope font-bold text-[15px] text-[#0a2029] whitespace-nowrap">
                Talk to a Security Architect
              </span>
            </a>
          </div>

          <div className="flex flex-wrap gap-x-3 gap-y-2 items-center pt-2">
            {principles.map((p, i) => (
              <React.Fragment key={p}>
                {i > 0 && <span className="font-jetbrains text-[12px] text-[rgba(10,32,41,0.25)]">•</span>}
                <span className="font-jetbrains font-bold text-[12px] text-[#5b6670]">{p}</span>
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Right: Coverage hub card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-[568px] lg:w-[48%] xl:w-[568px] shrink-0"
        >
          <div className="bg-white/85 backdrop-blur-md border border-[rgba(18,59,76,0.1)] rounded-[20px] shadow-[0px_8px_24px_rgba(11,37,48,0.06),0px_24px_60px_rgba(11,37,48,0.05)] p-4 sm:p-5 flex flex-col gap-3.5">
            <div className="flex items-center justify-between gap-3 pb-3 border-b border-[rgba(18,59,76,0.1)]">
              <p className="font-hanken font-extrabold text-[15px] sm:text-[16px] text-[#0a2029] m-0">
                Zoiko Shield Coverage Hub
              </p>
              <Badge tone="teal" size="sm">Healthy</Badge>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
              {metrics.map((m) => (
                <div key={m.label} className="bg-[#f0ede6] rounded-[10px] p-2.5 sm:p-3 flex flex-col gap-1 min-w-0">
                  <p className="font-manrope font-semibold text-[10px] text-[#5b6670] m-0">{m.label}</p>
                  <p
                    className={`font-jetbrains font-bold text-[13px] sm:text-[16px] m-0 ${
                      m.accent ? "text-[#1f7a6c]" : "text-[#0a2029]"
                    }`}
                  >
                    {m.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-[#f7f5f0] border border-[rgba(18,59,76,0.1)] rounded-[12px] p-3 flex flex-col gap-2.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-manrope font-bold text-[12px] text-[#0a2029] m-0">
                  Active Microsoft Directory Services
                </p>
                <p className="font-jetbrains text-[10px] text-[#5b6670] m-0">API Scope: least-privilege Read</p>
              </div>
              <div className="flex flex-col">
                {services.map((s, i) => (
                  <div
                    key={s.name}
                    className={`flex items-center justify-between gap-3 py-2 ${
                      i < services.length - 1 ? "border-b border-[rgba(18,59,76,0.1)]" : ""
                    }`}
                  >
                    <p className="font-manrope text-[12px] text-[#0a2029] m-0">{s.name}</p>
                    <Badge tone={s.tone} size="sm">{s.status}</Badge>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#e4f0ec] rounded-[8px] px-3 py-2.5 flex items-center gap-2">
              <ShieldCheck className="size-3.5 text-[#1f7a6c] shrink-0" />
              <p className="font-jetbrains text-[11px] sm:text-[12px] text-[#1f7a6c] m-0">
                Immutable ledger trace verified: 42 active controls
                cryptographically mapped to SOC 2
              </p>
            </div>

            <div className="bg-[#0a2029] rounded-[16px] p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between gap-2">
                <p className="font-jetbrains text-[10px] text-white/40 uppercase tracking-wide m-0">
                  Evidentiary Record
                </p>
                <span className="bg-[rgba(45,212,191,0.1)] rounded-full px-2 py-[3px] font-jetbrains font-bold text-[10px] text-[#5eead4] whitespace-nowrap">
                  VERIFIED · ACTIVE
                </span>
              </div>
              <p className="font-jetbrains font-bold text-[12px] text-white m-0">SHA-256</p>
              <div className="bg-white/5 border border-white/10 rounded-[8px] px-3 py-2.5 min-w-0">
                <p className="font-jetbrains text-[10px] text-[#a7f3d0] m-0 truncate">
                  8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-start justify-between gap-3">
                  <p className="font-jetbrains font-bold text-[12px] text-white m-0 whitespace-nowrap">Control ID</p>
                  <p className="font-jetbrains text-[12px] text-white/60 m-0 text-right">AC-2 (Identity Access Mgmt)</p>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <p className="font-jetbrains font-bold text-[12px] text-white m-0">Timestamp</p>
                  <p className="font-jetbrains text-[12px] text-white/60 m-0 text-right">2026-08-04T08:42:11Z</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
