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
  assert.equal(person.title, "Full-Stack Engineering Lead");
  assert.equal(person.phoneDisplay, "+91 98809 91531");
  assert.equal(person.phoneHref, "tel:+919880991531");
  assert.equal(person.email, "niks.narayana@gmail.com");
  assert.match(person.linkedinHref, /linkedin\.com\/in\/nikhil-narayana-dev/);
  assert.equal(
    person.documentTitle,
    "Nikhil Narayana — Full-Stack Engineering Lead",
  );
});

test("proof figures match the spec", () => {
  assert.deepEqual(
    proof.map((item) => item.figure),
    ["15+", "20", "50,000+", "400,000"],
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

test("agent demos launch empty and credentials stay unqualified", () => {
  assert.deepEqual(agentDemos, []);
  assert.match(appliedAi.example, /pgvector/);
  assert.equal(appliedAi.credentials[0]?.status, "Coursework complete");
  assert.equal(appliedAi.credentials[1]?.status, "Exam in progress");
  assert.equal(education.year, "2003");
  const blob = JSON.stringify({ person, appliedAi, roles, stack, education });
  assert.doesNotMatch(blob, /fine-tun/i);
  assert.doesNotMatch(blob, /pretrain/i);
  for (const group of stack) {
    for (const item of group.items) {
      assert.doesNotMatch(item, /\d+\s*y/);
    }
  }
});
