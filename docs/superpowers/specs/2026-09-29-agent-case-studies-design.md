# Agent case studies on the portfolio

Date: 2026-09-29  
Status: approved for implementation (user will refine copy/layout after shipping)

## Goal

Show Nikhil as someone who **leads and builds agentic systems end-to-end**, with **production agent systems** as supporting proof. The portfolio remains a static GitHub Pages site. Live sandboxes are hosted elsewhere and linked when ready.

## Decision summary

| Choice | Decision |
|--------|----------|
| Showcase format | Case-study cards on `#agents`, not an embedded chat client |
| Live demo | Optional external sandbox URL per card (“Try sandbox” / “Sandbox in progress”) |
| Depth | Approach 2: enrich `#agents` beyond name + blurb into mini case studies |
| Hosting | Dummy-data agent environments duplicated separately; this repo does not run agent APIs |

## Content model

`AgentDemo` in `content/profile.ts` expands from `{ name, summary, stack, url? }` to:

| Field | Required | Purpose |
|-------|----------|---------|
| `name` | yes | Agent / system name |
| `domain` | yes | Short domain label (e.g. institutions, classes) |
| `problem` | yes | 1–2 sentences: friction before the agent |
| `approach` | yes | 1–2 sentences: design — tools, orchestration, retrieval — lead judgment |
| `production` | yes | One short line: reliability (guardrails, evals, human-in-loop, audit) |
| `stack` | yes | Chip list |
| `samplePrompts` | yes | 2–3 reviewer prompts (shown even when sandbox is down) |
| `url` | no | Sandbox URL; omit → “Sandbox in progress”, no link |

`summary` is removed; cards use `problem` / `approach` / `production` instead.

Empty `agentDemos` still shows a single in-progress panel (keep `agentEmptyCopy`, reworded for “agent systems” if needed).

### Initial entries

Two case studies the owner named (do not invent additional products):

1. **Institution Management Agent**
2. **Class Management Agent**

Copy for `problem`, `approach`, `production`, `stack`, and `samplePrompts` is drafted at implementation from known domain context and left easy to edit in `profile.ts`. Sandbox `url` stays omitted until dummy environments are public.

## Section presentation

- **Nav label:** keep “Agents”.
- **Kicker / title:** shift from “Agent interfaces” / “Interfaces for agents” to **agent systems** framing, e.g. kicker `03 — Agent systems`, title along the lines of “Agents designed for real workflows”.
- **Layout:** same card grid as today; each card stacks:
  1. Domain as quiet label
  2. Name as heading
  3. Problem → Approach → Production as short labeled blocks (or tight paragraphs with clear lead-ins)
  4. Sample prompts as a compact list
  5. Stack chips
  6. CTA link or in-progress status
- **Visual language:** reuse existing card / chip / panel tokens. No chat UI, no new dashboard chrome, no purple/glow “AI” styling.
- **Motion:** optional light entrance already consistent with the page; no chat-typing animation.

## Page positioning (light)

- Hero `person.title` / `documentTitle` may shift toward agentic lead wording (e.g. include agent systems in the title line) only if it stays accurate and does not overclaim. Prefer a small title/supporting tweak over a rewrite of the whole hero.
- `#ai` (Applied AI) stays credentials + production AI narrative; `#agents` is the productized agent case studies. Do not duplicate long case studies in both sections.

## Architecture & boundaries

- Still static export (`output: "export"`). No Next API routes, no server actions, no secrets in the client.
- Sandbox hosting, auth, rate limits, and dummy data live **outside** this repo. Portfolio only stores a public HTTPS URL when available.
- Components only render `profile.ts`. Adding or editing a case study is a data edit.

## Error / empty behavior

- Missing `url` → status text “Sandbox in progress”; no outbound link.
- Empty `agentDemos` → one panel with empty copy (same pattern as today).
- Do not invent metrics, training/fine-tuning claims, or LLM-building claims (existing portfolio copy rules still apply).

## Tests

- Update `tests/profile.test.ts`: drop the assertion that `agentDemos` must be `[]`; assert shape/required fields for the two entries (or a shared type guard).
- Update any page/copy tests that expect “Interfaces for agents” or the empty-only panel when demos ship.
- Keep CI: `pnpm test` then `pnpm build`.

## Non-goals

- Embedded chat client on the portfolio
- Proxying agent APIs through GitHub Pages / this Next app
- Separate marketing site for sandboxes
- Inventing additional named agents beyond the two above
- Deep architecture diagrams in v1 (can add later as optional fields)

## Success criteria

A hiring manager skimming `#agents` can answer: what domain, what problem, how the agent was designed, what production concern was considered, and whether they can try it — without opening a chat.
