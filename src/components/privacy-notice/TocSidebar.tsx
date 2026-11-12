"use client";

import React from "react";
import { TOC_ITEMS } from "./tocItems";
import { scrollToSection, useActiveSection } from "@/hooks/useActiveSection";

const TOC_IDS = TOC_ITEMS.map((t) => t.id);

export default function TocSidebar() {
  const [active, setActive] = useActiveSection(TOC_IDS);

  return (
    <aside className="hidden lg:flex flex-col gap-6 items-start w-[280px] shrink-0 sticky top-28 self-start">
      <nav
        aria-label="Table of contents"
        className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-2 items-start p-4 rounded-[12px] w-full"
      >
        <p className="font-hanken font-extrabold text-[#0a2029] text-[15px] m-0">
          TABLE OF CONTENTS
        </p>
        {TOC_ITEMS.map((item) => {
          const isActive = item.id === active;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={isActive ? "location" : undefined}
              onClick={(e) => {
                e.preventDefault();
                setActive(item.id);
                scrollToSection(item.id);
              }}
              className={`flex gap-2 items-center px-3 py-2 rounded-[6px] w-full transition-colors ${
                isActive ? "bg-[#e9e5dc]" : "hover:bg-[#f0ede6]"
              }`}
            >
              {isActive && <span className="bg-[#c44242] h-4 w-[3px] shrink-0" />}
              <span
                className={`font-manrope text-[13px] truncate ${
                  isActive ? "font-bold text-[#c44242]" : "font-medium text-[#5b6670]"
                }`}
              >
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>

      <div className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-3 items-start p-4 rounded-[12px] w-full">
        <p className="font-hanken font-extrabold text-[#0a2029] text-[13px] m-0">
          JURISDICTIONAL CONTEXT
        </p>
        <div className="flex gap-2 items-center w-full">
          <div className="bg-[#1f7a6c] rounded-full size-2 shrink-0" />
          <p className="font-manrope font-normal text-[#5b6670] text-[12px] m-0">
            Rights Service Active
          </p>
        </div>
        <div className="flex gap-2 items-center w-full">
          <div className="bg-[#4e668a] rounded-full size-2 shrink-0" />
          <p className="font-manrope font-normal text-[#5b6670] text-[12px] m-0">
            EU-US DPF Status: Active
          </p>
        </div>
        <div className="flex gap-2 items-center w-full">
          <div className="bg-[#b45309] rounded-full size-2 shrink-0" />
          <p className="font-manrope font-normal text-[#5b6670] text-[12px] m-0">
            Locale: United States (EN)
          </p>
        </div>
      </div>
    </aside>
  );
}
