<template>
  <section
    :id="lang === LANG.ID ? 'produk' : 'products'"
    class="py-24 px-6 bg-slate-50 dark:bg-slate-950 transition-colors"
  >
    <div class="max-w-7xl mx-auto">
      <hgroup class="text-center mb-16">
        <h2
          class="text-4xl lg:text-5xl font-bold mb-4 text-slate-900 dark:text-white"
        >
          {{ t.title }}
        </h2>
        <p class="text-slate-500 dark:text-slate-400 text-lg">
          {{ t.subtitle }}
        </p>
      </hgroup>

      <div class="grid md:grid-cols-2 gap-8">
        <aside
          v-for="(product, idx) in t.items"
          :key="product.name"
          class="group bg-white dark:bg-slate-900 rounded-32px p-8 lg:p-12 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-100 dark:hover:shadow-none transition-all flex flex-col h-full"
        >
          <div class="flex justify-between items-start mb-8">
            <div
              class="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider"
            >
              {{ product.tag }}
            </div>
            <div
              class="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors"
            >
              <Icon
                :name="idx === 0 ? 'lucide:zap' : 'lucide:search'"
                class="w-6 h-6"
              />
            </div>
          </div>
          <h3 class="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
            {{ product.name }}
          </h3>
          <p class="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            {{ product.desc }}
          </p>
          <div class="space-y-3 mb-10">
            <article
              v-for="feat in product.features"
              :key="feat"
              class="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
            >
              <div class="w-1.5 h-1.5 rounded-full bg-blue-500" />
              {{ feat }}
            </article>
          </div>
          <div
            class="mt-auto pt-8 border-t border-slate-100 dark:border-slate-800"
          >
            <p
              class="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase mb-4 tracking-tighter"
            >
              Value Proposition
            </p>
            <p
              class="text-slate-900 dark:text-slate-200 font-medium mb-8 italic"
            >
              "{{ product.value }}"
            </p>
            <UiButton
              as-child
              class="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:gap-3 transition-all"
            >
              <NuxtLink :href="product.links" target="__blank" :lang="lang">
                {{ lang === LANG.ID ? "Kunjungi Produk" : "Visit Product" }}
                <Icon name="lucide:chevron-right" class="w-4 h-4" />
              </NuxtLink>
            </UiButton>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import i18n from "~/assets/i18n/home/product.json";
import { LANG } from "~~/shared/enums/global";
const { lang } = useLang();
const t = i18n[lang.value];
</script>
