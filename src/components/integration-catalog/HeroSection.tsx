"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

interface HeroSectionProps {
  onOpenDemo?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemo }) => {
  return (
    <section className="relative w-full bg-[#F5F2EB] py-16 lg:py-20 overflow-hidden border-b border-zoiko-border">
      {/* Background Radial Glow Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute top-40 right-1/4 w-[500px] h-[500px] bg-teal-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-red-500" />
              <span className="text-sm font-medium uppercase tracking-widest text-red-500 font-mono">
                Integrations Catalog
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Connect the stack you <span className="text-red-500">already trust.</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed max-w-2xl">
              Discover how Zoiko Shield connects identity, cloud, endpoint, network, collaboration, observability, ticketing, evidence, and developer systems to support defensible security operations and continuous assurance.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#catalog-grid"
                className="bg-red-500 hover:bg-[#A91D22] text-white px-7 py-3.5 rounded-[10px] font-bold text-base shadow-md hover:shadow-lg transition-all"
              >
                Explore Integrations
              </a>
              <button
                onClick={onOpenDemo}
                className="bg-transparent hover:bg-white/60 text-cyan-950 border-[1.5px] border-cyan-950 px-6 py-3.5 rounded-[10px] font-bold text-base transition-all"
              >
                Request a Demo
              </button>
            </div>

            {/* 3 Checkmarks */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-semibold text-gray-600 font-sans">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Governed by policy</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Least-privilege by design</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Evidence lineage preserved</span>
              </div>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative  overflow-hidden  ">
              <div className="relative aspect-[570/520] w-full rounded-2xl">
                <Image
                  src="/images/integration-catalog/HeroVisualImage.png"
                  alt="Zoiko Shield Integration Architecture Graph"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
