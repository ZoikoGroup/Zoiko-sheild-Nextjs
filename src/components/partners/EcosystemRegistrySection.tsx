"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function EcosystemRegistrySection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pathFilter, setPathFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("active");

  return (
    <section className="w-full bg-white py-20 px-6 sm:px-8 lg:px-12 border-b border-[#123B4C]/10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="font-mono text-xs sm:text-[13px] font-medium tracking-[0.115em] text-[#C44242] uppercase">
              VERIFIED REGISTRY DIRECTORY
            </span>
          </div>

          <h2 className="font-hanken font-extrabold text-3xl sm:text-4xl text-[#0A2029]">
            Ecosystem Registry Directory
          </h2>

          <p className="font-manrope text-base text-[#5E6670] leading-relaxed">
            Search and verify the real-time status of authorized partners in the
            cryptographic registry.
          </p>
        </div>

        {/* Directory Panel */}
        <div className="bg-[#F7F5F0] border border-[#123B4C]/10 rounded-xl p-6 sm:p-8 space-y-6">
          {/* Search Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-6 lg:col-span-7">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by partner name, domain, or product integration..."
                className="w-full bg-white border border-[#123B4C]/10 rounded-lg px-4 py-3 text-sm text-[#0A2029] placeholder-[#5E6670] focus:outline-none focus:border-[#C44242] transition-colors"
              />
            </div>

            <div className="md:col-span-3 lg:col-span-3">
              <select
                value={pathFilter}
                onChange={(e) => setPathFilter(e.target.value)}
                className="w-full bg-white border border-[#123B4C]/10 rounded-lg px-4 py-3 text-sm text-[#0A2029] focus:outline-none focus:border-[#C44242] transition-colors cursor-pointer"
              >
                <option value="all">Partner Path: All Paths</option>
                <option value="technology">Technology & Integration</option>
                <option value="mssp">MSSP, MDR & Managed Security</option>
                <option value="consulting">System Integration & Consulting</option>
                <option value="channel">Channel & Reseller</option>
                <option value="cloud">Cloud & Platform</option>
                <option value="advisory">Compliance & Risk Advisory</option>
              </select>
            </div>

            <div className="md:col-span-3 lg:col-span-2">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full bg-white border border-[#123B4C]/10 rounded-lg px-4 py-3 text-sm text-[#0A2029] focus:outline-none focus:border-[#C44242] transition-colors cursor-pointer"
              >
                <option value="active">Status: Active</option>
                <option value="suspended">Status: Suspended</option>
                <option value="all">Status: All</option>
              </select>
            </div>
          </div>

          {/* Directory Fallback State */}
          <div className="bg-white border border-[#123B4C]/10 rounded-lg p-10 flex flex-col items-center justify-center text-center space-y-4 shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#C44242]/10 text-[#C44242]">
              <Image
                src="/images/partners/alert-triangle.svg"
                alt="Directory Notice"
                width={32}
                height={32}
                className="w-7 h-7"
              />
            </div>

            <h3 className="font-hanken font-extrabold text-xl text-[#0A2029]">
              No Public Directory Found
            </h3>

            <p className="font-manrope text-sm leading-relaxed text-[#5E6670] max-w-xl">
              To preserve authorization integrity and prevent spear-phishing risks,
              Zoiko Shield does not publish commercial logo walls. Partners are
              verified securely directly inside the tenant application using
              cryptographic key exchanges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
