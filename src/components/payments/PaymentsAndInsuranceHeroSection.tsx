"use client";

import React from "react";

export default function PaymentsAndInsuranceHeroSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-6 text-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[2px] bg-[#E04F2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase">
                PAYMENTS & INSURANCE
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-[46px] font-bold text-[#0F172A] tracking-tight sm:leading-[1.1] mb-6">
              Protect high-assurance payment and insurance operations{" "}
              <span className="text-[#E04F2E]">
                with evidence and accountable control.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-8">
              Connect payment-system integrity, insurance operating
              dependencies, cyber risk, incident readiness and assurance &mdash;
              without hiding source truth, limitations or human decision
              authority.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#demo"
                className="py-3 px-6 rounded-[8px] bg-[#E04F2E] hover:bg-[#C94222] text-white font-bold text-xs transition-colors shadow-sm inline-flex items-center"
              >
                Book a Demo
              </a>

              <a
                href="#detection-response"
                className="py-3 px-6 rounded-[8px] hover:bg-[#E2E0D8] border border-[#CBD5E1] text-[#0F172A] font-bold text-xs transition-colors inline-flex items-center"
              >
                Explore Detection & Response
              </a>
            </div>
          </div>

          {/* Right Column: Image Display */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden">
              <div className="aspect-[3/4] relative flex items-center justify-center p-4">
                <img
                  src="/images/payments/hero.png"
                  alt="Payments and Insurance Operations Graphic"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
