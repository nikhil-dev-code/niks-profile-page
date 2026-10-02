import assert from "node:assert/strict";
import test from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import Page from "../app/page.tsx";

test("page markup carries contact, live products, and agent case studies", () => {
  const html = renderToStaticMarkup(createElement(Page));

  assert.match(html, /Engineering Lead · Agentic Systems/);
  assert.match(html, /Conversational AI/);
  assert.match(html, /tel:\+919880991531/);
  assert.match(html, /mailto:niks\.narayana@gmail\.com/);
  assert.match(html, /linkedin\.com\/in\/nikhil-narayana-dev/);
  assert.match(html, /https:\/\/clascout\.in\//);
  assert.match(html, /https:\/\/bali\.love\//);
  assert.match(html, /com\.essencenews\.essenceapp/);
  assert.match(html, /Nineleaps Technologies/);
  assert.match(html, /Qwinix Technologies/);
  assert.match(html, /Institution Management Agent/);
  assert.match(html, /Class Management Agent/);
  assert.match(html, /Sandbox in progress/);
  assert.match(html, /Agent systems/);
  assert.doesNotMatch(html, /Agent-interface demos are in progress/);
  assert.doesNotMatch(html, /Interfaces for agents/);
  assert.match(html, /pgvector/);
  assert.match(html, /Introduction to LangGraph/);
  assert.match(html, /LangChain Certified Agent Engineer/);
  assert.match(html, /Show credential for/);
  assert.match(html, /academy\.langchain\.com\/certificates\//);
  assert.match(html, /B\.E\. Computer Science/);
  assert.doesNotMatch(html, /fine-tun/i);
  assert.equal(html.includes('href=""'), false);

  const external = html.match(/target="_blank"/g) ?? [];
  assert.ok(external.length >= 5);
  assert.equal(external.length, (html.match(/noopener noreferrer/g) ?? []).length);
});