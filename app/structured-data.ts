import { audienceSnapshot } from "./audience";
import { siteUrl, socialProfileUrls } from "./seo";

const profileImageUrl = `${siteUrl}/senpais1lva-profile.webp`;
const officialSocialProfiles = [
  socialProfileUrls.youtube,
  socialProfileUrls.tiktok,
  socialProfileUrls.facebook,
  socialProfileUrls.instagram,
];

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "SenpaiS1lva",
  url: siteUrl,
  description: "Anime, donghua, culture, recommendations, and the ideas beneath the animation.",
  publisher: { "@id": `${siteUrl}/#person` },
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Jonathan Varley-George",
  alternateName: "SenpaiS1lva",
  image: profileImageUrl,
  jobTitle: "Anime and donghua creator",
  homeLocation: {
    "@type": "Place",
    name: "Orlando, Florida",
  },
  url: siteUrl,
  description: `SenpaiS1lva is a creator focused on anime, donghua, culture, psychology, philosophy, recommendations, and meaningful conversation. Verified audience: ${audienceSnapshot.total.value} followers.`,
  sameAs: officialSocialProfiles,
};

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}
