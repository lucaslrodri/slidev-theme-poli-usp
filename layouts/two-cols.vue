<script setup lang="ts">
import cols from './cols.vue';

defineProps<{
  contentClass?: string;
  layoutClass?: string;
  divider?: boolean | string;
  align?: 'start' | 'center' | 'end' | 'stretch'
}>()
</script>

<template>
  <cols
    :content-class="contentClass"
    :layout-class="layoutClass"
    :divider="divider"
    :align="align"
  >
    <slot/>
    <template v-slot:left>
      <slot name="left"/>
    </template>
    <template v-slot:right>
      <slot name="right"/>
    </template>
  </cols>
</template>