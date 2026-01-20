import __nuxt_component_0$1 from './index-CgxZbI8Y.mjs';
import { defineComponent, mergeProps, unref, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useRuntimeConfig, a as useLang, L as LANG, b as useHead } from './server.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-Cy382H54.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'consola';
import '@iconify/utils';
import 'node:url';
import 'ipx';
import 'vue-router';
import 'tailwindcss/colors';
import '@vueuse/core';
import 'lucide-vue-next';
import 'vue-sonner';
import 'clsx';
import 'tailwind-merge';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const en$3 = { "tagline": "Founded in 2025", "title": "Crafting the Future of Digital Ecosystems", "sub": "Ruang Cipta Digital builds scalable, SEO-friendly, and user-centric digital products designed to empower startups and global enterprises.", "cta1": "View Products", "cta2": "Partner With Us" };
const id$3 = { "tagline": "Didirikan tahun 2025", "title": "Membangun Masa Depan Ekosistem Digital", "sub": "Ruang Cipta Digital membangun produk digital yang scalable, SEO-friendly, dan berorientasi pengguna untuk memberdayakan startup dan perusahaan global.", "cta1": "Lihat Produk", "cta2": "Bermitra Dengan Kami" };
const i18n$3 = {
  en: en$3,
  id: id$3
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "hero",
  __ssrInlineRender: true,
  setup(__props) {
    const { lang } = useLang();
    const t = i18n$3[lang.value];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "hero",
        class: "pt-40 pb-24 px-6 overflow-hidden relative"
      }, _attrs))}><div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center"><div class="relative z-10"><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold mb-6"><span class="relative flex h-2 w-2"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span class="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span></span> ${ssrInterpolate(unref(t).tagline)}</div><h1 class="text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight text-slate-900 dark:text-white">${ssrInterpolate(unref(t).title)}</h1><p class="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed">${ssrInterpolate(unref(t).sub)}</p><div class="flex flex-col sm:flex-row gap-4"><button class="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 dark:shadow-none flex items-center justify-center gap-2 group">${ssrInterpolate(unref(t).cta1)} `);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:arrow-right",
        class: "w-5 h-5 group-hover:translate-x-1 transition-transform"
      }, null, _parent));
      _push(`</button><button class="px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center">${ssrInterpolate(unref(t).cta2)}</button></div></div><div class="relative hidden lg:block"><div class="absolute -top-20 -right-20 w-500px h-500px bg-blue-100 dark:bg-blue-900/20 rounded-full blur-[100px] opacity-50"></div><div class="relative bg-white dark:bg-slate-900 p-8 rounded-[40px] shadow-2xl border border-slate-100 dark:border-slate-800 transform rotate-2"><div class="flex gap-2 mb-6"><div class="w-3 h-3 rounded-full bg-red-400"></div><div class="w-3 h-3 rounded-full bg-yellow-400"></div><div class="w-3 h-3 rounded-full bg-green-400"></div></div><div class="space-y-4"><div class="h-4 w-3/4 bg-slate-100 dark:bg-slate-800 rounded-full"></div><div class="h-4 w-1/2 bg-slate-100 dark:bg-slate-800 rounded-full"></div><div class="h-24 w-full bg-blue-50 dark:bg-blue-950/30 rounded-2xl border border-blue-100 dark:border-blue-900"></div><div class="grid grid-cols-2 gap-4"><div class="h-12 bg-slate-50 dark:bg-slate-800/50 rounded-xl"></div><div class="h-12 bg-slate-50 dark:bg-slate-800/50 rounded-xl"></div></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modules/home/hero.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$5, { __name: "ModulesHomeHero" });
const en$2 = { "visionTitle": "Our Vision", "visionText": "To become a leading digital product studio that empowers businesses and individuals through intelligent and scalable digital solutions.", "missionTitle": "Our Mission", "missionPoints": ["Build impactful digital products that solve real-world problems", "Help startups and businesses grow through technology", "Create sustainable and user-centric digital ecosystems"] };
const id$2 = { "visionTitle": "Visi Kami", "visionText": "Menjadi perusahaan produk digital terdepan yang memberdayakan bisnis dan individu melalui solusi digital yang cerdas dan scalable.", "missionTitle": "Misi Kami", "missionPoints": ["Membangun produk digital yang berdampak dan relevan", "Membantu startup dan bisnis bertumbuh melalui teknologi", "Menciptakan ekosistem digital yang berkelanjutan dan berorientasi pengguna"] };
const i18n$2 = {
  en: en$2,
  id: id$2
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const { lang } = useLang();
    const t = i18n$2[lang.value];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: unref(lang) === unref(LANG).ID ? "tentang" : "about",
        class: "py-24 bg-white dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800 transition-colors"
      }, _attrs))}><div class="max-w-7xl mx-auto px-6"><div class="grid lg:grid-cols-2 gap-20"><hgroup class="antialiased gap-0.5"><h2 class="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4"> Ruang Cipta Digital </h2><h3 class="text-3xl lg:text-4xl font-bold mb-6 text-slate-900 dark:text-white">${ssrInterpolate(unref(t).visionTitle)}</h3><p class="text-xl text-slate-600 dark:text-slate-300 italic border-l-4 border-blue-600 pl-6 py-2 leading-relaxed"> &quot;${ssrInterpolate(unref(t).visionText)}&quot; </p></hgroup><div><h3 class="text-3xl lg:text-4xl font-bold mb-8 text-slate-900 dark:text-white">${ssrInterpolate(unref(t).missionTitle)}</h3><div class="space-y-6"><!--[-->`);
      ssrRenderList(unref(t).missionPoints, (point, idx) => {
        _push(`<article class="flex gap-4 items-start"><div class="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-1">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:check-circle",
          class: "w-5 h-5 text-blue-600 dark:text-blue-400"
        }, null, _parent));
        _push(`</div><p class="text-lg text-slate-700 dark:text-slate-300">${ssrInterpolate(point)}</p></article>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modules/home/about.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$4, { __name: "ModulesHomeAbout" });
const en$1 = { "title": "Our Innovation Lab", "subtitle": "Purpose-built solutions for the modern web.", "items": [{ "name": "Apply Mate", "links": "https://apply-mate.site/en", "tag": "AI & Career", "desc": "An AI-powered career assistance platform helping job seekers optimize CVs and find relevant opportunities through intelligent compatibility scoring.", "features": ["CV & Cover Letter Improvement", "AI Compatibility Scoring", "Curated Job Listings", "Recruiter Talent Access"], "value": "Reduce hiring mismatch and apply smarter." }, { "name": "Blog Press", "links": "https://blog-press.site/en", "tag": "SEO & Growth", "desc": "A developer-friendly blogging engine designed for web apps, focused on organic growth while maintaining perfect brand consistency.", "features": ["SEO-Optimized Architecture", "Brand Tone Alignment", "Content-Driven Growth", "Seamless API Integration"], "value": "Boost organic traffic without engineering overhead." }] };
const id$1 = { "title": "Lab Inovasi Kami", "subtitle": "Solusi tepat guna untuk web modern.", "items": [{ "name": "Apply Mate", "links": "https://apply-mate.site/id", "tag": "AI & Karir", "desc": "Platform karir berbasis AI yang membantu pencari kerja mengoptimalkan CV dan menemukan peluang melalui skor kecocokan cerdas.", "features": ["Perbaikan CV & Cover Letter", "Skor Kecocokan AI", "Daftar Lowongan Terkurasi", "Akses Talenta Rekruter"], "value": "Mengurangi ketidakcocokan kerja dan melamar lebih cerdas." }, { "name": "Blog Press", "links": "https://blog-press.site/id", "tag": "SEO & Pertumbuhan", "desc": "Mesin blog ramah developer untuk aplikasi web, fokus pada pertumbuhan organik dengan menjaga konsistensi brand yang sempurna.", "features": ["Arsitektur Teroptimasi SEO", "Penyelarasan Tone Brand", "Pertumbuhan Berbasis Konten", "Integrasi API Mulus"], "value": "Tingkatkan trafik organik tanpa beban engineering." }] };
const i18n$1 = {
  en: en$1,
  id: id$1
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "product",
  __ssrInlineRender: true,
  setup(__props) {
    const { lang } = useLang();
    const t = i18n$1[lang.value];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      const _component_UiButton = resolveComponent("UiButton");
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: unref(lang) === unref(LANG).ID ? "produk" : "products",
        class: "py-24 px-6 bg-slate-50 dark:bg-slate-950 transition-colors"
      }, _attrs))}><div class="max-w-7xl mx-auto"><hgroup class="text-center mb-16"><h2 class="text-4xl lg:text-5xl font-bold mb-4 text-slate-900 dark:text-white">${ssrInterpolate(unref(t).title)}</h2><p class="text-slate-500 dark:text-slate-400 text-lg">${ssrInterpolate(unref(t).subtitle)}</p></hgroup><div class="grid md:grid-cols-2 gap-8"><!--[-->`);
      ssrRenderList(unref(t).items, (product, idx) => {
        _push(`<aside class="group bg-white dark:bg-slate-900 rounded-32px p-8 lg:p-12 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-100 dark:hover:shadow-none transition-all flex flex-col h-full"><div class="flex justify-between items-start mb-8"><div class="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">${ssrInterpolate(product.tag)}</div><div class="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: idx === 0 ? "lucide:zap" : "lucide:search",
          class: "w-6 h-6"
        }, null, _parent));
        _push(`</div></div><h3 class="text-3xl font-bold mb-4 text-slate-900 dark:text-white">${ssrInterpolate(product.name)}</h3><p class="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">${ssrInterpolate(product.desc)}</p><div class="space-y-3 mb-10"><!--[-->`);
        ssrRenderList(product.features, (feat) => {
          _push(`<article class="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"><div class="w-1.5 h-1.5 rounded-full bg-blue-500"></div> ${ssrInterpolate(feat)}</article>`);
        });
        _push(`<!--]--></div><div class="mt-auto pt-8 border-t border-slate-100 dark:border-slate-800"><p class="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase mb-4 tracking-tighter"> Value Proposition </p><p class="text-slate-900 dark:text-slate-200 font-medium mb-8 italic"> &quot;${ssrInterpolate(product.value)}&quot; </p>`);
        _push(ssrRenderComponent(_component_UiButton, {
          "as-child": "",
          class: "flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:gap-3 transition-all"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                href: product.links,
                target: "__blank",
                lang: unref(lang)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(lang) === unref(LANG).ID ? "Kunjungi Produk" : "Visit Product")} `);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:chevron-right",
                      class: "w-4 h-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(lang) === unref(LANG).ID ? "Kunjungi Produk" : "Visit Product") + " ", 1),
                      createVNode(_component_Icon, {
                        name: "lucide:chevron-right",
                        class: "w-4 h-4"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtLink, {
                  href: product.links,
                  target: "__blank",
                  lang: unref(lang)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(lang) === unref(LANG).ID ? "Kunjungi Produk" : "Visit Product") + " ", 1),
                    createVNode(_component_Icon, {
                      name: "lucide:chevron-right",
                      class: "w-4 h-4"
                    })
                  ]),
                  _: 1
                }, 8, ["href", "lang"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></aside>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modules/home/product.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$3, { __name: "ModulesHomeProduct" });
const en = { "title": "Built for Scalability", "subtitle": "Why investors and partners choose Ruang Cipta Digital.", "cards": [{ "title": "SEO-First DNA", "desc": "Organic discoverability is baked into our core architecture, not added as an afterthought." }, { "title": "User-Centric", "desc": "We prioritize user experience to ensure high retention and sustainable growth metrics." }, { "title": "Modern Stack", "desc": "Utilizing 2025's leading technologies to ensure future-proof and performant products." }] };
const id = { "title": "Dibangun untuk Skalabilitas", "subtitle": "Mengapa investor dan mitra memilih Ruang Cipta Digital.", "cards": [{ "title": "DNA SEO-First", "desc": "Keterpuan organik tertanam dalam arsitektur inti kami, bukan sekadar tambahan." }, { "title": "User-Centric", "desc": "Kami mengutamakan pengalaman pengguna untuk memastikan retensi tinggi dan metrik pertumbuhan." }, { "title": "Stack Modern", "desc": "Menggunakan teknologi terdepan tahun 2025 untuk menjamin produk yang relevan di masa depan." }] };
const i18n = {
  en,
  id
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "why-us",
  __ssrInlineRender: true,
  setup(__props) {
    const { lang } = useLang();
    const t = i18n[lang.value];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: unref(lang) === unref(LANG).ID ? "mengapa-kami" : "why-us",
        className: "py-24 bg-white dark:bg-slate-900 px-6 transition-colors"
      }, _attrs))}><div className="max-w-7xl mx-auto"><hgroup className="text-center mb-16"><h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">${ssrInterpolate(unref(t).title)}</h2><p className="text-slate-500 dark:text-slate-400 text-lg">${ssrInterpolate(unref(t).subtitle)}</p></hgroup><div className="grid md:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(unref(t).cards, (card, idx) => {
        _push(`<article className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:scale-[1.02] transition-transform"><div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl shadow-sm flex items-center justify-center mb-6 border dark:border-slate-700">`);
        _push(ssrRenderComponent(_component_Icon, {
          class: "text-blue-500",
          name: idx === 0 ? "lucide:search" : idx === 1 ? "lucide:bar-chart-3" : "lucide:cpu"
        }, null, _parent));
        _push(`<span class="sr-only">${ssrInterpolate(card.title)}</span></div><h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">${ssrInterpolate(card.title)}</h4><p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">${ssrInterpolate(card.desc)}</p></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modules/home/why-us.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$2, { __name: "ModulesHomeWhyUs" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "cta",
  __ssrInlineRender: true,
  setup(__props) {
    const { lang } = useLang();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = resolveComponent("UiButton");
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: unref(lang) === unref(LANG).ID ? "kontak" : "contact",
        class: "py-20 px-6"
      }, _attrs))}><div class="max-w-5xl mx-auto rounded-[40px] bg-slate-900 dark:bg-blue-600 p-12 lg:p-20 text-center relative overflow-hidden group"><div class="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 dark:bg-white/10 rounded-full blur-[80px] group-hover:scale-110 transition-transform duration-700"></div><div class="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 dark:bg-slate-900/20 rounded-full blur-[80px]"></div><h2 class="text-3xl lg:text-5xl font-bold text-white mb-8 relative z-10">${ssrInterpolate(unref(lang) === unref(LANG).ID ? "Siap Membangun Sesuatu yang Luar Biasa?" : "Ready to Build Something Extraordinary?")}</h2>`);
      _push(ssrRenderComponent(_component_UiButton, { class: "px-10 py-5 bg-blue-600 dark:bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-500 dark:hover:bg-slate-800 transition-all text-lg shadow-2xl shadow-blue-900/40 dark:shadow-none relative z-10" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(lang) === unref(LANG).ID ? "Hubungi Tim Kami" : "Contact Our Team")}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(lang) === unref(LANG).ID ? "Hubungi Tim Kami" : "Contact Our Team"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modules/home/cta.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$1, { __name: "ModulesHomeCta" });
function useGenerateMetadata({
  title,
  description,
  keywords,
  robots,
  alternates,
  og,
  twitter,
  pagination
}) {
  const normalizeImages = (img) => !img ? [] : Array.isArray(img) ? img : [img];
  const tw = twitter ?? {
    title: og?.title ?? title,
    description: og?.description ?? description,
    image: og?.image,
    card: og?.image ? "summary_large_image" : "summary"
  };
  const ogImages = normalizeImages(og?.image);
  const twImages = normalizeImages(tw?.image ?? og?.image);
  useHead({
    title,
    meta: [
      { name: "description", content: description },
      { name: "keywords", content: keywords?.join(",") },
      robots ? {
        name: "robots",
        content: `${"index"}, ${"follow"}`
      } : null,
      robots?.googleBot ? {
        name: "googlebot",
        content: `${robots.googleBot.index ? "index" : "noindex"}, ${robots.googleBot.follow ? "follow" : "nofollow"}`
      } : null,
      ...og ? [
        { property: "og:title", content: og.title ?? title },
        {
          property: "og:description",
          content: og.description ?? description
        },
        { property: "og:type", content: og.type ?? "website" },
        { property: "og:site_name", content: og.siteName },
        { property: "og:url", content: og.url },
        { property: "og:locale", content: og.locale },
        ...og.alternateLocale?.map((loc) => ({
          property: "og:locale:alternate",
          content: loc
        })) || [],
        { property: "og:country-name", content: og.countryName },
        ...ogImages.flatMap((img) => [
          { property: "og:image", content: img.url },
          img.width ? { property: "og:image:width", content: String(img.width) } : null,
          img.height ? { property: "og:image:height", content: String(img.height) } : null,
          img.alt ? { property: "og:image:alt", content: img.alt } : null,
          img.type ? { property: "og:image:type", content: img.type } : null
        ])
      ] : [],
      ...tw ? [
        { name: "twitter:card", content: tw.card ?? "summary" },
        { name: "twitter:title", content: tw.title ?? title },
        {
          name: "twitter:description",
          content: tw.description ?? description
        },
        tw.site ? { name: "twitter:site", content: tw.site } : null,
        tw.creator ? { name: "twitter:creator", content: tw.creator } : null,
        ...twImages.flatMap((img) => [
          { name: "twitter:image", content: img.url },
          img.alt ? { name: "twitter:image:alt", content: img.alt } : null
        ])
      ] : []
    ].filter(Boolean),
    link: [
      { rel: "canonical", href: alternates?.canonical },
      ...alternates?.languages ? Object.entries(alternates.languages).map(([lang, href]) => ({
        rel: "alternate",
        hreflang: lang,
        href
      })) : [],
      ...pagination?.prev ? [{ rel: "prev", href: pagination.prev }] : [],
      ...pagination?.next ? [{ rel: "next", href: pagination.next }] : []
    ]
  });
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const conf = useRuntimeConfig();
    const { DOMAIN } = conf.public;
    const { lang } = useLang();
    const isID = lang.value === LANG.ID;
    useGenerateMetadata({
      title: isID ? "Ruang Cipta Digital — Membangun Produk Digital yang Scalable" : "Ruang Cipta Digital — Building Scalable Digital Products",
      description: isID ? "Ruang Cipta Digital adalah perusahaan produk digital yang membangun solusi modern, scalable, dan SEO-friendly untuk startup, investor, dan bisnis." : "Ruang Cipta Digital is a digital product company building modern, scalable, and SEO-friendly solutions for startups, investors, and businesses.",
      keywords: isID ? [
        "perusahaan produk digital",
        "startup teknologi",
        "pengembangan SaaS",
        "platform rekrutmen AI",
        "blog SEO aplikasi",
        "Ruang Cipta Digital",
        "Apply Mate",
        "Blog Press"
      ] : [
        "digital product company",
        "startup technology",
        "SaaS development",
        "AI recruitment platform",
        "SEO blog for web apps",
        "Ruang Cipta Digital",
        "Apply Mate",
        "Blog Press"
      ],
      robots: {
        googleBot: { index: true, follow: true }
      },
      alternates: {
        canonical: `${DOMAIN}/${lang.value}`,
        languages: {
          "id-ID": `${DOMAIN}/id`,
          "en-US": `${DOMAIN}/en`
        }
      },
      og: {
        title: "Ruang Cipta Digital",
        description: isID ? "Membangun produk digital modern, scalable, dan SEO-friendly untuk startup dan investor." : "Building modern, scalable, and SEO-friendly digital products for startups and investors.",
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
          type: "image/png"
        }
      },
      twitter: {
        card: "summary_large_image",
        title: "Ruang Cipta Digital",
        description: isID ? "Perusahaan produk digital yang membangun solusi modern dan scalable." : "Digital product company building scalable web solutions.",
        image: {
          url: `${DOMAIN}/logo.png`,
          alt: "Ruang Cipta Digital"
        }
      }
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
              description: "Digital product company building scalable, SEO-friendly, and modern web products.",
              sameAs: ["https://apply-mates.site", "https://blog-press.site"]
            },
            null,
            4
          )
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
              description: "AI-powered career platform that helps job seekers improve CVs, cover letters, and measure job compatibility.",
              creator: {
                "@type": "Organization",
                name: "Ruang Cipta Digital"
              }
            },
            null,
            4
          )
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
              description: "SEO-friendly blogging platform designed for web applications with consistent tone and branding.",
              creator: {
                "@type": "Organization",
                name: "Ruang Cipta Digital"
              }
            },
            null,
            4
          )
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ModulesHomeHero = __nuxt_component_0;
      const _component_ModulesHomeAbout = __nuxt_component_1;
      const _component_ModulesHomeProduct = __nuxt_component_2;
      const _component_ModulesHomeWhyUs = __nuxt_component_3;
      const _component_ModulesHomeCta = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "transition-colors duration-300 space-y-2" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ModulesHomeHero, null, null, _parent));
      _push(ssrRenderComponent(_component_ModulesHomeAbout, null, null, _parent));
      _push(ssrRenderComponent(_component_ModulesHomeProduct, null, null, _parent));
      _push(ssrRenderComponent(_component_ModulesHomeWhyUs, null, null, _parent));
      _push(ssrRenderComponent(_component_ModulesHomeCta, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[lang]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DVqPTNMo.mjs.map
