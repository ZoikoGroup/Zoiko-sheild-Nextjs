import React from "react";
import Image from "next/image";
import { FileCheck, TestTubes, FileSearch, type LucideIcon } from "lucide-react";

type Variant = "light" | "teal" | "navy";

interface RecordCardProps {
  id: string;
  variant: Variant;
  icon: LucideIcon;
  title: string;
  purpose: string;
  fields: [string, string][];
  ruleText: string;
  backgroundImage?: string;
}

const variantStyles: Record<
  Variant,
  { card: string; titleColor: string; purposeColor: string; field: string; fieldLabel: string; fieldValue: string; rule: string; ruleLabel: string; ruleText: string }
> = {
  light: {
    card: "bg-white border-[rgba(18,59,76,0.12)]",
    titleColor: "text-[#0a2029]",
    purposeColor: "text-[#5b6670]",
    field: "bg-[#f0ede6]",
    fieldLabel: "text-[#1f7a6c]",
    fieldValue: "text-[#0a2029]",
    rule: "bg-[#f9eeee] border-[rgba(196,66,66,0.2)]",
    ruleLabel: "text-[#c44242]",
    ruleText: "text-[#0a2029]",
  },
  teal: {
    card: "border-[rgba(255,255,255,0.14)]",
    titleColor: "text-white",
    purposeColor: "text-[rgba(255,255,255,0.68)]",
    field: "bg-[#123b4c]",
    fieldLabel: "text-[#ded3d3]",
    fieldValue: "text-white",
    rule: "bg-[rgba(196,66,66,0.14)] border-[rgba(196,66,66,0.4)]",
    ruleLabel: "text-[#c44242]",
    ruleText: "text-white",
  },
  navy: {
    card: "border-[rgba(255,255,255,0.14)]",
    titleColor: "text-white",
    purposeColor: "text-[rgba(255,255,255,0.68)]",
    field: "bg-[#0b2834]",
    fieldLabel: "text-[rgba(255,255,255,0.5)]",
    fieldValue: "text-white",
    rule: "bg-[rgba(196,66,66,0.14)] border-[rgba(196,66,66,0.4)]",
    ruleLabel: "text-[#c44242]",
    ruleText: "text-white",
  },
};

function RecordCard({ id, variant, icon: Icon, title, purpose, fields, ruleText, backgroundImage }: RecordCardProps) {
  const s = variantStyles[variant];
  return (
    <div
      id={id}
      className={`relative border flex flex-col gap-[24px] p-[22px] sm:p-[32px] rounded-[20px] shadow-[0px_8px_28px_0px_rgba(11,37,48,0.08)] w-full scroll-mt-28 ${s.card}`}
    >
      {backgroundImage && (
        <div aria-hidden className="absolute inset-0 rounded-[20px] overflow-hidden pointer-events-none">
          <Image src={backgroundImage} alt="" fill className="object-cover" />
          <div className={`absolute inset-0 ${variant === "teal" ? "bg-[rgba(18,59,76,0.31)]" : "bg-[rgba(18,59,76,0.65)]"}`} />
        </div>
      )}

      <div className="relative flex items-start justify-between gap-[16px] w-full">
        <div className="flex flex-col gap-[8px] max-w-[390px]">
          <p className={`font-hanken font-extrabold text-[26px] sm:text-[30px] m-0 ${s.titleColor}`}>{title}</p>
          <p className={`font-manrope font-normal leading-[1.5] text-[15px] m-0 ${s.purposeColor}`}>{purpose}</p>
        </div>
        <Icon className={s.titleColor} size={40} strokeWidth={1.5} />
      </div>

      <div className="relative flex flex-wrap gap-[10px] items-start w-full">
        {fields.map(([name, value]) => (
          <div key={name} className={`flex flex-col gap-[5px] p-[14px] rounded-[8px] w-full sm:w-[calc(25%-7.5px)] min-w-[160px] ${s.field}`}>
            <p className={`font-jetbrains font-normal text-[10px] m-0 whitespace-nowrap ${s.fieldLabel}`}>{name}</p>
            <p className={`font-manrope font-semibold text-[13px] m-0 ${s.fieldValue}`}>{value}</p>
          </div>
        ))}
      </div>

      <div className={`relative flex flex-col gap-[12px] p-[16px] rounded-[8px] w-full border ${s.rule}`}>
        <p className={`font-jetbrains font-bold text-[11px] m-0 whitespace-nowrap ${s.ruleLabel}`}>RULE</p>
        <p className={`font-manrope font-normal leading-[1.5] text-[13px] m-0 ${s.ruleText}`}>{ruleText}</p>
      </div>
    </div>
  );
}

/* ---------- Mobile (Figma: compliance control plane mobile) ---------- */

interface MobileCardProps {
  variant: "light" | "dark";
  title: string;
  purpose: string;
  fields: [string, string][];
  backgroundImage?: string;
}

const MOBILE_RULE_TEXT =
  "State remains attributable, reviewable and distinct from any universal legal conclusion.";

function MobileRecordCard({ variant, title, purpose, fields, backgroundImage }: MobileCardProps) {
  const light = variant === "light";
  return (
    <div
      className={`relative border flex flex-col gap-[18px] p-[20px] rounded-[18px] shadow-[0px_8px_28px_0px_rgba(11,37,48,0.08)] w-full overflow-hidden ${
        light ? "bg-white border-[rgba(18,59,76,0.12)]" : "border-[rgba(255,255,255,0.14)]"
      }`}
    >
      {backgroundImage && (
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <Image src={backgroundImage} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-[rgba(11,39,50,0.78)]" />
        </div>
      )}

      <div className={`relative flex flex-col gap-[6px] w-full ${light ? "" : ""}`}>
        <p className={`font-hanken font-extrabold text-[18px] m-0 ${light ? "text-[#0a2029]" : "text-white"}`}>
          {title}
        </p>
        <p className={`font-manrope font-normal leading-[1.5] text-[14px] m-0 ${light ? "text-[#5b6670]" : "text-[#a8b0b8]"}`}>
          {purpose}
        </p>
      </div>

      <div className="relative flex flex-col gap-[8px] w-full">
        {fields.map(([name, value]) => (
          <div
            key={name}
            className={`flex flex-col gap-[5px] p-[14px] rounded-[8px] w-full border ${
              light ? "bg-[#f0ede6] border-transparent" : "bg-[#0c3445] border-[rgba(255,255,255,0.07)]"
            }`}
          >
            <p className={`font-jetbrains font-normal text-[10.5px] m-0 whitespace-nowrap ${light ? "text-[#5b6670]" : "text-[rgba(255,255,255,0.5)]"}`}>
              {name}
            </p>
            <p className={`font-manrope font-semibold text-[14px] m-0 ${light ? "text-[#0a2029]" : "text-white"}`}>
              {value}
            </p>
          </div>
        ))}
      </div>

      <div
        className={`relative flex flex-col gap-[6px] p-[14px] rounded-[8px] w-full border ${
          light ? "bg-[#f9eeee] border-[rgba(196,66,66,0.2)]" : "bg-[rgba(196,66,66,0.14)] border-[rgba(196,66,66,0.2)]"
        }`}
      >
        <p className="font-jetbrains font-bold text-[11px] text-[#c44242] m-0 whitespace-nowrap">RULE</p>
        <p className={`font-manrope font-normal leading-[1.5] text-[13px] m-0 ${light ? "text-[#0a2029]" : "text-white"}`}>
          {MOBILE_RULE_TEXT}
        </p>
      </div>
    </div>
  );
}

export function GovernedComplianceRecordsSection() {
  return (
    <section className="bg-[#f0ede6] w-full">
      {/* Mobile */}
      <div className="md:hidden flex flex-col gap-[32px] items-start px-[22px] py-[68px] w-full">
        <div className="flex flex-col gap-[12px] w-full">
          <div className="flex gap-[10px] items-center">
            <div className="w-[20px] h-[2px] bg-[#c44242] shrink-0" />
            <p className="font-jetbrains font-medium text-[12px] text-[#c44242] uppercase m-0">
              Overview · Control model
            </p>
          </div>
          <h2 className="font-hanken font-extrabold leading-[1.08] text-[28px] text-[#0a2029] m-0">
            Every displayed state has a record behind it.
          </h2>
          <p className="font-manrope font-medium leading-[1.55] text-[16.5px] text-[#5b6670] m-0">
            Inspect purpose, scope, ownership, state and history. Color reinforces state but never defines it; basis, owner and effective review time remain visible.
          </p>
        </div>

        <div className="w-full scroll-mt-24">
          <MobileRecordCard
            variant="light"
            title="Control model"
            purpose="Inspect control purpose, scope, ownership, state, and history."
            fields={[
              ["control_id", "Defined and versioned"],
              ["label", "Named accountable authority"],
              ["owner", "Named accountable owner"],
              ["state", "Defined governed state"],
              ["scope", "Systems and boundaries"],
              ["history", "Attributable changes"],
            ]}
          />
        </div>

        <div className="w-full scroll-mt-24">
          <MobileRecordCard
            variant="dark"
            title="Mappings"
            purpose="Understand requirement relationships and versions."
            backgroundImage="/images/compliance-control-plane/record-model-mappings-bg.webp"
            fields={[
              ["mapping_id", "Defined and versioned"],
              ["source_object", "Control or requirement"],
              ["target_object", "Framework reference"],
              ["relationship", "Approved relationship"],
              ["scope", "Explicit boundaries"],
              ["version", "Licensed source version"],
            ]}
          />
        </div>

        <div className="w-full scroll-mt-24">
          <MobileRecordCard
            variant="light"
            title="Tests"
            purpose="Inspect method, evidence, result, and limitations."
            fields={[
              ["test_id / version", "Defined and repeatable"],
              ["control_ref", "Linked governed control"],
              ["method", "Documented procedure"],
              ["evidence_ref", "Traceable support"],
              ["result", "Attributable outcome"],
              ["limitations", "Visible constraints"],
            ]}
          />
        </div>

        <div className="w-full scroll-mt-24">
          <MobileRecordCard
            variant="dark"
            title="Assessments"
            purpose="See attributable review and open questions."
            backgroundImage="/images/compliance-control-plane/record-model-assessments-bg.webp"
            fields={[
              ["assessment_id", "Defined and attributable"],
              ["subject", "Control or program"],
              ["reviewer", "Named reviewer"],
              ["state", "Governed review state"],
              ["open_questions", "Visible unresolved items"],
              ["reviewed_at", "Effective review time"],
            ]}
          />
        </div>

        <div className="w-full scroll-mt-24">
          <MobileRecordCard
            variant="light"
            title="Exceptions"
            purpose="See governed gaps, reason, owner, and review."
            fields={[
              ["exception_id", "Defined and versioned"],
              ["subject", "Linked governed object"],
              ["reason", "Documented rationale"],
              ["owner", "Named accountable owner"],
              ["review_date", "Required next review"],
              ["state", "Open, accepted or expired"],
            ]}
          />
        </div>
      </div>

      {/* Desktop / tablet */}
      <div className="hidden md:flex md:flex-col gap-[48px] w-full mx-auto max-w-[1440px] px-8 lg:px-[120px] py-[56px] lg:py-[88px]">
        <div className="flex flex-col gap-[14px] max-w-[928px]">
          <div className="flex gap-[10px] items-center">
            <div className="w-[20px] h-[2px] bg-[#c44242] shrink-0" />
            <p className="font-jetbrains font-medium text-[11px] text-[#c44242] uppercase m-0">
              Overview · Control model
            </p>
          </div>
          <h2 className="font-hanken font-extrabold leading-[1.08] text-[30px] sm:text-[36px] lg:text-[40px] text-[#c44242] m-0">
            Every displayed state has a record behind it.
          </h2>
          <p className="font-manrope font-normal leading-[1.55] text-[16px] text-[#5b6670] m-0">
            Inspect purpose, scope, ownership, state and history. Color reinforces state but never defines it: text label, basis, scope, owner and effective or review time remain visible.
          </p>
        </div>

        <RecordCard
          id="controls"
          variant="light"
          icon={FileCheck}
          title="Control model"
          purpose="Inspect control purpose, scope, ownership, state, and history."
          ruleText="Control state is a governed product state with a defined basis—not a universal legal conclusion."
          fields={[
            ["control_id", "Defined and versioned"],
            ["label", "Named accountable authority"],
            ["purpose", "Inspectable governed state"],
            ["scope", "Linked source record"],
            ["owner", "Defined and versioned"],
            ["authority", "Named accountable authority"],
            ["state", "Inspectable governed state"],
            ["state_basis", "Linked source record"],
            ["mappings", "Defined and versioned"],
            ["tests / assessments", "Named accountable authority"],
            ["evidence_refs", "Inspectable governed state"],
            ["exceptions", "Linked source record"],
            ["effective / review time", "Defined and versioned"],
            ["version / history", "Named accountable authority"],
          ]}
        />

        <RecordCard
          id="mappings"
          variant="teal"
          icon={FileCheck}
          title="Mappings"
          purpose="Understand requirement relationships and versions."
          ruleText="A mapping expresses an approved relationship; it does not establish equivalence unless explicitly defined. Licensed framework text is never reproduced without rights."
          backgroundImage="/images/compliance-control-plane/record-model-mappings-bg.webp"
          fields={[
            ["mapping_id", "Defined and versioned"],
            ["source_object", "Named accountable authority"],
            ["target_object", "Inspectable governed state"],
            ["relationship_type", "Linked source record"],
            ["direction", "Defined and versioned"],
            ["rationale", "Named accountable authority"],
            ["scope / applicability", "Inspectable governed state"],
            ["source / version", "Linked source record"],
            ["licensing", "Defined and versioned"],
            ["owner / reviewer", "Named accountable authority"],
            ["state", "Inspectable governed state"],
            ["history", "Linked source record"],
          ]}
        />

        <RecordCard
          id="tests"
          variant="light"
          icon={TestTubes}
          title="Tests"
          purpose="Inspect method, evidence, result, and limitations."
          ruleText="A test result is not automatically a compliance conclusion. Any control-state effect must be separately defined."
          fields={[
            ["test_id / version", "Defined and versioned"],
            ["control_ref", "Named accountable authority"],
            ["purpose", "Inspectable governed state"],
            ["method", "Linked source record"],
            ["scope", "Defined and versioned"],
            ["schedule / trigger", "Named accountable authority"],
            ["evidence_inputs", "Inspectable governed state"],
            ["execution_state", "Linked source record"],
            ["result", "Defined and versioned"],
            ["limitations", "Named accountable authority"],
            ["review_requirement", "Inspectable governed state"],
            ["owner / executor", "Linked source record"],
            ["timestamps", "Defined and versioned"],
            ["history", "Named accountable authority"],
          ]}
        />

        <RecordCard
          id="assessments"
          variant="navy"
          icon={FileCheck}
          title="Assessments"
          purpose="See attributable review and open questions."
          ruleText="Assessment state remains separate from test execution and control state."
          backgroundImage="/images/compliance-control-plane/record-model-assessments-bg.webp"
          fields={[
            ["assessment_id", "Defined and versioned"],
            ["subject", "Named accountable authority"],
            ["reviewer / authority", "Inspectable governed state"],
            ["basis", "Linked source record"],
            ["scope / period", "Defined and versioned"],
            ["conclusion_state", "Named accountable authority"],
            ["open_questions", "Inspectable governed state"],
            ["limitations", "Linked source record"],
            ["follow-up", "Defined and versioned"],
            ["approval / attestation", "Named accountable authority"],
            ["effective / expiry", "Inspectable governed state"],
            ["history", "Linked source record"],
          ]}
        />

        <RecordCard
          id="exceptions"
          variant="light"
          icon={FileSearch}
          title="Exceptions"
          purpose="See governed gaps, reason, owner, and review."
          ruleText="An expired, overdue, or unresolved exception must never be silently treated as accepted."
          fields={[
            ["exception_id", "Defined and versioned"],
            ["subject", "Named accountable authority"],
            ["reason", "Inspectable governed state"],
            ["scope", "Linked source record"],
            ["owner", "Defined and versioned"],
            ["approval authority", "Named accountable authority"],
            ["compensating context", "Inspectable governed state"],
            ["risk relationship", "Linked source record"],
            ["opened / effective", "Defined and versioned"],
            ["review / expiry", "Named accountable authority"],
            ["closure basis", "Inspectable governed state"],
            ["evidence_refs", "Linked source record"],
          ]}
        />
      </div>
    </section>
  );
}
