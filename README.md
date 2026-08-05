# Zoiko Shield Frontend

Next-Gen Autonomous Cyber Defense & Real-Time Threat Neutralization Platform built with **Next.js**, **React**, **strict TypeScript**, **Node.js 24 LTS**, and **Tailwind CSS**.

## Project Directory Structure

```
project/
├── src/
│   ├── app/                  # Next.js App Router Pages & API Routes
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── api/
│   │   │   └── threats/route.ts
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   └── not-found.tsx
│   ├── components/           # Modular Reusable Components
│   │   ├── common/           # Badge, Button, Card
│   │   ├── ui/               # ThreatStream, MetricsGrid, FeatureCard, DemoModal
│   │   ├── layout/           # Navbar, Footer
│   │   └── forms/            # ContactForm
│   ├── lib/                  # Library utilities
│   ├── hooks/                # Custom React hooks (useThreatStream)
│   ├── utils/                # Utility & formatting functions
│   ├── services/             # Security simulation services
│   ├── types/                # Strict TypeScript interfaces
│   ├── constants/            # Site metrics & threat constants
│   ├── context/              # Security React Context state
│   ├── store/                # Client state management
│   └── styles/               # Global CSS & Tailwind imports
├── public/                   # Static assets & icons
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run local development server:
   ```bash
   npm run dev
   ```

3. Typecheck:
   ```bash
   npm run typecheck
   ```

4. Build production distribution:
   ```bash
   npm run build
   ```
