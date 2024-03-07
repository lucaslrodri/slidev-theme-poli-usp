<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
    state: "completed" | "current-completed" | "current" | "not-started" | "last-not-started" | "last";
}>()

const textColor = computed(() => {
    if (props.state.includes("not-started")){
        return 'text-grays-300 font-300'
    }else if (props.state === 'current'){
        return 'text-primary-700'
    }else{
        return 'text-grays-700'
    }
})
</script>

<template>
    <div class="flex gap-1 items-start group flex-1 relative">
        <div class="flex-none size-1 bg-white rounded-full ml-2.5 my-2"/>
        <div class="-z-10 group-hover:bg-gray-200/50 left-4 right--2 absolute h-full"/>
        <span class="text-sm transition ml-1 flex-1 opacity-80 group-hover:opacity-100" :class="textColor"><slot/></span>
    </div>
</template>