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

test("homepage current lane signal is centralized, editorial, and not live", async () => {
  const response = await renderPath("/");
  const html = await response.text();
  const creatorSource = await readFile(new URL("../app/creator.ts", import.meta.url), "utf8");
  const css = await readFile(new URL("../app/donghua.css", import.meta.url), "utf8");

  assert.equal(response.status, 200);
  assert.match(creatorSource, /export const currentCreatorSignal/);
  assert.match(html, /Current lane/);
  assert.match(html, /Summer 2026 anime, mystery donghua, revenge arcs, and character psychology\./);
  assert.doesNotMatch(html, /updated today/i);
  assert.match(css, /\.creator-lane-signal \{[\s\S]*width: min\(100%, 620px\);[\s\S]*font-size: 13px;[\s\S]*line-height: 1\.55/);
});

test("homepage fan pathways use conversational intent copy and clear destinations", async () => {
  const response = await renderPath("/");
  const html = await response.text();
  const globalCss = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.equal(response.status, 200);
  assert.match(html, /What kind of fan are you\?/);
  assert.match(html, /href="\/recommendations"[\s\S]*I need something to watch tonight[\s\S]*Find your next watch/);
  assert.match(html, /href="\/senpai-notes"[\s\S]*I want the deeper take[\s\S]*Read Senpai Notes/);
  assert.match(html, /href="\/work-with-me"[\s\S]*I want to collaborate[\s\S]*View collab options/);
  assert.match(html, /Open mood-first anime and donghua picks when you want a real recommendation/);
  assert.match(html, /Read notes that unpack culture, psychology, philosophy/);
  assert.match(html, /See partnership paths for anime, gaming, entertainment, tech/);
  assert.doesNotMatch(html, /Learn more/);
  assert.match(globalCss, /\.fan-card:hover, \.fan-card:focus-visible \{[\s\S]*border-color: rgba\(237,0,102,\.62\)/);
});

test("homepage introduces Silva real photo before the first major content grid", async () => {
  const response = await renderPath("/");
  const html = await response.text();
  const pageSource = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const css = await readFile(new URL("../app/donghua.css", import.meta.url), "utf8");

  assert.equal(response.status, 200);
  assert.ok(html.indexOf("creator-trust-strip") > -1);
  assert.ok(html.indexOf("creator-trust-strip") < html.indexOf("id=\"summer-coverage\""));
  assert.match(html, /A real voice behind the anime talk/);
  assert.match(html, /href="\/about"[\s\S]*Meet Silva/);
  assert.match(pageSource, /className="creator-trust-photo" src="\/about-silva\.webp"/);
  assert.match(pageSource, /width=\{112\} height=\{112\}/);
  assert.match(pageSource, /loading="lazy"/);
  assert.match(pageSource, /alt="SenpaiS1lva smiling at a restaurant"/);
  assert.match(css, /\.creator-trust-strip \{[\s\S]*grid-template-columns: auto minmax\(0, 1fr\) auto/);
  assert.match(css, /@media \(max-width: 800px\)[\s\S]*\.creator-trust-strip \{ grid-template-columns: auto minmax\(0, 1fr\)/);
});

test("homepage card previews stay concise without replacing destination copy", async () => {
  const homeResponse = await renderPath("/");
  const homeHtml = await homeResponse.text();
  const watchResponse = await renderPath("/watch");
  const watchHtml = await watchResponse.text();

  assert.equal(homeResponse.status, 200);
  assert.equal(watchResponse.status, 200);
  assert.match(homeHtml, /This is folklore, dread, and supernatural mystery colliding as old forces wake/);
  assert.match(homeHtml, /A chase-heavy mystery where hidden identities, family tension, and sharp episode turns/);
  assert.match(homeHtml, /Start here first for longer breakdowns, fresh reactions, and current coverage/);
  assert.match(homeHtml, /School works because it gives anime hierarchy, pressure, belonging/);
  assert.match(homeHtml, /Open mood-first anime and donghua picks when you want a real recommendation/);
  assert.match(watchHtml, /A mystery-driven donghua with chase scenes, hidden identities, strange family tension/);
  assert.match(watchHtml, /The cleanest place to catch longer breakdowns, fresh reactions, and current video coverage/);
});

test("global error page exposes recovery controls", async () => {
  const source = await readFile(new URL("../app/error.tsx", import.meta.url), "utf8");

  assert.match(source, /Try again/);
  assert.match(source, /Back home/);
  assert.match(source, /aria-labelledby="error-heading"/);
});
