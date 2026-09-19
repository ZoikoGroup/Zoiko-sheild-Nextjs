"use client";

import React from "react";

export default function WorkflowsSection() {
  return (
    <section className="hidden lg:block bg-[#f7f5f0] w-full">
      <div className="flex flex-col gap-8 mx-auto max-w-[1440px] px-[108px] py-[60px]">
        <div className="flex flex-col gap-3 items-start">
          <h2 className="font-sans font-extrabold text-[28px] text-[#0a2029] m-0">
            Defensible Compliance Architecture
          </h2>
          <p className="font-sans font-normal text-[14px] text-[#5b6670] m-0">
            Cryptographic workflows governing pre-consent gating and
            continuous compliance auditing.
          </p>
        </div>

        <div className="flex gap-5 items-start w-full">
          <div className="bg-[#f0ede6] flex flex-1 flex-col gap-4 items-start p-6 rounded-[12px]">
            <p className="font-sans font-extrabold text-[#0a2029] text-[16px] m-0">
              Pre-Consent Gating Pipeline
            </p>
            <div className="flex flex-col gap-3 items-start w-full text-[13px]">
              {[
                ["01", "Initial Request (Gated Sandbox)"],
                ["02", "Optional Tags Gated & Blocked"],
                ["03", "Active Choice / Authorized Run Only"],
              ].map(([n, label]) => (
                <div key={n} className="bg-white flex gap-3 items-center p-[10px] rounded-[6px] w-full">
                  <p className="font-sans font-bold text-[#c44242] m-0">{n}</p>
                  <p className="font-sans font-normal text-[#0a2029] m-0">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#f0ede6] flex flex-1 flex-col gap-4 items-start p-6 rounded-[12px]">
            <p className="font-sans font-extrabold text-[#0a2029] text-[16px] m-0">
              Consent Evidence Ledger
            </p>
            <div className="flex flex-col gap-3 items-start w-full text-[12px] font-bold">
              {[
                ["RECORD ID", "hash_7a299c403f8f", "text-[#0a2029]"],
                ["JURISDICTION RULE", "GDPR-PECR-Gated", "text-[#0a2029]"],
                ["ANONYMIZED PROOF", "Minimization Active", "text-[#1f7a6c]"],
              ].map(([label, value, color]) => (
                <div
                  key={label}
                  className="bg-white flex items-center justify-between p-[10px] rounded-[6px] w-full"
                >
                  <p className="font-sans text-[#5b6670] m-0">{label}</p>
                  <p className={`font-sans ${color} m-0`}>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
