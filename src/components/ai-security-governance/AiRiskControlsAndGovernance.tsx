import React from "react";
import {
  FileText,
  Shield,
  Search,
  AlertCircle,
  AlertTriangle,
  RefreshCw,
  Lock,
  Globe,
} from "lucide-react";

const governanceObjects = [
  {
    number: "01",
    title: "AI risk record",
    description:
      "Governed risk context, owner and use-case scope. No invented risk level, maturity band or opaque score.",
    icon: FileText,
  },
  {
    number: "02",
    title: "AI control",
    description:
      "Applicable control, owner, implementation state and linked evidence. No threshold or pass/fail score.",
    icon: Shield,
  },
  {
    number: "03",
    title: "Evaluation",
    description:
      "Governed method, scope, result and review context. No unsupported benchmark, accuracy band or safety score.",
    icon: Search,
  },
  {
    number: "04",
    title: "Exception",
    description:
      "Approved scope, owner, conditions, validity period and exception history. Time-bounded and authority-linked.",
    icon: AlertCircle,
  },
  {
    number: "05",
    title: "AI incident",
    description:
      "Attributable incident record with governed follow-up actions and linked authority. No speculative root cause.",
    icon: AlertTriangle,
  },
  {
    number: "06",
    title: "Change record",
    description:
      "Model, provider, prompt, tool, policy or use-case change with impact assessment and re-evaluation requirement.",
    icon: RefreshCw,
  },
  {
    number: "07",
    title: "Decision-right policy",
    description:
      "Current class rules (advisory / review / approve / prohibited), effective version and named authority.",
    icon: Lock,
  },
  {
    number: "08",
    title: "Public disclosure reference",
    description:
      "Current, authority-approved trust or privacy disclosure. No provider badge wall or borrowed assurance.",
    icon: Globe,
  },
];

export default function AiRiskControlsAndGovernance() {
  return (
    <div className="bg-[#F7F5F0] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            AI-RISK CONTROLS AND GOVERNANCE
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            Compact governance objects, not opaque scores.
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            Versioned records keep risk, controls, evaluations, exceptions,
            incidents and change visible without invented risk levels, maturity
            scores, traffic lights, thresholds, accuracy bands or benchmarks.
          </p>
        </div>

        {/* 8 Cards Grid (2 rows x 4 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {governanceObjects.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[#C53030] text-xs font-bold tracking-wider">
                      {item.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#FDF2F2] flex items-center justify-center text-[#C53030]">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-[#111827] tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#F8EBEB] border border-[#F4DCDD] rounded-2xl p-5">
          <p className="text-xs md:text-sm font-semibold text-[#111827] leading-relaxed">
            No invented risk levels, maturity/safety scores, traffic-light
            thresholds, accuracy bands or benchmarks. Objects stay versioned,
            authority-linked and evidence-connected.
          </p>
        </div>
      </div>
    </div>
  );
}
