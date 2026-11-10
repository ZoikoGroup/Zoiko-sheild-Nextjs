import React from "react";
import Link from "next/link";
import { FileCheck, ShieldCheck, FileText, Activity } from "lucide-react";

const proofCards = [
  { title: "Evidence", desc: "immutable records", href: "/evidence-ledger-verification", icon: FileCheck },
  { title: "Trust Center", desc: "assurance posture", href: "/trust-center", icon: ShieldCheck },
  { title: "Docs", desc: "implementation guidance", href: "/developers-documentation", icon: FileText },
  { title: "Status", desc: "live service health", href: "/system-status", icon: Activity },
];

export function ProofSection() {
  return (
    <section className="bg-[#f0ede6] w-full py-[68px] lg:py-[80px] relative">
      <div className="w-full mx-auto px-[22px] lg:px-[120px] flex flex-col gap-[22px] lg:gap-[34px] items-start">

        {/* Top Header */}
        <div className="flex flex-col gap-[22px] lg:gap-[12px] items-start w-full">
          <div className="flex items-center gap-[10px] lg:gap-[12px]">
            <div className="w-[20px] h-[2px] bg-[#c44242] shrink-0" />
            <p className="font-jetbrains font-medium text-[11px] text-[#c44242] uppercase leading-[normal] mb-0">
              10 — Proof and answers
            </p>
          </div>

          <h2 className="font-hanken font-[800] leading-[1.08] text-[28px] lg:text-[40px] text-[#0a2029] m-0 w-full">
            Inspect the proof for yourself.
          </h2>
        </div>

        {/* Proof Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px]">
          {proofCards.map(({ title, desc, href, icon: Icon }) => (
            <Link
              key={title}
              href={href}
              className="group bg-white border border-[#123b4c]/12 rounded-[14px] p-[24px] flex flex-col gap-[16px] items-start shadow-[0px_8px_28px_0px_rgba(11,37,48,0.08)] cursor-pointer hover:border-[#123b4c]/30 transition-colors"
            >
              <div className="shrink-0">
                <Icon className="w-6 h-6 text-[#0a2029]" strokeWidth={1.5} />
              </div>
              <h3 className="font-hanken font-[800] text-[#0a2029] text-[20px] leading-[normal] m-0">
                {title}
              </h3>
              <p className="font-manrope font-normal text-[13px] text-[#5b6670] leading-[normal] m-0 group-hover:text-[#c44242] transition-colors">
                {desc} &rarr;
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
