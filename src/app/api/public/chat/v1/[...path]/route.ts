import { handle } from "@/server/public-assistant/router";

// Public Assistant API (plan §3). Served in-process: there is no upstream to
// proxy to, so nothing here can fabricate a response for a missing backend.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Params = { params: Promise<{ path: string[] }> };

export async function GET(req: Request, { params }: Params) {
  return handle(req, (await params).path);
}

export async function POST(req: Request, { params }: Params) {
  return handle(req, (await params).path);
}
