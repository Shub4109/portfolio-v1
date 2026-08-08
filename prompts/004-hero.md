# 004 — Hero Section

> **Prompt ID:** 004-hero
> **Phase:** Sprint TBD
> **Spec:** See `specs/` for the corresponding specification
> **Status:** Ready

---

## Objective

Build the hero section — the most important above-the-fold element on the homepage.

---

## Context

The hero is the first thing visitors see. It must communicate who the consultant is, what they do, and what the visitor should do next — all within one viewport. See `specs/003-hero.md`.

---

## Instructions

1. Implement headline and sub-headline with correct typographic hierarchy
2. Implement primary CTA (contact / book a call)
3. Implement secondary CTA (view case studies)
4. Add professional headshot with correct image optimization
5. Add social proof element (e.g., technology logos or a brief credential line)
6. Ensure hero is fully responsive
7. Optimize for LCP — the hero image is typically the LCP element

---

## Deliverables

- Hero section component at `src/components/sections/Hero.tsx`
- Optimized hero image in `public/images/`

---

## Acceptance Criteria

- [ ] Headline and CTA visible without scrolling on all screen sizes
- [ ] Hero image LCP < 2.5s on simulated 4G
- [ ] No layout shift (CLS = 0) on image load
- [ ] Both CTAs navigate correctly

---

## Notes

- Read the full spec before starting: `specs/`
- Follow all standards in `CONTRIBUTING.md` and `docs/development/standards.md`
- Commit atomically using Conventional Commits
- Update `CHANGELOG.md` when complete
