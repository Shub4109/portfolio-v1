# Architecture

> **Status:** Draft — Pre-Development
> **Owner:** Shubham Nagula
> **Last Updated:** August 2026

---

## Overview

This document describes the architectural decisions for `portfolio-v1`. It is updated as decisions are made. For the decision log, see `docs/decisions/`.

---

## System Context

```
                    ┌─────────────────────────────────┐
                    │         portfolio-v1             │
                    │   (Next.js — App Router)         │
                    └──────────────┬──────────────────┘
                                   │
              ┌────────────────────┼────────────────────┐
              │                    │                    │
     ┌────────▼──────┐   ┌─────────▼──────┐  ┌────────▼───────┐
     │  GitHub API   │   │  Email Service │  │  Analytics     │
     │  (projects)   │   │  (contact form)│  │  (pageviews)   │
     └───────────────┘   └────────────────┘  └────────────────┘
```

---

## Technology Decisions

> Technology selection will be finalized in Sprint 1. This section tracks the rationale for decisions once made.

| Layer | Decision | Rationale | Decided |
|---|---|---|---|
| Framework | TBD | — | Pending |
| Styling | TBD | — | Pending |
| Content | TBD | — | Pending |
| Deployment | TBD | — | Pending |
| Analytics | TBD | — | Pending |
| Email | TBD | — | Pending |

---

## Architectural Principles

1. **Static-first** — Pages that can be static, should be static. Dynamic rendering only where required.
2. **Content separation** — Application code and content are maintained independently.
3. **Zero client JavaScript where possible** — Ship less JavaScript; achieve more with HTML and CSS.
4. **Incremental enhancement** — Start simple; complexity is added only when justified by a clear need.
5. **Single deployment target** — One hosting provider; no multi-cloud complexity at this stage.

---

## Directory Architecture

See `README.md` for the full directory tree. Key principles:

- `src/app/` — page routes only; no business logic
- `src/components/` — UI components are pure and reusable; no data fetching
- `src/lib/` — all data fetching and external integrations
- `content/` — all managed content lives here, not in the database
- `specs/` — specifications are written before code is written

---

## Performance Targets

| Metric | Target | Standard |
|---|---|---|
| Largest Contentful Paint | < 2.5s | Core Web Vitals — Good |
| First Contentful Paint | < 1.5s | — |
| Cumulative Layout Shift | < 0.1 | Core Web Vitals — Good |
| Time to Interactive | < 3.5s | — |
| Lighthouse Performance | > 95 | — |
| Lighthouse Accessibility | 100 | — |
| Lighthouse SEO | 100 | — |

---

## Decision Log

Architecture Decision Records are stored in `docs/decisions/`. See `docs/decisions/adr-000-template.md` for the format.
