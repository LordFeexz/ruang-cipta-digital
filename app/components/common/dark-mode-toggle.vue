<template>
  <UiButton
    class="p-2 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-all"
    aria-label="Toggle Theme"
    @click="
      colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    "
  >
    <Icon
      class="w-4 h-4"
      :name="colorMode.value === 'dark' ? 'lucide:sun' : 'lucide:moon'"
    />
    <span class="sr-only">Toggle theme</span>
  </UiButton>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
</script>
