"use client";

import React from "react";
import Image from "next/image";

export default function ResponseHandoffSection() {
  const handoffCards = [
    { title: "Route state" },
    { title: "Authority" },
    { title: "R0-R4" },
    { title: "Action catalog" },
    { title: "Approvals" },
    { title: "Signing / attestation" },
    { title: "Rollback / recovery" },
    { title: "Failure handling" },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 text-white font-sans overflow-hidden">
      {/* Background Image Layer */}
      <div className="bg-[#0A2029] absolute inset-0 z-0">
        <Image
          src="/images/incident/5.png"
          alt="Response Handoff Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#C44242]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#E0967D] uppercase">
                RESPONSE HANDOFF
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-white tracking-tight leading-[1.15]">
              A clear boundary into Governed Response.
            </h2>
          </div>

          <div className="lg:col-span-4">
            <div className="p-4 bg-[#FFFFFF0D] border-l-2 border-l-[#C44242] text-xs text-white leading-relaxed">
              Readiness can prepare and activate. It cannot silently broaden the
              authority of Governed Response.
            </div>
          </div>
        </div>

        {/* 4-Column Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {handoffCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#0B2732] backdrop-blur-md rounded-2xl p-5 border border-white/10 shadow-sm flex items-center min-h-[80px]"
            >
              <h3 className="text-sm font-bold text-white font-mono sm:font-sans">
                {card.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div>
          <button
            onClick={() =>
              console.log("Open Current Authoritative Route clicked")
            }
            className="px-5 py-2.5 rounded-xl bg-[#C44242] hover:bg-[#B03A3A] text-white text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-[#C44242]/20 cursor-pointer"
          >
            Open Current Authoritative Route
          </button>
        </div>
      </div>
    </section>
  );
}
