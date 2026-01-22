<template>
  <Html class="notranslate scroll-smooth" translate="no">
    <Body
      :class="
        cn(
          'text-neutral-900 dark:text-neutral-300 antialiased',
          'font-sora',
          'scroll-smooth min-h-svh',
          'bg-background',
        )
      "
    >
      <NuxtLayout>
        <ClientOnly>
          <CommonPageLoader />
        </ClientOnly>
        <NuxtRouteAnnouncer />
        <NuxtPage />
        <Toaster />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script lang="ts" setup>
import { Toaster } from "@/components/ui/sonner";
import "vue-sonner/style.css";
import { cn } from "@/lib/utils";
</script>
