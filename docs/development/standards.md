# Development Standards

> **Status:** Approved
> **Owner:** Shubham Nagula
> **Last Updated:** August 2026

---

## Purpose

Defines the coding standards, conventions, and quality gates for all application code in `portfolio-v1`. These standards apply to every PR, regardless of author.

---

## Table of Contents

1. [TypeScript Standards](#typescript-standards)
2. [Component Standards](#component-standards)
3. [Styling Standards](#styling-standards)
4. [Accessibility Standards](#accessibility-standards)
5. [Performance Standards](#performance-standards)
6. [Testing Standards](#testing-standards)

---

## TypeScript Standards

- **No `any`** — use `unknown` and narrow, or type the value properly
- **Explicit return types** on all exported functions and utility helpers
- **Interface over type alias** for object shapes describing entities
- **Type alias** for unions, intersections, and computed types
- **Co-locate types** — types for a component live in the same file or a sibling `.types.ts`
- **Global types** — shared types in `src/types/`

```ts
// Good
export function formatDate(date: Date): string { ... }

// Bad
export function formatDate(date: any) { ... }
```

---

## Component Standards

- One component per file
- File name matches component name (PascalCase)
- Default export is the component
- Named exports for types and utilities from the same file
- Props interface defined above the component
- No business logic inside components — call utilities from `src/lib/`

```tsx
// Good — Hero.tsx
interface HeroProps {
  headline: string;
  subheadline: string;
}

export default function Hero({ headline, subheadline }: HeroProps) {
  return ( ... );
}
```

---

## Styling Standards

> Specific rules depend on styling technology chosen in Sprint 1.

General rules regardless of technology:
- Design tokens (colors, spacing, typography) are defined centrally — never hard-coded
- No inline styles except for dynamic values that cannot be expressed as classes
- Responsive design is mobile-first
- Dark mode support is planned from the start — do not hard-code light colors

---

## Accessibility Standards

All components must meet WCAG 2.1 Level AA:

- **Images** — descriptive `alt` on all meaningful images; `alt=""` on decorative images
- **Buttons** — always have visible label or `aria-label`
- **Links** — link text is descriptive; no "click here"
- **Forms** — every input has a visible `<label>` or `aria-label`
- **Focus** — visible focus ring on all interactive elements; never `outline: none` without a replacement
- **Color** — no information conveyed by color alone; minimum contrast ratio 4.5:1 for body text
- **Motion** — respect `prefers-reduced-motion`; animations are not required for content comprehension

Automated testing: `axe-core` runs in CI on every PR.

---

## Performance Standards

| Metric | Target |
|---|---|
| Lighthouse Performance | > 95 |
| Lighthouse Accessibility | 100 |
| Lighthouse SEO | 100 |
| LCP | < 2.5s |
| CLS | < 0.1 |

Rules:
- All images use `next/image` (or equivalent) — auto-optimization, lazy loading, correct sizing
- Fonts loaded with `display: swap` and subset to used characters
- No third-party scripts that block rendering
- Bundle size monitored — alert threshold TBD at Sprint 1

---

## Testing Standards

| Layer | Tool | Coverage Target |
|---|---|---|
| Unit | Vitest | Critical utilities: 90%+ |
| Component | Testing Library | Key components: happy path + edge cases |
| E2E | Playwright | All user journeys: happy path |
| Accessibility | axe-core | Zero critical violations |
| Visual | Playwright screenshots | Key pages (optional) |

Testing rules:
- Tests live alongside the code they test (`ComponentName.test.tsx`)
- E2E tests live in `tests/e2e/`
- No mocking of internal modules — mock only external APIs
- Test descriptions use plain English: `it('renders a contact form with required fields')`
