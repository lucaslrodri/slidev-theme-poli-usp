<script setup lang="ts">
import align from './align.vue';

defineProps({
  contentClass: {
    type: String
  },
  layoutClass: {
    type: String
  }
})
</script>

<template>
  <align
    :content-class="contentClass"
    :layout-class="layoutClass"
    justify="stretch"
  >
    <slot/>
    <template v-slot:content>
      <slot name="content"/>
    </template>
    <template v-slot:bottom>
      <slot name="bottom"/>
    </template>
  </align>
</template>