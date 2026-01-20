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
    baseURL: process.env.DOMAIN,
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
    },
  },
  ssr: true,
  nitro: {
    preset: "node-server",
    prerender: {
      routes: [...LANGS.map((lang) => `/${lang}`)],
    },
  },
  routeRules: {
    [`/(${LANGS.join("|")})`]: { ssr: true, static: true },
  },
});
