# ADR-21: Public Assistant architecture (proposal)

Status: Proposed  
Date: 2026-10-27  
Authors: Engineering (based on ZS-CHAT-MASTER-013 and WF01–WF12)

## Context

We need a chat widget for the public website for anonymous visitors with:
- answers using only approved public content and citing it
- guided deterministic flows (discovery, plan comparison, onboarding checklist, troubleshooting)
- intake requests with idempotent durable receipts delivered via outbox

Must never touch tenant data/SOC/SOAR, must never invent prices/certifications/connector support/"booked" states, and must fall back fully to static help when AI is off.

## Decisions

### D1. Dedicated backend app `backend/apps/shield-public-assistant` (port 3006)
- Separate process, DB role `shield_public_assistant_svc` with access only to `public_assistant` schema
- No routes to tenant/SOC/SOAR surfaces; own model credentials, own network policy, own kill switch
- Reuse pure pieces via new lib `backend/libs/ai-runtime`: ModelProvider interface and Gemini/OpenAI/Mock adapters, RedactionService, prompt-injection patterns, CitationValidatorService
- Copy patterns (not import): IdempotencyService, DistributedRateLimiterService, outbox publisher
- All controllers use `@PublicEndpoint()`-style metadata; no authenticated endpoints; admin/content endpoints internal-only

### D2. Frontend widget in `frontend/` behind strict same-origin proxy
- Components in `frontend/src/components/public-assistant/**`, lazy-loaded with `next/dynamic`
- Proxy at `frontend/src/app/api/public/chat/v1/[...path]/route.ts` forwarding only to `PUBLIC_ASSISTANT_URL` (default `http://127.0.0.1:3006`), strips cookies except assistant's own, strips `x-tenant-id` and `authorization`, never fabricates responses (do not reuse generic proxy)
- Mount via `PublicAssistantMount` in `app/layout.tsx`, allowlisted routes only; never on authenticated SOC pages
- Keep components decoupled for potential embeddable bundle

### D3. Canonical API `/api/public/chat/v1/*`
Single OpenAPI contract at `docs/public-assistant.openapi.yaml` (written before backend coding).

### D4. Retrieval = Postgres FTS over published content
- `public_assistant.source_chunk` with `tsvector` + GIN index, filter `status='PUBLISHED' AND classification='PUBLIC'`, effective window/market/locale
- Deterministic, instant withdrawal, no new infra; satisfies separate public index with own credentials
- Hybrid semantic (pgvector) later if needed

### D5. Content-as-code
- Content in `backend/apps/shield-public-assistant/content/` (YAML/Markdown with front-matter: owner/reviewer/status/market/locale/effective dates/claim_type)
- PR review = publication approval; CODEOWNERS per claim class
- `content:publish` validates schemas, computes checksums, upserts to DB
- Withdraw via `status: withdrawn` + publish; cache epoch bump invalidates answers immediately

### D6. Fail-closed AI pipeline, server decides outcome
1. classify (rules, WF12 priority order)
2. retrieve (FTS, top k)
3. generate (fixed system prompt, sources as delimited data, structured JSON)
4. validate (citations in retrieved set, URLs allowlisted, restricted claims need approved claim source)
5. finalize → `ANSWERED|LIMITED|ABSTAINED|REJECTED|ERROR`

Validate-then-stream (generate full answer, validate, stream sanitized blocks over SSE).  
Model provider TBD per ADR-11; build against `ModelProvider`, `mock` default, `assistant_ai_answers` OFF until decided.

### D7. Guest session
- `POST /sessions` only on first submitted message/flow action (not on page load)
- Server issues 256-bit token, stores SHA-256 hash in Redis (TTL) mirrored to `guest_session`; cookie `zs_pa_sid` `HttpOnly; Secure; SameSite=Strict; Path=/api/public/chat`
- Session has `session_epoch` to reject stale stream chunks
- CSRF: Origin allowlist + header `X-ZS-Assistant: 1`; rate limits (per-IP-hash, per-session, global token/cost) in Redis

### D8. Feature flags (master §14.1)
Stored in `public_assistant.feature_flag`, env override, via `GET /config`:
- `assistant_launcher` ON once G1 passes
- `assistant_ai_answers` OFF
- `assistant_lead_submit` OFF
- `assistant_support_submit` OFF
- `assistant_trust_gated` OFF
- `assistant_public_pricing` OFF
- `assistant_connector_claims` OFF
- `assistant_privacy_write` OFF
Global `assistant_kill` forces static mode.

## Amendment A1 (2026-10-27): v1 runs inside the website app

The widget ships on the marketing site (this repo), which deploys as a single Next.js process under PM2, with no Postgres or Redis. For v1 the backend runs in-process instead of as a separate service:

- **D1/D2:** The API is served by `src/app/api/public/chat/v1/[...path]/route.ts` → `src/server/public-assistant/router.ts`. There is no proxy, so there is no upstream that could fabricate responses. The module imports nothing from the platform and has no service URLs.
- **D4:** BM25 keyword retrieval over in-memory chunks of the content corpus. Eligibility is checked on every query, so withdrawal needs no reindex.
- **D5:** Content is TypeScript, not YAML: `src/server/public-assistant/content/corpus.ts`, typed by `content/types.ts`. Publishing means merge and deploy. Emergency withdrawal without a deploy: `PUBLIC_ASSISTANT_WITHDRAWN_IDS`.
- **D7:** Sessions, rate-limit buckets and message records live in process memory by default (correct for one PM2 instance). **A second instance needs a shared store (Redis) behind the same functions.** A store interface (`src/server/public-assistant/store.ts`) with in-memory default is provided; when `PUBLIC_ASSISTANT_REDIS_URL` is set a Redis-backed option is available via lazy-loaded `ioredis`.
- **D8:** Flags are env-only (`PUBLIC_ASSISTANT_FLAG_<KEY>=on|off`). There is no flag table.
- **Intake store:** append-only JSONL with fsync under `PUBLIC_ASSISTANT_DATA_DIR`. Each line holds the submission and its outbox event, and payloads are AES-256-GCM encrypted with `PUBLIC_ASSISTANT_INTAKE_KEY`.

The module's public surface is the router plus the shared contract (`src/lib/public-assistant/contract.ts`), so moving it into a dedicated service later is a transport change, not a rewrite.

## Consequences
- Clean isolation (no cross-surface calls)
- Deterministic safety posture
- Content governance via git
- Incremental rollout behind flags

## References
- ZS-CHAT-MASTER-013
- WF01–WF12
- Implementation Plan: AI_Assisstant/IMPLEMENTATION_PLAN.md
