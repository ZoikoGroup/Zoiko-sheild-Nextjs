import { SecurityMetric, ShieldFeature, SecurityNode, ThreatEvent } from "@/types";

export const SITE_CONFIG = {
  name: "Zoiko Shield",
  description: "Next-Gen Autonomous Cyber Defense & Real-Time Threat Neutralization Platform",
  version: "v4.2.0-LTS",
  shieldStatus: "ACTIVE_NEUTRALIZING",
  responseSla: "< 3.8ms",
  uptime: "99.999%",
  activeNodes: 18450,
};

export const INITIAL_METRICS: SecurityMetric[] = [
  {
    title: "Threats Blocked Today",
    value: "2,489,120",
    change: "+12.4%",
    isPositive: true,
    unit: "attacks",
    iconName: "Shield",
  },
  {
    title: "Average Mitigation Time",
    value: "3.42",
    change: "-18.5%",
    isPositive: true,
    unit: "milliseconds",
    iconName: "Zap",
  },
  {
    title: "Active Perimeter Nodes",
    value: "18,450",
    change: "+450 new",
    isPositive: true,
    unit: "edge clusters",
    iconName: "Server",
  },
  {
    title: "Quantum Key Integrity",
    value: "100.00%",
    change: "Zero Breach",
    isPositive: true,
    unit: "lattice security",
    iconName: "Lock",
  },
];

export const INITIAL_THREATS: ThreatEvent[] = [
  {
    id: "TH-9842",
    timestamp: "19:46:12",
    type: "Zero-Day Exploit",
    severity: "CRITICAL",
    sourceIp: "185.220.101.5",
    targetNode: "US-EAST-VA-04",
    actionTaken: "Blocked & Neutralized",
    responseLatencyMs: 2.8,
  },
  {
    id: "TH-9841",
    timestamp: "19:45:58",
    type: "DDoS Attack",
    severity: "HIGH",
    sourceIp: "45.154.255.82",
    targetNode: "EU-CENTRAL-FRA-01",
    actionTaken: "Encrypted & Rerouted",
    responseLatencyMs: 3.1,
  },
  {
    id: "TH-9840",
    timestamp: "19:45:21",
    type: "SQL Injection",
    severity: "MEDIUM",
    sourceIp: "103.251.170.19",
    targetNode: "AP-SOUTH-MUM-02",
    actionTaken: "Quarantined",
    responseLatencyMs: 1.9,
  },
  {
    id: "TH-9839",
    timestamp: "19:44:03",
    type: "API Anomaly",
    severity: "LOW",
    sourceIp: "194.26.29.112",
    targetNode: "US-WEST-OR-01",
    actionTaken: "Isolated",
    responseLatencyMs: 4.2,
  },
];

export const SHIELD_FEATURES: ShieldFeature[] = [
  {
    id: "feat-ai",
    title: "Autonomous AI Sentinel",
    tagline: "Predictive Neural Defensive Mesh",
    description: "Deep learning models anticipate attack vectors 800ms before payload execution, neutralizing threats autonomously without human intervention.",
    category: "Autonomous AI",
    metrics: "99.998% Detection Accuracy",
    icon: "Cpu",
    accentColor: "#FF2A5F",
  },
  {
    id: "feat-quant",
    title: "Quantum-Resistant Tunneling",
    tagline: "Post-Quantum Lattice Encryption",
    description: "NIST-standardized post-quantum cryptography protects all intra-node communications against future decryption threats.",
    category: "Encryption",
    metrics: "Kyber-1024 Lattice Hardened",
    icon: "Lock",
    accentColor: "#00F0FF",
  },
  {
    id: "feat-peri",
    title: "Multi-Cloud Edge Perimeter",
    tagline: "Global Anycast Scrubbing Network",
    description: "Over 18,000 edge nodes globally absorb up to 120 Tbps DDoS attacks with sub-4ms latency overhead.",
    category: "Perimeter",
    metrics: "120 Tbps Scrub Capacity",
    icon: "Server",
    accentColor: "#A855F7",
  },
  {
    id: "feat-comp",
    title: "Zero-Trust Enforcement Engine",
    tagline: "Continuous Micro-Segmentation",
    description: "Real-time behavioral identity verification ensures micro-segmented workload access with zero inherent trust.",
    category: "Compliance",
    metrics: "SOC2 Type II & ISO 27001",
    icon: "Shield",
    accentColor: "#10B981",
  },
];

export const SECURITY_NODES: SecurityNode[] = [
  { id: "NODE-US-E", name: "US-East HyperScale", region: "N. Virginia, USA", status: "DEFENDING", loadPercentage: 42, threatsIntercepted24h: 842100 },
  { id: "NODE-EU-C", name: "EU-Central Node", region: "Frankfurt, DE", status: "ONLINE", loadPercentage: 35, threatsIntercepted24h: 621400 },
  { id: "NODE-AP-S", name: "AP-South Gateway", region: "Mumbai, IN", status: "DEFENDING", loadPercentage: 58, threatsIntercepted24h: 498300 },
  { id: "NODE-AP-E", name: "AP-East Hub", region: "Tokyo, JP", status: "ONLINE", loadPercentage: 29, threatsIntercepted24h: 312500 },
];
