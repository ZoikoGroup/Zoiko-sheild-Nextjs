"use client";

import React from "react";
import { FolderLock, Building2 } from "lucide-react";

interface StateRow {
  state: string;
  treated: string;
  boundary: string;
  isHighlighted?: boolean;
}

const STATE_ROWS: StateRow[] = [
  {
    state: "initiated / requested",
    treated: "Reference the source event, identity and timestamp.",
    boundary: "A request is not an authorization.",
  },
  {
    state: "authorized / declined",
    treated: "Provider or source state only.",
    boundary: "A security signal cannot create financial authorization.",
  },
  {
    state: "pending / timeout / unknown",
    treated: "Uncertainty stays explicit, routed to the source system.",
    boundary: "No optimistic success.",
    isHighlighted: true,
  },
  {
    state: "captured / posted",
    treated: "Reference the authoritative payment or ledger source.",
    boundary: "We don't own posting truth.",
  },
  {
    state: "settled",
    treated: "From the approved authoritative source only.",
    boundary: "Settlement finality is never inferred.",
  },
  {
    state: "reversed / refunded",
    treated: "Preserve source, approval and evidence.",
    boundary: "No refund execution by implication.",
  },
  {
    state: "duplicate / replay",
    treated: "Security and operational detection plus investigation context.",
    boundary: "Detection is not financial correction.",
  },
  {
    state: "reconciliation break",
    treated: "Evidence, owner, age, investigation and resolution source.",
    boundary: "No automatic accounting conclusion.",
  },
];

export default function StateSemanticsSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#E04F2E]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase">
              STATE SEMANTICS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
            Security events, provider messages and ledger states are three
            different things.
          </h2>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-3xl">
            Payment systems need exact state semantics, and security tooling
            must not reinterpret business settlement or ledger state. Where a
            view merges them, it retains source identity, clock, uncertainty,
            ownership and the authoritative resolution path.
          </p>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-3xl border border-[#CBD5E1] shadow-sm overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#CBD5E1] bg-[#EEEBE7]">
                  <th className="py-4 px-6 text-[10px] font-mono font-bold tracking-widest text-[#64748B] uppercase w-1/4">
                    STATE
                  </th>
                  <th className="py-4 px-6 text-[10px] font-mono font-bold tracking-widest text-[#64748B] uppercase w-2/5">
                    HOW IT&apos;S TREATED
                  </th>
                  <th className="py-4 px-6 text-[10px] font-mono font-bold tracking-widest text-[#64748B] uppercase w-7/20">
                    BOUNDARY
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#CBD5E1]">
                {STATE_ROWS.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[#FAFAF8]/50 transition-colors"
                  >
                    <td className="py-5 px-6 text-xs sm:text-sm font-semibold text-[#0F172A] font-mono">
                      {row.state}
                    </td>
                    <td className="py-5 px-6 text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {row.treated}
                    </td>
                    <td className="py-5 px-6 text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {row.isHighlighted ? (
                        <span className="font-bold text-[#0F172A]">
                          {row.boundary}
                        </span>
                      ) : (
                        row.boundary
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sensitive Values Card */}
          <div className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F1F0EB] flex items-center justify-center text-[#0F172A] mb-6">
                <FolderLock className="w-5 h-5 text-[#0F172A]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-6">
                Sensitive values
              </h3>

              <div className="space-y-4 mb-8">
                <div className="pb-4 border-b border-[#E2E8F0]">
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    <strong className="text-[#0F172A]">
                      Card and account identifiers
                    </strong>{" "}
                    &mdash; minimized, tokenized or referenced where the system
                    design supports it, with restricted access.
                  </p>
                </div>

                <div className="pb-4 border-b border-[#E2E8F0]">
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    <strong className="text-[#0F172A]">
                      Authentication factors
                    </strong>{" "}
                    &mdash; OTPs, PINs and authentication secrets are never
                    exposed anywhere.
                  </p>
                </div>

                <div className="pb-4 border-b border-[#E2E8F0]">
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    <strong className="text-[#0F172A]">
                      API credentials and keys
                    </strong>{" "}
                    &mdash; vaulted, scoped, rotated, monitored. Never in a URL,
                    in analytics, in an example or in a screenshot.
                  </p>
                </div>

                <div className="pb-4 border-b border-[#E2E8F0]">
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    <strong className="text-[#0F172A]">Tokens</strong> &mdash;
                    carry purpose, scope, expiry, revocation and source. A token
                    is not proof of authorization or compliance.
                  </p>
                </div>

                <div>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    <strong className="text-[#0F172A]">Logs</strong> &mdash;
                    security and operational value, minimized. Secrets are not
                    logged.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2E8F0]">
              <span className="block text-[10px] font-mono font-bold tracking-widest text-[#64748B] uppercase mb-1">
                SENSITIVE-VALUE LAW
              </span>
              <p className="text-xs text-[#475569] leading-relaxed">
                Exact data scope, tokenization method, encryption claim,
                retention period or standard status comes from current security,
                privacy and compliance authority &mdash; never from a sector
                page.
              </p>
            </div>
          </div>

          {/* Provider Dependencies Card */}
          <div className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F1F0EB] flex items-center justify-center text-[#0F172A] mb-6">
                <Building2 className="w-5 h-5 text-[#0F172A]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-6">
                Provider dependencies
              </h3>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
                Payment operations depend on external providers and shared
                infrastructure. Visibility into a dependency is not control over
                the provider, and a provider&apos;s own availability, security
                and compliance remain theirs.
              </p>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Provider relationships appear only from approved relationship
                records. Otherwise the page uses category language &mdash;
                because a logo can imply membership, sponsorship or support that
                doesn&apos;t exist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
