import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function renderPath(pathname) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  return response;
}

test("renders phase 3 creator authority on the homepage", async () => {
  const response = await renderPath("/");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /Combined audience/);
  assert.match(html, /16\.5K/);
  assert.match(html, /What I am watching/);
  assert.match(html, /Thoughtful anime talk without losing the fun/);
  assert.match(html, /Read the full About/);
  assert.match(html, /Reaction clips that open the conversation/);
});

test("renders route-specific metadata and structured data", async () => {
  const homeResponse = await renderPath("/");
  const watchResponse = await renderPath("/watch");
  const noteResponse = await renderPath("/senpai-notes/tournament-arcs-and-ritual");
  const homeHtml = await homeResponse.text();
  const watchHtml = await watchResponse.text();
  const noteHtml = await noteResponse.text();

  assert.equal(homeResponse.status, 200);
  assert.match(homeResponse.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.match(homeHtml, /<link rel="canonical" href="https:\/\/senpais1lva\.com\/"/);
  assert.match(homeHtml, /"@type":"WebSite"/);
  assert.match(homeHtml, /"@type":"Person"/);
  assert.match(watchHtml, /<title>Watch \| SenpaiS1lva<\/title>/);
  assert.match(watchHtml, /<link rel="canonical" href="https:\/\/senpais1lva\.com\/watch"/);
  assert.match(noteHtml, /"@type":"Article"/);
  assert.match(noteHtml, /"@type":"BreadcrumbList"/);
});

test("renders verified work with me proof without visible raw email text", async () => {
  const response = await renderPath("/work-with-me");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /A niche audience with real creator trust/);
  assert.match(html, /16\.5K/);
  assert.match(html, /Partnership inquiry/);
  assert.doesNotMatch(html, />animejay89@gmail\.com</);
});

test("renders recommendations route with the phase 4 discovery shell", async () => {
  const response = await renderPath("/recommendations");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /Intent-first shelves/);
  assert.match(html, /Anime \+ donghua/);
  assert.match(html, /Loading recommendations/);
});

test("renders senpai notes with metadata and related content paths", async () => {
  const indexResponse = await renderPath("/senpai-notes");
  const indexHtml = await indexResponse.text();
  const detailResponse = await renderPath("/senpai-notes/tournament-arcs-and-ritual");
  const detailHtml = await detailResponse.text();

  assert.equal(indexResponse.status, 200);
  assert.match(indexHtml, /Concise editorial commentary/);
  assert.match(indexHtml, /Updated[\s\S]*2026-07-21/);
  assert.equal(detailResponse.status, 200);
  assert.match(detailHtml, /Keep exploring/);
  assert.match(detailHtml, /Follow the thread/);
  assert.match(detailHtml, /Related note/);
  assert.match(detailHtml, /Find your next watch/);
});

test("recommendation filters are url-aware, accessible, and resettable", async () => {
  const source = await readFile(new URL("../app/components/RecommendationExplorer.tsx", import.meta.url), "utf8");

  assert.match(source, /useSearchParams/);
  assert.match(source, /aria-pressed/);
  assert.match(source, /No current recommendation matches those filters/);
  assert.match(source, /Reset filters/);
});

test("renders robots, sitemap, and accessible 404", async () => {
  const robots = await renderPath("/robots.txt");
  const sitemap = await renderPath("/sitemap.xml");
  const missing = await renderPath("/missing-page-for-tests");
  const robotsText = await robots.text();
  const sitemapText = await sitemap.text();
  const missingHtml = await missing.text();

  assert.equal(robots.status, 200);
  assert.match(robotsText, /Sitemap: https:\/\/senpais1lva\.com\/sitemap\.xml/);
  assert.equal(sitemap.status, 200);
  assert.match(sitemapText, /https:\/\/senpais1lva\.com\/senpai-notes\/tournament-arcs-and-ritual/);
  assert.equal(missing.status, 404);
  assert.match(missingHtml, /This page drifted off schedule/);
  assert.match(missingHtml, /Back home/);
});

test("navigation and coverage controls stay accessible and scoped", async () => {
  const headerSource = await readFile(new URL("../app/components/SiteHeader.tsx", import.meta.url), "utf8");
  const coverageSource = await readFile(new URL("../app/components/CoverageGrid.tsx", import.meta.url), "utf8");

  assert.match(headerSource, /aria-current/);
  assert.match(headerSource, /aria-label=\{open \? "Close navigation menu" : "Open navigation menu"\}/);
  assert.match(headerSource, /role="menuitem"/);
  assert.doesNotMatch(coverageSource, /"use client"/);
  assert.match(coverageSource, /verified episode progress/);
});

test("homepage hero logo hierarchy stays restrained and scoped", async () => {
  const css = await readFile(new URL("../app/donghua.css", import.meta.url), "utf8");
  const globalCss = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(css, /\.hero-logo \{[^}]*width: min\(305px, 30vw\)/);
  assert.match(css, /@media \(max-width: 800px\)[\s\S]*\.hero-logo \{ width: min\(230px, 62vw\); \}/);
  assert.match(globalCss, /\.nav-logo \{/);
});

test("homepage hero copy and secondary cta stay warm and accessible", async () => {
  const response = await renderPath("/");
  const html = await response.text();
  const css = await readFile(new URL("../app/hero-entry.css", import.meta.url), "utf8");
  const layoutSource = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");

  assert.equal(response.status, 200);
  assert.match(html, /<h1>Anime has<br\/><em>more to say\.<\/em><\/h1>/);
  assert.match(html, /class="text-link hero-secondary-link"/);
  assert.match(layoutSource, /import "\.\/hero-entry\.css";/);
  assert.match(css, /\.hero-intro \{[\s\S]*max-width: 435px;[\s\S]*margin-top: 36px;[\s\S]*line-height: 1\.76/);
  assert.match(css, /\.hero-actions \{[\s\S]*gap: 18px;[\s\S]*margin-top: 43px/);
  assert.match(css, /\.hero-secondary-link \{[\s\S]*min-height: 46px;[\s\S]*border: 1px solid rgba\(238,233,226,\.22\)/);
});

test("summer coverage strip is a clear current-content entry point", async () => {
  const response = await renderPath("/");
  const html = await response.text();
  const css = await readFile(new URL("../app/donghua.css", import.meta.url), "utf8");
  const watchResponse = await renderPath("/watch#summer-coverage");
  const watchHtml = await watchResponse.text();

  assert.equal(response.status, 200);
  assert.equal(watchResponse.status, 200);
  assert.match(html, /href="\/watch#summer-coverage"/);
  assert.match(html, /Start with what I’m covering now\./);
  assert.match(html, /Summer 2026 anime &amp; donghua/);
  assert.match(html, /Explore summer coverage/);
  assert.match(watchHtml, /id="summer-coverage"/);
  assert.match(css, /\.current-covering-strip \{[\s\S]*grid-template-columns: minmax\(0, 1fr\) auto;[\s\S]*border: 1px solid rgba\(238,233,226,\.24\)/);
  assert.match(css, /\.coverage-strip-cta \{[\s\S]*min-height: 32px;[\s\S]*border: 1px solid rgba\(238,233,226,\.2\)/);
});

test("global error page exposes recovery controls", async () => {
  const source = await readFile(new URL("../app/error.tsx", import.meta.url), "utf8");

  assert.match(source, /Try again/);
  assert.match(source, /Back home/);
  assert.match(source, /aria-labelledby="error-heading"/);
});
