# Public Assistant Observability

All logging goes through `logEvent(...)` in `src/server/public-assistant/metrics.ts`. **No message text is ever logged.** Only metadata (counts, outcomes, kinds, targets, codes) is recorded.

## Log events

| Event | Fields (no message text) | Purpose |
|---|---|---|
| `public_assistant.session.create` | `ip_hash` (via context) | Session created |
| `public_assistant.session.clear` | — | Session cleared / epoch bumped |
| `public_assistant.message` | `id`, `outcome`, `mode` (`ai` or `static`), `sync` (bool), `citations` (count), `blocks` (count) | Message processed (outcome recorded) |
| `public_assistant.answer` | `outcome`, `mode`, `sync`, `at` | Answer finalized |
| `public_assistant.sse` | `id`, `event` (`acknowledged`/`progress`/`delta`/`final`/`safety_limited`/`error`) | SSE events emitted |
| `public_assistant.cancel` | `id` | Message cancelled |
| `public_assistant.feedback` | `kind` (`message`/`flow`/`discovery`), `outcome` (`helpful`/`not_helpful`), `reason` (optional code) | Feedback recorded (deduplicated per session/target) |
| `public_assistant.intake.key` | `kind`, `flag` | Intake key issued |
| `public_assistant.intake.submit` | `kind`, `outcome` (`accepted`/`replay`/`conflict`/`error`), `public_reference` (if accepted) | Intake submission result |
| `public_assistant.delivery.log_only` | `target` (`CRM`/`HELPDESK`/`PRIVACY`/`EMAIL`), `submission_id`, `kind`, `public_reference` | Delivery attempted (log-only in v1) |
| `public_assistant.rate_limit` | `bucket` (`read`/`write`/`message`/`submit`) | Rate limit triggered |
| `public_assistant.breaker.open` | — | Circuit breaker opened |
| `public_assistant.breaker.closed` | — | Circuit breaker closed |

Notes:
- Correlation IDs are returned in error responses and present in request context; they are not logged as free-form message content.
- PII/contact details only go into encrypted intake payloads; logs contain IDs and codes only.

## Dashboards and alert thresholds (per master spec §14.2)

| Metric | Dashboard | Alert threshold | Notes |
|---|---|---|---|
| `breaker_open` | Public Assistant / Reliability | Alert if breaker opens and stays open > 5 min (or opens > N times/hour) | Forces static fallback; investigate provider/budgets |
| `abstain rate` | Public Assistant / Quality | Alert if abstain rate > 25% over 15 min (baseline dependent on traffic) | May indicate retrieval issues or over-strict guardrails |
| `ERROR rate` | Public Assistant / Reliability | Alert if ERROR outcomes > 2% over 10 min | Failures in pipeline; check budgets/circuit breaker |
| `429 rate` | Public Assistant / Traffic | Alert if 429 rate > 5% over 5 min | Possible abuse or misconfigured limits; do not leak thresholds |
| `dead-letter deliveries` | Public Assistant / Intake | Alert if dead-letter count increases or DLQ depth > 0 for > 10 min | Outbox delivery failures; requires supervised replay |
| `latency p95` | Public Assistant / Performance | Alert if p95 latency > 2000ms over 10 min | Check model/provider latency or retrieval; validate-then-stream should keep this reasonable |

Recommended panels:
- Outcomes over time (ANSWERED/LIMITED/ABSTAINED/REJECTED/ERROR)
- Mode (ai/static) and breaker state
- Intake submissions by kind and outcome
- Rate limits by bucket
- SSE event rates
- Fallback link usage
