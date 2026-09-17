import React from "react";
import Image from "next/image";

const approvalRows = [
  { left: "Approval required", right: "GATED / REVALIDATE" },
  { left: "Approved", right: "ELIGIBLE AUTHORITY", highlightRight: true },
  { left: "Conditional approval", right: "GATED / REVALIDATE" },
  { left: "Rejected", right: "GATED / REVALIDATE" },
  { left: "Expired", right: "GATED / REVALIDATE" },
  { left: "Revoked", right: "GATED / REVALIDATE" },
  { left: "Material change", right: "GATED / REVALIDATE" },
];

export default function ApprovalRequiredSection() {
  return (
    <div className="relative text-white px-6 py-20 md:py-28 md:px-12 font-sans antialiased flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <Image
          src="/images/decision/2.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Darkness / Dimming Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0B2732F7] via-[#0B2732E0] to-[#0B2732B8]" />

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Side: Title & Description */}
        <div className="lg:col-span-5 space-y-4">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            03 · APPROVAL-REQUIRED
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-white leading-tight">
            Explicit approval before consequential use.
          </h1>
          <p className="text-[#9CA3AF] text-base leading-relaxed">
            No downstream use or execution before explicit authorized approval.
            Conditions remain visible; stale approval cannot be reused.
          </p>

          {/* Red Alert Card */}
          <div className="bg-[#D9534F]/90 border border-[#E53E3E] rounded-2xl p-5 shadow-lg mt-6">
            <h3 className="text-xs font-bold tracking-wider text-white uppercase mb-1">
              NO SELF-APPROVAL
            </h3>
            <p className="text-xs text-white/90 leading-relaxed">
              AI cannot approve itself, pressure the approver or silently retry.
            </p>
          </div>
        </div>

        {/* Right Side: Status Rows */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          {approvalRows.map((row, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF0D] border border-[#FFFFFF24] rounded-xl px-6 py-4 flex items-center justify-between text-sm shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
            >
              <span className="font-semibold text-white">{row.left}</span>
              <span
                className={`text-[10px] font-bold tracking-widest ${row.highlightRight ? "text-[#5FE3C5]" : "text-[#FFFFFF80]"}`}
              >
                {row.right}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
