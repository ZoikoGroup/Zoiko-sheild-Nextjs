import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function DiscussYourScope() {
  return (
    <div className="relative bg-[#0A2029B5] text-white px-6 py-20 md:px-16 lg:px-24 font-sans antialiased flex flex-col items-center justify-between">
      {/* Background Image using Next.js Image component */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/framework/3.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="w-full max-w-4xl mx-auto text-center flex flex-col items-center my-auto">
        {/* Top small label */}
        <p className="text-[#E0967D] text-xs font-bold tracking-[0.15em] uppercase mb-4">
          AFTER THE EVIDENCE
        </p>

        {/* Main title */}
        <h1 className="text-4xl md:text-[40px] lg:text-[40px] font-bold tracking-tight text-white leading-tight mb-6">
          Discuss your scope with our team.
        </h1>

        {/* Subtitle description */}
        <p className="text-[#FFFFFFAD] max-w-2xl leading-relaxed mb-10">
          Review the Trust Center, mappings, evidence context, and limitations
          first. When you are ready, we can discuss how ZoikoShield may support
          your program.
        </p>

        {/* Action Button */}
        <a
          href="#"
          className="bg-[#D9534F] hover:bg-[#C53030] text-white font-semibold px-8 py-3.5 rounded-xl text-sm transition-colors shadow-lg inline-block"
        >
          Book a Demo
        </a>
      </div>

      {/* Footer Links */}
      <div className="w-full max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-6 md:gap-10 text-xs md:text-sm text-[#9CA3AF] pt-12">
        <a
          href="/trust-center"
          className="hover:text-white transition-colors inline-flex items-center gap-1"
        >
          Trust Center <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
        <a
          href="/compliance-control-plane"
          className="hover:text-white transition-colors inline-flex items-center gap-1"
        >
          Compliance Control Plane <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
        <a
          href="/evidence-ledger-verification"
          className="hover:text-white transition-colors inline-flex items-center gap-1"
        >
          Evidence Ledger &amp; Verification{" "}
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
