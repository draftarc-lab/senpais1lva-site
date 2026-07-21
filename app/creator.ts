export type CreatorStatusKind =
  | "Current obsession"
  | "Hot take of the week"
  | "What I am watching"
  | "Recommendation of the week"
  | "Question I am thinking about";

export type CreatorStatusItem = {
  label: CreatorStatusKind;
  value: string;
  href?: string;
  cta?: string;
  featured?: boolean;
};

export const creatorProfile = {
  name: "SenpaiS1lva",
  location: "Orlando, Florida",
  roles: ["Creator", "Host", "Anime and donghua commentator"],
  focus: ["Culture", "Psychology", "Philosophy", "Recommendations", "Conversation"],
};

export const creatorStatusItems: CreatorStatusItem[] = [
  {
    label: "What I am watching",
    value:
      "Summer 2026 anime and donghua, with The Chosen One, Secrets of the Rivers, and Crowned in a Hundred Days leading the board.",
    href: "/#summer-coverage",
    cta: "See the watch board",
    featured: true,
  },
  {
    label: "Question I am thinking about",
    value: "What does anime let us feel before we have the words for it?",
    href: "/senpai-notes",
    cta: "Continue the thought",
    featured: true,
  },
];

export const featuredCreatorStatusItems = creatorStatusItems.filter((item) => item.featured).slice(0, 2);