<script setup lang="ts">
import align from './align.vue'

defineProps<{
  contentClass?: string;
  layoutClass?: string;
}>()
</script>

<template>
    <align
        align="start"
        justify="stretch"
        :contentClass="contentClass"
        :layoutClass="layoutClass"
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