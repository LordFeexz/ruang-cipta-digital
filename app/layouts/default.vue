<template>
  <div
    class="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-100 dark:selection:bg-blue-900 transition-colors duration-300"
  >
    <LayoutsHeader />
    <main class="flex-1" data-test-id="main" id="main-content">
      <slot />
    </main>
    <LayoutsFooter />
  </div>
</template>
