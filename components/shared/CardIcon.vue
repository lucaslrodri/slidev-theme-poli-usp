<script setup lang="ts">
withDefaults(defineProps<{
    icon?: null | "note" | "tip" | "important" | "warning" | "quote";
}>(),{icon: null});
</script>

<template>
    <mdi-pencil-circle class="icon" v-if="icon==='note'"/>
    <mdi-lightbulb-on class="icon" v-else-if="icon==='tip'"/>
    <mdi-alert-rhombus class="icon" v-else-if="icon==='important'"/>
    <mdi-alert-decagram class="icon" v-else-if="icon==='warning'"/>
    <mdi-comment-quote class="icon" v-else-if="icon==='quote'"/>
</template>