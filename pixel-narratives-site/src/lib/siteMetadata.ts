import type { Metadata } from "next";

export const SITE_NAME = "Pixel Narratives";
export const SITE_URL = "https://pixelnarratives.studio";

export const DEFAULT_DESCRIPTION =
  "Pixel Narratives helps businesses save time, win more customers, and get more done through automation, implementation, training, online visibility, and marketing.";

export const DEFAULT_OG_IMAGE = "/images/home-cinematic.jpg";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  imageAlt = "Pixel Narratives cinematic brand visual",
}: PageMetadataInput): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: path === "/" ? "/" : path },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pixel Narratives | Save Time. Win More Customers. Get More Done.",
    template: "%s",
  },
  description: DEFAULT_DESCRIPTION,
  icons: {
    icon: "/brand/logo-mark.png",
    apple: "/brand/logo-mark.png",
  },
  openGraph: {
    title: "Pixel Narratives | Save Time. Win More Customers. Get More Done.",
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Pixel Narratives homepage cinematic visual",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixel Narratives | Save Time. Win More Customers. Get More Done.",
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  other: {
    "llms-txt": `${SITE_URL}/llms.txt`,
  },
};
