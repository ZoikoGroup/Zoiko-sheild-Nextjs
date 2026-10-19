"use client"
import React from "react";
import { Square } from "lucide-react";

const features = [
  "Explore security detection and investigation.",
  "Review AI recommendations with human oversight.",
  "Understand controlled response workflows.",
  "See how evidence supports assurance and review.",
];

export default function SeeZoikoshieldInAction() {
  return (
    <div className="bg-[#FFFFFF] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Info & Checklist */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
              <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
              ENTERPRISE CYBERSECURITY PLATFORM
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-4">
              See ZoikoShield in action.
            </h1>
            <h2 className="text-lg md:text-xl font-bold text-[#111827] tracking-tight mb-4">
              From security signals to defensible decisions.
            </h2>
            <p className="text-[#4B5563] text-sm md:text-base leading-relaxed">
              See how ZoikoShield brings threat detection, investigation,
              governed AI assistance, controlled response, and verifiable
              security evidence into one enterprise workflow.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 pb-4 border-b border-[#E5E7EB] last:border-b-0"
              >
                <div className="text-[#C53030] shrink-0">
                  <Square className="w-4 h-4" />
                </div>
                <span className="text-xs md:text-sm font-medium text-[#111827]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Demo Form Card */}
        <div className="lg:col-span-6 bg-[#F2F6F7] rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB]">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#111827] tracking-tight mb-1">
              Request a tailored demo
            </h3>
            <p className="text-xs md:text-sm text-[#4B5563]">
              Tell us a little about your organization so we can focus on your
              security priorities.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            {/* First & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-[#374151] uppercase tracking-wider mb-1">
                  First name
                </label>
                <input
                  type="text"
                  className="w-full bg-white text-[#111827] text-xs md:text-sm px-3.5 py-2.5 rounded-lg border border-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#C53030] shadow-sm"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#374151] uppercase tracking-wider mb-1">
                  Last name
                </label>
                <input
                  type="text"
                  className="w-full bg-white text-[#111827] text-xs md:text-sm px-3.5 py-2.5 rounded-lg border border-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#C53030] shadow-sm"
                />
              </div>
            </div>

            {/* Work Email */}
            <div>
              <label className="block text-[11px] font-bold text-[#374151] uppercase tracking-wider mb-1">
                Work email
              </label>
              <input
                type="email"
                className="w-full bg-white text-[#111827] text-xs md:text-sm px-3.5 py-2.5 rounded-lg border border-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#C53030] shadow-sm"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-[11px] font-bold text-[#374151] uppercase tracking-wider mb-1">
                Company
              </label>
              <input
                type="text"
                className="w-full bg-white text-[#111827] text-xs md:text-sm px-3.5 py-2.5 rounded-lg border border-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#C53030] shadow-sm"
              />
            </div>

            {/* Country or Region */}
            <div>
              <label className="block text-[11px] font-bold text-[#374151] uppercase tracking-wider mb-1">
                Country or region
              </label>
              <select className="w-full bg-white text-[#111827] text-xs md:text-sm px-3.5 py-2.5 rounded-lg border border-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#C53030] shadow-sm">
                <option>Select a country or region</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Germany</option>
                <option>Canada</option>
                <option>India</option>
              </select>
            </div>

            {/* Add Details Toggle */}
            <div>
              <button
                type="button"
                className="text-xs font-bold text-[#C53030] hover:text-[#B91C1C] transition-colors"
              >
                + Add details (optional)
              </button>
            </div>

            {/* Warning Box */}
            <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-xl p-3.5 text-[11px] md:text-xs text-[#92400E] leading-relaxed">
              <span className="font-bold">Please do not include</span>{" "}
              passwords, access keys, personal records, or live incident details
              in this form.
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-2 pt-1">
              <input
                type="checkbox"
                id="updates"
                className="mt-0.5 rounded border-[#D1D5DB] text-[#C53030] focus:ring-[#C53030]"
              />
              <label
                htmlFor="updates"
                className="text-[11px] text-[#4B5563] leading-relaxed"
              >
                Send me occasional ZoikoShield product updates. This is optional
                and is not needed to process your request.
              </label>
            </div>

            {/* Privacy Disclaimer */}
            <p className="text-[10px] text-[#6B7280] leading-relaxed">
              We use the information you provide to respond to your demo
              request. See our{" "}
              <a
                href="#privacy"
                className="text-[#C53030] underline font-medium"
              >
                Privacy Notice
              </a>
              .
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#C53030] hover:bg-[#B91C1C] text-white text-xs md:text-sm font-bold py-3.5 rounded-xl transition-colors shadow-sm text-center"
            >
              Request My Demo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
