"use client";

import React from "react";

export default function CtaSection() {
  return (
    <section className="relative w-full py-20 md:py-32 text-white bg-[#0A2029] font-sans overflow-hidden text-center">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/response/last.jpg"
          alt="Governed Response Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#06181E]/80 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-[1.15]">
          Ready for governed response?
        </h2>

        <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-8">
          Put explicit authority, verifiable decisions and recoverable execution
          at the center of response.
        </p>

        <button
          onClick={() => console.log("Book a Demo clicked")}
          className="px-6 py-3 rounded-xl bg-[#C44242] hover:bg-[#B03A3A] text-white text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-[#C44242]/20 cursor-pointer"
        >
          Book a Demo
        </button>
      </div>
    </section>
  );
}
