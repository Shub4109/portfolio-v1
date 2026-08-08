# Scripts

> Automation and utility scripts for `portfolio-v1`.
> All scripts are run from the repository root.

---

## Planned Scripts

| Script | Command | Purpose | Status |
|---|---|---|---|
| `validate-env.js` | `node scripts/validate-env.js` | Check all required env vars are set | Pending Sprint 1 |
| `generate-sitemap.js` | `node scripts/generate-sitemap.js` | Generate XML sitemap from page list | Pending Sprint 1 |
| `check-links.js` | `node scripts/check-links.js` | Crawl and validate all internal links | Pending Sprint 1 |
| `audit-lighthouse.sh` | `bash scripts/audit-lighthouse.sh` | Run Lighthouse on all primary pages | Pending Sprint 1 |

---

## Usage

Scripts are added here as the project grows. Each script must:

1. Include a comment header explaining its purpose and usage
2. Handle errors gracefully and exit with a non-zero code on failure
3. Be documented in this README with its command and purpose
