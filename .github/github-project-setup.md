# GitHub Project Setup Guide

> **Owner:** Shubham Nagula
> **Last Updated:** August 2026

This document defines the recommended GitHub configuration for `portfolio-v1`. These settings are applied manually in the GitHub repository settings.

---

## Branch Protection Rules

### `main`

| Rule | Setting |
|---|---|
| Require pull request before merging | Yes |
| Required approvals | 1 (self-review after 24h for solo projects) |
| Dismiss stale reviews on new commits | Yes |
| Require status checks to pass | Yes |
| Status checks required | lint, typecheck, test, lighthouse-ci |
| Require branches to be up to date | Yes |
| Restrict force pushes | Yes |
| Restrict deletions | Yes |

### `develop`

| Rule | Setting |
|---|---|
| Require pull request before merging | Yes |
| Required approvals | 1 |
| Require status checks to pass | Yes |
| Status checks required | lint, typecheck, test |

---

## Labels

| Label | Color | Description |
|---|---|---|
| `bug` | `#d73a4a` | Something isn't working |
| `enhancement` | `#a2eeef` | New feature or improvement |
| `documentation` | `#0075ca` | Documentation changes |
| `performance` | `#fbca04` | Performance improvement |
| `accessibility` | `#e4e669` | Accessibility fix or improvement |
| `seo` | `#0e8a16` | SEO related change |
| `triage` | `#ededed` | Needs investigation |
| `priority: high` | `#b60205` | High priority |
| `priority: medium` | `#fbca04` | Medium priority |
| `priority: low` | `#0075ca` | Low priority |
| `phase: 1` | `#c5def5` | Phase 1 — Foundation |
| `phase: 2` | `#bfd4f2` | Phase 2 — Growth |
| `phase: 3` | `#d4c5f9` | Phase 3 — Expansion |
| `blocked` | `#e11d48` | Blocked on a dependency |
| `good first issue` | `#7057ff` | Good for newcomers |

---

## Milestones

| Milestone | Due Date | Description |
|---|---|---|
| Repository Bootstrap | Aug 2026 | Structure, docs, specs, standards complete |
| Sprint 1 — Foundation | Sep 2026 | App scaffold + all core pages |
| Public Launch | Sep 2026 | Production deployment |
| Phase 2 — Growth | Dec 2026 | Blog, case studies, GitHub integration |
| Phase 3 — Expansion | Mar 2027 | Newsletter, resources, analytics |

---

## GitHub Project Board (Kanban)

Recommended columns:

| Column | Purpose |
|---|---|
| Backlog | All issues not yet prioritized |
| Ready | Spec written; acceptance criteria defined; ready to start |
| In Progress | Actively being worked on |
| In Review | PR open; awaiting review |
| Done | Merged to `develop` or `main` |

---

## Recommended GitHub Actions (Sprint 1+)

| Workflow | Trigger | Purpose |
|---|---|---|
| `ci.yml` | Push / PR to `develop`, `main` | Lint, typecheck, test |
| `lighthouse.yml` | PR to `main` | Lighthouse CI audit |
| `preview.yml` | PR opened | Deploy preview to Vercel |
| `release.yml` | Push to `main` | Tag release, update CHANGELOG |
