import type { Metadata } from "next";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://senpais1lva.com";
export const defaultOgImage = "/og-image.jpg";
export const defaultOgImageAlt = "SenpaiS1lva creator artwork with readable brand logo over a rainy futuristic city";

export const socialProfileUrls = {
  youtube: "https://m.youtube.com/@SenpaiS1lva",
  tiktok: "https://www.tiktok.com/@senpais1lva",
  facebook: "https://www.facebook.com/share/17zHw4CU8B/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/senpais1lva?igsh=Z3YzMnU5bXFyNHdv&utm_source=qr",
} as const;

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function pageMetadata({ title, description, path, image = defaultOgImage }: PageMetadataInput): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "website",
      url: canonicalPath,
      siteName: "SenpaiS1lva",
      title: `${title} | SenpaiS1lva`,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: image === defaultOgImage ? defaultOgImageAlt : `${title} from SenpaiS1lva` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | SenpaiS1lva`,
      description,
      images: [{ url: image, alt: image === defaultOgImage ? defaultOgImageAlt : `${title} from SenpaiS1lva` }],
    },
  };
}
