<script setup lang="ts">
import { computed, ref, onBeforeUpdate, onBeforeUnmount, watchEffect } from "vue";

import { currentPage, go } from '@slidev/client/logic/nav.ts';
import { configs } from '@slidev/client/env.ts';

import useTree from "../../composables/useTree.ts";

import type { TocItem } from '@slidev/types';

import Section from './ProgressSection.vue';
import Subsection from './ProgressSubSection.vue';

const maxDepth = computed(()=>{
    return (configs.progressMaxDepth === 1) ? 1 : 2;
})
const tree = computed(() => useTree(maxDepth.value))

const itemsRefs = ref<HTMLLIElement[]>([])
const itemsDistances = computed(() => itemsRefs.value.map(el => el.offsetTop+6))

const progressHeight = computed(() => {
    for (let i = 0; i < tree.value.length; i++) {
        if (tree.value[i].level > 1 && (tree.value[i].active || tree.value[i].activeParent)) {
            return itemsDistances.value[i]
        } else if (tree.value[i].active) {
            return itemsDistances.value[i]
        }
    }
    return 0
})

const itemState = (item: TocItem) => {
    const last = item.path === tree.value[tree.value.length - 1].path
    if (last){
        return item.active || item.activeParent ? 'last' : 'last-not-started'
    }
    if (currentPage.value > Number(item.path) && !item.active){
        return item.activeParent && item.level < maxDepth.value ? 'current-completed' : 'completed'
    }
    if (item.activeParent){
        return item.active || item.activeParent ? 'current' : 'not-started'
    }
    return item.active ? 'current' : 'not-started'
}

const counter = ref(null);
const position = ref<number>(0);
const maxTime = computed(()=>{
    if (configs.maxTime){
        const time = Number(configs.maxTime)
        return (time < 0) ? 0 : time;
    }
    return 10;
})

const topEl = ref<HTMLDivElement | null>(null);
watchEffect(()=>{
    const targetIndex = progressHeight.value > 0 ? (itemsDistances.value.findIndex((distance)=>(
        progressHeight.value == distance
    ))) : 0;
    if (targetIndex){
        if (targetIndex > 5){
            itemsRefs.value[targetIndex - 4]?.scrollIntoView({ behavior: 'smooth', });
        }else{
            topEl.value?.scrollIntoView({ behavior: 'smooth', });
        }
    }
})

onBeforeUpdate(() => {
    //reset na primeira página
    if (currentPage.value === 1){
        position.value = 0;
        if(counter.value){
            clearInterval(counter.value);
            counter.value = null;
        }
    }
    //Contador ativo (Faça nada)
    if (counter.value) {
      return;
    }
    counter.value = setInterval(() => {
        const maxDistance = itemsDistances.value[itemsDistances.value.length-1] - itemsDistances.value[0];
        const speed = maxDistance/(maxTime.value * 60 * 10);
        if (position.value < maxDistance){
            position.value += speed;
        }
    }, 100) //update 100ms
})
onBeforeUnmount(() => {
    clearInterval(counter.value);
    counter.value = null;
})
</script>

<template>
    <div class="absolute w-full top-24 h-6 z-20 bg-gradient-linear from-white from-0% to-transparent"/>
    <div class="absolute w-full bottom-0 h-6 z-20 bg-gradient-linear from-transparent from-0% to-white"/>
    <div class="flex-1 flex items-start w-full overflow-y-auto relative py-4"
        style="scrollbar-width: none;"
    >
        <nav class="relative mx-2 w-full">
            <div class="absolute -top-4 w-full h-0.5" ref="topEl"/>
            <ul class="flex flex-col relative w-full">
                <li v-for="item, index in tree" ref="itemsRefs" :key="index" class="z-10">
                    <a class="flex py-0.5 items-start cursor-pointer"
                    @click="() => go(item.path)"
                    >                        
                        <Section v-if="item.level === 1" :state="itemState(item)">{{ item.title }}</Section>
                        <Subsection v-else :state="itemState(item)">{{ item.title }}</Subsection>
                    </a>
                </li>
            </ul>
            <div class="absolute top-2.5 left-1.5 w-3" v-if="maxTime>0" >
                <div class="bg-secondary-400 w-full transition-all" :style="{ height: `${position}px` }"/>
                <div class="bg-gradient-linear from-secondary-400 to-transparent w-full h-2 transition"/>
            </div>
            <div class="absolute top-2.5 left-2 bg-grays-150 flex flex-col w-2" style="height: calc(100% - 1.25rem)">
                <div class="bg-primary w-full transition-all" :style="{ height: `${progressHeight}px` }" />
                <div class="bg-gradient-linear from-primary to-grays-150 w-full h-1 transition" />
            </div>
        </nav>
    </div>
</template>