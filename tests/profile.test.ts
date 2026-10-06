import assert from "node:assert/strict";
import test from "node:test";
import {
  agentDemos,
  appliedAi,
  education,
  person,
  proof,
  roles,
  stack,
} from "../content/profile.ts";

test("person exposes recruiter contact and title", () => {
  assert.equal(person.name, "Nikhil Narayana");
  assert.equal(person.title, "Engineering Lead · Agentic Systems");
  assert.equal(person.phoneDisplay, "+91 98809 91531");
  assert.equal(person.phoneHref, "tel:+919880991531");
  assert.equal(person.email, "niks.narayana@gmail.com");
  assert.match(person.linkedinHref, /linkedin\.com\/in\/nikhil-narayana-dev/);
  assert.equal(
    person.documentTitle,
    "Nikhil Narayana — Engineering Lead · Agentic Systems",
  );
});

test("proof figures match the spec", () => {
  assert.deepEqual(
    proof.map((item) => [item.figure, item.label]),
    [
      ["15+", "Years shipping software"],
      ["15+", "Projects completed till date"],
      ["7", "0-1 projects"],
      ["50+", "Team mentored"],
    ],
  );
});

test("five featured roles lead, and older employers stay in the career", () => {
  const featured = roles.filter((role) => role.featured);
  assert.deepEqual(
    featured.map((role) => role.id),
    ["clascout", "vidwath", "athos", "bali", "essence"],
  );
  assert.ok(roles.some((role) => role.id === "nineleaps"));
  assert.ok(roles.some((role) => role.id === "qwinix"));
  assert.ok(roles.some((role) => role.id === "earlier"));
  for (const role of roles) {
    assert.ok(role.detail.length > 0);
    if (role.featured) assert.ok(role.summary.length > 0);
  }
  assert.equal(roles.find((role) => role.id === "vidwath")?.url, undefined);
  assert.equal(roles.find((role) => role.id === "athos")?.url, undefined);
  assert.match(roles.find((role) => role.id === "clascout")?.url ?? "", /clascout\.in/);
  assert.match(roles.find((role) => role.id === "bali")?.url ?? "", /bali\.love/);
  assert.match(
    roles.find((role) => role.id === "essence")?.url ?? "",
    /com\.essencenews\.essenceapp/,
  );
});

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
  assert.match(appliedAi.example, /pgvector/);
  assert.equal(appliedAi.credentials.length, 9);
  assert.deepEqual(
    appliedAi.credentials.map((c) => c.status),
    [
      "Sep 2026",
      "Sep 2026",
      "Sep 2026",
      "Sep 2026",
      "Sep 2026",
      "Aug 2026",
      "Aug 2026",
      "Aug 2026",
      "Exam in progress",
    ],
  );
  for (const course of appliedAi.credentials.slice(0, 8)) {
    assert.ok(course.href);
  }
  assert.equal(appliedAi.credentials[8]?.href, undefined);
  assert.equal(appliedAi.credentials[8]?.label, "LangChain Certified Agent Engineer");
  assert.equal(education.year, "2003");
  const blob = JSON.stringify({
    person,
    appliedAi,
    roles,
    agentDemos,
    stack,
    education,
  });
  assert.doesNotMatch(blob, /fine-tun/i);
  assert.doesNotMatch(blob, /pretrain/i);
  for (const group of stack) {
    for (const item of group.items) {
      assert.doesNotMatch(item, /\d+\s*y/);
    }
  }
});
