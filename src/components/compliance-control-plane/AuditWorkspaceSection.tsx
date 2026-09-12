import React from "react";
import {
  Aperture,
  Database,
  FileSearch,
  TestTube,
  AlertTriangle,
  CircleX,
  Package,
  History,
  type LucideIcon,
} from "lucide-react";

const areas: { icon: LucideIcon; title: string; status: string }[] = [
  { icon: Aperture, title: "Scope header", status: "Q3 access assurance · 42 controls" },
  { icon: Database, title: "Control inventory", status: "38 in review · 4 exceptions visible" },
  { icon: FileSearch, title: "Evidence requests", status: "17 fulfilled · 3 awaiting owner" },
  { icon: TestTube, title: "Tests / assessments", status: "12 results · 5 attributable reviews" },
  { icon: AlertTriangle, title: "Exceptions", status: "2 overdue · 2 active" },
  { icon: CircleX, title: "Notes / questions", status: "9 open questions" },
  { icon: Package, title: "Packages / exports", status: "Auditor package v3" },
  { icon: History, title: "History", status: "Complete change ledger" },
];

const mobileStatusItems: string[] = [
  "Scope header · In review",
  "Control inventory · 24 linked",
  "Evidence requests · 18 of 22",
  "Tests / assessments · 9 complete",
  "Exceptions · 3 open",
  "History · Fully attributable",
];

export function AuditWorkspaceSection() {
  return (
    <section id="audit-workspace" className="bg-[#f0ede6] w-full scroll-mt-24">
      {/* Mobile */}
      <div className="md:hidden flex flex-col gap-[28px] items-start px-[22px] py-[68px] w-full">
        <div className="flex flex-col gap-[12px] w-full">
          <div className="flex gap-[10px] items-center">
            <div className="w-[20px] h-[2px] bg-[#c44242] shrink-0" />
            <p className="font-jetbrains font-medium text-[12px] text-[#c44242] uppercase m-0">
              Audit workspace
            </p>
          </div>
          <h2 className="font-hanken font-extrabold leading-[1.08] text-[28px] text-[#0a2029] m-0">
            Review the whole assurance context in one governed workspace.
          </h2>
          <p className="font-manrope font-medium leading-[1.55] text-[16.5px] text-[#5b6670] m-0">
            Scope, requests, linked evidence, tests, assessments, exceptions, questions, exports and history stay inspectable.
          </p>
        </div>

        <div className="bg-white border border-[rgba(18,59,76,0.12)] flex flex-col gap-[16px] p-[20px] rounded-[18px] shadow-[0px_8px_28px_0px_rgba(11,37,48,0.08)] w-full">
          <p className="font-jetbrains font-normal text-[11px] text-[#c44242] m-0">
            AUDIT-WORKSPACE · AW-2026-031
          </p>
          <p className="font-hanken font-extrabold text-[20px] text-[#0a2029] m-0">
            Identity controls readiness review
          </p>
          <p className="font-manrope font-normal text-[14px] text-[#5b6670] m-0">
            Scope · Workforce identity, privileged access and joiner–mover–leaver controls
          </p>
          {mobileStatusItems.map((status) => (
            <div key={status} className="bg-[#f7f5f0] flex items-start p-[14px] rounded-[10px] w-full">
              <p className="font-manrope font-semibold text-[14px] text-[#0a2029] m-0 flex-1">{status}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop / tablet */}
      <div className="hidden md:flex md:flex-col gap-[32px] lg:gap-[42px] w-full mx-auto max-w-[1440px] px-8 lg:px-[120px] py-[56px] lg:py-[88px]">
        <div className="flex flex-col gap-[14px] max-w-[1172px]">
          <div className="flex gap-[10px] items-center">
            <div className="w-[20px] h-[2px] bg-[#c44242] shrink-0" />
            <p className="font-jetbrains font-medium text-[11px] text-[#c44242] uppercase m-0">
              Audit workspace
            </p>
          </div>
          <h2 className="font-hanken font-extrabold leading-[1.08] text-[30px] sm:text-[36px] lg:text-[40px] text-[#c44242] m-0">
            Review the whole assurance context in one governed workspace.
          </h2>
          <p className="font-manrope font-normal leading-[1.55] text-[16px] text-[#5b6670] m-0">
            Scope, requests, linked evidence, tests, assessments, exceptions, questions, exports and history stay inspectable without implying reviewer acceptance.
          </p>
        </div>

        <div className="bg-white border border-[rgba(18,59,76,0.12)] flex flex-col gap-[18px] p-[20px] sm:p-[28px] rounded-[20px] shadow-[0px_8px_28px_0px_rgba(11,37,48,0.08)] w-full">
          <div className="flex flex-col sm:flex-row gap-[10px] sm:gap-0 items-start sm:items-start justify-between w-full">
            <div className="flex flex-col gap-[6px]">
              <p className="font-jetbrains font-normal text-[10px] text-[#c44242] m-0">
                AUDIT-WORKSPACE · AW-2026-031
              </p>
              <p className="font-hanken font-extrabold text-[22px] sm:text-[26px] text-[#0a2029] m-0">
                Identity controls readiness review
              </p>
            </div>
            <div className="flex flex-col gap-[5px] items-start sm:items-end">
              <p className="font-manrope font-extrabold text-[12px] text-[#1f7a6c] m-0">
                WORKSPACE COMPLETE
              </p>
              <p className="font-manrope font-normal text-[11px] text-[#5b6670] m-0">
                Not reviewer acceptance
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px] w-full">
            {areas.map(({ icon: Icon, title, status }) => (
              <div
                key={title}
                className="bg-[#f7f5f0] border border-[rgba(18,59,76,0.12)] flex flex-col justify-between gap-[10px] h-[126px] p-[18px] rounded-[14px]"
              >
                <Icon className="text-[#c44242]" size={24} strokeWidth={1.5} />
                <p className="font-hanken font-extrabold text-[16px] text-[#0a2029] m-0">{title}</p>
                <p className="font-manrope font-normal text-[12px] text-[#5b6670] m-0">{status}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#fff3e8] flex flex-col p-[16px] rounded-[8px] w-full">
            <p className="font-manrope font-semibold text-[13px] text-[#0a2029] m-0">
              Workspace completion does not imply acceptance and carries no auditor endorsement implication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
