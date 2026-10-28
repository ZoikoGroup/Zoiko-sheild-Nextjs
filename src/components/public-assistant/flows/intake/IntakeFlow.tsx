"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Copy } from "lucide-react";
import { INTAKE, validateFields, type IntakeKind, type Receipt, type SubmissionKeyBody } from "@/lib/public-assistant/contract";
import { AssistantApiError, postWithSession } from "../../api/client";
import { useAssistant } from "../../state/AssistantContext";
import { transcriptOf } from "../../state/machine";
import { Button, ErrorNote, FlowHeading, Loading, RouteButton } from "../../shared/ui";
import { copy } from "../../copy/en-US";

const FALLBACK_ROUTE: Record<IntakeKind, string> = {
  DEMO: "demo",
  SUPPORT: "support",
  QUOTE: "pricing",
  TRUST_ACCESS: "trust_center",
  TECH_EVAL: "integration_request",
  ONBOARDING: "contact",
  PRIVACY: "privacy_request",
};

type Step = "form" | "review" | "submitting" | "receipt" | "uncertain";

/** A submit that hangs past this is treated like a dropped connection: "we couldn't confirm" (WF03 AT040). */
const SUBMIT_TIMEOUT_MS = 20_000;

export function IntakeFlow({ kind }: { kind: IntakeKind }) {
  const { config, route, state } = useAssistant();
  const spec = INTAKE[kind];
  const enabled = !!config?.intake[kind];
  const fallback = route(FALLBACK_ROUTE[kind]) ?? route("contact");

  if (!enabled) {
    return (
      <div className="space-y-3 p-4">
        <FlowHeading title={spec.title} intro={spec.intro} />
        <p className="text-sm">{copy.intake.disabled}</p>
        {fallback && <RouteButton link={fallback} />}
      </div>
    );
  }
  return <IntakeForm kind={kind} market={state.market} />;
}

function IntakeForm({ kind, market }: { kind: IntakeKind; market: string }) {
  const { state, route } = useAssistant();
  const spec = INTAKE[kind];
  const [key, setKey] = useState<{ data?: SubmissionKeyBody; error?: unknown }>({});
  const [values, setValues] = useState<Record<string, string>>({ market: market === "global" ? "" : market });
  const [noticeAck, setNoticeAck] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [share, setShare] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [step, setStep] = useState<Step>("form");
  const [receipt, setReceipt] = useState<(Receipt & { receipt_note: string }) | null>(null);
  const [failure, setFailure] = useState<unknown>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const transcript = transcriptOf(state.thread);
  const canShare = kind === "SUPPORT" && transcript.length > 0;

  const loadKey = () => {
    setKey({});
    postWithSession<SubmissionKeyBody>("submissions/keys", { journey: kind, market }).then(
      (data) => setKey({ data }),
      (error) => setKey({ error }),
    );
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(loadKey, [kind]);

  /** A fresh key (and the current notice version) without blanking the form. */
  const renewKey = () =>
    postWithSession<SubmissionKeyBody>("submissions/keys", { journey: kind, market }).then(
      (data) => setKey({ data }),
      (error) => setFailure(error),
    );

  useEffect(() => {
    if (Object.keys(errors).length) summaryRef.current?.focus();
  }, [errors]);

  useEffect(() => {
    // Show exactly what will be shared before the visitor opts in (WF04/WF11).
    if (!share || !canShare) return setPreview(null);
    postWithSession<{ summary: string | null }>("support/summary-preview", { transcript }).then(
      (r) => setPreview(r.summary),
      () => setPreview(null),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [share]);

  if (key.error) return <div className="p-4"><ErrorNote error={key.error} onRetry={loadKey} /></div>;
  if (!key.data) return <div className="p-4"><Loading label={copy.intake.loading} /></div>;
  const form = key.data.form;

  const review = () => {
    const found = validateFields(form.fields, values);
    if (!noticeAck) found.notice_ack = "Please confirm you've read the privacy notice.";
    setErrors(found);
    if (Object.keys(found).length === 0) setStep("review");
  };

  const send = async () => {
    setStep("submitting");
    setFailure(null);
    const fields = Object.fromEntries(Object.entries(values).filter(([, v]) => v.trim()));
    try {
      const r = await postWithSession<Receipt & { receipt_note: string }>(spec.path, {
        idempotency_key: key.data!.idempotency_key,
        notice_version: key.data!.notice_version,
        notice_ack: noticeAck,
        marketing_opt_in: marketing,
        locale: navigator.language,
        fields,
        ...(kind === "SUPPORT" ? { transcript_share: share && canShare, transcript: share && canShare ? transcript : undefined } : {}),
      }, AbortSignal.timeout(SUBMIT_TIMEOUT_MS));
      setReceipt(r);
      setStep("receipt");
    } catch (error) {
      if (error instanceof AssistantApiError && error.uncertain) {
        // We don't know whether it landed (including a timeout): retrying with the same key is safe (replay, not duplicate).
        setStep("uncertain");
      } else if (error instanceof AssistantApiError && error.body.error_code === "NOTICE_CHANGED") {
        // The notice changed under the visitor: load the current one and ask them to confirm it again (WF06 AT116).
        setNoticeAck(false);
        setFailure(error);
        setStep("form");
        void renewKey();
      } else {
        if (error instanceof AssistantApiError && error.body.field_errors) setErrors(error.body.field_errors);
        setFailure(error);
        setStep(error instanceof AssistantApiError && error.body.field_errors ? "form" : "review");
      }
    }
  };

  const startOver = () => {
    setReceipt(null);
    setStep("form");
    setFailure(null);
    loadKey();
  };

  /** After "already sent with different details" (409): send the edited details as a new request, keeping what was typed (WF03 AT041). */
  const sendAsNew = () => {
    setFailure(null);
    setStep("form");
    void renewKey();
  };
  const conflict = failure instanceof AssistantApiError && failure.body.error_code === "IDEMPOTENCY_CONFLICT";
  const contact = route("contact") ?? route("support");

  if (step === "receipt" && receipt) return <SubmissionReceipt receipt={receipt} title={spec.title} />;

  if (step === "uncertain") {
    return (
      <div className="space-y-3 p-4" role="alert">
        <p className="text-base font-semibold">{copy.intake.uncertainTitle}</p>
        <p className="text-sm">{copy.intake.uncertainBody}</p>
        <div className="flex gap-2">
          <Button onClick={send}>{copy.intake.retrySame}</Button>
          <Button variant="secondary" onClick={startOver}>
            {copy.intake.startOver}
          </Button>
        </div>
      </div>
    );
  }

  const errorList = Object.entries(errors);
  const label = (name: string) => form.fields.find((f) => f.name === name)?.label ?? (name === "notice_ack" ? "Privacy notice" : name);
  const display = (name: string, v: string) => form.fields.find((f) => f.name === name)?.options?.find((o) => o.id === v)?.label ?? v;
  const notice = copy.intake.notice(key.data.notice_url);

  return (
    <div className="space-y-4 p-4">
      <FlowHeading title={spec.title} intro={spec.intro} />

      {errorList.length > 0 && step === "form" && (
        <div ref={summaryRef} tabIndex={-1} role="alert" className="rounded-lg border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/40 p-3 text-sm text-red-800 dark:text-red-300 outline-none">
          <p className="font-semibold">{copy.intake.errorsTitle}</p>
          <ul className="mt-1 list-disc pl-5">
            {errorList.map(([name, message]) => (
              <li key={name}>
                <a href={`#zs-f-${name}`} className="underline">
                  {label(name)}: {message}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {failure && !(failure instanceof AssistantApiError && failure.body.field_errors) ? (
        <div className="space-y-2">
          <ErrorNote error={failure} />
          <div className="flex flex-wrap gap-2">
            {conflict && (
              <Button variant="secondary" onClick={sendAsNew}>
                {copy.intake.startOver}
              </Button>
            )}
            {/* A human route is always one tap away when sending fails (WF03 AT042). */}
            {contact && <RouteButton link={contact} />}
          </div>
        </div>
      ) : null}

      {step === "form" ? (
        <form
          noValidate
          className="space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            review();
          }}
        >
          {form.fields.map((f) => {
            const id = `zs-f-${f.name}`;
            const common = {
              id,
              name: f.name,
              value: values[f.name] ?? "",
              "aria-invalid": !!errors[f.name],
              "aria-describedby": [errors[f.name] && `${id}-error`, f.hint && `${id}-hint`].filter(Boolean).join(" ") || undefined,
              "aria-required": f.required,
              className:
                "w-full rounded-lg border border-zoiko-border dark:border-white/10 bg-white dark:bg-[#111d28] px-2.5 py-2 text-sm focus:border-zoiko-primary focus:outline-none focus:ring-2 focus:ring-zoiko-primary/20 aria-[invalid=true]:border-red-600",
            };
            const set = (v: string) => setValues((s) => ({ ...s, [f.name]: v }));
            return (
              <div key={f.name}>
                <label htmlFor={id} className="mb-1 block text-xs font-medium text-zoiko-dark/80 dark:text-gray-200">
                  {f.label}
                  {f.required ? <span aria-hidden> *</span> : <span className="font-normal text-zoiko-dark/50 dark:text-gray-400"> (optional)</span>}
                </label>
                {f.type === "select" ? (
                  <select {...common} onChange={(e) => set(e.target.value)}>
                    <option value="">Choose…</option>
                    {f.options?.map((o) => (
                      <option key={o.id} value={o.id}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                ) : f.type === "textarea" ? (
                  <textarea {...common} rows={4} maxLength={f.max * 2} onChange={(e) => set(e.target.value)} />
                ) : (
                  <input {...common} type={f.type} autoComplete={f.type === "email" ? "email" : f.name === "contact_name" ? "name" : f.name === "organization" ? "organization" : undefined} onChange={(e) => set(e.target.value)} />
                )}
                {f.hint && (
                  <p id={`${id}-hint`} className="mt-1 text-[11px] text-zoiko-dark/50 dark:text-gray-400">
                    {f.hint}
                  </p>
                )}
                {errors[f.name] && (
                  <p id={`${id}-error`} className="mt-1 text-xs text-red-700 dark:text-red-300">
                    {errors[f.name]}
                  </p>
                )}
              </div>
            );
          })}

          {canShare && (
            <div className="rounded-lg border border-zoiko-border dark:border-white/10 p-3">
              <label className="flex items-start gap-2 text-sm">
                <input type="checkbox" checked={share} onChange={(e) => setShare(e.target.checked)} className="mt-0.5 h-4 w-4 accent-zoiko-primary" />
                Include a redacted summary of this chat
              </label>
              {share && preview && <pre className="mt-2 max-h-32 overflow-auto whitespace-pre-wrap rounded bg-zoiko-beige/60 dark:bg-white/5 p-2 text-[11px]">{preview}</pre>}
            </div>
          )}

          <ConsentChecks noticeAck={noticeAck} setNoticeAck={setNoticeAck} marketing={marketing} setMarketing={setMarketing} notice={notice} error={errors.notice_ack} showMarketing={kind !== "PRIVACY" && kind !== "SUPPORT"} />

          <Button type="submit" className="w-full">
            {copy.intake.continue}
          </Button>
        </form>
      ) : (
        <div className="space-y-3">
          <h4 className="text-sm font-semibold">{copy.intake.review}</h4>
          <dl className="divide-y divide-zoiko-border dark:divide-white/10 rounded-xl border border-zoiko-border dark:border-white/10 text-sm">
            {form.fields
              .filter((f) => values[f.name]?.trim())
              .map((f) => (
                <div key={f.name} className="px-3 py-2">
                  <dt className="text-xs text-zoiko-dark/60 dark:text-gray-400">{f.label}</dt>
                  <dd className="whitespace-pre-wrap break-words">{display(f.name, values[f.name] ?? "")}</dd>
                </div>
              ))}
            {share && canShare && (
              <div className="px-3 py-2">
                <dt className="text-xs text-zoiko-dark/60 dark:text-gray-400">Chat summary</dt>
                <dd>Included (redacted)</dd>
              </div>
            )}
            <div className="px-3 py-2">
              <dt className="text-xs text-zoiko-dark/60 dark:text-gray-400">Product updates</dt>
              <dd>{marketing ? "Yes" : "No"}</dd>
            </div>
          </dl>
          <div className="flex gap-2">
            <Button variant="secondary" onClick={() => setStep("form")} disabled={step === "submitting"}>
              {copy.intake.edit}
            </Button>
            <Button className="flex-1" onClick={send} disabled={step === "submitting"}>
              {step === "submitting" ? copy.intake.submitting : copy.intake.submit}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function ConsentChecks({
  noticeAck,
  setNoticeAck,
  marketing,
  setMarketing,
  notice,
  error,
  showMarketing,
}: {
  noticeAck: boolean;
  setNoticeAck: (v: boolean) => void;
  marketing: boolean;
  setMarketing: (v: boolean) => void;
  notice: { before: string; link: string; after: string; url: string };
  error?: string;
  showMarketing: boolean;
}) {
  return (
    <div className="space-y-2 text-sm">
      <div>
        <label className="flex items-start gap-2">
          <input id="zs-f-notice_ack" type="checkbox" checked={noticeAck} onChange={(e) => setNoticeAck(e.target.checked)} aria-invalid={!!error} aria-describedby={error ? "zs-f-notice_ack-error" : undefined} className="mt-0.5 h-4 w-4 accent-zoiko-primary" />
          <span>
            {notice.before}
            <a href={notice.url} target="_blank" rel="noopener" className="text-zoiko-primary dark:text-[#ff8a8d] underline">
              {notice.link}
            </a>
            {notice.after}
          </span>
        </label>
        {error && (
          <p id="zs-f-notice_ack-error" className="mt-1 text-xs text-red-700 dark:text-red-300">
            {error}
          </p>
        )}
      </div>
      {/* Marketing consent is separate and unchecked by default. */}
      {showMarketing && (
        <label className="flex items-start gap-2">
          <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} className="mt-0.5 h-4 w-4 accent-zoiko-primary" />
          <span>{copy.intake.marketing}</span>
        </label>
      )}
    </div>
  );
}

function SubmissionReceipt({ receipt, title }: { receipt: Receipt & { receipt_note: string }; title: string }) {
  const [copied, setCopied] = useState(false);
  const heading = useRef<HTMLParagraphElement>(null);
  useEffect(() => heading.current?.focus(), []);
  return (
    <div className="space-y-3 p-4">
      <p ref={heading} tabIndex={-1} className="flex items-center gap-2 text-base font-semibold outline-none">
        <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" aria-hidden />
        {copy.intake.receiptTitle}
      </p>
      <p className="text-sm text-zoiko-dark/70 dark:text-gray-300">{title}</p>
      <div className="rounded-xl border border-zoiko-border dark:border-white/10 bg-zoiko-beige/60 dark:bg-white/5 p-3">
        <p className="text-xs text-zoiko-dark/60 dark:text-gray-400">{copy.intake.reference}</p>
        <p className="font-mono text-base font-semibold tracking-wide">{receipt.public_reference}</p>
        <button
          type="button"
          onClick={() => navigator.clipboard.writeText(receipt.public_reference).then(() => setCopied(true), () => undefined)}
          className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-zoiko-primary dark:text-[#ff8a8d]"
        >
          <Copy className="h-3 w-3" aria-hidden />
          {copied ? copy.intake.copied : copy.intake.copyRef}
        </button>
      </div>
      <p className="text-sm">{receipt.receipt_note}</p>
    </div>
  );
}
