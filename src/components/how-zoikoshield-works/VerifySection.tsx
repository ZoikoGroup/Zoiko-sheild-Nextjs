import React from "react";
import { ShieldHalf, ShieldCheck, FileText, Activity } from "lucide-react";

export function VerifySection() {
  return (
    <section className="bg-[#f7f5f0] w-full py-[68px] lg:py-[88px] relative border-b border-[#e1ddd8]">
      <div className="w-full mx-auto px-[22px] lg:px-[120px] flex flex-col gap-[22px] lg:gap-[40px] items-start">
        
        {/* Top Area: Heading and Properties */}
        <div className="flex flex-col lg:flex-row gap-[22px] lg:gap-[80px] items-start w-full">
          
          {/* Left Text */}
          <div className="flex flex-col gap-[22px] lg:gap-[18px] flex-1">
            <div className="flex items-center gap-[10px] lg:gap-[12px]">
              <div className="w-[20px] h-[2px] bg-[#c44242] shrink-0" />
              <p className="font-jetbrains font-medium text-[11px] text-[#c44242] uppercase leading-[normal] mb-0">
                07 — Verify
              </p>
            </div>
            
            <h2 className="font-hanken font-[800] leading-[1.08] text-[28px] lg:text-[40px] text-[#0a2029] m-0">
              Current proof. Independently reviewable.
            </h2>
            
            <p className="font-manrope font-[500] text-[16px] leading-[1.55] mb-0 text-[#5b6670]">
              Verification exposes the subject, scope, method, source authority, current status, result and limitations—without stretching proof beyond what the evidence supports.
            </p>
          </div>

          {/* Right Properties List */}
          <div className="flex-1 bg-white border border-[#123b4c]/12 rounded-[14px] lg:rounded-[20px] p-[20px] lg:p-[26px] shadow-[0px_8px_28px_0px_rgba(11,37,48,0.08)] w-full mt-4 lg:mt-0">
            <div className="flex flex-col gap-[8px]">
              {[
                ["verification_subject", "verified value"],
                ["scope", "verified value"],
                ["method", "verified value"],
                ["source/authority", "verified value"],
                ["current status", "verified value"],
                ["result", "verified value"],
                ["limitations", "verified value"]
              ].map(([k, v], i) => (
                <div key={i} className="flex justify-between items-center px-[12px] lg:px-[14px] py-[11px] lg:py-[10px] bg-[#f7f5f0] border border-[#123b4c]/12 rounded-[8px] w-full">
                  <span className="font-manrope lg:font-jetbrains text-[13px] lg:text-[12px] text-[#5b6670] lg:text-[#123b4c]">{k}</span>
                  <span className="font-jetbrains lg:font-manrope font-normal lg:font-[500] text-[10px] lg:text-[12px] text-[#1f7a6c] lg:text-[#5b6670]">{v}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>

        {/* Warning Box */}
        <div className="w-full bg-[#f8e8e5] p-[20px] lg:p-[22px] rounded-[14px] flex items-start gap-[14px] lg:gap-[18px]">
           <ShieldHalf className="w-6 h-6 shrink-0 text-[#0a2029]" strokeWidth={1.5} />
           <p className="font-hanken font-[800] text-[#0a2029] text-[16px] lg:text-[18px] leading-[normal] m-0">
             Verification is scoped proof, not a guarantee of compliance or security outcomes.
           </p>
        </div>
        
        {/* Verification Routes (Buttons) */}
        <div className="w-full flex flex-col lg:grid lg:grid-cols-3 gap-[12px] lg:gap-[14px]">
          <div className="bg-white border border-[#123b4c]/12 rounded-[10px] lg:rounded-[14px] p-[16px] lg:p-[18px] flex items-center gap-[12px] cursor-pointer hover:border-[#123b4c]/30 transition-colors">
            <ShieldCheck className="w-5 h-5 lg:w-6 lg:h-6 shrink-0 text-[#123b4c]" strokeWidth={1.5} />
            <span className="font-manrope font-[800] text-[#123b4c] text-[14px]">Trust Center &rarr;</span>
          </div>
          <div className="bg-white border border-[#123b4c]/12 rounded-[10px] lg:rounded-[14px] p-[16px] lg:p-[18px] flex items-center gap-[12px] cursor-pointer hover:border-[#123b4c]/30 transition-colors">
            <FileText className="w-5 h-5 lg:w-6 lg:h-6 shrink-0 text-[#123b4c]" strokeWidth={1.5} />
            <span className="font-manrope font-[800] text-[#123b4c] text-[14px]">Documentation &rarr;</span>
          </div>
          <div className="bg-white border border-[#123b4c]/12 rounded-[10px] lg:rounded-[14px] p-[16px] lg:p-[18px] flex items-center gap-[12px] cursor-pointer hover:border-[#123b4c]/30 transition-colors">
            <Activity className="w-5 h-5 lg:w-6 lg:h-6 shrink-0 text-[#123b4c]" strokeWidth={1.5} />
            <span className="font-manrope font-[800] text-[#123b4c] text-[14px]">System Status &rarr;</span>
          </div>
        </div>
        
        {/* Bottom Link */}
        <div className="mt-2">
          <span className="font-manrope font-[800] text-[#c44242] lg:text-[#e0402f] text-[14px] cursor-pointer hover:underline">
            Verify Evidence &rarr;&nbsp;&nbsp;/&nbsp;&nbsp;Trust Center &rarr;
          </span>
        </div>

      </div>
    </section>
  );
}
