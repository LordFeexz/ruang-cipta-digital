<template>
  <div
    v-show="loading"
    aria-label="Loader"
    tabindex="-1"
    role="progressbar"
    class="fixed top-0 left-0 w-full h-3px bg-cyan-500 animate-pulse z-50"
  />
</template>

<script setup lang="ts">
const router = useRouter();
const loading = ref(false);

router.beforeEach(() => (loading.value = true));
router.afterEach(() => (loading.value = false));
</script>
