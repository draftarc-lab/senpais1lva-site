import type { MetadataRoute } from "next";
import { notes } from "./senpai-notes/data";
import { siteUrl } from "./seo";

const staticRoutes = [
  "",
  "/watch",
  "/recommendations",
  "/senpai-notes",
  "/about",
  "/work-with-me",
  "/courplay",
  "/silvas-circle",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-07-21");
  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" as const : "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
  const noteEntries = notes.map((note) => ({
    url: `${siteUrl}/senpai-notes/${note.slug}`,
    lastModified: new Date(note.updatedDate ?? note.publishDate),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...noteEntries];
}
