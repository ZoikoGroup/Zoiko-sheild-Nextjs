"use client";

import React from "react";
import Image from "next/image";

export default function CtaSection() {
  return (
    <section className="relative w-full min-h-[60vh] bg-[#0A2029B2] flex items-center justify-center py-20 text-white font-sans overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/incident/6.png"
          alt="Prepare Before Pressure Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#06181E]/80 backdrop-blur-[2px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-4 h-[2px] bg-[#C44242]" />
          <span className="text-[11px] font-mono font-bold tracking-widest text-[#E0967D] uppercase">
            PREPARE BEFORE PRESSURE
          </span>
          <span className="w-4 h-[2px] bg-[#C44242]" />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
          Make incident authority explicit before the incident.
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-[#FFFFFFAD] max-w-xl mx-auto leading-relaxed mb-10">
          Build a readiness path your teams can inspect, activate and prove.
        </p>

        {/* Action Button */}
        <div>
          <button
            onClick={() => console.log("Book a Demo clicked")}
            className="px-6 py-3 rounded-xl bg-[#C44242] hover:bg-[#B03A3A] text-white text-sm font-semibold transition-all shadow-lg shadow-[#C44242]/30 cursor-pointer"
          >
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
