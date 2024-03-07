<script setup lang="ts">
const props = defineProps<{
    s?: string; 
    class?: string;
}>()
</script>

<template>
    <span class="shadow-[1px_0px_0px_0px_rgba(80,82,83,0.2)] border-r border-grays-100 pr-1 mr-1 font-bold" :class="[props.class]">{{ s }}<slot v-if="!s"/></span>
</template>