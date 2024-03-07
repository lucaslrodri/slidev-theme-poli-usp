<script setup lang="ts">
import Marker from './Marker.vue';

withDefaults(defineProps<{
    color?: "default" | "primary" | "secondary" | "danger" | "safe" | "gray";
    bold?: boolean | string;
    s?: string | null;
    animated?: boolean | string;
}>(), {
    color: "default",
    bold: false,
    s: null,
    animated: false
})
</script>

<template>
    <Marker 
        v-if="s" 
        mode="underline"
        :color="color" :bold="bold" :animated="animated"
    >{{ s }}</Marker>
</template>