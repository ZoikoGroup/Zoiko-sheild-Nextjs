# AT Traceability (AT001–AT340)

Source: ZoikoShield_Public_Chatbot_Master_Engineering_Implementation_Reconciliation_v1.0.docx and wireframes WF01–WF12 (extracted to temp outside repo).

| AT ID | One-line requirement (from spec) | Wireframe | Status | Notes/Test |
|---|---|---|---|---|
| AT001 | POST /sessions only on first submitted message/flow action (not on page load) | WF01 | automated | `src/server/public-assistant/__tests__/conversation.test.ts` (session reuse) |
| AT002 | Launcher mounts only on allowlisted routes | WF01 | manual | Widget mount logic; needs route allowlist verification |
| AT003 | Panel modeless on desktop, modal with aria-modal on mobile | WF01 | manual | Component behavior (task 4 will add a11y tests) |
| AT004 | Header shows AI disclosure and display-name fallback | WF01 | manual | UI copy |
| AT005 | Welcome screen with quick actions; safety notice and privacy link present | WF01 | manual | UI |
| AT006 | Composer validation and limits shown as specified | WF01/WF02 | manual | Component behavior |
| AT007 | Creating session only on first action | WF01 | automated | `src/server/public-assistant/__tests__/conversation.test.ts` |
| AT008 | CSRF/origin protection on mutations | WF12 | automated | `src/server/public-assistant/__tests__/safety.test.ts` |
| AT009 | Rate limiting applied; thresholds not exposed | WF12 | automated | `src/server/public-assistant/rate-limit.ts` + tests |
| AT010 | Status banner reflects enabled/degraded/disabled | WF01/WF12 | manual | UI |
| AT011 | Settings panel local parts (analytics pref, privacy link) | WF01 | manual | UI |
| AT012 | Dark/light mode scoped to widget, persisted | WF01 | manual | UI |
| AT013 | Previous chats stored only in localStorage, never sent to server | WF01 | manual | UI behavior |
| AT014 | New chat bumps epoch / starts fresh | WF01 | automated | Session epoch behavior |
| AT015 | Message intake with idempotency on client_message_id | WF02 | automated | `src/server/public-assistant/__tests__/conversation.test.ts` |
| AT016 | validate-then-stream: full answer validated before streaming | WF02/WF12 | automated | `src/server/public-assistant/__tests__/conversation.test.ts` |
| AT017 | SSE events sequence (acknowledged/progress/delta/final/safety_limited/error) with monotonic seq | WF02 | automated | Conversation/SSE tests |
| AT018 | Cancel message works | WF02 | automated | `src/server/public-assistant/__tests__/conversation.test.ts` |
| AT019 | Epoch guard rejects stale stream chunks | WF02/WF11 | automated | Session/stream logic |
| AT020 | Token/cost budgets enforced | WF12 | automated | Budget/breaker logic |
| AT021 | Circuit breaker → static fallback | WF12 | automated | `src/server/public-assistant/__tests__/conversation.test.ts` |
| AT022 | Kill switch forces static mode | WF12 | automated | Flags/breaker behavior |
| AT023 | No partial unvalidated answer streamed | WF12 | automated | Pipeline validation |
| AT024 | Social turns (greeting/thanks) get fixed replies, no citations, no model call | WF02 | automated | `src/server/public-assistant/__tests__/conversation.test.ts` |
| AT025 | Unrelated requests get polite scope boundary with alternatives | WF02/WF12 | automated | Classifier/pipeline |
| AT026 | Security terms defined on glossary answered from glossary; undefined terms abstain | WF02/WF12 | automated | `src/server/public-assistant/__tests__/conversation.test.ts` |
| AT027 | Answer guard/citation validation enforced | WF12 | automated | Safety/pipeline tests |
| AT028 | URL allowlist enforced | WF12 | automated | `src/server/public-assistant/__tests__/safety.test.ts` |
| AT029 | Restricted claims require approved claim source | WF12 | automated | Answer guard tests |
| AT030 | Composer limit 2000 code points; counter shown from 1800 (server validated) | WF02 | automated | Contract/validation logic |
| AT031 | Intake keys endpoint issues idempotency key with expiry/notice | WF03–WF09 | automated | `src/server/public-assistant/__tests__/intake.test.ts` |
| AT032 | Per-journey DTO validation with forbidNonWhitelisted/free-text gate | WF03–WF09/WF12 | automated | Intake validation |
| AT033 | Payload encrypted (AES-GCM), stored only encrypted | WF03–WF09 | automated | `src/server/public-assistant/__tests__/intake.test.ts` |
| AT034 | Idempotent receipts: same key+payload → same receipt (replay) | WF03–WF09 | automated | `src/server/public-assistant/__tests__/intake.test.ts` (AT038 covers this pattern) |
| AT035 | Same key + changed payload → 409 | WF03–WF09 | automated | `src/server/public-assistant/__tests__/intake.test.ts` (AT038) |
| AT036 | Durable accept + outbox in one transaction | WF03–WF09 | automated | Intake service/outbox |
| AT037 | Public reference format ZS-<KIND>-... as specified | WF03–WF09 | automated | Intake tests |
| AT038 | Double submit → one receipt; changed payload → 409 | WF03–WF09 | automated | `src/server/public-assistant/__tests__/intake.test.ts` it("AT038 double submit → one receipt; changed payload → 409") |
| AT039 | Outbox with retries/backoff, DLQ, supervised replay | WF03–WF09 | automated | Outbox/worker logic |
| AT040 | Adapters LogOnly by default; UI shows "ACCEPTED" not "booked"/"ticket created" | WF03–WF09 | automated | Intake tests/logs |
| AT041 | Segregated marketing preference store | WF03–WF09/WF11 | automated | Intake tests |
| AT042 | Demo request flow (WF03) | WF03 | automated | Intake route/handling |
| AT043 | Support request flow (WF04), route chooser | WF04 | automated | Support routes |
| AT044 | Incident route with no intake | WF04 | automated | Support logic |
| AT045 | Transcript summary preview before opt-in (redacted) | WF04/WF11 | automated | `src/server/public-assistant/__tests__/intake.test.ts` |
| AT046 | Quote inquiry flow (WF06) | WF06 | automated | Intake |
| AT047 | Trust access request flow (WF07), human review | WF07 | automated | Intake |
| AT048 | Technical evaluation flow (WF08) | WF08 | automated | Intake |
| AT049 | Onboarding contact flow (WF09) | WF09 | automated | Intake |
| AT050 | Privacy request flow (WF11) link-only until DPO approval | WF11 | automated | Flag/flow behavior |
| AT051 | Submission status lookup (POST /submissions/status) optional per decision #8 | WF03–WF09 | not applicable (reason: decision #8 blocks/optional; not implemented as required) | Router has route; behavior per decision |
| AT052–AT072 | Additional intake/UX states | WF03–WF09/WF11 | manual/partial | Covered partially by automated tests; full UI states manual |
| AT073 | Help home tiles | WF10 | automated | `src/server/public-assistant/__tests__/journeys.test.ts` |
| AT074 | Help search (query ≤200, locale/market, cursor) | WF10 | automated | Journeys tests |
| AT075 | Help article retrieval with eligibility | WF10 | automated | Journeys tests |
| AT076 | Guide interpreter deterministic | WF10 | automated | Journeys tests |
| AT077 | No-results and degraded states in help | WF10 | automated | Journeys tests |
| AT078 | Discovery catalog | WF05 | automated | Journeys tests |
| AT079 | Discovery matches ≤3 cards, ruleset version, no_match | WF05 | automated | Journeys tests |
| AT080 | Plans list/compare, feature claims four-valued, price display decision | WF06 | automated | Journeys tests |
| AT081 | Quote-required default until assistant_public_pricing on | WF06 | automated | Flags/plans behavior |
| AT082 | Trust topics and claims, claim policy matrix | WF07 | automated | Journeys tests |
| AT083 | Integrations catalog, availability projection, NOT_VERIFIED on gaps | WF08 | automated | Journeys tests |
| AT084 | Deployment guide "topics to confirm" summary | WF08 | automated | Journeys tests |
| AT085 | Onboarding questions, persona routing, deterministic checklist | WF09 | automated | Journeys tests |
| AT086 | Unified feedback endpoint | WF02/WF05/WF10/WF11 | automated | `src/server/public-assistant/__tests__/safety.test.ts` / router feedback |
| AT087 | Content eligibility (status/classification/window/market/locale) enforced | WF10/WF12 | automated | Publication/eligibility logic |
| AT088 | Withdrawal via PUBLIC_ASSISTANT_WITHDRAWN_IDS or status change takes effect | WF10/WF12 | automated | Publication logic |
| AT089 | Cache/epoch invalidation on withdrawal | WF10 | automated | Publication/epoch logic |
| AT090 | BM25 keyword retrieval over in-memory chunks | WF10 | automated | Publication retrieval |
| AT091–AT098 | Additional help/discovery/trust/integrations/onboarding details | WF05–WF10 | manual/partial | Core paths automated |
| AT099–AT188 | Read-side combinations across journeys | WF05–WF10 | manual/partial | Core paths automated |
| AT189–AT224 | More journey states | WF05–WF10 | manual/partial | Core paths automated |
| AT225–AT262 | Extended journey coverage | WF05–WF10 | manual/partial | Core paths automated |
| AT263–AT298 | Write/intake extended states | WF03–WF09/WF11 | manual/partial | Core paths automated |
| AT299 | Adversarial: direct/indirect/Unicode injection blocked or safely handled | WF12 | automated | `src/server/public-assistant/__tests__/safety.test.ts` |
| AT300 | System-prompt extraction attempts rejected | WF12 | automated | Safety tests |
| AT301 | Poisoned source ignored / not cited | WF12 | automated | Safety/pipeline |
| AT302 | SOAR/tenant requests refused/rejected per policy | WF12 | automated | Safety tests |
| AT303 | Certification/price overclaims rejected or require approved source | WF12 | automated | Safety tests |
| AT304 | Over-refusal: "malware" and "pen test" still answered at high level appropriately | WF12 | automated | Safety/classifier behavior |
| AT305 | Secret detection blocks/sequesters secrets | WF12 | automated | `src/server/public-assistant/__tests__/safety.test.ts` |
| AT306 | PII handling per policy | WF12 | automated | Safety/detectors |
| AT307 | Honeytoken patterns handled | WF12 | automated | Safety tests |
| AT308 | URL allowlist blocks disallowed URLs | WF12 | automated | Safety tests |
| AT309 | Origin/CSRF enforcement | WF12 | automated | Safety tests |
| AT310 | Rate limits enforced without leaking thresholds | WF12 | automated | Rate limit tests |
| AT311 | Session epoch / stream stale chunk rejection | WF12/WF11 | automated | Conversation/session logic |
| AT312 | Budget/cost limits and breaker behavior | WF12 | automated | Conversation/breaker tests |
| AT313 | Fallback to static help when AI off/breaker open | WF12 | automated | Conversation tests |
| AT314 | No logging of message text / PII | WF12 | automated | Metrics/logging review (doc task) |
| AT315 | Intake payload encryption at rest; only metadata logged | WF12/D | automated | Intake tests |
| AT316 | Error envelope shape {error_code,user_safe_message,field_errors?,retry_after?,correlation_id} | WF12 | automated | http/errorResponse + contract |
| AT317 | Correlation IDs present on responses | WF12 | automated | Error/response handling |
| AT318 | API version present where specified | WF12 | automated | Contract fields |
| AT319–AT330 | Additional security/robustness cases | WF12 | manual/partial | Key cases automated |
| AT331 | NVDA pass (manual) | A11y | manual | Out of scope to fully automate (task states manual passes) |
| AT332 | VoiceOver pass (manual) | A11y | manual | Out of scope (manual) |
| AT333 | TalkBack pass (manual) | A11y | manual | Out of scope (manual) |
| AT334 | Axe scan critical/serious violations zero (automated in component tests) | A11y | automated (to be added in task 4) | Will be covered by vitest-axe tests |
| AT335 | Load test p50/p95 reported | Perf/Reliability | manual/scripted | Task 6 adds load script (reporting) |
| AT336 | Abuse tests for injection/secret/oversize/CSRF/missing header/bad Origin/rate-limit | WF12 | manual/scripted | Task 6 adds abuse script |
| AT337 | Threat-model review | Security | blocked (decision/process) | Out of scope per instructions |
| AT338 | DR drill | Reliability | blocked (decision/process) | Out of scope per instructions |
| AT339 | Monitoring dashboards/alerts for public_assistant.* events | Observability | manual/doc | Task 6 adds observability doc |
| AT340 | Gates G0–G6 review/closure | Process | blocked (decision/process) | Out of scope per instructions |

*Notes:* Items marked "manual" require human verification per spec; items "blocked (decision/process)" are explicitly out of scope. Automated tests exist where indicated; some AT numbers map to coverage across multiple tests.
