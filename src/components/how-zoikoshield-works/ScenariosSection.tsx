import React from "react";

export function ScenariosSection() {
  const rows = [
    { title: "Security investigation", items: ["SIEM + EDR", "Threat chain", "Analyst review", "Case ledger", "Investigation proof"] },
    { title: "Control assurance", items: ["Control sources", "Control context", "Owner attests", "Evidence package", "Assurance view"] },
    { title: "Governed response", items: ["SOAR + endpoint", "Incident scope", "Approval gate", "Action history", "Response proof"] },
    { title: "AI-assisted investigation", items: ["Approved telemetry", "Cited hypotheses", "Human override", "Prompt lineage", "Review trail"] },
    { title: "Executive risk view", items: ["Risk systems", "Portfolio context", "Decision rights", "Board record", "Scoped dashboard"] },
  ];

  return (
    <section className="bg-[#f0ede6] w-full py-[68px] lg:py-[88px] relative border-b border-[#e1ddd8]">
      <div className="w-full mx-auto px-[22px] lg:px-[120px] flex flex-col gap-[22px] lg:gap-[36px] items-start">
        
        {/* Top Header Text */}
        <div className="flex flex-col gap-[22px] lg:gap-[14px] items-start w-full">
          <div className="flex items-center gap-[10px] lg:gap-[12px]">
            <div className="w-[20px] h-[2px] bg-[#c44242] shrink-0" />
            <p className="font-jetbrains font-medium text-[11px] text-[#c44242] tracking-[1.76px] uppercase leading-[normal] mb-0">
              08 — End-to-end scenarios
            </p>
          </div>

          <h2 className="font-hanken font-[800] leading-[1.08] text-[28px] lg:text-[40px] text-[#0a2029] m-0 w-full">
            Five steps, combined for real operating pathways.
          </h2>

          <p className="font-manrope font-[500] text-[16px] leading-[1.55] mb-0 text-[#5b6670] max-w-full lg:max-w-[800px]">
            Each approved pathway carries context, authority and evidence from first connection through independent verification.
          </p>
        </div>

        {/* Mobile Cards (Hidden on Desktop) */}
        <div className="w-full flex flex-col gap-[16px] lg:hidden">
          {rows.map((row, i) => (
            <div key={i} className="bg-white border border-[#123b4c]/12 rounded-[14px] p-[20px] shadow-[0px_8px_28px_0px_rgba(11,37,48,0.08)] flex flex-col gap-[16px]">
              <h3 className="font-hanken font-[800] text-[18px] text-[#0a2029] m-0">{row.title}</h3>
              <div className="flex flex-col gap-[8px]">
                {["Connect", "Correlate", "Govern", "Preserve", "Verify"].map((stepName, j) => (
                  <div key={j} className="flex justify-between items-center py-[10px] border-b border-[#123b4c]/12 last:border-0">
                    <span className="font-jetbrains text-[12px] text-[#123b4c] uppercase">{stepName}</span>
                    <span className="font-manrope text-[12px] text-[#5b6670]">{row.items[j]}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table (Hidden on Mobile) */}
        <div className="w-full hidden lg:flex flex-col border border-[#123b4c]/12 rounded-[20px] overflow-hidden shadow-[0px_8px_28px_0px_rgba(11,37,48,0.08)] bg-white overflow-x-auto">
          <div className="min-w-[800px] flex flex-col w-full">
            {/* Table Header */}
            <div className="bg-[#123b4c] flex w-full p-[18px]">
              {["Scenario", "Connect", "Correlate", "Govern", "Preserve", "Verify"].map((header, idx) => (
                <p key={idx} className="flex-1 font-jetbrains font-normal text-[10px] text-white uppercase m-0 px-2 first:px-0">
                  {header}
                </p>
              ))}
            </div>

            {/* Table Rows */}
            {rows.map((row, i) => (
              <div key={i} className={`flex w-full p-[18px] border-b border-[#123b4c]/12 last:border-b-0 ${i % 2 === 0 ? "bg-white" : "bg-[#f7f5f0]"}`}>
                <p className="flex-1 font-hanken font-[800] text-[13px] text-[#0a2029] m-0 px-2 first:px-0">
                  {row.title}
                </p>
                {row.items.map((item, j) => (
                  <p key={j} className="flex-1 font-manrope font-[500] text-[13px] text-[#5b6670] m-0 px-2">
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
