import React from "react";

export default function AccountableDecisionsCTA() {
  return (
    <div className="bg-[#103848] text-white px-6 py-20 md:py-24 font-sans antialiased flex flex-col items-center justify-center text-center">
      <div className="w-full max-w-6xl space-y-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
          Designed for security teams that need accountable decisions.
        </h2>

        <p className="text-xs md:text-sm text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
          Discuss access governance, human oversight, audit evidence and
          integration needs with our team. We can explain the evaluation scope
          and provide current product documentation as appropriate.
        </p>

        <div className="pt-2">
          <button className="bg-transparent hover:bg-white/10 text-white text-xs md:text-sm font-semibold px-6 py-3 rounded-lg border border-white/30 transition-colors shadow-sm">
            Visit the Trust Center
          </button>
        </div>
      </div>
    </div>
  );
}
