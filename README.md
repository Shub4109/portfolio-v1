# portfolio-v1

> **Personal brand platform and consulting hub for Shubham Nagula — Senior Data Engineering Consultant.**

[![Status](https://img.shields.io/badge/status-pre--development-blue)]()
[![License](https://img.shields.io/badge/license-MIT-green)]()
[![Version](https://img.shields.io/badge/version-0.1.0-orange)]()

---

## What This Is

A premium personal brand platform built as a long-term business asset — not a template portfolio. It is the central hub for:

- Professional branding and consulting services
- Enterprise data engineering case studies
- Technical blog and architecture articles
- Open-source project showcase
- Freelance client lead generation

**Target audience:** CTOs, Engineering Managers, Startup Founders, and Enterprise Technology Teams seeking senior data engineering expertise.

---

## Repository Structure

```
portfolio-v1/
├── .github/              # GitHub configuration (issue templates, PR template, CODEOWNERS)
├── docs/                 # All project documentation (product, architecture, design, etc.)
├── specs/                # Feature specification documents
├── prompts/              # Engineering prompt library (one prompt per feature/task)
├── public/               # Static assets (images, icons, fonts)
├── content/              # Managed content (blog posts, case studies, project data)
├── src/                  # Application source code
│   ├── app/              # Next.js App Router pages and layouts
│   ├── components/       # Shared UI components
│   ├── lib/              # Utility functions and data-fetching helpers
│   ├── hooks/            # Custom React hooks
│   ├── styles/           # Global styles and design tokens
│   └── types/            # TypeScript type definitions
├── tests/                # Test suites (unit, integration, e2e)
└── scripts/              # Automation and utility scripts
```

---

## Quick Start

> **Note:** Application code has not yet been scaffolded. This section will be updated at Sprint 1.

```bash
# Clone the repository
git clone https://github.com/your-username/portfolio-v1.git
cd portfolio-v1

# Install dependencies (after Sprint 1)
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

---

## Documentation

| Document | Location | Purpose |
|---|---|---|
| Architecture | `ARCHITECTURE.md` | System design decisions |
| Roadmap | `ROADMAP.md` | Feature timeline and phases |
| Changelog | `CHANGELOG.md` | Version history |
| Contributing | `CONTRIBUTING.md` | How to contribute |
| Product Docs | `docs/product/` | Business and product context |
| Dev Docs | `docs/development/` | Setup, conventions, workflow |
| Feature Specs | `specs/` | Per-feature specifications |
| Prompt Library | `prompts/` | Engineering prompts per task |

---

## Development Workflow

See [CONTRIBUTING.md](./CONTRIBUTING.md) for full branch naming, commit conventions, PR process, and coding standards.

```
main          → production-ready, protected
develop       → integration branch
feature/*     → new features
fix/*         → bug fixes
docs/*        → documentation changes
chore/*       → tooling, config, maintenance
```

---

## Current Phase

| Phase | Status |
|---|---|
| Discovery & Requirements | Complete |
| Repository Bootstrap | Complete |
| Sprint 1 — Application Scaffold | Pending |
| Sprint 2 — Core Pages | Pending |
| Sprint 3 — Blog & Case Studies | Pending |
| Sprint 4 — GitHub Integration | Pending |

---

## Contact

**Shubham Nagula** — Senior Data Engineering Consultant
- Email: shubham07nagula@gmail.com
- GitHub: [@shubhamnagula](https://github.com/shubhamnagula)
- LinkedIn: [linkedin.com/in/shubhamnagula](https://linkedin.com/in/shubhamnagula)
