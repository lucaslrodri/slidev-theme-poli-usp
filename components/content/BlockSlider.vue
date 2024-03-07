<script setup lang="ts">
    import { inject, toRef, computed, ref, onMounted } from 'vue';
    import { injectionClicksContext } from '@slidev/client/constants.ts';
    import { clicksTotal } from '@slidev/client/logic/nav.ts';

    const props = withDefaults(defineProps<{
        progress?: boolean | string;
        start?: string | number;
    }>(), {
        progress: false,
        start: 0
    })

    const clicks = toRef(inject(injectionClicksContext).value,'current');
    const container = ref<HTMLDivElement | null>(null);
    const maxClicks = ref(0);
    onMounted(()=>{
        maxClicks.value = Math.min(Number(clicksTotal.value), container.value.children.length - 1);
    })
    
    const currentClick = computed(()=>{
        const currentClick = Number(clicks.value) - Number(props.start);
        return Math.min(currentClick, maxClicks.value)
    }) 

    const clicksIndices = computed(() => {
        let a:number[] = []
        for (let i = 0; i <= maxClicks.value; i++){
            a.push(i);
        }
        return a;
    });
</script>

<template>
    <div class="overflow-hidden rounded-xl flex flex-col justify-center">
        <blockquote class="slider-card">
            <div 
            class="text-nowrap transition duration-300 w-full slider-container"  
            :class="'leading-0'"
            :style="{transform: `translate(-${currentClick * 100}%)`}"
            ref="container"
            >
                <slot/>
            </div>
        </blockquote>
        <div class="flex flex-row justify-evenly items-center mt-4" v-if="maxClicks>0 && progress">
            <div class="flex flex-row justify-center items-center gap-4 rounded-lg">
                <template v-for="clickIndex in clicksIndices" :key="clickIndex">
                    <mdi-radio-button-unchecked v-if="currentClick !== clickIndex"/>
                    <mdi-radio-button-checked v-else/>
                </template>
            </div>
        </div>
    </div>
</template>

<style>
.slider-container > *{
    @apply inline-flex flex-row items-center justify-center whitespace-normal;
}
</style>
