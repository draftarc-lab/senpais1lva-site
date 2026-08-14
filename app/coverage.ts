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
  homepageDescription?: string;
  status: string;
  pickLabel?: string;
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
  homepageDescription?: string;
  publishDate?: string;
  featured?: boolean;
  duration?: string;
  cta: string;
  relatedNoteSlug?: string;
  relatedRecommendationSlug?: string;
};

export const coverageSeason = "What’s Got My Attention";
export const coverageLastUpdated = "Last updated August 2026";
export const coverageIntro =
  "Five shows I’m having the most fun with right now. Different genres, completely different vibes, and all worth putting on your radar.";

export const summerCoverage: CoverageEntry[] = [
  {
    slug: "tomb-raider-king",
    canonicalTitle: "Tomb Raider King",
    alternateTitles: [],
    contentType: "anime",
    genres: ["Action", "Fantasy", "Manhwa"],
    description:
      "The Solo Leveling comparisons are obvious, but I might actually like Jooheon more. OP is fun. OP with personality is better.",
    status: "Recommended now",
    pickLabel: "Senpai Pick",
    lastUpdated: "August 2026",
    coverageUrl: "/watch#tomb-raider-king",
    streaming: {
      label: "Watch on Crunchyroll",
      url: "https://www.crunchyroll.com/",
    },
    featured: true,
    cta: "Why I recommend it",
    relatedRecommendationSlug: "tomb-raider-king",
  },
  {
    slug: "heroine-saint-all-works-maid",
    canonicalTitle: "Heroine? Saint? No, I’m an All-Works Maid (And Proud of It)!",
    alternateTitles: [],
    contentType: "anime",
    genres: ["Romance", "Comedy", "Fantasy"],
    description:
      "Melody might be destined to save the world, but she’d honestly rather perfect her maid work. Funny, charming, and one of my favorite romances this season.",
    status: "Recommended now",
    lastUpdated: "August 2026",
    coverageUrl: "/watch#heroine-saint-all-works-maid",
    streaming: {
      label: "Watch on Crunchyroll",
      url: "https://www.crunchyroll.com/",
    },
    cta: "Why I recommend it",
    relatedRecommendationSlug: "heroine-saint-all-works-maid",
  },
  {
    slug: "exiled-heavy-knight",
    canonicalTitle: "The Exiled Heavy Knight Knows How to Game the System",
    alternateTitles: [],
    contentType: "anime",
    genres: ["Fantasy", "Action", "Game System"],
    description:
      "Everybody thinks Heavy Knight is a trash class. Elma basically responds, “Nah, your build just sucks.” That alone sold me.",
    status: "Recommended now",
    lastUpdated: "August 2026",
    coverageUrl: "/watch#exiled-heavy-knight",
    streaming: {
      label: "Watch on Crunchyroll",
      url: "https://www.crunchyroll.com/",
    },
    cta: "Why I recommend it",
    relatedRecommendationSlug: "exiled-heavy-knight",
  },
  {
    slug: "the-ghost-in-the-shell-2026",
    canonicalTitle: "THE GHOST IN THE SHELL",
    alternateTitles: ["2026 Prime Video series"],
    contentType: "anime",
    genres: ["Sci-Fi", "Cyberpunk", "Thriller"],
    description:
      "Cyberpunk is at its best when the technology actually raises uncomfortable questions. Ghost in the Shell still understands that.",
    status: "Recommended now",
    lastUpdated: "August 2026",
    coverageUrl: "/watch#the-ghost-in-the-shell-2026",
    streaming: {
      label: "Watch on Prime Video",
      url: "https://www.primevideo.com/",
    },
    cta: "Why I recommend it",
    relatedRecommendationSlug: "the-ghost-in-the-shell-2026",
  },
  {
    slug: "the-cat-and-the-dragon",
    canonicalTitle: "The Cat and the Dragon",
    alternateTitles: [],
    contentType: "anime",
    genres: ["Fantasy", "Adventure", "Wholesome"],
    description:
      "A dragon raised by magical cats should not have this much worldbuilding and heart, but somehow it absolutely does.",
    status: "Recommended now",
    lastUpdated: "August 2026",
    coverageUrl: "/watch#the-cat-and-the-dragon",
    streaming: {
      label: "Watch on Crunchyroll",
      url: "https://www.crunchyroll.com/",
    },
    cta: "Why I recommend it",
    relatedRecommendationSlug: "the-cat-and-the-dragon",
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
    homepageDescription:
      "Start here first for longer breakdowns, fresh reactions, and current coverage without digging through every platform feed yourself.",
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
    homepageDescription:
      "A clean entry into the SenpaiS1lva lens: reactions are fun, but the real conversation starts after the credits.",
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
    homepageDescription:
      "Fast creator energy with a clear point of view, built to give fans something to argue with after the reel.",
    featured: true,
    cta: "Watch the reaction",
    relatedNoteSlug: "the-fantasy-of-doing-everything-alone",
    relatedRecommendationSlug: "hunter-x-hunter",
  },
  {
    slug: "summer-donghua-coverage",
    title: "What’s Got My Attention",
    platform: "Site",
    url: "/watch#summer-coverage",
    thumbnail: "/cityscape.jpeg",
    category: "Recommendations",
    animeOrDonghuaTitle: currentlyCoveringLine,
    description:
      "Follow the five anime recommendations Silva is having the most fun with right now.",
    featured: true,
    cta: "See my coverage",
    relatedRecommendationSlug: "tomb-raider-king",
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
