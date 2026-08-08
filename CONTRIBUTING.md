# Contributing

> This document defines how all development work on `portfolio-v1` is conducted.
> It applies to all contributors, including the primary maintainer.

---

## Table of Contents

1. [Branch Naming](#branch-naming)
2. [Commit Convention](#commit-convention)
3. [Semantic Versioning](#semantic-versioning)
4. [Pull Request Process](#pull-request-process)
5. [Definition of Ready](#definition-of-ready)
6. [Definition of Done](#definition-of-done)
7. [Review Checklist](#review-checklist)
8. [Coding Standards](#coding-standards)
9. [Documentation Standards](#documentation-standards)

---

## Branch Naming

```
<type>/<short-description>

Examples:
  feature/blog-index-page
  feature/github-integration
  fix/contact-form-validation
  fix/mobile-nav-overflow
  docs/update-architecture
  chore/upgrade-dependencies
  chore/configure-eslint
  release/v1.0.0
```

**Rules:**
- All lowercase, hyphen-separated
- Branched from `develop` (never from `main` directly, except `release/`)
- Short descriptions — 2–5 words maximum
- Delete branch after merging

---

## Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

```
<type>(<scope>): <short description>

[optional body]

[optional footer]
```

**Types:**

| Type | When to use |
|---|---|
| `feat` | New feature or user-visible capability |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | Formatting, whitespace — no logic change |
| `refactor` | Code restructuring — no feature or fix |
| `perf` | Performance improvement |
| `test` | Adding or updating tests |
| `chore` | Build process, tooling, dependencies |
| `ci` | CI/CD configuration |
| `revert` | Reverting a previous commit |

**Examples:**

```
feat(blog): add category filter with URL state
fix(contact): validate email format before submission
docs(readme): update development setup instructions
chore(deps): upgrade next to v14.2.0
perf(images): convert hero to webp and add blur placeholder
```

**Rules:**
- Subject line ≤ 72 characters
- Use present tense: "add feature" not "added feature"
- Atomic commits — one logical change per commit
- Reference issue numbers in the footer: `Closes #12`

---

## Semantic Versioning

```
MAJOR.MINOR.PATCH

0.1.0  — Repository bootstrap
0.2.0  — Sprint 1: core pages scaffold
1.0.0  — First public launch
1.1.0  — Blog and case studies
2.0.0  — Breaking redesign or architecture change
```

---

## Pull Request Process

1. Create a branch from `develop`
2. Write code; commit atomically
3. Ensure all tests pass locally
4. Self-review using the Review Checklist below
5. Open a PR against `develop`; use the PR template
6. Request review (for solo projects, self-review after 24-hour cooldown)
7. Squash-merge into `develop` after approval
8. Delete source branch
9. Merge `develop` into `main` only at release boundaries

---

## Definition of Ready

A task is ready to start when:
- [ ] Specification exists in `specs/`
- [ ] Acceptance criteria are defined
- [ ] Dependencies are identified
- [ ] Prompt is available in `prompts/` (if AI-assisted)

---

## Definition of Done

A task is done when:
- [ ] Feature matches the specification
- [ ] All acceptance criteria are met
- [ ] Tests are written and passing
- [ ] Lighthouse scores meet targets (Performance >95, Accessibility 100, SEO 100)
- [ ] No TypeScript errors
- [ ] No accessibility violations (axe-core)
- [ ] PR reviewed and merged
- [ ] CHANGELOG.md updated
- [ ] Relevant documentation updated

---

## Review Checklist

```
Code Quality
  [ ] Logic is clear and readable
  [ ] No unnecessary complexity
  [ ] No commented-out code
  [ ] No console.log or debug statements

TypeScript
  [ ] No `any` types without justification
  [ ] Props are typed
  [ ] Return types are explicit on utility functions

Accessibility
  [ ] Images have descriptive alt text
  [ ] Interactive elements are keyboard-navigable
  [ ] ARIA labels are accurate
  [ ] Focus order is logical

Performance
  [ ] Images are optimized
  [ ] No unnecessary client-side JavaScript
  [ ] Data fetching uses correct rendering strategy

SEO
  [ ] Page has unique title and meta description
  [ ] Open Graph tags are present
  [ ] Canonical URL is set

Testing
  [ ] Unit tests cover critical logic
  [ ] E2E test covers happy path

Documentation
  [ ] Spec is updated if scope changed
  [ ] CHANGELOG.md entry added
```

---

## Coding Standards

- **No magic numbers** — use named constants
- **No inline styles** — use design tokens or utility classes
- **Component size** — if a component exceeds 150 lines, consider splitting it
- **Naming** — descriptive names; no abbreviations (except well-known: `id`, `url`, `api`)
- **Comments** — explain *why*, not *what*; the code explains what
- **Error handling** — all async operations must handle errors explicitly

---

## Documentation Standards

Every document must include at the top:

```markdown
> **Status:** [Draft | Review | Approved | Deprecated]
> **Owner:** Shubham Nagula
> **Last Updated:** [Date]
```

- Use sentence case for headings
- Use tables for structured comparisons
- Use numbered lists for sequences; bullet lists for non-ordered sets
- Keep documents short — link out rather than duplicate
