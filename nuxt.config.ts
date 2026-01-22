// https://nuxt.com/docs/api/configuration/nuxt-config
const LANGS = ["en", "id"];
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/a11y",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/hints",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "nuxt-elysia",
  ],
  shadcn: {
    /**
     * Prefix for all the imported component.
     * @default "Ui"
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * Will respect the Nuxt aliases.
     * @link https://nuxt.com/docs/api/nuxt-config#alias
     * @default "@/components/ui"
     */
    componentDir: "@/components/ui",
  },
  colorMode: {
    classSuffix: "",
  },
  robots: {
    groups: [
      {
        disallow: ["/api/*"],
        userAgent: "*",
        allow: "/",
        contentUsage: {
          bots: "y",
          "train-ai": "y",
        },
        contentSignal: {
          "ai-train": "yes",
          search: "yes",
        },
      },
    ],
  },
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
      meta: [],
    },
  },
  runtimeConfig: {
    public: {
      DOMAIN: process.env.DOMAIN,
      APPLY_MATE_URL: process.env.APPLY_MATE_URL,
      BLOG_PRESS_URL: process.env.BLOG_PRESS_URL,
    },
  },
  ssr: true,
  nitro: {
    preset: "vercel",
    prerender: {
      routes: [...LANGS.map((lang) => `/${lang}`)],
    },
  },
  routeRules: {
    [`/(${LANGS.join("|")})`]: { ssr: true, static: true },
  },
  sitemap: {
    urls: [...LANGS.map((lang) => `/${lang}`)],
  },
  site: {
    name: "Ruang Cipta Digital",
  },
  nuxtElysia: {
    path: "/api",
    module: "~~/server/api",
  },
  vite: {
    server: {
      allowedHosts: true,
    },
  },
});
