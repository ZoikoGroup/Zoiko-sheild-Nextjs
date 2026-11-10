"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)*\.[A-Za-z]{2,}$/;

export default function NeverMissAStateChange() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [subscribedEmail, setSubscribedEmail] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = email.trim();
    if (!value) {
      setError("Enter your email address.");
      return;
    }
    if (!EMAIL_PATTERN.test(value)) {
      setError("Enter a valid email address, e.g. name@company.com.");
      return;
    }
    // TODO(backend): no status-subscription API exists yet. POST `value` to it here once available.
    setError(null);
    setSubscribedEmail(value);
    setEmail("");
  };

  return (
    <div
      id="subscribe-updates"
      className="scroll-mt-24 bg-[#FAF5F0] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-6xl">
        {/* Dark Banner Card */}
        <div className="bg-[#0A2440] rounded-3xl p-8 md:p-12 shadow-[0_4px_25px_rgba(0,0,0,0.08)] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 text-white">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-[28px] font-bold tracking-tight mb-2">
              Never Miss a State Change
            </h2>
            <p className="text-xs md:text-sm text-[#94A3B8] leading-relaxed">
              Configure component-specific notifications via email, webhooks, or
              RSS to get immediate telemetry updates direct from our state
              registry.
            </p>
          </div>

          {subscribedEmail ? (
            <div
              role="status"
              className="flex items-start gap-3 w-full lg:w-auto lg:max-w-sm bg-white/10 border border-white/20 rounded-xl px-4 py-3.5"
            >
              <CheckCircle2 className="w-5 h-5 text-[#85C1A3] shrink-0 mt-0.5" />
              <div className="text-xs md:text-sm">
                <p className="font-bold text-white">You&apos;re subscribed.</p>
                <p className="text-[#94A3B8] mt-0.5">
                  Status updates will be sent to{" "}
                  <span className="text-white font-semibold break-all">{subscribedEmail}</span>.{" "}
                  <button
                    type="button"
                    onClick={() => setSubscribedEmail(null)}
                    className="underline hover:text-white transition-colors"
                  >
                    Use a different email
                  </button>
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="w-full lg:w-auto"
            >
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
                <label htmlFor="status-subscribe-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="status-subscribe-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="Enter email address"
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? "status-subscribe-error" : undefined}
                  className={`bg-white text-[#111827] placeholder-[#9CA3AF] text-xs md:text-sm px-4 py-3.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#C53030] w-full sm:w-72 shadow-sm ${
                    error ? "border-[#C53030]" : "border-transparent"
                  }`}
                />
                <button
                  type="submit"
                  className="bg-[#C53030] hover:bg-[#B91C1C] text-white text-xs md:text-sm font-bold px-6 py-3.5 rounded-xl transition-colors shadow-sm whitespace-nowrap w-full sm:w-auto text-center"
                >
                  Subscribe
                </button>
              </div>
              {error && (
                <p id="status-subscribe-error" className="mt-2 text-xs text-[#FCA5A5]">
                  {error}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
