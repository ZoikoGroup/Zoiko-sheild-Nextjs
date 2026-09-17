import React from "react";
import Image from "next/image";

export default function BringBoundedCitedAndOverridableAi() {
  return (
    <div className="relative text-white px-6 py-28 md:py-40 md:px-12 font-sans antialiased flex flex-col items-center justify-center overflow-hidden bg-[#071D26]">
      {/* Background Image using Next.js Image component */}
      <div className="absolute inset-0 -z-25 overflow-hidden">
        <Image
          src="/images/ai-security/5.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
      </div>

      {/* Enhanced Darkness / Dimming Overlay */}
      <div className="absolute inset-0 -z-20 bg-[#071D26]/95 backdrop-blur-xs" />

      <div className="w-full max-w-4xl text-center flex flex-col items-center relative z-10">
        {/* Top small label/tag */}
        <p className="text-[#5FE3C5] text-xs font-mono font-bold tracking-[0.2em] uppercase mb-4">
          HUMAN COMMAND, INSPECTABLE PROOF.
        </p>

        {/* Main title */}
        <h1 className="text-3xl md:text-[44px] lg:text-[44px] font-bold tracking-tight text-white leading-tight mb-6">
          Bring bounded, cited and overridable AI into your security governance.
        </h1>

        {/* Subtitle description */}
        <p className="text-[#9CA3AF] text-base md:text-lg max-w-2xl leading-relaxed mb-10">
          Keep scope, grounding, permission, decision rights and safe fallback
          visible from first answer to governed next step.
        </p>

        {/* Action Button */}
        <a
          href="#"
          className="bg-[#D9534F] hover:bg-[#C53030] text-white font-semibold px-8 py-3.5 rounded-xl text-sm transition-all shadow-[0_4px_20px_rgba(217,83,79,0.4)] inline-block"
        >
          Book a Demo
        </a>
      </div>
    </div>
  );
}
