"use client";

import React, { useState } from "react";

export const GovernedSubmissionsSection: React.FC = () => {
  const [termName, setTermName] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (termName.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setTermName("");
        setSourceUrl("");
      }, 4000);
    }
  };

  return (
    <section className="w-full bg-[#F0EDE6] border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto">
        <div className="p-8 sm:p-10 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Column */}
          <div className="flex-1 space-y-4">
            <div className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase">
              GOVERNED SUBMISSIONS
            </div>
            <h2 className="text-slate-900 text-3xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
              Suggest a Term or Correction
            </h2>
            <p className="text-gray-500 text-base font-normal font-['Manrope'] leading-relaxed max-w-lg">
              Help us keep the Security &amp; Compliance Glossary precise. Submissions
              are reviewed by our internal security architects against standard
              regulatory registries.
            </p>
          </div>

          {/* Right Column Form */}
          <div className="w-full lg:max-w-[560px] flex-1">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-slate-900 text-xs font-bold font-['Manrope']">
                  Proposed Term / Acronym Name
                </label>
                <div className="p-3 bg-stone-100 rounded-md outline outline-1 outline-offset-[-1px] outline-cyan-950/10 focus-within:outline-red-500">
                  <input
                    type="text"
                    value={termName}
                    onChange={(e) => setTermName(e.target.value)}
                    placeholder="e.g. FedRAMP Rev 5 Core Rules"
                    required
                    className="w-full bg-transparent text-slate-900 placeholder:text-gray-500 text-sm font-normal font-['Manrope'] focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-slate-900 text-xs font-bold font-['Manrope']">
                  Authoritative Source URL Reference
                </label>
                <div className="p-3 bg-stone-100 rounded-md outline outline-1 outline-offset-[-1px] outline-cyan-950/10 focus-within:outline-red-500">
                  <input
                    type="url"
                    value={sourceUrl}
                    onChange={(e) => setSourceUrl(e.target.value)}
                    placeholder="https://csrc.nist.gov/publications/..."
                    required
                    className="w-full bg-transparent text-slate-900 placeholder:text-gray-500 text-sm font-normal font-['Manrope'] focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white text-sm font-bold font-['Manrope'] rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                {isSubmitted ? "Submitted for Review!" : "Submit for Review"}
              </button>

              {isSubmitted && (
                <p className="text-xs font-['JetBrains_Mono'] text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded border border-emerald-200">
                  ✔ Term suggestion received. Dispatched to registry review board.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
