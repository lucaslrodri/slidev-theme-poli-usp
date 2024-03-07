<script setup lang="ts">
import { computed } from 'vue';

import { configs } from '@slidev/client/env.ts'

import InfoBar from './components/global/InfoBar.vue';
import Logo from './components/global/Logo.vue';
import Progress from './components/global/Progress.vue';

</script>

<template>
    <aside
        class="absolute inset-y-0 left-0 w-16% shadow-[1px_0px_0px_0px_rgba(80,82,83,0.2)] flex flex-col items-center justify-stretch bg-white"
    >
    <Logo/>
    <Progress/>
    </aside>

    <footer
        class="absolute inset-y-0 right-0 w-5% bg-primary shadow-[0px_0px_0px_1px_rgba(0,149,173,0.8)] text-white flex flex-col items-center justify-stretch gap-3 py-3"
    >
    <InfoBar/>
    </footer>
</template>