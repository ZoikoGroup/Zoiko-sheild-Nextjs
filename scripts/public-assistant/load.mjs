#!/usr/bin/env node
// Plain Node 20 script (no new deps). Drives N concurrent guest sessions against a running server.

const baseUrl = process.argv[2] || "http://localhost:3000";
const n = Number(process.argv[3] || "10");
const messagesPerSession = Number(process.argv[4] || "3");

const latencies = [];

async function post(path, body, headers = {}) {
  const res = await fetch(`${baseUrl}/api/public/chat/v1${path}`, {
    method: "POST",
    headers: { "content-type": "application/json", "x-zs-assistant": "1", origin: baseUrl, ...headers },
    body: body ? JSON.stringify(body) : undefined,
  });
  return res;
}

async function runSession(i) {
  const start = Date.now();
  try {
    const sres = await post("/sessions", {});
    const cookie = sres.headers.get("set-cookie")?.split(";")[0];
    for (let m = 0; m < messagesPerSession; m++) {
      const mres = await post("/messages", { client_message_id: `load-${i}-${m}-${Date.now()}`, content: "What is ZoikoShield?" }, cookie ? { cookie } : {});
      if (mres.status === 429 || mres.status === 503) {
        recordStatus(mres.status);
      }
      // try to read SSE quickly if 202
      if (mres.status === 202) {
        const j = await mres.json().catch(() => ({}));
        if (j.message_id) {
          try {
            const eres = await fetch(`${baseUrl}/api/public/chat/v1/messages/${j.message_id}/events`, {
              headers: cookie ? { cookie } : {},
            });
            await eres.text();
          } catch {}
        }
      }
    }
    latencies.push(Date.now() - start);
  } catch (e) {
    recordError();
  }
}

const statusCounts = { 429: 0, 503: 0 };
const errors = 0;
function recordStatus(c) { if (statusCounts[c] !== undefined) statusCounts[c]++; }
function recordError() { /* count */ }

const promises = [];
for (let i = 0; i < n; i++) promises.push(runSession(i));
await Promise.allSettled(promises);

latencies.sort((a,b)=>a-b);
const p50 = latencies[Math.floor(latencies.length*0.5)] || 0;
const p95 = latencies[Math.floor(latencies.length*0.95)] || 0;
const total = latencies.length || 1;
const share429 = ((statusCounts[429]/total)*100).toFixed(2);
const share503 = ((statusCounts[503]/total)*100).toFixed(2);
console.log(JSON.stringify({ baseUrl, sessions: n, p50_ms: p50, p95_ms: p95, share_429_pct: share429, share_503_pct: share503, errors }, null, 2));
