# Getting Started

> **Status:** Draft — Updated at Sprint 1
> **Owner:** Shubham Nagula
> **Last Updated:** August 2026

---

## Purpose

Step-by-step guide to set up a local development environment for `portfolio-v1`. Updated when Sprint 1 completes and the application scaffold is in place.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Setup](#setup)
3. [Environment Variables](#environment-variables)
4. [Development Server](#development-server)
5. [Running Tests](#running-tests)
6. [Project Scripts](#project-scripts)
7. [Troubleshooting](#troubleshooting)

---

## Prerequisites

| Tool | Version | Notes |
|---|---|---|
| Node.js | 20.x LTS | Use `nvm` or `fnm` to manage versions |
| npm / pnpm | Latest | pnpm recommended for performance |
| Git | 2.x+ | — |
| VS Code | Latest | Recommended editor — see extensions below |

**Recommended VS Code Extensions:**
- ESLint
- Prettier
- Tailwind CSS IntelliSense (if using Tailwind)
- TypeScript and JavaScript Language Features
- MDX

---

## Setup

```bash
# 1. Clone the repository
git clone https://github.com/your-username/portfolio-v1.git
cd portfolio-v1

# 2. Install dependencies
npm install

# 3. Copy environment variables
cp .env.example .env.local
# Then edit .env.local and fill in required values

# 4. Start the development server
npm run dev
```

---

## Environment Variables

See `.env.example` for all available variables and their purpose.

Required for local development:
- `NEXT_PUBLIC_SITE_URL` — Set to `http://localhost:3000`
- `CONTACT_EMAIL_TO` — Your email for contact form delivery
- `RESEND_API_KEY` — Obtain from resend.com

---

## Development Server

```bash
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Production build
npm run start      # Serve production build locally
npm run lint       # Run ESLint
npm run typecheck  # Run TypeScript compiler check
```

---

## Running Tests

```bash
npm run test           # Unit tests (Vitest)
npm run test:e2e       # End-to-end tests (Playwright)
npm run test:coverage  # Coverage report
```

---

## Project Scripts

| Script | Purpose |
|---|---|
| `scripts/validate-env.js` | Check required env vars are set |
| `scripts/generate-sitemap.js` | Generate XML sitemap |
| `scripts/check-links.js` | Validate internal links |

---

## Troubleshooting

**Port 3000 already in use:**
```bash
npm run dev -- -p 3001
```

**Node version mismatch:**
```bash
nvm use   # If .nvmrc is present
```

**Environment variable errors:**
Ensure `.env.local` exists and all required keys are populated. Run `node scripts/validate-env.js`.
