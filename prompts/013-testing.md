# 013 — Test Suite

> **Prompt ID:** 013-testing
> **Phase:** Sprint TBD
> **Spec:** See `specs/` for the corresponding specification
> **Status:** Ready

---

## Objective

Write the full test suite covering unit tests, component tests, and E2E journeys.

---

## Context

See `specs/013-testing.md` and `docs/testing/overview.md`.

---

## Instructions

1. Write unit tests for all utility functions in `src/lib/`
2. Write component tests for all UI components
3. Write E2E tests for all critical user journeys
4. Configure axe-core accessibility assertions in E2E tests
5. Configure Lighthouse CI in GitHub Actions
6. Set up coverage reporting

---

## Deliverables

- Unit tests in `src/` alongside components
- E2E tests in `tests/e2e/`
- CI configuration

---

## Acceptance Criteria

- [ ] All unit tests pass
- [ ] All E2E tests pass
- [ ] Zero axe-core violations in E2E tests
- [ ] Coverage meets targets

---

## Notes

- Read the full spec before starting: `specs/`
- Follow all standards in `CONTRIBUTING.md` and `docs/development/standards.md`
- Commit atomically using Conventional Commits
- Update `CHANGELOG.md` when complete
