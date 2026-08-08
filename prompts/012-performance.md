# 012 — Performance Optimization

> **Prompt ID:** 012-performance
> **Phase:** Sprint TBD
> **Spec:** See `specs/` for the corresponding specification
> **Status:** Ready

---

## Objective

Audit and optimize the application to meet Core Web Vitals targets.

---

## Context

See `specs/012-performance.md`.

---

## Instructions

1. Run Lighthouse audit on all primary pages
2. Identify and fix LCP issues (typically hero image)
3. Identify and fix CLS issues (image dimensions, font loading)
4. Audit JavaScript bundle size — eliminate unnecessary client JS
5. Audit and optimize all images (format, size, lazy loading)
6. Audit and optimize font loading (subset, display swap)
7. Configure caching headers
8. Run WebPageTest to verify real-world performance

---

## Deliverables

- Lighthouse scores meeting targets on all pages
- Performance audit report

---

## Acceptance Criteria

- [ ] LCP < 2.5s on all primary pages
- [ ] CLS < 0.1 on all pages
- [ ] Lighthouse Performance > 95 on all pages
- [ ] No render-blocking resources

---

## Notes

- Read the full spec before starting: `specs/`
- Follow all standards in `CONTRIBUTING.md` and `docs/development/standards.md`
- Commit atomically using Conventional Commits
- Update `CHANGELOG.md` when complete
