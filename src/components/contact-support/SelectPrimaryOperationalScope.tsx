import React from "react";

const scopes = [
  {
    title: "Access, MFA & Sign-In",
    description:
      "Locked directories, expired credentials, and MFA posture mismatches.",
    highlighted: false,
  },
  {
    title: "Identity & Endpoint",
    description:
      "CrowdStrike sensor gaps, Okta token synchronization, and Intune compliance.",
    highlighted: false,
  },
  {
    title: "Threats & Alerts",
    description:
      "Mitigation bypass alerts, suspicious process executions, and security flags.",
    highlighted: false,
  },
  {
    title: "Security Vulnerability",
    description:
      "Suspected compromises must be reported via pgp-encrypted vaults.",
    highlighted: true,
  },
  {
    title: "API & Live Webhooks",
    description:
      "Payload drops, endpoint parsing failures, or secret verification keys.",
    highlighted: false,
  },
  {
    title: "Cloud & Integrations",
    description:
      "Tenant-level connections, MS Graph API delays, and AWS permission loops.",
    highlighted: false,
  },
  {
    title: "Evidence & Reporting",
    description:
      "Cryptographic audit mismatch, compliance ledger failures, or report generation.",
    highlighted: false,
  },
  {
    title: "System Performance",
    description:
      "High telemetry latency, processing queues, or stale synchronization loops.",
    highlighted: false,
  },
];

export default function SelectPrimaryOperationalScope() {
  return (
    <div className="bg-[#F0EDE6] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            CATEGORIZE THREAT VECTOR
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            Select primary operational scope
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            Choosing the appropriate domain routes your telemetry payloads to
            dedicated specialists with domain authorization.
          </p>
        </div>

        {/* 4x2 Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {scopes.map((scope, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border flex flex-col justify-between transition-all cursor-pointer ${
                scope.highlighted
                  ? "bg-[#FDF2F2] border-[#F8D7DA]"
                  : "bg-white border-[#E5E7EB] hover:border-[#D1D5DB]"
              }`}
            >
              <div>
                <h3
                  className={`text-base font-bold tracking-tight mb-2 ${
                    scope.highlighted ? "text-[#C53030]" : "text-[#111827]"
                  }`}
                >
                  {scope.title}
                </h3>
                <p
                  className={`text-xs md:text-sm leading-relaxed ${
                    scope.highlighted ? "text-[#A94442]" : "text-[#4B5563]"
                  }`}
                >
                  {scope.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
