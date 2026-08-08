# 014 — Deployment & CI/CD

> **Prompt ID:** 014-deployment
> **Phase:** Sprint TBD
> **Spec:** See `specs/` for the corresponding specification
> **Status:** Ready

---

## Objective

Configure the production deployment pipeline and launch the platform.

---

## Context

See `docs/deployment/overview.md`.

---

## Instructions

1. Configure Vercel project (or chosen platform)
2. Set all production environment variables in platform dashboard
3. Configure custom domain and SSL
4. Set up GitHub Actions workflow for CI (lint, test, typecheck, Lighthouse)
5. Configure preview deployments per PR
6. Run full Lighthouse audit on production URL
7. Submit sitemap to Google Search Console
8. Verify contact form works in production
9. Verify analytics are collecting data

---

## Deliverables

- Production deployment live at custom domain
- GitHub Actions CI workflow
- Google Search Console configured

---

## Acceptance Criteria

- [ ] Production URL resolves correctly
- [ ] SSL certificate valid
- [ ] Contact form works end-to-end in production
- [ ] Analytics recording pageviews
- [ ] Sitemap submitted to Search Console
- [ ] All Lighthouse targets met on production

---

## Notes

- Read the full spec before starting: `specs/`
- Follow all standards in `CONTRIBUTING.md` and `docs/development/standards.md`
- Commit atomically using Conventional Commits
- Update `CHANGELOG.md` when complete
