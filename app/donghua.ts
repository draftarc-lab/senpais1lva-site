export const coverageSeason = "Summer 2026 anime & donghua";
export const donghuaCoverageLastUpdated = "Last updated July 2026";

export const creatorActivitySignals = [
  { label: "Season focus", value: "Summer 2026 anime & donghua" },
  { label: "Coverage modes", value: "Recommendations, reactions, culture reads, and deeper episode talk" },
  { label: "Discovery lane", value: "Helping anime fans find story-forward donghua without the search headache" },
  { label: "Best next step", value: "Start with Watch, then use Recommendations when you need a taste-match" },
];

export const donghuaCoverage = [
  {
    title: "The Chosen One",
    alsoKnownAs: ["The Last Dynasty", "Gu Wei Nan Ting", "谷围南亭"],
    description:
      "Folkloric suspense, supernatural mystery, and old forces waking up in a place nobody should have entered.",
    tags: ["Supernatural", "Mystery", "Horror", "Folklore", "Donghua"],
    cta: "Watch my coverage",
  },
  {
    title: "Secrets of the Rivers",
    alsoKnownAs: ["San Xian Lun Hui", "三线轮洄", "Three-Line Reincarnation"],
    description:
      "A mystery-driven donghua with chase scenes, hidden identities, strange family tension, and the kind of episode turns that make reaction content fun.",
    tags: ["Mystery", "Adventure", "Suspense", "Donghua"],
    cta: "Watch my coverage",
  },
  {
    title: "Crowned in a Hundred Days",
    alsoKnownAs: ["Crowned in 100 Days"],
    description:
      "A currently running Crunchyroll donghua about revenge, royal collapse, impostors, and a 100-day countdown to reclaim a throne.",
    tags: ["Action", "Adventure", "Fantasy", "Crunchyroll", "Currently Airing"],
    cta: "Start here",
  },
];

export const currentlyCoveringLine = donghuaCoverage.map((show) => show.title).join(" · ");
