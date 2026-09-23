import React from "react";
import { Shield } from "lucide-react";

export default function SecureEvidentiaryPayloadSubmission() {
  return (
    <div className="bg-[#F0EDE6] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            DIAGNOSTIC EVIDENCE PREPARATION
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[36px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            Secure evidentiary payload submission
          </h1>
          <p className="text-[#4B5563] text-base leading-relaxed">
            Generate, sanitize, and verify diagnostic bundles locally before
            uploading. Content is cryptographically hashed for chain-of-custody.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Dropzone Area */}
          <div className="lg:col-span-7 bg-white rounded-2xl border-2 border-dashed border-[#D1D5DB] p-10 flex flex-col items-center justify-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] min-h-[260px]">
            <div className="mb-4 text-[#C53030]">
              <Shield className="w-10 h-10" />
            </div>
            <h3 className="text-base font-bold text-[#111827] mb-2">
              Drop secure bundle or diagnostic payload here
            </h3>
            <p className="text-xs text-[#6B7280] leading-relaxed">
              Acceptable file formats: .log, .har, .json, .zip up to 25MB
              maximum size limit.
            </p>
          </div>

          {/* Right Local Cleansing & Consent Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col justify-between min-h-[260px]">
            <div>
              <h3 className="text-base font-bold text-[#111827] mb-3">
                Local Cleansing &amp; Consent
              </h3>
              <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed mb-6">
                By checking below, you verify that all session keys,
                credentials, cookie tokens, and customer-sensitive identifiers
                have been redacted from the log payloads.
              </p>
            </div>

            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                id="consent-checkbox"
                className="mt-0.5 w-4 h-4 rounded border-[#D1D5DB] text-[#C53030] focus:ring-[#C53030]"
              />
              <label
                htmlFor="consent-checkbox"
                className="text-xs font-medium text-[#111827] leading-tight cursor-pointer"
              >
                I authorize secure storage &amp; attest to sanitization.
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
