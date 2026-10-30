import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("site metadata identifies Mintempo and uses the Mintempo icon", async () => {
  const layout = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");

  assert.match(layout, /title:\s*["']Mintempo["']/);
  assert.match(layout, /icons:\s*\{[\s\S]*icon:\s*["']\/mintempo\/icon\.png["']/);
  assert.match(layout, /openGraph:\s*\{[\s\S]*\/mintempo\/feature-graphic\.png/);
});

test("Mintempo gallery images are available locally", async () => {
  const images = ["01-weather", "02-convert", "03-clocks", "04-weather-light", "05-widgets"];

  for (const image of images) {
    const data = await readFile(new URL(`../public/mintempo/${image}.webp`, import.meta.url));
    assert.ok(data.length > 0, `${image} should contain image data`);
  }
});

test("homepage presents the Mintempo gallery and does not retain the game template", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

  assert.match(page, /Your day,/);
  assert.match(page, /at a glance\./);
  assert.match(page, /01-weather\.webp/);
  assert.match(page, /05-widgets\.webp/);
  assert.doesNotMatch(page, /Puzzle Party/);
  assert.doesNotMatch(page, /Download Free/);
});

test("legal routes use Mintempo rather than the previous game brand", async () => {
  const pages = await Promise.all([
    readFile(new URL("../app/privacy/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/terms/page.tsx", import.meta.url), "utf8"),
  ]);

  for (const page of pages) {
    assert.match(page, /Mintempo/);
    assert.match(page, /\/mintempo\/symbol\.svg/);
    assert.doesNotMatch(page, /Puzzle Party/);
  }
});

test("homepage explains manual city selection and exposes an accessible gallery", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

  assert.match(page, /without GPS permission/);
  assert.match(page, /tabIndex=\{0\}/);
  assert.match(page, /iOS preview shown/);
});

test("global styling respects reduced motion", async () => {
  const styles = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(styles, /prefers-reduced-motion:\s*reduce/);
});
