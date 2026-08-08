# Architecture Overview

> **Status:** Draft
> **Owner:** Shubham Nagula
> **Last Updated:** August 2026

---

## Purpose

Documents the technical architecture of `portfolio-v1` — decisions made, patterns adopted, and constraints acknowledged. Updated as Sprint 1 produces concrete technology choices.

---

## Table of Contents

1. [Rendering Strategy](#rendering-strategy)
2. [Data Flow](#data-flow)
3. [Component Model](#component-model)
4. [Content Strategy](#content-strategy)
5. [External Integrations](#external-integrations)
6. [Decision Log Index](#decision-log-index)

---

## Rendering Strategy

| Page | Strategy | Rationale |
|---|---|---|
| Home | Static (SSG) | No dynamic data; maximum cache benefit |
| About | Static (SSG) | Content changes infrequently |
| Services | Static (SSG) | No real-time data required |
| Projects | Static (SSG) + ISR | GitHub data refreshed on interval |
| Case Studies | Static (SSG) | Long-form content from filesystem |
| Blog | Static (SSG) + ISR | MDX from filesystem; periodic rebuild |
| Contact | Static shell + API route | Form POST handled server-side |

---

## Data Flow

```
Content Layer (MDX / JSON files)
        │
        ▼
Build-time data fetching (getStaticProps / generateStaticParams)
        │
        ▼
Static HTML + minimal JS hydration
        │
        ▼
Edge CDN (Vercel / Cloudflare)
        │
        ▼
Browser
```

---

## Component Model

```
src/components/
├── ui/           ← Primitive building blocks (Button, Card, Badge, etc.)
├── layout/       ← Page-level structural components (Header, Footer, Nav)
├── sections/     ← Page section components (Hero, Services, Projects)
└── shared/       ← Cross-cutting components (SEO, Analytics, ThemeProvider)
```

**Rules:**
- `ui/` components are pure — no data fetching, no side effects
- `sections/` components receive all data via props
- Data fetching lives exclusively in `src/lib/` and page-level server components

---

## Content Strategy

All content is file-system-based in Phase 1. No CMS dependency.

```
content/
├── blog/           ← MDX files: one file per article
├── case-studies/   ← MDX files: one file per case study
└── projects/       ← JSON or MDX: project metadata
```

Phase 2+ will evaluate a headless CMS if the content volume justifies it.

---

## External Integrations

| Integration | Purpose | Phase | API |
|---|---|---|---|
| GitHub API | Project data, contribution graph | 2 | REST v3 / GraphQL v4 |
| Email service | Contact form delivery | 1 | Resend / SendGrid |
| Analytics | Pageview and event tracking | 1 | Plausible / Vercel Analytics |
| Newsletter | Subscriber management | 2 | ConvertKit / Buttondown |

---

## Decision Log Index

| ADR | Title | Status |
|---|---|---|
| ADR-000 | Template | — |
| ADR-001 | Framework selection | Pending |
| ADR-002 | Styling approach | Pending |
| ADR-003 | Content layer | Pending |
| ADR-004 | Deployment platform | Pending |
