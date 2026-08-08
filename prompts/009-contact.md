# 009 — Contact Page & Form

> **Prompt ID:** 009-contact
> **Phase:** Sprint TBD
> **Spec:** See `specs/` for the corresponding specification
> **Status:** Ready

---

## Objective

Build the contact page with a structured inquiry form and server-side submission handling.

---

## Context

The contact form is the primary lead generation mechanism. It must be simple, validated, and reliable. See `specs/008-contact.md`.

---

## Instructions

1. Build the contact page at `/contact`
2. Build the inquiry form: name, email, company, project type, budget (optional), message
3. Implement client-side validation with clear error messages
4. Build the API route for form submission (`/api/contact`)
5. Integrate with email service (Resend / SendGrid)
6. Implement spam protection
7. Show success confirmation state
8. Apply SEO metadata

---

## Deliverables

- Contact page at `/contact`
- API route at `src/app/api/contact/route.ts`

---

## Acceptance Criteria

- [ ] Form submits with valid data — email received
- [ ] Invalid email shows error message
- [ ] Empty required fields show error messages
- [ ] Success state shown after submission
- [ ] Spam protection active
- [ ] Lighthouse: Accessibility 100, SEO 100

---

## Notes

- Read the full spec before starting: `specs/`
- Follow all standards in `CONTRIBUTING.md` and `docs/development/standards.md`
- Commit atomically using Conventional Commits
- Update `CHANGELOG.md` when complete
