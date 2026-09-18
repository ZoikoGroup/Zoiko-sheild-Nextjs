"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface EnterpriseStackCtaSectionProps {
  onOpenDemo?: () => void;
}

export const EnterpriseStackCtaSection: React.FC<EnterpriseStackCtaSectionProps> = ({
  onOpenDemo,
}) => {
  return (
    <section className="w-full bg-[#0B181E] text-white py-20 lg:py-24 overflow-hidden relative border-t border-gray-800">
      {/* Background Image & Overlay */}
      <Image
        src="/images/integration-catalog/EnterpriseCTA-Section.png"
        alt="Enterprise Stack CTA Background"
        fill
        className="object-cover  pointer-events-none"
        priority
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-sans">
          Your stack remains yours.
        </h2>

        <p className="text-base sm:text-lg text-white/75 leading-relaxed font-sans max-w-3xl mx-auto">
          Zoiko Shield connects the signals, preserves the evidence, and governs how security and compliance data moves through the enterprise. No rip-and-replace, just continuous mathematical proof.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenDemo}
            className="bg-red-500 hover:bg-[#A91D22] text-white px-8 py-4 rounded-[10px] font-bold text-base shadow-xl hover:shadow-2xl transition-all"
          >
            Book a Technical Demo
          </button>
          <Link
            href="/contact"
            className="bg-transparent hover:bg-white/10 text-white border-[1.5px] border-white/30 px-7 py-4 rounded-[10px] font-bold text-base transition-all"
          >
            Talk to an Architect
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseStackCtaSection;
