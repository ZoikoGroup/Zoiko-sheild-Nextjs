"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, RefreshCw } from "lucide-react";

interface DecisionRightRow {
  actionName: string;
  actionColor: string;
  description: string;
  rightSideText: string;
  isRedHighlight?: boolean;
}

const decisionRows: DecisionRightRow[] = [
  {
    actionName: "advisory",
    actionColor: "bg-[#64748B]",
    description: "The assistant explains, summarizes or recommends.",
    rightSideText: "An authorized person or role remains the decision authority.",
  },
  {
    actionName: "review-required",
    actionColor: "bg-[#2563EB]",
    description: "Output cannot be used as the governed next step until authorized review occurs.",
    rightSideText: "No ambiguous enabled action in the meantime.",
  },
  {
    actionName: "approval-required",
    actionColor: "bg-[#D97706]",
    description: "A specific consequential action or decision needs explicit authorized approval first.",
    rightSideText: "Approval is attributable and never inferred from silence.",
  },
  {
    actionName: "prohibited",
    actionColor: "bg-[#DC2626]",
    description: "The assistant or tool may not perform or make that action or decision.",
    rightSideText: "Blocked, with the category explained and routing to your authority.",
    isRedHighlight: true,
  },
];

export default function DecisionRightComponent() {
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
              DECISION RIGHTS AND APPROVAL HANDOFF
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mb-3">
            Four classes. The assistant cannot move itself between them.
          </h1>
          <p className="text-sm md:text-base text-[#94A3B8] max-w-2xl leading-relaxed">
            These are decision-right classes, not autonomy levels and not a maturity progression. Technical write capability never converts an advisory or review state into execution permission.
          </p>
        </div>

        {/* Top Table */}
        <div className="w-full overflow-x-auto rounded-[6px] border border-[#334155] bg-[#FFFFFF] text-[#1E293B] shadow-lg mb-8">
          <table className="w-full text-left border-collapse">
            <tbody className="divide-y divide-[#E2E8F0] text-xs">
              {decisionRows.map((row, index) => (
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
          {/* Left Card: Review states that actually resolve */}
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
                  Review states that actually resolve
                </h2>
              </div>

              <div className="space-y-4 text-xs text-[#94A3B8] divide-y divide-[#1E3A5A]">
                <div className="pt-3 first:pt-0">
                  <span className="font-bold text-[#F8FAFC]">Review rejected</span> —
                  the output stays in history but cannot progress to the governed next step.
                </div>
                <div className="pt-3">
                  <span className="font-bold text-[#F8FAFC]">
                    Changes requested
                  </span>{" "}
                  — returns to the workflow with the changed context made explicit.
                </div>
                <div className="pt-3">
                  <span className="font-bold text-[#F8FAFC]">
                    Reviewer unavailable
                  </span>{" "}
                  — fails closed or routes to approved escalation. It does not proceed.
                </div>
                <div className="pt-3">
                  <span className="font-bold text-[#F8FAFC]">
                    Stale before review
                  </span>{" "}
                  — grounding and policy version are revalidated before the review is accepted.
                </div>
                <div className="pt-3">
                  <span className="font-bold text-[#F8FAFC]">
                    Scope changed
                  </span>{" "}
                  — a follow-up question that materially changes purpose, data scope or tool use revalidates permissions and decision-right state.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Card: No self-authorization */}
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
                  No self-authorization
                </h2>
              </div>

              <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                The assistant cannot satisfy its own review or approval requirement, cannot change its own decision-right class, and cannot infer approval from urgency, its own confidence, user silence or the availability of a tool.
              </p>

              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Authorized humans can reject, correct, stop and escalate at any point, and every one of those events is attributable with its reason and history. An override is a first-class event, not an exception path.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}