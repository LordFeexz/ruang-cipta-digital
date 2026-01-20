<template>
  <header
    :class="
      cn(
        'fixed w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-3'
          : 'bg-transparent py-5',
      )
    "
  >
    <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
      <div class="flex items-center gap-2">
        <div
          class="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 dark:shadow-none"
        >
          <Icon name="lucide:cpu" class="text-white w-6 h-6" />
        </div>
        <span class="font-bold text-xl tracking-tight">
          Ruang Cipta
          <span class="text-blue-600 underline decoration-2 underline-offset-4">
            Digital</span
          >
        </span>
      </div>

      <nav class="hidden md:flex items-center gap-6">
        <NuxtLink
          v-for="item in t"
          :key="item"
          :to="`#${item.toLowerCase().replace(' ', '-')}`"
          class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          :id="item.toLowerCase().replace(' ', '-')"
        >
          {{ item }}
        </NuxtLink>
        <div class="h-4 w-px bg-slate-200 dark:bg-slate-800" />

        <div class="flex items-center gap-2">
          <CommonLangSwitcher />

          <CommonDarkModeToggle />
        </div>
      </nav>

      <UiButton class="md:hidden p-2" @click="isMenuOpen = !isMenuOpen">
        <Icon :name="isMenuOpen ? 'lucide:x' : 'lucide:menu'" />
        <span class="sr-only">Toggle menu</span>
      </UiButton>
    </div>

    <Transition
      v-if="isMenuOpen"
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
      class="fixed inset-0 z-40 bg-white dark:bg-slate-950 pt-24 px-6 md:hidden"
    >
      <nav class="flex flex-col gap-6 h-full pb-10">
        <NuxtLink
          v-for="item in t"
          :key="item"
          :to="`#${item.toLowerCase().replace(' ', '-')}`"
          @click="isMenuOpen = false"
          class="text-lg font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 flex items-center"
          :id="item.toLowerCase().replace(' ', '-')"
        >
          {{ item }}
        </NuxtLink>
        <div class="h-4 w-px bg-slate-200 dark:bg-slate-800" />

        <div class="flex items-center gap-2">
          <CommonLangSwitcher @select="isMenuOpen = false" />

          <CommonDarkModeToggle />
        </div>

        <UiButton
          variant="outline"
          class="mt-auto w-full flex items-center justify-center gap-2 py-6 text-lg border-2"
          @click="isMenuOpen = false"
        >
          <Icon name="lucide:x" class="w-5 h-5" />
          <span class="sr-only"> Close Menu </span>
        </UiButton>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { cn } from "~/lib/utils";
import i18n from "~/assets/i18n/layouts/nav.json";

const { lang } = useLang();
const scrolled = useScrolled();
const isMenuOpen = ref(false);

const t = i18n[lang.value];
</script>
