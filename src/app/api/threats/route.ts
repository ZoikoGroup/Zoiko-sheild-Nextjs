import { NextResponse } from "next/server";
import { INITIAL_THREATS, SITE_CONFIG } from "@/constants";

export async function GET() {
  return NextResponse.json({
    status: "OK",
    gridStatus: SITE_CONFIG.shieldStatus,
    activeNodes: SITE_CONFIG.activeNodes,
    recentThreats: INITIAL_THREATS,
    timestamp: new Date().toISOString(),
  });
}
