"use client";

import React, { useState } from "react";

export default function ApplicationFormSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    partnerPath: "Technology & Integration Alliance",
    orgName: "",
    hqLocation: "",
    segments: "",
    contactName: "",
    contactEmail: "",
    contactRole: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const steps = [
    { num: 1, label: "Path & Organization" },
    { num: 2, label: "Contact Details" },
    { num: 3, label: "Technical Fit" },
    { num: 4, label: "Review & Submit" },
  ];

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="partner-application"
      className="w-full bg-[#F7F5F0] py-20 px-6 sm:px-8 lg:px-12 border-b border-[#123B4C]/10 scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="font-mono text-xs sm:text-[13px] font-medium tracking-[0.115em] text-[#C44242] uppercase">
              Ecosystem Application
            </span>
          </div>

          <h2 className="font-hanken font-extrabold text-3xl sm:text-4xl text-[#0A2029]">
            Partner Registration Process
          </h2>

          <p className="font-manrope text-base text-[#5E6670] leading-relaxed">
            Submit your technical profile. Applications are reviewed manually
            within 5 business days. This registration represents a request for
            review, not a commercial commitment.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white border border-[#123B4C]/10 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8">
          {/* Form Steps Indicator */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b border-[#123B4C]/10">
            {steps.map((s) => {
              const isActive = s.num === currentStep;
              const isPast = s.num < currentStep;

              return (
                <button
                  type="button"
                  key={s.num}
                  onClick={() => setCurrentStep(s.num)}
                  className="flex items-center gap-2 text-left group"
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-colors ${
                      isActive
                        ? "bg-[#C44242] text-white"
                        : isPast
                        ? "bg-[#1F7A6C] text-white"
                        : "bg-[#D6CBB3]/50 text-[#444749]"
                    }`}
                  >
                    {isPast ? "✓" : s.num}
                  </span>
                  <span
                    className={`font-manrope text-xs sm:text-sm font-semibold transition-colors ${
                      isActive
                        ? "text-[#0A2029]"
                        : "text-[#444749]/60 group-hover:text-[#0A2029]"
                    }`}
                  >
                    {s.label}
                  </span>
                </button>
              );
            })}
          </div>

          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#E4F0EC] text-[#1F7A6C] flex items-center justify-center mx-auto text-2xl font-bold">
                ✓
              </div>
              <h3 className="font-hanken font-extrabold text-2xl text-[#0A2029]">
                Application Submitted for Review
              </h3>
              <p className="font-manrope text-sm text-[#5E6670] max-w-md mx-auto">
                Thank you for your submission. Our partnership architecture team
                will evaluate your organization&apos;s technical scope and reach out
                within 5 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleNext} className="space-y-6">
              {currentStep === 1 && (
                <div className="space-y-6">
                  {/* Select Desired Partnership Path */}
                  <div className="space-y-2">
                    <label className="block font-manrope font-bold text-sm text-[#0A2029]">
                      Select Desired Partnership Path
                    </label>
                    <select
                      value={formData.partnerPath}
                      onChange={(e) =>
                        setFormData({ ...formData, partnerPath: e.target.value })
                      }
                      className="w-full bg-[#F7F5F0] border border-[#123B4C]/10 rounded-lg p-3.5 text-sm text-[#0A2029] focus:outline-none focus:border-[#C44242] transition-colors"
                    >
                      <option>Technology & Integration Alliance</option>
                      <option>MSSP, MDR & Managed Security</option>
                      <option>System Integration & Consulting</option>
                      <option>Channel & Reseller Partner</option>
                      <option>Cloud & Platform Ecosystem</option>
                      <option>Compliance & Risk Advisory</option>
                    </select>
                  </div>

                  {/* Fields Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block font-manrope font-bold text-sm text-[#0A2029]">
                        Legal Organization Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.orgName}
                        onChange={(e) =>
                          setFormData({ ...formData, orgName: e.target.value })
                        }
                        placeholder="e.g. Acme Cybersecurity Corp"
                        className="w-full bg-white border border-[#123B4C]/10 rounded-lg p-3 text-sm text-[#0A2029] placeholder-[#5E6670] focus:outline-none focus:border-[#C44242] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block font-manrope font-bold text-sm text-[#0A2029]">
                        HQ State / Country
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.hqLocation}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            hqLocation: e.target.value,
                          })
                        }
                        placeholder="e.g. California, United States"
                        className="w-full bg-white border border-[#123B4C]/10 rounded-lg p-3 text-sm text-[#0A2029] placeholder-[#5E6670] focus:outline-none focus:border-[#C44242] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Target Customer Segments & Industry Alignment */}
                  <div className="space-y-2">
                    <label className="block font-manrope font-bold text-sm text-[#0A2029]">
                      Target Customer Segments & Industry Alignment
                    </label>
                    <textarea
                      rows={4}
                      value={formData.segments}
                      onChange={(e) =>
                        setFormData({ ...formData, segments: e.target.value })
                      }
                      placeholder="Describe the enterprise environments you actively support, focusing on audit and regulatory boundaries (e.g. SOC2, HIPAA, ISO27001)..."
                      className="w-full bg-white border border-[#123B4C]/10 rounded-lg p-3.5 text-sm text-[#0A2029] placeholder-[#5E6670] focus:outline-none focus:border-[#C44242] transition-colors resize-none"
                    />
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block font-manrope font-bold text-sm text-[#0A2029]">
                        Lead Partner Contact Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contactName}
                        onChange={(e) =>
                          setFormData({ ...formData, contactName: e.target.value })
                        }
                        placeholder="e.g. Jane Doe"
                        className="w-full bg-white border border-[#123B4C]/10 rounded-lg p-3 text-sm text-[#0A2029] placeholder-[#5E6670] focus:outline-none focus:border-[#C44242] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block font-manrope font-bold text-sm text-[#0A2029]">
                        Corporate Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.contactEmail}
                        onChange={(e) =>
                          setFormData({ ...formData, contactEmail: e.target.value })
                        }
                        placeholder="jane.doe@company.com"
                        className="w-full bg-white border border-[#123B4C]/10 rounded-lg p-3 text-sm text-[#0A2029] placeholder-[#5E6670] focus:outline-none focus:border-[#C44242] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block font-manrope font-bold text-sm text-[#0A2029]">
                      Title / Functional Role
                    </label>
                    <input
                      type="text"
                      value={formData.contactRole}
                      onChange={(e) =>
                        setFormData({ ...formData, contactRole: e.target.value })
                      }
                      placeholder="e.g. VP of Alliances & Integrations"
                      className="w-full bg-white border border-[#123B4C]/10 rounded-lg p-3 text-sm text-[#0A2029] placeholder-[#5E6670] focus:outline-none focus:border-[#C44242] transition-colors"
                    />
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="bg-[#F7F5F0] p-4 rounded-xl space-y-2 text-sm text-[#0A2029]">
                    <h4 className="font-bold">Technical Sandbox Requirements</h4>
                    <p className="text-xs text-[#5E6670]">
                      Zoiko Shield requires all integration telemetry to be validated
                      in a mutual sandbox environment prior to public catalog listing.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="rounded border-[#123B4C]/20 text-[#C44242] focus:ring-[#C44242]"
                      />
                      <span className="font-manrope text-sm text-[#0A2029]">
                        Organization maintains dedicated engineering capacity for connector maintenance.
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="rounded border-[#123B4C]/20 text-[#C44242] focus:ring-[#C44242]"
                      />
                      <span className="font-manrope text-sm text-[#0A2029]">
                        Agree to mutual cryptographic evidence ledger audits every 24 hours.
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-4">
                  <h4 className="font-hanken font-bold text-lg text-[#0A2029]">
                    Review Application Summary
                  </h4>
                  <div className="bg-[#F7F5F0] p-5 rounded-xl space-y-2.5 font-manrope text-sm">
                    <div>
                      <span className="text-[#5E6670]">Partner Path: </span>
                      <strong className="text-[#0A2029]">{formData.partnerPath}</strong>
                    </div>
                    <div>
                      <span className="text-[#5E6670]">Organization: </span>
                      <strong className="text-[#0A2029]">
                        {formData.orgName || "Acme Corp"}
                      </strong>
                    </div>
                    <div>
                      <span className="text-[#5E6670]">Location: </span>
                      <strong className="text-[#0A2029]">
                        {formData.hqLocation || "Not specified"}
                      </strong>
                    </div>
                    <div>
                      <span className="text-[#5E6670]">Contact: </span>
                      <strong className="text-[#0A2029]">
                        {formData.contactName || "Primary Partner Lead"}
                      </strong>
                    </div>
                  </div>
                </div>
              )}

              {/* Form Footer */}
              <div className="pt-6 border-t border-[#123B4C]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="font-manrope text-xs text-[#5E6670] max-w-md text-center sm:text-left">
                  * Submitting this registration does not authorize any standing
                  API access. All integrations must go through discovery.
                </p>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={() => setCurrentStep(currentStep - 1)}
                      className="px-5 py-3 rounded-lg border border-[#123B4C]/20 text-[#123B4C] font-manrope font-semibold text-sm hover:bg-[#F7F5F0] transition-colors"
                    >
                      Back
                    </button>
                  )}
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-lg bg-[#C44242] text-white font-manrope font-semibold text-sm shadow-sm hover:bg-[#b03939] transition-colors"
                  >
                    {currentStep === 4 ? "Submit Registration" : "Continue"}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
