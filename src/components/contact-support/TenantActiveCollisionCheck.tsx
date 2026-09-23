import React from "react";
import { AlertTriangle } from "lucide-react";

export default function TenantActiveCollisionCheck() {
  return (
    <div className="bg-[#F0EDE6] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            PREVENT TICKET PROLIFERATION
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[36px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            Tenant Active Collision Check
          </h1>
          <p className="text-[#4B5563] text-base leading-relaxed">
            We compare incoming narratives with open issues in your organization
            to prevent redundant case files.
          </p>
        </div>

        {/* Warning Banner Card */}
        <div className="bg-[#FEF3C7] border border-[#B453093D] rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="text-[#B45309] mt-0.5 shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#92400E] mb-1">
                Similar Case Active in Levelset Corp
              </h3>
              <p className="text-xs md:text-[13px] text-[#5B6670] leading-relaxed">
                An active case regarding &quot;Okta group telemetry sync
                delay&quot; was filed 2 hours ago by James H. Merging your
                context is highly recommended.
              </p>
            </div>
          </div>

          <div>
            <button className="bg-white hover:bg-[#FFFBEB] text-[#B45309] border border-[#B45309] text-xs font-bold px-5 py-3 rounded-xl transition-colors shadow-sm whitespace-nowrap">
              View Open Case
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
