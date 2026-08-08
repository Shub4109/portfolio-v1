# 002 — Homepage

> **Prompt ID:** 002-homepage
> **Phase:** Sprint TBD
> **Spec:** See `specs/` for the corresponding specification
> **Status:** Ready

---

## Objective

Build the homepage — the primary entry point and first impression for all visitors.

---

## Context

The application scaffold is in place. The homepage is the highest-priority page. It must communicate value in under 10 seconds and drive visitors to Services, Case Studies, or Contact. See `specs/001-homepage.md` for full requirements.

---

## Instructions

1. Implement the Hero section (spec: SPEC-003)
2. Implement the Services summary section with CTA
3. Implement the Featured Case Studies section (2–3 cards)
4. Implement the Tech Stack / Social Proof section
5. Implement the Newsletter capture CTA block
6. Implement the final Contact CTA section
7. Apply correct metadata: title, description, Open Graph
8. Verify Lighthouse scores

---

## Deliverables

- Complete homepage at `/`
- All sections render correctly on mobile, tablet, desktop
- All CTAs are functional (link to correct pages)
- SEO metadata correct

---

## Acceptance Criteria

- [ ] Hero headline and CTA visible without scrolling on all screen sizes
- [ ] CTA click navigates to correct page
- [ ] Newsletter form shows success state on submission
- [ ] Lighthouse: Performance >95, Accessibility 100, SEO 100
- [ ] No axe-core violations

---

## Notes

- Read the full spec before starting: `specs/`
- Follow all standards in `CONTRIBUTING.md` and `docs/development/standards.md`
- Commit atomically using Conventional Commits
- Update `CHANGELOG.md` when complete
