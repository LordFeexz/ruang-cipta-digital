<template>
  <footer
    class="py-16 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 px-6 transition-colors"
  >
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center gap-2 mb-6">
            <div
              class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center"
            >
              <Cpu class="text-white w-5 h-5" />
            </div>
            <span class="font-bold text-lg text-slate-900 dark:text-white"
              >Ruang Cipta Digital</span
            >
          </div>
          <p class="text-slate-500 dark:text-slate-400 max-w-sm mb-6">
            {{ t.desc }}
          </p>
          <div class="flex gap-4">
            <Icon
              name="lucide:linkedin"
              class="w-5 h-5 text-slate-400 hover:text-blue-600 cursor-pointer transition-colors"
            />
            <Icon
              name="lucide:twitter"
              class="w-5 h-5 text-slate-400 hover:text-blue-600 cursor-pointer transition-colors"
            />
            <Icon
              name="lucide:github"
              class="w-5 h-5 text-slate-400 hover:text-blue-600 cursor-pointer transition-colors"
            />
          </div>
        </div>
        <div>
          <h5 class="font-bold mb-6 text-slate-900 dark:text-white">
            {{ lang === LANG.ID ? "Produk" : "Products" }}
          </h5>
          <ul class="space-y-4 text-slate-500 dark:text-slate-400 text-sm">
            <li class="hover:text-blue-600 cursor-pointer transition-colors">
              Apply Mate
            </li>
            <li class="hover:text-blue-600 cursor-pointer transition-colors">
              Blog Press
            </li>
            <li class="hover:text-blue-600 cursor-pointer transition-colors">
              Innovation Lab
            </li>
          </ul>
        </div>
      </div>
      <div
        class="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs font-medium"
      >
        <p>© 2025 Ruang Cipta Digital. All rights reserved.</p>
        <div class="flex gap-8">
          <span class="hover:text-slate-600 cursor-pointer transition-colors"
            >Privacy Policy</span
          >
          <span class="hover:text-slate-600 cursor-pointer transition-colors"
            >Terms of Service</span
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import i18n from "~/assets/i18n/layouts/footer.json";
import { LANG } from "~~/shared/enums/global";
const { lang } = useLang();
const t = i18n[lang.value];
</script>
