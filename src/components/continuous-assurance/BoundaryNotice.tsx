import React from "react";

type Props = {
  children: React.ReactNode;
  /** Use on dark section backgrounds. */
  onDark?: boolean;
};

function ShieldIcon({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2.5 4.5 5.5v5.2c0 4.6 3.1 8.9 7.5 10.3 4.4-1.4 7.5-5.7 7.5-10.3V5.5L12 2.5Z" />
      <path d="m9.2 11.8 2 2 3.6-3.6" />
    </svg>
  );
}

export default function BoundaryNotice({ children, onDark = false }: Props) {
  return (
    <div
      className={`flex items-start gap-3.5 rounded-[10px] border p-4 sm:items-center sm:p-5 ${
        onDark
          ? "border-white/15 bg-white/[0.04]"
          : "border-[#C53B3B]/20 bg-[#FAEAEA]"
      }`}
    >
      <ShieldIcon
        className={`mt-0.5 size-5 shrink-0 sm:mt-0 sm:size-6 ${
          onDark ? "text-[#F0A3A3]" : "text-[#C53B3B]"
        }`}
      />
      <p
        className={`font-manrope text-sm font-bold leading-6 sm:text-base ${
          onDark ? "text-white" : "text-[#0B2530]"
        }`}
      >
        {children}
      </p>
    </div>
  );
}
