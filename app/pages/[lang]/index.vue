<template>
  <div class="transition-colors duration-300 space-y-2">
    <ModulesHomeHero />
    <ModulesHomeAbout />
    <ModulesHomeProduct />
    <ModulesHomeWhyUs />
    <ModulesHomeCta />
  </div>
</template>

<script setup lang="ts">
import { LANG } from "~~/shared/enums/global";

const conf = useRuntimeConfig();
const { DOMAIN } = conf.public;
const { lang } = useLang();

const isID = lang.value === LANG.ID;
definePageMeta({
  layout: "default",
  layoutTransition: {
    name: "fade",
    mode: "out-in",
  },
});

useGenerateMetadata({
  title: isID
    ? "Ruang Cipta Digital — Membangun Produk Digital yang Scalable"
    : "Ruang Cipta Digital — Building Scalable Digital Products",

  description: isID
    ? "Ruang Cipta Digital adalah perusahaan produk digital yang membangun solusi modern, scalable, dan SEO-friendly untuk startup, investor, dan bisnis."
    : "Ruang Cipta Digital is a digital product company building modern, scalable, and SEO-friendly solutions for startups, investors, and businesses.",

  keywords: isID
    ? [
        "perusahaan produk digital",
        "startup teknologi",
        "pengembangan SaaS",
        "platform rekrutmen AI",
        "blog SEO aplikasi",
        "Ruang Cipta Digital",
        "Apply Mate",
        "Blog Press",
      ]
    : [
        "digital product company",
        "startup technology",
        "SaaS development",
        "AI recruitment platform",
        "SEO blog for web apps",
        "Ruang Cipta Digital",
        "Apply Mate",
        "Blog Press",
      ],

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  alternates: {
    canonical: `${DOMAIN}/${lang.value}`,
    languages: {
      "id-ID": `${DOMAIN}/id`,
      "en-US": `${DOMAIN}/en`,
    },
  },

  og: {
    title: "Ruang Cipta Digital",
    description: isID
      ? "Membangun produk digital modern, scalable, dan SEO-friendly untuk startup dan investor."
      : "Building modern, scalable, and SEO-friendly digital products for startups and investors.",
    url: `${DOMAIN}/${lang.value}`,
    siteName: "Ruang Cipta Digital",
    type: "website",
    locale: isID ? "id_ID" : "en_US",
    alternateLocale: [isID ? "en_US" : "id_ID"],
    image: {
      url: `${DOMAIN}/logo.png`,
      width: 1200,
      height: 630,
      alt: "Ruang Cipta Digital",
      type: "image/png",
    },
  },

  twitter: {
    card: "summary_large_image",
    title: "Ruang Cipta Digital",
    description: isID
      ? "Perusahaan produk digital yang membangun solusi modern dan scalable."
      : "Digital product company building scalable web solutions.",
    image: {
      url: `${DOMAIN}/logo.png`,
      alt: "Ruang Cipta Digital",
    },
  },
});

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Ruang Cipta Digital",
          url: `${DOMAIN}/${lang.value}`,
          logo: `${DOMAIN}/logo.png`,
          foundingDate: "2025",
          description:
            "Digital product company building scalable, SEO-friendly, and modern web products.",
          sameAs: ["https://apply-mates.site", "https://blog-press.site"],
        },
        null,
        4,
      ),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Apply Mate",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: "https://apply-mates.site",
          description:
            "AI-powered career platform that helps job seekers improve CVs, cover letters, and measure job compatibility.",
          creator: {
            "@type": "Organization",
            name: "Ruang Cipta Digital",
          },
        },
        null,
        4,
      ),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Blog Press",
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Web",
          url: "https://blog-press.site",
          description:
            "SEO-friendly blogging platform designed for web applications with consistent tone and branding.",
          creator: {
            "@type": "Organization",
            name: "Ruang Cipta Digital",
          },
        },
        null,
        4,
      ),
    },
  ],
});
</script>
