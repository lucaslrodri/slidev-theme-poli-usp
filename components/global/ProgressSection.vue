<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  state: "completed" | "current-completed" | "current" | "not-started" | "last-not-started" | "last";
}>()

const bg = computed(() => (
    props.state.includes("not-started") ? 'bg-grays-150' : 'bg-primary'
))

const textColor = computed(() => {
    if (props.state.includes("not-started")){
        return 'text-grays-300 font-300'
    }else if (props.state === 'current'){
        return 'text-primary-700 font-400'
    }else{
        return 'text-grays-700'
    }
})
</script>

<template>
    <div class="flex gap-2 items-start group flex-1 relative">
        <div  
            :class="bg"
            class="flex-none size-6 rounded-full text-white flex items-center justify-center transition"
        >
            <mdi-check-bold class="size-4" v-if="state==='completed'"/>
            <material-symbols-star class="size-4" v-else-if="state.includes('last')"/>
            <div class="bg-white size-2.7 rounded-full" v-else/>
        </div>
        <div class="-z-10 group-hover:bg-gray-200/50 left-4 right--2 absolute h-full"/>
        <span class="text-base flex-1 opacity-80 group-hover:opacity-100" :class="textColor"><slot/></span>
    </div>
</template>