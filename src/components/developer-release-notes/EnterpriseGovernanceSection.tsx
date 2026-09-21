"use client";

import React from "react";
import Image from "next/image";

export const EnterpriseGovernanceSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-sky-950 text-white py-16 lg:py-20 px-4 sm:px-8 lg:px-20 min-h-[500px] flex items-center">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-release-notes/Governance-Background-Image.png"
          alt="Enterprise Governance Background"
          fill
          className="object-cover object-center opacity-45"
          priority
        />
        {/* Navy/Dark Blue Overlay */}
        <div className="absolute inset-0 bg-[#0B253A]/80 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Eyebrow & Subtitle (approx 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-start items-start gap-4">
            <div className="inline-flex items-center gap-3">
              <div className="w-6 h-0.5 bg-white" />
              <span className="text-white text-xs font-medium font-mono uppercase tracking-wider">
                GOVERNED INFRASTRUCTURE
              </span>
            </div>

            <h2 className="text-white text-3xl sm:text-4xl lg:text-[40px] font-extrabold font-sans leading-[1.15] tracking-tight">
              Enterprise Change-Management Protocols
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base font-normal leading-relaxed max-w-md">
              Ensuring absolute accountability, separation of duties, and machine-readable audit trails.
            </p>
          </div>

          {/* Right Column: 3 Cards Row (approx 7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="p-6 bg-gray-800/80 backdrop-blur-md rounded-xl border border-white/20 hover:border-white/40 transition-all flex flex-col justify-start items-start gap-3 min-h-[280px]">
              <h3 className="text-white text-base font-extrabold font-sans leading-snug">
                Governed Publishing Pipeline
              </h3>
              <p className="text-slate-300 text-xs sm:text-[13px] font-normal leading-relaxed">
                Before release notes are committed to this registry, they must undergo cryptographic multi-party authorization representing Product, Engineering, Security, Support, and Writing.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-gray-800/80 backdrop-blur-md rounded-xl border border-white/20 hover:border-white/40 transition-all flex flex-col justify-start items-start gap-3 min-h-[280px]">
              <h3 className="text-white text-base font-extrabold font-sans leading-snug">
                Separation of Duties (SoD)
              </h3>
              <p className="text-slate-300 text-xs sm:text-[13px] font-normal leading-relaxed">
                Marketing and sales alignment reviews happen completely out-of-band. Technical release content, security posture alerts, and deprecation schedules are purely registry-driven and immutable.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-gray-800/80 backdrop-blur-md rounded-xl border border-white/20 hover:border-white/40 transition-all flex flex-col justify-start items-start gap-3 min-h-[280px]">
              <h3 className="text-white text-base font-extrabold font-sans leading-snug">
                Automated Machine Export
              </h3>
              <p className="text-slate-300 text-xs sm:text-[13px] font-normal leading-relaxed">
                Every committed entry instantly populates our machine-readable schema endpoint, allowing security operations teams to automate change policy checks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
