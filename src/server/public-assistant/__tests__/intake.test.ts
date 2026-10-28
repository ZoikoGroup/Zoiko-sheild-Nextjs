import { mkdtempSync, readFileSync, rmSync } from "fs";
import { tmpdir } from "os";
import path from "path";
import { afterAll, beforeAll, beforeEach, describe, expect, it } from "vitest";
import { randomBytes } from "crypto";
import { call, session } from "./helpers";
import { setFlagOverride } from "../flags";
import { resetStore, store } from "../intake/store";
import { drain } from "../intake/delivery";

let dir: string;

beforeAll(() => {
  dir = mkdtempSync(path.join(tmpdir(), "zs-pa-intake-"));
  process.env.PUBLIC_ASSISTANT_DATA_DIR = dir;
  process.env.PUBLIC_ASSISTANT_INTAKE_KEY = randomBytes(32).toString("base64");
  process.env.PUBLIC_ASSISTANT_NOTICE_VERSION = "2026-10-test";
  resetStore();
});

afterAll(() => {
  setFlagOverride("assistant_lead_submit", undefined);
  delete process.env.PUBLIC_ASSISTANT_DATA_DIR;
  delete process.env.PUBLIC_ASSISTANT_INTAKE_KEY;
  delete process.env.PUBLIC_ASSISTANT_NOTICE_VERSION;
  resetStore();
  rmSync(dir, { recursive: true, force: true });
});

beforeEach(() => setFlagOverride("assistant_lead_submit", true));

const fields = { work_email: "pat@example.com", contact_name: "Pat", organization: "Example Co", market: "US", message: "We'd like a walkthrough." };

async function demoKey(cookie: string) {
  const res = await call("POST", "submissions/keys", { cookie, body: { journey: "DEMO" } });
  expect(res.status).toBe(201);
  return res.body;
}

const submitDemo = (cookie: string, key: string, overrides: Record<string, unknown> = {}) =>
  call("POST", "demo-requests", { cookie, body: { idempotency_key: key, notice_version: "2026-10-test", notice_ack: true, fields, ...overrides } });

describe("Phase D intake", () => {
  it("stays off while the journey flag is off", async () => {
    setFlagOverride("assistant_lead_submit", false);
    const cookie = await session();
    expect((await call("POST", "submissions/keys", { cookie, body: { journey: "DEMO" } })).status).toBe(403);
    expect((await call("GET", "config")).body.intake.DEMO).toBe(false);
  });

  it("issues a key with a resolved form", async () => {
    const cookie = await session();
    const key = await demoKey(cookie);
    expect(key.notice_version).toBe("2026-10-test");
    expect(key.form.fields.find((f: { name: string }) => f.name === "market").options.length).toBeGreaterThan(0);
  });

  it("AT038 double submit → one receipt; changed payload → 409", async () => {
    const cookie = await session();
    const { idempotency_key } = await demoKey(cookie);
    const first = await submitDemo(cookie, idempotency_key);
    expect(first.status).toBe(201);
    expect(first.body.status).toBe("ACCEPTED");
    expect(first.body.public_reference).toMatch(/^ZS-DEMO-[A-Z2-9]{10}$/);
    const again = await submitDemo(cookie, idempotency_key);
    expect(again.status).toBe(200);
    expect(again.body.public_reference).toBe(first.body.public_reference);
    const changed = await submitDemo(cookie, idempotency_key, { fields: { ...fields, organization: "Other Co" } });
    expect(changed.status).toBe(409);
  });

  it("replays after a restart (in-memory key state lost)", async () => {
    const cookie = await session();
    const { idempotency_key } = await demoKey(cookie);
    const first = await submitDemo(cookie, idempotency_key);
    resetStore();
    const again = await submitDemo(cookie, idempotency_key);
    expect(again.body.submission_id).toBe(first.body.submission_id);
  });

  it("validates fields, consent, unknown fields and secrets in free text", async () => {
    const cookie = await session();
    const { idempotency_key } = await demoKey(cookie);
    const bad = await submitDemo(cookie, idempotency_key, { notice_ack: false, fields: { ...fields, work_email: "nope", market: "Mars" } });
    expect(bad.status).toBe(422);
    expect(Object.keys(bad.body.field_errors)).toEqual(expect.arrayContaining(["work_email", "market", "notice_ack"]));
    expect((await submitDemo(cookie, idempotency_key, { fields: { ...fields, phone: "1" } })).status).toBe(400);
    const secret = await submitDemo(cookie, idempotency_key, { fields: { ...fields, message: "password: hunter2hunter2" } });
    expect(secret.body.field_errors.message).toBeDefined();
    expect((await submitDemo(cookie, idempotency_key, { notice_version: "old" })).status).toBe(409);
  });

  it("rejects a key issued to another session or journey", async () => {
    const mine = await session();
    const theirs = await session();
    const { idempotency_key } = await demoKey(mine);
    expect((await submitDemo(theirs, idempotency_key)).status).toBe(410);
  });

  it("stores contact details only encrypted, segregates marketing consent, and delivers via the outbox", async () => {
    const cookie = await session();
    const { idempotency_key } = await demoKey(cookie);
    const res = await submitDemo(cookie, idempotency_key, { marketing_opt_in: true });
    await drain();
    const submissions = readFileSync(path.join(dir, "submissions.jsonl"), "utf8");
    expect(submissions).not.toContain("pat@example.com");
    expect(submissions).not.toContain("Example Co");
    expect(readFileSync(path.join(dir, "marketing-preferences.jsonl"), "utf8")).not.toContain("pat@example.com");
    const s = await store();
    expect(s.deliveries.get(`${res.body.submission_id}:CRM`)?.state).toBe("DELIVERED");
  });
});
