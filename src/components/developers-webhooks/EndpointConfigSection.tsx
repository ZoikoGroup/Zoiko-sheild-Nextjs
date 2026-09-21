"use client";

import React, { useState } from "react";
import { BreakableName, Reveal, Section, SectionHeader } from "./shared";

const fieldClass =
  "w-full bg-[#f7f5f0] border border-[rgba(18,59,76,0.1)] rounded-[8px] px-3 py-3 text-[14px] text-[#0a2029] outline-none focus:border-[#1f7a6c] focus:ring-2 focus:ring-[#1f7a6c]/20";

const labelClass = "font-manrope font-bold text-[14px] text-[#0a2029]";

const subscribedEvents = ["event.device.unhealthy_v1", "event.auth.session_breach_v1"];

export default function EndpointConfigSection() {
  const [notice, setNotice] = useState<string | null>(null);

  return (
    <Section alt id="endpoint-configuration">
      <SectionHeader
        eyebrow="Registration Portal"
        title="Endpoint Configuration"
        description="Manage your registered target endpoints. Secrets must never be stored inside URL queries."
      />

      <Reveal className="bg-white rounded-[16px] p-5 sm:p-8 w-full">
        <form
          className="flex flex-col gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            setNotice("Preview only — sign in to the Zoiko Shield console to save live endpoint configuration.");
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="flex flex-col gap-2">
              <span className={labelClass}>Endpoint Friendly Name *</span>
              <input
                type="text"
                required
                defaultValue="Production SecOps Event Receptor"
                className={`${fieldClass} font-manrope`}
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className={labelClass}>Target Environment *</span>
              <select defaultValue="production" className={`${fieldClass} font-manrope`}>
                <option value="production">Production (Isolated Secret Key)</option>
                <option value="staging">Staging (Isolated Secret Key)</option>
                <option value="sandbox">Sandbox (Isolated Secret Key)</option>
              </select>
            </label>
          </div>

          <label className="flex flex-col gap-2">
            <span className={labelClass}>HTTPS Endpoint Destination URL *</span>
            <input
              type="url"
              required
              pattern="https://.*"
              defaultValue="https://secops.zoiko.internal/v1/alerts"
              className={`${fieldClass} font-jetbrains`}
            />
          </label>

          <div className="flex flex-col gap-2">
            <span className={labelClass}>Subscribed Event Queries (Deterministic Sub-selection)</span>
            <div className={`${fieldClass} flex flex-wrap gap-2`}>
              {subscribedEvents.map((ev) => (
                <span
                  key={ev}
                  className="bg-[#e4f0ec] rounded-[4px] px-2 py-1 font-jetbrains font-bold text-[12px] text-[#1f7a6c]"
                >
                  <BreakableName>{ev}</BreakableName>
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              type="submit"
              className="px-5 py-3 rounded-[8px] bg-[#c44242] hover:bg-[#b23636] transition-colors font-manrope font-bold text-[15px] text-white"
            >
              Save Configuration
            </button>
            <button
              type="button"
              onClick={() =>
                setNotice("Preview only — secret rotation is performed from the Zoiko Shield console.")
              }
              className="px-5 py-3 rounded-[8px] bg-[#f0ede6] hover:bg-[#e6e2d9] transition-colors font-manrope font-bold text-[15px] text-[#0a2029]"
            >
              Rotate Secret Key
            </button>
          </div>

          {notice && (
            <p role="status" className="font-manrope text-[13px] text-[#5b6670] m-0">
              {notice}
            </p>
          )}
        </form>
      </Reveal>
    </Section>
  );
}
