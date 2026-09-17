import React from "react";

// Data objects for the main description cards and blue context cards
const relationshipData = [
  {
    title: "Relationship and basis",
    subtitle: "Supported program alignment · conditional",
    description:
      "Basis must cite an approved mapping, evidence, assessment, or service-support record.",
  },
  {
    title: "Scope and exclusions",
    subtitle: "Defined scope pending",
    description:
      "Product, service, geography, customer responsibility, and exclusions must be explicit.",
  },
  {
    title: "Rights and ownership",
    subtitle: "Rights review required",
    description:
      "Owner: Content governance · Download and excerpt permissions pending.",
  },
];

const contextData = [
  {
    title: "What this means",
    description:
      "A reviewed relationship can help readers understand where a defined ZoikoShield capability may support work associated with an exact reference.",
  },
  {
    title: "What this does not mean",
    description:
      "No certification, equivalence, regulator acceptance, guaranteed outcome, customer status, or universal applicability.",
  },
  {
    title: "Mapping context",
    description:
      "Mappings express scoped relationships, not requirement equivalence. See the Compliance Control Plane for control-level context.",
  },
  {
    title: "Evidence context",
    description:
      "Approved evidence can show lineage and verification within stated completeness boundaries; it is not a compliance verdict.",
  },
];

export default function ControlledPlaceholder() {
  return (
    <div className="min-h-screen bg-[#F0EDE6] text-[#111827] p-6 md:p-12 font-sans antialiased flex justify-center">
      <div className="w-full max-w-6xl">
        {/* Header section */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="space-y-2">
            <p className="text-[#1F7A6C] text-xs font-medium uppercase tracking-wider">
              CONDITIONAL · RECORD · ANATOMY
            </p>
            <h1 className="text-5xl font-bold tracking-tight text-[#111827]">
              Controlled placeholder A
            </h1>
            <p className="text-[#6B7280] text-lg">
              Authority / publisher pending approval · Reference type pending ·
              Edition / version pending
            </p>
          </div>
          <div className="bg-[#FFF3D7] text-[#9A6318] text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase">
            UNDER REVIEW · REVIEW DATE PENDING
          </div>
        </div>

        {/* Description cards mapped dynamically */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {relationshipData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-[18px] shadow-[0_4px_6px_rgba(0,0,0,0.03)] border border-[#123B4C1F]"
            >
              <h3 className="text-xl font-semibold text-[#111827] mb-2">
                {item.title}
              </h3>
              <p className="text-[#B91C1C] font-medium text-sm mb-5">
                {item.subtitle}
              </p>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Context cards (blue) mapped dynamically */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {contextData.map((item, index) => (
            <div
              key={index}
              className="bg-[#123B4C] text-white p-6 rounded-[12px] shadow-[0_4px_6px_rgba(0,0,0,0.03)]"
            >
              <h4 className="text-lg font-semibold mb-3">{item.title}</h4>
              <p className="text-sm font-light leading-relaxed opacity-90">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer navigation (manual layout as requested) */}
        <div className="bg-white p-5 rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex items-center justify-between">
          <div className="text-sm font-medium text-[#111827]">
            Version history · Mapping record · Evidence package · Owner and
            review · Related routes
          </div>
          <a
            href="#"
            className="text-sm font-semibold text-[#B91C1C] flex items-center gap-1.5 hover:opacity-95"
          >
            Open approved references →
          </a>
        </div>
      </div>
    </div>
  );
}
