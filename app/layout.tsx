import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://senpais1lva.com"),
  title: { default: "SenpaiS1lva | Anime, culture & conversation", template: "%s | SenpaiS1lva" },
  description: "The official creator headquarters of SenpaiS1lva.",
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
  return <html lang="en"><body>{children}</body></html>;
}
