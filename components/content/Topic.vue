<script setup lang="ts">
import Icon from '../shared/CardIcon.vue';

withDefaults(defineProps<{
    color?: "default" | "primary" | "secondary" | "danger" | "safe" | "gray";
    title?: string | null;
    icon?: null | "note" | "tip" | "important" | "warning" | "quote";
    notEmph?: boolean | string;
    centering?: boolean | string;
}>(), {
    title: null,
    color: "default",
    icon: null,
    notEmph: false,
    centering: false
})
</script>

<template>
    <blockquote
        class="shadow p-3 my-4 overflow-hidden topic"
        :class="[{'active': !notEmph, 'centering': centering}, color]"
    >
        <template v-if="icon && title">
            <div class="flex flex-row items-center">
                <Icon :icon="icon" class="mr-2 size-6 mt-1.5" size="medium"/>
                <h5 v-if="title" class="align-middle">{{ title }}</h5>
            </div>
            <slot/>
        </template>
        <div v-else-if="icon" class="flex flex-row items-center gap-2">
            <Icon :icon="icon"/>
            <div>
                <h4 v-if="title">{{ title }}</h4>
                <slot/>
            </div>
        </div>
        <template v-else>
            <h4 v-if="title">{{ title }}</h4>
            <slot/>
        </template>
    </blockquote>
</template>