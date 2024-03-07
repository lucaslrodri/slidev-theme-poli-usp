<script setup lang="ts">
import LogoPoli from './LogoPoli.vue';

import { toggleOverview, fullscreen } from '../../node_modules/@slidev/client/state/index.ts'
import { configs } from '@slidev/client/env.ts'
import { currentPage, total } from '@slidev/client/logic/nav.ts'

const { toggle: toggleFullscreen } = fullscreen

declare module '@slidev/types' {
    interface SlidevConfig {
        title: string;
        author?: string;
        year?: string | number;
        email?: string;
        departament?: string;
        school?: string;
        maxTime?: string | number;
        progressMaxDepth?: string | number;
    }
}

const author = configs.author || 'Unknown author'
const school = configs.school || 'Escola Politécnica'
</script>

<template>
    <div class="border-1.2 border-white rounded-full size-10 flex justify-center items-center cursor-pointer select-none"
        @click="toggleFullscreen" title="Toggle fullscreen"
    >
        <LogoPoli class="h-8"/>
    </div>
    <p class="text-xs font-300 vertical-lr">{{ school }}</p>
    <div class="flex items-end flex-1">
        <p class="text-xs font-300 vertical-lr">{{ author }}</p>
    </div>
    <div
        class="flex flex-col justify-center items-center group px-2 rounded-md transition cursor-pointer relative overflow-hidden"
        @click="() => toggleOverview()" title="Show slide overview">
        <p class="text-xl py-1">{{ currentPage }}</p>
        <div class="w-full border border-white z-10" />
        <p class="text-xl py-1">{{ total }}</p>
        <div class="group-hover:bg-white/20 absolute inset-0 transition"/>
    </div>
</template>

<style scoped>
.vertical-lr{
    writing-mode: vertical-lr;-webkit-writing-mode: vertical-lr;-ms-writing-mode: vertical-lr;
}
</style>