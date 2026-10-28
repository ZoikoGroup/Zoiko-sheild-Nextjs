"use client";

import { useState } from "react";
import { Check, Copy, Download } from "lucide-react";
import type { Option } from "@/lib/public-assistant/contract";
import { get, post } from "../../api/client";
import { useAssistant } from "../../state/AssistantContext";
import { useLoad } from "../../shared/useLoad";
import { Button, ErrorNote, FlowHeading, Loading, SelectField } from "../../shared/ui";
import { Feedback } from "../../shared/Feedback";

interface QuestionsBody {
  personas: Option[];
  questions: { question_id: string; prompt: string; options: Option[] }[];
}
interface ChecklistBody {
  checklist: { topic_id: string; title: string; url: string; steps: { step_id: string; title: string; detail: string }[] }[];
  contact_enabled: boolean;
}

function asText(list: ChecklistBody["checklist"]): string {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  return list
    .map((t) => [`${t.title} (${origin}${t.url})`, ...t.steps.map((s, i) => `  ${i + 1}. ${s.title} — ${s.detail}`)].join("\n"))
    .join("\n\n");
}

export function OnboardingFlow() {
  const { state, navigate, config } = useAssistant();
  const [persona, setPersona] = useState("");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<{ data?: ChecklistBody; error?: unknown; loading: boolean }>({ loading: false });
  const [copied, setCopied] = useState(false);
  const questions = useLoad((signal) => get<QuestionsBody>(`onboarding/questions${persona ? `?persona=${encodeURIComponent(persona)}` : ""}`, signal), [persona]);

  const build = () => {
    setResult({ loading: true });
    post<ChecklistBody>("onboarding/checklists", { answers, market: state.market }).then(
      (data) => setResult({ data, loading: false }),
      (error) => setResult({ error, loading: false }),
    );
  };

  const copyList = async () => {
    try {
      await navigator.clipboard.writeText(asText(result.data!.checklist));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const download = () => {
    const blob = new Blob([`ZoikoShield onboarding checklist\n\n${asText(result.data!.checklist)}\n`], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "zoikoshield-onboarding-checklist.txt";
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="space-y-4 p-4">
      <FlowHeading title="Onboarding checklist" intro="Answer a few questions to get a checklist linked to our published guidance." />
      {questions.data && (
        <SelectField
          id="zs-onb-persona"
          label="Your role"
          value={persona}
          options={questions.data.personas}
          onChange={(v) => {
            setPersona(v);
            setAnswers({});
            setResult({ loading: false });
          }}
          placeholder="Any role"
        />
      )}
      {questions.loading && !questions.data && <Loading />}
      {questions.error ? <ErrorNote error={questions.error} onRetry={questions.retry} /> : null}
      {questions.data && (
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            build();
          }}
        >
          {questions.data.questions.map((q) => (
            <fieldset key={q.question_id}>
              <legend className="mb-1.5 text-sm font-medium">{q.prompt}</legend>
              <div className="space-y-1">
                {q.options.map((o) => (
                  <label key={o.id} className="flex items-center gap-2 text-sm">
                    <input type="radio" name={q.question_id} value={o.id} checked={answers[q.question_id] === o.id} onChange={() => setAnswers({ ...answers, [q.question_id]: o.id })} className="h-4 w-4 accent-zoiko-primary" />
                    {o.label}
                  </label>
                ))}
              </div>
            </fieldset>
          ))}
          <Button type="submit" className="w-full" disabled={Object.keys(answers).length === 0 || result.loading}>
            {result.loading ? "Building…" : "Build my checklist"}
          </Button>
        </form>
      )}

      {result.error ? <ErrorNote error={result.error} onRetry={build} /> : null}
      {result.data && (
        <section aria-live="polite" className="space-y-3">
          {result.data.checklist.length === 0 ? (
            <p className="text-sm">We don't have a checklist for those answers yet. Our onboarding team can help.</p>
          ) : (
            result.data.checklist.map((t) => (
              <div key={t.topic_id} className="rounded-xl border border-zoiko-border dark:border-white/10 p-3">
                <p className="text-sm font-semibold">{t.title}</p>
                <ol className="mt-1.5 list-decimal space-y-1 pl-5 text-sm">
                  {t.steps.map((s) => (
                    <li key={s.step_id}>
                      <span className="font-medium">{s.title}</span>
                      <span className="block text-xs text-zoiko-dark/70 dark:text-gray-300">{s.detail}</span>
                    </li>
                  ))}
                </ol>
                <a href={t.url} className="mt-1 inline-block text-xs font-medium text-zoiko-primary dark:text-[#ff8a8d] underline">
                  Source
                </a>
              </div>
            ))
          )}
          <div className="flex flex-wrap gap-2">
            {result.data.checklist.length > 0 && (
              <>
                <Button variant="secondary" onClick={copyList}>
                  {copied ? <Check className="h-4 w-4" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
                  {copied ? "Copied" : "Copy"}
                </Button>
                <Button variant="secondary" onClick={download}>
                  <Download className="h-4 w-4" aria-hidden />
                  Download
                </Button>
              </>
            )}
            {config?.intake.ONBOARDING && <Button onClick={() => navigate({ name: "intake", kind: "ONBOARDING" })}>Talk to onboarding</Button>}
          </div>
          <Feedback targetType="flow" targetId={`onboarding:${Object.values(answers).sort().join(",")}`} />
        </section>
      )}
    </div>
  );
}
