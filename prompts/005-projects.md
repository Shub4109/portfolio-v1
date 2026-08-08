# 005 — Projects / Portfolio

> **Prompt ID:** 005-projects
> **Phase:** Sprint TBD
> **Spec:** See `specs/` for the corresponding specification
> **Status:** Ready

---

## Objective

Build the portfolio and open-source projects showcase page.

---

## Context

The projects page is a proof-of-work signal for technical evaluators. It must be scannable and link to GitHub repositories. See `specs/004-projects.md`.

---

## Instructions

1. Create project data schema in `content/projects/`
2. Build the project listing page at `/portfolio`
3. Build the project card component with: title, description, tech stack, GitHub link
4. Add technology filter (optional — per spec)
5. Apply SEO metadata
6. Verify all GitHub links open in a new tab with `rel=noopener noreferrer`

---

## Deliverables

- Project data files in `content/projects/`
- Projects page at `/portfolio`
- ProjectCard component

---

## Acceptance Criteria

- [ ] All projects render with correct data
- [ ] GitHub links open in new tab
- [ ] Tech stack badges are correct
- [ ] Page is mobile-responsive
- [ ] Lighthouse: Accessibility 100, SEO 100

---

## Notes

- Read the full spec before starting: `specs/`
- Follow all standards in `CONTRIBUTING.md` and `docs/development/standards.md`
- Commit atomically using Conventional Commits
- Update `CHANGELOG.md` when complete
