import { audienceSnapshot } from "./audience";
import { siteUrl } from "./seo";

const logoUrl = `${siteUrl}/nav-logo.webp`;

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "SenpaiS1lva",
  url: siteUrl,
  description: "Anime, donghua, culture, recommendations, and the ideas beneath the animation.",
  publisher: { "@id": `${siteUrl}/#organization` },
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "SenpaiS1lva",
  url: siteUrl,
  logo: logoUrl,
  sameAs: [
    "https://m.youtube.com/@SenpaiS1lva",
    "https://www.tiktok.com/@senpais1lva",
    "https://www.instagram.com/senpais1lva",
    "https://www.facebook.com/share/17zHw4CU8B/",
  ],
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Jonathan Varley-George",
  alternateName: "SenpaiS1lva",
  image: `${siteUrl}/about-silva.webp`,
  jobTitle: "Anime and donghua creator",
  homeLocation: {
    "@type": "Place",
    name: "Orlando, Florida",
  },
  url: siteUrl,
  description: `SenpaiS1lva is a creator focused on anime, donghua, culture, psychology, philosophy, recommendations, and meaningful conversation. Verified audience: ${audienceSnapshot.total.value} followers, updated July 2026.`,
  sameAs: organizationJsonLd.sameAs,
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
