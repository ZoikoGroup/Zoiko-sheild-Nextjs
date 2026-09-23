import React from "react";

export default function NeverMissAStateChange() {
  return (
    <div className="bg-[#FAF5F0] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Dark Banner Card */}
        <div className="bg-[#0A2440] rounded-3xl p-8 md:p-12 shadow-[0_4px_25px_rgba(0,0,0,0.08)] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 text-white">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-[28px] font-bold tracking-tight mb-2">
              Never Miss a State Change
            </h2>
            <p className="text-xs md:text-sm text-[#94A3B8] leading-relaxed">
              Configure component-specific notifications via email, webhooks, or
              RSS to get immediate telemetry updates direct from our state
              registry.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <input
              type="email"
              placeholder="Enter email address"
              className="bg-white text-[#111827] placeholder-[#9CA3AF] text-xs md:text-sm px-4 py-3.5 rounded-xl border border-transparent focus:outline-none focus:ring-2 focus:ring-[#C53030] w-full sm:w-72 shadow-sm"
            />
            <button className="bg-[#C53030] hover:bg-[#B91C1C] text-white text-xs md:text-sm font-bold px-6 py-3.5 rounded-xl transition-colors shadow-sm whitespace-nowrap w-full sm:w-auto text-center">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
