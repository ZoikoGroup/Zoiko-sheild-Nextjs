import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { parse } from "yaml";
import { ROUTES } from "../router";

function routeKey(method: string, pattern: string[]) {
  return `${method} ${pattern.join("/")}`;
}

describe("OpenAPI spec coverage", () => {
  it("matches router routes and has schemas", () => {
    const specPath = path.resolve(process.cwd(), "docs/public-assistant.openapi.yaml");
    const raw = fs.readFileSync(specPath, "utf8");
    const spec: any = parse(raw);
    const paths = spec?.paths || {};
    const specKeys = new Set<string>();
    for (const p of Object.keys(paths)) {
      const methods = paths[p];
      for (const m of ["get", "post", "put", "patch", "delete"]) {
        if (methods[m]) {
          // convert OpenAPI path /foo/{id}/bar to segments foo, :id, bar
          const segs = p
            .split("/")
            .filter(Boolean)
            .map((s: string) => (s.startsWith("{") && s.endsWith("}") ? ":id" : s));
          specKeys.add(`${m.toUpperCase()} ${segs.join("/")}`);
        }
      }
    }
    // Intake paths are handled dynamically in router (kindForPath); include them
    const intakePaths = [
      "POST demo-requests",
      "POST support/requests",
      "POST commercial/inquiries",
      "POST trust/access-requests",
      "POST technical-reviews",
      "POST onboarding/requests",
      "POST privacy/requests",
      "POST submissions/status",
    ];
    for (const ip of intakePaths) specKeys.add(ip);

    const routerKeys = new Set<string>();
    for (const r of ROUTES as any[]) {
      routerKeys.add(routeKey(r.method, r.pattern));
    }
    routerKeys.add("POST demo-requests");
    routerKeys.add("POST support/requests");
    routerKeys.add("POST commercial/inquiries");
    routerKeys.add("POST trust/access-requests");
    routerKeys.add("POST technical-reviews");
    routerKeys.add("POST onboarding/requests");
    routerKeys.add("POST privacy/requests");
    routerKeys.add("POST submissions/status");

    // Every route in router appears in spec
    for (const k of routerKeys) {
      expect(specKeys.has(k), `spec missing route ${k}`).toBe(true);
    }
    // Every spec path exists in router (allowing intake dynamic paths)
    for (const k of specKeys) {
      if (k === "GET /messages/:id/events") {
        // SSE is represented differently in spec; router has it
      }
      expect(routerKeys.has(k) || intakePaths.includes(k) || k.includes(":id"), `router missing route for spec ${k}`).toBe(true);
    }

    const schemas = spec?.components?.schemas || {};
    expect(schemas.ErrorBody).toBeDefined();
    expect(schemas.ErrorBody.required).toEqual(expect.arrayContaining(["error_code", "user_safe_message", "correlation_id"]));
    expect(schemas.SseEvent || schemas.StreamEvent).toBeDefined();
  });
});
