import { summerCoverage } from "../coverage";

export type RecommendationType = "anime" | "donghua";
export type RecommendationGroup =
  | "Start Here"
  | "Hidden Gems"
  | "Dark and Psychological"
  | "Adventure and Fantasy"
  | "Donghua Gateway"
  | "Character-Driven"
  | "Easy Weekend Watch"
  | "Currently Airing";
export type CommitmentLevel = "Short watch" | "Weekend watch" | "Long watch" | "Currently airing";

export type Recommendation = {
  slug: string;
  canonicalTitle: string;
  alternateTitle?: string;
  type: RecommendationType;
  genres: string[];
  mood: string;
  moodGroups: string[];
  commitment: CommitmentLevel;
  whySilvaRecommends: string;
  bestFitViewer: string;
  contentWarning?: string;
  externalAvailability?: {
    label: string;
    url: string;
  };
  image: string;
  groups: RecommendationGroup[];
  featured?: boolean;
  relatedNoteSlug?: string;
  relatedCoverageSlug?: string;
  relatedVideoSlug?: string;
};

const foundationalRecommendations: Recommendation[] = [
  {
    slug: "code-geass",
    canonicalTitle: "Code Geass",
    type: "anime",
    genres: ["Strategy", "Mecha", "Political", "Drama"],
    mood: "Rebellion, impossible choices, theatrical genius",
    moodGroups: ["Strategy", "Political", "Character-driven"],
    commitment: "Long watch",
    whySilvaRecommends:
      "It turns spectacle into a debate about power, sacrifice, ego, and what people become when they believe the end justifies the move.",
    bestFitViewer: "Fans who want big twists, mind games, and a main character worth arguing about.",
    image: "/cityscape.jpeg",
    groups: ["Start Here", "Dark and Psychological", "Character-Driven"],
    featured: true,
  },
  {
    slug: "hunter-x-hunter",
    canonicalTitle: "Hunter × Hunter",
    type: "anime",
    genres: ["Adventure", "Fantasy", "Shonen", "Coming-of-age"],
    mood: "Bright adventure that keeps revealing sharper teeth",
    moodGroups: ["Adventure", "Growth", "Character-driven"],
    commitment: "Long watch",
    whySilvaRecommends:
      "It starts like a colorful journey and slowly becomes one of anime's cleanest arguments for how rules, desire, and morality shape power.",
    bestFitViewer: "Viewers who want friendship, exploration, and a power system that rewards paying attention.",
    image: "/senpais1lva-logo.jpeg",
    groups: ["Start Here", "Adventure and Fantasy", "Character-Driven"],
    featured: true,
    relatedNoteSlug: "the-fantasy-of-doing-everything-alone",
  },
  {
    slug: "attack-on-titan",
    canonicalTitle: "Attack on Titan",
    type: "anime",
    genres: ["Action", "Political", "Tragedy", "Mystery"],
    mood: "Survival horror becomes political tragedy",
    moodGroups: ["Political", "Dark", "Mystery"],
    commitment: "Long watch",
    whySilvaRecommends:
      "It gives you action first, then asks what freedom means when history, propaganda, and fear are already inside the walls.",
    bestFitViewer: "Fans who want a story that keeps changing the moral ground underneath them.",
    contentWarning: "Graphic violence and heavy war themes.",
    image: "/cityscape.jpeg",
    groups: ["Start Here", "Dark and Psychological"],
    featured: true,
  },
  {
    slug: "odd-taxi",
    canonicalTitle: "Odd Taxi",
    type: "anime",
    genres: ["Mystery", "Crime", "Character drama"],
    mood: "Urban mystery where every throwaway line matters",
    moodGroups: ["Mystery", "Character-driven", "Hidden gem"],
    commitment: "Short watch",
    whySilvaRecommends:
      "It is proof that a quiet conversation can be as tense as a fight scene when the writing knows exactly where it is going.",
    bestFitViewer: "People who like compact stories, layered dialogue, and endings that make the whole puzzle click.",
    image: "/cityscape.jpeg",
    groups: ["Hidden Gems", "Character-Driven", "Easy Weekend Watch"],
    featured: true,
  },
  {
    slug: "akudama-drive",
    canonicalTitle: "Akudama Drive",
    type: "anime",
    genres: ["Action", "Cyberpunk", "Sci-fi", "Crime"],
    mood: "Neon chaos with a class-conscious core",
    moodGroups: ["Action", "Cyberpunk", "Hidden gem"],
    commitment: "Short watch",
    whySilvaRecommends:
      "It is loud, stylish, and direct, but the best part is how quickly its criminal spectacle becomes a story about systems and disposable people.",
    bestFitViewer: "Viewers who want a sharp single-season ride with visual bite.",
    contentWarning: "Stylized violence.",
    image: "/cityscape.jpeg",
    groups: ["Hidden Gems", "Easy Weekend Watch"],
  },
  {
    slug: "dorohedoro",
    canonicalTitle: "Dorohedoro",
    type: "anime",
    genres: ["Dark fantasy", "Action", "Comedy", "Mystery"],
    mood: "Filthy, funny, violent, and weirdly warm",
    moodGroups: ["Dark", "Weird", "Character-driven"],
    commitment: "Weekend watch",
    whySilvaRecommends:
      "The world is disgusting in the best way, but the charm is how human everyone feels even when nobody is behaving normally.",
    bestFitViewer: "Fans who like grimy fantasy, chaotic friend groups, and stories with texture.",
    contentWarning: "Violence and body horror.",
    image: "/cityscape.jpeg",
    groups: ["Hidden Gems", "Dark and Psychological", "Character-Driven"],
  },
  {
    slug: "link-click",
    canonicalTitle: "Link Click",
    alternateTitle: "Shiguang Dailiren",
    type: "donghua",
    genres: ["Thriller", "Mystery", "Drama", "Supernatural"],
    mood: "Time-bending suspense built around empathy",
    moodGroups: ["Mystery", "Emotional", "Donghua gateway"],
    commitment: "Weekend watch",
    whySilvaRecommends:
      "It makes time travel personal. Every case is a reminder that changing one moment can pull grief, memory, and consequence into the room.",
    bestFitViewer: "Anime fans curious about donghua but looking for an easy emotional bridge.",
    image: "/cityscape.jpeg",
    groups: ["Donghua Gateway", "Dark and Psychological", "Character-Driven"],
    featured: true,
  },
  {
    slug: "lord-of-mysteries",
    canonicalTitle: "Lord of Mysteries",
    type: "donghua",
    genres: ["Occult", "Mystery", "Fantasy", "Worldbuilding"],
    mood: "Dense supernatural systems, factions, and hidden history",
    moodGroups: ["Mystery", "Fantasy", "Worldbuilding"],
    commitment: "Long watch",
    whySilvaRecommends:
      "It is built for viewers who enjoy piecing together rituals, power structures, and a world that feels bigger than the episode in front of you.",
    bestFitViewer: "Worldbuilding people. Lore board people. The 'wait, let me pause that' crowd.",
    image: "/senpais1lva-logo.jpeg",
    groups: ["Donghua Gateway", "Adventure and Fantasy"],
  },
];

const coverageRecommendations: Recommendation[] = summerCoverage.map((show) => ({
  slug: show.slug,
  canonicalTitle: show.canonicalTitle,
  alternateTitle: show.alternateTitles[0],
  type: show.contentType,
  genres: show.genres,
  mood: show.genres.slice(0, 3).join(", "),
  moodGroups: show.contentType === "donghua" ? ["Donghua gateway", show.genres[0]] : [show.genres[0]],
  commitment: show.status.toLowerCase().includes("airing") ? "Currently airing" : "Weekend watch",
  whySilvaRecommends: show.description,
  bestFitViewer: "Viewers who want to follow what Silva is actively covering right now.",
  externalAvailability: show.streaming,
  image: show.image ?? "/cityscape.jpeg",
  groups: ["Currently Airing", "Donghua Gateway"],
  featured: show.featured,
  relatedCoverageSlug: show.slug,
}));

export const recommendations: Recommendation[] = [...foundationalRecommendations, ...coverageRecommendations];

export const recommendationGroups: RecommendationGroup[] = [
  "Start Here",
  "Currently Airing",
  "Donghua Gateway",
  "Hidden Gems",
  "Dark and Psychological",
  "Adventure and Fantasy",
  "Character-Driven",
  "Easy Weekend Watch",
];

export const featuredRecommendations = recommendations.filter((item) => item.featured).slice(0, 6);

export function getRecommendationBySlug(slug?: string) {
  return recommendations.find((item) => item.slug === slug);
}