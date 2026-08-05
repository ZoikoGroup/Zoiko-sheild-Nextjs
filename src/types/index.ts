export interface ThreatEvent {
  id: string;
  timestamp: string;
  type: "DDoS Attack" | "Zero-Day Exploit" | "SQL Injection" | "Ransomware Payload" | "Brute Force" | "API Anomaly";
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  sourceIp: string;
  targetNode: string;
  actionTaken: "Blocked & Neutralized" | "Quarantined" | "Encrypted & Rerouted" | "Isolated";
  responseLatencyMs: number;
}

export interface SecurityMetric {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  unit: string;
  iconName: "Shield" | "Zap" | "Activity" | "Lock" | "Server" | "Cpu";
}

export interface ShieldFeature {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "Autonomous AI" | "Perimeter" | "Encryption" | "Compliance";
  metrics: string;
  icon: string;
  accentColor: string;
}

export interface SecurityNode {
  id: string;
  name: string;
  region: string;
  status: "ONLINE" | "DEFENDING" | "SYNCING" | "MAINTENANCE";
  loadPercentage: number;
  threatsIntercepted24h: number;
}
