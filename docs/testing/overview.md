# Testing Overview

> **Status:** Draft — Finalized at Sprint 1
> **Owner:** Shubham Nagula
> **Last Updated:** August 2026

---

## Purpose

Defines the testing strategy, tooling, and quality gates for `portfolio-v1`.

---

## Testing Pyramid

```
         ┌─────┐
         │ E2E │        ← Few; cover critical user journeys
         ├─────┴──────┐
         │ Integration │ ← API routes, data fetching utilities
         ├────────────┴─────┐
         │    Unit / Component│ ← Most tests; logic and UI components
         └─────────────────────┘
```

---

## Test Directory Structure

```
tests/
├── unit/         ← Pure function and utility tests
├── integration/  ← API route and integration tests
└── e2e/          ← Playwright end-to-end tests
    ├── home.spec.ts
    ├── contact.spec.ts
    ├── blog.spec.ts
    └── navigation.spec.ts
```

Component tests (`*.test.tsx`) live alongside their components in `src/`.

---

## Quality Gates (CI)

Every PR must pass:
- [ ] All unit and component tests
- [ ] All E2E tests (happy path)
- [ ] Zero axe-core accessibility violations
- [ ] TypeScript: zero type errors
- [ ] ESLint: zero errors
- [ ] Lighthouse CI: Performance >95, Accessibility 100, SEO 100

---

## Coverage Targets

| Layer | Target |
|---|---|
| Utility functions (`src/lib/`) | 90%+ branch coverage |
| UI components | Key paths covered — not 100% required |
| E2E | All user journeys: Home → Services → Contact |

---

## Key Test Cases (Planned)

| Journey | Test Type | Priority |
|---|---|---|
| Visit home page — renders without error | E2E | Must |
| Submit contact form with valid data | E2E | Must |
| Submit contact form with invalid email | E2E | Must |
| Navigate to all primary pages | E2E | Must |
| Blog article renders correctly | E2E | Must |
| Case study renders correctly | E2E | Must |
| Mobile navigation opens and closes | E2E | Must |
| Dark mode toggle persists state | E2E | Should |
| 404 page renders for unknown routes | E2E | Must |
