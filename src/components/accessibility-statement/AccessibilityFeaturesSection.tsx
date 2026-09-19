"use client";

import React from "react";
import { motion } from "framer-motion";

function Icon({ name }: { name: string }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "#1f7a6c", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "keyboard":
      return (
        <svg {...common} aria-hidden>
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M6 14h12" />
        </svg>
      );
    case "file-text":
      return (
        <svg {...common} aria-hidden>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M8 13h8M8 17h8M8 9h2" />
        </svg>
      );
    case "alert-circle":
      return (
        <svg {...common} aria-hidden>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4M12 16h.01" />
        </svg>
      );
    case "eye":
      return (
        <svg {...common} aria-hidden>
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "maximize":
      return (
        <svg {...common} aria-hidden>
          <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3" />
        </svg>
      );
    case "image":
      return (
        <svg {...common} aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      );
    case "columns":
      return (
        <svg {...common} aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M12 3v18" />
        </svg>
      );
    case "zap-off":
      return (
        <svg {...common} aria-hidden>
          <path d="M12.4 2 4 14h6l-1 8 8.4-12H11l1.4-8Z" />
          <path d="M2 2l20 20" />
        </svg>
      );
    default:
      return null;
  }
}

const desktopFeatures = [
  { icon: "keyboard", title: "Full Keyboard Control", desc: "All interactions are fully keyboard operable with visible focus rings." },
  { icon: "file-text", title: "Semantic Navigation", desc: "Consistent heading hierarchies and screen reader landmarks." },
  { icon: "alert-circle", title: "Robust Forms & Errors", desc: "Detailed validation and error announcements linked with aria-describedby." },
  { icon: "eye", title: "Contrast / Non-Color", desc: "All system states convey meaning via text or icons, not color alone." },
  { icon: "maximize", title: "Resize & Reflow", desc: "Fluid grid structures that reflow to a single column at 400% zoom." },
  { icon: "image", title: "Images & Icons", desc: "All diagnostic vectors and images carry semantic fallback labels." },
  { icon: "columns", title: "Accessible Data Tables", desc: "Column and row headers are marked up semantically for screen readers." },
  { icon: "zap-off", title: "Reduced Motion", desc: "The UI honors system preferences for reduced animations." },
];

const mobileFeatures = [
  { icon: "keyboard", title: "Full Keyboard Control", desc: "All interactions are fully keyboard operable with visible focus rings." },
  { icon: "file-text", title: "Semantic Navigation", desc: "Consistent heading hierarchies and screen reader landmarks." },
  { icon: "alert-circle", title: "Robust Forms & Errors", desc: "Detailed validation and error announcements linked with aria-describedby." },
  { icon: "eye", title: "Contrast / Non-Color", desc: "All system states convey meaning via text or icons, not color alone." },
  { icon: "maximize", title: "Resize & Reflow", desc: "Fluid grid structures that reflow to a single column at 400% zoom." },
  { icon: "image", title: "Images & Icons", desc: "All diagnostic vectors and images carry semantic fallback labels." },
];

export default function AccessibilityFeaturesSection() {
  return (
    <section className="bg-[#f7f5f0] border-y border-[rgba(18,59,76,0.1)] w-full">
      <div className="flex flex-col gap-6 lg:gap-10 mx-auto max-w-[1440px] px-4 py-8 lg:px-[108px] lg:py-[60px]">
        <div className="flex flex-col gap-3 lg:gap-4 items-start w-full">
          <div className="flex gap-2 lg:gap-3 items-center w-full">
            <div className="bg-[#c44242] h-[2px] w-6 shrink-0" />
            <p className="font-jetbrains font-bold text-[11px] lg:text-[13px] text-[#c44242] tracking-[1px] lg:tracking-[1.5px] uppercase m-0">
              EVALUATED FUNCTIONALITY
            </p>
          </div>
          <h2 className="font-hanken font-extrabold text-[28px] lg:text-[28px] text-[#0a2029] tracking-[-0.5px] m-0 w-full">
            Active Accessibility Features
          </h2>
          <p className="font-manrope font-medium leading-[20px] lg:leading-[23px] text-[13px] lg:text-[15px] text-[#5b6670] m-0 w-full">
            Each public claim of accessibility must be evidence-backed.
            Verified features currently supported on Zoiko Shield:
          </p>
        </div>

        <div className="hidden lg:grid grid-cols-4 gap-5 w-full">
          {desktopFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: (i % 4) * 0.06 }}
              className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-3 items-start p-5 rounded-[12px]"
            >
              <Icon name={f.icon} />
              <p className="font-hanken font-extrabold text-[#0a2029] text-[16px] m-0">{f.title}</p>
              <p className="font-manrope font-normal text-[#5b6670] text-[13.5px] m-0">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="lg:hidden grid grid-cols-1 gap-4 w-full">
          {mobileFeatures.map((f) => (
            <div
              key={f.title}
              className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-3 items-start p-5 rounded-[12px]"
            >
              <div className="flex gap-3 items-center">
                <Icon name={f.icon} />
                <p className="font-hanken font-extrabold text-[#0a2029] text-[15px] m-0">{f.title}</p>
              </div>
              <p className="font-manrope font-normal text-[#5b6670] text-[13px] m-0">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
