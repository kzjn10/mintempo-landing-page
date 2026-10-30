# Mintempo Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Replace the Puzzle Party template with an accurate, gallery-first Mintempo website.

**Architecture:** Keep Next.js App Router and Montserrat. Use a primarily server-rendered landing page with small client controls only where needed. Copy and optimize authentic assets locally; remove active dependencies on the unrelated template backend.

**Tech Stack:** Existing Next.js, React, TypeScript, Tailwind, Lucide and Sharp; no new dependencies planned.

**Spec:** `docs/superpowers/specs/2026-10-29-mintempo-website-design.md`

## Global Constraints

- English; gallery-first (owner selected); Montserrat retained.
- Brand: Mintempo; mint `#78D8C8`, navy `#0E171E`.
- Source app is read-only; website implementation stays in this checkout and localhost.
- App is in development; no fabricated availability, rating, pricing or privacy claims.
- Preserve `/privacy`, `/terms`, and their `?p=mobile` behavior.
- No external sends, deployment or remote data mutations.

## Review Focus

- Narrow/mobile viewports: contained gallery scroll without page overflow.
- Missing/slow assets: stable image dimensions, descriptive alternatives and legible page copy.
- Keyboard/reduced-motion use: operable controls and visible content without animation dependency.
- Direct legal-route and embedded access: truthful notice, correct brand, no unrelated remote document.
- Firebase data: exact project `test-3d1e8a23` and document `pages/mintampo`; no old backend references.

## Task 1 — Dev: Identity and authentic assets

**Files:** `public/mintempo/*`, `app/layout.tsx`, `app/icon.png`, `app/apple-icon.png`; optional `lib/mintempo.ts` for shared brand/gallery data.

**Interfaces:** Locally served `/mintempo/` assets; shared source-backed name, description and gallery data if needed.

- [ ] Record current build/type-check baseline and existing owner edits; keep Montserrat.
- [ ] Copy production symbol/icon/banner and five English iPhone posters; create optimized WebP derivatives with existing Sharp and write asset provenance.
- [ ] Update global metadata, icons and social preview to Mintempo. Do not invent deployment hostname.
- [ ] Verify dimensions, asset requests, file sizes, page metadata and font wiring.

## Task 2 — Dev + UI/UX: Gallery-first homepage

**Files:** Replace `app/page.tsx`; adjust `app/globals.css` and `tailwind.config.ts`; create focused `components/mintempo/` components only when needed.

**Interfaces:** Anchors `#preview`, `#features`, `#widgets`, `#faq`; local asset URLs from Task 1.

- [ ] Build compact branded navigation/hero and truthful platform status.
- [ ] Build the five-image gallery with intact poster proportions, captions, and contained mobile scrolling; add keyboard-operable navigation if controls are used.
- [ ] Add feature overview, authentic widget showcase, appearance/language/offline details and native accessible FAQ disclosure controls.
- [ ] Replace template testimonials, game content, fake store/social links and contact form with source-backed content and meaningful navigation.
- [ ] Verify 375/768/1440px layouts, font, anchors, keyboard focus, image loading and reduced motion. UI/UX reviews screenshots and reports corrections.

## Task 3 — Dev: Supporting routes and old backend

**Files:** `app/privacy/page.tsx`, `app/terms/page.tsx`, `app/contact/route.ts`, `app/firebase.js`; optional shared legal notice component.

**Interfaces:** `/privacy` and `/terms` load HTML fields from `pages/mintampo` in owner-supplied Firebase project `test-3d1e8a23`; `?p=mobile` hides site chrome/back links; contact uses the same new project.

- [ ] Load owner-managed legal documents with loading, missing and error states; remove fabricated last-updated text.
- [ ] Use shared owner-supplied Firebase config for legal pages and contact; remove old Analytics setup; do not submit data.
- [ ] Check legal routes with and without embedded query parameter and inspect network behavior.
- [ ] Check contact configuration and validation without submitting messages to Firestore.

## Task 4 — QA/Tester + PM: Acceptance and integration

**Files:** completed website; append results to this plan or a concise QA record.

- [ ] PM checks copy against README and actual app behavior, including release status and offline limitations.
- [ ] QA searches for old brand/backend links and checks every rendered navigation/footer link.
- [ ] Run `npm run build`, independent `node_modules/.bin/tsc --noEmit`, and `git diff --check`. Existing `next lint` script is obsolete; do not report lint as passing.
- [ ] QA checks desktop/tablet/mobile visuals, keyboard, disclosures, gallery, image requests, console and embedded legal routes.
- [ ] Dev fixes relevant findings; rerun affected checks.
- [ ] Coordinator verifies final diff and running localhost, reports completed changes and any remaining limitations. No automatic commit or deployment.

## Approval and execution

The user requested PM, UI/UX, Dev and QA/Tester agents; preserve that execution method. Research is complete. Implementation begins after review of this concrete design and plan per the active planning skills.

## Owner update — Firebase

Owner supplied the new Firebase configuration and exact legal document path after initial planning. This explicitly authorizes that configuration update now; the broader visual redesign remains awaiting plan approval. Legal availability notices and contact retirement are superseded by the owner update above.
