<template>
  <section id="hero" class="pt-40 pb-24 px-6 overflow-hidden relative">
    <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <div class="relative z-10">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold mb-6"
        >
          <span class="relative flex h-2 w-2">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"
            ></span>
            <span
              class="relative inline-flex rounded-full h-2 w-2 bg-blue-600"
            ></span>
          </span>
          {{ t.tagline }}
        </div>
        <h1
          class="text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight text-slate-900 dark:text-white"
        >
          {{ t.title }}
        </h1>
        <p
          class="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed"
        >
          {{ t.sub }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <button
            class="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 dark:shadow-none flex items-center justify-center gap-2 group"
          >
            {{ t.cta1 }}
            <Icon
              name="lucide:arrow-right"
              class="w-5 h-5 group-hover:translate-x-1 transition-transform"
            />
          </button>
          <button
            class="px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center"
          >
            {{ t.cta2 }}
          </button>
        </div>
      </div>
      <div class="relative hidden lg:block">
        <div
          class="absolute -top-20 -right-20 w-500px h-500px bg-blue-100 dark:bg-blue-900/20 rounded-full blur-[100px] opacity-50"
        />
        <div
          class="relative bg-white dark:bg-slate-900 p-8 rounded-[40px] shadow-2xl border border-slate-100 dark:border-slate-800 transform rotate-2"
        >
          <div class="flex gap-2 mb-6">
            <div class="w-3 h-3 rounded-full bg-red-400" />
            <div class="w-3 h-3 rounded-full bg-yellow-400" />
            <div class="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div class="space-y-4">
            <div
              class="h-4 w-3/4 bg-slate-100 dark:bg-slate-800 rounded-full"
            />
            <div
              class="h-4 w-1/2 bg-slate-100 dark:bg-slate-800 rounded-full"
            />
            <div
              class="h-24 w-full bg-blue-50 dark:bg-blue-950/30 rounded-2xl border border-blue-100 dark:border-blue-900"
            />
            <div class="grid grid-cols-2 gap-4">
              <div class="h-12 bg-slate-50 dark:bg-slate-800/50 rounded-xl" />
              <div class="h-12 bg-slate-50 dark:bg-slate-800/50 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import i18n from "~/assets/i18n/home/hero.json";
const { lang } = useLang();
const t = i18n[lang.value];
</script>
