"use client";

import type { ReactNode } from "react";
import { ExternalLink, Loader2 } from "lucide-react";
import type { AnswerBlock, Option, RouteLink } from "@/lib/public-assistant/contract";
import { AssistantApiError } from "../api/client";

// Small shared primitives for the flows. Text from the API is always rendered
// as React text nodes: no HTML, images, or iframes from content (SafeMarkdown subset).

export function Blocks({ blocks }: { blocks: AnswerBlock[] }) {
  return (
    <div className="space-y-2 text-sm leading-relaxed">
      {blocks.map((b, i) =>
        b.type === "paragraph" ? (
          <p key={i}>{b.text}</p>
        ) : (
          <ul key={i} className="list-disc space-y-1 pl-5">
            {b.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        ),
      )}
    </div>
  );
}

export function FlowHeading({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="mb-3">
      <h3 className="text-base font-semibold">{title}</h3>
      {intro && <p className="mt-1 text-sm text-zoiko-dark/70 dark:text-gray-300">{intro}</p>}
    </div>
  );
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "ghost" }) {
  const styles = {
    primary: "bg-zoiko-primary text-white hover:bg-[#8f181c] disabled:bg-zoiko-primary/50",
    secondary: "border border-zoiko-border dark:border-white/10 bg-white dark:bg-[#111d28] text-zoiko-dark dark:text-gray-100 hover:bg-zoiko-beige dark:hover:bg-white/10 disabled:opacity-50",
    ghost: "text-zoiko-primary dark:text-[#ff8a8d] hover:bg-zoiko-primary/5 dark:hover:bg-white/5 disabled:opacity-50",
  }[variant];
  return (
    <button
      type="button"
      {...props}
      className={`inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-zoiko-primary focus-visible:ring-offset-1 ${styles} ${className}`}
    >
      {children}
    </button>
  );
}

export function SelectField({
  id,
  label,
  value,
  options,
  onChange,
  placeholder = "Choose…",
  error,
  required,
}: {
  id: string;
  label: string;
  value: string;
  options: Option[];
  onChange: (v: string) => void;
  placeholder?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-xs font-medium text-zoiko-dark/80 dark:text-gray-200">
        {label}
        {required && <span aria-hidden> *</span>}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-required={required}
        className="w-full rounded-lg border border-zoiko-border dark:border-white/10 bg-white dark:bg-[#111d28] px-2.5 py-2 text-sm focus:border-zoiko-primary focus:outline-none focus:ring-2 focus:ring-zoiko-primary/20 aria-[invalid=true]:border-red-600"
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.id} value={o.id}>
            {o.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-red-700 dark:text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}

export function Loading({ label = "Loading…" }: { label?: string }) {
  return (
    <p role="status" className="flex items-center gap-2 py-6 text-sm text-zoiko-dark/60 dark:text-gray-400">
      <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
      {label}
    </p>
  );
}

export function ErrorNote({ error, onRetry }: { error: unknown; onRetry?: () => void }) {
  const message = error instanceof AssistantApiError ? error.body.user_safe_message : "Something went wrong. Please try again.";
  return (
    <div role="alert" className="rounded-lg border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/40 p-3 text-sm text-red-800 dark:text-red-300">
      <p>{message}</p>
      {onRetry && (
        <button type="button" onClick={onRetry} className="mt-1 font-medium underline">
          Try again
        </button>
      )}
    </div>
  );
}

export function RouteButton({ link, children }: { link: RouteLink; children?: ReactNode }) {
  return (
    <a
      href={link.url}
      className="inline-flex items-center gap-1.5 rounded-lg border border-zoiko-border dark:border-white/10 bg-white dark:bg-[#111d28] px-3 py-2 text-sm font-medium text-zoiko-dark dark:text-gray-100 transition hover:bg-zoiko-beige dark:hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-zoiko-primary"
    >
      {children ?? link.label}
      <ExternalLink className="h-3.5 w-3.5 text-zoiko-dark/50 dark:text-gray-400" aria-hidden />
    </a>
  );
}

const TONES = {
  green: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 ring-emerald-200 dark:ring-emerald-800",
  amber: "bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 ring-amber-200 dark:ring-amber-800",
  gray: "bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 ring-gray-200 dark:ring-white/10",
  blue: "bg-sky-50 dark:bg-sky-950/40 text-sky-800 dark:text-sky-300 ring-sky-200 dark:ring-sky-800",
};

export function Tag({ tone, children }: { tone: keyof typeof TONES; children: ReactNode }) {
  return <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ring-1 ring-inset ${TONES[tone]}`}>{children}</span>;
}

export function MarketSelect({ value, options, onChange }: { value: string; options: Option[]; onChange: (v: string) => void }) {
  return <SelectField id="zs-market" label="Your market" value={value} options={options} onChange={(v) => onChange(v || "global")} placeholder="Choose a market" required />;
}
