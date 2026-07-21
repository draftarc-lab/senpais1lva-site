import type { Metadata } from "next";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://senpais1lva.com";
export const defaultOgImage = "/og-image.jpg";

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
      images: [{ url: image, width: 1200, height: 630, alt: `${title} from SenpaiS1lva` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | SenpaiS1lva`,
      description,
      images: [image],
    },
  };
}
