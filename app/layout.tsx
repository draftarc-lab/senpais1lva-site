import type { Metadata, Viewport } from "next";
import JsonLd from "./components/JsonLd";
import "./globals.css";
import "./donghua.css";
import "./hero-entry.css";
import { personJsonLd, websiteJsonLd } from "./structured-data";
import { defaultOgImage, defaultOgImageAlt, siteUrl } from "./seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "SenpaiS1lva",
  title: { default: "SenpaiS1lva | Anime, culture & conversation", template: "%s | SenpaiS1lva" },
  description: "The official creator headquarters for anime, donghua, recommendations, reactions, culture, psychology, philosophy, and meaningful conversation.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "SenpaiS1lva",
    title: "SenpaiS1lva | Anime has more to say",
    description: "Anime, donghua, culture, recommendations, and the ideas beneath the animation.",
    images: [{ url: defaultOgImage, width: 1200, height: 630, alt: defaultOgImageAlt }],
  },
  twitter: { card: "summary_large_image", title: "SenpaiS1lva | Anime has more to say", description: "Anime, donghua, culture, recommendations, and the ideas beneath the animation.", images: [{ url: defaultOgImage, alt: defaultOgImageAlt }] },
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico", apple: "/senpais1lva-avatar.webp" },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#050505",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><JsonLd data={websiteJsonLd} /><JsonLd data={personJsonLd} />{children}</body></html>;
}
