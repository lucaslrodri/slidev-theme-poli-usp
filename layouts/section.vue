<script setup lang="ts">
import { useSlots } from 'vue';
const slots = Object.keys(useSlots()).filter((slot) => slot !== 'default');

withDefaults(defineProps<{
    width?: string | number
}>(),{
    width: 0.85
})
</script>

<template>
    <div 
        class="slidev-layout section grid content-center items-center"
        :class="slots? 'grid-cols-2' : ''"
        :style="{'grid-template-columns': `minmax(0, 1fr) minmax(0, ${width}fr)`}"
    >
        <div>
            <slot/>
        </div>
        <slot name="cover"/>
    </div>
</template>