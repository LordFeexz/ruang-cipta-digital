<template>
  <section :id="lang === LANG.ID ? 'kontak' : 'contact'" class="py-20 px-6">
    <div
      class="max-w-5xl mx-auto rounded-[40px] bg-slate-900 dark:bg-blue-600 p-12 lg:p-20 text-center relative overflow-hidden group"
    >
      <div
        class="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 dark:bg-white/10 rounded-full blur-[80px] group-hover:scale-110 transition-transform duration-700"
      />
      <div
        class="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 dark:bg-slate-900/20 rounded-full blur-[80px]"
      />
      <h2 class="text-3xl lg:text-5xl font-bold text-white mb-8 relative z-10">
        {{
          lang === LANG.ID
            ? "Siap Membangun Sesuatu yang Luar Biasa?"
            : "Ready to Build Something Extraordinary?"
        }}
      </h2>
      <UiButton
        class="px-10 py-5 bg-blue-600 dark:bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-500 dark:hover:bg-slate-800 transition-all text-lg shadow-2xl shadow-blue-900/40 dark:shadow-none relative z-10"
      >
        {{ lang === LANG.ID ? "Hubungi Tim Kami" : "Contact Our Team" }}
      </UiButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import { LANG } from "~~/shared/enums/global";

const { lang } = useLang();
</script>
