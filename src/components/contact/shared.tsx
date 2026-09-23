"use client";

import React from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";

export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const makeReference = (prefix: string) =>
  `${prefix}-${Date.now().toString(36).toUpperCase()}-${Math.random()
    .toString(36)
    .substring(2, 6)
    .toUpperCase()}`;

export const Eyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="inline-flex items-center gap-3">
    <div className="w-8 h-0.5 bg-red-500 shrink-0" />
    <span className="text-red-500 text-xs sm:text-sm font-bold font-jetbrains uppercase tracking-widest">
      {children}
    </span>
  </div>
);

export const inputClass =
  "w-full px-4 py-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-cyan-950/10 focus:outline-2 focus:outline-red-500 text-slate-900 placeholder:text-slate-400 text-sm font-normal font-manrope transition-[outline-color]";

export const labelClass = "block text-slate-900 text-sm font-semibold font-manrope";

interface FieldProps {
  label: string;
  htmlFor: string;
  optional?: boolean;
  children: React.ReactNode;
}

export const Field: React.FC<FieldProps> = ({ label, htmlFor, optional, children }) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between gap-2">
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
      </label>
      {optional && <span className="text-slate-400 text-xs font-manrope">Optional</span>}
    </div>
    {children}
  </div>
);

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
}

export const Select: React.FC<SelectProps> = ({ options, className = "", ...props }) => (
  <div className="relative">
    <select {...props} className={`${inputClass} appearance-none pr-10 cursor-pointer ${className}`}>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
  </div>
);

export const SuccessNotice: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    role="status"
    className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-start gap-2.5 text-emerald-800 text-xs font-medium font-jetbrains"
  >
    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-px" />
    <span>{children}</span>
  </div>
);
