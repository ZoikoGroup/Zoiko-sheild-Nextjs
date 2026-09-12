"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, RefreshCw } from "lucide-react";

interface ActionRightRow {
  actionName: string;
  actionColor: string;
  description: string;
  rightSideText: string;
  isRedHighlight?: boolean;
}

const actionRows: ActionRightRow[] = [
  {
    actionName: "observe / enrich",
    actionColor: "bg-[#64748B]",
    description: "May be service-operable within contracted read scope.",
    rightSideText: "Approved data access, logged queries, source permissions.",
  },
  {
    actionName: "recommend",
    actionColor: "bg-[#64748B]",
    description: "The service proposes an action with its rationale.",
    rightSideText: "No side effect. You can reject or modify.",
  },
  {
    actionName: "prepare",
    actionColor: "bg-[#64748B]",
    description: "A bounded change or request is prepared for review.",
    rightSideText: "Preview, target, before and after, validation.",
  },
  {
    actionName: "execute reversible",
    actionColor: "bg-[#D97706]",
    description: "Only if specifically authorized for that exact action class.",
    rightSideText: "Approval or delegation record, identity, rollback path.",
  },
  {
    actionName: "execute consequential",
    actionColor: "bg-[#DC2626]",
    description:
      "Approval-required by default, unless authoritative contract says otherwise.",
    rightSideText: "Re-authentication, separation of duties, evidence receipt.",
    isRedHighlight: true,
  },
  {
    actionName: "prohibited",
    actionColor: "bg-[#DC2626]",
    description: "Blocked regardless of service urgency.",
    rightSideText: "Technical deny, alert and governance review.",
    isRedHighlight: true,
  },
];

export default function HumanAuthorityComponent() {
  return (
    <div className="min-h-screen bg-[#0B2237] text-[#F8FAFC] font-sans antialiased py-16 px-4 md:px-8 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[1200px]"
      >
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-4 h-[2px] bg-[#DC2626]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#93A6B8] uppercase">
              HUMAN AUTHORITY AND RESPONSE RIGHTS
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mb-3">
            A connector does not authorize us to change your systems.
          </h1>
          <p className="text-sm md:text-base text-[#94A3B8] max-w-2xl leading-relaxed">
            Read, write, isolate, disable, block, revoke, quarantine, rotate and
            delete are independently defined and independently approved.
            Technical reach and permission are different things.
          </p>
        </div>

        {/* Top Table */}
        <div className="w-full overflow-x-auto rounded-[6px] border border-[#334155] bg-[#FFFFFF] text-[#1E293B] shadow-lg mb-8">
          <table className="w-full text-left border-collapse">
            <tbody className="divide-y divide-[#E2E8F0] text-xs">
              {actionRows.map((row, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  className={`transition-colors ${row.isRedHighlight ? "bg-[#FEF2F2]" : ""}`}
                >
                  {/* Column 1: #EEEBE7 */}
                  <td className="py-4 px-6 w-[28%] align-middle bg-[#EEEBE7]">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-[3px] h-6 rounded-full ${row.actionColor}`}
                      />
                      <span className="font-mono font-bold text-[12px] text-[#1E293B]">
                        {row.actionName}
                      </span>
                    </div>
                  </td>
                  {/* Column 2: #FFFFFF (white) */}
                  <td className="py-4 px-6 w-[36%] align-middle text-[#475569] text-[12px] bg-[#FFFFFF]">
                    {row.description}
                  </td>
                  {/* Column 3: #FCF9F4 */}
                  <td className="py-4 px-6 w-[36%] align-middle text-[#475569] text-[12px] bg-[#FCF9F4]">
                    {row.rightSideText}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Two Cards Grid with bg #0E2C46 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Card: Six decision-right states */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="bg-[#0E2C46] border border-[#1E3A5A] rounded-[6px] p-6 flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="flex items-center space-x-2.5 mb-4">
                <div className="w-6 h-6 rounded bg-[#1E3A5A] flex items-center justify-center text-[#94A3B8]">
                  <Shield className="w-3.5 h-3.5" />
                </div>
                <h2 className="font-bold text-[#F8FAFC] text-[15px]">
                  Six decision-right states
                </h2>
              </div>

              <div className="space-y-4 text-xs text-[#94A3B8] divide-y divide-[#1E3A5A]">
                <div className="pt-3 first:pt-0">
                  <span className="font-bold text-[#F8FAFC]">Advisory</span> —
                  we analyze and recommend; you act. No execute control is
                  shown.
                </div>
                <div className="pt-3">
                  <span className="font-bold text-[#F8FAFC]">
                    Review-required
                  </span>{" "}
                  — we prepare a change, a reviewer validates it before it
                  moves.
                </div>
                <div className="pt-3">
                  <span className="font-bold text-[#F8FAFC]">
                    Approval-required
                  </span>{" "}
                  — a named authorized role approves, with strong confirmation
                  and an expiry.
                </div>
                <div className="pt-3">
                  <span className="font-bold text-[#F8FAFC]">
                    Pre-authorized delegated
                  </span>{" "}
                  — a specific reversible action class, within signed
                  boundaries, with stop conditions and receipts.
                </div>
                <div className="pt-3">
                  <span className="font-bold text-[#F8FAFC]">
                    Emergency overlay
                  </span>{" "}
                  — only where contract and governance define it, with narrow
                  scope and retrospective review.
                </div>
                <div className="pt-3">
                  <span className="font-bold text-[#F8FAFC]">Prohibited</span> —
                  blocked, with the category explained and routing to your
                  authority.
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1E3A5A] text-[11px] text-[#94A3B8] leading-relaxed">
              <span className="font-mono font-bold text-[#CBD5E1]">00-24</span>{" "}
              No action is assigned to a tier unless the canonical action
              registry and your service contract agree. A visual severity level
              is not an authorization level.
            </div>
          </motion.div>

          {/* Right Card: Separation of duties */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="bg-[#0E2C46] border border-[#1E3A5A] rounded-[6px] p-6 flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="flex items-center space-x-2.5 mb-4">
                <div className="w-6 h-6 rounded bg-[#1E3A5A] flex items-center justify-center text-[#94A3B8]">
                  <RefreshCw className="w-3.5 h-3.5" />
                </div>
                <h2 className="font-bold text-[#F8FAFC] text-[15px]">
                  Separation of duties
                </h2>
              </div>

              <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                A high-impact action should not be proposed, approved and
                executed by the same actor — unless an explicit, risk-assessed
                emergency or delegated model permits it and the evidence record
                shows exactly why.
              </p>

              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Approval is never inferred from inactivity, urgency or silence.
                If an approver can&apos;t be reached, that&apos;s a fact the
                case records, not a reason the action proceeds.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
