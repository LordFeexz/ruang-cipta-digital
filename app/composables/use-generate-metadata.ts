export interface OpenGraphImage {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
  type?: string;
}

export interface OpenGraphOptions {
  title?: string;
  description?: string;
  url?: string;
  siteName?: string;
  type?: string;
  locale?: string;
  alternateLocale?: string[];
  countryName?: string;
  image?: OpenGraphImage | OpenGraphImage[];
}

export interface PaginationOptions {
  prev?: string;
  next?: string;
}

export interface TwitterOptions {
  card?: "summary" | "summary_large_image" | "app" | "player";
  title?: string;
  description?: string;
  site?: string;
  creator?: string;
  image?: OpenGraphImage | OpenGraphImage[];
}

export interface MetadataOptions {
  title: string;
  description: string;
  keywords?: string[];
  robots?: {
    index?: boolean;
    follow?: boolean;
    googleBot?: { index?: boolean; follow?: boolean };
  };
  alternates?: {
    canonical?: string;
    languages?: Record<string, string>;
  };
  og?: OpenGraphOptions;
  twitter?: TwitterOptions;
  pagination?: PaginationOptions;
}

export default function useGenerateMetadata({
  title,
  description,
  keywords,
  robots,
  alternates,
  og,
  twitter,
  pagination,
}: MetadataOptions) {
  const normalizeImages = (img?: OpenGraphImage | OpenGraphImage[]) =>
    !img ? [] : Array.isArray(img) ? img : [img];

  const tw = twitter ?? {
    title: og?.title ?? title,
    description: og?.description ?? description,
    image: og?.image,
    card: og?.image ? "summary_large_image" : "summary",
  };

  const ogImages = normalizeImages(og?.image);
  const twImages = normalizeImages(tw?.image ?? og?.image);

  useHead({
    title,
    meta: [
      { name: "description", content: description },
      { name: "keywords", content: keywords?.join(",") },

      robots
        ? {
            name: "robots",
            content: `${robots.index ? "index" : "noindex"}, ${
              robots.follow ? "follow" : "nofollow"
            }`,
          }
        : null,
      robots?.googleBot
        ? {
            name: "googlebot",
            content: `${robots.googleBot.index ? "index" : "noindex"}, ${
              robots.googleBot.follow ? "follow" : "nofollow"
            }`,
          }
        : null,

      ...(og
        ? [
            { property: "og:title", content: og.title ?? title },
            {
              property: "og:description",
              content: og.description ?? description,
            },
            { property: "og:type", content: og.type ?? "website" },
            { property: "og:site_name", content: og.siteName },
            { property: "og:url", content: og.url },
            { property: "og:locale", content: og.locale },
            ...(og.alternateLocale?.map((loc) => ({
              property: "og:locale:alternate",
              content: loc,
            })) || []),
            { property: "og:country-name", content: og.countryName },
            ...ogImages.flatMap((img) => [
              { property: "og:image", content: img.url },
              img.width
                ? { property: "og:image:width", content: String(img.width) }
                : null,
              img.height
                ? { property: "og:image:height", content: String(img.height) }
                : null,
              img.alt ? { property: "og:image:alt", content: img.alt } : null,
              img.type
                ? { property: "og:image:type", content: img.type }
                : null,
            ]),
          ]
        : []),

      ...(tw
        ? [
            { name: "twitter:card", content: tw.card ?? "summary" },
            { name: "twitter:title", content: tw.title ?? title },
            {
              name: "twitter:description",
              content: tw.description ?? description,
            },
            tw.site ? { name: "twitter:site", content: tw.site } : null,
            tw.creator
              ? { name: "twitter:creator", content: tw.creator }
              : null,
            ...twImages.flatMap((img) => [
              { name: "twitter:image", content: img.url },
              img.alt ? { name: "twitter:image:alt", content: img.alt } : null,
            ]),
          ]
        : []),
    ].filter(Boolean),
    link: [
      { rel: "canonical", href: alternates?.canonical },
      ...(alternates?.languages
        ? Object.entries(alternates.languages).map(([lang, href]) => ({
            rel: "alternate",
            hreflang: lang,
            href,
          }))
        : []),
      ...(pagination?.prev ? [{ rel: "prev", href: pagination.prev }] : []),
      ...(pagination?.next ? [{ rel: "next", href: pagination.next }] : []),
    ],
  });
}
