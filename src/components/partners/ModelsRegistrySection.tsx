"use client";

import React from "react";

interface RegistryRow {
  product: string;
  domain: string;
  state: "Active" | "Suspended";
  direction: "Ingest" | "Bi-directional";
  authModel: string;
}

const registryData: RegistryRow[] = [
  {
    product: "AWS / Azure Cloud",
    domain: "Cloud Platform",
    state: "Active",
    direction: "Ingest",
    authModel: "IAM Role Delegation",
  },
  {
    product: "CrowdStrike Falcon",
    domain: "Endpoint Security",
    state: "Active",
    direction: "Bi-directional",
    authModel: "OAuth2 Credentials",
  },
  {
    product: "Okta Identity",
    domain: "Identity Provider",
    state: "Active",
    direction: "Bi-directional",
    authModel: "OIDC Client Grant",
  },
  {
    product: "Microsoft Entra ID",
    domain: "Identity & PIM",
    state: "Active",
    direction: "Ingest",
    authModel: "OIDC App Consent",
  },
  {
    product: "Jamf Pro MDM",
    domain: "Device Posture",
    state: "Suspended",
    direction: "Ingest",
    authModel: "OAuth Token (Expired)",
  },
];

export default function ModelsRegistrySection() {
  return (
    <section className="w-full bg-[#F0EDE6] py-20 px-6 sm:px-8 lg:px-12 border-b border-[#123B4C]/10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="font-mono text-xs sm:text-[13px] font-medium tracking-[0.115em] text-[#C44242] uppercase">
              REGISTRY METRIC RULES
            </span>
          </div>

          <h2 className="font-hanken font-extrabold text-3xl sm:text-4xl text-[#0A2029]">
            Source Registry States
          </h2>

          <p className="font-manrope text-base text-[#5E6670] leading-relaxed">
            Zoiko Shield validates partner credentials through direct
            registry-based proofs. Below is the active verification schema.
          </p>
        </div>

        {/* Table Container */}
        <div className="w-full bg-white border border-[#123B4C]/10 rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[760px]">
              <thead>
                <tr className="bg-[#F0EDE6] border-b border-[#123B4C]/10 font-mono text-xs font-bold text-[#0A2029] tracking-wider uppercase">
                  <th className="py-4 px-6 w-[240px]">Source Product</th>
                  <th className="py-4 px-6 w-[180px]">Domain</th>
                  <th className="py-4 px-6 w-[160px]">Verification State</th>
                  <th className="py-4 px-6 w-[140px]">Direction</th>
                  <th className="py-4 px-6">Auth Model</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#123B4C]/10 font-manrope text-sm text-[#0A2029]">
                {registryData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[#F7F5F0]/60 transition-colors"
                  >
                    <td className="py-4 px-6 font-hanken font-extrabold text-[#0A2029] text-[15px]">
                      {row.product}
                    </td>
                    <td className="py-4 px-6 text-[#5E6670]">{row.domain}</td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full font-mono text-[11px] font-bold ${
                          row.state === "Active"
                            ? "bg-[#E4F0EC] text-[#1F7A6C]"
                            : "bg-[#FBEFEF] text-[#A43737]"
                        }`}
                      >
                        {row.state}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-[#0A2029] font-medium">
                      {row.direction}
                    </td>
                    <td className="py-4 px-6 font-mono text-xs text-[#5E6670]">
                      {row.authModel}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
