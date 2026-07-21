import type { Metadata } from "next";
import JsonLd from "./components/JsonLd";
import "./globals.css";
import "./donghua.css";
import { organizationJsonLd, personJsonLd, websiteJsonLd } from "./structured-data";
import { siteUrl } from "./seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "SenpaiS1lva | Anime, culture & conversation", template: "%s | SenpaiS1lva" },
  description: "The official creator headquarters for anime, donghua, recommendations, reactions, culture, psychology, philosophy, and meaningful conversation.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "SenpaiS1lva",
    title: "SenpaiS1lva | Anime has more to say",
    description: "Anime, donghua, culture, recommendations, and the ideas beneath the animation.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SenpaiS1lva creator artwork over a rainy futuristic city" }],
  },
  twitter: { card: "summary_large_image", title: "SenpaiS1lva", description: "Anime has more to say.", images: ["/og-image.jpg"] },
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico", apple: "/nav-logo.webp" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><JsonLd data={websiteJsonLd} /><JsonLd data={organizationJsonLd} /><JsonLd data={personJsonLd} />{children}</body></html>;
}
