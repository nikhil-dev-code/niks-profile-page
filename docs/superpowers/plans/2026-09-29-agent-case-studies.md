# Agent Case Studies Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn `#agents` into two mini agent case studies (Institution Management + Class Management) that signal lead-level agentic work, with optional external sandbox links.

**Architecture:** Extend `AgentDemo` in `content/profile.ts` and render richer cards in `components/AgentInterfaces.tsx`. Keep static export; no chat client, no portfolio-hosted APIs. Sandbox URLs stay optional until dummy environments are public.

**Tech Stack:** Next.js App Router, React, TypeScript, static export, `node:test` via `tsx`, `react-dom/server` markup checks.

## Global Constraints

- Static export only. No server, API routes, or secrets in the client.
- Do not claim model training, fine-tuning, or building LLMs.
- Do not invent additional named agents beyond Institution Management Agent and Class Management Agent.
- External links use `target="_blank"` and `rel="noopener noreferrer"`.
- Missing `url` → “Sandbox in progress”, no link.
- Empty `agentDemos` still renders one panel via `agentEmptyCopy` (kept for future empty state).
- Copy lives only in `content/profile.ts`; components only render.

## File map

| File | Responsibility |
|------|----------------|
| `content/profile.ts` | `AgentDemo` type, two demos, section empty copy, light hero title tweak |
| `components/AgentInterfaces.tsx` | Case-study card UI |
| `app/globals.css` | Styles for domain label, labeled blocks, sample prompts |
| `tests/profile.test.ts` | Shape + required fields for demos; title assertions |
| `tests/page.test.tsx` | Markup includes both agents, no empty panel, sandbox status |

---

### Task 1: Content contract and tests

**Files:**
- Modify: `content/profile.ts`
- Modify: `tests/profile.test.ts`
- Modify: `tests/page.test.tsx`

**Interfaces:**
- Produces `AgentDemo`:
  ```ts
  {
    name: string;
    domain: string;
    problem: string;
    approach: string;
    production: string;
    stack: string[];
    samplePrompts: string[];
    url?: string;
  }
  ```
- Produces `agentDemos` with exactly two entries (no `url` yet).
- Updates `person.title` / `person.documentTitle` to `Engineering Lead · Agentic Systems` / `Nikhil Narayana — Engineering Lead · Agentic Systems`.
- Updates `agentEmptyCopy` to agent-systems wording (for empty-state path).

- [ ] **Step 1: Write failing tests**

Replace the empty-demos assertion and page empty-panel assertion. In `tests/profile.test.ts`, change the agent test to:

```ts
test("agent case studies and credentials stay unqualified", () => {
  assert.equal(agentDemos.length, 2);
  assert.deepEqual(
    agentDemos.map((d) => d.name),
    ["Institution Management Agent", "Class Management Agent"],
  );
  for (const demo of agentDemos) {
    assert.ok(demo.domain.length > 0);
    assert.ok(demo.problem.length > 0);
    assert.ok(demo.approach.length > 0);
    assert.ok(demo.production.length > 0);
    assert.ok(demo.stack.length > 0);
    assert.ok(demo.samplePrompts.length >= 2);
    assert.equal(demo.url, undefined);
  }
  assert.equal(person.title, "Engineering Lead · Agentic Systems");
  assert.equal(
    person.documentTitle,
    "Nikhil Narayana — Engineering Lead · Agentic Systems",
  );
  // keep fine-tun / stack-year checks from existing test
});
```

In `tests/page.test.tsx`, replace empty-panel match with:

```ts
assert.match(html, /Engineering Lead · Agentic Systems/);
assert.match(html, /Institution Management Agent/);
assert.match(html, /Class Management Agent/);
assert.match(html, /Sandbox in progress/);
assert.match(html, /Agent systems/);
assert.doesNotMatch(html, /Agent-interface demos are in progress/);
assert.doesNotMatch(html, /Interfaces for agents/);
```

Also update the person title assertion at the top of `tests/profile.test.ts` (`person.title` / `documentTitle`).

- [ ] **Step 2: Run tests — expect FAIL**

```bash
pnpm test
```

Expected: failures on empty `agentDemos`, old title, old empty panel copy.

- [ ] **Step 3: Update `content/profile.ts`**

1. Replace `AgentDemo` type (drop `summary`; add fields above).
2. Set person title fields as in tests.
3. Set `agentDemos` to:

```ts
export const agentDemos: AgentDemo[] = [
  {
    name: "Institution Management Agent",
    domain: "Institutions",
    problem:
      "Campus and multi-site teams answer enrollment, fee, roster, and policy questions by hopping across admin tools and tribal knowledge.",
    approach:
      "Tool-using agent over institution records and documents: multi-step admin workflows with retrieval for policies and structured tools for live data.",
    production:
      "Scoped tools, audited side effects, and human confirmation on writes.",
    stack: ["LangGraph", "Tool calling", "RAG", "PostgreSQL", "OpenAI APIs"],
    samplePrompts: [
      "Summarize open fee balances for the science department this term.",
      "Which campuses still need transfer approvals this week?",
      "What does the refund policy say for mid-semester withdrawals?",
    ],
  },
  {
    name: "Class Management Agent",
    domain: "Classes",
    problem:
      "Teachers and class owners lose time on attendance, homework follow-ups, schedule changes, and parent updates that live in separate apps.",
    approach:
      "Agent oriented around class operations: tools for roster and sessions, retrieval for class materials, and guided multi-step tasks for common teaching workflows.",
    production:
      "Read-first defaults, explicit confirmations for messages and schedule changes, eval prompts for common failure cases.",
    stack: ["LangGraph", "Tool calling", "RAG", "Node.js", "OpenAI APIs"],
    samplePrompts: [
      "Who was absent more than twice this week in Grade 8A?",
      "Draft a parent update for tomorrow's schedule change.",
      "List homework still outstanding for the last two sessions.",
    ],
  },
];
```

4. Update `agentEmptyCopy` to:  
   `"Agent system case studies are in progress. Each finished entry will show the problem, approach, production notes, stack, and a sandbox link when available."`

- [ ] **Step 4: Re-run `pnpm test` — profile tests pass; page test still fails until UI updates**

---

### Task 2: Case-study UI and styles

**Files:**
- Modify: `components/AgentInterfaces.tsx`
- Modify: `app/globals.css`
- Test: `tests/page.test.tsx` (from Task 1)

**Interfaces:**
- Consumes: updated `AgentDemo` and `agentDemos` / `agentEmptyCopy`
- Section kicker: `03 — Agent systems`
- Section title: `Agents designed for real workflows`
- Card structure: domain → name → problem / approach / production → sample prompts → stack → CTA/status

- [ ] **Step 1: Rewrite `AgentInterfaces.tsx`**

```tsx
import { agentDemos, agentEmptyCopy } from "@/content/profile";

export function AgentInterfaces() {
  return (
    <section className="section" id="agents" aria-labelledby="agents-title">
      <div className="wrap">
        <p className="kicker">03 — Agent systems</p>
        <h2 id="agents-title">Agents designed for real workflows</h2>
        {agentDemos.length === 0 ? (
          <div className="panel">
            <p>{agentEmptyCopy}</p>
          </div>
        ) : (
          <div className="cards">
            {agentDemos.map((demo) => (
              <article className="card agent-case" key={demo.name}>
                <p className="agent-domain">{demo.domain}</p>
                <h3>{demo.name}</h3>
                <dl className="agent-blocks">
                  <div>
                    <dt>Problem</dt>
                    <dd>{demo.problem}</dd>
                  </div>
                  <div>
                    <dt>Approach</dt>
                    <dd>{demo.approach}</dd>
                  </div>
                  <div>
                    <dt>Production</dt>
                    <dd>{demo.production}</dd>
                  </div>
                </dl>
                <p className="agent-prompts-label">Try asking</p>
                <ul className="agent-prompts">
                  {demo.samplePrompts.map((prompt) => (
                    <li key={prompt}>{prompt}</li>
                  ))}
                </ul>
                <ul className="chips" aria-label={`${demo.name} stack`}>
                  {demo.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {demo.url ? (
                  <a href={demo.url} target="_blank" rel="noopener noreferrer">
                    Try sandbox
                  </a>
                ) : (
                  <p className="status">Sandbox in progress</p>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add CSS** after `.card a` / `.status` rules in `app/globals.css`:

```css
.agent-domain {
  color: var(--muted);
  font-size: 0.92rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.agent-case h3 {
  margin-top: 0.35rem;
}

.agent-blocks {
  display: grid;
  gap: 0.85rem;
  margin: 1rem 0 0;
}

.agent-blocks dt {
  color: var(--muted);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.agent-blocks dd {
  margin: 0.2rem 0 0;
}

.agent-prompts-label {
  margin-top: 1rem;
  color: var(--muted);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.agent-prompts {
  margin: 0.45rem 0 0;
  padding-left: 1.1rem;
  color: var(--muted);
}

.agent-prompts li + li {
  margin-top: 0.25rem;
}

.agent-case .status {
  margin-top: 1rem;
}
```

- [ ] **Step 3: Run full verification**

```bash
pnpm test
pnpm build
```

Expected: all tests pass; static `out/` builds.

- [ ] **Step 4: Commit**

```bash
git add content/profile.ts components/AgentInterfaces.tsx app/globals.css tests/profile.test.ts tests/page.test.tsx docs/superpowers/plans/2026-09-29-agent-case-studies.md
git commit -m "$(cat <<'EOF'
Showcase agent systems as case studies on the portfolio.

EOF
)"
```

---

## Spec coverage check

| Spec item | Task |
|-----------|------|
| Enriched `AgentDemo` fields | Task 1 |
| Two named agents, no invented extras | Task 1 |
| Section rename to agent systems | Task 2 |
| Case-study card layout + sample prompts | Task 2 |
| Sandbox optional / in progress | Task 1–2 |
| No embedded chat / no APIs | (non-goal, no task) |
| Light hero title tweak | Task 1 |
| Tests updated | Task 1–2 |
| Static export preserved | Task 2 build |
