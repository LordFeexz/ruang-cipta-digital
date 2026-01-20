import __nuxt_component_0$1 from './index-CgxZbI8Y.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-Cy382H54.mjs';
import { defineComponent, useSSRContext, resolveComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, ref, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { a as useLang, L as LANG, c as cn, d as useState } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "lang-switcher",
  __ssrInlineRender: true,
  setup(__props) {
    const { lang, setLang } = useLang();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = resolveComponent("UiButton");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-2" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UiButton, {
        variant: unref(lang) === unref(LANG).EN ? "default" : "outline",
        size: "sm",
        class: "px-3",
        onClick: ($event) => unref(setLang)(unref(LANG).EN)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` EN `);
          } else {
            return [
              createTextVNode(" EN ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiButton, {
        variant: unref(lang) === unref(LANG).ID ? "default" : "outline",
        size: "sm",
        class: "px-3",
        onClick: ($event) => unref(setLang)(unref(LANG).ID)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ID `);
          } else {
            return [
              createTextVNode(" ID ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/lang-switcher.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$4, { __name: "CommonLangSwitcher" });
const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "dark-mode-toggle",
  __ssrInlineRender: true,
  setup(__props) {
    const colorMode = useColorMode();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = resolveComponent("UiButton");
      const _component_Icon = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_UiButton, mergeProps({
        class: "p-2 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-all",
        "aria-label": "Toggle Theme",
        onClick: ($event) => unref(colorMode).preference = unref(colorMode).value === "dark" ? "light" : "dark"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              class: "w-4 h-4",
              name: unref(colorMode).value === "dark" ? "lucide:sun" : "lucide:moon"
            }, null, _parent2, _scopeId));
            _push2(`<span class="sr-only"${_scopeId}>Toggle theme</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                class: "w-4 h-4",
                name: unref(colorMode).value === "dark" ? "lucide:sun" : "lucide:moon"
              }, null, 8, ["name"]),
              createVNode("span", { class: "sr-only" }, "Toggle theme")
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/dark-mode-toggle.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$3, { __name: "CommonDarkModeToggle" });
const en$1 = ["Products", "About", "Why Us", "Contact"];
const id$1 = ["Produk", "Tentang", "Mengapa Kami", "Kontak"];
const i18n$1 = {
  en: en$1,
  id: id$1
};
function useScrolled() {
  const scrolled = useState("scrolled", () => false);
  return scrolled;
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "header",
  __ssrInlineRender: true,
  setup(__props) {
    const { lang } = useLang();
    const scrolled = useScrolled();
    const isMenuOpen = ref(false);
    const t = i18n$1[lang.value];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_CommonLangSwitcher = __nuxt_component_2;
      const _component_CommonDarkModeToggle = __nuxt_component_3;
      const _component_UiButton = resolveComponent("UiButton");
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: unref(cn)(
          "fixed w-full z-50 transition-all duration-300",
          unref(scrolled) ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-3" : "bg-transparent py-5"
        )
      }, _attrs))}><div class="max-w-7xl mx-auto px-6 flex justify-between items-center"><div class="flex items-center gap-2"><div class="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 dark:shadow-none">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:cpu",
        class: "text-white w-6 h-6"
      }, null, _parent));
      _push(`</div><span class="font-bold text-xl tracking-tight"> Ruang Cipta <span class="text-blue-600 underline decoration-2 underline-offset-4"> Digital</span></span></div><nav class="hidden md:flex items-center gap-6"><!--[-->`);
      ssrRenderList(unref(t), (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item,
          to: `#${item.toLowerCase().replace(" ", "-")}`,
          class: "text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
          id: item.toLowerCase().replace(" ", "-")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><div class="h-4 w-px bg-slate-200 dark:bg-slate-800"></div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_CommonLangSwitcher, null, null, _parent));
      _push(ssrRenderComponent(_component_CommonDarkModeToggle, null, null, _parent));
      _push(`</div></nav>`);
      _push(ssrRenderComponent(_component_UiButton, {
        class: "md:hidden p-2",
        onClick: ($event) => isMenuOpen.value = !unref(isMenuOpen)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: unref(isMenuOpen) ? "lucide:x" : "lucide:menu"
            }, null, _parent2, _scopeId));
            _push2(`<span class="sr-only"${_scopeId}>Toggle menu</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: unref(isMenuOpen) ? "lucide:x" : "lucide:menu"
              }, null, 8, ["name"]),
              createVNode("span", { class: "sr-only" }, "Toggle menu")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(isMenuOpen)) {
        _push(`<nav class="flex flex-col gap-6"><!--[-->`);
        ssrRenderList(unref(t), (item) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: item,
            to: `#${item.toLowerCase().replace(" ", "-")}`,
            onClick: ($event) => isMenuOpen.value = false,
            class: "text-lg font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 flex items-center",
            id: item.toLowerCase().replace(" ", "-")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--><div class="h-4 w-px bg-slate-200 dark:bg-slate-800"></div><div class="flex items-center gap-2">`);
        _push(ssrRenderComponent(_component_CommonLangSwitcher, null, null, _parent));
        _push(ssrRenderComponent(_component_CommonDarkModeToggle, null, null, _parent));
        _push(`</div></nav>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$2, { __name: "LayoutsHeader" });
const en = { "desc": "Transforming ideas into scalable digital realities." };
const id = { "desc": "Mengubah ide menjadi realitas digital yang scalable." };
const i18n = {
  en,
  id
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "footer",
  __ssrInlineRender: true,
  setup(__props) {
    const { lang } = useLang();
    const t = i18n[lang.value];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Cpu = resolveComponent("Cpu");
      const _component_Icon = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "py-16 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 px-6 transition-colors" }, _attrs))}><div class="max-w-7xl mx-auto"><div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"><div class="col-span-1 md:col-span-2"><div class="flex items-center gap-2 mb-6"><div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_Cpu, { class: "text-white w-5 h-5" }, null, _parent));
      _push(`</div><span class="font-bold text-lg text-slate-900 dark:text-white">Ruang Cipta Digital</span></div><p class="text-slate-500 dark:text-slate-400 max-w-sm mb-6">${ssrInterpolate(unref(t).desc)}</p><div class="flex gap-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:linkedin",
        class: "w-5 h-5 text-slate-400 hover:text-blue-600 cursor-pointer transition-colors"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:twitter",
        class: "w-5 h-5 text-slate-400 hover:text-blue-600 cursor-pointer transition-colors"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:github",
        class: "w-5 h-5 text-slate-400 hover:text-blue-600 cursor-pointer transition-colors"
      }, null, _parent));
      _push(`</div></div><div><h5 class="font-bold mb-6 text-slate-900 dark:text-white">${ssrInterpolate(unref(lang) === unref(LANG).ID ? "Produk" : "Products")}</h5><ul class="space-y-4 text-slate-500 dark:text-slate-400 text-sm"><li class="hover:text-blue-600 cursor-pointer transition-colors"> Apply Mate </li><li class="hover:text-blue-600 cursor-pointer transition-colors"> Blog Press </li><li class="hover:text-blue-600 cursor-pointer transition-colors"> Innovation Lab </li></ul></div></div><div class="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs font-medium"><p>© 2025 Ruang Cipta Digital. All rights reserved.</p><div class="flex gap-8"><span class="hover:text-slate-600 cursor-pointer transition-colors">Privacy Policy</span><span class="hover:text-slate-600 cursor-pointer transition-colors">Terms of Service</span></div></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "LayoutsFooter" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutsHeader = __nuxt_component_0;
  const _component_LayoutsFooter = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-100 dark:selection:bg-blue-900 transition-colors duration-300" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_LayoutsHeader, null, null, _parent));
  _push(`<main class="flex-1" data-test-id="main" id="main-content">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_LayoutsFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-Br2LL2qq.mjs.map
