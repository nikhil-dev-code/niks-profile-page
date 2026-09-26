# Portfolio page design

Single-page recruiter profile for Nikhil Narayana. Static Next.js site. Copy can be edited after the layout exists; structure and facts below are the initial content.

## Goal

Give recruiters and job portals one URL that shows fit in about 30 seconds, then holds up if they keep reading. The page is organized like [Ugan Saripudin's site](https://ugan.ganzapps.my.id/): headline, proof numbers, a short point of view, flagship work, a full career, a stack, and contact.

## Positioning

Hero title:

- **Nikhil Narayana**
- **Full-Stack Engineering Lead**
- **Conversational AI · Generative AI · Production agent systems**

Supporting line:

> Fifteen years taking software from a blank repository to production, usually as the person accountable for the team. The last year of that work is conversational AI, generative features, and agent systems inside products that are already live.

The page describes retrieval, orchestration, and generation inside products already in market. It does not claim model training, fine-tuning, or building or updating LLMs.

LangChain Academy coursework is marked complete. The LangChain Certified Agent Engineer exam is marked in progress. Four GCP certifications and one AWS certification are mentioned by count only. Certificate product names are omitted until Nikhil supplies them.

## Audience and success

A recruiter or hiring manager opens the link from a portal, LinkedIn, or email. They can see seniority, recent products, leadership scope, and how to make contact without scrolling the whole page. Phone, email, and LinkedIn are visible in the hero and again at the end.

## Technical approach

- Next.js App Router, TypeScript, static export (`output: 'export'`). No server, no API, no contact form backend.
- All profile facts live in one typed module, `content/profile.ts`. Components only render that module. A copy change or a new agent demo is a data edit.
- One route: `/`. Sections are in-page anchors.
- Styling is global CSS with variables for the two themes. No component library.
- Fonts, loaded at build time: Fraunces for the name and section titles, Source Sans 3 for everything else.

### Theme

Light is the default until the visitor toggles. The choice is stored in `localStorage` under `theme`. An inline script in the document head applies the stored value before first paint.

Light (orange):

| Token | Value |
| --- | --- |
| background | `#FBF6F0` |
| surface | `#FFFFFF` |
| text | `#1C1917` |
| muted | `#57534E` |
| accent | `#E85D04` |
| line | `#E7E5E4` |

Dark (blue):

| Token | Value |
| --- | --- |
| background | `#0B1220` |
| surface | `#121A2B` |
| text | `#E8EEF9` |
| muted | `#94A3B8` |
| accent | `#60A5FA` |
| line | `#1E293B` |

Accent is used for links, the current nav mark, numbers, and the theme toggle. Body text stays on the text color. Focus states use the accent outline.

### File layout

```
app/layout.tsx          html shell, metadata, theme boot script, fonts
app/page.tsx            composes sections in order
app/globals.css         tokens, layout, both themes
components/Header.tsx   sticky nav + theme toggle
components/Hero.tsx
components/Proof.tsx
components/AppliedAi.tsx
components/SelectedWork.tsx
components/AgentInterfaces.tsx
components/Career.tsx
components/Stack.tsx
components/Contact.tsx
content/profile.ts
```

## Page structure

Sticky header with the name and anchor links: Work, AI, Agents, Career, Stack, Contact. Theme toggle sits in the header. On narrow screens the links collapse to a single row that scrolls horizontally.

Sections, in order:

1. Hero
2. Proof
3. Applied AI
4. Selected work
5. Agent interfaces
6. Career
7. Stack
8. Contact

### Hero

Meta line: Mysore / Bengaluru · Open to global remote · +91 98809 91531 · niks.narayana@gmail.com · LinkedIn (`https://www.linkedin.com/in/nikhil-narayana-dev`).

Phone is a `tel:` link. Email is a `mailto:` link. A text button jumps to selected work.

### Proof

Four figures:

| Figure | Label |
| --- | --- |
| 15+ | Years shipping software |
| 20 | Largest team led |
| 50,000+ | Students on Vidwath |
| 400,000 | Employees on the TESCO Help App |

### Applied AI

Short block, three sentences at most, plus two credential lines.

- Retrieval, orchestration, and generation inside products already in market.
- Concrete example: at Vidwath, subject ebooks were split into chapter chunks, stored in PostgreSQL with pgvector, retrieved, and passed to an LLM to produce question papers, homework, and summaries.
- LangChain Academy: coursework complete.
- LangChain Certified Agent Engineer: exam in progress.

### Selected work

Five cards, flagged in the content file. Each card shows role, dates, a short outcome, stack chips, and an external link when one exists. Links open in a new tab with `rel="noopener noreferrer"`.

1. **Clascout** — Founder and Architect, May 2026–present. SaaS for class owners (fees, attendance, schedules) and learners (enrollment across classes). Fifteen paying class owners in the first week. Stack: Next.js, Capacitor (Android and iOS), Firebase Auth, Firestore, Cloud Messaging, Data Connect, Cloud Functions, GCP. Link: https://clascout.in/
2. **Vidwath 4.0** — Head of Software, Vidwath Innovative Solutions, Dec 2025–May 2026. Team of 20. One Flutter codebase for Windows, web, Android, and classroom smart panels. Node.js on GCP. Shipped in under three months. 50,000+ students, 5,000+ hours of content. RAG pipeline as described above. Replaced a manual content-encryption process with one automated script. Stood up GitHub, coding standards, and CI/CD from zero. No public URL.
3. **Athos Commerce (formerly Klevu)** — Technical Lead, Frontend, Jan 2022–Dec 2025. Team of 10. Moved a live merchant admin onto React with the strangler pattern and no downtime, for a platform serving 10,000+ merchants. Jest across the team to 90% coverage, SonarQube on the gate. OpenAI synonym API for zero-result search. No public URL.
4. **Bali.Love** — Architect and Lead, Dec 2024–May 2025. Moved the product off Bubble onto React, Node.js, and PostgreSQL, including data migration and a redesigned schema, on GCP Cloud Run and Cloud SQL. Link: https://bali.love/
5. **Essence** — Frontend App Developer, Dec 2024–May 2025. Shipped the iOS and Android app in 30 days with Expo and React Native. The product plays the day's news as 30-second drops with AI hosts. The card credits the mobile app work. Link: https://play.google.com/store/apps/details?id=com.essencenews.essenceapp&hl=en_IN

### Agent interfaces

A section for UI demos of different agents, placed after shipped work. At launch the data list is empty. An empty list renders one panel: agent-interface demos are in progress, and each finished demo will show what the agent does, the stack, and a link. Adding an entry `{ name, summary, stack, url? }` renders a card. A missing `url` shows the card as in progress and does not render a link.

No demo names are invented for launch.

### Career

Chronological, newest first. The same role records feed this section and selected work. Featured roles use the card summary on the work grid and the longer text here.

- **Clascout, Founder and Architect** (May 2026–present). Built and launched the platform alone. Fifteen paying class owners in the first week. Stack and link as on the card.
- **Vidwath Innovative Solutions, Head of Software** (Dec 2025–May 2026). Led 20 people. Flutter client, Node.js, GCP, smart panels, RAG pipeline (PDF chapters into PostgreSQL with pgvector, retrieval, LLM generation of question papers, homework, and summaries). Encryption automation. GitHub and CI/CD from zero. 50,000+ students, 5,000+ hours, under three months.
- **Athos Commerce (Klevu), Technical Lead, Frontend** (Jan 2022–Dec 2025). Led 10 engineers. Strangler migration to React, zero downtime, 10,000+ merchants. Jest to 90% with SonarQube. OpenAI synonym API for zero-result search.
- **Bali.Love, Architect and Lead** (Dec 2024–May 2025). Bubble to React, Node.js, PostgreSQL, data migration, Cloud Run, Cloud SQL. Link as above.
- **Essence, Frontend App Developer** (Dec 2024–May 2025). Expo and React Native, both stores, 30 days. Product context as above.
- **Nineleaps Technologies, Principal Engineer** (Jan 2021–Jan 2022). TESCO Help App, 400,000 employees, React, Node.js, Kubernetes. Cleared a Docker deployment blocker and was contributing in production within 15 days of joining.
- **Qwinix Technologies, Principal Consultant** (Jun 2018–Jan 2021). Led 18 people on HPE Qbert 2.0: Node.js, React, PostgreSQL, Kafka, Kubernetes, Azure. Sole India–Costa Rica liaison. Led 15 people for CoolerScreens: access manager, planogram editor, product catalog, and a pricing ingestion pipeline on Azure with OAuth 2.0 and OpenID Connect. Completed 4 GCP certifications and 1 AWS certification on the account.
- **Earlier (2004–2018).** Senior Developer at MSCI (2008–2010). Software Developer at i-flex Solutions, now Oracle Financial Services (2005–2008), and at Dataflex Systems (2004–2005). From 2010 to 2018, ran a 100-acre dairy and agriculture operation — 30+ people, 1,000 litres a day — and built the payroll, dairy, and attendance software in-house.

Education sits at the end of this section: B.E. Computer Science, TKIET, Shivaji University, 2003. Languages: English, Hindi, Kannada. US B1 visa valid through 2030.

### Stack

Grouped chips. No years are shown. AI entries are not given a multi-year tenure.

- **Applied AI:** LangChain, LangGraph, RAG, pgvector, OpenAI APIs, LangSmith (via Academy coursework), Cursor, Claude Code
- **Frontend:** React, Next.js, TypeScript, Flutter
- **Mobile:** React Native, Expo, Capacitor
- **Backend:** Node.js, Java, Spring Boot
- **Cloud:** GCP, Firebase, Cloud Functions, Cloud Run, Cloud SQL, AWS, Azure, Docker, Kubernetes, CI/CD
- **Data:** PostgreSQL, Firestore, Firebase Data Connect, MongoDB, MySQL, Kafka
- **Security and delivery:** OAuth 2.0, OpenID Connect, HLS, content encryption, Jest, SonarQube

### Contact

Repeats phone, email, LinkedIn, Clascout, and location (Mysore / Bengaluru, open to global remote). Same link behavior as the hero.

## Data flow

`content/profile.ts` exports typed objects: `person`, `proof`, `appliedAi`, `roles`, `agentDemos`, `stack`, `education`. Each role has `id`, `org`, `title`, `start`, `end`, `summary`, `detail`, `stack`, `url` (optional), and `featured`. `summary` is the card text and is required when `featured` is true. `detail` is the career paragraph and is required for every role. Selected work renders featured roles using `summary`. Career renders every role using `detail`, newest first, then education. Agent interfaces render `agentDemos`, or the in-progress panel when the array is empty. There is no fetch and no client cache of content.

Theme state is the only client state: read in the head script, written by the toggle.

## Error and empty behavior

- A role with no `url` renders no outbound link.
- An agent demo with no `url` renders no outbound link and shows an in-progress mark.
- An empty `agentDemos` array renders the single in-progress panel.
- External links use `noopener noreferrer`.
- The theme script falls back to light when `localStorage` is missing or the stored value is neither `light` nor `dark`.

## Metadata

Document title: `Nikhil Narayana — Full-Stack Engineering Lead`. Description: the hero supporting line, trimmed to one sentence if needed for the meta tag. Open Graph title and description match. No social preview image in the first version.

## Verification

- `next build` completes with static export and writes the static output.
- In the browser, desktop and a narrow viewport: every section is reachable from the nav, the theme toggle switches palettes and survives a reload, phone and email links are present, Clascout, Bali.Love, Essence, and LinkedIn open, and the agent section shows the in-progress panel.
- Both themes keep body text readable against the background (stone on warm paper in light, light text on blue in dark).

## Out of scope

- Blog or insights
- CMS or admin
- Server-side contact form
- Named agent demos before one exists
- Invented certification product names
- Claims about training, fine-tuning, or creating LLMs
- Multi-page routes
