# Portfolio Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a static Next.js recruiter profile for Nikhil Narayana from the approved spec.

**Architecture:** One App Router page reads typed content from `content/profile.ts`. Global CSS variables switch a light orange theme and a blue dark theme. Theme is applied by an inline boot script before paint and persisted in `localStorage` under `theme`.

**Tech Stack:** Next.js App Router, React, TypeScript, static export (`output: 'export'`), `node:test` via `tsx`, `react-dom/server` for markup checks.

## Global Constraints

- Static export only. No server, API, or contact form.
- Light theme is the default. Tokens: background `#FBF6F0`, surface `#FFFFFF`, text `#1C1917`, muted `#57534E`, accent `#E85D04`, line `#E7E5E4`.
- Dark theme tokens: background `#0B1220`, surface `#121A2B`, text `#E8EEF9`, muted `#94A3B8`, accent `#60A5FA`, line `#1E293B`.
- Fonts: Fraunces for the name and section titles, Source Sans 3 for everything else.
- Do not claim model training, fine-tuning, or building or updating LLMs.
- Do not invent certification product names, agent demo names, or years of use on stack chips.
- Phone `+91 98809 91531` appears in the hero and the contact section.
- External `http` links use `target="_blank"` and `rel="noopener noreferrer"`.
- Empty `agentDemos` renders one in-progress panel and no demo cards.
- Roles are stored newest first. Featured roles render in selected work from `summary`. Career renders every role from `detail`.

**Execution note:** Tasks share one content module, one stylesheet, and one page, so they are implemented inline in this session. There is no git repository; commit steps are skipped until a repo exists.

---

### Task 1: Project scaffold and content contract

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `next-env.d.ts`, `.gitignore`
- Create: `content/profile.ts`
- Test: `tests/profile.test.ts`

**Interfaces:**
- Produces: `person`, `proof`, `appliedAi`, `nav`, `roles`, `agentDemos`, `stack`, `education` from `content/profile.ts`
- `Role`: `{ id, org, title, start, end, summary, detail, stack, url?, urlLabel?, featured }`

- [ ] **Step 1: Write the failing content test**
- [ ] **Step 2: Run `npx tsx --test tests/profile.test.ts` and confirm it fails because the module is missing**
- [ ] **Step 3: Add the Next.js scaffold and `content/profile.ts`**
- [ ] **Step 4: Re-run the test and confirm it passes**

### Task 2: Theme, layout, and sections

**Files:**
- Create: `app/globals.css`, `app/layout.tsx`, `app/page.tsx`
- Create: `components/Header.tsx`, `components/Hero.tsx`, `components/Proof.tsx`, `components/AppliedAi.tsx`, `components/SelectedWork.tsx`, `components/AgentInterfaces.tsx`, `components/Career.tsx`, `components/Stack.tsx`, `components/Contact.tsx`
- Test: `tests/page.test.tsx`

**Interfaces:**
- Consumes: exports from `content/profile.ts`
- Produces: default page component composing Header, Hero, Proof, AppliedAi, SelectedWork, AgentInterfaces, Career, Stack, Contact
- Section ids: `top`, `ai`, `work`, `agents`, `career`, `stack`, `contact`

- [ ] **Step 1: Write the failing page markup test**
- [ ] **Step 2: Run `npx tsx --test tests/page.test.tsx` and confirm it fails**
- [ ] **Step 3: Implement layout, styles, and section components**
- [ ] **Step 4: Re-run both test files and confirm they pass**
- [ ] **Step 5: Run `npx next build` and confirm static export writes `out/`**
- [ ] **Step 6: Open the page in a browser, check light and dark themes, nav, and outbound links**
