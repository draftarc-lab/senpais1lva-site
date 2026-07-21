export const mediaKitUrl = "https://beacons.ai/senpais1lva/mediakit";

export type AudienceMetric = {
  label: string;
  value: string;
  ariaLabel: string;
  kind: "total" | "platform";
};

export const totalAudienceMetric: AudienceMetric = {
  label: "Combined audience",
  value: "16.5K",
  ariaLabel: "16.5 thousand total followers",
  kind: "total",
};

export const platformAudienceMetrics: AudienceMetric[] = [
  { label: "Facebook", value: "9.9K", ariaLabel: "9.9 thousand Facebook followers", kind: "platform" },
  { label: "Instagram", value: "2.6K", ariaLabel: "2.6 thousand Instagram followers", kind: "platform" },
  { label: "TikTok", value: "1.9K", ariaLabel: "1.9 thousand TikTok followers", kind: "platform" },
  { label: "YouTube", value: "2.1K", ariaLabel: "2.1 thousand YouTube followers", kind: "platform" },
];

export const audienceSnapshot = {
  headline: "Built for anime fans who want more than surface-level takes.",
  verifiedLabel: "Verified via media kit",
  lastUpdated: "Last updated July 2026",
  total: totalAudienceMetric,
  platforms: platformAudienceMetrics,
  metrics: [totalAudienceMetric, ...platformAudienceMetrics],
};

export const partnershipAudienceProof = [
  {
    label: "Total audience",
    value: "16.5K verified followers across the SenpaiS1lva platform mix.",
  },
  {
    label: "Platform mix",
    value: "Facebook, Instagram, TikTok, and YouTube give campaigns multiple natural entry points.",
  },
  {
    label: "Content lanes",
    value: "Recommendations, reactions, culture, psychology, philosophy, and community conversation.",
  },
  {
    label: "Best-fit partners",
    value: "Anime, donghua, entertainment, gaming, technology, conventions, and culture-forward brands.",
  },
];