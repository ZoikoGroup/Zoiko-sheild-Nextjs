import { INITIAL_METRICS, INITIAL_THREATS, SECURITY_NODES } from "@/constants";
import { ThreatEvent, SecurityMetric, SecurityNode } from "@/types";
import { generateRandomIp } from "@/utils";

export const securityService = {
  getMetrics: (): SecurityMetric[] => INITIAL_METRICS,
  getThreats: (): ThreatEvent[] => INITIAL_THREATS,
  getNodes: (): SecurityNode[] => SECURITY_NODES,

  generateSimulatedThreat: (): ThreatEvent => {
    const types: Array<ThreatEvent["type"]> = [
      "DDoS Attack",
      "Zero-Day Exploit",
      "SQL Injection",
      "Ransomware Payload",
      "Brute Force",
      "API Anomaly",
    ];
    const severities: Array<ThreatEvent["severity"]> = ["CRITICAL", "HIGH", "MEDIUM", "LOW"];
    const actions: Array<ThreatEvent["actionTaken"]> = [
      "Blocked & Neutralized",
      "Quarantined",
      "Encrypted & Rerouted",
      "Isolated",
    ];
    const nodes = ["US-EAST-VA-04", "EU-CENTRAL-FRA-01", "AP-SOUTH-MUM-02", "US-WEST-OR-01"];

    const now = new Date();
    const timeStr = now.toTimeString().split(" ")[0] || "19:47:00";

    const randomType = types[Math.floor(Math.random() * types.length)] ?? "DDoS Attack";
    const randomSeverity = severities[Math.floor(Math.random() * severities.length)] ?? "HIGH";
    const randomAction = actions[Math.floor(Math.random() * actions.length)] ?? "Blocked & Neutralized";
    const randomNode = nodes[Math.floor(Math.random() * nodes.length)] ?? "US-EAST-VA-04";

    return {
      id: `TH-${Math.floor(1000 + Math.random() * 9000)}`,
      timestamp: timeStr,
      type: randomType,
      severity: randomSeverity,
      sourceIp: generateRandomIp(),
      targetNode: randomNode,
      actionTaken: randomAction,
      responseLatencyMs: Number((1.5 + Math.random() * 3).toFixed(2)),
    };
  },
};
