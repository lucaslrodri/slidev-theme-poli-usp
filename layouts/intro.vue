<script setup lang="ts">
import align from './align.vue';

withDefaults(defineProps<{
  cols?: number | string;
  maxDepth?: number | string;
  longTitle?: boolean | string;
}>(),{
  cols: 1,
  maxDepth: 2,
  longTitle: false
})
</script>

<template>
  <align
  justify="start"
  >
    <slot/>
    <template v-slot:content>
      <TableOfContents
        :columns="cols"
        :maxDepth="maxDepth"
        :longTitle="longTitle"
      />
    </template>
    <template v-slot:bottom>
      <slot name="bottom"/>
    </template>
  </align>
</template>
