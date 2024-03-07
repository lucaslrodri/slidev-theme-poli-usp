<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    s?: string;
}>()

const labels = computed(() => {
    if (props.s.includes('|')){
        return props.s.split('|').map(item => item.trim())
    }else{
        return [props.s]
    }
})

</script>

<template>
    <caption><Label v-if="labels.length > 1" class="border-r-0">{{ labels[0] }}</Label>{{ labels[labels.length-1] }}<slot v-if="!s"/></caption>
</template>