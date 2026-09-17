"use client";

import React from "react";
import Image from "next/image";

export default function B2bSaasCloudAi() {
  return (
    <div className="relative w-full bg-[#F6F4EE] flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 py-16 overflow-hidden">
      {/* Background blur/shadow element positioned outside on the right */}
      <div className="absolute -right-32 md:-right-20 lg:-right-10 top-1/3 -translate-y-1/2 pointer-events-none z-0">
        <Image
          src="/images/blur.png"
          alt=""
          width={900}
          height={900}
          className="w-[500px] md:w-[700px] lg:w-[950px] opacity-80 object-contain"
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-12">
        {/* Left Column: Breadcrumb, Text & CTAs */}
        <div className="lg:col-span-6 flex flex-col items-start justify-center">
          {/* Breadcrumb Path */}
          <div className="flex items-center gap-2 mb-6 text-xs text-[#7A858B] font-mono">
            <span>Home</span>
            <span>→</span>
            <span>Solutions</span>
            <span>→</span>
            <span className="text-[#111A1E] font-medium">
              B2B SaaS, Cloud & AI
            </span>
          </div>

          {/* Subheading / Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] tracking-[0.2em] font-mono text-[#C8382C] uppercase font-semibold">
              — B2B SAAS, CLOUD & AI
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-[42px] lg:text-[46px] font-bold text-[#111A1E] leading-[1.1] tracking-tight mb-6">
            Build enterprise trust across SaaS, cloud and AI with{" "}
            <span className="text-[#C8382C]">evidence</span> and accountable
            security.
          </h1>

          {/* Description Paragraph */}
          <p className="text-[#4A555B] text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal">
            Connect cloud and SaaS dependencies, AI governance, security
            operations and assurance to current evidence without hiding scope,
            shared responsibility, unknowns or human authority.
          </p>

          {/* Buttons Container */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C8382C] text-white text-sm font-medium tracking-wide shadow-sm hover:bg-[#b53026] transition-colors"
            >
              Book a Demo
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-transparent border border-[#111A1E30] text-[#111A1E] text-sm font-medium tracking-wide hover:bg-[#111A1E08] transition-colors"
            >
              Explore AI Security & Governance
            </a>
          </div>
        </div>

        {/* Right Column: Inspectable Sector Trust Map Card with Background Image */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[540px] rounded-3xl overflow-hidden shadow-2xl border border-[#FFFFFF20] p-6 flex flex-col">
            {/* Background Image for the Card */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/b2b-saas/1.png"
                alt=""
                fill
                className="object-cover opacity-80"
              />
              {/* Optional dark overlay to ensure high text contrast */}
              <div className="absolute inset-0 bg-[#0B2732]/85" />
            </div>

            {/* Card Content Overlay */}
            <div className="relative z-10 flex flex-col w-full">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white text-sm sm:text-base font-semibold tracking-wide">
                  Inspectable sector trust map
                </h3>
                <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-full bg-[#16333D] text-[#85C1A3] border border-[#234550]">
                  ACTIVE • REVIEWED
                </span>
              </div>

              {/* List Rows */}
              <div className="flex flex-col gap-2.5">
                {[
                  { id: "01", name: "Tenant", status: "CONNECTED +" },
                  { id: "02", name: "Cloud", status: "CONNECTED +" },
                  { id: "03", name: "Data", status: "CONNECTED +" },
                  { id: "04", name: "AI", status: "CONNECTED +" },
                  { id: "05", name: "Security", status: "CONNECTED +" },
                  {
                    id: "06",
                    name: "Evidence",
                    status: "CURRENT / SCOPED",
                    highlight: true,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#FFFFFF0D] border border-[#FFFFFF24] text-xs font-mono text-white backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#7A858B]">{item.id}</span>
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <span
                      className={
                        item.highlight ? "text-[#85C1A3]" : "text-[#7A858B]"
                      }
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Dual Info Cards */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {/* Visible Scope Card */}
        <div className="p-6 rounded-3xl bg-[#E6F0EC] border border-[#CDE0D7] flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-mono tracking-[0.2em] text-[#1F7A6C] uppercase font-semibold mb-2">
              VISIBLE SCOPE
            </div>
            <p className="text-[#33443D] text-xs sm:text-sm leading-relaxed">
              Cloud providers/services, integrations, regions, tenant
              architecture, AI providers/models, data use, assurance,
              certifications, service terms and availability vary by approved
              product, deployment and authority.
            </p>
          </div>
        </div>

        {/* Boundary Card */}
        <div className="p-6 rounded-3xl bg-[#F7EBEB] border border-[#E8D1D1] flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-mono tracking-[0.2em] text-[#C44242] uppercase font-semibold mb-2">
              BOUNDARY
            </div>
            <p className="text-[#593333] text-xs sm:text-sm leading-relaxed">
              ZoikoShield supports governed security, trust, evidence and AI
              decision preparation; it does not certify the customer, guarantee
              tenant isolation or cloud/AI safety, promise universal provider
              coverage, or replace customer/provider/legal/auditor authority.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
