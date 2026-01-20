<template>
  <div class="flex gap-2">
    <UiButton
      :variant="lang === LANG.EN ? 'default' : 'outline'"
      size="sm"
      class="px-3"
      @click="
        setLang(LANG.EN);
        $emit('select');
      "
    >
      EN
    </UiButton>
    <UiButton
      :variant="lang === LANG.ID ? 'default' : 'outline'"
      size="sm"
      class="px-3"
      @click="
        setLang(LANG.ID);
        $emit('select');
      "
    >
      ID
    </UiButton>
  </div>
</template>

<script setup lang="ts">
import { LANG } from "~~/shared/enums/global";

const { lang, setLang } = useLang();

defineEmits(["select"]);
</script>
