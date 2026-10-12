import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const content = JSON.parse(
  readFileSync(new URL("../src/content.json", import.meta.url), "utf8")
);

test("hero states the verified identity", () => {
  assert.equal(content.name, "Indra Kuswara");
  assert.equal(content.role, "QA Engineer");
  assert.match(content.headline, /I find the bugs/);
  assert.match(content.intro, /7\+ years/);
  assert.match(content.intro, /Bekasi, Indonesia/);
});

test("stats match the CV exactly", () => {
  const byLabel = Object.fromEntries(content.stats.map((s) => [s.label, s.value]));
  assert.equal(byLabel["regression time"], "-75%");
  assert.equal(byLabel["new-release coverage"], "95%");
  assert.equal(byLabel["features automated"], "51");
  assert.equal(byLabel["QA experience"], "7+ yrs");
});

test("projects carry the verified numbers", () => {
  assert.equal(content.projects.length, 2);
  const [sauce, api] = content.projects;
  assert.match(sauce.body, /78 test cases/);
  assert.match(sauce.body, /233 assertions/);
  assert.equal(sauce.url, "https://github.com/indrakuswara/saucedemo-automation");
  assert.match(api.body, /28 .*API tests/);
  assert.match(api.body, /5 performance scenarios/);
  assert.equal(api.url, "https://github.com/indrakuswara/api-testing-k6");
});

test("experience lists all four roles from the CV", () => {
  assert.equal(content.experience.length, 4);
  const companies = content.experience.map((e) => e.company).join(" | ");
  assert.match(companies, /Advotics/);
  assert.match(companies, /Narasi\.tv/);
  assert.match(companies, /Moladin/);
  assert.equal(content.experience[0].period, "2021 — Present");
});

test("philosophy and target are present", () => {
  assert.match(content.philosophy.quote, /If you are kind to others/);
  assert.match(content.target, /Senior QA Engineer/);
  assert.match(content.target, /individual contributor/);
});

test("copy is English only — no Indonesian filler words", () => {
  const all = JSON.stringify(content).toLowerCase();
  for (const word of ["saya", "dengan", "yang", "dan ", "tahun", "pengalaman", "unduh"]) {
    assert.ok(!all.includes(word), `found Indonesian word: ${word}`);
  }
});
