"use client";

import React, { useRef } from "react";
import { TOC_ITEMS } from "./tocItems";
import { scrollToSection } from "@/hooks/useActiveSection";

export default function TocMobile() {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  return (
    <section className="lg:hidden bg-[#f7f5f0] w-full">
      <div className="mx-auto max-w-[1440px] px-4 py-6">
        <details ref={detailsRef} className="bg-white border border-[rgba(18,59,76,0.1)] rounded-[12px] p-4 w-full">
          <summary className="flex items-center justify-between cursor-pointer list-none">
            <span className="font-hanken font-extrabold text-[#0a2029] text-[14px]">
              ON THIS PAGE
            </span>
            <span className="bg-[#f0ede6] flex items-start px-[10px] py-1 rounded-full">
              <span className="font-jetbrains font-bold text-[#5b6670] text-[10px]">
                TAP TO EXPAND
              </span>
            </span>
          </summary>
          <nav aria-label="On this page" className="flex flex-col gap-1 items-start mt-4 w-full">
            {TOC_ITEMS.map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (detailsRef.current) detailsRef.current.open = false;
                  scrollToSection(item.id);
                }}
                className="flex gap-2 items-center py-[6px] w-full"
              >
                {i === 0 ? (
                  <span className="bg-[#c44242] w-[3px] h-3 shrink-0" />
                ) : (
                  <span className="text-[#5b6670] text-[13px]" aria-hidden>•</span>
                )}
                <span
                  className={`font-manrope text-[13px] ${
                    i === 0 ? "font-bold text-[#c44242]" : "font-normal text-[#5b6670]"
                  }`}
                >
                  {item.label}
                </span>
              </a>
            ))}
          </nav>
        </details>
      </div>
    </section>
  );
}
