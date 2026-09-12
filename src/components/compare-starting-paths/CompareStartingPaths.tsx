'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CompareStartingPaths() {
  return (
    <div className="relative w-full min-h-screen bg-[#F6F4EE] flex items-center justify-center px-6 md:px-16 lg:px-24 py-16 overflow-x-hidden">
      {/* Background blur/shadow element positioned outside the main card/content on the right */}
      <div className="absolute -right-32 md:-right-20 lg:-right-10 top-1/2 -translate-y-1/2 pointer-events-none z-0">
        <Image 
          src="/images/blur.png" 
          alt="" 
          width={900}
          height={900}
          className="w-[500px] md:w-[700px] lg:w-[950px] opacity-70 object-contain"
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Text & CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-6 flex flex-col items-start justify-center"
        >
          {/* Subheading / Tag */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-4 h-[1px] bg-[#C8382C]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C8382C]">
              SERVICES
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-[44px] lg:text-[44px] font-bold text-[#111A1E] leading-[1.1] tracking-tight mb-6">
            Choose the starting path that matches the job you need to solve.
          </h1>

          {/* Description Paragraph */}
          <p className="text-[#4A555B] text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal">
            Managed Defense and Continuous Assurance address different operating needs. Compare outcomes, cadence, authority, evidence and prerequisites — then choose the route you want to explore.
          </p>

          {/* Buttons Container */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a 
              href="#" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#C8382C] text-white text-sm font-medium tracking-wide shadow-sm hover:bg-[#b53026] transition-colors"
            >
              Compare the paths
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <a 
              href="#" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-transparent border border-[#7C8890] text-[#111A1E] text-sm font-medium tracking-wide hover:bg-[#EFECE4] transition-colors"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Footer note */}
          <p className="text-xs text-[#7C8890] tracking-tight">
            The two paths are independent. Ordering does not indicate recommendation or maturity.
          </p>
        </motion.div>

        {/* Right Column: Card with Image and Overlays */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="lg:col-span-6 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[500px] aspect-square rounded-3xl overflow-hidden shadow-2xl bg-[#0B1318] border border-[#232F36]">
            
            {/* Background Image / Circuit Graphic */}
            <Image 
              src="/images/compare-starting-paths/1.png" 
              alt="Independent Paths Shared Clarity" 
              fill
              className="absolute inset-0 object-cover opacity-90"
            />

            {/* Top Text Indicator */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none z-10">
              <span className="text-[10px] tracking-[0.2em] font-mono text-[#8C9BA5] uppercase">
                INDEPENDENT PATHS . SHARED CLARITY
              </span>
            </div>

            {/* Bottom Floating Action Cards / Buttons inside the graphic */}
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3 z-10">
              <div className="bg-[#0B1318]/80 backdrop-blur-md border border-[#232F36]/80 rounded-xl p-4 flex flex-col justify-between hover:border-[#4A555B] transition-colors cursor-pointer">
                <span className="text-white text-sm font-medium leading-snug">
                  Managed Defense
                </span>
              </div>

              <div className="bg-[#0B1318]/80 backdrop-blur-md border border-[#232F36]/80 rounded-xl p-4 flex flex-col justify-between hover:border-[#4A555B] transition-colors cursor-pointer">
                <span className="text-white text-sm font-medium leading-snug">
                  Continuous Assurance
                </span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}