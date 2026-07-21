import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

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

test("renders development preview metadata", async () => {
  const response = await renderPath("/");

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  assert.match(await response.text(), developmentPreviewMeta);
});

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

test("renders verified work with me proof without visible raw email text", async () => {
  const response = await renderPath("/work-with-me");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /A niche audience with real creator trust/);
  assert.match(html, /16\.5K/);
  assert.match(html, /Partnership inquiry/);
  assert.doesNotMatch(html, />animejay89@gmail\.com</);
});