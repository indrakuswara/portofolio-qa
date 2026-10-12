# Indra Kuswara — QA Engineer Portfolio

Personal portfolio website of Indra Kuswara, QA Engineer based in Bekasi, Indonesia.

**Direction:** "The Kind Inspector" — a friendly bug mascot holding a magnifying glass and a heart. Firm on bugs, kind to people.

## Stack

- Next.js 16 (App Router) + React 19, fully static, no database
- Content centralised in `src/content.json` — every number on the site is guarded by tests against the CV
- Fredoka (display) + Nunito Sans (body), mascot with transparent background

## Develop

```bash
npm install
npm run dev
npm test        # content tests (node:test)
npm run build
```

## Content rule

All claims come from the ATS CV (`public/Indra_Kuswara_CV_ATS.pdf`). Do not add metrics that are not in the CV.
