export type CoverageContentType = "anime" | "donghua";

export type CoverageLink = {
  label: string;
  url: string;
};

export type CoverageEntry = {
  slug: string;
  canonicalTitle: string;
  alternateTitles: string[];
  contentType: CoverageContentType;
  genres: string[];
  description: string;
  status: string;
  currentEpisode?: number;
  totalEpisodes?: number;
  lastUpdated: string;
  coverageUrl: string;
  streaming?: CoverageLink;
  image?: string;
  featured?: boolean;
  cta: string;
  relatedRecommendationSlug?: string;
};

export type FeaturedVideo = {
  slug: string;
  title: string;
  platform: "YouTube" | "Instagram" | "TikTok" | "Site";
  url: string;
  thumbnail?: string;
  category: "Latest video" | "Anime analysis" | "Donghua coverage" | "Recommendations" | "Reactions";
  animeOrDonghuaTitle: string;
  description: string;
  publishDate?: string;
  featured?: boolean;
  duration?: string;
  cta: string;
  relatedNoteSlug?: string;
  relatedRecommendationSlug?: string;
};

export const coverageSeason = "Summer 2026 anime & donghua";
export const coverageLastUpdated = "Last updated July 2026";

export const creatorActivitySignals = [
  { label: "Season focus", value: "Summer 2026 anime & donghua" },
  { label: "Coverage modes", value: "Recommendations, reactions, culture reads, and deeper episode talk" },
  { label: "Discovery lane", value: "Helping anime fans find story-forward donghua without the search headache" },
  { label: "Best next step", value: "Start with Watch, then use Recommendations when you need a taste-match" },
];

export const summerCoverage: CoverageEntry[] = [
  {
    slug: "the-chosen-one",
    canonicalTitle: "The Chosen One",
    alternateTitles: ["The Last Dynasty", "Gu Wei Nan Ting", "谷围南亭"],
    contentType: "donghua",
    genres: ["Supernatural", "Mystery", "Horror", "Folklore"],
    description:
      "Folkloric suspense, supernatural mystery, and old forces waking up in a place nobody should have entered.",
    status: "Actively covering",
    lastUpdated: "July 2026",
    coverageUrl: "/watch#the-chosen-one",
    streaming: {
      label: "Watch on WeTV",
      url: "https://wetv.vip/en/play/j5ygsbp73vk24k5/o4101ibnvkw-EP01%3A_The_Chosen_One",
    },
    featured: true,
    cta: "Watch my coverage",
    relatedRecommendationSlug: "the-chosen-one",
  },
  {
    slug: "secrets-of-the-rivers",
    canonicalTitle: "Secrets of the Rivers",
    alternateTitles: ["San Xian Lun Hui", "三线轮洄", "Three-Line Reincarnation"],
    contentType: "donghua",
    genres: ["Mystery", "Adventure", "Suspense"],
    description:
      "A mystery-driven donghua with chase scenes, hidden identities, strange family tension, and the kind of episode turns that make reaction content fun.",
    status: "Actively covering",
    lastUpdated: "July 2026",
    coverageUrl: "/watch#secrets-of-the-rivers",
    featured: true,
    cta: "Watch my coverage",
    relatedRecommendationSlug: "secrets-of-the-rivers",
  },
  {
    slug: "crowned-in-a-hundred-days",
    canonicalTitle: "Crowned in a Hundred Days",
    alternateTitles: ["Crowned in 100 Days", "Bai Ri Cheng Wang"],
    contentType: "donghua",
    genres: ["Action", "Adventure", "Fantasy", "Crunchyroll", "Currently Airing"],
    description:
      "A currently running Crunchyroll donghua about revenge, royal collapse, impostors, and a 100-day countdown to reclaim a throne.",
    status: "Currently airing; actively covering",
    lastUpdated: "July 2026",
    coverageUrl: "/watch#crowned-in-a-hundred-days",
    streaming: {
      label: "Watch on Crunchyroll",
      url: "https://www.crunchyroll.com/series/GT00379214/crowned-in-a-hundred-days",
    },
    featured: true,
    cta: "Start here",
    relatedRecommendationSlug: "crowned-in-a-hundred-days",
  },
];

export const featuredCoverage = summerCoverage.filter((entry) => entry.featured);
export const currentlyCoveringLine = featuredCoverage.map((entry) => entry.canonicalTitle).join(" · ");

export const featuredVideos: FeaturedVideo[] = [
  {
    slug: "latest-youtube",
    title: "Latest uploads on YouTube",
    platform: "YouTube",
    url: "https://m.youtube.com/@SenpaiS1lva/videos",
    thumbnail: "/senpais1lva-logo.jpeg",
    category: "Latest video",
    animeOrDonghuaTitle: "Current feed",
    description:
      "The cleanest place to catch longer breakdowns, fresh reactions, and current video coverage without digging through every platform.",
    featured: true,
    cta: "Watch on YouTube",
  },
  {
    slug: "anime-has-more-to-say",
    title: "Anime has more to say",
    platform: "Instagram",
    url: "https://www.instagram.com/reel/DaQZXg2NcXB/?igsh=MWQ5YzF0aGNyY291eA==",
    thumbnail: "/senpais1lva-logo.jpeg",
    category: "Anime analysis",
    animeOrDonghuaTitle: "Anime culture",
    description:
      "A sharp entry point into the SenpaiS1lva lens: reactions are fun, but the conversation after the credits is where the good stuff lives.",
    featured: true,
    cta: "Watch the breakdown",
    relatedNoteSlug: "why-anime-loves-school",
  },
  {
    slug: "reaction-clips-that-open-conversation",
    title: "Reaction clips that open the conversation",
    platform: "Instagram",
    url: "https://www.instagram.com/reel/DadRSn7tibw/?igsh=MTF3MWNjZ3NmNms4cQ==",
    thumbnail: "/about-silva.webp",
    category: "Reactions",
    animeOrDonghuaTitle: "Anime commentary",
    description:
      "Fast creator energy with a point of view: the kind of clip that gives fans a reason to keep talking after the reel ends.",
    featured: true,
    cta: "Watch the reaction",
    relatedNoteSlug: "the-fantasy-of-doing-everything-alone",
    relatedRecommendationSlug: "hunter-x-hunter",
  },
  {
    slug: "summer-donghua-coverage",
    title: "Summer 2026 donghua coverage board",
    platform: "Site",
    url: "/watch#summer-coverage",
    thumbnail: "/cityscape.jpeg",
    category: "Donghua coverage",
    animeOrDonghuaTitle: currentlyCoveringLine,
    description:
      "Follow the active watch board for the donghua Silva is covering, including alternate titles so you can actually find the shows.",
    featured: true,
    cta: "See my coverage",
    relatedRecommendationSlug: "the-chosen-one",
  },
  {
    slug: "recommendation-map",
    title: "Find your next obsession",
    platform: "Site",
    url: "/recommendations",
    thumbnail: "/cityscape.jpeg",
    category: "Recommendations",
    animeOrDonghuaTitle: "Anime and donghua picks",
    description:
      "Mood-first recommendations for viewers who want taste, context, and a reason to start instead of another recycled ranking.",
    featured: true,
    cta: "Explore all videos",
    relatedRecommendationSlug: "link-click",
  },
  {
    slug: "fast-reactions",
    title: "Fast reactions and commentary",
    platform: "TikTok",
    url: "https://www.tiktok.com/@senpais1lva",
    thumbnail: "/about-silva.webp",
    category: "Reactions",
    animeOrDonghuaTitle: "Current anime moments",
    description:
      "Short-form reactions, quick reads, and the kind of anime moments that need one more person yelling about them with taste.",
    featured: true,
    cta: "Watch on TikTok",
  },
];

const selectedWorkSlugs = new Set([
  "latest-youtube",
  "anime-has-more-to-say",
  "reaction-clips-that-open-conversation",
]);

export const selectedWorkVideos = featuredVideos.filter((video) => selectedWorkSlugs.has(video.slug));