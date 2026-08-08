# 010 — GitHub Integration

> **Prompt ID:** 010-github
> **Phase:** Sprint TBD
> **Spec:** See `specs/` for the corresponding specification
> **Status:** Ready

---

## Objective

Integrate GitHub API to display live repository data and contribution activity.

---

## Context

See `specs/009-github-integration.md`.

---

## Instructions

1. Set up GitHub API client in `src/lib/github.ts`
2. Fetch pinned repositories using GitHub GraphQL API
3. Display repositories on the Portfolio page with live star/fork counts
4. Implement ISR with appropriate revalidation interval
5. Add contribution graph or activity summary
6. Handle API rate limiting and error states gracefully

---

## Deliverables

- GitHub client at `src/lib/github.ts`
- Updated Portfolio page with live data

---

## Acceptance Criteria

- [ ] Pinned repos render with current data
- [ ] Star and fork counts are accurate
- [ ] API errors show graceful fallback — no broken page
- [ ] Revalidation interval is set

---

## Notes

- Read the full spec before starting: `specs/`
- Follow all standards in `CONTRIBUTING.md` and `docs/development/standards.md`
- Commit atomically using Conventional Commits
- Update `CHANGELOG.md` when complete
