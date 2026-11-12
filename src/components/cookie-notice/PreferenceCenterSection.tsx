"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  DEFAULT_CHOICES,
  POLICY_VERSION,
  describeConsent,
  useCookieConsent,
  type ConsentChoices,
} from "./useCookieConsent";

function Toggle({
  on,
  onChange,
  label,
}: {
  on: boolean;
  onChange: (next: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      onClick={() => onChange(!on)}
      className={`h-5 w-10 rounded-full flex items-center px-[2px] shrink-0 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f7a6c] ${
        on ? "bg-[#1f7a6c] justify-end" : "bg-[rgba(18,59,76,0.15)] justify-start"
      }`}
    >
      <span className="size-[16px] rounded-full bg-white" />
    </button>
  );
}

function StateLabel({ on }: { on: boolean }) {
  return (
    <p
      className={`font-sans font-bold text-[12px] m-0 whitespace-nowrap ${
        on ? "text-[#1f7a6c]" : "text-[#5b6670]"
      }`}
    >
      {on ? "Enabled" : "Disabled"}
    </p>
  );
}

export default function PreferenceCenterSection() {
  const { consent, save } = useCookieConsent();
  const [draft, setDraft] = useState<ConsentChoices>(DEFAULT_CHOICES);
  const [notice, setNotice] = useState<string | null>(null);

  // Keep the draft in step with the saved choice (including saves made from the banner).
  useEffect(() => {
    setDraft(consent ? { analytics: consent.analytics, support: consent.support } : DEFAULT_CHOICES);
  }, [consent]);

  useEffect(() => {
    if (!notice) return;
    const t = setTimeout(() => setNotice(null), 4000);
    return () => clearTimeout(t);
  }, [notice]);

  const commit = (choices: ConsentChoices, message: string) => {
    save(choices);
    setNotice(message);
  };

  const discard = () => {
    setDraft(consent ? { analytics: consent.analytics, support: consent.support } : DEFAULT_CHOICES);
    setNotice("Unsaved changes discarded.");
  };

  const isDirty =
    draft.analytics !== (consent?.analytics ?? DEFAULT_CHOICES.analytics) ||
    draft.support !== (consent?.support ?? DEFAULT_CHOICES.support);

  return (
    <section id="preference-center" className="scroll-mt-24 bg-[#f7f5f0] w-full">
      <div className="flex flex-col gap-6 lg:gap-8 mx-auto max-w-[1440px] px-4 py-6 lg:px-[108px] lg:py-[60px]">
        <div className="flex flex-col gap-2 lg:gap-3 items-start">
          <h2 className="font-hanken lg:font-sans font-extrabold text-[20px] lg:text-[28px] text-[#0a2029] m-0">
            Preference Center
            <span className="hidden lg:inline"> &amp; Granular Controls</span>
          </h2>
          <p className="font-manrope lg:font-sans font-normal text-[13px] lg:text-[14px] text-[#5b6670] m-0">
            <span className="lg:hidden">
              Configure precise functional states with active status
              indicators.
            </span>
            <span className="hidden lg:inline">
              Configure precise functional states without coercive
              pre-selection.
            </span>
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-5 lg:gap-6 items-center max-w-[1000px] p-5 lg:p-[32px] rounded-[16px] w-full"
        >
          {/* Header row */}
          <div className="flex flex-col lg:flex-row gap-3 items-start lg:items-center justify-between w-full">
            <div className="hidden lg:flex flex-col gap-1 items-start">
              <p className="font-sans font-extrabold text-[#0a2029] text-[18px] m-0">
                Consent Preference Dashboard
              </p>
              <p className="font-sans font-normal text-[#5b6670] text-[13px] m-0">
                Current policy version: {POLICY_VERSION} (No account required)
              </p>
            </div>
            <div className="flex gap-2 items-start w-full lg:w-auto">
              <button
                type="button"
                onClick={() => commit({ analytics: false, support: false }, "Saved: essential only.")}
                className="flex-1 lg:flex-none border border-[#0a2029] hover:bg-[#0a20290d] transition-colors flex items-center justify-center px-4 py-2 rounded-[6px]"
              >
                <span className="font-sans font-bold text-[#0a2029] text-[12px]">Reject All Optional</span>
              </button>
              <button
                type="button"
                onClick={() => commit({ analytics: true, support: true }, "Saved: all optional accepted.")}
                className="flex-1 lg:flex-none bg-[#c44242] hover:bg-[#b23636] transition-colors flex items-center justify-center px-4 py-2 rounded-[6px]"
              >
                <span className="font-sans font-bold text-white text-[12px]">Accept All Optional</span>
              </button>
            </div>
          </div>
          <div className="bg-[rgba(18,59,76,0.1)] h-px w-full" />

          <div className="flex flex-col gap-3 lg:gap-4 items-start w-full">
            <div className="bg-[#f0ede6] flex items-center justify-between gap-3 p-3 lg:p-[16px] rounded-[8px] w-full">
              <div className="flex flex-col gap-1 items-start max-w-[600px]">
                <p className="font-hanken lg:font-sans font-extrabold text-[#0a2029] text-[15px] m-0">
                  <span className="lg:hidden">Essential Security</span>
                  <span className="hidden lg:inline">Essential / Security Technologies</span>
                </p>
                <p className="font-manrope lg:font-sans font-normal text-[#5b6670] text-[13px] m-0">
                  <span className="lg:hidden">
                    Required for workspace routing and exploit protection.
                  </span>
                  <span className="hidden lg:inline">
                    Required for secure sessions, cross-site request
                    protection, and system load-balancing.
                  </span>
                </p>
              </div>
              <div className="bg-[#e4f0ec] flex items-start px-3 py-1 rounded-full shrink-0">
                <p className="font-manrope lg:font-sans font-bold text-[#1f7a6c] text-[11px] whitespace-nowrap m-0">
                  Always Active
                </p>
              </div>
            </div>

            <div className="border border-[rgba(18,59,76,0.1)] flex items-center justify-between gap-3 p-3 lg:p-[16px] rounded-[8px] w-full">
              <div className="flex flex-col gap-1 items-start max-w-[600px]">
                <p className="font-hanken lg:font-sans font-extrabold text-[#0a2029] text-[15px] m-0">
                  <span className="lg:hidden">Analytics &amp; Metrics</span>
                  <span className="hidden lg:inline">Analytics &amp; Performance Metrics</span>
                </p>
                <p className="font-manrope lg:font-sans font-normal text-[#5b6670] text-[13px] m-0">
                  <span className="lg:hidden">
                    Aggregated resource loads and latency metrics.
                  </span>
                  <span className="hidden lg:inline">
                    Aggregated latency metrics and resource loads. All
                    telemetry is localized and anonymized.
                  </span>
                </p>
              </div>
              <div className="flex gap-2 items-center shrink-0">
                <span className="hidden lg:block">
                  <StateLabel on={draft.analytics} />
                </span>
                <Toggle
                  label="Analytics and performance metrics"
                  on={draft.analytics}
                  onChange={(v) => setDraft((d) => ({ ...d, analytics: v }))}
                />
              </div>
            </div>

            <div className="border border-[rgba(18,59,76,0.1)] flex items-center justify-between gap-3 p-3 lg:p-[16px] rounded-[8px] w-full">
              <div className="flex flex-col gap-1 items-start max-w-[600px]">
                <p className="font-hanken lg:font-sans font-extrabold text-[#0a2029] text-[15px] m-0">
                  <span className="lg:hidden">Functional Support</span>
                  <span className="hidden lg:inline">Support &amp; Interactive Live Chat</span>
                </p>
                <p className="font-manrope lg:font-sans font-normal text-[#5b6670] text-[13px] m-0">
                  <span className="lg:hidden">
                    Powers live technical support and playground environments.
                  </span>
                  <span className="hidden lg:inline">
                    Allows secure routing to live support engineers. If
                    disabled, chat functionality is hidden.
                  </span>
                </p>
              </div>
              <div className="flex gap-2 items-center shrink-0">
                <span className="hidden lg:block">
                  <StateLabel on={draft.support} />
                </span>
                <Toggle
                  label="Support and interactive live chat"
                  on={draft.support}
                  onChange={(v) => setDraft((d) => ({ ...d, support: v }))}
                />
              </div>
            </div>
          </div>

          {/* Footer row */}
          <div className="flex flex-col lg:flex-row gap-3 items-start lg:items-center justify-between w-full">
            <div className="flex flex-col gap-1">
              <p className="hidden lg:block font-sans font-normal text-[#5b6670] text-[12px] m-0">
                Withdrawal or reset can be triggered at any time using the
                persistent footer control.
              </p>
              <p role="status" aria-live="polite" className="font-sans font-semibold text-[12px] m-0 text-[#1f7a6c]">
                {notice ?? (
                  <span className="text-[#5b6670]">
                    Saved state: <span className="text-[#0a2029]">{describeConsent(consent)}</span>
                    {isDirty && <span className="text-[#b45309]"> · unsaved changes</span>}
                  </span>
                )}
              </p>
            </div>
            <div className="flex gap-3 items-start w-full lg:w-auto">
              <button
                type="button"
                onClick={discard}
                disabled={!isDirty}
                className="flex-1 lg:flex-none border border-[#0a2029] hover:bg-[#0a20290d] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center px-6 py-3 rounded-[6px]"
              >
                <span className="font-sans font-bold text-[#0a2029] text-[13px]">Close without saving</span>
              </button>
              <button
                type="button"
                onClick={() => commit(draft, "Your choices have been saved.")}
                className="flex-1 lg:flex-none bg-[#0a2029] hover:bg-[#123b4c] transition-colors flex items-center justify-center px-6 py-3 rounded-[6px]"
              >
                <span className="font-sans font-bold text-white text-[13px]">Save current choices</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
