<template>
  <section
    :id="lang === LANG.ID ? 'mengapa-kami' : 'why-us'"
    className="py-24 bg-white dark:bg-slate-900 px-6 transition-colors"
  >
    <div className="max-w-7xl mx-auto">
      <hgroup className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
          {{ t.title }}
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg">
          {{ t.subtitle }}
        </p>
      </hgroup>
      <div className="grid md:grid-cols-3 gap-8">
        <article
          v-for="(card, idx) in t.cards"
          :key="card.title"
          className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:scale-[1.02] transition-transform"
        >
          <div
            className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl shadow-sm flex items-center justify-center mb-6 border dark:border-slate-700"
          >
            <Icon
              class="text-blue-500"
              :name="
                idx === 0
                  ? 'lucide:search'
                  : idx === 1
                    ? 'lucide:bar-chart-3'
                    : 'lucide:cpu'
              "
            />
            <span class="sr-only">
              {{ card.title }}
            </span>
          </div>
          <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
            {{ card.title }}
          </h4>
          <p
            className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed"
          >
            {{ card.desc }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import i18n from "~/assets/i18n/home/why-choose-us.json";
import { LANG } from "~~/shared/enums/global";
const { lang } = useLang();
const t = i18n[lang.value];
</script>
