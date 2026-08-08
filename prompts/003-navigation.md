# 003 — Navigation

> **Prompt ID:** 003-navigation
> **Phase:** Sprint TBD
> **Spec:** See `specs/` for the corresponding specification
> **Status:** Ready

---

## Objective

Build the global navigation system — desktop header, mobile menu, and footer.

---

## Context

Navigation is a dependency for all other pages. It must be accessible, keyboard-navigable, and work on all screen sizes. See `specs/002-navigation.md`.

---

## Instructions

1. Build the desktop header with logo and nav links
2. Build the mobile hamburger menu with full-screen or slide-in overlay
3. Implement active link highlighting based on current route
4. Make the Contact link a visually distinct CTA button
5. Build the footer with secondary navigation and social links
6. Ensure all elements are keyboard-navigable
7. Implement skip-to-content link for accessibility

---

## Deliverables

- Header component at `src/components/layout/Header.tsx`
- MobileNav component at `src/components/layout/MobileNav.tsx`
- Footer component at `src/components/layout/Footer.tsx`

---

## Acceptance Criteria

- [ ] All nav links work on desktop and mobile
- [ ] Mobile menu opens and closes correctly
- [ ] Skip-to-content link is the first focusable element
- [ ] Active page is visually indicated
- [ ] Keyboard navigation works through entire header
- [ ] No axe-core violations

---

## Notes

- Read the full spec before starting: `specs/`
- Follow all standards in `CONTRIBUTING.md` and `docs/development/standards.md`
- Commit atomically using Conventional Commits
- Update `CHANGELOG.md` when complete
