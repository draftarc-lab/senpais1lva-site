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

export const currentCreatorSignal = {
  label: "Current lane",
  value: "Romance, cyberpunk, manhwa power plays, fantasy adventure, and comfort-watch worldbuilding.",
};

export const creatorStatusItems: CreatorStatusItem[] = [
  {
    label: "What I am watching",
    value:
      "Heroine? Saint?, The Exiled Heavy Knight, THE GHOST IN THE SHELL, Tomb Raider King, and The Cat and the Dragon are on the board.",
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
