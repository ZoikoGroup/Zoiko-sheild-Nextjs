import React from "react";
import SectionEyebrow from "./SectionEyebrow";

interface ControlRow {
  id: string;
  objective: string;
  owner: string;
  cycle: string;
  obligations: string;
}

const controls: ControlRow[] = [
  {
    id: "AC-1.1",
    objective: "MFA on Critical Identity Provider",
    owner: "Sarah Jenkins (SecOps)",
    cycle: "Daily (Auto)",
    obligations: "SOC 2 CC6.1, ISO 27001 A.9",
  },
  {
    id: "IA-3.2",
    objective: "Endpoint Agent Version Integrity",
    owner: "Markus R. (Platform)",
    cycle: "Continuous",
    obligations: "NIST SP 800-53 IA-3",
  },
  {
    id: "SI-2.1",
    objective: "Monthly Security Patch Review",
    owner: "Zoe Chen (GRC Lead)",
    cycle: "Monthly (Manual)",
    obligations: "HIPAA Security Rule 164.308",
  },
];

export default function ControlRegistrySection() {
  return (
    <section className="w-full bg-[#F7F5F0] px-6 py-20 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Header */}
        <div className="mb-10 flex flex-col items-start gap-4">
          <SectionEyebrow text="CONTROL REGISTRY" />
          <h2 className="font-hanken text-[28px] font-extrabold tracking-[-0.0222em] text-[#0A2029] sm:text-[36px]">
            Canonical control library & explicit ownership
          </h2>
          <p className="max-w-3xl font-manrope text-[16px] font-medium leading-[1.5em] text-[#5B6670]">
            Every control has an accountable corporate owner, explicitly mapped obligations, and structured delegation history.
          </p>
        </div>

        {/* Control Registry Table */}
        <div className="overflow-hidden rounded-[12px] border border-[rgba(18,59,76,0.1)] bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left border-collapse">
              <thead>
                <tr className="bg-[#F0EDE6] border-b border-[rgba(18,59,76,0.1)]">
                  <th className="py-4 px-6 font-jetbrains text-[12px] font-bold text-[#0A2029] w-[120px]">
                    ID
                  </th>
                  <th className="py-4 px-6 font-jetbrains text-[12px] font-bold text-[#0A2029] w-[280px]">
                    CONTROL OBJECTIVE
                  </th>
                  <th className="py-4 px-6 font-jetbrains text-[12px] font-bold text-[#0A2029] w-[180px]">
                    ACCOUNTABLE OWNER
                  </th>
                  <th className="py-4 px-6 font-jetbrains text-[12px] font-bold text-[#0A2029] w-[160px]">
                    REVIEW CYCLE
                  </th>
                  <th className="py-4 px-6 font-jetbrains text-[12px] font-bold text-[#0A2029]">
                    MAPPED OBLIGATIONS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(18,59,76,0.1)]">
                {controls.map((item, idx) => (
                  <tr
                    key={idx}
                    className="transition-colors hover:bg-[#F7F5F0]/60"
                  >
                    <td className="py-4 px-6 font-jetbrains text-[14px] font-bold text-[#C44242]">
                      {item.id}
                    </td>
                    <td className="py-4 px-6 font-manrope text-[14px] font-semibold text-[#0A2029]">
                      {item.objective}
                    </td>
                    <td className="py-4 px-6 font-manrope text-[14px] text-[#5B6670]">
                      {item.owner}
                    </td>
                    <td className="py-4 px-6 font-manrope text-[14px] text-[#5B6670]">
                      {item.cycle}
                    </td>
                    <td className="py-4 px-6 font-jetbrains text-[13px] text-[#5B6670]">
                      {item.obligations}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
