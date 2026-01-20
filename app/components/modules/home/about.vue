<template>
  <section
    :id="lang === LANG.ID ? 'tentang' : 'about'"
    class="py-24 bg-white dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800 transition-colors"
  >
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-20">
        <hgroup class="antialiased gap-0.5">
          <h2
            class="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4"
          >
            Ruang Cipta Digital
          </h2>
          <h3
            class="text-3xl lg:text-4xl font-bold mb-6 text-slate-900 dark:text-white"
          >
            {{ t.visionTitle }}
          </h3>
          <p
            class="text-xl text-slate-600 dark:text-slate-300 italic border-l-4 border-blue-600 pl-6 py-2 leading-relaxed"
          >
            "{{ t.visionText }}"
          </p>
        </hgroup>
        <div>
          <h3
            class="text-3xl lg:text-4xl font-bold mb-8 text-slate-900 dark:text-white"
          >
            {{ t.missionTitle }}
          </h3>
          <div class="space-y-6">
            <article
              v-for="(point, idx) in t.missionPoints"
              :key="idx"
              class="flex gap-4 items-start"
            >
              <div
                class="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-1"
              >
                <Icon
                  name="lucide:check-circle"
                  class="w-5 h-5 text-blue-600 dark:text-blue-400"
                />
              </div>
              <p class="text-lg text-slate-700 dark:text-slate-300">
                {{ point }}
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import i18n from "~/assets/i18n/home/vission-mission.json";
import { LANG } from "~~/shared/enums/global";
const { lang } = useLang();

const t = i18n[lang.value];
</script>
