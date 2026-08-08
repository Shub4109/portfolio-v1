# 001 — Project Foundation

> **Prompt ID:** 001-project-foundation
> **Phase:** Sprint TBD
> **Spec:** See `specs/` for the corresponding specification
> **Status:** Ready

---

## Objective

Scaffold the Next.js application with all tooling configured and the project ready for feature development.

---

## Context

The repository structure, documentation, and specifications are complete. The next step is initializing the application code with the chosen framework, configuring linting, formatting, testing, and setting up the CI pipeline.

---

## Instructions

1. Initialize the Next.js application inside `src/`
2. Configure TypeScript with strict mode
3. Configure ESLint with recommended rules
4. Configure Prettier with the project .editorconfig settings
5. Configure Vitest for unit testing
6. Configure Playwright for E2E testing
7. Set up Husky + lint-staged pre-commit hooks
8. Configure the design token system (CSS variables or Tailwind config)
9. Create the global layout: Header, Footer, and page shell
10. Create a `/health` route returning 200 OK
11. Verify Lighthouse scores on the shell (Performance >95, Accessibility 100, SEO 100)

---

## Deliverables

- Configured Next.js project in `src/`
- Working dev server (`npm run dev`)
- Passing lint (`npm run lint`)
- Passing typecheck (`npm run typecheck`)
- Passing unit tests (`npm run test`)
- Global layout rendered correctly

---

## Acceptance Criteria

- [ ] `npm run dev` starts without errors
- [ ] `npm run build` succeeds
- [ ] `npm run lint` passes with zero errors
- [ ] `npm run typecheck` passes
- [ ] Global Header and Footer render on all pages
- [ ] Lighthouse shell scores: Performance >90, Accessibility 100

---

## Notes

- Read the full spec before starting: `specs/`
- Follow all standards in `CONTRIBUTING.md` and `docs/development/standards.md`
- Commit atomically using Conventional Commits
- Update `CHANGELOG.md` when complete
